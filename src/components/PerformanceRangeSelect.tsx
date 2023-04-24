import styled from '@emotion/styled';
import { cx } from '@emotion/css';
import { useSelect } from 'downshift';
import {
  PerformanceRange,
  performanceRanges,
  usePerformanceRange,
} from '../context/performance-range-context';
import Button from './Button';
import IconCheck from './icons/IconCheck';
import IconChevron from './icons/IconChevron';
import IconInfo from './icons/IconInfo';

const PerformanceRangeSelectStyles = styled.div`
  position: relative;

  label {
    cursor: pointer;
    color: var(--grey-3);
    font-size: 0.8125rem;
  }

  button {
    margin-left: 0.5rem;
  }

  ul {
    position: absolute;
    right: 0;
    top: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 0.875rem;
    gap: 0.25rem;
    background: var(--white);
    padding: 0.75rem;
    list-style: none;
    min-width: 14.0625rem;
    border: 1px solid var(--grey-2);
    border-radius: 12px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
  }

  .icon-info {
    margin-left: 0.5rem;
  }

  .btn-icon {
    transition: all 0.2s ease-in-out;
    margin-left: 0.75rem;
  }
  .btn-icon-rotate {
    transform: rotate(180deg);
  }

  li {
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .highlighted-item {
    background: var(--grey-1);
  }
`;

function itemToString(item: PerformanceRange | null) {
  return item ? item.textLong : '';
}

function PerformanceRangeSelect() {
  const { performanceRange, setPerformanceRange } = usePerformanceRange();

  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    onSelectedItemChange: (changes) => {
      changes.selectedItem && setPerformanceRange(changes.selectedItem);
    },
    items: performanceRanges,
    itemToString,
    defaultSelectedItem: performanceRange,
  });

  return (
    <PerformanceRangeSelectStyles>
      <label {...getLabelProps()}>
        Performance Range
        <IconInfo className="icon-info" width="10" height="10"></IconInfo>
      </label>
      <Button border {...getToggleButtonProps()}>
        <span>{selectedItem ? selectedItem.textShort : 'Select'}</span>
        <IconChevron
          className={cx({ 'btn-icon': true }, { 'btn-icon-rotate': isOpen })}
          width="20"
          height="20"
        ></IconChevron>
      </Button>

      <ul {...getMenuProps()} style={{ display: isOpen ? 'initial' : 'none' }}>
        {isOpen &&
          performanceRanges.map((item, index) => (
            <li
              className={cx({ 'highlighted-item': highlightedIndex === index })}
              key={`${item.key}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.textLong}</span>
              {selectedItem === item && (
                <span>
                  <IconCheck width="16" height="16"></IconCheck>
                </span>
              )}
            </li>
          ))}
      </ul>
    </PerformanceRangeSelectStyles>
  );
}

export default PerformanceRangeSelect;
