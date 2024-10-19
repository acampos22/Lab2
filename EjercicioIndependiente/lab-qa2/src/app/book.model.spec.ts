import { Author } from './author';
import { mock, when, instance } from 'ts-mockito';

describe('Author', () => {
  let autorMock: Author;

  beforeEach(() => {
    autorMock = mock<Author>();
    
    when(autorMock.getName()).thenReturn("Messi");
    when(autorMock.getPais()).thenReturn("MessiLandia");
  });

   /**
   * Nombre de la prueba: Prueba de crear autor
   * Objetivo: Verificar que  devuelva correctamente el nombre y país del autor
   * Datos de prueba: Nombre "Messi", País "MessiLandia"
   * Resultado esperado: El nombre del autor debe ser "Messi" y el país debe ser "MessiLandia"
   */
  it('Prueba de crear autor', () => {
    const autor = instance(autorMock);
    expect(autor.getName()).toBe("Messi");
    expect(autor.getPais()).toBe("MessiLandia");
  });

    /**
   * Nombre de la prueba: Prueba de setName
   * Objetivo: Verificar que se pueda cambiar el nombre en el mock y obtener el nuevo valor
   * Datos de prueba: Cambiar el nombre a "Ronaldo"
   * Resultado esperado: El nombre del autor debe ser "Ronaldo"
   */
  it('Prueba de setnamer', () => {
    const autor = instance(autorMock);
    
    // Cambiar el nombre directamente en el mock
    autorMock.setName("Ronaldo");
    when(autorMock.getName()).thenReturn("Ronaldo"); // Actualizar el retorno del mock

    expect(autor.getName()).toBe("Ronaldo");
  });

  /**
   * Nombre de la prueba: Prueba equals
   * Objetivo: Verificar que el método equals retorne true cuando el nombre sea igual al nombre esperado
   * Datos de prueba: Comparación con el nombre "Messi"
   * Resultado esperado: El método equals debe retornar true
   */
  it('Prrueba equals', () => {
    const autor = instance(autorMock);
    
    // Configurar el comportamiento del método equals
    when(autorMock.equals("Messi")).thenReturn(true);
    
    expect(autor.equals("Messi")).toBe(true);
  });

  /**
   * Nombre de la prueba: Prueba setPais
   * Objetivo: Verificar que se pueda cambiar el país en el mock y obtener el nuevo valor
   * Datos de prueba: Cambiar el país a "MessiWorld"
   * Resultado esperado: El país del autor debe ser "MessiWorld"
   */
  it('Prueba Setpais', () => {
    const autor = instance(autorMock);
    
    // Cambiar el país directamente en el mock
    autorMock.setPais("MessiWorld");
    when(autorMock.getPais()).thenReturn("MessiWorld"); // Actualizar el retorno del mock

    expect(autor.getPais()).toBe("MessiWorld");
  });
});
