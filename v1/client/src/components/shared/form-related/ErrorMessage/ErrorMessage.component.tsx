// component elements.
import { ErrorMessageContainer } from './ErrorMessage.styles';
// component types.
import { ParagraphComponentT } from './ErrorMessage.types';

// ** ErrorMessage | component ** //
// the component renders various error messages.
const ErrorMessage = ({ errorMessage }: ParagraphComponentT) => {
  return (
    <ErrorMessageContainer>
      {errorMessage}
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
