// component elements.
import { Paragraph } from './GenericParagraph.styles';
// component types.
import { GenericParagraphT } from './GenericParagraph.types';

// ** GenericTextParagraph | component ** //
//
const GenericParagraph = ({ render }: GenericParagraphT) => {
  return (
    <Paragraph>
      {render}
    </Paragraph>
  );
};

export default GenericParagraph;
