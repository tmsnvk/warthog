// component elements.
import { Paragraph } from './GenericTitle.styles';
// component types.
import { GenericTitleComponentType } from './GenericTitle.types';

// ** GenericTextParagraph | component ** //
//
const GenericTitle = ({ render }: GenericTitleComponentType) => {
  return (
    <Paragraph>
      {render}
    </Paragraph>
  );
};

export default GenericTitle;
