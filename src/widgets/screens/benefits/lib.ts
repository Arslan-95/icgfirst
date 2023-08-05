import moneyCheckDollarIcon from '@/shared/ui/assets/money-check-dollar.svg';
import barcodeIcon from '@/shared/ui/assets/barcode.svg';
import usersIcon from '@/shared/ui/assets/users.svg';
import checkDoubleIcon from '@/shared/ui/assets/check-double.svg';
import tagsIcon from '@/shared/ui/assets/tags.svg';
import { CardProps } from '@/shared/ui/card';

export const BENEFITS: CardProps[] = [
  {
    id: 1,
    img: moneyCheckDollarIcon,
    title: 'Оплата в любых валютах',
    description: `Оплата в рублях, либо в национальных (мягких) валютах на территории РФ с возможностью использования в схеме цифровых валют и настройки платежа под ваши задачи`,
  },
  {
    id: 2,
    img: barcodeIcon,
    title: 'Несколько систем оплат',
    description: `Развитая международную сеть с использованием альтернативных систем оплат и честной комиссией за проведение сделок`,
  },
  {
    id: 3,
    img: usersIcon,
    title: 'Опытные специалисты',
    description: `Команда с многолетним опытом работы на международном рынке и предоставлением помощи в логистике, юридическом сопровождениии и страховании`,
  },
  {
    id: 4,
    img: checkDoubleIcon,
    title: 'Законные схемы',
    description: `Прозрачнаясхему для всех регуляторов и особые условия под объем`,
  },
  {
    id: 5,
    img: tagsIcon,
    title: 'Кредитование',
    description: `Возможность получить кредитование и покрытие разрыва платежа`,
  },
];
