import React, { FC, useMemo, useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { prices } from '../../data'
import { CheckboxForCalc } from './CheckboxForCalc'
import { SelectForCalc } from './SelectForCalc'
import { TextFieldForCalc } from './TextFieldForCalc'
import { uniqueId } from 'lodash'

type Props = {

}
type stateType = {
  countRunes: number,
  premium?: boolean,
  priceNormalItem: string,
  priceOneRune: string,
  priceUpgradeItem: string,
}

interface IFormInputs {
  premium?: boolean,
  priceNormalItem: string,
  priceUpgradeItem: string,
  priceOneRune: string,
  countRunes: number,
}

export const SimpleFormCalculation: FC<Props> = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>()
  const [state, setState] = useState<stateType | null>(null)
  const [profit, setProfit] = useState<number | null>(null)

  const onSubmit = (data:IFormInputs) => {
    console.log(data)
    setState(data)
  }

  console.log('state: ', state)

  const generateProfit = useMemo(() => {
    if (!state) return '--'

    const priceAllRunes = Number(state.countRunes) * Number(state.priceOneRune)
    const ourPriceUpgradeItem = priceAllRunes + Number(state.priceNormalItem)
    const result = (Number(state.priceUpgradeItem) - ourPriceUpgradeItem) * 0.955

    return setProfit(Number((result.toFixed(2))))
  }, [state])

  return (
    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {/* header */}
        <Typography sx={{ mt: 1, fontSize: 18, fontWeight: 700, color: 'grey' }}>
          Simple Calculation for barygas
        </Typography>

        {/* body */}
        {
          prices.map((el) => {
            if (el.name === 'premium') {
              return (
                <CheckboxForCalc
                  key={uniqueId(`key_${el.name}_`)}
                  name={el.name}
                  value={el.premium}
                  control={control}
                />
              )
            }

            if (el.name === 'countRunes') {
              return (
                <SelectForCalc
                  key={uniqueId(`key_${el.name}_`)}
                  name={el.name}
                  control={control}
                  label={el.label}
                />
              )
            }

            return (
              <TextFieldForCalc
                key={uniqueId(`key_${el.name}_`)}
                name={el.name}
                control={control}
                label={el.label}
              />
            )
          })
        }

        <Container sx={{ mt: 1 }}>
          <Button sx={{ mr: 1 }} type="submit" variant="contained" color="primary">
            Calculate
          </Button>
          <Button
            variant="contained"
            // onClick={() => setState(null)}
            onClick={() => reset}
            type="button"
            disabled={state === null}
          >
            Reset
          </Button>
        </Container>

        {/* footer */}
        <Typography sx={{ mt: 1 }}>
          Your Profit:
          <span style={{ color: `${(profit === null || profit < 0) ? 'red' : 'green'}`, marginLeft: 6 }}>
            {profit}
          </span>
        </Typography>
      </form>
    </div>
  )
}
