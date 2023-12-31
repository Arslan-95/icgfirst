import React from 'react';
import Link from 'next/link';
import IconButton from '../../icon-button/icon-button';
import { SocialButtonProps, TELEGRAM_LINK } from '../lib';
import icon from '../../assets/telegram-icon.svg';

const TelegramButton = ({ size }: SocialButtonProps) => {
  return (
    <Link href={TELEGRAM_LINK}>
      <IconButton src={icon} size={size} />
    </Link>
  );
};

export default TelegramButton;
