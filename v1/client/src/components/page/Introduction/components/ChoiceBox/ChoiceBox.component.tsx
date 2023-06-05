// component elements.
import { SectionContainer } from './ChoiceBox.styles';
import {
  GenericParagraph,
  GenericTitle,
} from '@sharedComponents/text-related';

// component utilities.
import { textToRender } from './ChoiceBox.utilities';
// ** ChoiceBox | component ** //
//
const ChoiceBox = () => {

  return (
    <SectionContainer>
      <GenericTitle render={textToRender.title} />
      <a href='/db/mongodb'>MongoDB</a>
      <a href='/db/postgresql'>PostgresQL</a>
    </SectionContainer>
  );
};

export default ChoiceBox;
