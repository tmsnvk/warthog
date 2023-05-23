// component elements.
import { LabelContainer } from './Label.styles';
// component types.
import { LabelType } from './Label.types';

// ** Label | component ** //
//
const Label = ({ htmlFor, labelText }: LabelType) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {labelText}
    </LabelContainer>
  );
};

export default Label;
