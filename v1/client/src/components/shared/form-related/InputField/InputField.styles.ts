import styled from 'styled-components';
import { InputFieldTypes } from './InputField.types';

const setSize = ($size: string) => {
  switch ($size) {
    case 'short':
      return '25rem';

    default:
      return '35rem';
  }
};

const InputField = styled.input<InputFieldTypes>`
  width: ${({ $size }) => setSize($size)};
  height: 6rem;
  margin: 0 0 2.5rem 0;
  padding: 0 0 1rem 2.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.colorBackground.secondary};
  border-radius: 1rem;
  
  &:hover {
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.primaryLightLowTransparency};
  }

  &:focus {
    outline: ${({ theme }) => theme.colorBackground.secondary};
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export {
  InputField,
};
