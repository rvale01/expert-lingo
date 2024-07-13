import type { PlopTypes } from "@turbo/gen";
import fs from 'fs';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "list",
        name: "folder",
        message: "What is the folder you want to add the component?",
        choices: fs.readdirSync("src/components"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{folder}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{folder}}/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
        templateFile: "templates/story.hbs",
      },
      {
        type: "append",
        path: "package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{pascalCase name}}": "src/components/{{folder}}/{{pascalCase name}}/{{pascalCase name}}.tsx,"',
      },
    ],
  });
}
