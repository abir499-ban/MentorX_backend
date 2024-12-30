const getController = (name, Name) => `import { Controller } from '@nestjs/common';
import { ${Name}Service } from './${name}.service';

@Controller('${name}')
export class ${Name}Controller {
  constructor(private readonly ${name}Service: ${Name}Service) {}
}`

module.exports = {
  getController
}