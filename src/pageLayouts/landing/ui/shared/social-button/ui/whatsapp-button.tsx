import React from 'react';
import Link from 'next/link';
import IconButton from '../../icon-button/icon-button';
import { SocialButtonProps, TELEGRAM_LINK } from '../lib';
import icon from '../../assets/whatsapp-icon.svg';

const WhatsappButton = ({ size }: SocialButtonProps) => {
  return (
    <Link href={TELEGRAM_LINK} className={size}>
      <IconButton size={size} src={icon} />
    </Link>
  );
};

export default WhatsappButton;
