// external packages.
import styled from 'styled-components';
// component elements.
import { GenericComponentContainer } from '@sharedComponents/wrappers';

const VisualiseDataContainer = styled(GenericComponentContainer)`
  grid-column: 2 / 3;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 5rem 7.5rem;
`;

export default VisualiseDataContainer;
