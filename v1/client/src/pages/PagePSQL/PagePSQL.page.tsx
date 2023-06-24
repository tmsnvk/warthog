// react and eco.
import {
  useFindActiveOptionIndex,
  useHandleFormDisplay,
} from '@pageComponents/PagePSQL/hooks';
// component elements.
import {
  FormContainer,
  FormSelector,
  PageContainer,
  QueryVisualisation,
  TableVisualisation,
  VisualiseDataContainer,
} from '@pageComponents/PagePSQL/components';

// ** PagePSQL | page ** //
//
const PagePSQL = () => {
  const { options, handleClick } = useHandleFormDisplay();
  const { activeOptionIndex } = useFindActiveOptionIndex(options);

  return (
    <PageContainer>
      <FormSelector handleClick={handleClick} options={options} />
      <FormContainer>
        {options[activeOptionIndex].formComponent}
      </FormContainer>
      <TableVisualisation />
      <VisualiseDataContainer as={'section'}>
        <QueryVisualisation />
      </VisualiseDataContainer>
    </PageContainer>
  );
};

export default PagePSQL;
