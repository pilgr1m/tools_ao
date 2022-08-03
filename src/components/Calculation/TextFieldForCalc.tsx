import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { FormHelperText, TextField } from '@mui/material'
import { uniqueId } from 'lodash'

type Props = {
  key: string,
  name: string,
  control: any,
  label: string,

}

export const TextFieldForCalc: FC<Props> = ({
  key,
  name,
  control,
  label,
}) => {
  const a = 1

  return (
    <>
      <Controller
        key={key}
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <FormHelperText sx={{ color: '#1976d2' }}>{label}</FormHelperText>
            <TextField
              type="number"
              // label={label}
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          </>

        )}
        rules={{ required: 'Required' }}
      />
    </>
  )
}
