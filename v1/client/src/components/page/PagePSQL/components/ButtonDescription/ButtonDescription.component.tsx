// react and eco.
import { useGenerateDescList } from './ButtonDescription.hooks';
// component elements.
import {
  ArticleContainer,
  Instructions,
  Title,
} from './ButtonDescription.styles';
// component types.
import { ButtonDescriptionT } from './ButtonDescription.types';

// ** ButtonDescription | component ** //
//
const ButtonDescription = ({ instructions }: ButtonDescriptionT) => {
  const { listElements } = useGenerateDescList(instructions.body);

  return (
    <ArticleContainer>
      <Title>
        {instructions.title}
      </Title>
      <Instructions>
        {listElements}
      </Instructions>
    </ArticleContainer>
  );
};

export default ButtonDescription;
