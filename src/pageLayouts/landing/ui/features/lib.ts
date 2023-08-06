import creditCardIcon from '../shared/assets/credit-card.svg';
import truckIcon from '../shared/assets/truck.svg';
import handshakeIcon from '../shared/assets/handshake-slash.svg';
import moneyCheckIcon from '../shared/assets/money-check.svg';
import receiptIcon from '../shared/assets/receipt.svg';
import { CardProps } from '../shared/card';

export const FEATURES: CardProps[] = [
  {
    id: 1,
    img: creditCardIcon,
    title: 'Отключение оплат',
    description: `Большинство крупнейших
    российских банков 
    отключены от возможностей оплат 
    в общепринятых валютах`,
  },
  {
    id: 2,
    img: truckIcon,
    title: 'Проблемы с экспортом',
    description: `Основные потребители российских 
    экспортных товаров не готовы 
    платить на компании 
    с российским участием`,
  },
  {
    id: 3,
    img: handshakeIcon,
    title: 'Отказ от сотрудничества',
    description: `Главные поставщики российского 
    импорта не готовы принимать 
    платежи от компаний 
    с российским участием`,
  },
  {
    id: 4,
    img: moneyCheckIcon,
    title: 'Сложности с проходимостью платежей',
    description: `Платежи через торговые 
    дома дружественных юрисдикций не могут в полной мере (сроки, лимиты, банковский комплаенс) обеспечить проходимость платежей в одну и другую сторону.`,
  },
  {
    id: 5,
    img: receiptIcon,
    title: 'Ужесточение санкций',
    description: `Ужесточение контроля иностранных регуляторов и санкции приведут к полной невозможности банковских трансграничных платежей`,
  },
];
