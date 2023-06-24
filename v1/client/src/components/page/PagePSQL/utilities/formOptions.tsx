// component elements.
import {
  CreateRecord,
  OperationDescription,
} from '@pageComponents/PagePSQL/components';
// component utilities.
import {
  basicOperationDescriptions,
  mentorOperationDescriptions,
  studentOperationDescriptions,
} from '@pageComponents/PagePSQL/components/OperationDescription/OperationDescription.utilities';

const formOptions = [
  {
    buttonName: 'Create record',
    buttonCategory: 'basic',
    buttonDescription: <OperationDescription instructions={basicOperationDescriptions.createRecord} />,
    isActive: true,
    formComponent: <CreateRecord />,
  },
  {
    buttonName: 'Update record',
    buttonCategory: 'basic',
    buttonDescription: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    buttonName: 'Delete record',
    buttonCategory: 'basic',
    buttonDescription: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    buttonName: 'Add course to student record',
    buttonCategory: 'student',
    buttonDescription: <></>,
    isActive: false,
    formComponent: <></>,
  },
  {
    buttonName: 'Add student to mentor record',
    buttonCategory: 'mentor',
    buttonDescription: <></>,
    isActive: false,
    formComponent: <></>,
  },
];

export default formOptions;
