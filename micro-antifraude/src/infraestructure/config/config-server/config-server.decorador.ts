import { envConfig } from "./env/environments";



export function Property(valueName: string):any {

    let value = '';
    
    value = envConfig[valueName];
 
    if(value === undefined) {
        throw new Error(`The property ${valueName} is not value`);
    }
 
    // obtiene valores de envConfig. Aigna a propiedades de clase en tiempo de ejecución.
   return async (target:any, fieldProperty:string) => { 
    // Tiene como objetivo permitir la definición de nuevas propiedades o la modificación de propiedades existentes en un objeto
    Object.defineProperty(target, fieldProperty, {
        value, // valor optenido
        configurable: true,
        enumerable: false,
     });
   }
}