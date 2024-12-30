const { getController } = require('./controller');
const { getControllerSpec } = require('./controller.spec');
const {createFile}  = require('./createFile');
const { getdto } = require('./dto');
const { getModule } = require('./module');
const { getService } = require('./service');
const { getServiceSpec } = require('./service.spec');


let argument = process.argv[2];
if(!argument){
    console.log("PLease provide a name for this Nest.js Service")
    process.exit(1);
}

argument.toLowerCase();

const name = argument;
const Name = argument[0].toUpperCase() + argument.slice(1);

createFile(`src/service/${name}/dto/${name}.dto.ts`, getdto(name, Name));
createFile(`src/service/${name}/${name}.controller.spec.ts`, getControllerSpec(name, Name))
createFile(`src/service/${name}/${name}.controller.ts`, getController(name, Name))
createFile(`src/service/${name}/${name}.module.ts` , getModule(name, Name))
createFile(`src/service/${name}/${name}.service.spec.ts` , getServiceSpec(name, Name))
createFile(`src/service/${name}/${name}.service.ts` , getService(name, Name))