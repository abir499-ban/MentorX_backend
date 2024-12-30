const getService = (name, Name) => `import { Injectable } from '@nestjs/common';

@Injectable()
export class ${Name}Service {}
`