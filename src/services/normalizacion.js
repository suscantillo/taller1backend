export function normalizarPersonajes(personajes) {
  return personajes.map((personaje) => {
    return {
      id: p.id,
      nombre: p.name,
      estado: p.status,
      especie: p.species,
      tipo: p.type,
      genero: p.gender,
      origen: p.origin.name,
      ubicacionActual: p.location.name,
      cantidadEpisodios: p.episode.length,
      imagen: p.image,
    };
  });
}

