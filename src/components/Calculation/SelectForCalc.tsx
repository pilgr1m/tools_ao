import React, { FC } from 'react'
import { FormHelperText, MenuItem, Select } from '@mui/material'
import { runesByItem } from '../../data'
import { Controller } from 'react-hook-form'
import { uniqueId } from 'lodash'

// TODO fix any
type Props = {
  key: string,
  name: string,
  control: any,
  label: string,
}

export const SelectForCalc: FC<Props> = ({
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
        defaultValue={null}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <FormHelperText>{label} <span>({value})</span></FormHelperText>
            <Select
              onChange={onChange}
              error={!!error}
            >
              {
                runesByItem.map((item) => (
                  <MenuItem key={item.label} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))
              }
            </Select>
          </>
        )}
        rules={{ required: 'Required' }}
      />
    </>
  )
}
