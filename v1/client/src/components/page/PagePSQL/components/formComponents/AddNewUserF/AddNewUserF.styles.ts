import styled from 'styled-components';
import { FlexContainerTypes } from './AddNewUserF.types';

const setDirection = ($direction: string) => {
  switch ($direction) {
    case 'column':
      return 'column';

    default:
      return 'row';
  }
};

const setAlignItems = ($direction: string) => {
  switch ($direction) {
    case 'row':
      return 'center';

    default:
      return 'normal';
  }
};

const FlexContainer = styled.div<FlexContainerTypes>`
  display: flex;
  flex-direction: ${({ $direction }) => setDirection($direction)};
  align-items: ${({ $direction }) => setAlignItems($direction)};
  margin: 0 2.5rem 0 0;
`;

export {
  FlexContainer,
};
