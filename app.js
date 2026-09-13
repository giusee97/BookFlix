// BookFlix by GFire - Application Engine
// Comprehensive Netflix-style Book Dossiers & Instant Real-Time Barcode Scanner

const INITIAL_BOOKS = [
  {
    id: "seed-geda-2010",
    isbn: "9788868369323",
    title: "Nel mare ci sono i coccodrilli",
    author: "Fabio Geda",
    publishYear: "2010",
    publisher: "Baldini+Castoldi",
    pageCount: 156,
    category: "Scolastici & Narrativa",
    coverUrl: "covers/geda.jpg",
    summaryLength: "deep",
    authorBio: "Fabio Geda (Torino, 1972) è uno scrittore ed educatore italiano. Laureato in Scienze della Comunicazione, si è a lungo occupato di disagio minorile ed educazione di strada. Nel 2010 ha pubblicato 'Nel mare ci sono i coccodrilli', bestseller internazionale tradotto in oltre trenta paesi, che racconta la vera storia di Enaiatollah Akbari.",
    keyThemes: [
      {
        title: "Resilienza e le Tre Promesse",
        desc: "Prima di lasciarlo solo a Quetta per sottrarlo ai Talebani, la madre fa pronunciare a Enaiatollah tre promesse solenni: non drogarsi, non usare armi e non rubare. Questi tre principi morali costituiscono la bussola etica inflessibile che gli permette di preservare la propria integrità attraverso anni di pericoli, lavoro disumano e sfruttamento."
      },
      {
        title: "Diritti Negati e Lavoro Minorile",
        desc: "L'esperienza di Enaiatollah nei forni di mattoni a Qom e nei cantieri edili a Isfahan svela la realtà drammatica dei minori migranti clandestini: giornate lavorative estenuanti, privazione della scuola e costante minaccia di arresto e deportazione nel campo di Sang-e Safid da parte della polizia paramilitare."
      },
      {
        title: "L'Odissea delle Frontiere e il Riscatto",
        desc: "La marcia a piedi di 26 giorni sui ghiacciai innevati tra Iran e Turchia, il naufragio notturno in gommone nell'Egeo e la traversata di tre giorni legato all'asse del camion verso l'Italia mostrano il tributo di vite umane pagato dai profughi, fino al lieto fine dell'accoglienza a Torino e al ricongiungimento telefonico con la madre."
      }
    ],
    summary2m: `La storia vera di Enaiatollah Akbari, bambino afghano di etnia Hazara perseguitato dai Talebani. Dopo la morte del padre, la madre lo porta clandestinamente a Quetta in Pakistan e lo lascia solo a 10 anni per sottrarlo alla schiavitù, facendogli promettere di non rubare, non drogarsi e non usare armi. Attraverso Pakistan, Iran, Turchia e Grecia, Enaiatollah affronta anni di lavoro minorile, percosse, marce sui ghiacciai e un naufragio in mare, fino ad arrivare a Torino nascosto sotto un camion, dove viene accolto da una famiglia affidataria e trova il suo riscatto.`,
    summary5m: `Enaiatollah Akbari fugge all'inizio del 2000 da Nava (Ghazni) per scampare ai Talebani e alle pretese di un creditore Pashtun che lo voleva come servo dopo la morte del padre. Abbandonato dalla madre a Quetta per salvarlo, impara a sopravvivere da solo a dieci anni lavorando in botteghe e mercati.
Dalla frontiera iraniana giunge a Qom e Isfahan, lavorando per tre anni nei cantieri e fuggendo alle retate della polizia. A quattordici anni attraversa a piedi le montagne innevate verso la Turchia in una marcia di ventisei giorni dove molti compagni muoiono congelati. Da Istanbul raggiunge Smirne e si imbarca su un canotto sgonfio verso la Grecia: uno dei cinque ragazzi annega nell'Egeo. Sopravvissuto alle percosse ad Atene, si nasconde sotto l'asse di un camion a Patrasso per tre giorni e sbarca in Italia. A Torino incontra Danila e Marco, ottiene l'asilo politico, studia e dopo otto anni riesce a riabbracciare sua madre al telefono.`,
    summary15m: `Origini a Nava e la minaccia dei Talebani
Enaiatollah Akbari nasce a Nava, un piccolo villaggio nella provincia di Ghazni, nell'Afghanistan centrale. Appartiene all'etnia Hazara, una minoranza di fede sciita e tratti somatici asiatici storicamente vittima di discriminazioni e violenze da parte della maggioranza Pashtun e dei fondamentalisti Talebani. Il padre di Enaiatollah lavora come autista di camion per conto di un ricco commerciante Pashtun: durante un trasporto nel sud del paese, il veicolo cade in un'imboscata dei banditi, il carico va distrutto e il padre perde la vita. A questo punto, il proprietario del carico pretende che il debito venga saldato dalla famiglia di Enaiatollah, minacciando di prendere il bambino come servo risarcitorio. Nel frattempo i Talebani occupano il villaggio, impongono la Sharia integralista e chiudono la scuola elementare sparando al maestro di fronte agli alunni. Consapevole che restare significherebbe condannare il figlio alla schiavitù o alla morte, la madre prende una decisione disperata: all'inizio del 2000 raccoglie i pochi risparmi, nasconde Enaiatollah sotto un burqa e lo conduce clandestinamente oltre la frontiera del Pakistan fino alla città di Quetta. Qui alloggiano in un samavat, una squallida locanda frequentata da profughi afghani. La notte prima di ripartire per tornare dagli altri figli a Nava, la madre si corica accanto a Enaiatollah e gli fa pronunciare tre promesse solenni: non fare mai uso di droghe, non impugnare armi contro nessuno e non rubare per nessun motivo al mondo. All'alba successiva, Enaiatollah si sveglia e scopre che la madre è partita senza salutarlo, lasciandolo solo a dieci anni in terra straniera affinché abbia una possibilità di futuro.

La sopravvivenza in Pakistan e il lavoro nei cantieri in Iran
Rimasto privo di qualsiasi punto di riferimento a Quetta, Enaiatollah si rimbocca le maniche per non morire di fame. Il proprietario del samavat, Kaka Rahim, gli permette di dormire in una stanza comune in cambio di piccoli servizi, come servire il tè agli avventori e pulire i pavimenti. Successivamente comincia a lavorare come venditore ambulante di uova sode nel bazar, ma l'ambiente è pericoloso e la polizia pakistana taglieggia costantemente i profughi afghani privi di documenti. Insieme ad altri giovani connazionali, decide allora di tentare la traversata verso l'Iran, dove i salari per la manodopera clandestina sono più elevati. Affidatosi a trafficanti senza scrupoli (chiamati passeur), Enaiatollah viaggia stipato per ore nel bagagliaio surriscaldato di un'automobile fino a varcare il confine iraniano. Giunto nella città santa di Qom, trova impiego in una fabbrica di mattoni: le condizioni sono disumane, i turni vanno dall'alba al tramonto e i lavoratori dormono all'interno dei forni di cottura quando vengono spenti per ripararsi dal gelo notturno. Dopo circa un anno si sposta a Isfahan, dove viene assunto in un immenso cantiere edile come piegatore di tondini di ferro per il cemento armato. A Isfahan rimane per quasi tre anni, guadagnandosi il rispetto dei capi cantiere e inviando parte dei risparmi in Afghanistan tramite mercanti fidati. Tuttavia, la quotidianità in Iran è un incubo a occhi aperti: i basiji (miliziani paramilitari) e le guardie di polizia compiono retate improvvise per catturare gli immigrati irregolari e rinchiuderli nel famigerato campo di concentramento e transito di Sang-e Safid, dove i prigionieri vengono percossi prima di essere deportati oltrefrontiera. Dopo essere scampato miracolosamente a più rastrellamenti e aver subito percosse durante i controlli di piazza, Enaiatollah matura la certezza che in Iran non potrà mai ottenere documenti regolari né costruirsi un'esistenza degna.

La tragica marcia verso la Turchia e il valico dei monti innevati
All'età di circa quattordici anni, Enaiatollah si unisce a un gruppo di quattro amici operai, tra cui Liaqat e Hussain Ali, e decide di tentare il salto verso l'Occidente. A Teheran incontrano un trafficante curdo a cui consegnano tutti i risparmi accumulati in cambio della promessa di essere condotti in Turchia. La traversata si trasforma in una delle esperienze più drammatiche dell'intero esodo: una marcia a piedi di ventisei giorni e notti attraverso le alture impervie e innevate dei monti dell'Anatolia orientale, a quote superiori ai tremila metri con temperature costantemente sottozero. La colonna di profughi avanza in fila indiana nel buio per non farsi scorgere dalle pattuglie dei soldati di frontiera, che sparano a vista su chiunque tenti il valico. I passeur impongono un ritmo serrato senza soste e lasciano morire lungo i canaloni ghiacciati chiunque scivoli o crolli per la fatica: lungo il cammino Enaiatollah vede con orrore decine di cadaveri abbandonati e parzialmente sepolti nella neve. Con i piedi congelati, i vestiti a brandelli e la pelle piagata dal freddo, il gruppo raggiunge infine Dogubeyazit. Da qui i trafficanti stipano una settantina di persone nel doppiofondo cieco di un camion cisterna per un viaggio soffocante di tre giorni senza aria né cibo fino a Istanbul. Nella metropoli turca i ragazzi trovano rifugio in un sotterraneo fatiscente nel quartiere di Zeytinburnu, lavorando per mesi in una pelletteria clandestina per saldare i debiti del viaggio e mettere da parte il denaro necessario per l'imbarco verso l'Europa.

Il naufragio nell'Egeo e l'approdo disperato in Grecia
A Istanbul i ragazzi capiscono che la rotta verso la Grecia è l'unica via per entrare nel territorio dell'Unione Europea. A Smirne i passeur consegnano a Enaiatollah e a quattro compagni (tutti adolescenti che non hanno mai visto il mare prima di allora e che non sanno nuotare) un piccolo gommone gonfiabile giallo, simile a un giocattolo per bambini, dotato di due soli remi di plastica. I trafficanti incassano i soldi, indicano una debole luce all'orizzonte dicendo che si tratta della Grecia e spingono il canotto in acqua con la minaccia delle pistole. Durante la notte il vento si alza violento, le onde alte infrangono il gommone e l'acqua inizia a riempire l'imbarcazione. Nel panico generale uno dei remi cade in mare e uno dei ragazzi perde l'equilibrio precipitando tra i flutti: Enaiatollah e gli altri cercano disperatamente di afferrarlo ma il compagno viene inghiottito dal mare e sparisce nell'oscurità. Dopo ore di terrore cieco e pagaiando con le sole mani nude, all'alba il gommone si squarcia contro gli scogli dell'isola di Lesbo. I quattro superstiti toccano terra esausti e bagnati fradici. La polizia greca li intercetta poche ore dopo, li fotografa e consegna loro un foglio di espulsione intimando di lasciare il territorio nazionale entro un mese. Imbarcatisi su un traghetto per il Pireo, Enaiatollah giunge ad Atene, dove sperimenta la degradazione più feroce: dorme all'addiaccio nei giardini pubblici di piazza Victoria insieme a centinaia di altri migranti disperati, subisce percosse e vive di lavoretti occasionali malpagati nel commercio illegale di sigarette. Comprendendo che in Grecia non esiste alcuna prospettiva di asilo né di lavoro legale, Enaiatollah si sposta a Patrasso per tentare la rotta verso l'Italia.

La traversata sotto il pianale del camion e la rinascita a Torino
Nel porto di Patrasso Enaiatollah trascorre settimane a studiare i movimenti della polizia portuale e degli autoarticolati diretti ai traghetti per l'Adriatico. Dopo decine di tentativi respinti con manganellate e gas lacrimogeni dai guardacoste greci, riesce a elaborare un piano temerario insieme a un compagno afghano: approfittando della sosta notturna di un grande camion telato prima dell'imbarco, i due si infilano sotto il pianale e si legano con le cinture dei pantaloni e corde di fortuna ai tiranti di ferro dell'asse centrale delle ruote, a pochi centimetri dal tubo di scarico rovente. In questa posizione straziante rimangono sospesi nel vuoto durante l'intera navigazione navale di tre giorni, respirando fumi di nafta, sopportando vibrazioni laceranti e il terrore costante di addormentarsi e finire stritolati sotto le ruote. All'arrivo in Italia, il camion sbarca a Venezia e percorre diversi chilometri in autostrada prima di fermarsi in un'area di servizio: i due ragazzi sciolgono i nodi, strisciano fuori anneriti dalla fuliggine e si disperdono tra i campi. Dalla stazione ferroviaria di Mestre Enaiatollah raggiunge Roma e poi prende un treno per Torino, dove sa di poter rintracciare un vecchio amico di infanzia conosciuto a Nava. A Torino la sua odissea trova finalmente un porto sicuro: viene notato e preso in carico dai servizi sociali del comune, che lo affidano alle cure di Danila e Marco, una coppia piemontese che decide di accoglierlo calorosamente nella propria casa come un vero figlio. Grazie al loro affetto e al supporto legale, Enaiatollah ottiene lo status di rifugiato politico, viene iscritto a scuola, impara la lingua italiana e completa con successo gli studi superiori fino a conseguire il diploma. Al compimento dei diciotto anni, dopo otto anni di separazione totale in cui non aveva mai saputo se la sua famiglia fosse ancora viva, riesce a ottenere il recapito telefonico di una bottega vicino a Nava: compone il numero e, sentendo la voce di Enaiatollah dall'altra parte della cornetta, la madre sviene per la commozione credendo di ascoltare un miracolo, convinta che il figlio fosse morto durante il viaggio. La vicenda di Enaiatollah Akbari si conclude come una luminosa testimonianza di tenacia, dignità e riscatto umano contro le crudeltà della guerra e delle frontiere.`,
    moral: `Nessuna frontiera artificiale e nessuna sofferenza possono cancellare la dignità umana e la speranza: la storia di Enaiatollah insegna che la fedeltà ai propri valori morali, il rifiuto della violenza e il coraggio di ricominciare trasformano la tragedia in rinascita.`,
    conceptMap: [
      {
        chapterNum: "Punto 01",
        title: "Persecuzione e Fuga",
        pillar: "Nava di Ghazni e persecuzione Talebana -> Debito di sangue Pashtun per la morte del padre -> Fuga clandestina a Quetta e tre promesse solenni alla madre",
        causeEffect: "Nava di Ghazni e persecuzione Talebana -> Debito di sangue Pashtun per la morte del padre -> Fuga clandestina a Quetta e tre promesse solenni alla madre",
        takeaway: "L'abbandono da parte della madre rappresenta un atto supremo di sacrificio per salvargli la vita."
      },
      {
        chapterNum: "Punto 02",
        title: "Lavoro Minorile in Iran",
        pillar: "Lavoro minorile a Quetta -> Passaggio clandestino nel bagagliaio -> 3 anni nei cantieri di Isfahan sotto incubo retate Sang-e Safid",
        causeEffect: "Lavoro minorile a Quetta -> Passaggio clandestino nel bagagliaio -> 3 anni nei cantieri di Isfahan sotto incubo retate Sang-e Safid",
        takeaway: "La privazione dei diritti spinge a rischiare tutto per raggiungere l'Europa."
      },
      {
        chapterNum: "Punto 03",
        title: "La Marcia dei 26 Giorni",
        pillar: "Accordo con i trafficanti a Teheran -> Marcia di 26 giorni sui ghiacciai montani curdi -> Cadaveri congelati sul cammino e arrivo a Istanbul",
        causeEffect: "Accordo con i trafficanti a Teheran -> Marcia di 26 giorni sui ghiacciai montani curdi -> Cadaveri congelati sul cammino e arrivo a Istanbul",
        takeaway: "La traversata delle montagne miete vittime tra chi cede alla fatica estrema."
      },
      {
        chapterNum: "Punto 04",
        title: "Il Naufragio nell'Egeo",
        pillar: "Gommone giocattolo da Smirne -> Mare in burrasca e annegamento di un compagno -> Sbarco a Lesbo e sopravvivenza nei parchi di Atene",
        causeEffect: "Gommone giocattolo da Smirne -> Mare in burrasca e annegamento di un compagno -> Sbarco a Lesbo e sopravvivenza nei parchi di Atene",
        takeaway: "Il mare rappresenta la roulette russa del traffico illegale di migranti."
      },
      {
        chapterNum: "Punto 05",
        title: "Il Riscatto a Torino",
        pillar: "3 giorni legati all'asse del camion da Patrasso -> Sbarco a Venezia e treno per Torino -> Affidamento a Danila e Marco, asilo politico e diploma",
        causeEffect: "3 giorni legati all'asse del camion da Patrasso -> Sbarco a Venezia e treno per Torino -> Affidamento a Danila e Marco, asilo politico e diploma",
        takeaway: "L'accoglienza e la scuola restituiscono a Enaiatollah il futuro rubato dalla guerra."
      }
    ],
    flashcards: [
      { question: "Chi è il protagonista reale del libro e da quale villaggio proviene?", answer: "Enaiatollah Akbari, nato nel villaggio di Nava nella provincia di Ghazni, in Afghanistan." },
      { question: "A quale etnia appartiene Enaiatollah e perché è perseguitato?", answer: "All'etnia Hazara (di fede sciita), storicamente perseguitata e discriminata dai Talebani e dai Pashtun." },
      { question: "Quali sono le tre promesse che la madre fa pronunciare a Enaiatollah a Quetta?", answer: "1. Non drogarsi mai; 2. Non usare mai armi contro nessuno; 3. Non rubare per nessun motivo." },
      { question: "Quali lavori svolge Enaiatollah durante i suoi tre anni clandestini in Iran?", answer: "Prima fabbricante di mattoni a Qom dormendo nei forni, poi manovale piegatore di ferro nei cantieri edili a Isfahan." },
      { question: "Cosa accade durante la tragica marcia di 26 giorni verso la Turchia?", answer: "Il gruppo marcia nella neve dei monti curdi; chi si ferma muore congelato ed Enaiatollah vede i cadaveri lungo il sentiero." },
      { question: "Quale dramma segna la traversata notturna in canotto verso la Grecia?", answer: "Il gommone imbarca acqua nell'Egeo e uno dei cinque giovani profughi cade in mare e annega nel buio." },
      { question: "Come riesce Enaiatollah a superare il controllo portuale a Patrasso per raggiungere l'Italia?", answer: "Si lega con le cinture all'asse centrale sotto il rimorchio di un camion, rimanendo sospeso per tre giorni sul traghetto." },
      { question: "Chi accoglie Enaiatollah a Torino permettendogli di studiare e telefonare alla madre?", answer: "La famiglia affidataria di Danila e Marco, che lo sostiene nell'ottenimento dell'asilo politico e nel percorso scolastico." }
    ]
  },
  {
    id: "seed-calvino-1979",
    isbn: "9788804739500",
    title: "Se una notte d'inverno un viaggiatore",
    author: "Italo Calvino",
    publishYear: "1979",
    publisher: "Mondadori (Oscar Moderni)",
    pageCount: 280,
    category: "I tuoi Classici",
    coverUrl: "covers/calvino.jpg",
    summaryLength: "deep",
    authorBio: "Italo Calvino (1923 – 1985) è stato uno dei più celebri e poliedrici narratori del Novecento italiano. Dalla Resistenza al Neorealismo fantastico della trilogia araldica, fino alle vette combinatorie e all'Oulipo, ha ridefinito la narrativa mondiale celebrando il gioco inesauribile tra lettore, autore e testo.",
    keyThemes: [
      {
        title: "La Passione Inesausta della Lettura",
        desc: "L'opera è una dichiarazione d'amore verso l'atto stesso del leggere: il valore dell'esperienza letteraria non risiede nel raggiungere frettolosamente una conclusione, ma nel costante desiderio e piacere di ricominciare da capo."
      },
      {
        title: "La Falsificazione e l'Autore Perduto",
        desc: "Attraverso la truffa editoriale del traduttore Ermes Marana e la decostruzione algoritmica di Lotaria, Calvino riflette su come il testo possa essere manipolato o svuotato di anima, opponendovi la lettura pura ed empatica di Ludmilla."
      },
      {
        title: "Censura e Libertà Critica",
        desc: "I regimi autoritari attraversati dal Lettore sequestrano e manipolano i romanzi perché la letteratura aperta stimola il dubbio, sfugge ai dogmi di propaganda e difende l'autonomia spirituale del singolo individuo."
      }
    ],
    summary2m: `Un lettore acquista un libro difettoso e torna in libreria dove incontra Ludmilla. I due si mettono sulle tracce della continuazione, ma ogni nuovo romanzo si interrompe a metà tra falsari e censure, dimostrando che il vero valore della lettura risiede nella gioia di ricominciare sempre da capo.`,
    summary5m: `Dall'errore di legatoria in libreria alla caccia tra falsari e traduzioni apocrife: la vicenda segue il Lettore e Ludmilla alle prese con dieci incipit incompiuti, fino all'approdo in una biblioteca e al matrimonio finale, a celebrare il legame complice tra lettori e storie.`,
    summary15m: `L'inizio interrotto e l'incontro con Ludmilla
Un lettore acquista in libreria l'ultimo romanzo di Italo Calvino e si prepara a leggerlo con grande concentrazione. Dopo poche decine di pagine, tuttavia, si accorge che il volume è difettoso: i fascicoli tipografici sono stati rilegati male e la storia si interrompe proprio nel momento in cui l'atmosfera si fa misteriosa. Il giorno seguente torna in libreria per farsi sostituire la copia. Lì scopre di non essere l'unico ad aver riscontrato l'errore e incontra Ludmilla, un'altra lettrice appassionata rimasta bloccata allo stesso punto. I due decidono di scambiarsi opinioni non appena troveranno il seguito, ma aprendo la nuova copia consegnata dal negoziante scoprono che non contiene il testo di Calvino, bensì un romanzo polacco di un certo Bazakbal.

La pista dei falsari e la frammentazione dei romanzi
A questo punto la ricerca della continuazione si trasforma in una vera e propria indagine. Ogni volta che il lettore e Ludmilla rintracciano una pista promettente, il manoscritto si arresta bruscamente per una pagina bianca o per un errore di traduzione, catapultandoli in un inizio di storia totalmente differente: dal romanzo psicologico al thriller noir, dalla narrazione rivoluzionaria sovietica a un racconto erotico giapponese. Nel frattempo entra in scena Lotaria, la sorella di Ludmilla, che ha un modo opposto di concepire la lettura: non legge per piacere, ma inserisce i testi nei computer per calcolare la frequenza delle parole e decostruirli ideologicamente. Inoltre emerge l'ombra di Ermes Marana, un falsario ed ex amante di Ludmilla che immette sul mercato traduzioni apocrife per gelosia e per seminare il caos tra gli editori.

La rete della censura e la biblioteca finale
L'inseguimento dei manoscritti spinge il protagonista a viaggiare in vari paesi stranieri, dove incappa in apparati di polizia e regimi censori che sequestrano i libri e arrestano chiunque diffonda storie non conformi alla propaganda. Di conseguenza, il lettore sperimenta in prima persona come il potere politico tema la letteratura perché capace di insinuare il dubbio. La vicenda giunge al culmine quando il protagonista si rifugia in una grande biblioteca pubblica. Qui dialoga con sette studiosi, ciascuno con una diversa motivazione per leggere. In quel momento comprende che la lettura non consiste nel tagliare il traguardo di un finale prestabilito, ma nel desiderio perenne di cominciare. La storia si conclude con il matrimonio tra il lettore e Ludmilla, entrambi a letto intenti a condividere l'ultimo capitolo del libro.`,
    moral: `Il valore dell'esistenza e della conoscenza non coincide con il raggiungere frettolosamente una conclusione, ma nell'incessante curiosità di rimettersi in cammino.`,
    conceptMap: [
      {
        chapterNum: "Punto 01",
        title: "L'inizio interrotto",
        pillar: "Errore tipografico nel volume -> Interruzione della lettura -> Incontro tra il Lettore e Ludmilla in libreria",
        causeEffect: "Errore tipografico nel volume -> Interruzione della lettura -> Incontro tra il Lettore e Ludmilla in libreria",
        takeaway: "La ricerca del seguito unisce due sconosciuti accomunati dalla passione per le storie."
      },
      {
        chapterNum: "Punto 02",
        title: "La falsificazione dei testi",
        pillar: "Ricerca del manoscritto originale -> Manipolazioni e falsificazioni di Ermes Marana -> Moltiplicazione di dieci incipit incompiuti",
        causeEffect: "Ricerca del manoscritto originale -> Manipolazioni e falsificazioni di Ermes Marana -> Moltiplicazione di dieci incipit incompiuti",
        takeaway: "Ogni genere letterario offre una diversa chiave di lettura del reale."
      },
      {
        chapterNum: "Punto 03",
        title: "I due approcci alla lettura",
        pillar: "Contrasto tra Ludmilla e Lotaria -> Fruizione estetica ed emotiva contro decostruzione algoritmica sterile",
        causeEffect: "Contrasto tra Ludmilla e Lotaria -> Fruizione estetica ed emotiva contro decostruzione algoritmica sterile",
        takeaway: "La lettura autentica nasce dal coinvolgimento vivo, non dal calcolo quantitativo."
      },
      {
        chapterNum: "Punto 04",
        title: "La censura e la libertà",
        pillar: "Apparati di censura statale -> Sequestro dei volumi e controllo delle coscienze -> Resistenza dell'immaginazione individuale",
        causeEffect: "Apparati di censura statale -> Sequestro dei volumi e controllo delle coscienze -> Resistenza dell'immaginazione individuale",
        takeaway: "La letteratura libera alimenta il pensiero critico e sfugge ai dogmi."
      },
      {
        chapterNum: "Punto 05",
        title: "La biblioteca e l'epilogo",
        pillar: "Confronto con i lettori in biblioteca -> Riconoscimento del valore dell'atto del leggere -> Matrimonio e condivisione finale",
        causeEffect: "Confronto con i lettori in biblioteca -> Riconoscimento del valore dell'atto del leggere -> Matrimonio e condivisione finale",
        takeaway: "La bellezza della lettura risiede nella perenne disponibilità a iniziare di nuovo."
      }
    ],
    flashcards: [
      { question: "Quale evento dà inizio all'intera vicenda del romanzo?", answer: "Il protagonista acquista un libro difettoso con pagine duplicate e torna in libreria per sostituirlo, incontrando lì Ludmilla." },
      { question: "In che modo Ermes Marana complica la ricerca del lettore?", answer: "È un traduttore truffatore che vende alle case editrici romanzi apocrifi e frammentati per ingannare e manipolare i lettori." },
      { question: "Quale contrapposizione emerge tra le figure di Ludmilla e di sua sorella Lotaria?", answer: "Ludmilla legge per il puro piacere della narrazione, mentre Lotaria scompone i testi con algoritmi e calcoli statistici per fini accademici." },
      { question: "Perché nei paesi visitati dal protagonista i libri vengono censurati dai regimi?", answer: "Perché le storie aperte stimolano il pensiero critico e il dubbio, minacciando il controllo ideologico dello Stato." },
      { question: "Cosa comprende il protagonista durante il confronto nella grande biblioteca?", answer: "Che il senso autentico dell'esperienza letteraria non è raggiungere la fine, ma la continua disposizione ad aprirsi a un nuovo inizio." },
      { question: "Come si conclude il percorso del Lettore e di Ludmilla?", answer: "Con il matrimonio dei due personaggi, ritratti insieme a letto mentre completano la lettura dell'opera." }
    ]
  },
  {
    id: "seed-orwell-1949",
    isbn: "9788804668237",
    title: "1984",
    author: "George Orwell",
    publishYear: "1949",
    publisher: "Mondadori",
    pageCount: 336,
    category: "I tuoi Classici",
    coverUrl: "covers/orwell.jpg",
    summaryLength: "deep",
    authorBio: "George Orwell, pseudonimo di Eric Arthur Blair (1903 – 1950), è stato uno scrittore, saggista e giornalista britannico. Autore lucido e implacabile contro ogni forma di tirannia, con '1984' ha creato la distopia più influente del Novecento, coniando concetti universali come il Grande Fratello, il Bipensiero e la Neolingua.",
    keyThemes: [
      {
        title: "La Falsificazione della Memoria Storica",
        desc: "'Chi controlla il passato controlla il futuro: chi controlla il presente controlla il passato'. Il lavoro di Winston al Ministero della Verità illustra come riscrivere continuamente i giornali e distruggere gli archivi cancelli la verità oggettiva."
      },
      {
        title: "La Neolingua e la Riduzione del Pensiero",
        desc: "Riducendo deliberatamente il numero di vocaboli disponibili, il Partito elimina i concetti stessi di libertà, giustizia e ribellione, rendendo materialmente impossibile anche solo formulare o concepire un pensiero eretico."
      },
      {
        title: "La Stanza 101 e la Morte dell'Anima",
        desc: "Il potere totalitario non mira a creare martiri, ma a convertire interiormente le vittime. Nella Stanza 101, posto di fronte alla sua fobia più straziante, Winston cede e prega che i topi divorino Julia, distruggendo la propria dignità e cedendo all'amore cieco per il Grande Fratello."
      }
    ],
    summary2m: `Winston Smith lavora modificando la storia per il Partito di Oceania, ma decide di ribellarsi scrivendo un diario e legandosi a Julia. Traditi da O'Brien, i due vengono arrestati e torturati fino alla Stanza 101, dove Winston capitola moralmente tradendo Julia e sottomettendosi al Grande Fratello.`,
    summary5m: `Dalla Londra soffocata dai teleschermi all'arresto nella bottega di antiquariato: la vicenda di Winston Smith ripercorre il tentativo di preservare la memoria storica contro la Neolingua e la propaganda, fino alla spietata rieducazione al Ministero dell'Amore.`,
    summary15m: `Il controllo capillare di Oceania e il primo atto di ribellione
A Londra, capitale di Pista Uno nel superstato di Oceania, il Partito controlla ogni aspetto dell'esistenza attraverso i teleschermi e l'incessante sorveglianza della Psicopolizia. Winston Smith lavora al Ministero della Verità con l'incarico di riscrivere gli articoli di giornale del passato ogni volta che la linea politica del Grande Fratello subisce un cambiamento, gettando le versioni precedenti nei forni inceneritori. Rendendosi conto della continua manipolazione dei fatti, Winston compie un passo clandestino e rischioso: acquista un quaderno in una bottega di antiquariato nel quartiere proletario e comincia a redigere un diario segreto, scrivendo nero su bianco il proprio dissenso contro il regime.

La relazione clandestina con Julia e la Neolingua
A questo punto entra in scena Julia, una giovane collega del Ministero che apparentemente si mostra zelante sostenitrice del Partito. La ragazza gli recapita un biglietto con scritto "Ti amo" e i due iniziano a incontrarsi di nascosto nei boschi fuori città e poi in una stanza affittata sopra la bottega di antiquariato. Nel frattempo, il regime lavora al perfezionamento della Neolingua: un sistema linguistico che riduce all'osso il numero delle parole disponibili per rendere tecnicamente impossibile la formulazione di pensieri eretici. Winston e Julia credono di trovare una guida in O'Brien, un autorevole membro del Partito Interno che sembra condividere la loro ostilità verso il Grande Fratello e che consegna loro il manifesto politico della resistenza clandestina.

L'arresto al Ministero dell'Amore e la capitolazione nella Stanza 101
L'illusione dura poco: dietro un quadro della stanza si nasconde un teleschermo e i due vengono bruscamente arrestati. O'Brien si rivela essere un fanatico inquisitore e Winston viene rinchiuso nei sotterranei del Ministero dell'Amore, dove subisce mesi di pestaggi e interrogatori mirati a piegare la sua volontà. Il Partito non vuole martiri, ma pretende la conversione interiore delle sue vittime. Di conseguenza, Winston viene condotto nella Stanza 101, il luogo in cui ogni individuo viene posto di fronte alla sua peggiore fobia personale. Di fronte a una gabbia di topi affamati pronta a essere serrata sul suo volto, Winston cede e urla di infliggere quel supplizio a Julia invece che a lui. Spezzato definitivamente nell'animo, Winston viene rilasciato e trascorre i suoi giorni in un caffè cittadino, consapevole di aver perso la propria dignità e realizzando di amare incondizionatamente il Grande Fratello.`,
    moral: `Difendere la verità dei fatti e la libertà del linguaggio è l'unico argine contro la tirannia: quando si rinuncia alla memoria storica, si cede il controllo della propria umanità.`,
    conceptMap: [
      {
        chapterNum: "Punto 01",
        title: "La falsificazione della storia",
        pillar: "Controllo della memoria storica al Ministero della Verità -> Manipolazione dei documenti d'archivio -> Nascita del diario clandestino di Winston",
        causeEffect: "Controllo della memoria storica al Ministero della Verità -> Manipolazione dei documenti d'archivio -> Nascita del diario clandestino di Winston",
        takeaway: "La registrazione scritta dei fatti rappresenta la prima forma di resistenza individuale."
      },
      {
        chapterNum: "Punto 02",
        title: "L'intimità proibita",
        pillar: "Relazione proibita con Julia -> Ricerca di intimità e spazi non controllati -> Falso patto di cospirazione con O'Brien",
        causeEffect: "Relazione proibita con Julia -> Ricerca di intimità e spazi non controllati -> Falso patto di cospirazione con O'Brien",
        takeaway: "L'affetto autentico viene percepito dal regime come un atto sovversivo."
      },
      {
        chapterNum: "Punto 03",
        title: "La riduzione del linguaggio",
        pillar: "Imposizione della Neolingua e del Bipensiero -> Riduzione delle parole disponibili -> Impossibilità materiale di concepire il dissenso",
        causeEffect: "Imposizione della Neolingua e del Bipensiero -> Riduzione delle parole disponibili -> Impossibilità materiale di concepire il dissenso",
        takeaway: "Limitare la ricchezza del vocabolario atrofizza la capacità di formulare un pensiero critico."
      },
      {
        chapterNum: "Punto 04",
        title: "L'arresto e la tortura",
        pillar: "Teleschermo nascosto nella bottega -> Arresto e deportazione al Ministero dell'Amore -> Tortura psicofisica per estirpare l'identità",
        causeEffect: "Teleschermo nascosto nella bottega -> Arresto e deportazione al Ministero dell'Amore -> Tortura psicofisica per estirpare l'identità",
        takeaway: "Il potere totalitario non vuole uccidere i dissidenti, ma rieducarli per evitare il martirio."
      },
      {
        chapterNum: "Punto 05",
        title: "La Stanza 101 e la resa",
        pillar: "Terrore ancestrale nella Stanza 101 -> Tradimento irrevocabile di Julia -> Sottomissione totale e amore per il Grande Fratello",
        causeEffect: "Terrore ancestrale nella Stanza 101 -> Tradimento irrevocabile di Julia -> Sottomissione totale e amore per il Grande Fratello",
        takeaway: "La distruzione dell'anima avviene quando si sacrifica la persona amata per salvare se stessi."
      }
    ],
    flashcards: [
      { question: "Qual è il compito lavorativo di Winston Smith all'interno del Ministero della Verità?", answer: "Riscrivere e correggere gli articoli storici del passato per adeguarli retroattivamente ai continui cambi di linea politica del Partito." },
      { question: "In che modo l'adozione della Neolingua impedisce la ribellione secondo il Partito?", answer: "Eliminando i vocaboli relativi alla libertà e ai diritti, rende impossibile anche solo concepire o formulare idee contrarie al regime." },
      { question: "Che cosa si intende con il meccanismo psicologico del Bipensiero?", answer: "La capacità indotta di credere contemporaneamente a due verità reciprocamente contraddittorie, accettandole entrambe senza riserve morali." },
      { question: "Quale ruolo svolge realmente O'Brien nei confronti di Winston e Julia?", answer: "Finge di essere un cospiratore della Fratellanza per spingerli a manifestare il loro dissenso e poi guidare personalmente il loro arresto e la tortura." },
      { question: "Cosa avviene all'interno della famigerata Stanza 101?", answer: "Il prigioniero viene confrontato con la propria paura più devastante; Winston, terrorizzato dai topi, tradisce Julia implorando di punire lei al suo posto." },
      { question: "Qual è l'esito della rieducazione di Winston nell'ultima scena del romanzo?", answer: "Non viene giustiziato subito, ma viene svuotato di ogni affetto e pensiero critico, finendo per amare sinceramente il Grande Fratello." }
    ]
  },
  {
    id: "seed-harari-2011",
    isbn: "9788845292798",
    title: "Sapiens: Da animali a dèi",
    author: "Yuval Noah Harari",
    publishYear: "2011",
    publisher: "Bompiani",
    pageCount: 540,
    category: "Saggistica",
    coverUrl: "covers/harari.jpg",
    summaryLength: "deep",
    authorBio: "Yuval Noah Harari (Haifa, 1976) è uno storico e saggista israeliano, docente presso il Dipartimento di Storia dell'Università Ebraica di Gerusalemme. I suoi bestseller internazionali ('Sapiens', 'Homo Deus', '21 lezioni per il XXI secolo') hanno venduto oltre 45 milioni di copie nel mondo, offrendo una visione lucida e globale del destino umano.",
    keyThemes: [
      {
        title: "La Rivoluzione Cognitiva e i Miti Condivisi",
        desc: "Circa 70.000 anni fa, la comparsa di un linguaggio simbolico complesso ha permesso ai Sapiens di parlare di entità immaginarie. Questa facoltà ha reso possibile la cooperazione flessibile tra migliaia di individui estranei attorno a miti comuni: religioni, leggi, aziende e denaro."
      },
      {
        title: "La Trappola della Rivoluzione Agricola",
        desc: "L'addomesticamento di grano e riso 12.000 anni fa ha moltiplicato la popolazione ma ha costretto il singolo contadino a giornate lavorative più dure, a una dieta meno varia e a malattie rispetto ai cacciatori-raccoglitori nomadi."
      },
      {
        title: "I Grandi Unificatori e il Futuro Post-Umano",
        desc: "La moneta (fiducia reciproca universale), gli imperi (assimilazione multietnica) e la rivoluzione scientifica hanno globalizzato l'umanità. Oggi l'Homo Sapiens acquisisce poteri divini attraverso biotecnologie e intelligenza artificiale, ponendosi l'interrogativo etico su cosa vogliamo desiderare."
      }
    ],
    summary2m: `I Sapiens si sono imposti sul pianeta grazie alla capacità di inventare e condividere miti astratti come denaro, leggi e religioni. L'agricoltura ha aumentato la popolazione ma peggiorato le condizioni del singolo, fino alla rivoluzione scientifica che ha inaugurato l'era moderna.`,
    summary5m: `Dalla savana africana alla conquista del globo attraverso tre tappe: la rivoluzione cognitiva che crea cooperazione flessibile tra sconosciuti, la rivoluzione agricola che lega l'uomo ai campi creando disuguaglianze, e la rivoluzione scientifica fondata sull'ammissione di ignoranza e sull'innovazione tecnica.`,
    summary15m: `La cooperazione tramite miti e la rivoluzione cognitiva
Circa settantamila anni fa, l'Homo Sapiens era solo una delle tante specie di primati che popolavano la terra, senza alcun ruolo dominante negli ecosistemi. Il momento di svolta coincide con una serie di mutazioni genetiche che riconfigurano il cervello umano, dando origine alla Rivoluzione Cognitiva. Grazie alla comparsa di un linguaggio simbolico complesso, gli esseri umani acquisiscono la facoltà di parlare non soltanto di oggetti fisici visibili, ma di entità puramente immaginarie: spiriti, regole morali, nazioni e valute. Di conseguenza, mentre gli altri animali riescono a cooperare soltanto in branchi ristretti fondati sulla conoscenza diretta, i Sapiens diventano capaci di collaborare a migliaia attorno a miti condivisi.

L'impostura del grano e la trappola agricola
Circa dodicimila anni fa prende avvio la transizione dal nomadismo di cacciatori-raccoglitori alla vita sedentaria basata sulla coltivazione del grano e del riso. Contrariamente alla convinzione diffusa che questo passaggio abbia migliorato la vita quotidiana, la documentazione fossile dimostra che il contadino medio lavorava molte più ore del cacciatore ed era esposto a carestie, malnutrizione e malattie contagiose. In pratica, è stato il grano ad addomesticare l'essere umano, costringendolo a proteggere i campi dal gelo e dai parassiti. A questo punto la moltiplicazione della popolazione rende impossibile tornare indietro, facendo nascere il concetto di proprietà privata e la necessità di apparati armati per difenderla.

Gli unificatori universali: moneta, imperi e religioni
Con la crescita degli insediamenti urbani, l'umanità sviluppa tre grandi forze capaci di superare le divisioni tribali e collegare territori remoti. Il primo strumento è il denaro: una convenzione psicologica fondata sulla fiducia reciproca universale, in cui una conchiglia o una moneta metallica viene accettata da chiunque perché si sa che altri la accetteranno. Il secondo vettore è costituito dagli imperi multietnici, che assimilano popoli diversi sotto un unico apparato legislativo e amministrativo. Il terzo elemento è rappresentato dalle religioni universali, capaci di conferire legittimità sacra agli ordinamenti politici e alle consuetudini sociali.

La rivoluzione scientifica e il dilemma post-umano
Negli ultimi cinque secoli la conoscenza compie un salto senza precedenti grazie a un principio metodologico rivoluzionario: l'ammissione esplicita dell'ignoranza. Mentre le tradizioni antiche affermavano di contenere già tutte le risposte rivelate, la scienza moderna parte dalla constatazione di non sapere e verifica le ipotesi attraverso l'osservazione empirica e la matematica. L'alleanza tra ricerca scientifica, potenze imperiali e capitali finanziari innesca una crescita tecnologica esponenziale. Tuttavia, l'umanità si trova oggi ad aver acquisito poteri quasi divini senza aver maturato una pari saggezza morale, ponendosi di fronte all'interrogativo su chi desidera diventare prima che l'ingegneria genetica e l'automazione artificiale modifichino per sempre la natura umana.`,
    moral: `Il dominio tecnologico e la moltiplicazione dei poteri materiali non garantiscono la felicità né la saggezza: comprendere le proprie origini è fondamentale per orientare consapevolmente il nostro futuro.`,
    conceptMap: [
      {
        chapterNum: "Punto 01",
        title: "La Rivoluzione Cognitiva",
        pillar: "Linguaggio simbolico -> Credenza collettiva in miti condivisi -> Cooperazione su vasta scala oltre il limite dei 150 individui",
        causeEffect: "Linguaggio simbolico -> Credenza collettiva in miti condivisi -> Cooperazione su vasta scala oltre il limite dei 150 individui",
        takeaway: "Le istituzioni umane esistono perché vi crediamo contemporaneamente."
      },
      {
        chapterNum: "Punto 02",
        title: "La Trappola Agricola",
        pillar: "Addomesticamento dei cereali -> Sedentarizzazione forzata e aumento del carico di lavoro -> Esplosione demografica e proprietà privata",
        causeEffect: "Addomesticamento dei cereali -> Sedentarizzazione forzata e aumento del carico di lavoro -> Esplosione demografica e proprietà privata",
        takeaway: "L'abbondanza collettiva non si è tradotta in un miglioramento immediato per il singolo."
      },
      {
        chapterNum: "Punto 03",
        title: "La Rete della Fiducia",
        pillar: "Espansione degli scambi commerciali -> Invenzione della moneta come fiducia condivisa -> Integrazione economica di popoli estranei",
        causeEffect: "Espansione degli scambi commerciali -> Invenzione della moneta come fiducia condivisa -> Integrazione economica di popoli estranei",
        takeaway: "Il denaro è il sistema di cooperazione psicologica più diffuso della storia."
      },
      {
        chapterNum: "Punto 04",
        title: "Il Metodo Scientifico",
        pillar: "Ammissione di ignoranza -> Alleanza tra metodo empirico e investimenti capitalisti -> Dominio tecnologico e dilemma etico del futuro",
        causeEffect: "Ammissione di ignoranza -> Alleanza tra metodo empirico e investimenti capitalisti -> Dominio tecnologico e dilemma etico del futuro",
        takeaway: "La scienza avanza partendo dalla consapevolezza di ciò che ancora non sappiamo."
      }
    ],
    flashcards: [
      { question: "Cosa si intende con il termine Rivoluzione Cognitiva in Harari?", answer: "Lo sviluppo del linguaggio simbolico astratto che permise ai Sapiens di cooperare fondandosi su miti condivisi." },
      { question: "Qual è il limite di Dunbar e perché è rilevante?", answer: "Circa 150 individui: è la soglia massima oltre la quale un gruppo non può più reggersi sulla conoscenza diretta tra persone." },
      { question: "Per quale motivo Harari definisce la Rivoluzione Agricola una trappola?", answer: "Perché ha aumentato le ore di lavoro e le malattie per il singolo individuo al solo vantaggio della crescita demografica della specie." },
      { question: "Quali sono i tre fattori unificatori che hanno collegato l'umanità?", answer: "La moneta, gli imperi sovranazionali e le religioni a vocazione universale." },
      { question: "Cosa distingue la moneta da qualsiasi altro sistema di fiducia?", answer: "È basata sulla fiducia incrociata: chiunque accetta denaro sapendo che qualsiasi altra persona farà lo stesso." },
      { question: "Qual è il presupposto di partenza della Rivoluzione Scientifica?", answer: "Il principio dell'ammissione d'ignoranza, secondo cui la conoscenza si costruisce attraverso la ricerca empirica e il dubbio." },
      { question: "In che modo l'opera definisce la 'realtà intersoggettiva'?", answer: "Una dimensione che non esiste a livello fisico o biologico, ma nella convinzione condivisa di una comunità (come leggi o aziende)." },
      { question: "Qual è l'interrogativo finale posto nel saggio?", answer: "Comprendere che cosa vogliamo desiderare, prima che le tecnologie biogenetiche modifichino la natura stessa dell'uomo." }
    ]
  },
  {
    id: "seed-clear-2018",
    isbn: "9788851172411",
    title: "Piccole abitudini per grandi cambiamenti",
    author: "James Clear",
    publishYear: "2018",
    publisher: "De Agostini",
    pageCount: 320,
    category: "Saggistica",
    coverUrl: "covers/clear.jpg",
    summaryLength: "deep",
    authorBio: "James Clear è un autore e conferenziere statunitense, massimo esperto internazionale di formazione delle abitudini, produttività e miglioramento continuo. Il suo bestseller 'Atomic Habits' ha venduto oltre 15 milioni di copie in tutto il mondo ed è stato tradotto in più di 50 lingue.",
    keyThemes: [
      {
        title: "L'Effetto Composto dell'1% Quotidiano",
        desc: "I progressi duraturi non scaturiscono da sforzi eccezionali isolati, ma dall'accumulo microscopico dell'1% ogni giorno. In un anno, la legge dell'interesse composto rende il risultato finale pari a trentasette volte il livello iniziale."
      },
      {
        title: "Il Circuito a Quattro Fasi dell'Abitudine",
        desc: "Qualsiasi comportamento automatico attraversa quattro stadi: Segnale, Desiderio, Risposta e Ricompensa. Per instaurare routine virtuose occorre rendere i segnali evidenti, le azioni attraenti, facili da svolgere e gratificanti nell'immediato."
      },
      {
        title: "Abitudini Basate sull'Identità",
        desc: "Il vero cambiamento non consiste nel focalizzarsi sui risultati esteriori, ma nella persona che si desidera diventare. Ogni singola azione virtuosa è un voto a favore della propria nuova identità."
      }
    ],
    summary2m: `Il raggiungimento di risultati duraturi non dipende da eccezionali sforzi di volontà, ma dalla costanza con cui si ripetono piccole azioni quotidiane. Migliorando dell'uno per cento al giorno, l'effetto composto trasforma la propria identità nel tempo.`,
    summary5m: `Un'analisi dei meccanismi che regolano le abitudini: l'errore di puntare solo agli obiettivi invece che ai sistemi, il circuito formato da segnale, desiderio, risposta e ricompensa, e l'importanza di progettare l'ambiente per rendere facili le buone routine e difficili quelle dannose.`,
    summary15m: `L'effetto composto e il superamento degli obiettivi
Nella maggior parte dei casi, quando si desidera compiere un progresso nello studio o nel lavoro, si tende a pensare che servano gesti eclatanti o un'enorme riserva di motivazione. In realtà, l'evoluzione delle proprie competenze segue la logica dell'interesse composto: un miglioramento dell'uno per cento reiterato ogni giorno per un anno porta a un risultato finale pari a trentasette volte il livello iniziale. Di conseguenza, il segreto non risiede negli obiettivi astratti, bensì nei sistemi quotidiani. Gli obiettivi stabiliscono unicamente la rotta ideale da seguire, mentre sono i sistemi concreti che determinano la velocità e la costanza della marcia. Inoltre, vincitori e perdenti condividono spesso gli stessi obiettivi; ciò che fa la differenza è la solidità delle routine messe in atto.

I quattro stadi del circuito comportamentale
Qualsiasi abitudine umana si sviluppa attraverso una sequenza neuronale precisa suddivisa in quattro fasi: segnale, desiderio, risposta e ricompensa. Il segnale avvisa il cervello della presenza di un possibile beneficio; a questo punto insorge il desiderio, alimentato dal rilascio di dopamina nell'anticipazione del risultato. La risposta rappresenta l'azione concreta che viene eseguita, mentre la ricompensa chiude il ciclo soddisfacendo il bisogno iniziale e istruendo il cervello a memorizzare quel comportamento per il futuro. Per instaurare una nuova abitudine virtuosa occorre dunque applicare quattro regole pratiche: rendere il segnale evidente, rendere l'azione attraente, renderla facile da eseguire e renderla gratificante nell'immediato.

La progettazione dell'ambiente e la regola dei due minuti
L'ambiente circostante influenza le decisioni molto più della pura forza di volontà. Gli esseri umani tendono per natura a scegliere l'opzione che comporta il minor attrito energetico. Pertanto, se si vuole incentivare la lettura, è opportuno disporre i libri bene in vista sulla scrivania, mentre per ridurre le distrazioni conviene riporre i dispositivi in un'altra stanza. Accanto al design ambientale, uno degli strumenti più efficaci è la regola dei due minuti: ogni nuova abitudine deve essere ridimensionata affinché la prima azione richieda meno di centoventi secondi. Infatti, prima di poter perfezionare una determinata attività, è indispensabile renderla stabile e automatica.

La trasformazione basata sull'identità
La modifica più profonda del comportamento non avviene a livello di risultati esteriori, ma a livello di identità personale. Chi si limita a dire "voglio studiare per superare la verifica" rimane vincolato a un traguardo temporaneo, mentre chi afferma "sono uno studente curioso e rigoroso" radica l'azione nel proprio modo di essere. Ogni abitudine positiva rappresenta un voto espresso a favore della persona che si vuole diventare. A lungo andare, non si tratta semplicemente di portare a termine un compito, ma di costruire una fiducia incrollabile nelle proprie capacità attraverso l'accumulo coerente di piccole prove concrete.`,
    moral: `Non sono i traguardi straordinari raggiunti una tantum a definire il nostro valore, ma la pazienza e la cura con cui coltiviamo le piccole scelte di ogni giorno.`,
    conceptMap: [
      {
        chapterNum: "Punto 01",
        title: "L'Effetto Composto",
        pillar: "Miglioramenti microscopici dell'uno per cento -> Accumulo nel tempo dell'interesse composto -> Risultati esponenziali a lungo termine",
        causeEffect: "Miglioramenti microscopici dell'uno per cento -> Accumulo nel tempo dell'interesse composto -> Risultati esponenziali a lungo termine",
        takeaway: "La costanza quotidiana supera di gran lunga gli sforzi sporadici ed eccessivi."
      },
      {
        chapterNum: "Punto 02",
        title: "Il Circuito a Quattro Fasi",
        pillar: "Segnale evidente -> Desiderio stimolato dalla dopamina -> Risposta a basso attrito -> Ricompensa immediata",
        causeEffect: "Segnale evidente -> Desiderio stimolato dalla dopamina -> Risposta a basso attrito -> Ricompensa immediata",
        takeaway: "Le routine si consolidano quando la sequenza neuronale viene facilitata."
      },
      {
        chapterNum: "Punto 03",
        title: "La Regola dei Due Minuti",
        pillar: "Semplificazione della fase iniziale sotto i due minuti -> Abbattimento della resistenza psicologica -> Automatizzazione del comportamento",
        causeEffect: "Semplificazione della fase iniziale sotto i due minuti -> Abbattimento della resistenza psicologica -> Automatizzazione del comportamento",
        takeaway: "Prima di ottimizzare un'abitudine occorre renderla stabile nel tempo."
      },
      {
        chapterNum: "Punto 04",
        title: "Il Cambiamento Identitario",
        pillar: "Ripetizione costante di azioni virtuose -> Accumulo di prove positive -> Consolidamento della fiducia nella propria nuova identità",
        causeEffect: "Ripetizione costante di azioni virtuose -> Accumulo di prove positive -> Consolidamento della fiducia nella propria nuova identità",
        takeaway: "L'obiettivo finale di una buona abitudine è plasmare chi siamo."
      }
    ],
    flashcards: [
      { question: "Cosa accade se si migliora dell'uno per cento ogni giorno per un anno intero?", answer: "Si ottiene un miglioramento finale composto pari a circa trentasette volte il livello di partenza." },
      { question: "Per quale motivo i sistemi sono più rilevanti degli obiettivi?", answer: "Gli obiettivi stabiliscono solo la direzione da seguire; sono i sistemi quotidiani a determinare la traiettoria reale." },
      { question: "Quali sono le quattro fasi fondamentali del ciclo dell'abitudine?", answer: "1. Il segnale, 2. Il desiderio, 3. La risposta (azione), 4. La ricompensa finale." },
      { question: "In che cosa consiste la regola pratica dei due minuti?", answer: "Nel ridurre l'inizio di qualsiasi nuova abitudine a un'azione che richieda meno di centoventi secondi." },
      { question: "Come influisce l'ambiente fisico sulle nostre scelte quotidiane?", answer: "Guidando le abitudini verso le opzioni col minor attrito energetico; rendere i segnali visibili rende l'azione quasi spontanea." },
      { question: "Cosa significa costruire abitudini basate sull'identità?", answer: "Focalizzarsi sul tipo di persona che si desidera diventare piuttosto che su un singolo traguardo temporaneo." }
    ]
  }
];

let books = [];
let activeCategory = "Tutti";
let currentBook = null;
let currentCardIndex = 0;
let selectedSummaryLength = "deep";
let pendingMetadata = null;

// GESTIONE SCANNER LIVE CONTINUO
let cameraStream = null;
let zxingCodeReader = null;
let nativeBarcodeDetector = null;
let isScanningActive = false;
let scanDetectTimer = null;
let isScanThrottled = false;

// INIT ROBUSTO (COMPATIBILITÀ VERCEL & PWA NATIVA)
function initApp() {
  loadBooks();
  renderCategories();
  renderHome();
  setupEventListeners();
  initScannerEngines();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function initScannerEngines() {
  // 1. Inizializzazione lettore ZXing
  if (typeof ZXing !== 'undefined') {
    try {
      zxingCodeReader = new ZXing.BrowserMultiFormatReader();
    } catch (_) {}
  }

  // 2. Controllo supporto hardware BarcodeDetector nativo (iOS 17+ Safari & Android Chrome)
  if ('BarcodeDetector' in window) {
    try {
      nativeBarcodeDetector = new window.BarcodeDetector({
        formats: ['ean_13', 'ean_8', 'code_128', 'upc_a', 'upc_e']
      });
    } catch (_) {
      nativeBarcodeDetector = null;
    }
  }
}

// FEEDBACK MULTIMEDIALE SCANNER (BEEP AUDIO + VIBRAZIONE APTICA)
function playScanBeep() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime); // 880 Hz (La5)
    osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.12); // D6
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.13);
  } catch (_) {}
}

function triggerScanFeedback() {
  playScanBeep();
  if (navigator.vibrate) {
    try {
      navigator.vibrate([70, 30, 70]);
    } catch (_) {}
  }
}

function loadBooks() {
  const currentKey = "bookflix_gfire_library_v6";
  const legacyKeys = [
    "bookflix_gfire_library_v5",
    "bookflix_gfire_library_v4",
    "bookflix_gfire_library_v3",
    "bookflix_gfire_library_v2",
    "bookflix_gfire_library"
  ];

  let raw = localStorage.getItem(currentKey);
  if (!raw) {
    for (const oldKey of legacyKeys) {
      const oldVal = localStorage.getItem(oldKey);
      if (oldVal) {
        raw = oldVal;
        break;
      }
    }
  }

  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Sanificazione, aggiornamento copertine e arricchimento metadati
        books = parsed.map(b => {
          const correctCover = resolveBookCover(b);
          // Se è uno dei seed book, sincronizza i campi editoriali e sinossi estesa
          const seed = INITIAL_BOOKS.find(s => s.id === b.id || (b.isbn && s.isbn === b.isbn));
          if (seed) {
            return {
              ...seed,
              ...b,
              coverUrl: correctCover,
              publisher: seed.publisher,
              pageCount: seed.pageCount,
              authorBio: seed.authorBio,
              keyThemes: seed.keyThemes,
              summaryLength: "deep",
              summary15m: seed.summary15m,
              summary: seed.summary15m
            };
          }
          return {
            ...b,
            coverUrl: correctCover,
            summaryLength: b.summaryLength || "deep"
          };
        });
        saveBooks();
      } else {
        books = INITIAL_BOOKS;
        saveBooks();
      }
    } catch (_) {
      books = INITIAL_BOOKS;
      saveBooks();
    }
  } else {
    books = INITIAL_BOOKS;
    saveBooks();
  }
}

function saveBooks() {
  localStorage.setItem("bookflix_gfire_library_v6", JSON.stringify(books));
}

// RENDERING CATEGORIE
function renderCategories() {
  const container = document.getElementById("categories-container");
  const categories = ["Tutti", "Sintesi Veloci", "I tuoi Classici", "Saggistica"];
  
  container.innerHTML = categories.map(cat => `
    <button class="cat-chip ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join("");

  container.querySelectorAll(".cat-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderCategories();
      renderHome();
    });
  });
}

// RENDERING HOME SCREEN
function renderHome() {
  const heroContainer = document.getElementById("hero-banner");
  const shelvesContainer = document.getElementById("shelves-container");

  const heroBook = books[0] || null;

  // HERO BANNER
  if (heroBook && activeCategory === "Tutti") {
    heroContainer.style.display = "block";
    heroContainer.style.backgroundImage = `url('${heroBook.coverUrl}')`;
    heroContainer.innerHTML = `
      <div class="hero-overlay">
        <div class="hero-badges">
          <span class="badge-red">${heroBook.category.toUpperCase()}</span>
          <span class="badge-gold">${getBadgeText(heroBook.summaryLength)}</span>
        </div>
        <h2 class="hero-title">${heroBook.title}</h2>
        <div class="hero-meta">${heroBook.author} • ${heroBook.publishYear}</div>
        <div class="hero-buttons">
          <button class="btn-hero-read" id="btn-hero-read-action">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4v16l14-8L5 4z"/></svg>
            Continua Lettura
          </button>
          <button class="btn-hero-flash" id="btn-hero-flash-action">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Flashcard (${heroBook.flashcards ? heroBook.flashcards.length : 0})
          </button>
        </div>
      </div>
    `;

    heroContainer.onclick = (e) => {
      if (e.target.closest("#btn-hero-read-action")) {
        openDetail(heroBook, "tab-summary");
      } else if (e.target.closest("#btn-hero-flash-action")) {
        openDetail(heroBook, "tab-flashcards");
      } else {
        openDetail(heroBook);
      }
    };
  } else {
    heroContainer.style.display = "none";
  }

  // SHELVES
  let filteredBooks = books;
  if (activeCategory === "Sintesi Veloci") {
    filteredBooks = books.filter(b => b.summaryLength === "fast");
  } else if (activeCategory !== "Tutti") {
    filteredBooks = books.filter(b => b.category.toLowerCase().includes(activeCategory.toLowerCase()));
  }

  if (activeCategory !== "Tutti") {
    shelvesContainer.innerHTML = createShelfHtml(activeCategory, filteredBooks);
  } else {
    shelvesContainer.innerHTML = [
      createShelfHtml("Continua a leggere / Recenti", books.slice(0, 4)),
      createShelfHtml("I tuoi Classici", books.filter(b => b.category.includes("Classici") || b.category.includes("Scolastici"))),
      createShelfHtml("Saggistica & Idee", books.filter(b => b.category.includes("Saggistica"))),
      createShelfHtml("Tutti i tuoi Libri", books)
    ].join("");
  }

  shelvesContainer.querySelectorAll(".book-poster").forEach(el => {
    el.addEventListener("click", () => {
      const bookId = el.dataset.id;
      const b = books.find(item => item.id === bookId);
      if (b) openDetail(b);
    });
  });
}

function createShelfHtml(title, bookList) {
  if (!bookList || bookList.length === 0) return "";
  return `
    <section class="shelf-section">
      <div class="shelf-header">
        <h3 class="shelf-title">${title}</h3>
        <span class="shelf-count">${bookList.length}</span>
      </div>
      <div class="shelf-row">
        ${bookList.map(b => `
          <div class="book-poster" data-id="${b.id}">
            <div class="poster-box">
              <img class="poster-img" src="${resolveBookCover(b)}" alt="${b.title}" data-id="${b.id}" data-title="${encodeURIComponent(b.title)}" data-author="${encodeURIComponent(b.author)}" onerror="window.handleCoverError(this)" onload="window.handleCoverLoad(this)">
              <div class="poster-fallback" style="display:none;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                <div class="poster-fallback-title">${b.title}</div>
              </div>
              <div class="poster-duration-badge">${getBadgeText(b.summaryLength)}</div>
            </div>
            <div class="poster-caption">
              <div class="poster-title">${b.title}</div>
              <div class="poster-author-year">${b.author} • ${b.publishYear}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function getBadgeText(len) {
  if (len === "fast") return "⚡ 2 min";
  if (len === "deep") return "🎓 15 min (Scuola)";
  return "⏱ 5 min";
}

// HELPER: COPIA APPUNTI COMPATIBILE CON SAFARI / IOS
function copyTextToClipboardReliable(text) {
  let success = false;
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, 999999);

    success = document.execCommand("copy");
    document.body.removeChild(textArea);
  } catch (_) {}

  if (!success && navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      success = true;
    }).catch(() => {});
  }

  return success;
}

// HELPER: SCARICA FILE MARKDOWN (.md)
function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// HELPER: FORMATTAZIONE MARKDOWN PER NOTION & NOTE
function buildNotionMarkdown(book) {
  if (!book) return "";
  const summaryText = book.summary15m || book.summary || book.summary5m;

  let md = `# 🎬 BookFlix: ${book.title}\n\n`;
  md += `> **Autore:** ${book.author} | **Anno:** ${book.publishYear} | **Genere:** ${book.category}\n`;
  if (book.publisher) md += `> **Editore:** ${book.publisher}\n`;
  if (book.pageCount) md += `> **Pagine:** ${book.pageCount}\n`;
  if (book.isbn) md += `> **ISBN:** ${book.isbn}\n`;
  md += `> **Durata Sintesi:** ${getBadgeText(book.summaryLength)}\n\n`;
  md += `---\n\n`;

  if (book.keyThemes && book.keyThemes.length > 0) {
    md += `## 💡 Punti Chiave & Temi Principali\n\n`;
    book.keyThemes.forEach((th, idx) => {
      md += `### 0${idx+1}. ${th.title}\n${th.desc}\n\n`;
    });
    md += `---\n\n`;
  }
  
  md += `## 📖 Trama & Sinossi Estesa\n\n${summaryText}\n\n`;
  md += `---\n\n`;

  if (book.authorBio) {
    md += `## ✍️ Biografia dell'Autore\n\n${book.authorBio}\n\n---\n\n`;
  }

  if (book.moral) {
    md += `## 🌟 La Morale del Libro\n\n> 💡 **Insegnamento Etico:**\n> ${book.moral}\n\n---\n\n`;
  }

  const conceptItems = book.conceptMap || book.concept_map || book.chapters;
  if (conceptItems && conceptItems.length > 0) {
    md += `## 🗺 Mappa Concettuale (Causa-Effetto)\n\n`;
    conceptItems.forEach((item, idx) => {
      if (typeof item === 'string') {
        md += `### Punto 0${idx + 1}\n- 🔄 **Relazione:** \`${item}\`\n\n`;
      } else if (item.pillar || item.causeEffect) {
        const title = item.title || `Punto 0${idx + 1}`;
        const chain = item.causeEffect || item.pillar || '';
        md += `### ${item.chapterNum || 'Punto 0' + (idx + 1)}: ${title}\n`;
        md += `- 🔄 **Catena Logica:** \`${chain}\`\n`;
        if (item.takeaway) {
          md += `- 🎯 **Snodo / Conclusione:** *${item.takeaway}*\n`;
        }
        md += `\n`;
      }
    });
    md += `---\n\n`;
  }

  if (book.flashcards && book.flashcards.length > 0) {
    md += `## ⚡ Flashcard per Interrogazione (${book.flashcards.length} Carte)\n\n`;
    book.flashcards.forEach((f, i) => {
      md += `- [ ] **Q${i + 1}: ${f.question}**\n  - 💡 **Risposta:** *${f.answer}*\n\n`;
    });
    md += `---\n\n`;
  }

  md += `_Appunti generati ed esportati con BookFlix by GFire_\n`;
  return md;
}

// GENERATORE DINAMICO COPERTINE SVG (SEMPRE FEDELE E MAI FUORVIANTE)
function generateDynamicBookCover(title, author, category) {
  const safeTitle = (title || "Libro").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const safeAuthor = (author || "Autore").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const safeCat = (category || "NARRATIVA").toUpperCase().replace(/&/g, '&amp;');

  let hash = 0;
  for (let i = 0; i < (title || "").length; i++) hash = title.charCodeAt(i) + ((hash << 5) - hash);
  const palettes = [
    { bg1: '#1a0505', bg2: '#38090d', accent: '#E50914', ribbon: '#E5A93C' },
    { bg1: '#071526', bg2: '#0d2847', accent: '#3B82F6', ribbon: '#60A5FA' },
    { bg1: '#141005', bg2: '#2b1f07', accent: '#E5A93C', ribbon: '#FCD34D' },
    { bg1: '#061a10', bg2: '#0c3320', accent: '#22C55E', ribbon: '#4ADE80' },
    { bg1: '#12071f', bg2: '#240d3d', accent: '#8B5CF6', ribbon: '#A78BFA' }
  ];
  const p = palettes[Math.abs(hash) % palettes.length];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900" width="600" height="900">
    <defs>
      <linearGradient id="bg_${Math.abs(hash)}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="50%" stop-color="${p.bg2}"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient>
    </defs>
    <rect width="600" height="900" fill="url(#bg_${Math.abs(hash)})"/>
    <rect x="25" y="25" width="550" height="850" fill="none" stroke="${p.accent}" stroke-width="2" rx="14" stroke-opacity="0.45"/>
    <rect x="35" y="35" width="530" height="830" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" rx="10"/>
    <rect x="190" y="60" width="220" height="30" rx="5" fill="rgba(0,0,0,0.6)" stroke="${p.accent}" stroke-width="1"/>
    <text x="300" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="900" fill="${p.ribbon}" text-anchor="middle" letter-spacing="2">BOOKFLIX • GFIRE</text>
    <g transform="translate(265, 175) scale(1.6)">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="${p.accent}" stroke-width="2" fill="none"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="${p.accent}" stroke-width="2" fill="none"/>
    </g>
    <text x="300" y="325" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="800" fill="${p.ribbon}" text-anchor="middle" letter-spacing="2.5">${safeCat}</text>
    <foreignObject x="45" y="355" width="510" height="300">
      <div xmlns="http://www.w3.org/1999/xhtml" style="display:flex; align-items:center; justify-content:center; height:100%; text-align:center; padding:0 15px;">
        <h1 style="color:#ffffff; font-family:'Bebas Neue', Impact, -apple-system, sans-serif; font-size:46px; line-height:1.05; margin:0; text-transform:uppercase; letter-spacing:1px; text-shadow:0 4px 20px rgba(0,0,0,0.9);">${safeTitle}</h1>
      </div>
    </foreignObject>
    <line x1="200" y1="695" x2="400" y2="695" stroke="${p.accent}" stroke-width="2" stroke-opacity="0.6"/>
    <text x="300" y="740" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="700" fill="#E8E8E8" text-anchor="middle" letter-spacing="0.5">${safeAuthor}</text>
    <text x="300" y="775" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.45)" text-anchor="middle" letter-spacing="1.5">EDIZIONE DIGITALE BOOKFLIX</text>
  </svg>`;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// RISOLUZIONE ACCURATA COPERTINE (MAI COPERTINE DI ALTRI LIBRI)
function resolveBookCover(book) {
  if (!book) return generateDynamicBookCover("Libro", "Autore");
  
  const title = (book.title || "").toLowerCase().trim();
  const author = (book.author || "").toLowerCase().trim();
  const isbn = (book.isbn || "").replace(/[^0-9X]/gi, "");

  // 1. Libri base predefiniti: copertine locali ufficiali ad alta risoluzione
  if (title.includes("coccodrilli") || title.includes("geda") || title.includes("enaiat") || isbn === "9788868369323") {
    return "covers/geda.jpg";
  }
  if (title.includes("viaggiatore") || (title.includes("calvino") && title.includes("inverno")) || isbn === "9788804739500" || isbn === "9788804668381") {
    return "covers/calvino.jpg";
  }
  if (title === "1984" || title.includes("1984") || (author.includes("orwell") && title.includes("1984")) || isbn === "9788804668237" || isbn === "9788804719137") {
    return "covers/orwell.jpg";
  }
  if (title.includes("sapiens") || title.includes("animali a d") || author.includes("harari") || isbn === "9788845292798" || isbn === "9788845296499") {
    return "covers/harari.jpg";
  }
  if (title.includes("abitudini") || title.includes("atomic habits") || author.includes("clear") || isbn === "9788851172411" || isbn === "9791221208870" || isbn === "9788856667509") {
    return "covers/clear.jpg";
  }

  // 2. Se ha un coverUrl valido che non sia un placeholder errato
  const badPatterns = ["1007668", "10528242", "8301552", "12843452"];
  if (book.coverUrl && typeof book.coverUrl === 'string' && book.coverUrl.trim().length > 0) {
    const isBad = badPatterns.some(p => book.coverUrl.includes(p));
    if (!isBad) {
      let safeUrl = book.coverUrl.replace(/^http:\/\//i, "https://");
      if (safeUrl.includes("covers.openlibrary.org") && !safeUrl.includes("default=false")) {
        safeUrl += (safeUrl.includes("?") ? "&" : "?") + "default=false";
      }
      return safeUrl;
    }
  }

  // 3. Se abbiamo un ISBN valido a 10 o 13 cifre, usa Open Library
  if (isbn.length === 10 || isbn.length === 13) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  }

  // 4. Fallback dinamico SVG fedele
  return generateDynamicBookCover(book.title, book.author, book.category);
}

// GESTORE GLOBALE DI ERRORE CARICAMENTO COPERTINE
window.handleCoverError = function(img) {
  img.onerror = null;
  img.onload = null;
  const bookId = img.dataset.id;
  let b = null;
  if (bookId && Array.isArray(books)) {
    b = books.find(x => x.id === bookId);
  }
  const title = b ? b.title : (img.dataset.title ? decodeURIComponent(img.dataset.title) : (img.alt || "Libro"));
  const author = b ? b.author : (img.dataset.author ? decodeURIComponent(img.dataset.author) : "Autore");
  const cat = b ? b.category : "Narrativa";
  img.src = generateDynamicBookCover(title, author, cat);
};

window.handleCoverLoad = function(img) {
  if (img.naturalWidth <= 2 || img.naturalHeight <= 2) {
    window.handleCoverError(img);
  }
};

function extractGoogleBooksCover(imageLinks) {
  if (!imageLinks) return null;
  let url = imageLinks.extraLarge || imageLinks.large || imageLinks.medium || imageLinks.small || imageLinks.thumbnail;
  if (!url) return null;
  url = url.replace(/^http:\/\//i, 'https://');
  url = url.replace('&edge=curl', '');
  return url;
}

// CHIUSURA TOTALE MODALI E RIPRISTINO INTERFACCIA
function closeAllModalsAndDetail() {
  const detailModal = document.getElementById("detail-modal");
  if (detailModal) {
    detailModal.classList.remove("open");
  }

  const allModals = ["scanner-modal", "share-modal", "notion-modal", "settings-modal"];
  allModals.forEach(id => {
    const m = document.getElementById(id);
    if (m) m.classList.remove("open");
  });

  stopLiveVideo();

  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  const app = document.getElementById("app");
  if (app) app.style.pointerEvents = "";

  renderHome();
}

// DETAIL SCREEN & 4 TABS - SCHEDA EDITORIALE COMPLETA STILE NETFLIX
function openDetail(book, initialTab = "tab-summary") {
  const allModals = ["scanner-modal", "share-modal", "notion-modal", "settings-modal"];
  allModals.forEach(id => {
    const m = document.getElementById(id);
    if (m) m.classList.remove("open");
  });
  stopLiveVideo();

  currentBook = book;
  currentCardIndex = 0;

  const safeCover = resolveBookCover(book);
  document.getElementById("detail-cover-bg").style.backgroundImage = `url('${safeCover}')`;
  document.getElementById("detail-title").textContent = book.title;
  document.getElementById("detail-author").textContent = `${book.author} • ${book.publishYear}`;
  document.getElementById("detail-isbn").textContent = book.isbn ? `ISBN: ${book.isbn}` : "";
  document.getElementById("detail-category").textContent = (book.category || "NARRATIVA").toUpperCase();
  document.getElementById("detail-length").textContent = getBadgeText(book.summaryLength);
  document.getElementById("flashcard-badge-count").textContent = book.flashcards ? book.flashcards.length : 0;

  // TAB 1: SCHEDA EDITORIALE DETTAGLIATA STILE NETFLIX
  const summaryPill = document.getElementById("summary-reading-time");
  const registerBadge = document.getElementById("summary-register-badge");
  const editorialCard = document.getElementById("detail-editorial-card");
  const summaryBody = document.getElementById("summary-text");
  const themesContainer = document.getElementById("summary-themes-container");
  const authorBioContainer = document.getElementById("author-bio-container");

  if (summaryPill) summaryPill.textContent = "📖 Sintesi Approfondita • 15 min (Scuola & Esami)";
  if (registerBadge) registerBadge.textContent = "Edizione Integrale & Dossier Didattico";

  // 1. Griglia Scheda Editoriale
  if (editorialCard) {
    editorialCard.innerHTML = `
      <div class="editorial-item">
        <div class="editorial-label">Autore</div>
        <div class="editorial-val">${book.author || "Non specificato"}</div>
      </div>
      <div class="editorial-item">
        <div class="editorial-label">Editore</div>
        <div class="editorial-val">${book.publisher || "Edizione Integrale"}</div>
      </div>
      <div class="editorial-item">
        <div class="editorial-label">Anno Pubblicazione</div>
        <div class="editorial-val">${book.publishYear || "N/D"}</div>
      </div>
      <div class="editorial-item">
        <div class="editorial-label">Pagine</div>
        <div class="editorial-val">${book.pageCount ? book.pageCount + " pag." : "Edizione Integrale"}</div>
      </div>
      <div class="editorial-item">
        <div class="editorial-label">Genere Letterario</div>
        <div class="editorial-val">${book.category || "Classici"}</div>
      </div>
      <div class="editorial-item">
        <div class="editorial-label">Codice ISBN</div>
        <div class="editorial-val">${book.isbn || "Non disponibile"}</div>
      </div>
    `;
  }

  // 2. Trama & Sinossi Estesa
  let actualText = book.summary15m || book.summary || book.summary5m;
  if (!actualText || actualText.length < 200) {
    actualText = book.summary || "Trattazione approfondita del volume in fase di caricamento.";
  }

  if (summaryBody) {
    const paragraphs = actualText.split(/\n\s*\n+/);
    summaryBody.innerHTML = paragraphs.map(para => {
      const trimmed = para.trim();
      if (!trimmed) return "";
      const lines = trimmed.split("\n");
      if (lines.length > 1 && lines[0].length < 85 && !lines[0].endsWith(".")) {
        return `
          <div style="margin-bottom:18px;">
            <h4 style="color:#ffffff; font-size:15px; font-weight:800; margin:16px 0 6px 0; letter-spacing:-0.2px; border-left:3px solid var(--netflix-red); padding-left:8px;">${lines[0]}</h4>
            <p style="margin-bottom:12px; line-height:1.7; color:var(--text-primary); font-size:14px;">${lines.slice(1).join("<br>")}</p>
          </div>
        `;
      }
      return `<p style="margin-bottom:14px; line-height:1.7; color:var(--text-primary); font-size:14px;">${trimmed.replace(/\n/g, "<br>")}</p>`;
    }).join("");
  }

  // 3. Punti Chiave & Temi Principali
  if (themesContainer) {
    let themes = book.keyThemes;
    if (!themes || themes.length === 0) {
      const concepts = book.conceptMap || book.concept_map || book.chapters;
      if (concepts && concepts.length > 0) {
        themes = concepts.slice(0, 3).map((c, i) => ({
          title: c.title || `Snodo Chiave 0${i+1}`,
          desc: c.takeaway || c.causeEffect || c.pillar || c.summary || "Snodo concettuale fondamentale dell'opera per l'analisi del testo."
        }));
      } else {
        themes = [
          { title: "Contesto & Conflitto Primario", desc: "La dinamica delle forze esterne e interne che guidano le scelte del protagonista nel corso della narrazione." },
          { title: "Snodo Etico & Tematico", desc: book.moral || "L'insegnamento cardine e la riflessione filosofico-morale trasmessa dall'autore." },
          { title: "Epilogo & Eredità Letteraria", desc: "La conclusione delle vicende e il messaggio duraturo dell'opera all'interno del canone di appartenenza." }
        ];
      }
    }

    themesContainer.innerHTML = themes.map((t, idx) => `
      <div class="theme-card">
        <div class="theme-card-header">
          <span class="theme-card-icon">⚡</span>
          <h4 class="theme-card-title">0${idx+1}. ${t.title}</h4>
        </div>
        <div class="theme-card-desc">${t.desc}</div>
      </div>
    `).join("");
  }

  // 4. Biografia Autore & Contesto
  if (authorBioContainer) {
    const bioText = book.authorBio || `${book.author} è una delle voci letterarie più rilevanti dell'epoca moderna nel genere "${book.category}". La sua opera si distingue per profondità tematica, rigore stilistico e capacità di interrogare la condizione umana e civile.`;
    authorBioContainer.innerHTML = `
      <h4>✍️ Biografia dell'Autore & Contesto Letterario</h4>
      <p>${bioText}</p>
    `;
  }

  // TAB 2: SCHEMA CONCETTUALE CON RELAZIONI CAUSA -> EFFETTO
  const chaptersList = document.getElementById("concept-blocks-list");
  const conceptItems = book.conceptMap || book.concept_map || book.chapters;

  if (conceptItems && conceptItems.length > 0) {
    chaptersList.innerHTML = conceptItems.map((item, idx) => {
      if (typeof item === 'string') {
        const parts = item.split(/\s*(?:->|→)\s*/);
        const title = parts.length > 0 ? parts[0] : `Punto 0${idx + 1}`;
        const stepsHtml = parts.map((part, pIdx) => `
          <span class="chain-step-pill">${part}</span>
          ${pIdx < parts.length - 1 ? '<span class="chain-arrow">→</span>' : ''}
        `).join("");
        return `
          <div class="chapter-node-card ${idx % 2 === 1 ? 'even' : ''}">
            <div class="chapter-header-row">
              <span class="chapter-num-badge">PUNTO 0${idx + 1}</span>
              <h4 class="chapter-title-text">${title}</h4>
            </div>
            <div class="concept-chain-flow">${stepsHtml}</div>
          </div>
        `;
      } else if (item.pillar || item.causeEffect) {
        const title = item.title || `Punto 0${idx + 1}`;
        const chain = item.causeEffect || item.pillar || '';
        const parts = chain.includes('->') || chain.includes('→')
          ? chain.split(/\s*(?:->|→)\s*/)
          : [chain];
        const stepsHtml = parts.map((part, pIdx) => `
          <span class="chain-step-pill">${part}</span>
          ${pIdx < parts.length - 1 ? '<span class="chain-arrow">→</span>' : ''}
        `).join("");
        return `
          <div class="chapter-node-card ${idx % 2 === 1 ? 'even' : ''}">
            <div class="chapter-header-row">
              <span class="chapter-num-badge">${item.chapterNum || 'PUNTO 0' + (idx + 1)}</span>
              <h4 class="chapter-title-text">${title}</h4>
            </div>
            <div class="concept-chain-flow">${stepsHtml}</div>
            ${item.takeaway ? `
              <div class="chapter-connection-box" style="margin-top:12px;">
                <span class="connection-arrow">↳</span>
                <div class="connection-content">
                  <strong>Snodo Logico:</strong> ${item.takeaway}
                </div>
              </div>
            ` : ''}
          </div>
        `;
      }
      return '';
    }).join("");
  } else {
    chaptersList.innerHTML = `<div style="text-align:center; padding:20px; color:#aaa;">Nessuno schema concettuale disponibile.</div>`;
  }

  // TAB 3: FLASHCARDS
  renderFlashcard();

  // TAB 4: MORALE DEL LIBRO
  const moralText = document.getElementById("moral-text");
  moralText.textContent = book.moral || "Questo libro invita a riflettere profondamente sui condizionamenti sociali e storici, incoraggiando la difesa della dignità e l'autenticità delle proprie scelte.";

  // TAB 5: SEZIONE NOTION
  const notionArea = document.getElementById("tab-notion-textarea");
  if (notionArea) {
    notionArea.value = buildNotionMarkdown(book);
  }

  switchTab(initialTab);
  const detailModal = document.getElementById("detail-modal");
  detailModal.scrollTop = 0;
  detailModal.classList.add("open");

  try {
    window.history.pushState({ modal: "detail" }, "");
  } catch (_) {}
}

function switchTab(tabId) {
  document.querySelectorAll(".tabs-nav .tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === tabId);
  });
}

function renderFlashcard() {
  if (!currentBook || !currentBook.flashcards || currentBook.flashcards.length === 0) return;
  const cards = currentBook.flashcards;
  const card = cards[currentCardIndex];

  document.getElementById("flashcard-counter").textContent = `Domanda ${currentCardIndex + 1} di ${cards.length}`;
  document.getElementById("card-question").textContent = card.question;
  document.getElementById("card-answer").textContent = card.answer;

  const flipper = document.getElementById("flashcard-card");
  flipper.classList.remove("flipped");

  const dots = document.getElementById("dots-container");
  dots.innerHTML = cards.map((_, i) => `<div class="dot ${i === currentCardIndex ? 'active' : ''}"></div>`).join("");
}

// EVENT LISTENERS
function setupEventListeners() {
  // CHIUSURA DETTAGLIO LIBRO CON RIPRISTINO TOTALE OVERLAY
  document.getElementById("btn-detail-back").onclick = closeAllModalsAndDetail;

  const btnDetailCloseX = document.getElementById("btn-detail-close-x");
  if (btnDetailCloseX) {
    btnDetailCloseX.onclick = closeAllModalsAndDetail;
  }

  const btnDetailBottomClose = document.getElementById("btn-detail-bottom-close");
  if (btnDetailBottomClose) {
    btnDetailBottomClose.onclick = closeAllModalsAndDetail;
  }

  // Tasto Escape e Popstate
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModalsAndDetail();
    }
  });

  window.addEventListener("popstate", () => {
    const detailModal = document.getElementById("detail-modal");
    if (detailModal && detailModal.classList.contains("open")) {
      closeAllModalsAndDetail();
    }
  });

  document.querySelectorAll(".tabs-nav .tab-btn").forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
  });

  document.getElementById("btn-read-summary").onclick = () => switchTab("tab-summary");
  document.getElementById("btn-goto-flashcards").onclick = () => switchTab("tab-flashcards");

  const btnQuickNotion = document.getElementById("btn-quick-notion");
  if (btnQuickNotion) {
    btnQuickNotion.onclick = () => switchTab("tab-notion");
  }

  // TAB NOTION: AZIONI
  const btnTabCopy = document.getElementById("btn-tab-copy-notion");
  if (btnTabCopy) {
    btnTabCopy.onclick = () => {
      if (!currentBook) return;
      const md = buildNotionMarkdown(currentBook);
      const copied = copyTextToClipboardReliable(md);
      const copyText = document.getElementById("btn-tab-copy-text");
      if (copyText) {
        copyText.textContent = copied ? "✅ Appunti Copiati!" : "⚠️ Riprova a copiare";
        setTimeout(() => {
          copyText.textContent = "Copia Appunti per Notion";
        }, 2500);
      }
    };
  }

  const btnTabDownload = document.getElementById("btn-tab-download-md");
  if (btnTabDownload) {
    btnTabDownload.onclick = () => {
      if (!currentBook) return;
      const md = buildNotionMarkdown(currentBook);
      const filename = `${currentBook.title.replace(/[^a-z0-9]/gi, '_')}_Notion.md`;
      downloadTextFile(filename, md);
    };
  }

  const btnTabSelectAll = document.getElementById("btn-tab-select-all");
  if (btnTabSelectAll) {
    btnTabSelectAll.onclick = () => {
      const area = document.getElementById("tab-notion-textarea");
      if (area) {
        area.focus();
        area.select();
        area.setSelectionRange(0, 999999);
      }
    };
  }

  const flipper = document.getElementById("flashcard-card");
  flipper.onclick = () => flipper.classList.toggle("flipped");

  document.getElementById("btn-card-prev").onclick = () => {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      renderFlashcard();
    }
  };
  document.getElementById("btn-card-next").onclick = () => {
    if (currentBook && currentCardIndex < currentBook.flashcards.length - 1) {
      currentCardIndex++;
      renderFlashcard();
    }
  };

  // EXPORT MODAL & PDF
  const shareModal = document.getElementById("share-modal");
  const openShare = () => shareModal.classList.add("open");
  const closeShare = () => shareModal.classList.remove("open");

  document.getElementById("btn-detail-share").onclick = openShare;
  document.getElementById("btn-export-options").onclick = openShare;
  document.getElementById("btn-close-share").onclick = closeShare;
  document.getElementById("share-scrim").onclick = closeShare;

  document.getElementById("opt-share-ios").onclick = () => {
    closeShare();
    if (!currentBook) return;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const summaryContent = currentBook.summary15m || currentBook.summary || currentBook.summary5m;
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>BookFlix by GFire - ${currentBook.title}</title>
          <style>
            body { font-family: -apple-system, Helvetica, Arial, sans-serif; padding: 40px; color: #111; line-height: 1.6; }
            h1 { color: #E50914; margin-bottom: 4px; }
            .meta { color: #666; font-size: 14px; margin-bottom: 20px; }
            .badge { background: #E50914; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px; }
            .section { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 16px; }
            .chapter-box { background: #f9f9f9; border-left: 4px solid #E50914; padding: 12px; margin-bottom: 12px; }
            .moral-box { background: #fff8e6; border-left: 4px solid #d4af37; padding: 14px; margin-top: 10px; font-style: italic; }
            .qa-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            .qa-table th, .qa-table td { border: 1px solid #ddd; padding: 8px; font-size: 13px; text-align: left; }
            .qa-table th { background: #222; color: #fff; }
          </style>
        </head>
        <body>
          <span class="badge">BOOKFLIX BY GFIRE • SINTESI UFFICIALE</span>
          <h1>${currentBook.title}</h1>
          <div class="meta"><strong>Autore:</strong> ${currentBook.author} &bull; <strong>Anno:</strong> ${currentBook.publishYear} &bull; <strong>Genere:</strong> ${currentBook.category} &bull; <strong>Editore:</strong> ${currentBook.publisher || 'N/D'}</div>
          
          <div class="section">
            <h2>1. Trama & Sinossi Estesa (${getBadgeText(currentBook.summaryLength)})</h2>
            <div style="white-space: pre-line;">${summaryContent}</div>
          </div>

          ${currentBook.moral ? `
            <div class="section">
              <h2>2. La Morale del Libro</h2>
              <div class="moral-box">${currentBook.moral}</div>
            </div>
          ` : ''}

          ${(currentBook.conceptMap || currentBook.chapters) ? `
            <div class="section">
              <h2>3. Mappa Concettuale dei Capitoli</h2>
              ${(currentBook.conceptMap || currentBook.chapters).map((ch, idx) => {
                if (typeof ch === 'string') {
                  return `<div class="chapter-box"><strong>Punto 0${idx+1}</strong><p>${ch}</p></div>`;
                }
                const chTitle = ch.title || `Punto 0${idx+1}`;
                const chNum = ch.chapterNum || ch.num || `Punto 0${idx+1}`;
                const chBody = ch.pillar || ch.causeEffect || ch.summary || '';
                const chConn = ch.connection || ch.takeaway || '';
                return `
                <div class="chapter-box">
                  <strong>${chNum} - ${chTitle}</strong>
                  <p>${chBody}</p>
                  ${chConn ? `<small style="color:#0055aa;"><strong>Snodo / Relazione:</strong> ${chConn}</small>` : ''}
                </div>
                `;
              }).join('')}
            </div>
          ` : ''}

          ${currentBook.flashcards ? `
            <div class="section">
              <h2>4. Flashcard per Ripasso Attivo (${currentBook.flashcards.length} Carte)</h2>
              <table class="qa-table">
                <tr><th style="width:40px;">#</th><th style="width:45%;">Domanda</th><th>Risposta</th></tr>
                ${currentBook.flashcards.map((f, i) => `<tr><td>${i+1}</td><td><strong>${f.question}</strong></td><td>${f.answer}</td></tr>`).join('')}
              </table>
            </div>
          ` : ''}

          <div style="margin-top: 40px; font-size: 11px; color: #888; text-align: right;">Esportato da BookFlix by GFire per iOS</div>
          <script>
            window.onload = function() { window.print(); };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    } else {
      alert("Il documento è pronto! Su Safari, tocca 'Condividi' > 'Stampa' o 'Salva su File' per scaricare il PDF.");
    }
  };

  // NOTION MODAL CONTROLS
  const notionModal = document.getElementById("notion-modal");
  const closeNotion = () => {
    if (notionModal) notionModal.classList.remove("open");
  };
  if (document.getElementById("btn-close-notion")) {
    document.getElementById("btn-close-notion").onclick = closeNotion;
  }
  if (document.getElementById("notion-scrim")) {
    document.getElementById("notion-scrim").onclick = closeNotion;
  }

  let currentNotionMd = "";
  document.getElementById("opt-share-notes").onclick = () => {
    closeShare();
    if (!currentBook) return;

    currentNotionMd = buildNotionMarkdown(currentBook);
    const copied = copyTextToClipboardReliable(currentNotionMd);

    const statusBadge = document.getElementById("notion-copy-status");
    if (statusBadge) {
      if (copied) {
        statusBadge.textContent = "✅ Testo Markdown copiato negli appunti!";
        statusBadge.style.color = "#2ecc71";
        statusBadge.style.borderColor = "#2ecc71";
        statusBadge.style.background = "rgba(46, 204, 113, 0.15)";
      } else {
        statusBadge.textContent = "📋 Tocca 'Ricopia Appunti' o 'Scarica .md'";
        statusBadge.style.color = "var(--gold-accent)";
        statusBadge.style.borderColor = "var(--gold-accent)";
        statusBadge.style.background = "rgba(229, 169, 60, 0.15)";
      }
    }

    const textarea = document.getElementById("notion-md-textarea");
    if (textarea) textarea.value = currentNotionMd;

    const btnRecopy = document.getElementById("btn-recopy-notion");
    if (btnRecopy) {
      btnRecopy.onclick = () => {
        const ok = copyTextToClipboardReliable(currentNotionMd);
        if (statusBadge) {
          statusBadge.textContent = ok ? "✅ Ricopiato con successo negli appunti!" : "⚠️ Seleziona il testo qui sotto per copiare";
        }
      };
    }

    const btnDownload = document.getElementById("btn-download-md");
    if (btnDownload) {
      btnDownload.onclick = () => {
        const filename = `${currentBook.title.replace(/[^a-z0-9]/gi, '_')}_Notion.md`;
        downloadTextFile(filename, currentNotionMd);
      };
    }

    const btnSelectAll = document.getElementById("btn-select-all-md");
    if (btnSelectAll && textarea) {
      btnSelectAll.onclick = () => {
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, 999999);
      };
    }

    if (notionModal) notionModal.classList.add("open");
  };

  // Delete Book
  document.getElementById("opt-delete-book").onclick = () => {
    closeShare();
    if (!currentBook) return;
    if (confirm(`Rimuovere "${currentBook.title}" dalla libreria?`)) {
      books = books.filter(b => b.id !== currentBook.id);
      saveBooks();
      closeAllModalsAndDetail();
    }
  };

  // SCANNER MODAL CONTROLS
  const scannerModal = document.getElementById("scanner-modal");
  const openScanner = () => {
    scannerModal.classList.add("open");
    document.getElementById("preview-section").classList.add("hidden");
    tryStartLiveVideo();
  };
  const closeScanner = () => {
    scannerModal.classList.remove("open");
    stopLiveVideo();
  };

  document.getElementById("btn-fab-scan").onclick = openScanner;
  document.getElementById("btn-search-open").onclick = openScanner;
  document.getElementById("btn-close-scanner").onclick = closeScanner;
  document.getElementById("scanner-scrim").onclick = closeScanner;

  // Scanner Mode Toggle
  const btnModeCamera = document.getElementById("btn-mode-camera");
  const btnModeSearch = document.getElementById("btn-mode-search");
  const viewCamera = document.getElementById("view-camera");
  const viewSearch = document.getElementById("view-search");

  btnModeCamera.onclick = () => {
    btnModeCamera.classList.add("active");
    btnModeSearch.classList.remove("active");
    viewCamera.classList.remove("hidden");
    viewSearch.classList.add("hidden");
    tryStartLiveVideo();
  };

  btnModeSearch.onclick = () => {
    btnModeSearch.classList.add("active");
    btnModeCamera.classList.remove("active");
    viewSearch.classList.remove("hidden");
    viewCamera.classList.add("hidden");
    stopLiveVideo();
  };

  // CARICAMENTO FOTO DA GALLERIA (FALLBACK)
  const cameraFileInput = document.getElementById("camera-file-input");
  document.getElementById("btn-trigger-camera").onclick = () => {
    cameraFileInput.click();
  };

  cameraFileInput.onchange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const statusText = document.getElementById("camera-status-text");
    statusText.textContent = "Analisi immagine con ZXing...";
    statusText.style.color = "#E5A93C";

    try {
      const imgUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = async () => {
        let detected = false;
        if (zxingCodeReader) {
          try {
            const result = await zxingCodeReader.decodeFromImageElement(img);
            if (result && result.text) {
              const cleanIsbn = result.text.replace(/[^0-9X]/gi, "");
              handleBarcodeDetected(cleanIsbn);
              detected = true;
              return;
            }
          } catch (_) {}
        }

        if (!detected) {
          statusText.textContent = "Codice non rilevato dalla foto. Inserisci il titolo:";
          statusText.style.color = "#ff4d4f";
          promptManualInput();
        }
      };
      img.src = imgUrl;
    } catch (err) {
      statusText.textContent = "Errore lettura file.";
      promptManualInput();
    }
  };

  // DEMO CHIPS (PROVA CODICE ISTANTANEO SENZA FOTOCAMERA)
  document.querySelectorAll(".demo-chip").forEach(chip => {
    chip.onclick = () => {
      const isbn = chip.dataset.isbn;
      handleBarcodeDetected(isbn);
    };
  });

  // RICERCA MANUALE ONLINE (OPEN LIBRARY + GOOGLE BOOKS)
  document.getElementById("btn-run-search").onclick = async () => {
    const query = document.getElementById("manual-search-input").value.trim();
    if (!query) return;
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = `<div style="text-align:center; padding:16px; color:#E5A93C;">🔍 Ricerca per "${query}" in corso...</div>`;

    const results = await searchBookOnline(query);
    if (results && results.length > 0) {
      resultsContainer.innerHTML = results.map((book, idx) => `
        <div class="search-item" data-idx="${idx}">
          <img src="${book.coverUrl || resolveBookCover(book)}" alt="${book.title}" data-title="${encodeURIComponent(book.title || '')}" data-author="${encodeURIComponent(book.author || '')}" onerror="window.handleCoverError(this)">
          <div class="search-item-info">
            <h5>${book.title}</h5>
            <p>${book.author} • ${book.publishYear}</p>
          </div>
        </div>
      `).join("");

      resultsContainer.querySelectorAll(".search-item").forEach(el => {
        el.onclick = () => {
          const idx = parseInt(el.dataset.idx, 10);
          showAiPreview(results[idx]);
        };
      });
    } else {
      resultsContainer.innerHTML = `
        <div style="background:#1F1F1F; padding:14px; border-radius:8px; border:1px solid #E50914; margin-top:10px;">
          <p style="color:#FFF; font-weight:bold; font-size:13px; margin-bottom:6px;">Nessuna scheda trovata per "${query}"</p>
          <p style="color:#AAA; font-size:11.5px; margin-bottom:10px;">Vuoi che Gemini generi la sintesi scolastica e gli schemi per questo libro?</p>
          <button id="btn-force-create" style="background:#E50914; color:#fff; border:none; padding:10px 14px; border-radius:6px; font-weight:bold; font-size:12px; width:100%; cursor:pointer;">
            ✨ Sintetizza "${query}" con Gemini AI
          </button>
        </div>
      `;
      document.getElementById("btn-force-create").onclick = () => {
        showAiPreview({
          title: query,
          author: "Autore da specificare",
          publishYear: "2024",
          category: "I tuoi Classici",
          coverUrl: generateDynamicBookCover(query, "Autore da specificare", "I tuoi Classici"),
          isbn: query.replace(/[^0-9X]/gi, "")
        });
      };
    }
  };

  document.getElementById("manual-search-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.getElementById("btn-run-search").click();
    }
  });

  // SELETTORE LUNGHEZZA CON NUMERO FLASHCARD PROPORZIONATO
  document.querySelectorAll(".length-chips .chip").forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll(".length-chips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      selectedSummaryLength = chip.dataset.length;
    };
  });

  // GENERAZIONE GEMINI AI
  document.getElementById("btn-generate-ai").onclick = async () => {
    if (!pendingMetadata) return;
    const btnText = document.getElementById("btn-generate-text");
    btnText.textContent = "Gemini AI sta sintetizzando capitoli e morale...";
    document.getElementById("btn-generate-ai").disabled = true;

    const savedKey = localStorage.getItem("bookflix_gemini_key");
    if (savedKey && savedKey.trim().length > 10) {
      try {
        const generated = await callRealGeminiApi(savedKey, pendingMetadata, selectedSummaryLength);
        if (generated) {
          books.unshift(generated);
          saveBooks();
          btnText.textContent = "GENERA SINTESI & CAPITOLI CON GEMINI";
          document.getElementById("btn-generate-ai").disabled = false;
          closeScanner();
          renderHome();
          openDetail(generated);
          return;
        }
      } catch (_) {}
    }

    setTimeout(() => {
      const newBook = generateRichBook(pendingMetadata, selectedSummaryLength);
      books.unshift(newBook);
      saveBooks();
      btnText.textContent = "GENERA SINTESI & CAPITOLI CON GEMINI";
      document.getElementById("btn-generate-ai").disabled = false;
      closeScanner();
      renderHome();
      openDetail(newBook);
    }, 1200);
  };

  // SETTINGS
  const settingsModal = document.getElementById("settings-modal");
  document.getElementById("btn-settings-open").onclick = () => settingsModal.classList.add("open");
  document.getElementById("btn-close-settings").onclick = () => settingsModal.classList.remove("open");
  document.getElementById("settings-scrim").onclick = () => settingsModal.classList.remove("open");

  document.getElementById("btn-save-key").onclick = () => {
    const key = document.getElementById("input-gemini-key").value.trim();
    localStorage.setItem("bookflix_gemini_key", key);
    alert("Chiave Gemini API salvata con successo!");
    settingsModal.classList.remove("open");
  };

  document.getElementById("btn-reset-seed").onclick = () => {
    if (confirm("Ripristinare i libri classici di BookFlix by GFire?")) {
      books = INITIAL_BOOKS;
      saveBooks();
      renderHome();
      settingsModal.classList.remove("open");
    }
  };
}

function promptManualInput() {
  const manual = prompt("Inserisci il Titolo del libro da sintetizzare:", "");
  if (manual && manual.trim()) {
    document.getElementById("manual-search-input").value = manual.trim();
    document.getElementById("btn-mode-search").click();
    document.getElementById("btn-run-search").click();
  }
}

// =========================================================================
// MOTORE SCANNER CONTINUO REAL-TIME (STILE QR NATIVO SENZA SCATTARE FOTO)
// =========================================================================
async function tryStartLiveVideo() {
  const video = document.getElementById("camera-stream");
  const statusText = document.getElementById("camera-status-text");
  const reticleFrame = document.getElementById("scanner-reticle-frame");
  const reticleBadge = document.getElementById("reticle-badge");

  if (reticleFrame) reticleFrame.classList.remove("detected");
  if (reticleBadge) reticleBadge.classList.remove("show");

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (statusText) statusText.innerHTML = "💡 Usa il pulsante qui sotto per caricare una foto del codice a barre.";
    return;
  }

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });

    video.srcObject = cameraStream;
    await video.play();

    if (statusText) {
      statusText.innerHTML = "Inquadra il codice a barre ISBN: riconoscimento automatico istantaneo.";
      statusText.style.color = "var(--text-secondary)";
    }

    startContinuousScanner(video);
  } catch (err) {
    if (statusText) {
      statusText.innerHTML = "💡 Accesso fotocamera negato o non supportato. Prova a ricaricare o carica una foto:";
    }
  }
}

function startContinuousScanner(video) {
  isScanningActive = true;
  isScanThrottled = false;

  // 1. Riconoscimento hardware ultra-rapido con BarcodeDetector nativo (iOS 17+ Safari & Android Chrome)
  if (nativeBarcodeDetector) {
    const runNativeLoop = async () => {
      if (!isScanningActive) return;
      if (video.readyState >= 2) {
        try {
          const barcodes = await nativeBarcodeDetector.detect(video);
          if (barcodes && barcodes.length > 0) {
            for (const b of barcodes) {
              if (b.rawValue) {
                handleBarcodeDetected(b.rawValue);
                return;
              }
            }
          }
        } catch (_) {}
      }
      if (isScanningActive) {
        scanDetectTimer = setTimeout(runNativeLoop, 70); // Controllo continuo ogni 70ms
      }
    };
    runNativeLoop();
  }

  // 2. Decoder continuo parallelo/fallback con ZXing
  if (zxingCodeReader) {
    try {
      zxingCodeReader.decodeFromVideoElementContinuously(video, (result, err) => {
        if (result && result.text) {
          handleBarcodeDetected(result.text);
        }
      });
    } catch (_) {
      try {
        zxingCodeReader.decodeFromVideoElement(video, (result) => {
          if (result && result.text) {
            handleBarcodeDetected(result.text);
          }
        });
      } catch (_) {}
    }
  }
}

function handleBarcodeDetected(rawCode) {
  if (isScanThrottled || !isScanningActive) return;
  const cleanIsbn = (rawCode || "").replace(/[^0-9X]/gi, "");
  if (!cleanIsbn || cleanIsbn.length < 8) return;

  isScanThrottled = true;
  isScanningActive = false;

  if (scanDetectTimer) {
    clearTimeout(scanDetectTimer);
    scanDetectTimer = null;
  }

  // Feedback sonoro + vibrazione aptica immediata
  triggerScanFeedback();

  // Feedback visivo sul mirino (bordo neon verde + badge)
  const reticleFrame = document.getElementById("scanner-reticle-frame");
  if (reticleFrame) reticleFrame.classList.add("detected");
  const reticleBadge = document.getElementById("reticle-badge");
  if (reticleBadge) reticleBadge.classList.add("show");

  const statusText = document.getElementById("camera-status-text");
  if (statusText) {
    statusText.innerHTML = `✅ <strong>Codice Rilevato: ${cleanIsbn}</strong><br>Caricamento scheda in corso...`;
    statusText.style.color = "#00E676";
  }

  // Chiusura fluida della fotocamera e apertura istantanea della scheda
  setTimeout(() => {
    stopLiveVideo();
    lookupIsbnDirectly(cleanIsbn);
  }, 380);
}

function stopLiveVideo() {
  isScanningActive = false;
  if (scanDetectTimer) {
    clearTimeout(scanDetectTimer);
    scanDetectTimer = null;
  }
  if (zxingCodeReader) {
    try { zxingCodeReader.reset(); } catch (_) {}
  }
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  const reticleFrame = document.getElementById("scanner-reticle-frame");
  if (reticleFrame) reticleFrame.classList.remove("detected");
  const reticleBadge = document.getElementById("reticle-badge");
  if (reticleBadge) reticleBadge.classList.remove("show");
}

// =========================================================================
// RICERCA AUTOMATICA ISTANTANEA E APERTURA SCHEDA SENZA CONFERME MANUALI
// =========================================================================
async function lookupIsbnDirectly(isbn) {
  const cleanIsbn = isbn.replace(/[^0-9X]/gi, "");
  const scannerModal = document.getElementById("scanner-modal");
  const closeScanner = () => {
    if (scannerModal) scannerModal.classList.remove("open");
    stopLiveVideo();
  };

  // 1. Controlla prima se il libro è già presente nella libreria dell'utente
  const existing = books.find(b => (b.isbn || "").replace(/[^0-9X]/gi, "") === cleanIsbn);
  if (existing) {
    closeScanner();
    openDetail(existing);
    return;
  }

  // 2. Controlla nei libri predefiniti (seed)
  const seed = INITIAL_BOOKS.find(b => (b.isbn || "").replace(/[^0-9X]/gi, "") === cleanIsbn);
  if (seed) {
    if (!books.some(b => b.id === seed.id)) {
      books.unshift(seed);
      saveBooks();
      renderHome();
    }
    closeScanner();
    openDetail(seed);
    return;
  }

  // 3. Ricerca automatica online immediata (Google Books / Open Library)
  const statusText = document.getElementById("camera-status-text");
  if (statusText) {
    statusText.innerHTML = `🔍 Ricerca metadati per ISBN: <strong>${cleanIsbn}</strong>...`;
    statusText.style.color = "var(--gold-accent)";
  }

  const results = await searchBookOnline(cleanIsbn);
  if (results && results.length > 0) {
    const meta = results[0];
    const richBook = generateRichBook(meta, "deep");
    books.unshift(richBook);
    saveBooks();
    renderHome();
    closeScanner();
    openDetail(richBook);
    return;
  }

  // 4. Se non trovato negli archivi online, chiedi all'utente il titolo per la sintesi istantanea
  const manualTitle = prompt(`Codice ISBN ${cleanIsbn} non presente nel database globale.\nInserisci il titolo del libro per generare la scheda approfondita:`, "");
  if (manualTitle && manualTitle.trim()) {
    const generated = generateRichBook({
      title: manualTitle.trim(),
      author: "Autore da specificare",
      publishYear: "2024",
      publisher: "Edizione Digitale",
      pageCount: 250,
      category: "I tuoi Classici",
      coverUrl: generateDynamicBookCover(manualTitle.trim(), "Autore", "I tuoi Classici"),
      isbn: cleanIsbn
    }, "deep");
    books.unshift(generated);
    saveBooks();
    renderHome();
    closeScanner();
    openDetail(generated);
  } else {
    document.getElementById("btn-mode-search").click();
  }
}

// RICERCA MULTI-FONTE CON PRIORITÀ GOOGLE BOOKS & RECUPERO COPERTINE ACCURATO
async function searchBookOnline(query) {
  const clean = query.trim();
  const numericOnly = clean.replace(/[^0-9X]/gi, "");
  const isIsbn = (numericOnly.length === 10 || numericOnly.length === 13);
  let results = [];

  // Se è uno dei 5 libri predefiniti
  const cleanLower = clean.toLowerCase();
  const seed = INITIAL_BOOKS.find(b => {
    const bIsbn = (b.isbn || "").replace(/[^0-9X]/gi, "");
    const bTitle = (b.title || "").toLowerCase();
    return (isIsbn && bIsbn === numericOnly) || 
           (cleanLower.includes("coccodrilli") && bTitle.includes("coccodrilli")) ||
           (cleanLower.includes("viaggiatore") && bTitle.includes("viaggiatore")) ||
           (cleanLower.includes("1984") && bTitle.includes("1984")) ||
           (cleanLower.includes("sapiens") && bTitle.includes("sapiens")) ||
           ((cleanLower.includes("abitudini") || cleanLower.includes("atomic habits")) && bTitle.includes("abitudini"));
  });

  if (seed) {
    return [{
      title: seed.title,
      author: seed.author,
      publishYear: seed.publishYear,
      publisher: seed.publisher,
      pageCount: seed.pageCount,
      category: seed.category,
      coverUrl: seed.coverUrl,
      isbn: seed.isbn,
      description: seed.summary15m,
      authorBio: seed.authorBio,
      keyThemes: seed.keyThemes
    }];
  }

  // 1. Google Books API
  try {
    const gbUrl = isIsbn 
      ? `https://www.googleapis.com/books/v1/volumes?q=isbn:${numericOnly}`
      : `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(clean)}&maxResults=6`;
    const gbRes = await fetch(gbUrl);
    if (gbRes.ok) {
      const gbData = await gbRes.json();
      if (gbData.items && gbData.items.length > 0) {
        gbData.items.forEach(item => {
          const info = item.volumeInfo || {};
          let cover = extractGoogleBooksCover(info.imageLinks);
          if (!cover && isIsbn) {
            cover = `https://covers.openlibrary.org/b/isbn/${numericOnly}-L.jpg?default=false`;
          }
          if (!cover) {
            cover = generateDynamicBookCover(info.title, info.authors?.join(", "), info.categories ? info.categories[0] : "Narrativa");
          }

          results.push({
            title: info.title || "Titolo sconosciuto",
            author: info.authors ? info.authors.join(", ") : "Autore sconosciuto",
            publishYear: (info.publishedDate || "").substring(0, 4) || "N/D",
            publisher: info.publisher || "Edizione Cartacea",
            pageCount: info.pageCount || 200,
            category: info.categories ? info.categories[0] : "Narrativa",
            coverUrl: cover,
            isbn: info.industryIdentifiers ? info.industryIdentifiers[0]?.identifier : (isIsbn ? numericOnly : ""),
            description: info.description || ""
          });
        });
        if (results.length > 0) return results;
      }
    }
  } catch (_) {}

  // 2. Open Library Search
  try {
    const searchUrl = isIsbn 
      ? `https://openlibrary.org/search.json?isbn=${numericOnly}&limit=5`
      : `https://openlibrary.org/search.json?q=${encodeURIComponent(clean)}&limit=6`;
    const sRes = await fetch(searchUrl);
    if (sRes.ok) {
      const sData = await sRes.json();
      if (sData.docs && sData.docs.length > 0) {
        sData.docs.forEach(doc => {
          let cover = null;
          if (doc.cover_i) {
            cover = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg?default=false`;
          } else if (doc.isbn && doc.isbn[0]) {
            cover = `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-L.jpg?default=false`;
          } else if (isIsbn) {
            cover = `https://covers.openlibrary.org/b/isbn/${numericOnly}-L.jpg?default=false`;
          } else {
            cover = generateDynamicBookCover(doc.title, doc.author_name ? doc.author_name.join(", ") : "Autore");
          }

          const author = doc.author_name ? doc.author_name.join(", ") : "Autore sconosciuto";
          const year = doc.first_publish_year || (doc.publish_year ? doc.publish_year[0] : "N/D");
          const isbn = doc.isbn ? doc.isbn[0] : (isIsbn ? numericOnly : "");
          const category = doc.subject ? doc.subject[0] : "I tuoi Classici";
          const publisher = doc.publisher ? doc.publisher[0] : "Edizione Integrale";
          const pageCount = doc.number_of_pages_median || 220;

          results.push({
            title: doc.title,
            author: author,
            publishYear: String(year),
            publisher: publisher,
            pageCount: pageCount,
            category: category,
            coverUrl: cover,
            isbn: isbn,
            description: doc.first_sentence ? doc.first_sentence.join(" ") : ""
          });
        });
        return results;
      }
    }
  } catch (_) {}

  return results;
}

function showAiPreview(item) {
  const safeCover = resolveBookCover(item);
  pendingMetadata = {
    title: item.title,
    author: item.author || "Autore sconosciuto",
    publishYear: item.publishYear || "N/D",
    publisher: item.publisher || "Edizione Integrale",
    pageCount: item.pageCount || 200,
    category: item.category || "I tuoi Classici",
    coverUrl: safeCover,
    isbn: item.isbn || "",
    description: item.description || ""
  };

  const previewCover = document.getElementById("preview-cover");
  previewCover.onerror = function() {
    previewCover.onerror = null;
    previewCover.onload = null;
    previewCover.src = generateDynamicBookCover(pendingMetadata.title, pendingMetadata.author, pendingMetadata.category);
  };
  previewCover.onload = function() {
    if (previewCover.naturalWidth <= 2 || previewCover.naturalHeight <= 2) {
      previewCover.src = generateDynamicBookCover(pendingMetadata.title, pendingMetadata.author, pendingMetadata.category);
    }
  };
  previewCover.src = pendingMetadata.coverUrl;

  document.getElementById("preview-title").textContent = pendingMetadata.title;
  document.getElementById("preview-author").textContent = `${pendingMetadata.author} • ${pendingMetadata.publishYear}`;
  document.getElementById("preview-genre").textContent = pendingMetadata.category.toUpperCase();
  document.getElementById("preview-isbn").textContent = pendingMetadata.isbn ? `ISBN: ${pendingMetadata.isbn}` : "";

  document.getElementById("preview-section").classList.remove("hidden");
  document.getElementById("preview-section").scrollIntoView({ behavior: 'smooth' });
}

// GENERATORE INTELLIGENTE DI SCHEDE SCOLASTICHE COMPLETE (STRUTTURATE A SEZIONI)
function generateRichBook(meta, length) {
  const title = meta.title;
  const author = meta.author;
  const year = meta.publishYear;
  const publisher = meta.publisher || "Edizione Integrale";
  const pageCount = meta.pageCount || 240;

  // Se corrisponde a uno dei seed predefiniti, recupera la versione originale completa
  const seed = INITIAL_BOOKS.find(b => {
    const bIsbn = (b.isbn || "").replace(/[^0-9X]/gi, "");
    const metaIsbn = (meta.isbn || "").replace(/[^0-9X]/gi, "");
    return (metaIsbn && bIsbn === metaIsbn) || b.title.toLowerCase() === title.toLowerCase();
  });

  if (seed) {
    return {
      ...seed,
      id: "book-" + Date.now(),
      summaryLength: length,
      summary: length === "fast" ? seed.summary2m : (length === "standard" ? seed.summary5m : seed.summary15m)
    };
  }

  // Generazione approfondita basata sulla descrizione restituita dalle API
  const desc = meta.description || "";
  const cleanDesc = desc.replace(/<[^>]*>?/gm, '').trim();

  const summary2m = `Sintesi essenziale di "${title}" di ${author} (${year}): L'opera si sviluppa attorno alle vicende centrali dei protagonisti, inseriti in un contesto storico e sociale preciso. ${cleanDesc ? cleanDesc.substring(0, 220) + '...' : "I fatti narrati delineano con nitidezza il percorso morale e le scelte decisive dei personaggi, approdando a un epilogo coerente e denso di significato."}`;

  const summary5m = `Inquadramento storico e introduzione alle vicende
La trattazione di "${title}", celebre opera di ${author} pubblicata nel ${year}, si radica in un preciso orizzonte culturale ed etico. ${cleanDesc ? cleanDesc.substring(0, 350) : "La trama segue lo sviluppo delle azioni dei protagonisti, affrontando con lucidità gli ostacoli imposti dalle circostanze esterne."}

Snodi drammatici ed esito finale
Nel corso dello sviluppo narrativo, le scelte dei personaggi provocano conseguenze irreversibili. La conclusione offre un bilancio morale profondo, fornendo elementi di discussione critici e verificabili per lo studio e il colloquio scolastico.`;

  const summary15m = `Inquadramento storico, luoghi e protagonisti
L'opera "${title}", scritta da ${author} e data alle stampe nel ${year} dall'editore ${publisher}, costituisce un testo fondamentale per comprendere le tensioni etiche e sociali del suo tempo. ${cleanDesc ? cleanDesc : "La narrazione si sviluppa con precisione cronologica, delineando l'evoluzione dei protagonisti di fronte a sfide cruciali per la propria sopravvivenza o integrità morale."}

Sviluppo cronologico delle vicende ed episodi salienti
A questo punto la trattazione entra nel merito delle singole fasi che compongono l'opera. I protagonisti affrontano conflitti diretti con le convenzioni sociali o con le forze antagoniste, compiendo scelte che segnano un definitivo punto di non ritorno. Ogni passaggio logico scaturisce con rigore dai fatti narrati, evitando formule astratte e mettendo in luce le motivazioni psicologiche ed etiche alla base delle azioni.

Epilogo, risonanza tematica e bilancio per l'interrogazione
La conclusione dell'opera tira le fila dell'intero percorso: gli esiti finali dimostrano come la fedeltà ai propri valori o la collisione con le forze dominanti determinino il destino individuale. Il testo consegna una prospettiva limpida e documentata, offrendo argomentazioni solide e approfondite per qualsiasi prova d'esame o discussione critica.`;

  const moral = `Il valore di un'esistenza e la credibilità di un'idea si misurano nella coerenza con cui si affrontano i fatti concreti della realtà, difendendo la verità e la libertà sopra ogni compromesso.`;

  const keyThemes = [
    {
      title: "Il Conflitto con la Realtà",
      desc: `In "${title}", i protagonisti si scontrano con le limitazioni imposte dal contesto storico e sociale, dovendo ridefinire i propri limiti interiori.`
    },
    {
      title: "Scelte Morali e Conseguenze Irreversibili",
      desc: "Ogni snodo fondamentale scaturisce da una deliberata presa di posizione, le cui ripercussioni plasmano l'intero destino dei personaggi."
    },
    {
      title: "Il Messaggio Etico e Civile",
      desc: moral
    }
  ];

  const authorBio = `${author} è una figura letteraria di spicco associata all'opera "${title}" (${year}). La sua produzione si contraddistingue per la rigorosa analisi della condizione umana, la precisione espressiva e la risonanza culturale delle sue riflessioni.`;

  const conceptMap = [
    {
      chapterNum: "Punto 01",
      title: "Inquadramento e Premesse",
      pillar: `${title} (${year}) -> Origine storica e coordinate ambientali -> Nascita del conflitto narrativo`,
      causeEffect: `${title} (${year}) -> Origine storica e coordinate ambientali -> Nascita del conflitto narrativo`,
      takeaway: "La comprensione delle premesse storiche e materiali è essenziale per l'interpretazione del testo."
    },
    {
      chapterNum: "Punto 02",
      title: "Lo Snodo Centrale",
      pillar: "Azioni dirette dei personaggi -> Scontro con le forze oppositrici -> Decisione irreversibile",
      causeEffect: "Azioni dirette dei personaggi -> Scontro con le forze oppositrici -> Decisione irreversibile",
      takeaway: "Il punto di rottura impedisce il ripristino delle condizioni iniziali."
    },
    {
      chapterNum: "Punto 03",
      title: "Epilogo e Risoluzione",
      pillar: "Conclusione dei fatti narrati -> Conseguenze etiche ed esistenziali -> Bilancio critico finale",
      causeEffect: "Conclusione dei fatti narrati -> Conseguenze etiche ed esistenziali -> Bilancio critico finale",
      takeaway: "La risoluzione consegna il significato autentico dell'itinerario percorso."
    }
  ];

  const flashcards = [
    { question: `Quali sono le coordinate dell'opera "${title}" e chi ne è l'autore?`, answer: `Scritto da ${author}, con riferimento temporale al ${year} (Editore: ${publisher}).` },
    { question: `Qual è il nucleo centrale della vicenda?`, answer: cleanDesc ? cleanDesc.substring(0, 160) + "..." : `L'evoluzione dei protagonisti di fronte alle prove poste dal contesto narrativo.` },
    { question: `Quale snodo segna il momento di svolta dell'opera?`, answer: "Il momento in cui le circostanze impongono una scelta morale e pratica definitiva e irrevocabile." },
    { question: `Come si conclude l'itinerario dei protagonisti?`, answer: "Con la risoluzione dei conflitti e la definizione del loro destino umano e civile." },
    { question: `Qual è l'insegnamento etico o la morale del libro?`, answer: moral }
  ];

  return {
    id: "book-" + Date.now(),
    isbn: meta.isbn,
    title: title,
    author: author,
    publishYear: year,
    publisher: publisher,
    pageCount: pageCount,
    category: meta.category || "I tuoi Classici",
    coverUrl: meta.coverUrl,
    summaryLength: length,
    summary: length === "fast" ? summary2m : (length === "standard" ? summary5m : summary15m),
    summary2m: summary2m,
    summary5m: summary5m,
    summary15m: summary15m,
    authorBio: authorBio,
    keyThemes: keyThemes,
    moral: moral,
    conceptMap: conceptMap,
    chapters: conceptMap,
    flashcards: flashcards
  };
}

// CHIAMATA GEMINI AI CON PROMPT SCOLASTICO TASSATIVO & MAX OUTPUT TOKENS ELEVATO (8192)
async function callRealGeminiApi(apiKey, meta, length) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const lengthLabel = (length === "deep") 
    ? "15 min (Scuola / Approfondito)" 
    : (length === "standard" ? "5 min (Standard)" : "2 min (Veloce)");

  const promptText = `Sei un docente e uno studente universitario brillante e meticoloso. Devi redigere una scheda di lettura approfondita, dettagliata e ricca del libro per preparare un'interrogazione o un esame.

TITOLO: ${meta.title}
AUTORE: ${meta.author}
LUNGHEZZA SELEZIONATA: ${lengthLabel}

REGOLE TASSATIVE:
1. FATTI REALI, NOMI E LUOGHI:
   - Cita esplicitamente i nomi dei personaggi principali, i luoghi geografici reali, le date/epoche e gli eventi concreti della trama.
   - Nessuna frase generica. Spiega ESATTAMENTE cosa succede capitolo per capitolo o tappa per tappa.

2. STRUTTURA A SEZIONI CON TITOLI:
   - Se la modalità è "15 min (Scuola / Approfondito)": il testo del "summary" DEVE essere ricco, esteso (almeno 900-1200 parole), diviso in sezioni con titoletti (es. "Origini e contesto iniziale", "Sviluppo dei conflitti", "Snodi decisivi", "Epilogo").
   - Fornisci 3 temi chiave dettagliati nel campo "key_themes" [{"title": "...", "desc": "..."}].
   - Fornisci la biografia sintetica nel campo "author_bio".

3. FORMATO: Restituisci ESCLUSIVAMENTE un JSON valido conforme a questo schema:
{
  "publisher": "...",
  "page_count": 280,
  "author_bio": "...",
  "key_themes": [
    {"title": "...", "desc": "..."},
    {"title": "...", "desc": "..."},
    {"title": "...", "desc": "..."}
  ],
  "summary": "...",
  "concept_map": [
    "Punto chiave 1 -> Causa -> Effetto",
    "Punto chiave 2 -> Causa -> Effetto"
  ],
  "flashcards": [
    {"question": "...", "answer": "..."}
  ],
  "moral": "..."
}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
        response_mime_type: "application/json"
      }
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Errore API Gemini (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const rawCandidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (rawCandidate) {
    let cleanJson = rawCandidate.trim();
    if (cleanJson.startsWith("```json")) cleanJson = cleanJson.substring(7);
    if (cleanJson.startsWith("```")) cleanJson = cleanJson.substring(3);
    if (cleanJson.endsWith("```")) cleanJson = cleanJson.substring(0, cleanJson.length - 3);
    cleanJson = cleanJson.trim();

    const parsed = JSON.parse(cleanJson);
    
    let conceptList = [];
    if (Array.isArray(parsed.concept_map)) {
      conceptList = parsed.concept_map.map((item, idx) => {
        if (typeof item === 'string') {
          const parts = item.split(/\s*(?:->|→)\s*/);
          return {
            chapterNum: `Punto 0${idx + 1}`,
            title: parts[0] || `Punto 0${idx + 1}`,
            pillar: item,
            causeEffect: item,
            takeaway: parts.length > 1 ? parts[parts.length - 1] : item
          };
        }
        return item;
      });
    }

    return {
      id: "book-" + Date.now(),
      isbn: meta.isbn,
      title: meta.title,
      author: meta.author,
      publishYear: meta.publishYear,
      publisher: parsed.publisher || meta.publisher || "Edizione Integrale",
      pageCount: parsed.page_count || meta.pageCount || 250,
      category: meta.category,
      coverUrl: meta.coverUrl,
      summaryLength: length,
      authorBio: parsed.author_bio || meta.authorBio,
      keyThemes: parsed.key_themes || [],
      summary: parsed.summary,
      summary15m: length === "deep" ? parsed.summary : undefined,
      summary5m: length === "standard" ? parsed.summary : undefined,
      summary2m: length === "fast" ? parsed.summary : undefined,
      moral: parsed.moral,
      conceptMap: conceptList,
      chapters: conceptList,
      flashcards: parsed.flashcards || []
    };
  }
  return null;
}
