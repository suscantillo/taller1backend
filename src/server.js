import express from "express";
import { obtenerTodosSecuencial, obtenerTodosConcurrente } from "./api/rickAndMortyApi.js";
import { normalizarPersonajes } from "./services/normalizacion.js";
import {
  vivosHumanos,
  conVeinteEpisodiosOMas,
  primerAlienFemenino,
  existeAlgunTipo,
  todosValidos
} from "./services/consultas.js";
import { agruparPorEspecie, clasificarPorEpisodios } from "./services/estadisticas.js";

const app = express();
const PUERTO = 3000;

const inicioSecuencial = Date.now();
const personajesSecuencial = await obtenerTodosSecuencial();
const tiempoSecuencial = Date.now() - inicioSecuencial;

const inicioConcurrente = Date.now();
const personajesConcurrente = await obtenerTodosConcurrente();
const tiempoConcurrente = Date.now() - inicioConcurrente;

const personajes = normalizarPersonajes(personajesConcurrente);

const comparacion = {
  secuencial: {
    cantidadPersonajes: personajesSecuencial.length,
    tiempoMs: tiempoSecuencial
  },
  concurrente: {
    cantidadPersonajes: personajesConcurrente.length,
    tiempoMs: tiempoConcurrente
  }
};

app.get("/api/personajes", (req, res) => {
  res.json(personajes);
});

app.get("/api/vivos-humanos", (req, res) => {
  res.json(vivosHumanos(personajes));
});

app.get("/api/veinte-episodios", (req, res) => {
  res.json(conVeinteEpisodiosOMas(personajes));
});

app.get("/api/primer-alien-femenino", (req, res) => {
  res.json(primerAlienFemenino(personajes));
});

app.get("/api/existe-tipo", (req, res) => {
  res.json({ existeTipo: existeAlgunTipo(personajes) });
});

app.get("/api/todos-validos", (req, res) => {
  res.json({ todosValidos: todosValidos(personajes) });
});

app.get("/api/por-especie", (req, res) => {
  res.json(agruparPorEspecie(personajes));
});

app.get("/api/por-episodios", (req, res) => {
  res.json(clasificarPorEpisodios(personajes));
});

app.get("/api/comparacion", (req, res) => {
  res.json(comparacion);
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});
