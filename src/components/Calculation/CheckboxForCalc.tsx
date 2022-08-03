import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Checkbox, Container, FormControlLabel, IconButton, Tooltip } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

// TODO fix any
type Props = {
  key: string,
  name: string,
  value?: boolean
  control: any,
}

export const CheckboxForCalc: FC<Props> = ({
  key,
  name,
  value,
  control,
}) => {
  const tooltipTittle = 'З Премом по ордеру на продаж -4,5%, без -7,5%'

  return (
    <>
      <Controller
        key={key}
        name={name}
        control={control}
        render={({ field }) => (
          <Container sx={{ ml: 1 }}>
            <FormControlLabel
              control={(
                <>
                  {/* <Tooltip title={tooltipTittle} placement="top"> */}
                  {/*  <InfoOutlinedIcon color="primary" /> */}
                  {/* </Tooltip> */}
                  <Checkbox
                    value={value}
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />

                </>
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
