# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Frågor


## Sammanfatta projektets syfte, samt era gemensamma mål
Syftet med projektet är att vi ska lära oss att samarbeta/arbeta agilt och att även opponera andras kod / lära sig läsa varandras kod och ifrågasätta vissa val av programmerings-lösningar. 

## Hur upplevde teamet projektet initialt?
Det var en bra fortsättning med att lära sig Agilt arbete. Det blev enklare att lägga upp arbetet då det var andra gången vi aktivt använde oss av det tänkesättet att arbeta. Och då vi redan gjort denna uppgiften innan så upplevdes det lite enklare att komma igång och testa nya grejer.

## Planering och genomförande
Vi har använt oss av det agila upplägget, Sprintplanering, använde oss av Kanban upplägget i Github Project där vi noggrannt skrev ner alla olika Issues, la uppgifterna i prioriteringsordning så ingen behövde vänta på någon annans uppgift eller på något annat som låg längre ner i listan.

## Vilka steg har teamet tagit för att utveckla applikationen?
Vi började med figma skiss, hur vi vill ha designen. Därefter så skapade vi projektet i Github och där la vi upp vår Backlog på alla uppgifter som hörde till de user stories som skulle utföras. Därefter la vi grunden för navigationen (routingen) och även API anrops-funktionaliteten. Sedan tog vi en varsin uppgift och betade av allt eftersom (Uppdelat per sida och olika funktioner som behövdes)


## Teamets utmaningar och lösningar
Vår utmaning var att vi använde oss av ett annat API (TMDB) där vi noggrannt behövde gå igenom hur vi använde oss av objektstrukturen (hur vi får fram det vi behöver, som trailers, posters, genres och dylikt). Därefter skapade vi ett API på den information vi sökte efter i dokumentationen och försökte göra enkla anrop för oss att använda sig av.

## Hur löste eller hanterade teamet dessa utmaningar?
Vi använde oss av Axios och satte Base URL till TMDBs API + den nyckel man får för att komma åt information. Därefter undersökte dokumentationen för att se vilka anrop som ger oss den nödvändigaste informationen specifikt för oss, och byggde egna anrop i vårt projekt som inriktade sig till just dessa syften (t.ex Trailers) 

## Vilka kompromisser inom teamet har ni gjort under projektets gång?
Vi har kompromissat med de färger vi valt i navigationsbaren. Vi var så snälla (eller "Open Minded") så vi har gått med på det mesta. Det har gått så smidigt så det är svårt att ge ett konkret svar på denna frågan.

## Teamets reflektion och utvärdering
Hur man använder olika slags Hookar (useLocation och useHistory, även om den sistnämnda kanske inte används så lärde vi oss mer om den.) och vi har fått lära oss att använda Axios paketet samt routing. Vi har också lärt oss fördelarna med att återanvända komponenter.

## Hur kan gruppen förbättra sitt samarbete framöver?
Det är svårt att ge ett bra svar här, det skulle kanske vara att vi kan vara mer tydlig i kommunikationen i gruppen, samt använda oss av kamera under de möten vi har, till exempel daily scrums. 

## Arbeta Agilt
### Beskriv mer utförligt (minst 300 tecken) på vilket sätt gruppen har arbetat agilt (vilka artefakter, aktiviteter osv har ni använt er av?)
Vi skapade ett Github projekt där vi använde oss av Kanban metoden. De artefakter vi använde oss av är: 
* Gruppkontraktet
* User stories (alla issues vi skapade baserade på dessa stories)
* Backloggen
* Komponenter som underlättat på alla sidor i projektet och görd et lättare att organisera och strukturera arbetet.

Vi har haft Daily scrums där vi fört mötesprotokoll, samt en Retrospective i slutet av veckan för att analysera hur det har gått för oss och hur vi upplevt arbetet. Vi har även kollat med "produktägaren" hur han upplevde applikationen.

Sammanfattningsvis har vi använt en kombination av planering, utveckling, samarbete och reflektion för att skapa denna film-databas-hanterare.

![Github projects](./protokollpapper/Skärmbild%202024-04-22%20104456.png)