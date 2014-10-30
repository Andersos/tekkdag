# tekkdag :computer:

Forrige gang gjorde vi disse: https://gist.github.com/keronsen/11370238  
Denne gangen skal vi lære noe om [Node.js](http://nodejs.org/)

## Agenda

Tid | Plan
--- | ---
12:00 - 12:20 | Presentasjon av @phillipj om Node.js
12:20 - 12:30 | Pause
12:30 - 13:30 | [learnyounode](https://github.com/rvagg/learnyounode) (<a href="#Oppstart">se oppstart</a>)
13:30 - 13:40 | Pause
13:40 - 14:40 | <a href="#Oppgave">Oppgave: "Bruk Node som en webserver"</a>
14:40 - 14:50 | Pause
14:50 - 15:30 | <a href="#Konkurranse">Konkurranse</a>

<a name="Oppstart"></a>
## Oppstart
For å sette igang med dette trenger man [Node.js](http://nodejs.org/).  
Med Node får man automatisk [NPM (Node Package Manager)](https://www.npmjs.org/doc/cli/npm.html).  
Skriv følgende for å installere "learnyounode" globalt (-g).

```sh
$ npm install -g learnyounode
```

Oppgavene er selvforklarende.  
Du kan starte oppgavene ved å skrive:

```sh
$ learnyounode
```

Målet med disse oppgavene er at vi skal få en innføring.  
Vi sikter på å komme oss helt ned til "HTTP CLIENT".  
Om noen står fast, hjelper vi til.  
Her er også noen ressurser man kan bruke:  
- [Node API](http://nodejs.org/api/)
- [NPM Doc](https://www.npmjs.org/doc/cli/npm.html)
- [Nodeschool](http://nodeschool.io/)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<a name="Oppgave"></a>
## Oppgave "Bruk Node som en webserver"

### Oppvarming

- Installer alle avhengighetene til dette prosjektet ved hjelp av `npm`
- Start webserveren ved hjelp av `npm`
- Åpne nettleseren din mot `http://localhost:3000`

P.S. webserveren restartes ved hver endring slik at du slipper tenke på det.

### Oppgave 1

Få skjema til å fungere slik at du blir møtt med en side som sender deg en hilsen ved trykk på "Send til server"-knappen.

### Oppgave 2

I disse oppgavene skal husets FINN-klient for node brukes, [lifestyle](https://github.com/finn-no/lifestyle), klientens API står beskrevet i README.
API URLen som burde brukes er `http://api.finn.no/iad/`, ingen API-nøkkel er nødvendig.

* Vis hvor mange snøscooterannonser vi har på FINN akkurat nå
* Vis en liste av de siste snøscooterannonsene vi har på FINN akkurat nå
* (BONUS) Lag objektsiden som viser snøscooterannonsen basert på en finnkode

<a name="Konkurranse"></a>
## Konkurranse
Avslutningsvis skal vi skal prøve oss på en variant av [extreme_startup](https://github.com/rchatley/extreme_startup).  
Noen av dere har sikkert prøvd denne tidligere.  
Denne gangen skal vi bruke en Node server.  
Du kan prøve å starte helt selv eller bruke [denne](https://github.com/Andersos/extreme) som et utgangspunkt.

---
Takk for i dag og ha en flott helg :tada:
