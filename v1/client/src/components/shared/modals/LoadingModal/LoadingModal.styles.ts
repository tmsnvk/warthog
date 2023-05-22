// external packages.
import styled from 'styled-components';
// component elements.
import { GenericModalStyle } from '@sharedComponents/modals';

const ModalContainer = styled(GenericModalStyle)`
  display: flex;
  flex-direction: row;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  filter: none;
`;

const ModalMessage = styled.p`
  text-align: center;
`;

export {
  ModalContainer,
  ModalMessage,
};
