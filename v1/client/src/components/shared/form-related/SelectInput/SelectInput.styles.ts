import styled from 'styled-components';
import { SelectInputType } from './SelectInput.types';

const setSize = ($size: string) => {
  switch ($size) {
    case 'short':
      return '25rem';

    default:
      return '35rem';
  }
};

const SelectInput = styled.select<SelectInputType>`
  width: ${({ $size }) => setSize($size)};
  border: 0.1rem solid ${({ theme, $isError }) => $isError ? theme.color.error : theme.colorBackground.secondary};

  &:hover {
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
  }

  &:focus {
    outline: ${({ theme }) => theme.colorBackground.secondary};
  }
`;

export default SelectInput;
