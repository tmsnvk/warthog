// external packages.
import styled from 'styled-components';
// component elements.
import { GenericComponentContainer } from '@sharedComponents/wrappers';

const GenericModalStyle = styled(GenericComponentContainer)`
  z-index: 100;
  width: 50rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5rem 0 2.5rem 0;
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
`;

export {
  GenericModalStyle,
};
