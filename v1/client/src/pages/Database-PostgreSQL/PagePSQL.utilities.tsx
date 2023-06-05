import { AddNewUserForm } from '@pageComponents/PostgreSQL';

const formOptions = [
  {
    btnName: 'Add new user',
    btnDesc: 'Adds a new user to the database.',
    isActive: true,
    formComponent: <AddNewUserForm />,
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

export {
  formOptions,
};
