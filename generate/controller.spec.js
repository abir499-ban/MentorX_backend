const getControllerSpec = (name, Name) => `import { Test, TestingModule } from '@nestjs/testing';
import { ${Name}Controller } from './${name}.controller';
import { ${Name}Service } from './${name}.service';

describe('${Name}Controller', () => {
  let controller: ${Name}Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${Name}Controller],
      providers: [${Name}Service],
    }).compile();

    controller = module.get<${Name}Controller>(${Name}Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
`


module.exports = {
  getControllerSpec
}