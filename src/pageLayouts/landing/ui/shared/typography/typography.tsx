import React, { PropsWithChildren } from 'react';
import style from './typography.module.scss';
import classnames from 'classnames';

type TypographyProps = PropsWithChildren<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}>;

const Typography = ({
  children,
  component: Component = 'p',
  className,
  size = 'md',
}: TypographyProps) => {
  return (
    <Component className={classnames(style.typography, size, className)}>
      {children}
    </Component>
  );
};

export default Typography;
