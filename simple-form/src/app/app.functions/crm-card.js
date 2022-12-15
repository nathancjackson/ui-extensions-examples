exports.main = async (context, sendResponse) => {
  const { event } = context;

  if (event && event.type === 'SUBMIT') {
    const { example_input } = event.payload.formState;
    sendResponse({
      message: {
        type: 'SUCCESS',
        body: `Form submit was successful. Input's value: ${example_input}`,
      },
    });
  }

  sendResponse({
    sections: [
      {
        type: 'text',
        text: "testing testing 123",
      },
      {
        type: 'form',
        content: [
          {
            type: 'input',
            name: 'example_input',
            inputType: 'text',
            label: 'Example input field',
            initialValue: 'Default value of the input field',
          },
          {
            type: 'button',
            text: 'Submit form',
            onClick: {
              type: 'SUBMIT',
              serverlessFunction: 'crm-card',
            },
          },
        ],
      },
    ],
  });
};
