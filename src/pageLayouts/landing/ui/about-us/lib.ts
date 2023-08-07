import secureCreditCardIcon from '../shared/assets/secure-creditcard.svg';
import creditCardWithLinesIcon from '../shared/assets/creditcardwithlines.svg';
import textDocumentOutlinedIcon from '../shared/assets/text-document-outlined.svg';
import peopleTeamRegularIcon from '../shared/assets/people_team_regular.svg';
import { CardProps } from '../shared/card';

export const ABOUT_US_CARDS: CardProps[] = [
  {
    id: 1,
    img: secureCreditCardIcon,
    title: `Несём финансовую ответственность за сделки`,
    description: `По каждому платежу прописываем модель и зоны ответственнности всех участников сделки`,
  },
  {
    id: 2,
    img: creditCardWithLinesIcon,
    title: 'Только работающие схемы',
    description: `Согласованный механизм наполнения ликвидностью и схемы перемещения денежных потоков`,
  },
  {
    id: 3,
    img: textDocumentOutlinedIcon,
    title: 'Нам доверяют крупные контракты',
    description: `Опыт реализации крупных контрактов по импорту и экспорту товаров`,
  },
  {
    id: 4,
    img: peopleTeamRegularIcon,
    title: 'Команда профи',
    description: `Члены команды участвовали в разработке платёжных систем для Норникель, Сбер и ВЭБ.`,
  },
];
