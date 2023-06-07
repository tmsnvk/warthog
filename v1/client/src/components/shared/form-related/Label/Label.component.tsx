// component elements.
import { LabelContainer } from './Label.styles';
// component types.
import { LabelT } from './Label.types';

// ** Label | component ** //
// the component renders various form label values.
const Label = ({ htmlFor, labelText }: LabelT) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {labelText}
    </LabelContainer>
  );
};

export default Label;
