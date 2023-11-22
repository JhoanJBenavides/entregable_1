const getRandomElement = (elements) => {
    //aquí va toda la logica necesaria para devolver un elemento aleatorio de ese arreglo
    //! Math.random() genera numeros aleatorios entre 0 y 1 pero nunca llegará a ser 1
    const indexRandom = Math.floor(Math.random() * elements.length);
    //TODO guardamos en una nueva variable la operación pero debemos aproximar hacia abajo con Math.floor
    return elements[indexRandom];

    // en RESUMEN tenemos una función que recibe un arreglo de elementos y retorna un elemento aleatorio
  };

  export { getRandomElement };
  //mediante separación por una coma se puede exportar una segunda función que se cree