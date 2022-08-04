import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Checkbox, Container, FormControlLabel, Tooltip } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

// TODO fix any
type Props = {
  name: string,
  control: any,
}

export const CheckboxForCalc: FC<Props> = ({
  name,
  control,
}) => {
  const tooltipTittle = 'З Премом по ордеру на продаж -4,5%, без -7,5%'

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue
        render={({ field }) => (
          <Container sx={{ ml: 1, fontSize: 10 }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
              label="Premium"
              labelPlacement="end"
            />
            <Tooltip sx={{ ml: -2 }} title={tooltipTittle} placement="top">
              <InfoOutlinedIcon color="primary" />
            </Tooltip>
          </Container>

        )}
      />
    </>
  )
}
