import styled from 'styled-components';
import { TextInputType } from './TextInput.types';

const setSize = ($size: string) => {
  switch ($size) {
    case 'short':
      return '30rem';

    default:
      return '40rem';
  }
};

const TextInput = styled.input<TextInputType>`
  width: ${({ $size }) => setSize($size)};
  height: 6rem;
  padding: 0 0 0 2.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colorBackground.secondary};
  border: 0.3rem ${({ theme, $isError }) => $isError ? theme.color.error : theme.colorBackground.tertiary} solid;
  border-radius: 1rem;
  cursor: text;
  
  &:hover {
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.primaryMediumLowTransparency};
  }

  &:focus {
    outline: ${({ theme }) => theme.colorBackground.secondary};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export default TextInput;
