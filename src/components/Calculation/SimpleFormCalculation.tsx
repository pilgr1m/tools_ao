import React, { FC, Fragment, useEffect, useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { countRunes, premium, prices } from '../../data'
import { CheckboxForCalc } from './CheckboxForCalc'
import { SelectForCalc } from './SelectForCalc'
import { TextFieldForCalc } from './TextFieldForCalc'
import { isEmpty, uniqueId } from 'lodash'

type Props = {

}
type stateType = {
  countRunes: number,
  premium: boolean,
  priceNormalItem: number,
  priceUpgradeItem: number,
  priceOneRune: number,
}

export const SimpleFormCalculation: FC<Props> = () => {
  const { handleSubmit, control, reset, formState } = useForm<stateType>()
  const [state, setState] = useState<stateType | null>(null)
  const [profit, setProfit] = useState<number | null>(null)

  const onSubmit = (data:stateType) => {
    console.log(data)

    const updatedData = {
      ...data,
      priceNormalItem: Number(data.priceNormalItem),
      priceUpgradeItem: Number(data.priceUpgradeItem),
      priceOneRune: Number(data.priceOneRune),
    }

    setState(updatedData)
  }

  // const generateProfit = useMemo(() => {
  //   if (!state) return '--'
  //
  //   const priceAllRunes = Number(state.countRunes) * Number(state.priceOneRune)
  //   const ourPriceUpgradeItem = priceAllRunes + Number(state.priceNormalItem)
  //   const result = (Number(state.priceUpgradeItem) - ourPriceUpgradeItem) * 0.955
  //
  //   return setProfit(Number((result.toFixed(2))))
  // }, [state])

  const generateProfit = () => {
    if (!state) return null
    const percent = state.premium ? 0.955 : 0.925
    const priceAllRunes = state.countRunes * state.priceOneRune
    const ourPriceUpgradeItem = priceAllRunes + state.priceNormalItem
    const result = Math.floor((state.priceUpgradeItem - ourPriceUpgradeItem) * percent)

    return setProfit(result)
  }

  useEffect(() => {
    generateProfit()
  }, [state])

  const handleReset = () => {
    setState(null)
    setProfit(null)

    reset({
      priceNormalItem: undefined,
      priceUpgradeItem: undefined,
      priceOneRune: undefined,
      countRunes: undefined,
    })
  }

  return (
    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {/* header */}
        <Typography sx={{ mt: 1, fontSize: 18, fontWeight: 700, color: 'grey' }}>
          Simple Calculation Profit
        </Typography>

        {/* body */}
        <CheckboxForCalc
          name={premium.name}
          control={control}
        />

        {
          prices.map((el) => (
            <Fragment key={uniqueId(`key_${el.name}_`)}>
              <TextFieldForCalc
                // key={uniqueId(`key_${el.name}_`)}
                name={el.name}
                control={control}
                label={el.label}
              />
            </Fragment>

          ))
        }
        <SelectForCalc
          name={countRunes.name}
          control={control}
          label={countRunes.label}
        />

        {/* footer */}
        <Container sx={{ mt: 2 }}>
          <Button
            sx={{ mr: 1 }}
            type="submit"
            variant="contained"
            color="primary"
            disabled={state === null && !isEmpty(formState.errors)}
          >
            Calculate
          </Button>

          <Button
            variant="contained"
            onClick={handleReset}
            type="button"
            disabled={state === null}
          >
            Reset
          </Button>
        </Container>

        <Typography sx={{ mt: 1 }}>
          <em>Your Profit: </em>
          <span style={{ color: `${(profit === null || profit < 0) ? 'red' : 'green'}`, marginLeft: 6 }}>
            {profit}
          </span>
        </Typography>
      </form>
    </div>
  )
}
