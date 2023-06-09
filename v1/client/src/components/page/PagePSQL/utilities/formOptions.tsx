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
    btnCategory: 'general',
    btnDesc: <ButtonDescription instructions={addNewUser} />,
    isActive: true,
    formComponent: <AddNewUser />,
  },
  {
    btnName: 'Update user',
    btnCategory: 'general',
    btnDesc: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    btnName: 'Delete user',
    btnCategory: 'general',
    btnDesc: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    btnName: 'Add course to student',
    btnCategory: 'student',
    btnDesc: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    btnName: 'Add student to mentor',
    btnCategory: 'mentor',
    btnDesc: <></>,
    isActive: false,
    formComponent: <></>,
  },
];

export default formOptions;
