// component elements.
import { LoadingSpinnerIcon } from '@sharedComponents/icon-styles';
import {
  ModalContainer,
  ModalMessage,
} from './LoadingModal.styles';
// component utilities.
import { iconLibrary } from '@config';
// component types.
import { LoadingModalComponentT } from './LoadingModal.types';

// ** LoadingModal | component ** //
//
const LoadingModal = ({ loadingMessage }: LoadingModalComponentT) => {
  return (
    <ModalContainer>
      <ModalMessage>{loadingMessage}</ModalMessage>
      <LoadingSpinnerIcon icon={iconLibrary.faSpinner} spin></LoadingSpinnerIcon>
    </ModalContainer>
  );
};

export default LoadingModal;
