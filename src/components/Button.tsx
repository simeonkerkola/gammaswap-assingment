import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

type Props = {
  small?: boolean;
  large?: boolean;
  primary?: boolean;
  border?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const ButtonStyles = styled.button`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  padding: 0.5625rem 0.75rem;
  &.large {
    padding: 0.875rem 1rem;
  }

  color: var(--black);
  &.primary {
    color: var(--white);
  }

  background: var(--grey-1);
  border: 1px solid transparent;
  &.primary {
    background: var(--blue-2);
  }
  &.border {
    background: var(--white);
    border: 1px solid var(--grey-2);
  }

  &:hover:not(:disabled) {
    background: var(--grey-2);
    &.primary {
      background: var(--blue-1);
    }
    &.border {
      background: var(--grey-1);
    }
  }
  &:focus:not(:disabled),
  &:active:not(:disabled) {
    background: var(--grey-2);
    &.primary {
      background: var(--blue-3);
    }
    &.border {
      background: var(--grey-2);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .content {
    display: flex;
    align-items: center;
  }
`;

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  props,
  ref,
) {
  const classes = cx(
    { small: props.small },
    { large: props.large },
    { primary: props.primary },
    { border: props.border },
  );
  return (
    <ButtonStyles ref={ref} {...props} className={classes}>
      <div className="content">{props.children}</div>
    </ButtonStyles>
  );
});
export default Button;
