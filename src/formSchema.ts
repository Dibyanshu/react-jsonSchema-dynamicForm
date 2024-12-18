export const formSchema = [
    {
      sectionTitle: 'User Information',
      fields: [
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          required: true,
          placeholder: 'Enter full name',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          required: true,
          placeholder: 'Enter email',
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          required: true,
          placeholder: 'Enter password',
        },
        {
          name: 'birthday',
          label: 'Date of Birth',
          type: 'date',
          required: false,
        },
      ],
    },
    {
      sectionTitle: 'Preferences',
      fields: [
        {
          name: 'colorPreference',
          label: 'Favorite Color',
          type: 'color',
          required: false,
        },
        {
          name: 'experienceLevel',
          label: 'Experience Level',
          type: 'range',
          min: 0,
          max: 10,
          step: 1,
          required: false,
        },
        {
          name: 'developmentSkills',
          label: 'Development Skills',
          type: 'select',
          options: [
            { label: 'Frontend', value: 'frontend' },
            { label: 'Backend', value: 'backend' },
            { label: 'Full Stack', value: 'fullstack' },
            { label: 'Data Science', value: 'datascience' },
          ],
          required: true,
        },
      ],
    },
    {
      sectionTitle: 'Feedback',
      fields: [
        {
          name: 'websiteFeedback',
          label: 'Your Feedback',
          type: 'textarea',
          required: false,
          placeholder: 'Share your thoughts',
        },
        {
          name: 'termsAgreement',
          label: 'Agree to Terms',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'fileUpload',
          label: 'Upload File',
          type: 'file',
          required: false,
        },
        {
          name: 'searchQuery',
          label: 'Search',
          type: 'search',
          required: false,
          placeholder: 'Search...',
        },
      ],
    },
];