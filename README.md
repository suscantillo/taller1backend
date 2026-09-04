# Taller 1 – Rick and Morty API

## Requisitos

- Node.js 18 o superior (usa `fetch` nativo).

## Instalación y ejecución

```bash
npm install
npm run dev
```

El servidor queda escuchando en `http://localhost:3000`. Al arrancar,
descarga y normaliza los  personajes de la APIusando las
dos estrategias, así que la primera carga toma unos
segundos.

## Endpoints

| Endpoint                        | Descripción                                            |
|----------------------------------|---------------------------------------------------------|
| `GET /api/personajes`            | Parte A: personajes normalizados                        |
| `GET /api/vivos-humanos`         | B.1 filter: vivos y especie Human                        |
| `GET /api/veinte-episodios`      | B.2 filter: 20 o más episodios                           |
| `GET /api/primer-alien-femenino` | B.3 find: primer alien de género Female                  |
| `GET /api/existe-tipo`           | B.4 some: existe algún personaje con campo `type`        |
| `GET /api/todos-validos`         | B.5 every: todos tienen imagen y ≥1 episodio             |
| `GET /api/por-especie`           | B.6 reduce: agrupado por especie                         |
| `GET /api/por-episodios`         | B.7 reduce: clasificado por rango de episodios           |
| `GET /api/comparacion`           | Parte C: ms de la estrategia secuencial vs concurrente   |


