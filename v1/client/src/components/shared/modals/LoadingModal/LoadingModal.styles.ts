// external packages.
import styled from 'styled-components';
// component elements.
import { GenericModalStyle } from '@sharedComponents/modals';

const ModalContainer = styled(GenericModalStyle)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
`;

const ModalMessage = styled.p`
`;

export {
  ModalContainer,
  ModalMessage,
};
