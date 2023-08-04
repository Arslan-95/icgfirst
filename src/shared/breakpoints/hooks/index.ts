import { useContext, useEffect, useState } from 'react';
import { BreakpointKeys, Breakpoints } from '../lib';
import { AppContext } from '@/shared/app-provider';

export const useInitAdaptive = () => {
  const [adaptive, setAdaptive] = useState<BreakpointKeys>('xl');

  const updateAdaptive = () => {
    const windowWidth = window.innerWidth;
    let newAdaptivePoint: BreakpointKeys = 'xl';

    if (windowWidth < Breakpoints.sm) {
      newAdaptivePoint = 'xs';
    } else if (windowWidth < Breakpoints.md) {
      newAdaptivePoint = 'sm';
    } else if (windowWidth < Breakpoints.lg) {
      newAdaptivePoint = 'md';
    } else if (windowWidth < Breakpoints.xl) {
      newAdaptivePoint = 'lg';
    } else {
      newAdaptivePoint = 'xl';
    }

    setAdaptive(newAdaptivePoint);
  };

  useEffect(() => {
    updateAdaptive();
    window.addEventListener('resize', updateAdaptive);

    return () => {
      window.removeEventListener('resize', updateAdaptive);
    };
  }, []);

  return { adaptive };
};

export const useAdaptive = () => {
  const { adaptive } = useContext(AppContext);

  const isUp = (breakpoint: BreakpointKeys) => {
    return Breakpoints[adaptive] > Breakpoints[breakpoint];
  };

  const isDown = (breakpoint: BreakpointKeys) => {
    return Breakpoints[adaptive] < Breakpoints[breakpoint];
  };

  return { adaptive, isUp, isDown };
};
