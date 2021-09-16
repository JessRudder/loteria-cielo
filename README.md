# Lotería

El juego de cartas de lotería mexicana.

(TAREA: documentar el proyecto aquí)

## Implementacíon

Por ahora realizado con `React`, y custom `js` en `./src/Game`. Antes con `boardgame.io` pero no tuvimos éxito porque nuestra concepto del juego no tiene ni turnos ni fases (aparte del cantor que nomás aumenta la gama de elecciones válidas).

## Tareas

- [ ] leer (join) / elegir (host) la baraja antes de iniciar

- [ ] ganar
	- [ ] la verificación parece tardar hasta el próximo `.cantar`
	- [ ] ROTO ya que muchas veces no se llega a verificar hasta las cartas muy últimas
	- [ ] uno puede declararse ganador después del empate

- [ ] lobby
	- [ ] mostrar los jugadores en el lobby
		- [ ] y más opciones para juntar o ¿nomás selecciona host?
	- [X] separar la configuración del inicio en `.iniciar`
	- [ ] los joiners leen la barajaId cuando conectan
	- [ ] crea el host y se juntan los joiners

- [ ] búsqueda
	- [ ] los joiners buscan juegos actuales antes de juntarse en el lobby

- [ ] demo
	- [ ] crear imágenes, audio para la baraja
	- [ ] haz que el setTimeout/.timer espere por el audio
	- [ ] elegir baraja, opciones en una página de arranque

- [ ] diseño
	- ...tareas CSS/HTML
