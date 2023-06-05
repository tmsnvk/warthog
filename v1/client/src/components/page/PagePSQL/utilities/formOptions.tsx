// component elements.
import {
  AddNewUser,
  ButtonDescription,
} from '@pageComponents/PagePSQL/components';
// component utilities.
import {
  addNewUser,
} from '@pageComponents/PagePSQL/components/ButtonDescription/ButtonDescription.utilities';

const formOptions = [
  {
    btnName: 'Add new user',
    btnDesc: <ButtonDescription instructions={addNewUser} />,
    isActive: true,
    formComponent: <AddNewUser />,
  },
  {
    btnName: 'Update user',
    btnDesc: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    btnName: 'Delete user',
    btnDesc: <></>,
    isActive: false,
    formComponent: <></>,
  },
];

export default formOptions;
