import React from 'react';
import Link from 'next/link';
import { IconButton } from '@/shared/ui';
import { TELEGRAM_LINK } from '../lib';
import icon from '@/shared/ui/assets/telegram-icon.svg';

const TelegramButton = () => {
  return (
    <Link href={TELEGRAM_LINK}>
      <IconButton src={icon} />
    </Link>
  );
};

export default TelegramButton;
