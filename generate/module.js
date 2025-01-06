const getModule = (name, Name) => `import { Module } from '@nestjs/common';
import { ${Name}Service } from './${name}.service';
import { ${Name}Controller } from './${name}.controller';
import {LoggerMiddleware} from 'src/common/middleware/logger.middleware';

@Module({
  controllers: [${Name}Controller],
  providers: [${Name}Service],
})
export class ${Name}Module {
configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('${name}')
  }
}
`


module.exports = {
  getModule
}