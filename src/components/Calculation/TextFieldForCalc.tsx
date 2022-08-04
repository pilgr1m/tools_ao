import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Container, FormHelperText, TextField } from '@mui/material'

type Props = {
  name: string,
  control: any,
  label: string,
}

export const TextFieldForCalc: FC<Props> = ({
  name,
  control,
  label,
}) => {
  const a = 1

  return (
    <>
      <Container sx={{ height: 80 }}>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <FormHelperText sx={{ color: '#1976d2', mt: 1.5 }}>{label}</FormHelperText>
              <TextField
                size="small"
                type="number"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </>

          )}
          rules={{
            required: '* Невірне значення',
            min: { value: 1, message: '* Мін.1' },
            max: { value: 1_000_000_000, message: '* Макс. 1мрд' },
          }}
        />
      </Container>
    </>
  )
}
