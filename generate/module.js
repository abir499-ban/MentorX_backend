const getModule = (name, Name) => `import { Module } from '@nestjs/common';
import { ${Name}Service } from './${name}.service';
import { ${Name}Controller } from './${name}.controller';

@Module({
  controllers: [${Name}Controller],
  providers: [${Name}Service],
})
export class ${Name}Module {}
`


module.exports = {
  getModule
}