import {
    validarClave,
  } from './validarClave';

  import { 
    tieneCaracteresEspeciales,
    tieneLongitudMinima,
    tieneNumeros,
    tieneMayusculasYMinusculas,
    tieneNombreUsuario,
    tienePalabrasComunes } from "./validarClave.helpers";

// Mayúsucas y minúsculas

describe("tieneMayusculasYMinusculas", () => {
    it("debería devolver esValida true si la clave tiene mayúsculas y minúsculas", () => {
      // Arrange
      const clave = "AbcDef";
  
      // Act
      const resultado = tieneMayusculasYMinusculas(clave);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver un error si la clave no tiene mayúsculas y minúsculas", () => {
      // Arrange
      const clave = "abc123";
  
      // Act
      const resultado = tieneMayusculasYMinusculas(clave);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener mayúsculas y minúsculas");
    });
  });
  
// Tiene números

describe("tieneNumeros", () => {
    it("debería devolver esValida true si la clave tiene números", () => {
      // Arrange
      const clave = "Abc123";
  
      // Act
      const resultado = tieneNumeros(clave);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver un error si la clave no tiene números", () => {
      // Arrange
      const clave = "AbcDef";
  
      // Act
      const resultado = tieneNumeros(clave);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener números");
    });
  });

// Caracteres especiales

describe("tieneCaracteresEspeciales", () => {
    it("debería devolver esValida true si la clave tiene caracteres especiales", () => {
      // Arrange
      const clave = "Abc@123";
  
      // Act
      const resultado = tieneCaracteresEspeciales(clave);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver un error si la clave no tiene caracteres especiales", () => {
      // Arrange
      const clave = "Abc123";
  
      // Act
      const resultado = tieneCaracteresEspeciales(clave);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener caracteres especiales (@, #, +, _, ...)");
    });
  });

// Longitud mínima

describe("tieneLongitudMinima", () => {
    it("debería devolver esValida true si la clave cumple con la longitud mínima", () => {
      // Arrange
      const clave = "AbcDef12";
  
      // Act
      const resultado = tieneLongitudMinima(clave);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver un error si la clave no cumple con la longitud mínima", () => {
      // Arrange
      const clave = "Abc123";
  
      // Act
      const resultado = tieneLongitudMinima(clave);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener una longitud mínima de 8 caracteres");
    });
  });
  
// Nombre de usuario

describe("tieneNombreUsuario", () => {
    it("debería devolver esValida true si la clave no contiene el nombre de usuario", () => {
      // Arrange
      const nombreUsuario = "usuario123";
      const clave = "Abc123";
  
      // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver un error si la clave contiene el nombre de usuario", () => {
      // Arrange
      const nombreUsuario = "usuario123";
      const clave = "Abc123usuario123";
  
      // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
    });
  });
  
// Palabras comunes

describe("tienePalabrasComunes", () => {
    it("debería devolver esValida true si la clave no está en la lista de contraseñas comunes", () => {
      // Arrange
      const clave = "Abc123";
  
      // Act
      const resultado = tienePalabrasComunes(clave, ["password", "123456"]);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver un error si la clave está en la lista de contraseñas comunes", () => {
      // Arrange
      const clave = "password";
  
      // Act
      const resultado = tienePalabrasComunes(clave, ["password", "123456"]);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave no debe contener palabras comunes");
    });
  });
  
// Validar Clave

describe("validarClave", () => {
    it("debería devolver esValida true si todas las validaciones son exitosas", () => {
      // Arrange
      const nombreUsuario = "usuario123";
      const clave = "Abc9@rty";
      const commonPasswords = ["password", "123456"];
  
      // Act
      const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("debería devolver el primer error si alguna validación falla", () => {
      // Arrange
      const nombreUsuario = "usuario123";
      const clave = "password";
      const commonPasswords = ["password", "123456"];
  
      // Act
      const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  
      // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener mayúsculas y minúsculas");
    });
  });
  