import {
  useState,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from 'react';

import { Stack, IconButton, Chip } from '@mui/material';
import { FaCirclePlus } from 'react-icons/fa6';

import Input from '@/components/common/Input';

import * as S from './style';
import { RuleItems } from '..';

interface RuleCreateItemBoxProps {
  enabled: boolean;
  items: RuleItems;
  setItems: Dispatch<SetStateAction<RuleItems>>;
}

const RuleCreateItemBox = ({
  enabled,
  items,
  setItems,
}: RuleCreateItemBoxProps) => {
  const [itemName, setItemName] = useState('');

  const itemType = enabled ? 'enabled' : 'disabled';
  const color = enabled ? 'success' : 'error';

  const handleChangeItemName = (event: ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const handleAddItem = () => {
    setItems((prev) => ({
      ...prev,
      [itemType]: [...prev[itemType], itemName],
    }));

    setItemName('');
  };

  const handleDeleteItem = (deletedIndex: number) => {
    setItems((prev) => ({
      ...prev,
      [itemType]: prev[itemType].filter((_, index) => index !== deletedIndex),
    }));
  };

  return (
    <S.ItemBox>
      <S.ItemTitle color={enabled ? 'success.main' : 'error.main'}>
        {enabled ? '가능' : '불가능'}
      </S.ItemTitle>

      <Stack direction="row" alignItems="center" justifyContent="center" p={1}>
        <Input
          value={itemName}
          placeholder={`사용 ${
            enabled ? '가능' : '불가능'
          }한 아이템을 입력하세요`}
          onChange={handleChangeItemName}
          color={color}
          variant="standard"
          sx={{ width: '14rem', '& .MuiInputBase-adornedEnd': { pr: 1 } }}
        />
        <IconButton
          color={color}
          disabled={!itemName.trim().length}
          onClick={handleAddItem}
        >
          <FaCirclePlus />
        </IconButton>
      </Stack>

      <Stack direction="row" useFlexGap={true} gap={1} flexWrap="wrap">
        {items[itemType].map((item, index) => (
          <Chip
            key={`${item}-${index}`}
            label={item}
            color={color}
            onDelete={() => handleDeleteItem(index)}
          />
        ))}
      </Stack>
    </S.ItemBox>
  );
};

export default RuleCreateItemBox;
