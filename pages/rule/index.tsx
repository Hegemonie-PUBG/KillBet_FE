import { useState } from 'react';

import Button from '@/components/common/Button';
import RuleCreateModal from '@/components/rule/RuleCreateModal';

const RulePage = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };
  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  return (
    <>
      <Button onClick={handleOpenCreateModal}>새 룰 만들기</Button>
      <RuleCreateModal
        isOpen={isOpenCreateModal}
        handleClose={handleCloseCreateModal}
      />
    </>
  );
};

export default RulePage;
