import {
  AddNewUserF,
} from '@pageComponents/PagePSQL/components';

const formOptions = [
  {
    btnName: 'Add new user',
    btnDesc: 'Adds a new user to the database.',
    isActive: true,
    formComponent: <AddNewUserF />,
  },
  {
    btnName: 'Update user',
    btnDesc: 'Selects an existing user from the database and updates it.',
    isActive: false,
    formComponent: <></>,
  },
  {
    btnName: 'Delete user',
    btnDesc: 'Selects an existing user from the database and removes it.',
    isActive: false,
    formComponent: <></>,
  },
];

export default formOptions;
