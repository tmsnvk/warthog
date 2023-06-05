import styled from 'styled-components';
import { SelectInputType } from './SelectInput.types';

const setSize = ($size: string) => {
  switch ($size) {
    case 'short':
      return '30rem';

    default:
      return '40rem';
  }
};

const SelectInput = styled.select<SelectInputType>`
  width: ${({ $size }) => setSize($size)};
  height: 6rem;
  padding: 0 0 0 2.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colorBackground.secondary};
  border: 0.3rem ${({ theme, $isError }) => $isError ? theme.color.error : theme.colorBackground.tertiary} solid;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
  }

  &:focus {
    outline: ${({ theme }) => theme.colorBackground.secondary};
  }
`;

export default SelectInput;
