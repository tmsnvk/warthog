// external packages.
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingSpinnerIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  margin: 0 0 0 1rem;
`;

export default LoadingSpinnerIcon;
