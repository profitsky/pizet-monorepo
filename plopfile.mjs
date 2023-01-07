export default function(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [], // array of inquirer prompts
    actions: [{
      type: 'add'
    }]  // array of actions
  });
};
