import {
  performancePeriods,
  usePerformanceRange,
} from '../context/performance-range-context';

function PerformanceRangeSelect() {
  const { performanceRange, setPerformanceRange } = usePerformanceRange();

  function handlePerformancePeriodSelect(
    e: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const selectedPeriod = e.target.value;
    const selectedPeriodObj = performancePeriods.find(
      (period) => period.key === selectedPeriod,
    );
    if (selectedPeriodObj) {
      setPerformanceRange(selectedPeriodObj);
    }
  }
  return (
    <div>
      Performance Range <span>i</span>
      <select
        defaultValue={performanceRange.key}
        onChange={handlePerformancePeriodSelect}
        name="range"
        id="range"
      >
        {performancePeriods.map((period) => (
          <option key={period.key} value={period.key}>
            Last {period.textLong}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PerformanceRangeSelect;
