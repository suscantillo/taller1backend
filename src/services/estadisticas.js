export function agruparPorEspecie(personajes) {
  const agrupado = personajes.reduce((acumulador, p) => {
    const especie = p.especie;

    if (!acumulador[especie]) {
      acumulador[especie] = { cantidad: 0, totalEpisodios: 0, vivos: 0 };
    }

    acumulador[especie].cantidad += 1;
    acumulador[especie].totalEpisodios += p.cantidadEpisodios;
    if (p.estado === "Alive") acumulador[especie].vivos += 1;

    return acumulador;
  }, {});

  Object.keys(agrupado).forEach((especie) => {
    const datos = agrupado[especie];
    datos.promedioEpisodios = Number(
      (datos.totalEpisodios / datos.cantidad).toFixed(1)
    );
    delete datos.totalEpisodios;
  });

  return agrupado;
}

export function clasificarPorEpisodios(personajes) {
  return personajes.reduce(
    (acumulador, p) => {
      const episodios = p.cantidadEpisodios;
      if (episodios >= 1 && episodios <= 5) acumulador["1-5"] += 1;
      else if (episodios >= 6 && episodios <= 15) acumulador["6-15"] += 1;
      else if (episodios >= 16 && episodios <= 30) acumulador["16-30"] += 1;
      else if (episodios > 30) acumulador["30+"] += 1;
      return acumulador;
    },
    { "1-5": 0, "6-15": 0, "16-30": 0, "30+": 0 }
  );
}
