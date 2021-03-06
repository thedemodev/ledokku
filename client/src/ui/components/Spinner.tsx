import React from 'react';
import cx from 'classnames';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size: 'small' | 'large';
  className?: string;
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1.5s linear infinite;
  border-top-color: #1a202c;
  transition-timing-function: linear;
`;

export const Spinner = ({ size, className, ...props }: SpinnerProps) => (
  <StyledSpinner
    {...props}
    className={cx(
      'rounded-full border-gray-200 ',
      {
        'border-8 border-t-8 h-24 w-24': size === 'large',
        'border-4 border-t-4 h-8 w-8': size === 'small',
      },
      className
    )}
  />
);
