const generalOptionDescriptions = {
  addNewUser: {
    title: 'Add a new person to the database.',
    description: 'Submitting the form adds a single Person record to the database\'s people_records table.',
    body: [
      'Make sure to fill in each input field with the proper information and select an option from the select field. Error messages will be shown if annything is missing.',
      'Once all fields are filled in, click on the \'Submit Query\' button to forward your query request to the server. The server then runs the appropriate database operations.',
      'A confirmation message will be shown if the operation was successful.',
      'An explanation will be shown if the operation failed.',
    ],
  },
  updateUser: {
    title: '',
    description: '',
    body: [
      '',
      '',
      '',
    ],
  },
  deleteUser: {
    title: '',
    description: '',
    body: [
      '',
      '',
      '',
    ],
  },
};

const studentOptionDescriptions = {
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

const mentorOptionDescriptions = {
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
  generalOptionDescriptions,
  studentOptionDescriptions,
  mentorOptionDescriptions,
};
