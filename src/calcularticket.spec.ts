import {
    calcularPrecioSinIva,
    calcularPrecioConIva,
    calcularDesgloseIva,
    calculaTicket,
    calcularTotalTicket
} from "./calcularticket";

import { 
    TipoIva,
    ResultadoLineaTicket,
    TotalPorTipoIva,
    LineaTicket
   } from "./modelo";

describe("calcularPrecioSinIva", () => {
    it("debería devolver un throw si el precio o la cantidad es undefined", () => {
        // Arrange
            const precio : any = undefined;
            const cantidad : any = undefined;
      
        // Act
            const resultado = () => calcularPrecioSinIva(precio, cantidad);
      
        // Assert
            expect(resultado).toThrowError("Los parámetros introducidos no son correctos");
        });

    it("debería devolver un throw si el precio o la cantidad es null", () => {
        // Arrange
            const precio : any = null;
            const cantidad : any = null;
      
        // Act
            const resultado = () => calcularPrecioSinIva(precio, cantidad);
      
        // Assert
            expect(resultado).toThrowError("Los parámetros introducidos no son correctos");
        });

    it("calcula correctamente el precio sin IVA", () => {
        // Arrange
            const precio: number = 100;
            const cantidad: number = 2;
        
        // Act
            const resultado = calcularPrecioSinIva(precio, cantidad);
        
        // Assert
            const total = 200;
            expect(resultado).toEqual(total); 
        });
  
});

describe("calcularPrecioConIva", () => {
    it("debería devolver un throw si el precio, la cantidad o el tipo de Iva es undefined", () => {
        // Arrange
            const precio : any = undefined;
            const cantidad : any = undefined;
            const tipoIva : any = undefined;
      
        // Act
            const resultado = () => calcularPrecioConIva(precio, cantidad, tipoIva);
      
        // Assert
            expect(resultado).toThrowError("Los parámetros introducidos no son correctos");
        });

    it("debería devolver un throw si el precio, la cantidad o el tipo de Iva es null", () => {
        // Arrange
            const precio : any = null;
            const cantidad : any = null;
            const tipoIva : any = null;
      
        // Act
            const resultado = () => calcularPrecioConIva(precio, cantidad, tipoIva);
      
        // Assert
            expect(resultado).toThrowError("Los parámetros introducidos no son correctos");
        });

    it("calcula correctamente el precio con IVA", () => {
        // Arrange
            const precio = 100;
            const cantidad = 2;
            const tipoIva: TipoIva = "general";
        
        // Act
            const resultado = calcularPrecioConIva(precio, cantidad, tipoIva);
        
        // Assert
            const total = 242;
            expect(resultado).toEqual(total); 
        });
  
});

describe("calculaTicket", () => {
    it("debería devolver un throw si los parámetros de entrada son undefined", () => {
        // Arrange
        const lineasTicket: any = undefined;
    
        // Act
        const lineasCalculadas = () => calculaTicket(lineasTicket);
    
        // Assert
        expect(lineasCalculadas).toThrowError("Los parámetros introducidos no son correctos");
      });

      it("debería devolver un throw si los parámetros de entrada son null", () => {
        // Arrange
        const lineasTicket: any = null;
    
        // Act
        const lineasCalculadas = () => calculaTicket(lineasTicket);
    
        // Assert
        expect(lineasCalculadas).toThrowError("Los parámetros introducidos no son correctos");
      });

    it("debería calcular las líneas del ticket correctamente", () => {
      // Arrange
      const lineasTicket: LineaTicket[] = [
        { producto: { nombre: 'Producto1', precio: 10, tipoIva: "general" }, cantidad: 2 },
        { producto: { nombre: 'Producto2', precio: 15, tipoIva: "reducido" }, cantidad: 3 },
      ];
  
      // Act
      const lineasCalculadas = calculaTicket(lineasTicket);
  
      // Assert
      expect(lineasCalculadas).toEqual([
        { nombre: "Producto1", cantidad: 2, precioSinIva: 20, tipoIva: "general", precioConIva: 24.20 },
        { nombre: "Producto2", cantidad: 3, precioSinIva: 45, tipoIva: "reducido", precioConIva: 49.50 },
      ]);
    });
  });

describe("calcularDesgloseIva", () => {
    it ("debería devolver un throw si los parámetros de entrada son undefined", () => {
        // Arrange
        const lineasCalculadas: any = undefined;
      
        // Act
        const desgloseIva = () => calcularDesgloseIva(lineasCalculadas);
      
        // Assert
        expect(desgloseIva).toThrowError("Los parámetros introducidos no son correctos");
        });

     it ("debería devolver un throw si los parámetros de entrada son null", () => {
        // Arrange
        const lineasCalculadas: any = null;
          
         // Act
        const desgloseIva = () => calcularDesgloseIva(lineasCalculadas);
          
        // Assert
        expect(desgloseIva).toThrowError("Los parámetros introducidos no son correctos");
        });

    it ("debería calcular el desglose de IVA correctamente", () => {
    // Arrange
    const lineasCalculadas: ResultadoLineaTicket[] = [
      { nombre: 'Producto1', cantidad: 2, precioSinIva: 20, tipoIva: 'general', precioConIva: 24.20 },
      { nombre: 'Producto2', cantidad: 3, precioSinIva: 45, tipoIva: 'reducido', precioConIva: 49.50 },
    ];
  
    // Act
    const desgloseIva: TotalPorTipoIva[] = calcularDesgloseIva(lineasCalculadas);
  
    // Assert
    
    const resultadoEsperado: TotalPorTipoIva[] = [
    { tipoIva: 'general', cuantia: 24.20 },
    { tipoIva: 'reducido', cuantia: 49.50 },
    ];
  
    expect(desgloseIva).toEqual(resultadoEsperado);
    });
  });

describe("calcularTotalTicket", () => {
    it("debería devolver un throw si los parámetros de entrada son undefined", () => {
        // Arrange
        const lineasCalculadas: any = undefined;
    
        // Act
        const ticketFinal = () => calcularTotalTicket(lineasCalculadas);
    
        // Assert
        expect(ticketFinal).toThrowError("Los parámetros introducidos no son correctos");
        });

      it("debería devolver un throw si los parámetros de entrada son null", () => {
        // Arrange
        const lineasCalculadas: any = null;
    
        // Act
        const ticketFinal = () => calcularTotalTicket(lineasCalculadas);
    
        // Assert
        expect(ticketFinal).toThrowError("Los parámetros introducidos no son correctos");
        });
    
    it("debería calcular el total del ticket correctamente", () => {
      // Arrange
      const lineasCalculadas: ResultadoLineaTicket[] = [
        { nombre: 'Producto1', cantidad: 2, precioSinIva: 20, tipoIva: 'general', precioConIva: 24.20 },
        { nombre: 'Producto2', cantidad: 3, precioSinIva: 45, tipoIva: 'reducido', precioConIva: 49.50 },
      ];
  
      // Act
      const ticketFinal = calcularTotalTicket(lineasCalculadas);
  
      // Assert
      expect(ticketFinal).toEqual({
        lineas: lineasCalculadas,
        total: { totalSinIva: 65, totalConIva: 73.70, totalIva: 8.70 },
        desgloseIva: [
          { tipoIva: 'general', cuantia: 24.20 },
          { tipoIva: 'reducido', cuantia: 49.50 },
        ],
      });
    });
});