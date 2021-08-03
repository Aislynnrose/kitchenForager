let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });