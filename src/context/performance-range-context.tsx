import { PropsWithChildren, useState } from 'react';
import createContext from './createContext';

type PerformanceRangeKey = 1 | 7 | 30 | 90 | 180 | 365;

export type PerformanceRange = {
  textLong: string;
  textShort: string;
  key: PerformanceRangeKey;
};

export const performanceRanges: PerformanceRange[] = [
  { textLong: 'Last 24h', textShort: '24h', key: 1 },
  { textLong: 'Last 7 days', textShort: '7d', key: 7 },
  { textLong: 'Last 30 days', textShort: '30d', key: 30 },
  { textLong: 'Last 3 months', textShort: '3m', key: 90 },
  { textLong: 'Last 6 months', textShort: '6m', key: 180 },
  { textLong: 'Last Year', textShort: '1y', key: 365 },
];

const [usePerformanceRangeContext, Provider] = createContext<{
  performanceRange: PerformanceRange;
  setPerformanceRange: React.Dispatch<React.SetStateAction<PerformanceRange>>;
}>();

export function PerformanceRangeProvider({ children }: PropsWithChildren) {
  const [performanceRange, setPerformanceRange] = useState<PerformanceRange>(
    performanceRanges[0],
  );
  const value = {
    performanceRange,
    setPerformanceRange,
  };
  return <Provider value={value}>{children}</Provider>;
}

export const usePerformanceRange = usePerformanceRangeContext;
