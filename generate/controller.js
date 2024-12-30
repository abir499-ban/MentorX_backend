const getController = (name, Name) => `import { Controller } from '@nestjs/common';
import { ManService } from './${name}.service';

@Controller('${name}')
export class ${Name}Controller {
  constructor(private readonly ${name}Service: ${Name}Service) {}
}`