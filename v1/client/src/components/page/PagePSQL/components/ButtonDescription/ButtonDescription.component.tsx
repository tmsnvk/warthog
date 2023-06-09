// react and eco.
import { useGenerateDescList } from './ButtonDescription.hooks';
// component elements.
import {
  ArticleContainer,
  Description,
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
      <Description>
        {instructions.description}
      </Description>
      <Instructions>
        {listElements}
      </Instructions>
    </ArticleContainer>
  );
};

export default ButtonDescription;
