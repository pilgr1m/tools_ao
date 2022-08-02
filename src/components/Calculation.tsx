import React, { FC, useState } from 'react'
import Button from '@mui/material/Button'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

type Props = {

}

export const Calculation: FC<Props> = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <>
      <Button variant="contained">Calculation</Button>

      {/* select */}

      <FormControl required sx={{ m: 2, minWidth: 200, maxWidth: 200 }}>
        <InputLabel id="demo-simple-select-required-label">
          К-сть для зачарування
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={96}>Сумка/Тіло</MenuItem>
          <MenuItem value={48}>Голова/Ноги/Плащ/ЛіваРука</MenuItem>
          <MenuItem value={144}>ОдноручнаЗброя</MenuItem>
          <MenuItem value={192}>ДвуручнаЗброя</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

    </>
  )
}
