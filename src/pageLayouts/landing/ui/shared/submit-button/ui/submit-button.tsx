import Button from '../../button/button';
import React from 'react';

type SubmitButtonProps = {
  onClick?: () => void;
};

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <Button
      variant="primary"
      size="medium"
      type="submit"
      onClick={onClick}
      style={{
        maxWidth: '317px',
        width: '100%',
        textTransform: 'uppercase',
      }}
    >
      Оставить заявку
    </Button>
  );
};

export default SubmitButton;
