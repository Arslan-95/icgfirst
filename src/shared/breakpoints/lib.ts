export enum Breakpoints {
  xs = 0,
  sm = 600,
  md = 900,
  lg = 1200,
  xl = 1400,
}

export type BreakpointKeys = keyof typeof Breakpoints;
