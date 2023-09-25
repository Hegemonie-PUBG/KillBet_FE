import {
  MenuItem,
  Select as MuiSelect,
  type SelectProps as MuiSelectProps,
} from '@mui/material';

interface SelectProps extends MuiSelectProps {
  options: {
    value: string | number | readonly string[] | undefined;
    name?: string;
  }[];
}

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <MuiSelect {...props}>
      {options.map(({ value, name }, index) => (
        <MenuItem key={`${value}-${index}`} value={value}>
          {name ?? value}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;
