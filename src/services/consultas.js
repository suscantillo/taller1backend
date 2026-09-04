export function vivosHumanos(personajes) {
  return personajes.filter(function (p) {
    return p.estado === "Alive" && p.especie === "Human";
  });
}

export function conVeinteEpisodiosOMas(personajes) {
  return personajes.filter(function (p) {
    return p.cantidadEpisodios >= 20;
  });
}

export function primerAlienFemenino(personajes) {
  return personajes.find(function (p) {
    return p.especie === "Alien" && p.genero === "Female";
  });
}

export function existeAlgunTipo(personajes) {
  return personajes.some(function (p) {
    return p.tipo !== "";
  });
}

export function todosValidos(personajes) {
  return personajes.every(function (p) {
    return p.imagen !== "" && p.cantidadEpisodios >= 1;
  });
}
