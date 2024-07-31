export default function (plop) {
  plop.setGenerator('add component', {
    description: 'generate new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of component (PascalCase):',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'components/{{pascalCase name}}',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/*',
      },
    ],
  });
}
