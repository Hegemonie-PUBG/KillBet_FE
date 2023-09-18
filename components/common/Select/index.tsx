import {
  MenuItem,
  Select as MuiSelect,
  type SelectProps as MuiSelectProps,
} from '@mui/material';

interface SelectProps extends MuiSelectProps {
  options: {
    value: any;
    name?: string;
  }[];
}

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <MuiSelect {...props}>
      {options.map(({ value, name }) => (
        <MenuItem value={value}>{name ?? value}</MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;
