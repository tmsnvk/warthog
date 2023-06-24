// react and eco.
import { useGenerateDescriptionList } from './OperationDescription.hooks';
// component elements.
import {
  ArticleContainer,
  Description,
  Instructions,
  Title,
} from './OperationDescription.styles';
// component types.
import { OperationDescriptionT } from './OperationDescription.types';

// ** OperationDescription | component ** //
//
const OperationDescription = ({ instructions }: OperationDescriptionT) => {
  const { listElements } = useGenerateDescriptionList(instructions.body);

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

export default OperationDescription;
