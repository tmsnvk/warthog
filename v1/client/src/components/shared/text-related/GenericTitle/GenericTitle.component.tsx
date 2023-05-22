// component elements.
import { Paragraph } from './GenericTitle.styles';
// component models.
import { GenericTitleComponentType } from './GenericTitle.models';

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
