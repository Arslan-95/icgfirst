'use client';

import Button from '../../button/button';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './submit-button.module.scss';

type SubmitButtonProps = {
  onClick?: () => void;
};

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  if (!onClick) {
    return (
      <ScrollLink
        to="form-screen"
        smooth
        duration={500}
        className={styles.link}
      >
        <Button
          variant="primary"
          size="medium"
          type="submit"
          onClick={onClick}
          className={styles.button}
        >
          Оставить заявку
        </Button>
      </ScrollLink>
    );
  }

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
