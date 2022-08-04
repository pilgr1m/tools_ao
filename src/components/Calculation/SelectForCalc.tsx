import React, { FC } from 'react'
import { Container, FormHelperText, MenuItem, Select } from '@mui/material'
import { runesByItem } from '../../data'
import { Controller } from 'react-hook-form'

// TODO fix any
type Props = {
  name: string,
  control: any,
  label: string,
}

export const SelectForCalc: FC<Props> = ({
  name,
  control,
  label,
}) => {
  const a = 1

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          console.log('error: ', error)

          return (
            <Container sx={{ mt: 1, minWidth: 223 }}>
              <FormHelperText sx={{ color: '#1976DB' }}>{label} (<b>{value}</b>)</FormHelperText>
              <Select
                sx={{ width: 223 }}
                size="small"
                onChange={onChange}
                error={!!error}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                {
                  runesByItem.map((item) => (
                    <MenuItem key={item.label} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))
                }
              </Select>
              <FormHelperText sx={{ ml: 1.5, color: '#D32F2F' }}>{error ? error.message : null}</FormHelperText>
            </Container>
          )
        }}
        rules={{ required: '* Виберіть значення' }}
      />

    </>
  )
}
