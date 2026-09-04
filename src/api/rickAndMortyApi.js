const URL_BASE = "https://rickandmortyapi.com/api/character";

export async function obtenerPagina(pagina) {
  for (let intento = 1; intento <= 8; intento++) {
    const respuesta = await fetch(`${URL_BASE}?page=${pagina}`);

    if (respuesta.status === 200) {
      return respuesta.json();
    }

    await new Promise(function (resolve) {
      setTimeout(resolve, 1000 * intento);
    });
  }

  throw new Error(`No se pudo obtener la pagina ${pagina} despues de varios intentos`);
}


export async function obtenerInfo() {
  const primeraPagina = await obtenerPagina(1);
  return primeraPagina.info;
}

export async function obtenerTodosSecuencial() {
  const inicio = Date.now();
  const info = await obtenerInfo();
  const totalPaginas = info.pages;

  let personajes = [];
  for (let i = 1; i <= totalPaginas; i++) {
    const pagina = await obtenerPagina(i);
    personajes = personajes.concat(pagina.results);
  }

  const fin = Date.now();
  console.log(`Secuencial: ${personajes.length} personajes en ${fin - inicio} ms`);

  return personajes;
}

export async function obtenerTodosConcurrente() {
  const inicio = Date.now();
  const info = await obtenerInfo();
  const totalPaginas = info.pages;

  const promesas = [];
  for (let i = 1; i <= totalPaginas; i++) {
    promesas.push(obtenerPagina(i));
  }

  const paginas = await Promise.all(promesas);
  const personajes = paginas.reduce((acumulado, pagina) => acumulado.concat(pagina.results), []);

  const fin = Date.now();
  console.log(`Concurrente: ${personajes.length} personajes en ${fin - inicio} ms`);

  return personajes;
}