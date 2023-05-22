// component elements.
import { LabelContainer } from './Label.styles';
// component models.

// ** Label | component ** //
//
const Label = ({ htmlFor, labelText }: any) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {labelText}
    </LabelContainer>
  );
};

export default Label;
