const questions = [
    {
        type : 'list',
        name : 'framework',
        message : 'Choose the JS Framework which you are using:',
        choices : ['React', 'NextJS']
    }
]

const questionsTs = [
    {
      type: 'list',
      name: 'typescript',
      message: 'Does your project use TypeScript?',
      choices: ['Yes', 'No'],
    },
  ];

const inputProjectName = [
  {
    type : 'input',
    name : 'name',
    message : 'project name:',
  }
]

export {questions, questionsTs, inputProjectName}