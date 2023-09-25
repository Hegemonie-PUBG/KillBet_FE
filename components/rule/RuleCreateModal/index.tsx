import { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import Modal from '@/components/common/Modal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import * as S from './style';
import RuleCreateItemBox from './RuleCreateItemBox';

interface RuleCreateModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface RuleItems {
  enabled: string[];
  disabled: string[];
}

const RuleCreateModal = ({ isOpen, handleClose }: RuleCreateModalProps) => {
  const [items, setItems] = useState<RuleItems>({
    enabled: [],
    disabled: [],
  });

  return (
    <Modal
      isOpen={isOpen}
      modalTitle="새 룰 만들기"
      modalActions={<Button wide>등록</Button>}
      size="md"
      handleClose={handleClose}
    >
      <>
        <S.Label>룰 이름</S.Label>
        <Input fullWidth placeholder="룰 이름을 입력하세요 (5~30자)" />

        <S.Label>맵 & 도시</S.Label>
        <Typography variant="body2">맵은 매주 로테이션 됩니다.</Typography>

        <S.Label>아이템</S.Label>
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: '100%', '> .MuiBox-root': { flex: 1 } }}
        >
          <RuleCreateItemBox enabled items={items} setItems={setItems} />
          <RuleCreateItemBox
            enabled={false}
            items={items}
            setItems={setItems}
          />
        </Stack>

        <S.Label>킬 룰</S.Label>

        <S.Label>추가 설명</S.Label>
        <Input
          fullWidth
          multiline
          rows={4}
          placeholder="추가 설명을 자유롭게 입력하세요"
        />
      </>
    </Modal>
  );
};

export default RuleCreateModal;
