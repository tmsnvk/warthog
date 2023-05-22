// component elements.
import { ErrorMessageContainer } from './ErrorMessage.styles';
// component models.
import { ParagraphComponentType } from './ErrorMessage.models';

// ** ErrorMessage | component ** //
//
const ErrorMessage = ({ errorMessage }: ParagraphComponentType) => {
  return (
    <ErrorMessageContainer>
      {errorMessage}
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
