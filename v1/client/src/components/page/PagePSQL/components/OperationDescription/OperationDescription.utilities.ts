const basicOperationDescriptions = {
  createRecord: {
    title: 'Create a new person record in the database',
    description: 'Submitting the form creates a single Person record in the database\'s people_records table.',
    body: [
      'Make sure to fill in each input field with the proper information and select an option from the select field. Error messages will be shown if annything is missing.',
      'Once all fields are filled in, click on the \'Submit Query\' button to forward your query request to the server. The server then runs the appropriate database operations.',
      'A confirmation message will be shown if the operation was successful.',
      'An explanation will be shown if the operation failed.',
    ],
  },
  updateRecord: {
    title: '',
    description: '',
    body: [
      '',
      '',
      '',
    ],
  },
  deleteRecord: {
    title: '',
    description: '',
    body: [
      '',
      '',
      '',
    ],
  },
};

const studentOperationDescriptions = {
  addCourse: {
    title: '',
    description: '',
    body: [
      '',
      '',
      '',
    ],
  },
};

const mentorOperationDescriptions = {
  addStudent: {
    title: '',
    description: '',
    body: [
      '',
      '',
      '',
    ],
  },
};

export {
  basicOperationDescriptions,
  studentOperationDescriptions,
  mentorOperationDescriptions,
};
