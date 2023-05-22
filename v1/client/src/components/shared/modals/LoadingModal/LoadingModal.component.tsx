// component elements.
// import { IconLight } from "@sharedComponents/iconStyles";
import {
  ModalContainer,
  ModalMessage,
} from './LoadingModal.styles';
// component utilities.
// import { iconLibrary } from '@config';
// component models.
import { LoadingModalComponentType } from './LoadingModal.models';

// ** LoadingModal | component ** //
//
const LoadingModal = ({ loadingMessage }: LoadingModalComponentType) => {
  return (
    <ModalContainer>
      {/* <IconLight icon={iconLibrary.spinner} spin></IconLight> */}
      <ModalMessage>{loadingMessage}</ModalMessage>
    </ModalContainer>
  );
};

export default LoadingModal;
