
import { ValidacionClave } from "./modelo";

import { 
tieneCaracteresEspeciales,
tieneLongitudMinima,
tieneNumeros,
tieneMayusculasYMinusculas,
tieneNombreUsuario,
tienePalabrasComunes } from "./validarClave.helpers";


// Validar Clave

export const validarClave = ( nombreUsuario: string, clave: string, commonPasswords: string[]
): ValidacionClave => {
  
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  const primeraInvalida = validaciones.find((validacion) => !validacion.esValida);

  return primeraInvalida ? primeraInvalida : { esValida: true };
};