import { readFileSync } from "fs"; // Lee el contenido de un archivo
import { parse } from "dotenv";  // Analiza el contenido del archivo como variables de entorno y devuelve un objeto con esas variables.



const env = process.env.ENVIRONMENT || 'local';

let propertiesLocation = null;

const propertyFilename= `application-${env}.properties`;

const property = process.env.NEST_PROPERTIES_LOCATION || '';

propertiesLocation = `${property}${propertyFilename}`;

console.log('enviroment type ecr ',propertiesLocation);

export const envConfig: { [key: string]:any } = parse(readFileSync(propertiesLocation));
