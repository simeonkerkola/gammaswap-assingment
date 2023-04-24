import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import createContext from './createContext';

type PerformancePeriodKey =
  | '24h'
  | '7-days'
  | '30-days'
  | '3-months'
  | '6-months'
  | 'year';

type PerformancePeriod = {
  textLong: string;
  textShort: string;
  key: PerformancePeriodKey;
};

export const performancePeriods: PerformancePeriod[] = [
  { textLong: '24h', textShort: '24h', key: '24h' },
  { textLong: '7 days', textShort: '7d', key: '7-days' },
  { textLong: '30 days', textShort: '30d', key: '30-days' },
  { textLong: '3 months', textShort: '3m', key: '3-months' },
  { textLong: '6 months', textShort: '6m', key: '6-months' },
  { textLong: 'Year', textShort: '1y', key: 'year' },
];

const [usePerformanceRangeContext, Provider] = createContext<{
  performanceRange: PerformancePeriod;
  setPerformanceRange: React.Dispatch<React.SetStateAction<PerformancePeriod>>;
}>();

export function PerformanceRangeProvider({ children }: PropsWithChildren) {
  const [performanceRange, setPerformanceRange] = useState<PerformancePeriod>(
    performancePeriods[0],
  );
  const value = {
    performanceRange,
    setPerformanceRange,
  };
  return <Provider value={value}>{children}</Provider>;
}

export const usePerformanceRange = usePerformanceRangeContext;
