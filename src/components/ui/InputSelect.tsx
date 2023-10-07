import { FormControl, InputLabel, Select } from '@mui/material';
import React, { FC } from 'react'
import { IInputSelect } from './types';

const InputSelect: FC<IInputSelect> = ({ children }) => {
  return (
    <FormControl fullWidth>
      <Select
        defaultValue={1}
      >
        {children}
      </Select>
    </FormControl>
  )
}

export default InputSelect;