<<<<<<< HEAD
# README.md – NTI eindopdracht Real Estate Care
## Over dit prototype

Dit prototype is gebouwd met Vue 3, Quasar Framework en Pinia. Het doel was om een prototype te maken van een SPA voor Real Estate Care met 4 benaderbare "pagina's" (toegewezen inspecties, afgeronde inspecties, kennisbank en instellingen) samen met een landingspagina en gesimuleerde login. 

Aanname: uit de beschrijving van de eindopdracht en de eerdere opdrachten uit de module ben ik ervan uitgegaan dat het niet nodig is om daadwerkelijk het formulier te maken waarmee de inspecties geregistreerd worden.

In dit document licht ik mijn proces toe en beschrijf ik welke onderdelen goed werken, welke nog niet volledig zijn uitgewerkt en waarom.

## Proces & Ontwikkelkeuzes
### Werkwijze
Ik vond dit een hele lastige opdracht omdat ik nog geen echte ervaring heb met programmeren. Daarnaast betekende het gebruik van Quasar dat alles weer net iets anders opgebouwd moest worden dan ik het in boek Vue.js van Peter Kassenaar heb geleerd. Ik heb daarom gebruikgemaakt van copilot om me te helpen dingen werkend te krijgen.

### Componenten
Tijdens het bouwen merkte ik dat meerdere pagina’s (AssignedReports, CompletedReports, KnowledgeBase) dezelfde lijststructuur gebruikten. Daarom heb ik ervoor gekozen om hier een component van te maken (ReportList.vue). Dit maakt de code onderhoudbaar en schaalbaar. Hierdoor kunnen in de toekomst gemakkelijker  nieuwe soorten lijsten toegevoegd worden. 

### State management met Pinia

Voor instellingen, rapporten en kennisbankitems gebruik ik Pinia stores, omdat Pinia lichtgewicht is - wat prima is voor een bescheiden applicatie als deze - en gemakkelijk in gebruik is. De instellingen worden opgeslagen in localStorage, zodat toggles onthouden blijven.

## Security, toegankelijkheid en best practices van het framework
### Security
Het gebruik van componenten van vue.js en quasar zorgt voor een standaard beveiliging. Voor de volledige applicatie zijn echter nog wel stappen nodig om veiligheid te garanderen.

Het prototype simuleert nu een inlog en accepteert elke invoer, maar zal natuurlijk voor de volledige applicatie moeten verbinden met een backend om te zorgen dat alleen geautoriseerde gebruikers toegang hebben. 

### Usability – Nielsen’s 10 heuristieken
Toegepast
* Consistency & standards: Alle lijsten, knoppen en toggles volgen Quasar‑standaarden.
* Visibility of system status: Navigatie-tabs tonen duidelijk waar je bent.
* Recognition over recall: Iconen helpen bij herkenning.
* Aesthetic & minimalist design: De app gebruikt een rustige, consistente stijl. Er is bewust gekozen om alleen de mint-kleur uit de huisstijl gebruiken omdat de golf-patronen uit de huisstijl-guide niet geschikt zijn voor gebruik in een (mobile) app. Het zou chaotisch over kunnen komen.
* User control & freedom: Navigatie is eenvoudig en altijd zichtbaar.

Nog niet (volledig) toegepast
* Error prevention: Dit is vooral belangrijk bij het creëren van het formulier om de inspectie te doen, maar dit viel buiten de scope van het prototype. Ook het loginformulier heeft nog geen validatie, omdat er geen backend is om op aan te sluiten.
* Help & documentation: Er is geen helpsectie of onboarding. Dit leek me in dit stadium van het prototype ook niet nodig. Als de applicatie daadwerkelijk gemaakt wordt, zal met gebruikers getoetst moeten worden welke onderdelen mogelijk niet direct duidelijk zijn en welke dus meer uitleg nodig hebben.
* Feedback bij acties: Dit is gedeeltelijk wel geïmplementeerd door hover (toegevoegd om te testen op de pc, niet relevant voor een mobiele applicatie) en click-states zodat de gebruiker kan zien waar hij op geklikt heeft. Als de gegevens langer worden en het langer duurt om dingen te laden, kan het wel wenselijk zijn om een spinner/loading-indicatie toe te voegen.

### Accessibility (Toegankelijkheid)
Ik heb Copilot gevraagd hoe de app scoort op WCAG richtlijnen. Daar kwam het volgende uit: 

✔ Wat werkt goed
* Quasar‑componenten zijn standaard WCAG‑vriendelijk
* Iconen hebben duidelijke visuele betekenis
* Tekstcontrasten zijn grotendeels voldoende
* Navigatie is consistent en voorspelbaar
* Alternatieve tekst voor afbeeldingen (het logo)

✖ Wat ontbreekt nog
* Geen ARIA‑labels op interactieve elementen
* Geen toetsenbord‑navigatie‑tests uitgevoerd
* Geen screenreader‑tests
* Geen focus‑states gestyled

De applicatie voldoet gedeeltelijk aan WCAG 2.1, maar niet volledig. Hier zullen in de definitieve applicatie nog stappen op genomen moeten worden.

### Best Practices - Design patterns
MVC‑principe

Dit prototype volgt zoveel mogelijk de belangrijkste principes van MVC:
* Model: Pinia‑stores (reports, settings, knowledge) bevatten de data en businesslogica.
* View: Vue‑componenten tonen de interface en hebben zo min mogelijk scripting.
* Controller: Component‑scripts, store‑actions en router bepalen hoe de app reageert op gebruikersacties.

Hierdoor ontstaat een duidelijke scheiding tussen data, logica en presentatie.

Singleton‑pattern
Pinia‑stores werken automatisch als singletons:
* Er bestaat altijd maar één instantie van elke store.
* Alle componenten delen dezelfde state.
* Instellingen, loginstatus en rapportgegevens blijven daardoor consistent door de hele app.

Dit voorkomt dubbele data, maakt state‑management voorspelbaar en eenvoudiger.

## Conclusie
Dit prototype was voor mij een flinke uitdaging, omdat er dingen gevraagd werden die ik niet eerder gedaan heb en waar ook vanuit de rest van de module geen ondersteuning voor was (Quasar). Zonder het gebruik van AI, was ik al vastgelopen bij het implementeren van Quasar. Het was wel een erg interessante opdracht. En heel fijn dat deze tijdens de module in kleinere stapjes werd opgebouwd. Dat maakte het behapbaar.
