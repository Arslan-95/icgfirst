import React from 'react';
import Link from 'next/link';
import IconButton from '../../icon-button/icon-button';
import { TELEGRAM_LINK } from '../lib';
import icon from '../../assets/whatsapp-icon.svg';

const WhatsappButton = () => {
  return (
    <Link href={TELEGRAM_LINK}>
      <IconButton src={icon} />
    </Link>
  );
};

export default WhatsappButton;
