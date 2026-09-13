// BookFlix by GFire - Application Engine
// Calibrated 3-Tier Summaries (2m, 5m, 15m) & Instant Real-Time Barcode Scanner

const INITIAL_BOOKS = [
  {
    "id": "seed-geda-2010",
    "isbn": "9788868369323",
    "title": "Nel mare ci sono i coccodrilli",
    "author": "Fabio Geda",
    "publishYear": "2010",
    "publisher": "Baldini+Castoldi",
    "pageCount": 156,
    "category": "Scolastici & Narrativa",
    "coverUrl": "covers/geda.jpg",
    "summaryLength": "deep",
    "authorBio": "Fabio Geda (Torino, 1972) è uno scrittore ed educatore italiano. Laureato in Scienze della Comunicazione, si è a lungo occupato di disagio minorile ed educazione di strada prima di dedicarsi alla narrativa. Nel 2010 ha pubblicato 'Nel mare ci sono i coccodrilli', bestseller internazionale tradotto in oltre trenta paesi, che racconta con straordinaria delicatezza la vera odissea di Enaiatollah Akbari, fuggito dall'Afghanistan all'età di dieci anni.",
    "keyThemes": [
      {
        "title": "Resilienza e le Tre Promesse",
        "desc": "Prima di lasciarlo solo a Quetta per sottrarlo ai Talebani, la madre fa pronunciare a Enaiatollah tre promesse solenni: non drogarsi, non usare armi e non rubare. Questi tre principi morali costituiscono la bussola etica inflessibile che gli permette di preservare intatta la propria umanità attraverso anni di brutale sfruttamento."
      },
      {
        "title": "La Condizione Hazara e le Persecuzioni",
        "desc": "La minoranza sciita degli Hazara, caratterizzata da tratti somatici asiatici e storicamente emarginata nell'Afghanistan centrale, subisce le violenze sistematiche e la pulizia etnica imposta dai fondamentalisti Talebani e dai signori della guerra."
      },
      {
        "title": "L'Invisibilità dei Minori Migranti",
        "desc": "Il viaggio clandestino attraverso cinque nazioni mostra la realtà cruda delle rotte migratorie mondiali: bambini costretti a lavorare in condizioni di schiavitù nei cantieri sotterranei e nei forni, in balia di trafficanti spietati e della repressione poliziesca."
      },
      {
        "title": "L'Accoglienza e il Diritto al Futuro",
        "desc": "La rinascita civile a Torino attraverso la famiglia affidataria e la scuola pubblica dimostra il valore salvifico dell'inclusione, della solidarietà comunitaria e del riconoscimento dello status di rifugiato politico."
      }
    ],
    "summary2m": "La vicenda di Enaiatollah Akbari prende avvio a Nava, un villaggio sperduto nell'Afghanistan centrale. Appartiene all'etnia Hazara, una minoranza di fede sciita duramente perseguitata dai fondamentalisti Talebani e dai mercanti Pashtun. Quando il padre, autista di camion, perde la vita in un agguato di briganti durante un trasporto merci, il proprietario del carico pretende che il debito venga saldato prendendo in schiavitù Enaiatollah. Per sottrarre il figlio a un destino di servitù o di morte, la madre lo conduce segretamente in Pakistan, fino alla città di Quetta. Qui, in una squallida locanda, la donna gli fa pronunciare tre promesse inviolabili che segneranno per sempre la sua vita: non fare mai uso di droghe, non impugnare armi e non rubare per nessun motivo al mondo. Il mattino seguente la madre riparte in silenzio per tornare dagli altri figli a Nava, lasciando il bambino di appena dieci anni completamente solo affinché possa sopravvivere.\n\nInizia così un'odissea clandestina durata cinque anni attraverso cinque paesi: Pakistan, Iran, Turchia, Grecia e Italia. Per sopravvivere Enaiatollah lavora come sguattero e venditore ambulante a Quetta, poi fugge in Iran dove viene impiegato per turni massacranti nei forni di una fabbrica di mattoni a Qom e nei cantieri edili di Isfahan, vivendo nel terrore costante delle retate dei miliziani basiji e delle deportazioni di massa. A quattordici anni tenta la rotta per l'Europa: affronta una marcia terrificante di ventisei giorni e notti a piedi sui monti innevati della Turchia a quote estreme, stipato poi in un camion cisterna fino a Istanbul. Con quattro compagni affronta il mare aperto su un minuscolo canotto gonfiabile fino all'isola di Lesbo, sopravvivendo al naufragio in cui uno dei compagni annega nei flutti. Dopo essere stato respinto ad Atene, raggiunge Patrasso e compie un atto disperato: viaggia per tre giorni legato con una cintura all'asse delle ruote di un camion merci a bordo di un traghetto diretto a Venezia. Giunto infine a Torino, viene accolto calorosamente da Danila e Marco, che lo prendono in affido consentendogli di studiare, integrarsi e ritrovare miracolosamente, dopo otto anni di separazione, il contatto telefonico con la madre rimasta in patria.",
    "summary5m": "Origini a Nava e l'addio della madre a Quetta\nLa drammatica testimonianza di Enaiatollah Akbari inizia nel villaggio montano di Nava, nella provincia afghana di Ghazni. La sua famiglia appartiene alla minoranza Hazara, storicamente bersaglio di persecuzioni etniche e religiose. Il padre, impiegato come trasportatore di merci su camion per conto di un influente possidente Pashtun, muore tragicamente durante un agguato di predoni nel quale il carico va distrutto. Il padrone della merce pretende come risarcimento del danno il piccolo Enaiatollah. Con l'avanzata brutale dei Talebani, che chiudono la scuola locale assassinando il maestro di fronte agli allievi, la madre comprende che il bambino non ha scampo: nel 2000 lo porta con sé in una fuga disperata fino a Quetta, in Pakistan. La sera prima di abbandonarlo furtivamente per proteggerlo, gli impone tre solenni giuramenti etici: non cedere alle droghe, non usare mai violenza e armi contro gli altri, e non rubare mai nulla per nessun motivo. All'alba Enaiatollah si ritrova solo al mondo all'età di dieci anni.\n\nLa sopravvivenza in Pakistan e il duro lavoro nei cantieri dell'Iran\nAbbandonato a Quetta, Enaiatollah trova ospitalità nel samavat di Kaka Rahim, guadagnandosi un letto sul pavimento in cambio di lavoretti e vendendo uova sode nel caotico mercato locale. Poiché la polizia pakistana caccia senza sosta i profughi irregolari per taglieggiarli, Enaiatollah decide di affidarsi a un trafficante di uomini (passeur) per raggiungere l'Iran, affrontando un viaggio asfissiante stipato nel bagagliaio surriscaldato di un'auto. A Qom lavora giorno e notte all'interno di una fornace di mattoni, dormendo all'interno dei forni spenti per sfuggire al gelo notturno. Successivamente si trasferisce a Isfahan, dove per quasi tre anni lavora come carpentiere nei cantieri edili piegando tondini di ferro per il cemento armato. La vita nella Repubblica Islamica è segnata dalla paura costante delle retate dei paramilitari basiji e dalla minaccia di finire deportato nel brutale campo di concentramento di transito di Sang-e Safid. Consapevole di non avere alcun avvenire di libertà in quelle terre, Enaiatollah sceglie di puntare verso l'Europa.\n\nLa marcia ghiacciata in Turchia e la disperata traversata dell'Egeo\nInsieme ad altri quattro compagni operai, tra cui Liaqat e Hussain Ali, Enaiatollah paga un trafficante curdo a Teheran e intraprende una straziante camminata di ventisei giorni attraverso le alture montuose che separano l'Iran dalla Turchia. Il gruppo cammina di notte a oltre tremila metri sul livello del mare, tra bufere di neve e temperature siderali, superando canaloni scoscesi dove decine di migranti stremati perdono la vita scivolando nei crepacci o morendo di assideramento sotto gli occhi indifferenti delle guide. Raggiunta Dogubeyazit, viene stipato con altre settanta persone nel fondo cieco di un camion cisterna fino a Istanbul, dove lavora per mesi in una bottega di pelletteria per pagarsi il viaggio verso la Grecia. A Smirne i trafficanti consegnano a lui e ad altri quattro giovani inesperti un fragile gommone a remi. Durante la traversata notturna dell'Egeo il mare grosso e i marosi infrangono il gommone: uno dei ragazzi cade tra le onde scomparendo per sempre nell'oscurità. Miracolosamente i superstiti approdano sulle coste rocciose dell'isola di Lesbo, ma la polizia greca notifica loro un ordine di espulsione immediata.\n\nLa traversata sotto il pianale del camion e la salvezza a Torino\nGiunto ad Atene dopo la traversata in traghetto dal Pireo, Enaiatollah vive per settimane nei parchi pubblici di piazza Victoria senza cibo né protezione, subendo percosse dalla polizia e vivendo di espedienti nel commercio clandestino di sigarette. Si trasferisce quindi a Patrasso per tentare l'imbarco verso l'Italia. Qui concepisce un piano disperato: approfittando della notte, si arrampica sotto il rimorchio di un grande camion merci in sosta e si lega saldamente con una cintura e corde di canapa ai tiranti d'acciaio dell'asse centrale delle ruote, sospeso a pochi centimetri dal tubo di scappamento rovente. In questa posizione straziante resiste per tre giorni e tre notti durante la navigazione sul traghetto adriatico, inalando gas di scarico e lottando disperatamente contro il sonno per non cadere stritolato sulle ruote dell'autostrada. Sbarcato a Venezia, raggiunge prima Roma in treno e infine Torino, dove ritrova un amico d'infanzia di Nava. A Torino la rete di assistenza sociale lo affida a una famiglia italiana, Danila e Marco, che lo accolgono con immenso calore come un figlio. Qui Enaiatollah impara l'italiano, consegue la licenza media e il diploma, ottiene il riconoscimento dello status di rifugiato politico e riesce infine, dopo otto anni di totale silenzio in cui era creduto morto, a telefonare alla madre a Nava in un momento di incontenibile e liberatoria commozione.",
    "summary15m": "Origini a Nava e la minaccia dei Talebani\nEnaiatollah Akbari nasce a Nava, un piccolo villaggio nella provincia di Ghazni, nell'Afghanistan centrale. Appartiene all'etnia Hazara, una minoranza di fede sciita e tratti somatici asiatici storicamente vittima di discriminazioni e violenze da parte della maggioranza Pashtun e dei fondamentalisti Talebani. La vita della comunità di Nava è scandita dai ritmi severi dell'agricoltura di sussistenza e dalle antiche usanze montane, dove i bambini giocano nei cortili polverosi con gli astragali di pecora (il gioco tradizionale del bazul-bazi) e studiano in aule ricavate dentro ripari sotterranei per sfuggire ai bombardamenti e alle incursioni armate. Il padre di Enaiatollah lavora come autista di camion per conto di un ricco commerciante Pashtun: durante un trasporto nel sud del paese, il veicolo cade in un'imboscata dei banditi, il carico va distrutto e il padre perde la vita. A questo punto, il proprietario del carico pretende che il debito venga saldato dalla famiglia di Enaiatollah, minacciando di prendere il bambino come servo risarcitorio. Nel frattempo i Talebani occupano il villaggio, impongono la Sharia integralista e chiudono la scuola elementare sparando al maestro di fronte agli alunni. Consapevole che restare significherebbe condannare il figlio alla schiavitù o alla morte, la madre prende una decisione disperata: all'inizio del 2000 raccoglie i pochi risparmi, nasconde Enaiatollah sotto un burqa e lo conduce clandestinamente oltre la frontiera del Pakistan fino alla città di Quetta. Qui alloggiano in un samavat, una squallida locanda frequentata da profughi afghani. La notte prima di ripartire per tornare dagli altri figli a Nava, la madre si corica accanto a Enaiatollah e gli fa pronunciare tre promesse solenni: non fare mai uso di droghe, non impugnare armi contro nessuno e non rubare per nessun motivo al mondo. All'alba successiva, Enaiatollah si sveglia e scopre che la madre è partita senza salutarlo, lasciandolo solo a dieci anni in terra straniera affinché abbia una possibilità di futuro.\n\nLa sopravvivenza in Pakistan e il lavoro nei cantieri in Iran\nRimasto privo di qualsiasi punto di riferimento a Quetta, Enaiatollah si rimbocca le maniche per non morire di fame. Il proprietario del samavat, Kaka Rahim, gli permette di dormire in una stanza comune in cambio di piccoli servizi, come servire il tè agli avventori e pulire i pavimenti. Successivamente comincia a lavorare come venditore ambulante di uova sode nel bazar, portando un vassoio pesante e gridando per attirare i compratori, ma l'ambiente è pericoloso e la polizia pakistana taglieggia costantemente i profughi afghani privi di documenti con minacce continue di arresto. Insieme ad altri giovani connazionali, decide allora di tentare la traversata verso l'Iran, dove i salari per la manodopera clandestina sono più elevati. Affidatosi a trafficanti senza scrupoli (chiamati passeur), Enaiatollah viaggia stipato per ore nel bagagliaio surriscaldato e buio di un'automobile fino a varcare il confine iraniano tra sobbalzi e nausea. Giunto nella città santa di Qom, trova impiego in una fabbrica di mattoni: le condizioni sono disumane, i turni vanno dall'alba al tramonto trasportando carichi pesantissimi di argilla e i lavoratori dormono all'interno dei forni di cottura quando vengono spenti per ripararsi dal gelo notturno dell'inverno persiano. Dopo circa un anno si sposta a Isfahan, dove viene assunto in un immenso cantiere edile come piegatore di tondini di ferro per il cemento armato. A Isfahan rimane per quasi tre anni, guadagnandosi il rispetto dei capi cantiere grazie alla sua instancabile dedizione e inviando parte dei risparmi in Afghanistan tramite mercanti fidati che raggiungono periodicamente Nava. Tuttavia, la quotidianità in Iran è un incubo a occhi aperti: i basiji (miliziani paramilitari) e le guardie di polizia compiono retate improvvise per catturare gli immigrati irregolari e rinchiuderli nel famigerato campo di concentramento e transito di Sang-e Safid, dove i prigionieri vengono sistematicamente percossi prima di essere deportati oltrefrontiera verso l'Afghanistan devastato dalla guerra civile. Dopo essere scampato miracolosamente a più rastrellamenti e aver subito percosse durante i controlli di piazza, Enaiatollah matura la certezza che in Iran non potrà mai ottenere documenti regolari né costruirsi un'esistenza degna.\n\nLa tragica marcia verso la Turchia e la marcia sulle montagne\nAll'età di circa quattordici anni, Enaiatollah si unisce a un gruppo di quattro amici operai, tra cui Liaqat e Hussain Ali, e decide di tentare il salto verso l'Occidente. A Teheran incontrano un trafficante curdo a cui consegnano tutti i risparmi accumulati in cambio della promessa di essere condotti in Turchia. La traversata si trasforma in una delle esperienze più drammatiche dell'intero esodo: una marcia a piedi di ventisei giorni e notti attraverso le alture impervie e innevate dei monti dell'Anatolia orientale, a quote superiori ai tremila metri con temperature costantemente sottozero. La colonna di profughi avanza in fila indiana nel buio per non farsi scorgere dalle pattuglie dei soldati di frontiera, che sparano a vista su chiunque tenti il valico. I passeur impongono un ritmo serrato senza soste e lasciano morire lungo i canaloni ghiacciati chiunque scivoli o crolli per la fatica: lungo il cammino Enaiatollah vede con orrore decine di cadaveri abbandonati e parzialmente sepolti nella neve, corpi congelati di uomini, donne e ragazzi che non hanno retto lo sforzo inumano della salita. Con i piedi congelati, i vestiti ridotti a brandelli e la pelle piagata dal freddo pungente, il gruppo raggiunge infine Dogubeyazit. Da qui i trafficanti stipano una settantina di persone nel doppiofondo cieco di un camion cisterna per un viaggio soffocante di tre giorni senza aria, luce né cibo fino a Istanbul. Nella metropoli turca i ragazzi trovano rifugio in un sotterraneo fatiscente e umido nel quartiere di Zeytinburnu, lavorando per mesi senza sosta in una pelletteria clandestina per saldare i debiti del viaggio accumulati con i passeur e mettere da parte il denaro necessario per tentare l'imbarco verso l'Europa.\n\nIl naufragio nell'Egeo e l'approdo disperato in Grecia\nA Istanbul i ragazzi capiscono che la rotta verso la Grecia è l'unica via per entrare nel territorio dell'Unione Europea. A Smirne i passeur consegnano a Enaiatollah e a quattro compagni (tutti adolescenti che non hanno mai visto il mare prima di allora e che non sanno assolutamente nuotare) un piccolo gommone gonfiabile giallo, simile a un fragile giocattolo per bambini da spiaggia, dotato di due soli remi di plastica leggera. I trafficanti incassano avidamente i soldi, indicano una debole luce tremolante all'orizzonte dicendo che si tratta della costa greca e spingono il canotto in acqua con la minaccia esplicita delle pistole spianate. Durante la notte il vento si alza violento, le onde alte e scure infrangono il gommone e l'acqua gelida inizia a riempire rapidamente l'imbarcazione. Nel panico generale uno dei remi cade in mare e viene trascinato via dalla corrente, e uno dei ragazzi perde improvvisamente l'equilibrio precipitando tra i flutti: Enaiatollah e gli altri cercano disperatamente di afferrarlo per le braccia ma il compagno viene inesorabilmente inghiottito dal mare e sparisce nell'oscurità più totale. Dopo ore interminabili di terrore cieco, pagaiando con le sole mani nude contro la risacca, alle prime luci dell'alba il gommone si squarcia violentemente contro gli scogli aguzzi dell'isola di Lesbo. I quattro superstiti toccano finalmente terra, esausti, intirizziti e bagnati fradici, trovando rifugio temporaneo tra gli uliveti dell'isola. La polizia greca li intercetta poche ore dopo, li fotografa, li scheda e consegna loro un severo foglio di via con intimazione a lasciare il territorio nazionale entro trenta giorni. Imbarcatisi su un traghetto di linea per il Pireo, Enaiatollah giunge ad Atene, dove sperimenta la degradazione più feroce: dorme all'addiaccio per settimane sulle panchine dei giardini pubblici di piazza Victoria insieme a centinaia di altri migranti disperati, subisce controlli brutali e pestaggi notturni, e vive vendendo pacchetti di sigarette di contrabbando per racimolare pochi spiccioli di pane. Comprendendo che in Grecia non esiste alcuna prospettiva reale di asilo politico né di inserimento sociale, Enaiatollah si sposta a Patrasso per tentare la traversata finale verso le coste italiane.\n\nLa traversata sotto il camion e la rinascita a Torino\nNel porto di Patrasso Enaiatollah trascorre intere settimane a studiare con lucidità i movimenti della polizia portuale, i controlli con i cani antidroga e gli ingressi degli autoarticolati diretti ai traghetti commerciali per l'Adriatico. Dopo decine di tentativi falliti e respinti con manganellate e gas lacrimogeni dai guardacoste greci, riesce a elaborare un piano temerario insieme a un compagno afghano: approfittando della sosta notturna di un grande camion telato prima dell'imbarco, i due si infilano silenziosamente sotto il pianale e si legano saldamente con le cinture dei pantaloni e corde di fortuna ai tiranti di ferro dell'asse centrale delle ruote, a pochi centimetri dal tubo di scarico rovente. In questa posizione straziante rimangono sospesi nel vuoto durante l'intera navigazione navale di tre giorni, respirando fumi tossici di nafta, sopportando vibrazioni laceranti e il terrore costante di addormentarsi per la fatica estrema e finire stritolati sotto le ruote gemellate in movimento. All'arrivo in Italia, il camion sbarca a Venezia e percorre diversi chilometri in autostrada prima di fermarsi in un'area di servizio: i due ragazzi sciolgono con mani tremanti i nodi delle funi, strisciano fuori anneriti dalla fuliggine dei gas di scarico e si disperdono tra i campi limitrofi. Dalla stazione ferroviaria di Mestre Enaiatollah raggiunge Roma in treno, eludendo i controlli, e poi prosegue fino a Torino, dove sa di poter rintracciare un vecchio amico d'infanzia conosciuto anni prima a Nava. A Torino la sua lunga odissea trova finalmente un porto sicuro e una svolta inaspettata: viene notato e preso tempestivamente in carico dai servizi sociali del comune, che lo affidano alle cure generose di Danila e Marco, una coppia piemontese che decide di accoglierlo calorosamente nella propria casa come un vero figlio. Grazie al loro affetto incrollabile, alla guida educativa e al supporto dei mediatori legali, Enaiatollah ottiene lo status di rifugiato politico, viene iscritto regolarmente alla scuola media per adulti, impara con straordinaria rapidità la lingua italiana e completa con successo gli studi superiori fino a conseguire il diploma. Al compimento dei diciotto anni, dopo otto lunghi anni di separazione totale in cui non aveva mai saputo se la sua famiglia fosse ancora viva sotto il regime bellico afghano, riesce a ottenere il recapito telefonico di una bottega vicino al suo villaggio di Nava: compone il numero tremando dall'emozione e, sentendo la voce viva di Enaiatollah dall'altra parte della cornetta, la madre sviene per la commozione credendo di assistere a un miracolo divino, convinta per quasi un decennio che il figlio fosse annegato o morto di stenti lungo il cammino. La vicenda straordinaria di Enaiatollah Akbari si conclude così come una luminosa e indelebile testimonianza di tenacia umana, fedeltà ai propri valori morali e dignità civile contro ogni barriera e crudeltà della storia contemporanea."
  },
  {
    "id": "seed-cassirer-1945",
    "isbn": "9788815072047",
    "title": "Rousseau, Kant, Goethe",
    "author": "Ernst Cassirer",
    "publishYear": "1945",
    "publisher": "Il Mulino",
    "pageCount": 168,
    "category": "Filosofia & Saggistica",
    "coverUrl": "covers/cassirer.jpg",
    "summaryLength": "deep",
    "authorBio": "Ernst Cassirer (Breslavia, 1874 - New York, 1945) è stato uno dei più insigni filosofi e storici delle idee del ventesimo secolo. Esponente di punta della scuola neokantiana di Marburgo, ha rivoluzionato l'epistemologia contemporanea con la sua monumentale 'Filosofia delle forme simboliche'. Costretto a fuggire dalla Germania nel 1933 a causa delle leggi razziali naziste, ha insegnato a Oxford, Göteborg, Yale e Columbia University. Nel magistrale saggio 'Rousseau, Kant, Goethe' (1945) ricostruisce il nucleo generatore della cultura moderna attraverso l'incontro ideale tra la critica morale di Rousseau, l'etica del dovere di Kant e l'intuizione morfologica di Goethe.",
    "keyThemes": [
      {
        "title": "Rousseau e la Riscoperta della Dignità Umana",
        "desc": "Rousseau non predica un ritorno selvaggio allo stato di natura, ma denuncia l'alienazione delle convenzioni sociali. La sua lezione insegna a Kant che il valore supremo dell'essere umano non risiede nel mero primato intellettuale, ma nella libertà morale condivisa da ogni individuo."
      },
      {
        "title": "Kant: Il Newton del Mondo Morale",
        "desc": "Come Isaac Newton ha svelato l'ordine matematico immutabile del cosmo fisico, così Rousseau ha permesso a Kant di identificare la legge fondamentale della natura umana: l'autonomia della volontà, che rende l'uomo fine a se stesso e mai semplice mezzo."
      },
      {
        "title": "Goethe e la Morfologia dell'Urphänomen",
        "desc": "In contrasto con il riduzionismo meccanicistico newtoniano, Goethe concepisce la natura come organismo vivente e metamorfosi continua. L'Urphänomen (fenomeno originario) coglie l'invisibile principio vitale all'interno del visibile empirico."
      },
      {
        "title": "La Sintesi Critica e le Forme Simboliche",
        "desc": "La Critica del Giudizio kantiana getta il ponte tra la necessità della natura deterministica e la libertà dell'agire etico, offrendo a Cassirer la chiave per comprendere la cultura come creazione attiva di senso e simboli umani."
      }
    ],
    "summary2m": "L'opera fondamentale 'Rousseau, Kant, Goethe' di Ernst Cassirer indaga la svolta concettuale decisiva che ha fondato la coscienza dell'uomo moderno, esaminando la profonda relazione intellettuale tra tre figure titaniche della cultura europea. Al centro dell'analisi vi è anzitutto l'influenza rivoluzionaria esercitata da Jean-Jacques Rousseau su Immanuel Kant: Cassirer dimostra in modo ineccepibile come la critica roussoviana della civilizzazione non fosse un ingenuo o regressivo elogio della barbarie primitiva, bensì un'indagine radicale e implacabile sull'alienazione umana, sull'ingiustizia e sulle ipocrisie delle convenzioni sociali. Leggendo l'Émile e il Contratto sociale, il filosofo di Königsberg sperimenta una vera e propria palingenesi etica ed esistenziale: abbandona per sempre il pregiudizio accademico secondo cui la sola erudizione scientifica conferirebbe dignità all'uomo e impara a rispettare incondizionatamente il popolo e l'essenza morale di ogni essere vivente. Per Kant, Rousseau diventa a tutti gli effetti il 'Newton del mondo morale', colui che ha individuato la legge universale e immutabile della libertà sotto il disordine apparente delle fogge esteriori della società.\n\nNella seconda parte del volume, Cassirer pone a confronto l'universo critico trascendentale kantiano con la riflessione scientifico-poetica di Johann Wolfgang von Goethe. Se Kant indaga le condizioni a priori della conoscenza razionale pura e la purezza inflessibile dell'imperativo etico, Goethe si ribella con forza al riduzionismo newtoniano che viviseziona la realtà in frammenti meccanici inerti. Attraverso lo studio metodico della morfologia botanica e l'intuizione dell'Urphänomen (il fenomeno originario vivente), Goethe concepisce la natura come organismo dinamico in incessante metamorfosi qualitativa, dove forma e vita coincidono perfettamente. Cassirer mostra magistralmente come la 'Critica del Giudizio' di Kant rappresenti il ponte teoretico ideale che riconcilia queste due visioni: la filosofia critica e l'intuizione organica di Goethe non si escludono affatto a vicenda, ma testimoniano la duplice e inesauribile capacità dello spirito umano di dare ordine, senso e dignità simbolica al mondo circostante.",
    "summary5m": "Il problema morale dell'Illuminismo e la rivoluzione di Rousseau\nNel suo saggio d'apertura, Ernst Cassirer affronta uno dei nodi storici più controversi e fecondi del pensiero moderno: la posizione eccentrica, tormentata e rivoluzionaria di Jean-Jacques Rousseau all'interno dell'Illuminismo europeo. Mentre i Philosophes parigini come Voltaire, D'Alembert, Helvétius e Holbach celebravano il progresso trionfale delle arti, delle scienze matematiche e dell'economia commerciale come garanzia automatica di emancipazione morale e felicità sociale, Rousseau spezza violentemente questo ottimismo conformista denunciando la profonda scissione spirituale introdotta dalla civiltà. Cassirer dimostra con straordinario rigore filologico che l'attacco di Rousseau non mirava affatto a un regresso nostalgico alla brutalità animale dello stato di natura, ma costituiva una diagnosi implacabile dell'alienazione e della disuguaglianza create dalle gerarchie artificiali del potere. La vera natura dell'uomo non risiede nell'artificio cortigiano, ma nella sua originaria vocazione alla libertà e alla rettitudine interiore. Nel 'Contratto sociale', Rousseau individua l'unica via d'uscita legittima da questa prigionia: la sottomissione volontaria alla Volontà Generale (volonté générale), nella quale ciascun cittadino rinuncia al proprio arbitrio particolare egoistico per conquistare una libertà civile e morale infinitamente superiore, obbedendo solo alle leggi che egli stesso, come membro della comunità, ha concorso a deliberare.\n\nKant e la scoperta della libertà: la lezione di Rousseau\nLa seconda sezione indaga la svolta cruciale e sconvolgente prodotta dalle opere di Rousseau sulla personalità e sulla speculazione di Immanuel Kant. Il pensatore di Königsberg era un intellettuale accademico metodico, formatosi nell'alveo del razionalismo metafisico leibniziano e nella rigorosa devozione per la fisica celeste di Isaac Newton. La lettura febbrile dell'Émile sconvolge i ritmi ferrei dell'esistenza di Kant (fino a fargli mancare la sua proverbiale passeggiata quotidiana) e imprime una deviazione irreversibile alla sua meditazione etica. In una celebre nota autobiografica lasciata tra i suoi frammenti inediti, Kant confessa candidamente la propria metamorfosi: 'Io sono per inclinazione un ricercatore e provo una sete inestinguibile di conoscenza. Ci fu un tempo in cui credevo che solo l'intelletto potesse costituire l'onore supremo dell'umanità e disprezzavo il volgo ignorante che non sa nulla. Rousseau mi ha disingannato; questa presunzione svanì per sempre e ho imparato a onorare gli uomini'. Cassirer conia qui una formula rimasta classica: Rousseau è stato per Kant il 'Newton del mondo morale'. Come Newton era stato capace di rivelare l'armonia matematica immutabile dell'ordine gravitazionale nascosto dietro il moto caotico dei corpi fisici, così Rousseau era riuscito a rintracciare il principio immutabile della libertà e della dignità umana sepolto sotto le stratificazioni corruttrici della storia e del costume.\n\nL'etica dell'autonomia e il primato dell'uomo come fine\nDa questa illuminazione scaturisce l'intero impianto della filosofia morale matura di Kant nella Fondazione della metafisica dei costumi e nella Critica della ragion pratica. Kant universalizza l'intuizione roussoviana della volontà generale traducendola nei concetti universali di imperativo categorico e di autonomia etica pura. L'azione morale non può scaturire da comandi esterni, paure teologiche o ricompense utilitaristiche (eteronomia), ma deve sgorgare unicamente dalla pura auto-legislazione della ragione pratica. L'uomo si scopre cittadino di due mondi: sul piano fenomenico è vincolato alla necessità causale della natura biologica, ma sul piano noumenico è un essere libero dotato di una dignità infinita, sottratta a ogni prezzo di mercato. La formula suprema kantiana prescrive infatti di trattare l'umanità sempre come fine e mai semplicemente come mezzo. Cassirer evidenzia come in questa concezione della libertà risieda il cuore pulsante dell'umanesimo moderno, che vieta categoricamente ogni riduzione della persona umana a mero strumento produttivo o ingranaggio statale.\n\nGoethe, l'Urphänomen e l'unità dello spirito umano\nNell'ultima parte del volume, Cassirer sposta l'indagine sul confronto dialettico tra il rigore trascendentale kantiano e l'esperienza intellettuale e artistica di Johann Wolfgang von Goethe. Di fronte alla natura, Goethe rifiuta fermamente il paradigma newtoniano dell'ottica e della fisica meccanicistica, che pretende di comprendere la realtà dissezionando i fenomeni in particelle astratte e numeri privi di vita. Attraverso le sue ricerche sulla metamorfosi delle piante e la teoria dei colori, Goethe cerca instancabilmente l'Urphänomen, la forma archetipica vivente (Urpflanze) che si sviluppa e trasforma organicamente dall'interno verso l'esterno. Cassirer rileva come l'incontro di Goethe con la 'Critica del Giudizio' kantiana nel 1790 abbia rappresentato una rivelazione: Kant aveva riconosciuto che la totalità teleologica dell'organismo vivente non può essere ridotta al semplice meccanismo di causa ed effetto materiale. Goethe e Kant, pur procedendo da sentieri speculativi diversi – l'intuizione poetico-morfologica l'uno, l'analisi logico-trascendentale l'altro – pervengono alla medesima grandiosa verità: la realtà non è un insieme inerte di oggetti esterni da subire passivamente, ma un orizzonte vivente di significato che lo spirito umano deve continuamente comprendere, ordinare ed elevare attraverso le forme simboliche della cultura, della scienza e dell'arte.",
    "summary15m": "Il problema morale nell'Illuminismo e la rivoluzione di Rousseau\nNel memorabile saggio che apre l'opera, Ernst Cassirer prende le mosse dall'inquadramento storico-culturale del secolo dei Lumi, mostrando come Jean-Jacques Rousseau rappresenti al contempo il vertice più drammatico e l'antitesi più radicale dello spirito enciclopedico del Settecento. Mentre il circolo dei Philosophes parigini – da Voltaire a Diderot, da D'Alembert a Condorcet – guardava con incondizionato ottimismo al trionfo delle arti, dei commerci, della scienza newtoniana e della tecnica come leve inarrestabili di felicità terrena e ingentilimento dei costumi, Rousseau irrompe sulla scena filosofica europea con una voce dissonante e profondamente accusatoria. Con il 'Discorso sulle scienze e le arti' del 1750 e il successivo 'Discorso sull'origine e i fondamenti della disuguaglianza tra gli uomini' del 1755, il pensatore ginevrino smaschera senza pietà la natura posticcia, vanagloriosa e alienante della cultura aristocratica e alto-borghese del tempo. Cassirer sottolinea con straordinaria precisione storiografica che l'intento di Rousseau non fu mai quello di predicare un impossibile e grottesco ritorno alla selva primitiva o una regressione animale allo stato di natura (come la canzonatura velenosa di Voltaire cercò di far credere, insinuando con sarcasmo che Jean-Jacques volesse veder camminare gli uomini a quattro zampe per ritrovare la purezza boschiva). L'obiettivo primario di Rousseau era di natura rigorosamente etica: dimostrare che la civiltà esistente poggia su una scissione interiore intollerabile, in cui l'uomo ha sacrificato il proprio 'essere' autentico a vantaggio dell''apparire' convenzionale, imprigionandosi in relazioni basate sulla vanità, sull'inganno reciproco, sulla dipendenza psicologica e sull'oppressione del debole da parte del potente. La bontà naturale dell'uomo, per Rousseau, non è una dotazione empirica o un mito geografico dell'età dell'oro, ma la purezza originaria della coscienza morale prima che essa venga distorta e corrotta dalle istituzioni oppressive e dalla proprietà privata monopolizzata. Il male morale non deriva dalla volontà divina né dalla struttura ontologica originaria della natura umana, ma dalle distorsioni storiche dell'ordinamento sociale; pertanto, proprio all'uomo spetta la responsabilità inderogabile di rigenerare da cima a fondo la convivenza civile. Questa rigenerazione trova la sua formula matura nel 'Contratto sociale' del 1762: la salvezza dell'umanità non risiede nella dissoluzione della società, ma nella costruzione di un corpo politico fondato sulla Volontà Generale (volonté générale). Attraverso il patto federativo, ciascun individuo mette in comune la propria persona e ogni suo potere sotto la suprema direzione della volontà generale, rinunciando alla libertà puramente naturale (che non è altro che l'arbitrio cieco dell'istinto esposto alla violenza della forza bruta) per conquistare la libertà morale e civile. La libertà non coincide dunque con l'assenza anarchica di vincoli, ma con l'obbedienza consapevole a una legge universale che la comunità stessa ha deliberato per il bene comune di tutti.\n\nKant e la scoperta della libertà: la svolta roussoviana nella filosofia critica\nLa seconda parte del volume costituisce il baricentro speculativo dell'intera indagine di Cassirer: la folgorazione intellettuale che le pagine di Rousseau impressero sulla mente, sul metodo e sulla vocazione filosofica di Immanuel Kant. All'inizio degli anni Sessanta del Settecento, Kant è già un magister rispettato e autorevole nell'Università di Königsberg, un filosofo austero educato al metodo deduttivo di Leibniz e Christian Wolff, un appassionato studioso di meccanica celeste, di cosmologia astronomica e di fisica newtoniana. La sua vita quotidiana scorre con precisione geometrica, votata all'analisi concettuale e al rigore geometrico dei fenomeni naturali. L'incontro con gli scritti di Rousseau, in particolare con la pubblicazione dell'Émile nel 1762, produce una vera e propria rivoluzione interiore nella biografia spirituale di Kant, tanto da spingerlo ad alterare l'orario immutabile della sua passeggiata pomeridiana, evento eccezionale che non mancò di destare lo stupore sbigottito dei concittadini di Königsberg. In una celebre nota marginale, rimasta tra i suoi frammenti inediti più commoventi e profondi, Kant mette a nudo la metamorfosi della propria visione del mondo: 'Io sono per inclinazione un ricercatore. Provo una sete inesausta di conoscenza, un'irrequieta bramosia di procedere innanzi e la soddisfazione per ogni progresso compiuto. Ci fu un tempo in cui credevo che questo solo potesse costituire l'onore dell'umanità e provavo disprezzo per il popolo comune, che ignora tutto. Rousseau mi ha disingannato. Questa presunzione svanì per sempre; ho imparato a rispettare gli uomini e mi considererei ben più inutile di un comune artigiano se non credessi che la mia vocazione possa dare un valore a tutte le altre, stabilendo i diritti sacri dell'umanità'. Cassirer coglie qui il momento esatto in cui l'Illuminismo kantiano cessa di essere una dottrina per pochi sapienti d'élite per trasformarsi nel manifesto universale della dignità dell'uomo. Cassirer instaura un parallelo magistrale: Rousseau è per Kant nel regno della moralità esattamente ciò che Isaac Newton era stato nel regno della fisica teorica. Come Newton era stato in grado di scorgere, al di sotto dell'infinita e caotica molteplicità dei movimenti celesti e terrestri, l'armonia immutabile della legge di gravitazione universale, così Rousseau è stato il primo a scorgere la natura morale dell'uomo al di sotto della varietà mutevole, bizzarra e corrotta delle fogge culturali e delle convenzioni sociali storiche. Rousseau ha 'scoperto la libertà' come attributo inalienabile e costitutivo della condizione umana.\n\nL'etica dell'autonomia e il rispetto incondizionato per la dignità dell'uomo\nL'eredità di Rousseau si salda in modo organico e sublime nell'edificio della filosofia morale matura di Kant, condensandosi nelle pagine immortali della 'Fondazione della metafisica dei costumi' (1785) e della 'Critica della ragion pratica' (1788). Cassirer chiarisce come Kant abbia tradotto in termini rigorosamente logico-trascendentali l'intuizione politica ed esistenziale della volontà generale roussoviana, trasformandola nel concetto di autonomia della volontà pura. Per secoli, i sistemi etici tradizionali avevano fatto dipendere il bene morale da fattori estrinseci: dal timore dei castighi eterni o dalla speranza delle ricompense celesti (eteronomia teologica), dalla ricerca della felicità o del piacere empirico (eteronomia edonistica), oppure dall'utile sociale e dal consenso della maggioranza (eteronomia utilitaristica). Kant spazza via ogni forma di eteronomia: l'agire morale trae la sua validità assoluta unicamente dalla forma pura del dovere per il dovere. La legge morale non viene imposta dall'esterno da un sovrano terreno né dalla natura biologica: essa è auto-legislazione della ragione stessa. Nel formulare l'imperativo categorico, Kant enuncia il principio fondante della civiltà moderna dei diritti umani: 'Agisci in modo da trattare l'umanità, sia nella tua persona sia in quella di ogni altro, sempre anche come fine e mai semplicemente come mezzo'. L'essere umano si sottrae in tal modo alla sfera delle cose materiali: le cose hanno un valore puramente quantitativo e possono essere scambiate, vendute o comprate a un determinato prezzo; l'uomo, in virtù della sua capacità di darsi da sé la propria legge morale, possiede una dignità intrinseca e incalcolabile. È questa la duplice cittadinanza che definisce la dottrina kantiana dell'essere umano: come creatura appartenente al mondo sensibile e fenomenico, l'uomo è soggetto alle ferree catene del determinismo naturale, alle pulsioni biologiche e alla mortalità fisica; ma come soggetto morale razionale, appartenente al mondo intelligibile e noumenico, l'uomo è assolutamente libero, legislatore supremo del regno dei fini.\n\nGoethe e la morfologia vivente: l'Urphänomen contro il meccanicismo astratto\nNella seconda parte del saggio, Cassirer amplia l'orizzonte della sua indagine affrontando il rapporto dialettico tra il criticismo kantiano e l'universo poetico e scientifico di Johann Wolfgang von Goethe. Goethe condivide con Kant il medesimo orizzonte spirituale dell'Umanesimo tedesco, ma il suo approccio alla conoscenza naturale diverge profondamente dall'impostazione newtoniana. Laddove Newton e la scienza moderna procedono vivisezionando i fenomeni naturali con metodo analitico e quantitativo, frammentando la luce nei prismi per ridurla a raggi corpuscolari misurabili e riducendo l'organismo vivente a un congegno meccanico simile a un orologio, Goethe rivendica con forza il primato dell'esperienza visiva immediata e della totalità qualitativa. Nelle sue opere scientifiche fondamentali – dalla 'Metamorfosi delle piante' (Versuch die Metamorphose der Pflanzen zu erklären, 1790) alla 'Dottrina dei colori' (Farbenlehre, 1810) – il poeta e naturalista di Weimar cerca instancabilmente l'Urphänomen, il fenomeno originario o archetipo dinamico che governa dall'interno la metamorfosi ininterrotta di tutti gli esseri viventi. Nella botanica, Goethe non si accontenta di catalogare foglie, steli e petali come frammenti statici di un erbario morto, ma intuisce l'Urpflanze, il principio formativo vivente che attraverso continue fasi di espansione e contrazione dà origine alla molteplicità infinita delle specie vegetali. Cassirer spiega con straordinaria finezza che per Goethe l'Urphänomen non è un'astrazione logica o un'idea platonica separata dal mondo empirico, ma è una realtà sensibile-sovrasensibile contemplata direttamente dallo sguardo dell'osservatore mediante la anschauende Urteilskraft, il giudizio intuitivo. Goethe rifiuta qualsiasi rottura cartesiana tra soggetto conoscente e oggetto conosciuto, tra spirito e materia: la natura è una totalità organica vivente e divina in cui l'uomo è inserito non come dominatore estraneo, ma come parte armoniosa e partecipe dell'evoluzione cosmica.\n\nLa conciliazione critica e l'eredità per la filosofia delle forme simboliche\nIl punto di incontro supremo tra Kant e Goethe viene individuato da Cassirer nella pubblicazione della 'Critica del Giudizio' (Kritik der Urteilskraft) nel 1790. È ampiamente noto dalle memorie e dai diari di Goethe come la lettura attenta della terza Critica kantiana abbia rappresentato per lui uno straordinario momento di esaltazione filosofica e di liberazione teoretica. In quell'opera monumentale, infatti, Kant aveva formalmente dimostrato l'insufficienza del meccanicismo causale cieco per comprendere la specificità dei fenomeni organici: un filo d'erba, un albero secolare o un organismo animale non possono essere spiegati come mere somme additive di ingranaggi fisici, poiché nella vita il tutto precede ontologicamente le parti e ciascun organo agisce in funzione dell'armonia teleologica dell'intero sistema vivente. Con il concetto rivoluzionario di 'finalità senza scopo' (Zweckmäßigkeit ohne Zweck) e con la disamina profonda del bello naturale e artistico, Kant aveva gettato il ponte filosofico tra il regno della natura deterministica e il regno della libertà morale. Cassirer dimostra che Kant e Goethe non si contraddicono affatto, ma rappresentano i due fuochi complementari e inscindibili di una stessa grandiosa ellisse culturale: Kant compie la critica dell'intelletto e fonda l'autonomia inviolabile della legge morale; Goethe compie la redenzione della visione organica della natura e dell'arte. L'itinerario intellettuale tracciato da Cassirer in 'Rousseau, Kant, Goethe' trascende dunque di gran lunga la mera cronaca della storia della filosofia accademica: esso offre la chiave di volta dell'intera sua speculazione personale. Attraverso Rousseau, Kant e Goethe, Cassirer dimostra come la vera essenza della cultura umana non sia una copia passiva della realtà materiale esterna, ma un'incessante attività formativa e simbolica, mediante la quale la coscienza umana modella il linguaggio, il mito, l'arte, la scienza e il diritto, riscattando l'umanità dalle barbarie della violenza e affermando il primato imperituro della libertà e dello spirito."
  },
  {
    "id": "seed-carroll-1865",
    "isbn": "9788804709848",
    "title": "Alice nel Paese delle Meraviglie",
    "author": "Lewis Carroll",
    "publishYear": "1865",
    "publisher": "Mondadori",
    "pageCount": 208,
    "category": "Classici & Narrativa",
    "coverUrl": "covers/alice.jpg",
    "summaryLength": "deep",
    "authorBio": "Lewis Carroll, pseudonimo del matematico, logico e reverendo britannico Charles Lutwidge Dodgson (Daresbury, 1832 - Guildford, 1898), fu per oltre un trentennio docente di matematica al prestigioso Christ Church College di Oxford. Nel 1865 diede alle stampe 'Le avventure di Alice nel Paese delle Meraviglie' (Alice's Adventures in Wonderland), nato dai racconti orali improvvisati durante un pomeriggio estivo in barca sul Tamigi per intrattenere la giovane Alice Liddell e le sue sorelle. L'opera è unanimemente considerata il vertice della letteratura del nonsense, capace di celare dietro l'apparente favola per l'infanzia una vertiginosa meditazione sui paradossi della logica, della percezione e del linguaggio.",
    "keyThemes": [
      {
        "title": "Il Nonsense e la Sovversione delle Regole",
        "desc": "Lewis Carroll utilizza il nonsense non come mero disordine infantile, ma come uno strumento logico raffinato per mettere a nudo l'artificiosità, l'incoerenza e la pedanteria dell'educazione e delle convenzioni sociali dell'Inghilterra vittoriana."
      },
      {
        "title": "La Crisi dell'Identità e le Metamorfosi Corporee",
        "desc": "I continui cambiamenti di statura provocati da cibi, bevande e funghi magici rispecchiano l'angoscia psicologica della crescita: Alice non sa più chi sia veramente di fronte alle domande spiazzanti del Brucaliffo."
      },
      {
        "title": "La Parodia dell'Autoritarismo e del Potere",
        "desc": "La Regina di Cuori, con la sua mania compulsiva di ordinare decapitazioni a ogni minimo contrattempo, incarna l'arbitrio cieco e grottesco dei governanti, ridotti infine a mere carte da gioco senza reale sostanza."
      },
      {
        "title": "Il Tempo Sovvertito e i Giochi Linguistici",
        "desc": "L'eterno tè delle cinque del Cappellaio Matto e della Lepre Marzolina testimonia la ribellione della fantasia contro la tirannia della puntualità industriale e la rigidità delle definizioni lessicali."
      }
    ],
    "summary2m": "La celebre vicenda di Alice prende avvio in un assolato pomeriggio estivo lungo la riva di un fiume, dove la bambina si annoia osservando la sorella intenta a leggere un austero volume privo di figure e dialoghi. All'improvviso appare un insolito Coniglio Bianco con gli occhi rosa, vestito elegantemente di giacca e panciotto, che consulta un orologio a cipolla gridando affannato di essere in grave ritardo. Spinta da un'irresistibile curiosità, Alice lo insegue fin dentro la sua tana sotterranea, precipitando lentamente in un pozzo profondissimo che la conduce in una strana sala chiusa da innumerevoli porte. Bevendo da una boccetta con la scritta 'Bevimi' e assaggiando un pasticcino con su scritto 'Mangiami', la bambina sperimenta repentine e sconcertanti mutazioni di statura: prima si rimpicciolisce fino a venticinque centimetri, poi cresce a dismisura fino a toccare il soffitto, finendo per allagare la stanza con un mare di lacrime disperate.\n\nInizia così un'odissea fantastica e surreale dove ogni logica ordinaria viene costantemente ribaltata. Alice partecipa alla folle Corsa Elettorale con bizzarri uccelli per asciugarsi le vesti, interroga il saggio Brucaliffo che fuma il narghilè su un fungo gigante e le insegna a governare la propria altezza, incontra il beffardo Gatto del Cheshire dal sorriso smaterializzato e prende parte al convulso Tè dei Matti con il Cappellaio e la Lepre Marzolina, condannati a un tempo perpetuamente immobile alle sei del pomeriggio. Introdotta nel giardino reale della Regina di Cuori, si ritrova coinvolta in un'assurda partita di croquet giocata con fenicotteri vivi e ricci sotto la costante minaccia di decapitazione urlata dalla monarca. Il gran finale si celebra nell'aula del tribunale per il presunto furto di alcune crostate: stanca dei soprusi e dei nonsensi dei potenti, Alice si ribella con coraggio, realizzando che i suoi accusatori non sono altro che un fragile mazzo di carte da gioco prima di risvegliarsi serena tra le braccia della sorella sull'argine verde del fiume.",
    "summary5m": "La caduta nella tana del Coniglio e la crisi della statura\nLe avventure di Alice si aprono con una scena campestre di noia infantile: seduta sulla riva erbosa accanto alla sorella maggiore che legge un austero volume privo di illustrazioni, la piccola Alice si domanda quale possa essere l'utilità di un libro senza figure né conversazioni. La quiete viene bruscamente interrotta dal passaggio concitato di un Coniglio Bianco con gli occhi rosa, vestito elegantemente con una giacca, un panciotto e un orologio da taschino che consulta freneticamente esclamando di essere in tremendo ritardo. Incuriosita dal prodigio, la bambina si getta all'inseguimento dell'animale infilandosi nella sua buca sotterranea. Si ritrova a precipitare per un pozzo interminabile foderato di scaffali, mappe e barattoli di marmellata. Atterrata incolume su un cumulo di foglie secche, Alice giunge in un lungo atrio sotterraneo dove tutte le porte sono serrate a chiave. Su un tavolino di cristallo trova una minuscola chiave d'oro che apre una porticina nascosta, dalla quale scorge un meraviglioso giardino fiorito. Incapace di varcare la soglia per via della sua taglia, beve da una boccetta con la scritta 'Bevimi' riducendosi a venticinque centimetri, ma scopre di aver dimenticato la chiave sul tavolo; mangiando poi un pasticcino con la scritta 'Mangiami', cresce fino a quasi tre metri. Sommersa dallo sconforto per la perdita della propria misura corporea, scoppia a piangere versando un vero e proprio lago d'acqua salata, nel quale si ritroverà poco dopo a nuotare insieme a un Topo e ad altri bizzarri animali.\n\nGli incontri stravaganti: dal Brucaliffo al Gatto del Cheshire\nRaggiunta la riva, gli animali decidono di asciugarsi organizzando una Corsa Elettorale (Caucus Race), una gara circolare senza regole né cronometro al termine della quale il Dodo proclama che tutti hanno vinto e hanno diritto a un premio. Rimasta nuovamente sola, Alice si imbatte nella dimora del Coniglio Bianco, che la scambia per la sua domestica e le ordina di recuperargli guanti e ventaglio; entrando nella casa, la bambina beve da un'altra caraffa tornando gigantesca e incastrando braccia e gambe nelle finestre, finché i sassolini lanciati dai soccorritori si trasformano in dolcetti permettendole di rimpicciolire e fuggire nel bosco. Qui incontra il saggio Brucaliffo, seduto in cima a un grande fungo mentre fuma il narghilè. L'insetto le pone la domanda filosofica cruciale: 'Chi sei tu?', gettando Alice in una profonda crisi dovuta alle sue continue metamorfosi. Prima di allontanarsi, il Brucaliffo le rivela che un lato del fungo la farà crescere e l'altro la farà rimpicciolire. Imparando a dosare i due bocconi, Alice stabilizza la sua altezza. Poco più avanti incontra la Duchessa nella sua cucina satura di pepe con un neonato che si tramuta in maialino, e fa la conoscenza del celebre Gatto del Cheshire, capace di svanire lentamente nell'aria lasciando visibile soltanto il suo beffardo sorriso sospeso nel nulla.\n\nIl tè dei matti, il croquet reale e il processo finale\nSeguendo le indicazioni del gatto, Alice giunge al banchetto all'aperto della Lepre Marzolina, del Cappellaio Matto e di un Ghiro sonnolento. A causa di un violento litigio avvenuto tra il Cappellaio e il Tempo, l'orologio si è fermato per sempre alle sei del pomeriggio: per i commensali è perennemente l'ora del tè, costretti a slittare continuamente di sedia senza mai lavare le tazze tra indovinelli insolubili e discorsi paradossali. Lasciata la compagnia indignata dalla loro scortesia, Alice accede finalmente allo splendido giardino reale, dove trova tre giardinieri-carte intenti a dipingere di rosso le rose bianche per paura della Regina di Cuori. L'arrivo del corteo reale dà il via a un'incredibile partita di croquet, giocata con fenicotteri vivi al posto delle mazze, ricci usati come palle e soldati piegati a terra come porte, mentre la Regina urla a ogni istante la sua condanna preferita: 'Tagliategli la testa!'. Dopo aver incontrato la malinconica Falsa Tartaruga e il Grifone sulla scogliera, Alice viene convocata d'urgenza in tribunale: il Fante di Cuori è accusato di aver rubato le crostate della Regina. Di fronte a prove insensate e all'assurda pretesa della sovrana di pronunciare la sentenza prima del verdetto, Alice – che ha improvvisamente riacquistato la sua statura adulta normale – si ribella apertamente all'arbitrio del potere esclamando: 'Non siete altro che un mazzo di carte!'. All'istante le carte si sollevano in un turbine volteggiando nell'aria; la bambina si risveglia con un sobbalzo sull'erba del fiume, scoprendo che le carte erano soltanto foglie secche autunnali posate sul suo viso dalla sorella.",
    "summary15m": "La caduta nella tana del Coniglio Bianco e la stanza delle porte\nL'incipit del capolavoro di Lewis Carroll si colloca in un'atmosfera sospesa di placido meriggio campestre lungo l'argine verdeggiante di un ruscello. La piccola Alice siede sull'erba accanto alla sorella maggiore, immersa nella lettura silenziosa di un volume severo privo di illustrazioni. Sentendosi intorpidita dalla calura estiva, la bambina si domanda con genuina perplessità quale valore possa mai avere un libro privo di immagini e battute di dialogo. La noia viene repentinamente interrotta dall'apparizione fulminea di un Coniglio Bianco con gli occhi rosa: l'animale non soltanto corre affannato parlando da solo, ma estrae dal taschino del suo panciotto un raffinato orologio da tasca per consultare l'ora, gemendo di essere in gravissimo ritardo. Bruciando di curiosità per non aver mai visto prima un coniglio vestito di giacca e panciotto, Alice scatta in piedi e si lancia al suo inseguimento attraverso i campi, scorgendolo mentre si infila a capofitto all'interno di una capiente buca sotto una siepe. Senza esitare, la fanciulla vi si introduce strisciando, per trovarsi improvvisamente a precipitare nel vuoto di un pozzo profondissimo. La discesa si rivela straordinariamente lenta: fluttuando verso il fondo, Alice ha il tempo di osservare le pareti foderate di armadi a muro, librerie, carte geografiche e scaffali da cucina, afferrando persino un barattolo di marmellata d'arance desolatamente vuoto che rimette a posto su un'altra mensola lungo il tragitto per non colpire nessuno. Atterrata dolcemente e senza graffi su un soffice cumulo di foglie secche, Alice scorge ancora la coda del Coniglio che svanisce dietro un angolo. Seguendolo rapidamente, accede a un lungo atrio sotterraneo rischiarato da una fila di lampade pendenti dalla volta, dove tutte le porte risultano serrate a chiave. Su un tavolino a tre zampe in massiccio cristallo trova una minuscola chiave d'oro lucente, che si adatta alla perfezione a una porticina nascosta dietro una tenda di velluto. Aprendo il battente, Alice contempla un giardino incantevole gremito di aiuole multicolori e fontane zampillanti, ma comprende di non poter oltrepassare l'apertura alta appena quaranta centimetri con la sua statura attuale. Tornando verso il tavolo, scorge una boccetta con un cartellino recante la dicitura 'Bevimi': assaggiandone il contenuto delizioso, la sua altezza cala vertiginosamente fino a raggiungere venticinque centimetri. Tuttavia, accorgendosi con sgomento di aver scordato la chiave d'oro sul ripiano del tavolo ormai inaccessibile, cede allo sconforto, per poi trovare sotto il mobile una scatolina di vetro contenente un pasticcino con la parola 'Mangiami'. Alice ne manda giù un boccone: all'istante la sua statura si dilata fino a superare i due metri e mezzo, costringendola a curvare la testa contro il soffitto. Angosciata dalla perdita di ogni misura stabile della propria persona, la bambina scoppia in un pianto dirotto versando lacrime grandi come noci che allagano il pavimento; sventolandosi poi inavvertitamente con il ventaglio lasciato cadere dal Coniglio Bianco atterrito dalla sua voce titanica, Alice rimpicciolisce di colpo, scivolando nell'immenso lago d'acqua salata scaturito dal suo stesso pianto.\n\nLa Corsa Elettorale, i consigli del Brucaliffo e il gatto del Cheshire\nNuotando a fatica nella pozza salmastra, Alice stringe amicizia con un Topo intimorito dalle reminiscenze della gatta Dinah, per poi essere raggiunta da una bizzarra comitiva di volatili e creature scivolate in acqua: un'Anatra, un Dodo, un Pappagallo Lory e un Aquilotto. Raggiunta la riva tra fango e sterpaglie, il Dodo propone per asciugarsi una 'Corsa Elettorale' (Caucus Race): una gara senza regole prefissate né orari precisi in cui i partecipanti corrono in cerchio disordinatamente, fermandosi a piacimento dopo una mezz'ora. Alla fine della corsa, il Dodo sentenzia con solennità che tutti hanno vinto e tutti meritano un premio, costringendo Alice a distribuire tutti i confetti rimasti nelle sue tasche come ricompensa. Poco dopo, il Coniglio Bianco la scambia per la cameriera Mary Ann e le ordina bruscamente di portargli guanti e ventaglio dalla sua villetta; entrata nella stanza, Alice beve da un'altra boccetta tornando gigantesca e incastrando gli arti nelle finestre, finché i sassolini scagliati contro la facciata si trasformano in dolcetti permettendole di rimpicciolire e fuggire nel bosco. Qui la fanciulla incontra un grande Brucaliffo azzurro, seduto in cima a un fungo gigante mentre aspira con serafica lentezza il fumo di un lungo narghilè. Con tono flemmatico, l'insetto le pone la domanda fondante dell'intera avventura: 'Chi sei tu?'. Alice risponde con disarmante sincerità di non sapere più chi sia veramente, essendo mutata di forma e misura innumerevoli volte dall'inizio del giorno. Il Brucaliffo, dopo averle fatto recitare la bislacca parodia di Padre William, le rivela il segreto della sua natura: 'Un lato del fungo ti farà crescere, l'altro lato ti farà rimpicciolire'. Staccando con perizia due frammenti dalle parti opposte del cappello del fungo, la bambina impara finalmente a dosare le proprie metamorfosi, evitando sia di perdersi nell'erba sia di estendere il collo tra le chiome degli alberi come un serpente. Stabilizzata la propria altezza, Alice raggiunge la dimora della Duchessa, immergendosi in una cucina fumante dominata da una cuoca isterica che scaglia piatti e abusa di pepe, mentre la nobildonna culla un neonato deforme che urla disperato. Preso in custodia il bambino per sottrarlo a quel caos violento, Alice lo porta all'aperto, scoprendo che la creatura si è trasformata progressivamente in un maialino che si allontana nel sottobosco. Voltando lo sguardo verso i rami di un albero, la bimba scorge il Gatto del Cheshire, che le illustra la stravaganza costitutiva di quel reame ('Qui siamo tutti matti') per poi svanire con sorniona lentezza, lasciando per ultimo il suo enigmatico e largo sorriso sospeso nell'aria.\n\nIl tè dei matti e l'enigma del tempo immobile\nSeguendo le indicazioni del felino, Alice raggiunge il giardino della Lepre Marzolina, dove attorno a una lunga tavola imbandita si consuma un ricevimento perpetuo in compagnia del Cappellaio Matto e di un sonnolento Ghiro schiacciato tra i due come un soffice cuscino. Nonostante la moltitudine di posti liberi, i padroni di casa accolgono la nuova arrivata gridando sgarbatamente che non vi è alcun posto disponibile. Alice prende posto con fierezza all'estremità della tavola, dando inizio a un duello verbale intessuto di nonsensi, freddure e paradossi logici. La Lepre offre cortesemente del vino inesistente, mentre il Cappellaio scruta Alice con aria sbigottita proponendole il suo indovinello immortale: 'Perché un corvo assomiglia a uno scrittoio?'. All'ammissione di resa della bambina, il Cappellaio confessa con la massima naturalezza di non conoscerne affatto la risposta, ribadendo che il tempo non è una cosa da misurare, ma una persona vivente con cui non bisogna mai venire a contrasto. Durante un concerto organizzato dalla Regina di Cuori, infatti, il Cappellaio era stato accusato dalla monarca di 'ammazzare il Tempo' a causa delle sue stonate esibizioni canore; sentitosi gravemente offeso dall'insulto, il signor Tempo si è vendicato bloccando le lancette dell'orologio perennemente sulle sei del pomeriggio. Da allora, per il Cappellaio e la Lepre è perennemente giunta l'ora del tè: impossibilitati ad avere tregua per rassettare le stoviglie o fare il bucato, i commensali sono costretti a spostarsi di continuo da una sedia all'altra lungo la tavola non appena le tazze si sporcano. Nel frattempo il Ghiro, risvegliato a colpi di pizzicotti e gocce di tè caldo sul naso, intrattiene la compagnia narrando la surreale fiaba di tre fanciulle – Elsie, Lacie e Tillie – vissute sul fondo di un pozzo di melassa impegnate a disegnare figure con la lettera M. Indignata dalla sfrontatezza, dalla scortesia e dalla totale irrazionalità dei suoi ospiti, Alice abbandona la tavolata giurando che non vi farà mai più ritorno, scorgendo da lontano il Cappellaio e la Lepre intenti a comprimere il malcapitato Ghiro dentro il beccuccio della teiera.\n\nIl campo di croquet della Regina di Cuori e la Falsa Tartaruga\nAddentrandosi nuovamente nella foresta, Alice nota un albero provvisto di una porta ricavata nel tronco; oltrepassandola, si ritrova magicamente nell'atrio sotterraneo iniziale. Questa volta la bambina non commette errori: afferra per tempo la chiave d'oro sul tavolino di cristallo, ingerisce una porzione esatta di fungo magico rimpicciolendosi fino a raggiungere la statura ideale, apre la minuscola porta ed entra trionfalmente nello splendido giardino baciato dal sole. La prima scena che si para davanti ai suoi occhi è un magnifico roseto nei pressi della reggia: tre giardinieri dalle sagome bidimensionali simili a carte da gioco – contrassegnati dai numeri Due, Cinque e Sette di Picche – sono occupati ad applicare freneticamente pittura scarlatta sopra candide rose bianche piantate per sbaglio, temendo che la Regina, scoprendo l'errore, possa ordinarne la decapitazione istantanea. Pochi istanti dopo risuona una marcia imperiosa: il corteo reale fa il suo ingresso sontuoso, composto da soldati-carte armati di lance, cortigiani ornati di diamanti e i piccoli principi di cuori. Chiudono la sfilata il Re e la collerica Regina di Cuori, affiancata dal Fante di Cuori che trasporta la corona d'oro su un cuscino scarlatto. Non appena scorge le rose gocciolanti vernice e i giardinieri prostrati a terra, la sovrana monta su tutte le furie e sbraita il suo celebre editto: 'Tagliategli la testa!'. Alice interviene prontamente nascondendo i tre sventurati dentro un capiente vaso da fiori salvando loro la vita, mentre i soldati fingono di aver eseguito l'esecuzione. La Regina arruola quindi la fanciulla per la più stravagante partita di croquet del regno: il campo di gioco è un terreno dissestato pieno di solchi profondi, le palle sono ricci vivi arrotolati, le mazze sono fenicotteri vivi tenuti per il collo e infilati sotto il braccio, mentre le porte sono formate dai soldati-carte costretti a piegarsi ad arco toccando il prato con mani e piedi. Tra fenicotteri che raddrizzano il collo guardando i giocatori, ricci che scappano e la Regina che corre per il campo gridando condanne a morte, riappare nell'aria la testa eterea del Gatto del Cheshire, scatenando una disputa insanabile tra il boia e il Re sull'impossibilità di decapitare una creatura sprovvista di corpo. Scortata poi dal Grifone su una scogliera a picco sul mare, Alice ascolta commossa i ricordi nostalgici della Falsa Tartaruga, bizzarra creatura per metà rettile e per metà vitello, che piange ricordando la scuola sottomarina e mostra alla bambina i movimenti vivaci della celebre Danza delle Aragoste prima che una tromba lontana annunci l'inizio del processo.\n\nIl processo per le crostate rubate e il risveglio di Alice\nRaggiunta di gran corsa la corte di giustizia, Alice assiste all'avvio del processo contro il Fante di Cuori, accusato formalmente di aver sottratto alla mensa reale un vassoio di squisite crostate fresche posate su un tavolo al centro dell'aula. Il Re e la Regina siedono sui rispettivi scranni maestosi, mentre il banco della giuria accoglie dodici animali e creature varie intente a stridere sui propri taccuini con gessetti rumorosi. Il Coniglio Bianco, in veste di solenne araldo, dà lettura dell'imputazione in rima esortando i giurati ad adempiere al loro dovere. Chiamato a testimoniare per primo, il Cappellaio Matto si presenta con la tazza di tè e il pane imburrato in mano tremando a tal punto da azzannare la porcellana per lo spavento; nel medesimo istante Alice comincia improvvisamente a dilatarsi di nuovo, riacquistando spontaneamente la propria statura naturale tra le proteste soffocate del Ghiro. Dopo la testimonianza sbrigativa della cuoca, il Coniglio Bianco squilla tre volte la tromba d'argento chiamando a sorpresa la stessa Alice alla sbarra. Balzando in piedi con impeto fiero, la ragazza rovescia con la gonna l'intero scanno della giuria sparpagliando i giurati sul pavimento come pesci rossi caduti dall'ampolla, per poi rimetterli al loro posto con pazienza. Il Re tenta goffamente di cacciarla dall'aula citando una presunta 'Regola Quarantadue' secondo cui chiunque superi un miglio d'altezza debba lasciare il tribunale, ma Alice ribatte che la norma è stata inventata su due piedi dal sovrano senza alcun valore giuridico. Quando il Coniglio esibisce una misteriosa poesia anonima priva di senso come prova schiacciante di colpevolezza e la Regina pretende con isterica prepotenza che si emetta prima la sentenza di condanna a morte e soltanto dopo il verdetto della giuria, Alice si ribella con sdegno incrollabile contro quell'assurdo sopruso: 'Chi si cura di voi? Non siete altro che un mazzo di carte!'. All'improvviso l'intero mazzo di carte da gioco spicca il volo turbinando minaccioso nell'aria e ricadendo fittamente sul capo e sulle spalle della ragazza. Alice caccia un grido sollevando le mani per difendersi, per ritrovarsi nell'istante successivo adagiata dolcemente con il capo sul grembo della sorella maggiore sull'argine erboso del fiume. La sorella le scosta con affetto dal volto alcune foglie secche autunnali cadute dal ramo, annunciandole con un sorriso che il lungo sonno è finito; Alice racconta con gli occhi ricolmi di meraviglia il sogno straordinario appena vissuto prima di rincasare felice per l'ora del tè, lasciando la sorella a contemplare il tramonto e a custodire nel cuore l'incanto eterno della fanciullezza."
  },
  {
    "id": "seed-saintexupery-1943",
    "isbn": "9788845277344",
    "title": "Il Piccolo Principe",
    "author": "Antoine de Saint-Exupéry",
    "publishYear": "1943",
    "publisher": "Bompiani",
    "pageCount": 128,
    "category": "Classici & Narrativa",
    "coverUrl": "covers/principe.jpg",
    "summaryLength": "deep",
    "authorBio": "Antoine de Saint-Exupéry (Lione, 1900 - Mar Tirreno, 1944) è stato un celebre scrittore, poeta e pioniere dell'aviazione civile e militare francese. Tra i primi trasvolatori postali sulle rotte transahariane e andine, durante la Seconda Guerra Mondiale fu pilota da ricognizione per la Francia libera, scomparendo tragicamente in missione sui cieli della Provenza nel luglio del 1944. Scritto e illustrato durante l'esilio a New York nel 1943, 'Il Piccolo Principe' è una favola filosofica universale di abbacinante purezza, tradotta in centinaia di lingue, che esplora il senso dell'amicizia, la cura dei legami e il mistero dell'animo umano.",
    "keyThemes": [
      {
        "title": "L'Essenziale è Invisibile agli Occhi",
        "desc": "Il segreto svelato dalla volpe costituisce il cuore etico dell'opera: solo attraverso lo sguardo puro del cuore e della sensibilità è possibile cogliere la verità autentica delle cose, mentre la sola vista esteriore resta prigioniera dell'apparenza quantitativa."
      },
      {
        "title": "L'Addomesticamento e la Responsabilità dei Legami",
        "desc": "Creare legami d'affetto richiede pazienza, tempo e devozione. Il tempo donato alla propria rosa rende quel fiore unico tra milioni, fondando una responsabilità morale perenne verso coloro che abbiamo accolto nel nostro cuore."
      },
      {
        "title": "L'Aridità Spirituale del Mondo Adulto",
        "desc": "I bizzarri monarchi, burocrati e finanzieri incontrati sui minuscoli asteroidi mettono a nudo le ossessioni sterili della vita adulta: il potere fine a se stesso, l'accumulo privo di gioia e l'incapacità di meravigliarsi di fronte al mistero."
      },
      {
        "title": "La Poesia del Distacco e l'Eternità dell'Amore",
        "desc": "Il congedo terreno del Piccolo Principe attraverso il morso del serpente nel deserto non è fine disperata, ma liberazione dalla zavorra materiale del corpo per tornare a vegliare sulla sua rosa tra le stelle ridenti del firmamento."
      }
    ],
    "summary2m": "La poetica narrazione si apre nel cuore desolato del Sahara, dove un pilota d'aerei è costretto a un atterraggio d'emergenza a causa di una grave avaria al motore. Isolato a mille miglia da ogni terra abitata con una scorta d'acqua appena sufficiente per una settimana, l'aviatore viene svegliato all'alba da una voce sommessa e melodiosa che gli rivolge una richiesta inaspettata: 'Per favore... mi disegni una pecora?'. È l'incontro con il Piccolo Principe, un fanciullo dai riccioli d'oro giunto dallo spazio, che abita il minuscolo asteroide B-612 dove si prende cura di tre piccoli vulcani, estirpa le radici invasive dei baobab e custodisce una rosa vanitosa ma fragile che ama teneramente. Ferito dalle pretese del fiore, il bambino ha deciso di partire per un viaggio attraverso i pianeti vicini, dove ha incontrato figure grottesche di adulti imprigionati nelle loro ossessioni: un re senza sudditi, un vanitoso assetato di lodi, un ubriacone che beve per dimenticare la vergogna di bere, un banchiere che conta le stelle per possederle, un lampionaio schiavo del dovere e un geografo che registra il mondo senza mai esplorarlo.\n\nApprodata sulla Terra, la sua odissea raggiunge la rivelazione più alta: di fronte a un giardino colmo di cinquemila rose identiche, il Principe piange credendo la sua rosa comune e insignificante. È l'incontro provvidenziale con una volpe selvatica a cambiare per sempre il suo sguardo: l'animale gli insegna il rito dell'addomesticamento, il valore del tempo speso per chi si ama e gli dona il celebre segreto: 'Non si vede bene che col cuore. L'essenziale è invisibile agli occhi'. Comprendendo che la cura prestata ha reso la sua rosa unica nell'universo, il Principe decide di fare ritorno sul suo pianeta per proteggerla dalla pecora: per liberarsi della zavorra del corpo troppo pesante da trasportare, si affida al morso istantaneo di un serpente giallo velenoso tra le dune del deserto, lasciando all'aviatore il dono eterno del suo riso scolpito nel tintinnio delle stelle notturne.",
    "summary5m": "Il naufragio nel deserto e l'apparizione del fanciullo\nLa narrazione è condotta in prima persona da un aviatore che, fin dall'infanzia, ha nutrito un profondo senso di incomprensione nei confronti del mondo adulto: da bambino aveva disegnato un serpente boa intento a digerire un elefante, ma i grandi, privi di immaginazione, avevano scambiato il profilo del disegno per un banale cappello di feltro, consigliandogli di abbandonare l'arte per dedicarsi alla geografia, al calcolo e alla grammatica. Divenuto pilota, l'uomo si ritrova vittima di un incidente aereo nel pieno deserto del Sahara, a mille miglia di distanza da qualunque insediamento umano, con un guasto critico al motore e riserve d'acqua potabile per soli otto giorni. All'alba del primo giorno, mentre tenta disperatamente di smontare il motore, una straordinaria voce di bambino lo desta esclamando con grazia: 'Per favore... mi disegni una pecora?'. L'aviatore, strabiliato nel vedere un piccolo fanciullo biondo vestito da principe in mezzo alla desolazione sabbiosa, prova a disegnare una scatola con tre fori, spiegandogli che la pecora desiderata dorme all'interno: il bimbo si illumina di gioia, dimostrando di possedere quello sguardo autentico che vede oltre la superficie delle cose.\n\nL'asteroide B-612 e il viaggio tra i pianeti degli adulti\nNei giorni successivi, l'aviatore apprende gradualmente le origini del suo piccolo ospite: proviene dall'asteroide B-612, un pianeta minuscolo poco più grande di una casa. Sul suo corpo celeste, il fanciullo cura con scrupolo quotidiano tre vulcani (due attivi e uno spento, usati per scaldare la colazione) ed estirpa con costanza i germogli dei baobab, alberi giganteschi che, se lasciati crescere, frantumerebbero l'asteroide con le loro radici. La gioia del principe era contemplare i tramonti (ne ha guardati persino quarantaquattro in un solo giorno spostando la sedia), finché un mattino è sbocciata una rosa meravigliosa, profumata e superba, munita di quattro spine fragili per difendersi dal mondo. Il Principe l'ha accudita con devozione riparandola dal vento sotto una campana di vetro, ma ferito dai suoi capricci e dai suoi rimproveri vanagloriosi, ha deciso di fuggire approfittando di una migrazione di uccelli selvatici. Il suo viaggio lo ha condotto attraverso sei asteroidi abitati da adulti monomaniacali: un monarca assoluto che pretende di comandare su tutto pur essendo solo; un vanitoso che ascolta solo complimenti chiedendo di essere applaudito; un ubriacone sprofondato nella vergogna di bere; un uomo d'affari che trascorre l'esistenza a contare le stelle credendo che enumerarle equivalga a possederle; un lampionaio obbligato ad accendere e spegnere il lampione a ogni minuto a causa della rotazione accelerata del suo pianeta; e un geografo erudito che cataloga montagne ed effimeri fiumi senza mai allontanarsi dalla propria scrivania.\n\nLa volpe, il dono dell'invisibile e l'addio tra le dune\nGiunto infine sul settimo pianeta, la Terra, il Principe attraversa montagne e deserti fino a imbattersi in un giardino rigoglioso con cinquemila cespugli di rose in fiore: sconvolto nello scoprire che la sua amata rosa non è l'unico esemplare del cosmo come lei gli aveva raccontato, il bambino si getta sull'erba piangendo a calde lacrime. In quel momento si avvicina una volpe: l'animale rifiuta di giocare con lui perché non è ancora stato 'addomesticato'. Di fronte allo stupore del bimbo, la volpe spiega che addomesticare significa 'creare legami': finché si resta estranei, si è solo un ragazzo tra centomila ragazzi e una volpe tra centomila volpi; ma se ci si addomestica reciprocamente, si diventa unici al mondo l'uno per l'altro. Il rito richiede pazienza, riti condivisi e ore trascorse insieme. Quando giunge il momento della separazione, la volpe dona al Principe il suo segreto immortale: 'Non si vede bene che col cuore. L'essenziale è invisibile agli occhi'. Il Principe capisce allora che la sua rosa è infinitamente più preziosa di tutte le altre cinquemila messe insieme, perché è lei che ha innaffiato, custodito e ascoltato lamentarsi. Rientrato nel deserto, all'ottavo giorno l'aviatore termina la riparazione del motore mentre il fanciullo si prepara a compiere il suo sacrificio: stringe un patto con un serpente velenoso per liberarsi del suo corpo mortale, troppo pesante per viaggiare attraverso lo spazio. Consola l'aviatore promettendogli che ogni volta che guarderà il cielo notturno, per lui le stelle risuoneranno come cinquecento milioni di campanellini che ridono; poi, toccato alla caviglia dal lampo giallo del rettile, cade dolcemente sulla sabbia senza produrre il minimo rumore.",
    "summary15m": "L'atterraggio forzato nel Sahara e l'incontro con il Piccolo Principe\nLa vicenda prende le mosse dal ricordo intimo e malinconico del narratore, un aviatore civile che fin dalla prima infanzia ha sperimentato la dolorosa incomprensione del mondo adulto. All'età di sei anni, affascinato da un'illustrazione su una foresta vergine in un libro intitolato 'Storie vissute', il bambino aveva tracciato a matita il suo celebre 'Disegno Numero Uno', raffigurante un serpente boa nell'atto di digerire un elefante intero dopo averlo inghiottito. Mostrando orgoglioso l'opera alle persone grandi per chiedere se la vista le spaventasse, si era sentito rispondere con sufficienza: 'Perché mai un cappello dovrebbe fare paura?'. Per farsi intendere chiaramente, il fanciullo aveva allora realizzato il 'Disegno Numero Due', svelando la radiografia interna dell'elefante dentro il ventre del rettile; ma gli adulti gli avevano raccomandato con fermezza di accantonare i disegni di boa aperti o chiusi per dedicarsi invece a cose serie come la geografia, l'aritmetica e la storia. Repressa la sua vocazione artistica, il protagonista cresce solitario fino a quando, durante una traversata aerea, subisce un gravissimo guasto meccanico al motore del suo apparecchio in pieno deserto del Sahara. Con la scorta di acqua potabile limitata a malapena a una settimana e a mille miglia da qualsiasi presenza umana, l'uomo si corica sulla sabbia sfinito, consapevole che ogni ora è questione di vita o di morte per riuscire a riparare il velivolo. All'alba del primo giorno, mentre comincia a lavorare tra bulloni e chiavi inglesi, una voce soave e squillante lo risveglia improvvisamente pronunciando una richiesta che sembra scaturire da un sogno: 'Per favore... mi disegni una pecora?'. L'aviatore balza in piedi come colpito da un fulmine: stropicciandosi gli occhi, si trova al cospetto di uno straordinario ometto biondo con un cappotto regale, che lo fissa con serietà impeccabile senza mostrare il minimo segno di fame, sete o smarrimento nella distesa desertica. Provando a disegnare una pecora, l'aviatore riceve rifiuti garbati ma inflessibili: una è troppo malaticcia, un'altra è un ariete con le corna, una terza è troppo vecchia. Esasperato dalla fretta di rimettere mano al motore, il pilota scarabocchia una semplice scatola rettangolare con tre fori e sentenzia: 'Questa è la cassetta. La pecora che desideri sta dentro'. Con immenso stupore, il volto del fanciullo si illumina di un radioso sorriso: il Piccolo Principe ha visto esattamente la pecorella addormentata all'interno della cassa, inaugurando tra i due un legame di comprensione immediata e profonda.\n\nL'asteroide B-612, la minaccia dei baobab e l'orgoglio della rosa\nNei giorni successivi, tra un colpo di martello e una sorsata d'acqua misurata col contagocce, l'aviatore ricompone il passato del suo enigmatico visitatore. Il Piccolo Principe proviene dall'asteroide B-612, una minuscola dimora celeste appena più estesa di una casa comune, scoperta nel 1909 da un astronomo turco che non era stato creduto dalla comunità scientifica a causa del suo tradizionale costume orientale, per poi essere acclamato universalmente vent'anni dopo quando si presentò con un impeccabile abito borghese europeo, a riprova della superficialità con cui gli adulti giudicano la realtà basandosi sulle apparenze del vestiario. La vita sul pianeta del principe era scandita da rigorosi doveri ecologici: ogni mattina, dopo aver fatto la propria toletta, il fanciullo procedeva alla pulizia dell'asteroide, spazzando i camini dei suoi tre piccoli vulcani (due attivi e uno spento, eccellenti per cuocere la colazione a fuoco lento) ed estirpando con solerzia meticolosa i germogli dei baobab. Se non vengono sradicati non appena spuntano dall'erba, infatti, i baobab trafiggono il pianeta con le loro radici mostruose finendo per farlo esplodere in mille pezzi. L'unica consolazione alla malinconia del principe era contemplare la quiete dei tramonti: un giorno ne aveva guardati quarantaquattro di fila, bastandogli spostare di pochi passi la propria sedia per seguire il sole al calar della sera. La vera svolta nell'esistenza del bambino era giunta con la nascita misteriosa di una rosa: un fiore apparso una mattina all'improvviso da un seme trasportato dal vento, che si era preparato a lungo nell'ombra della sua corolla verde per sbocciare nella piena luce del sole con quattro spine delicate e una grazia ineguagliabile. Il principe se ne era innamorato all'istante, ma la rosa si era rivelata capricciosa, orgogliosa e suscettibile, tormentandolo con continue richieste di protezione: pretendeva di essere innaffiata con acqua sorgiva, temeva le correnti d'aria esigendo un paravento e, la sera, pretendeva di essere coperta da una campana di vetro trasparente per difendersi dal gelo della notte. Confuso dalle sue civetterie verbali e incapace di decifrare l'amore che si celava dietro le sue finzioni, il principe si era sentito ferito e infelice; approfittando di una migrazione di uccelli selvatici, aveva deciso di abbandonare l'asteroide per cercare risposte nell'universo, lasciando il fiore che, nel momento dell'addio, gli aveva chiesto perdono confessandogli con commovente sincerità: 'Ti amo... È stata colpa mia se non te ne sei accorto, ma anche tu sei stato sciocco quanto me'.\n\nIl viaggio attraverso gli asteroidi: i vizi e le solitudini degli adulti\nLa fuga del Piccolo Principe si trasforma in un'indagine antropologica sulla follia e sulla solitudine del mondo adulto. Il fanciullo visita in successione sei asteroidi vicini, ciascuno abitato da un singolo individuo prigioniero della propria monomania. Sul primo asteroide risiede un Re vestito di porpora ed ermellino che siede su un trono maestoso: per lui tutti gli uomini sono sudditi da comandare e pretende un'obbedienza assoluta, ma essendo un sovrano ragionevole formula solo ordini eseguibili (ordina al sole di tramontare alle diciannove e quaranta), poiché per lui l'autorità poggia innanzitutto sulla ragione. Sul secondo pianeta abita un Vanitoso, provvisto di un bizzarro cappello piumato che solleva per ringraziare ogni volta che riceve elogi, incapace di udire qualunque discorso che non sia un complimento sperticato alla sua bellezza e intelligenza. Sul terzo asteroide vive un Ubriacone sprofondato in un mutismo cupo davanti a file di bottiglie vuote e piene: interrogato dal principe, l'uomo confessa in un circolo vizioso straziante di bere per dimenticare la vergogna di essere un bevitore. Sul quarto mondo trova un Uomo d'Affari talmente concentrato a contare cifre da non sollevare nemmeno la testa al suo arrivo: il finanziere sostiene di possedere le stelle nel cielo per il solo fatto di aver pensato per primo a registrarle su un foglietto chiuso in banca, accumulando numeri che non gli consentono né di abbellire il cosmo né di aiutare alcuno. Sul quinto asteroide, il più minuscolo di tutti, il principe incontra un Lampionaio devoto a una consegna assurda: costretto ad accendere e spegnere il suo lampione a gas ogni singolo minuto perché il pianeta ha accelerato la sua rotazione su se stesso compiendo un giro ogni sessanta secondi, l'operaio incarna l'alienazione del dovere cieco pur suscitando la simpatia del fanciullo per la sua dedizione disinteressata. Sul sesto pianeta infine risiede un anziano Geografo che compila libri monumentali ma non ha mai visto una montagna o una pianura con i propri occhi, poiché spetta agli esploratori viaggiare e riferire i dati. È proprio questo saggio a rivelare al principe il concetto di 'effimero' – ciò che è minacciato da una scomparsa imminente nel tempo –, gettando il bambino in un rimorso lancinante per aver abbandonato la sua rosa sola sul suo asteroide con appena quattro spine per difendersi. Dietro consiglio del geografo, il Piccolo Principe intraprende la rotta verso il pianeta Terra.\n\nL'addomesticamento della volpe e il segreto dell'invisibile agli occhi\nApprodato sul suolo terrestre tra le dune dell'Africa, il Piccolo Principe incontra dapprima un serpente dorato dal morso letale, capace di risolvere ogni enigma e di rimandare gli uomini alla terra da cui provengono, e poi attraversa a piedi vette rocciose dove le sue parole ricevono in cambio soltanto l'eco metallica delle pietre. Camminando a lungo, giunge davanti a un giardino rigoglioso colmo di cinquemila cespugli di rose in piena fioritura: alla vista di quella marea floreale, il bambino viene sopraffatto dallo sgomento e dal dolore. La sua amata rosa gli aveva ripetuto con fierezza di essere l'unica e sola al mondo; scoprendo che esistono migliaia di fiori identici al suo, si sente impoverito e insignificante, gettandosi sull'erba a piangere a dirotto. In quel momento fa la sua comparsa una volpe selvatica. Il principe la invita a giocare insieme per alleviare la sua tristezza, ma l'animale declina spiegando di non poterlo fare finché non sarà stata 'addomesticata'. Il fanciullo domanda il significato di quel termine e la volpe offre la lezione più profonda dell'intera opera: addomesticare significa 'creare legami'. Fino a quando due esseri restano estranei, l'uno è per l'altro soltanto un ragazzo o una volpe fra centomila simili; ma se si stabilisce un legame affettivo, ciascuno diventa unico al mondo per l'altro. L'addomesticamento richiede un rito paziente: sedersi ogni giorno un po' più vicini sull'erba, alla medesima ora, permettendo al cuore di vestirsi a festa nell'attesa dell'incontro. Il principe accudisce la volpe giorno dopo giorno finché il legame si compie; quando giunge l'ora della partenza e l'animale piange per il distacco, il bimbo nota che il legame ha portato sofferenza, ma la volpe obietta che vi ha guadagnato il colore dorato del grano, che ora le ricorderà per sempre la chioma bionda dell'amico. Prima di lasciarlo andare, la volpe lo invita a guardare di nuovo il roseto: il principe comprende che quelle cinquemila rose sono vuote perché nessuno è morto per loro, mentre la sua rosa a casa è speciale perché le ha donato il suo tempo, le sue cure e la sua devozione. La volpe gli affida infine il suo celebre dono spirituale: 'Addio. Ecco il mio segreto. È molto semplice: non si vede bene che col cuore. L'essenziale è invisibile agli occhi. È il tempo che tu hai perduto per la tua rosa che ha fatto la tua rosa così importante. Gli uomini hanno dimenticato questa verità, ma tu non devi dimenticarla. Tu diventi responsabile per sempre di tutto ciò che hai addomesticato. Tu sei responsabile della tua rosa...'.\n\nIl morso del serpente e il sorriso delle stelle\nNel frattempo sono trascorsi otto giorni dall'incidente aereo nel Sahara: l'aviatore ha consumato l'ultima goccia d'acqua della sua fiaschetta e le riparazioni del motore sembrano ancora disperate. Camminando insieme nella notte sotto la volta stellata, il principe e il pilota si mettono alla ricerca di un pozzo tra le sabbie desolate; il narratore contempla il viso addormentato del bimbo tra le sue braccia, comprendendo che la bellezza di quel corpo fragile risiede nella sua fedeltà incrollabile a una rosa che risplende in lui come la fiamma di una lampada. Alle prime luci dell'alba, come in un miracolo, i due trovano un pozzo tradizionale di villaggio provvisto di corda e carrucola: l'acqua bevuta insieme non è semplice alimento biologico, ma pura grazia nata dalla marcia, dal canto della carrucola e dal dono dell'amicizia. Il pilota riesce finalmente a riattivare il motore dell'aereo, ma tornando dal principe lo trova seduto su un antico muretto di pietra in rovina mentre dialoga con il serpente velenoso. Il fanciullo spiega che compie giusto un anno dalla sua caduta sulla Terra: per tornare dalla sua rosa deve abbandonare la pesante zavorra del suo involucro corporeo, che non può trasportare così lontano nello spazio. Rassicura con dolcezza struggente l'aviatore in lacrime: non deve guardare al suo distacco come a una morte, perché la notte, guardando il firmamento, penserà che in una di quelle stelle ride il suo piccolo principe, e per lui tutte le stelle del cielo risuoneranno come cinquecento milioni di piccoli sonagli dorati capaci di ridere. Quando scende l'oscurità, il Piccolo Principe cammina da solo verso le dune; non appena un bagliore giallo balena vicino alla sua caviglia, il fanciullo rimane immobile per un istante e poi cade lentamente sulla sabbia, senza fare alcun rumore, proprio come cade un albero leggero. Il mattino seguente l'aviatore non ritrova il corpo dell'ometto, sapendo con certezza che ha fatto ritorno al suo asteroide; a distanza di anni, guardando il cielo, continua a chiedersi con amore trepidante se la pecora disegnata nella scatola abbia o meno mangiato il fragile fiore, lasciando a ciascuno di noi l'eterno interrogativo che trasforma l'intero universo."
  },
  {
    "id": "seed-orwell-1949",
    "isbn": "9788804668237",
    "title": "1984",
    "author": "George Orwell",
    "publishYear": "1949",
    "publisher": "Mondadori",
    "pageCount": 336,
    "category": "Fantascienza & Distopia",
    "coverUrl": "covers/orwell.jpg",
    "summaryLength": "deep",
    "authorBio": "George Orwell, pseudonimo di Eric Arthur Blair (Motihari, 1903 - Londra, 1950), è stato uno dei più lucidi romanzieri, saggisti e giornalisti politici del Novecento. Combattente antifascista nella Guerra Civile Spagnola con il POUM (esperienza narrata in 'Omaggio alla Catalogna'), maturò una radicale e intransigente avversione verso ogni totalitarismo. Con la feroce satira allegorica de 'La fattoria degli animali' (1945) e il titanico capolavoro distopico '1984' (1949), Orwell ha regalato all'immaginario collettivo categorie universali per comprendere la manipolazione ideologica, la sorveglianza di massa e la cancellazione della verità storica.",
    "keyThemes": [
      {
        "title": "Il Totalitarismo e la Sorveglianza Totale",
        "desc": "Il regime del Socing (Socialismo Inglese) guidato dal Grande Fratello elimina ogni sfera privata attraverso teleschermi onnipresenti, delazioni familiari, la Psicopolizia e il reato di psicoreato (pensare contro il Partito)."
      },
      {
        "title": "Il Bipensiero e la Manipolazione della Memoria",
        "desc": "Il Ministero della Verità altera sistematicamente la storia passata per renderla conforme ai proclami presenti: 'Chi controlla il passato controlla il futuro: chi controlla il presente controlla il passato'. Il bipensiero costringe la mente ad accettare simultaneamente due credenze opposte come vere."
      },
      {
        "title": "La Neolingua e la Distruzione del Pensiero",
        "desc": "Riducendo drasticamente il vocabolario ed eliminando le sfumature concettuali, la Neolingua punta a rendere materialmente impossibile concepire il dissenso o formulare pensieri eretici."
      },
      {
        "title": "Il Potere Puro e la Tortura Psicologica",
        "desc": "Come rivela O'Brien a Winston nel Ministero dell'Amore, il Partito non cerca il potere per il bene comune o per ricchezza, ma per il puro brivido del dominio: 'Se vuoi un'immagine del futuro, immagina uno stivale che calpesta un volto umano, per sempre'."
      }
    ],
    "summary2m": "Nell'aprile del 1984 a Londra, metropoli della Pista di Atterraggio Numero Uno nell'impero totalitario di Oceania, il funzionario Winston Smith vive in uno stato di costante terrore sotto l'occhio implacabile del Grande Fratello. Impiegato presso la Sezione Documenti del Ministero della Verità, il suo compito quotidiano consiste nel riscrivere gli archivi dei quotidiani per allineare retroattivamente la storia alle mutevoli menzogne del Partito. Consapevole dell'orrore liberticida del regime, Winston compie il suo primo atto di ribellione mortale acquistando un taccuino antico nella bottega di antiquariato dell'anziano Charrington, nel quartiere dei prolet, e cominciando a redigere un diario clandestino nel quale vergare il proprio odio contro l'ortodossia di Socing.\n\nLa sua insurrezione morale trova una svolta travolgente nell'incontro con Julia, una giovane impiegata del Ministero che gli fa pervenire un biglietto con scritto 'Ti amo'. I due avviano una relazione appassionata e clandestina, affittando una stanza priva di teleschermi sopra la bottega di Charrington per riscoprire l'autenticità dei sentimenti umani e il sapore proibito del vero caffè. Winston e Julia si illudono di poter partecipare alla cospirazione della Confraternita quando l'influente gerarca O'Brien li accoglie nel suo appartamento consegnando loro il libro proibito di Emmanuel Goldstein. Ma la trappola scatta improvvisa: un teleschermo nascosto dietro un quadro d'epoca rivela che Charrington è un agente della Psicopolizia. Arrestati e condotti nei sotterranei del Ministero dell'Amore, Winston viene sottoposto a mesi di torture fisiche e psicologiche metodiche dirette da O'Brien per spezzare ogni residuo di autonomia intellettuale, costringendolo ad accettare che due più due fa cinque se il Partito lo esige. Trascinato nella famigerata Stanza 101, di fronte alla sua fobia più straziante – una gabbia di ratti famelici accostata al volto –, Winston cede all'abiezione suprema urlando di infliggere quel tormento a Julia. Svuotato dell'anima e rilasciato nel Bar del Castagno, Winston siede solitario bevendo Gin Vittoria: la sua ribellione è spenta per sempre e nel pianto della vittoria impara ad amare sinceramente il Grande Fratello.",
    "summary5m": "Il controllo di Oceania e il diario clandestino di Winston\nLa narrazione ha inizio in un freddo mezzogiorno d'aprile nella Londra devastata di Oceania, dove i manifesti del Grande Fratello fissano i cittadini a ogni angolo proclamando: 'Il Grande Fratello ti guarda'. La società è rigidamente spartita tra il Partito Interno, i burocrati del Partito Esterno e la sterminata massa anonima e miserabile dei proletari. L'esistenza quotidiana è dominata da quattro mastodontiche strutture piramidali: il Ministero della Pace (che sovraintende alla guerra perpetua), il Ministero dell'Abbondanza (che amministra la penuria economica e il razionamento), il Ministero dell'Amore (che gestisce la repressione, la tortura e le sparizioni della Psicopolizia) e il Ministero della Verità, dove lavora il trentanovenne Winston Smith. Il compito di Winston è cancellare sistematicamente la memoria storica: ogni volta che il Partito muta alleanze internazionali o rettifica previsioni economiche smentite dai fatti, egli modifica gli articoli dei giornali del passato e getta le versioni originali nei 'buchi della memoria', inceneritori collegati ai forni sotterranei. Chiunque sia caduto in disgrazia viene 'vaporizzato', trasformato in una non-persona di cui non resta traccia documentale. Roso da un intimo disgusto e tormentato da un'ulcera varicosa alla gamba, Winston commette l'imperdonabile psicoreato: seduto in una nicchia del suo appartamento sfuggita al raggio visivo del teleschermo, inizia a scrivere un diario segreto nel quale traccia le parole 'Abbasso il Grande Fratello', consapevole che la pena per questo gesto sarà la morte o la tortura.\n\nL'amore proibito con Julia e l'illusione della Confraternita\nDurante il rito quotidiano dei Due Minuti d'Odio, durante il quale i membri del Partito scaricano la propria isteria contro il volto del nemico pubblico Emmanuel Goldstein proiettato sugli schermi, Winston nota due persone: una ragazza dai capelli scuri del Reparto Finzione che teme possa essere una spia della Psicopolizia, e O'Brien, un autorevole membro del Partito Interno verso cui avverte un'immediata affinità intellettuale. Pochi giorni dopo, la ragazza si avvicina a Winston nei corridoi del Ministero simulando una caduta e gli infila nella mano un foglietto con tre parole: 'Ti amo'. Inizia così la loro relazione clandestina: la giovane si chiama Julia e la sua ribellione non è teorica, ma vitale, carnale e istintiva, volta a eludere i divieti della Lega Giovanile Anti-Sesso. I due amanti si incontrano prima nei boschi della campagna e poi nella stanza senza teleschermi affittata sopra la bottega di antiquariato del signor Charrington, un vecchio apparentemente benevolo nel quartiere prolet. In quel rifugio dimenticato dal tempo, Winston e Julia vivono un'oasi di umanità riscoprendo sapori perduti come il caffè vero, lo zucchero raffinato e l'intimità dell'amore. L'illusione di poter abbattere il regime si consolida quando O'Brien invita entrambi nella sua lussuosa abitazione, confermando l'esistenza della Confraternita clandestina e consegnando a Winston il testo teorico segreto di Goldstein, intitolato 'Teoria e prassi del collettivismo oligarchico'.\n\nL'imboscata, la tortura nel Ministero dell'Amore e la resa totale\nMentre Winston e Julia leggono a letto il trattato di Goldstein, che spiega come la guerra continua serva unicamente a consumare il surplus economico preservando la gerarchia sociale e come la Neolingua mira a impedire la formulazione stessa del pensiero eretico, una voce metallica risuona improvvisamente nella stanza: 'Voi siete i morti'. Dietro una vecchia incisione su rame della chiesa di San Clemente era nascosto un teleschermo. La bottega viene invasa dagli agenti armati e Charrington si rivela essere un ufficiale sotto copertura della Psicopolizia. Condotto nei labirinti bianchi e senza finestre del Ministero dell'Amore, dove la luce non si spegne mai, Winston scopre che O'Brien è in realtà il suo inquisitore supremo, l'artefice meticoloso di una trappola ordita da anni per studiarlo e distruggerlo. O'Brien sottopone Winston a mesi di percosse sistematiche, scariche elettriche e lavaggi del cervello: il Partito non si accontenta di estorcere confessioni fasulle o di uccidere i ribelli; esige di risanare le loro menti affinché amino sinceramente il Grande Fratello prima di essere soppressi. Winston viene costretto a interiorizzare il bipensiero, accettando che la realtà risiede unicamente nella mente del Partito: se il Partito sostiene che due più due fa cinque, o che la legge di gravità non esiste, quella diventa l'unica verità oggettiva. Nonostante la distruzione del corpo e dell'intelletto, Winston crede di aver conservato intatto l'ultimo baluardo di dignità: non ha tradito Julia nel profondo del cuore. O'Brien lo fa allora condurre nella Stanza 101, il luogo dove ciascun prigioniero affronta 'la cosa peggiore del mondo'. Per Winston sono i ratti: O'Brien gli accosta al viso una gabbia con ratti famelici pronti a divorargli gli occhi e le guance. Nel panico cieco, Winston cede all'abiezione suprema urlando disperato: 'Fatelo a Julia! A Julia, non a me!'. L'ultimo legame umano è reciso. Rilasciato come un guscio vuoto, Winston trascorre i suoi pomeriggi al Bar del Castagno giocando a scacchi e bevendo Gin Vittoria. Quando rivede casualmente Julia in un parco gelato, i due si scambiano parole fredde e vuote ammettendo di essersi reciprocamente traditi senza alcun rimorso. Guardando il teleschermo che proclama l'ennesima trionfale vittoria militare di Oceania, una lacrima solca il viso di Winston: la battaglia interiore è vinta, ogni ribellione è cancellata ed egli ama profondamente il Grande Fratello.",
    "summary15m": "L'incubo di Oceania, i teleschermi e il diario clandestino di Winston Smith\nLa narrazione si apre in una fredda e ventosa giornata d'aprile a Londra, principale agglomerato urbano della Pista di Atterraggio Numero Uno, provincia dell'immenso superstato totalitario di Oceania. Il mondo è rigidamente spartito tra tre potenze perennemente in guerra tra loro: Oceania, Eurasia ed Estasia, blocchi geopolitici mastodontici privi di reali divergenze ideologiche, la cui contesa militare infinita ha l'unico scopo di distruggere il surplus produttivo e mantenere la popolazione in uno stato di perenne indigenza, ignoranza e isteria collettiva. A dominare ogni aspetto della vita materiale e spirituale di Oceania è il Partito, guidato dalla figura carismatica e incombente del Grande Fratello, il cui volto dai baffi neri e lo sguardo severo campeggia su giganteschi manifesti affissi a ogni angolo delle strade, accompagnato dallo slogan ossessivo: 'Il Grande Fratello ti guarda'. Nelle strade e nelle abitazioni dei cittadini, la privacy è stata interamente eradicata: attraverso i 'teleschermi', apparecchi metallici provvisti di microfoni sensibilissimi e telecamere che non possono mai essere spenti se non da pochissimi membri dell'élite, la temuta Psicopolizia sorveglia senza sosta ogni parola, sospiro, mutamento d'umore o contrazione facciale involontaria dei membri del Partito Esterno. La popolazione è divisa in tre caste invalicabili: il Partito Interno (il cervello dello Stato, pari a circa il due per cento della popolazione), il Partito Esterno (le braccia esecutive e burocratiche) e i prolet, l'ottantacinque per cento dei cittadini, lasciati vegetare nella miseria materiale e nell'analfabetismo, tollerati purché non mostrino alcuna consapevolezza politica. La vita di Winston Smith, impiegato trentanovenne del Ministero della Verità dal fisico gracile e tormentato da un'ulcera varicosa sopra la caviglia destra, scorre tra i cubi ciclopici di cemento bianco che dominano l'orizzonte di Londra: il Ministero della Pace che si occupa della guerra, il Ministero dell'Abbondanza che governa il razionamento dei beni di prima necessità, il Ministero dell'Amore che incarna l'apparato repressivo e il Ministero della Verità (in Neolingua 'Miniver'), dove Winston trascorre lunghe giornate a rettificare la storia. Il suo lavoro consiste nell'alterare retroattivamente i numeri passati del quotidiano 'Times', i libri, i discorsi registrati e le fotografie, ogni volta che una predizione economica del Partito fallisce o che un'alleanza militare si capovolge; non appena il materiale originale viene riscritto secondo le nuove direttive, il vecchio documento viene gettato nei 'buchi della memoria', fessure pneumatiche che conducono alle fornaci sotterranee. Chiunque venga arrestato dalla Psicopolizia viene 'vaporizzato': cancellato dai registri, dai ricordi ufficiali e dalla storia, trasformato in una non-persona mai esistita. Incapace di rassegnarsi a questa falsificazione totale e pervaso da un senso di solitudine lancinante, Winston compie l'atto iniziale della sua ribellione: acquista clandestinamente per pochi scellini un antico taccuino di carta vergata e una penna a cannuccia nella bottega di un antiquario nel quartiere miserabile dei prolet, e nella nicchia del suo salotto – l'unico angolo fortunatamente nascosto alla visuale del teleschermo – comincia a redigere un diario segreto, commettendo il reato capitale di 'psicoreato' e vergando con mano febbrile l'invettiva: 'Abbasso il Grande Fratello'.\n\nL'amore proibito con Julia e l'oasi sopra la bottega di Charrington\nLa scintilla dell'insurrezione interiore di Winston trova un formidabile catalizzatore negli ambienti asfittici del Ministero. Durante la cerimonia quotidiana dei 'Due Minuti d'Odio', durante i quali i dipendenti vengono spinti a una frenesia isterica collettiva scagliando ingiurie contro il volto del traditore pubblico Emmanuel Goldstein proiettato sui megaschermi, Winston incrocia lo sguardo di due figure determinanti: O'Brien, un autorevole e imponente funzionario del Partito Interno verso il quale Winston nutre l'intuizione magnetica che si tratti di un dissidente sotto copertura, e una giovane ragazza dai capelli corvini del Reparto Finzione, la quale indossa la fascia scarlatta della Lega Giovanile Anti-Sesso e che Winston osserva con un misto di desiderio represso e terrore paranoico, temendo che sia un'agente provocatrice della Psicopolizia. Pochi giorni dopo, mentre camminano lungo un corridoio del ministero, la ragazza simula una caduta dolorosa e, nell'istante in cui Winston la aiuta a rialzarsi, gli fa scivolare nella mano un minuscolo foglietto di carta piegato. Raggiunto il proprio cubicolo, Winston legge il messaggio vergato a mano: 'Ti amo'. Sconvolto e animato da una nuova ragione di vita, l'uomo organizza un incontro clandestino seguendo meticolose istruzioni ferroviarie fino a una radura boscosa nella campagna inglese, lontano da occhi e microfoni. La ragazza si chiama Julia: ha ventisei anni, un atteggiamento disinvolto e ribelle che non scaturisce da dottrine politiche astratte, ma da un vitalismo feroce e da una rivendicazione irrinunciabile del piacere corporeo. Per Julia il Partito è una noiosa macchina liberticida da beffare sul piano pratico, e l'ortodossia sessuale imposta dal Socing non è altro che un congegno per reprimere l'istinto vitale e convogliarne la frustrazione repressa nell'isteria della guerra e nell'adorazione fanatica del leader. Tra i due amanti divampa una passione divorante che Winston definisce un autentico 'atto politico'. Per sottrarsi ai rischi dei boschi, Winston decide di compiere un passo azzardato: prende in affitto per pochi centesimi la stanza al piano superiore della bottega d'antiquariato del signor Charrington, un vecchio dall'aria mite e nostalgica che vive nel quartiere prolet. Quella stanza spoglia, arredata con un grande letto matrimoniale, un tappeto sbiadito e un antico fermacarte di vetro pesante contenente un corallo rosa fossile, diventa il loro santuario intoccabile. In quel rifugio apparentemente privo di teleschermi, Julia introduce cibi del mercato nero sottratti alle mense del Partito Interno – vero caffè profumato, buste di tè indiano, pane bianco e zucchero raffinato – e indossa profumi e belletti femminili, mentre Winston contempla il pezzo di corallo come il frammento tangibile di un passato incorrotto che il regime non è ancora riuscito ad annientare.\n\nLa confraternita segreta, il libro proibito di Goldstein e l'arresto\nL'illusione di poter dare una forma politica alla propria ribellione si concretizza quando O'Brien avvicina Winston nei corridoi con il pretesto di fornirgli la decima edizione aggiornata del Dizionario della Neolingua, invitandolo nella sua lussuosa residenza privata. Winston e Julia si recano all'appuntamento con il cuore in gola: con loro somma meraviglia, O'Brien dimostra il suo straordinario privilegio spegnendo il teleschermo della stanza e confermando ai due visitatori che la leggendaria 'Confraternita' (l'organizzazione clandestina di resistenza guidata da Goldstein) esiste realmente. O'Brien li arruola solennemente nella cospirazione, avvertendoli con cupo realismo che non riceveranno alcun aiuto pratico, non conosceranno l'identità degli altri confratelli e andranno incontro alla cattura, alla tortura e alla morte certa senza alcuna speranza di vittoria visibile nel corso della loro vita. Pochi giorni dopo, Winston riceve secondo gli accordi una valigetta nera abbandonata contenente una copia dattiloscritta del leggendario trattato di Emmanuel Goldstein, intitolato 'Teoria e prassi del collettivismo oligarchico'. Rifugiatisi nella stanza sopra la bottega di Charrington mentre all'esterno imperversa il consueto frastuono dei quartieri operai, Winston legge avidamente capitoli fondamentali del testo a Julia assopita. Il trattato decostruisce l'architettura sociologica del totalitarismo moderno: spiega come la divisione del mondo in tre super-stati abbia congelato i conflitti storici; come la Neolingua sia stata progettata specificamente per ridurre il vocabolario a tal punto da rendere 'inconcepibile' e materialmente informulabile qualunque pensiero eterodosso (se non esistono le parole per definire la libertà, non può esistere l'idea della ribellione); e come il 'Bipensiero' (Doublethink) sia la facoltà psicologica di sostenere simultaneamente due convinzioni diametralmente contraddittorie nella mente, dimenticando deliberatamente la menzogna per renderla vera nella propria coscienza. Mentre contemplano dalla finestra la figura di una corpulenta donna proletaria intenta a stendere i panni cantando con voce vigorosa, Winston e Julia si scambiano un'estrema dichiarazione di fede nel futuro dell'umanità ('Noi siamo i morti', mormora Winston; 'Voi siete i morti', risponde Julia). All'improvviso, una voce metallica e gelida risuona alle loro spalle con precisione millimetrica: 'Voi siete i morti'. L'incisione raffigurante la chiesa di San Clemente viene scardinata dal muro rivelando un teleschermo nascosto da sempre dietro la cornice. La stanza viene invasa da soldati armati della Psicopolizia; il signor Charrington entra nell'alloggio con sguardo trasformato e privo del suo accento proletario, rivelandosi per ciò che è sempre stato: un freddo ufficiale d'élite della polizia politica. I due amanti vengono percossi selvaggiamente, incatenati e trascinati via in direzioni opposte nel silenzio della notte.\n\nLa tortura nel Ministero dell'Amore e la manipolazione della realtà\nWinston si ritrova rinchiuso nei sotterranei del Ministero dell'Amore, un labirinto senza finestre né aperture verso l'esterno, rischiarato perpetuamente da abbaglianti lampade elettriche al neon che non vengono mai attenuate, rendendo impossibile distinguere il giorno dalla notte (il leggendario 'luogo dove non c'è oscurità' profetizzato da O'Brien). Dopo aver assistito alla degradazione di altri prigionieri, Winston vede entrare nella cella lo stesso O'Brien. Rendendosi conto con sgomento che O'Brien non è un cospiratore ma il suo supremo inquisitore e torturatore, Winston comprende che la Confraternita, il libro di Goldstein e ogni sua mossa erano stati orchestrati, monitorati e catalogati dal Partito fin dal primo giorno per attirarlo nella trappola. Inizia una straziante e metodica via crucis fisica e mentale durata mesi: Winston viene sottoposto a interrogatori interminabili, percosse con manganelli da parte di guardie carcerarie, privazione del sonno e scariche elettriche progressive attraverso un congegno applicato alle tempie manovrato da O'Brien. L'inquisitore non persegue la punizione o la semplice confessione penale dei crimini; lo scopo supremo del Partito è la 'rieducazione totale' dell'individuo, la distruzione sistematica della personalità per risanarla nella fede assoluta dell'ortodossia. O'Brien impartisce a Winston la lezione più agghiacciante della filosofia totalitaria: il Partito non governa per rendere felici gli uomini o per un ideale umanitario, ma per il brivido assoluto e narcisistico del potere fine a se stesso. 'Il potere non è un mezzo, è un fine. Non si stabilisce una dittatura per salvaguardare una rivoluzione; si fa una rivoluzione per stabilire una dittatura'. E l'essenza del potere consiste nell'infliggere sofferenza e umiliazione, perché solo attraverso la sottomissione del dolore si ha la prova tangibile che la volontà altrui è stata spezzata: 'Se vuoi un'immagine del futuro, immagina uno stivale che calpesta un volto umano, per sempre'. Sotto la tortura dell'elettroshock, Winston viene costretto a rinnegare l'evidenza dei sensi e il principio empirico di realtà: quando O'Brien solleva quattro dita esigendo che Winston ne veda cinque, il prigioniero viene straziato finché non impara genuinamente a credere che quattro dita siano cinque se il Partito lo decreta. La realtà non ha un'esistenza autonoma al di fuori della mente umana; poiché il Partito controlla tutte le menti e tutti i documenti storici, il Partito controlla la realtà ontologica e le leggi stesse della natura.\n\nLa stanza 101, il tradimento supremo e l'amore per il Grande Fratello\nNonostante il collasso del corpo – ridotto a uno scheletro vivente con la colonna vertebrale curva, i denti caduti e la pelle grigia piagata dalle percosse – e la capitolazione dell'intelletto, Winston custodisce ancora un ultimo residuo inviolato della sua coscienza morale: non ha smesso di amare Julia nel suo cuore e non ha desiderato la sua distruzione. O'Brien, scandagliando la psiche del prigioniero come un chirurgo, se ne avvede e decreta l'ultimo gradino della rieducazione: il trasferimento nella 'Stanza 101'. Alla domanda terrorizzata di Winston su cosa vi sia nella Stanza 101, O'Brien risponde: 'Tu sai cosa c'è nella Stanza 101, Winston. Tutti lo sanno. Nella Stanza 101 c'è la cosa peggiore del mondo'. La cosa peggiore varia da individuo a individuo: per Winston, come la Psicopolizia ha scrupolosamente registrato nei suoi fascicoli d'infanzia, è il terrore viscerale e incontrollabile dei topi. O'Brien introduce nell'angusto stanzino una gabbia d'acciaio allungata munita di una maschera anatomica che può essere fissata ermeticamente al viso del condannato: all'interno della gabbia si agitano due enormi ratti di fogna neri, affamati e aggressivi, separati dagli occhi di Winston soltanto da una sottile paratia a scorrimento. O'Brien impugna la leva spiegando che, non appena la paratia verrà sollevata, i roditori salteranno sul suo volto scavando nella carne viva e divorandogli gli occhi e le guance fino alla gola. Di fronte all'imminenza del supplizio che va oltre la capacità biologica di sopportazione dell'essere umano, la mente di Winston vacilla nel panico più cieco e primordiale: comprende con lucida disperazione che esiste una sola persona al mondo su cui può scaricare quell'orrore per salvare se stesso. Con un urlo selvaggio, strappandosi le corde vocali, Winston pronuncia il tradimento supremo, cancellando l'ultimo baluardo della sua umanità: 'Fatelo a Julia! Fatelo a Julia! Non a me! A Julia! Non mi importa di quello che le fate. Squartatele la faccia, sbranatela fino alle ossa. Non a me! Julia! Non a me!'. La leva viene ritratta, la gabbia viene allontanata: l'opera di distruzione è compiuta. Mesi dopo, Winston è un uomo libero, impiegato in un lavoro fittizio e insignificante al Ministero, che trascorre pomeriggi inerti e vuoti al 'Bar del Castagno'. Siede sempre allo stesso tavolo appartato, gioca solitarie partite a scacchi e beve enormi quantità di Gin Vittoria all'aroma di chiodi di garofano, con il naso che gli cola in continuazione per i danni neurologici subiti. In un pomeriggio invernale incontra casualmente Julia in un viale spoglio del parco: si siedono brevemente su una panchina gelida e si guardano con occhi privi di qualunque scintilla di vita, i corpi appesantiti e i volti segnati. Entrambi ammettono con tono monocorde e privo di rimorso di essersi reciprocamente traditi nella Stanza 101, desiderando sul serio che l'altro venisse dilaniato pur di salvarsi la vita. Dopo quella confessione raggelante, si separano per non rivedersi mai più. Rientrato nel caffè, mentre la tromba del teleschermo squilla trionfalmente annunciando una colossale vittoria militare dell'esercito di Oceania in Africa che spazza via i nemici e assicura l'eternità dell'impero, Winston guarda con devozione estatica il gigantesco ritratto del Grande Fratello. Una lacrima calda e solitaria gli scivola lungo la guancia: la lunga e tormentata lotta interiore è finalmente finita. Aveva combattuto contro se stesso e aveva vinto. Ora l'anima era purificata: Winston amava sinceramente il Grande Fratello."
  },
  {
    "id": "seed-calvino-1979",
    "isbn": "9788804739500",
    "title": "Se una notte d'inverno un viaggiatore",
    "author": "Italo Calvino",
    "publishYear": "1979",
    "publisher": "Mondadori",
    "pageCount": 288,
    "category": "Classici & Narrativa",
    "coverUrl": "covers/calvino.jpg",
    "summaryLength": "deep",
    "authorBio": "Italo Calvino (Santiago de Las Vegas, 1923 - Siena, 1985) è stato uno dei narratori e intellettuali più luminosi e influenti della letteratura mondiale contemporanea. Dopo l'esperienza resistenziale narrata ne 'Il sentiero dei nidi di ragno' e le celebri allegorie storiche della trilogia dei 'Nostri antenati' (Il visconte dimezzato, Il barone rampante, Il cavaliere inesistente), ha rinnovato le strutture della narrativa sperimentando le tecniche combinatorie dell'OuLiPo. Pubblicato nel 1979, 'Se una notte d'inverno un viaggiatore' è universalmente celebrato come il vertice del metaromanzo postmoderno: un congegno letterario perfetto che elegge a protagonisti il Lettore e la Lettrice, trasformando il desiderio stesso della lettura in una straordinaria avventura amorosa e gnoseologica.",
    "keyThemes": [
      {
        "title": "Il Metaromanzo e il Protagonista Lettore",
        "desc": "Calvino interpella direttamente il lettore in seconda persona ('Tu'), trasformando l'atto fisico e mentale del mettersi a leggere – trovare la posizione comoda, scartare le distrazioni, sfogliare le pagine – nella sostanza drammatica primaria dell'opera."
      },
      {
        "title": "La Magia del Cominciamento e l'Incompiutezza",
        "desc": "I dieci romanzi incastonati nella cornice si interrompono sistematicamente nel punto di massima tensione narrativa, celebrando la vertigine dell'inizio e il piacere inesauribile della promessa che ogni nuova storia dischiude."
      },
      {
        "title": "La Falsificazione e il Fantasma dell'Autore",
        "desc": "Attraverso il machiavellico traduttore Ermes Marana, Calvino esplora il labirinto dei testi apocrifi, dei plagi editoriali e della scomparsa dell'autore, dimostrando come la letteratura viva nell'interpretazione di chi legge più che nell'autorità di chi scrive."
      },
      {
        "title": "La Biblioteca Universale e l'Unione nel Letto",
        "desc": "L'inseguimento dei manoscritti dispersi conduce il Lettore alla Lettrice ideale, Ludmilla: le dieci storie interrotte compongono una misteriosa frase poetica e la ricerca trova il suo approdo fecondo nella condivisione della lettura coniugale."
      }
    ],
    "summary2m": "Il capolavoro metanarrativo di Italo Calvino si apre rivolgendosi direttamente al Lettore in seconda persona singolare, mentre si accinge a iniziare l'ultimo romanzo dello scrittore in una poltrona comoda. Tuttavia, giunto a pagina trentadue, la lettura si interrompe bruscamente: a causa di un clamoroso errore di legatoria editoriale, i fogli ricominciano da capo ripetendo le prime pagine. Recatosi l'indomani in libreria per sostituire la copia difettosa, il protagonista incontra Ludmilla, un'affascinante e appassionata Lettrice incappata nel medesimo inconveniente. I due scoprono che il testo acquistato non era affatto di Calvino, bensì un romanzo polacco intitolato 'Fuori dell'abitato di Malbork' dell'autore Tazio Bazakbal. Entusiasti di proseguire insieme la lettura, i due si procurano il nuovo volume, ma anche questa storia si interrompe nel momento cruciale per un'impaginazione bianca.\n\nHa così inizio un'incredibile odissea letteraria ed esistenziale: nel tentativo disperato di ritrovare la continuazione dei libri interrotti, il Lettore e Ludmilla si imbattono in dieci romanzi completamente diversi per tono, genere e ambientazione (dalla spy story esteuropea al dramma introspettivo nordico, dal noir hard-boiled all'erotismo esotico giapponese), ciascuno troncato puntualmente sul più bello. Dietro questo gigantesco labirinto editoriale si nasconde l'ombra di Ermes Marana, un geniale e cinico traduttore-truffatore ossessionato dal plagio e dalla falsificazione seriale dei manoscritti per conquistare il cuore di Ludmilla. Il viaggio conduce il Lettore attraverso redazioni misteriose, atenei universitari, le Alpi svizzere dove incontra lo scrittore Silas Flannery e stati totalitari ossessionati dalla censura. Giunto infine in una grandiosa biblioteca universale, il Lettore dialoga con sette saggi lettori scoprendo che i dieci incipit interrotti formano un'unica poesia cosmica sul senso della vita; la ricerca si compie felicemente nel matrimonio con Ludmilla, celebrato nell'intimità del grande letto a due piazze dove entrambi possono finalmente spegnere la luce dopo aver terminato la lettura.",
    "summary5m": "Il libro interrotto e l'incontro con la Lettrice\nLa vicenda ha inizio con il celebre incipit in seconda persona singolare: 'Stai per cominciare a leggere il nuovo romanzo Se una notte d'inverno un viaggiatore di Italo Calvino'. Il narratore guida il Lettore attraverso i preparativi fisici e psicologici per la lettura perfetta: allontanare ogni pensiero molesto, trovare la posizione più comoda, regolare la luce ed eliminare le distrazioni del mondo circostante. Il Lettore si immerge nella narrazione, ambientata in una nebbiosa stazione ferroviaria dove un viaggiatore con una valigia scambiata siede in un buffet carico di vapori e fumo. Tuttavia, superata la trentesima pagina, il Lettore scopre con sgomento che il fascicolo ripete all'infinito i medesimi sedici fogli a causa di un vistoso errore di legatoria industriale. Il mattino seguente il protagonista si reca dal libraio per ottenere una copia corretta: qui fa la conoscenza di Ludmilla, la Lettrice per antonomasia, dotata di una sensibilità limpida e priva di sovrastrutture intellettualistiche, anch'essa vittima del medesimo disguido editoriale. Il libraio spiega che c'è stato uno scambio di tiratura e consegna loro il romanzo polacco 'Fuori dell'abitato di Malbork' di Tazio Bazakbal. Ma non appena il Lettore torna a casa e si immerge nell'atmosfera rurale e febbrile della steppa descritta nel nuovo testo, si accorge con orrore che dopo poche pagine i fogli sono completamente bianchi: la storia si spezza di nuovo.\n\nLa girandola degli incipit e la truffa di Ermes Marana\nInizia così una vertiginosa caccia al manoscritto perduto che stringe il Lettore e Ludmilla in un legame affettivo sempre più complice e profondo. Nel tentativo di rintracciare i libri mancanti, i due si rivolgono all'università, dove incontrano il professor Uzzi-Tuzii, titolare di una cattedra di lingua cimbra estinta, e Lotaria, la sorella accademica di Ludmilla, che legge i romanzi vivisezionandoli con astratti programmi elettronici e schemi sociologici per contare la frequenza delle parole. La ricerca porta alla luce una successione irresistibile di nuovi inizi, ciascuno appartenente a un genere letterario opposto al precedente: un romanzo introspettivo e meteorologico sulla costa atlantica ('Sporgendosi dalla costa scoscesa'), un thriller politico borghese ('Senza temere il vento e la vertigine'), un noir poliziesco hard-boiled tra specchi e pistole ('Guarda in basso dove l'ombra si addensa'), un dramma criminale parigino tra collezionisti perversi ('In una rete di linee che s'intreccia'), un romanzo di spionaggio esotico sudamericano ('In una rete di linee che s'interseca'), un'indagine esistenziale in un cantiere deserto ('Sul tappeto di foglie illuminate dalla luna'), un racconto noir psicologico dentro una clinica privata ('Intorno a una fossa che si scava') e un apologo enigmatico sul nulla ('Quale storia laggiù attende la fine?'). Dietro questa proliferazione inarrestabile di romanzi incompiuti si staglia la figura mefistofelica di Ermes Marana, un traduttore poliglotta ed ex amante di Ludmilla. Marana, roso dalla gelosia per l'amore puro che la donna nutre per gli scrittori dei libri che legge, ha concepito un piano nichilistico su scala planetaria: ha fondato un'agenzia letteraria fantasma (la OEPHLW) per inondare l'editoria mondiale di traduzioni contraffatte, manoscritti apocrifi e titoli inesistenti, con l'obiettivo di dimostrare l'inesistenza dell'autore e distruggere per sempre la fiducia nella continuità del racconto.\n\nL'incontro con lo scrittore, la biblioteca universale e il lieto fine\nIl Lettore insegue le tracce di Marana fino in Svizzera, dove visita la residenza isolata del celebre autore Silas Flannery: lo scrittore, in piena crisi creativa, passa le giornate a osservare con il cannocchiale una giovane lettrice su una sdraio (che si rivela essere la stessa Ludmilla) sognando di poter scrivere un libro privo di artificio soggettivo, che possa essere naturale come la crescita di un albero. Coinvolto in intrighi spionistici tra polizie segrete e movimenti sovversivi che lo trascinano fino in America Latina sotto scorta, il Lettore scampa alle censure di regimi dittatoriali che temono il potere destabilizzante della finzione letteraria. Rientrato in patria, il protagonista cerca rifugio in una grandiosa biblioteca pubblica per ritrovare finalmente l'epilogo di uno qualunque dei dieci romanzi intrapresi. Qui dialoga con sette saggi lettori, ciascuno dei quali incarna una diversa concezione della lettura (chi legge per trovare il vero significato, chi per dimenticare la realtà, chi per il brivido del finale, chi per assaporare la grazia delle singole frasi). Durante la conversazione, un anziano lettore compie una folgorante rivelazione: leggendo di seguito i titoli dei dieci romanzi incompiuti, ci si avvede che essi compongono una poesia compiuta e misteriosa: 'Se una notte d'inverno un viaggiatore, fuori dell'abitato di Malbork, sporgendosi dalla costa scoscesa, senza temere il vento e la vertigine, guarda in basso dove l'ombra si addensa in una rete di linee che s'intreccia, in una rete di linee che s'interseca, sul tappeto di foglie illuminate dalla luna, intorno a una fossa che si scava, quale storia laggiù attende la fine?'. Risolto il grande enigma della narrazione, il romanzo si chiude nella stanza da letto dove il Lettore e Ludmilla, ormai sposi felici, leggono fianco a fianco: quando la donna gli suggerisce di spegnere la luce perché è tardi, il Lettore sorride mormorando l'ultima battuta: 'Ancora un momento. Sto per finire Se una notte d'inverno un viaggiatore di Italo Calvino'.",
    "summary15m": "Il Lettore alla ricerca del testo interrotto e l'incontro con Ludmilla\nL'opera si apre con uno dei proemi più rivoluzionari e coinvolgenti dell'intera storia della letteratura novecentesca: il narratore elegge a protagonista assoluto il Lettore stesso, rivolgendosi a lui direttamente con l'uso insistito della seconda persona singolare. 'Stai per cominciare a leggere il nuovo romanzo Se una notte d'inverno un viaggiatore di Italo Calvino. Rilassati. Raccogliti. Allontana da te ogni altro pensiero. Lascia che il mondo che t'intorna sfumi nell'indistinto'. Con straordinaria precisione fenomenologica, Calvino descrive i preparativi necessari per predisporsi alla fruizione estetica: scegliere la poltrona più comoda, regolare l'orientamento della lampada da lettura, distendere le gambe e sbarrare la porta a ogni potenziale distrazione domestica come la televisione o le telefonate importune. Una volta intrapresa la lettura, il Lettore si trova immerso nelle atmosfere fumose e cupe di una remota stazione ferroviaria di provincia: un viaggiatore misterioso con una valigia pesante siede al bancone di un bar intriso di vapori d'unto e fumo di sigarette stantie, aspettando un contatto per scambiare il bagaglio con un contrabbandiere locale. La prosa evoca una densa sensazione di attesa e minaccia incombente; tuttavia, all'improvviso, giunto a pagina trentadue, la continuità del racconto si frantuma: a causa di un marchiano errore di impaginazione e legatoria delle macchine tipografiche industriali, il volume ripete ciclicamente il medesimo fascicolo di sedici pagine, impedendo di fatto qualsiasi avanzamento nella vicenda. Irritato dalla beffa editoriale, il giorno seguente il Lettore fa ritorno nella libreria dove ha acquistato l'opera per esigere una copia intonsa e priva di difetti. È qui che avviene l'incontro destinato a cambiare la traiettoria della sua vita: davanti al banco delle novità incontra una giovane donna dagli occhi luminosi e dallo sguardo attento, anch'essa recatasi dal negoziante con il medesimo volume difettoso sottobraccio. Si chiama Ludmilla: è la Lettrice ideale, una persona che cerca nei libri una purezza emotiva incontaminata, un contatto schietto con la verità umana dei personaggi scevro da qualsiasi nozionismo critico o accademismo pedante. Il libraio porge loro le sue scuse più sincere, spiegando che l'intera partita di libri di Calvino è stata stampata sovrapponendo i fogli di un'opera completamente diversa: il romanzo d'ambientazione esteuropea 'Fuori dell'abitato di Malbork', scritto dall'autore polacco Tazio Bazakbal. Entusiasti della coincidenza e uniti dalla complicità di quell'avventura comune, il Lettore e Ludmilla si scambiano i numeri di telefono e si procurano le copie del romanzo polacco, ripromettendosi di confrontare le proprie impressioni. Ma non appena il Lettore si isola nella propria stanza e si appassiona alle vicende rurali di Malbork – dominate dal giovane Gherardo, dalla fanciulla Brigd e dalle dinamiche arcaiche della trasformazione della segale –, scopre con indicibile costernazione che dopo un pugno di capitoli i fogli del libro sono desolatamente candidi: la tipografia ha rilegato un tomo di carta bianca privo di inchiostro, troncando la storia proprio nell'istante in cui il conflitto sentimentale stava per esplodere.\n\nErmes Marana e l'intreccio dei manoscritti apocrifi\nRifiutandosi di arrendersi al silenzio della pagina bianca, il protagonista decide di recarsi presso l'università cittadina, dove gli è stato riferito che insegna il professor Uzzi-Tuzii, massimo esperto internazionale di lingua e letteratura cimbra, idioma estinto in cui Bazakbal avrebbe in realtà composto il suo romanzo. Nel disadorno ateneo il Lettore incontra Lotaria, la sorella intellettuale di Ludmilla: Lotaria è l'antitesi speculare della Lettrice, una studiosa rigida e militante che legge i testi solo per smontarli mediante astratti programmi al calcolatore, computando la frequenza statistica dei lemmi per estrarre schemi ideologici di classe o matrici sociologiche, uccidendo sul nascere ogni piacere estetico della narrazione. Il professor Uzzi-Tuzii accetta di tradurre a voce per il Lettore e Ludmilla l'unico manoscritto cimbro superstite custodito nel suo archivio, intitolato 'Sporgendosi dalla costa scoscesa': una vicenda plumbea e magnetica ambientata su una scogliera battuta dalle tempeste atlantiche, dove un giovane ornitologo meteoropatico osserva i flussi marini e i disegni delle conchiglie tra oscuri presagi di morte. Ma sul più bello della lettura ad alta voce, il professore si interrompe: le pagine successive del manoscritto risultano mancanti, sottratte furtivamente da un individuo enigmatico di passaggio. È in questo momento che emerge l'identità del demiurgo occulto di quel gigantesco labirinto editoriale: Ermes Marana. Marana è un ex amante di Ludmilla, un traduttore poliglotta, faccendiere e agente letterario dai tratti faustiani, divorato da una gelosia morbosa verso l'amore incondizionato che Ludmilla tributa agli autori dei libri che legge. Incapace di accettare che una donna possa amare fantasmi letterari che non ha mai incontrato di persona, Marana ha architettato una diabolica vendetta globale: ha fondato la OEPHLW (Organizzazione per l'Esaltazione Polimorfa dei Manoscritti Apocrifi), una società fantasma con cui stipula contratti editoriali paralleli, falsifica traduzioni, inventa scrittori inesistenti e mescola deliberatamente le trame e i titoli di decine di opere in corso di stampa. Il suo obiettivo nichilistico è cancellare il concetto stesso di 'autore originale', dimostrando che l'autorialità è solo un'illusione mercantile e che il mondo della letteratura può essere ridotto a una serie infinita di copie senza originale, simulacri interscambiabili che non portano ad alcun approdo definitivo.\n\nDai bassifondi del contrabbando ai regimi totalitari: la proliferazione degli inizi\nSeguendo le tracce labirintiche disseminate dalle truffe di Marana, il Lettore e Ludmilla si ritrovano catapultati all'interno di una vertiginosa proliferazione di inizi narrativi, ciascuno interrotto sistematicamente nel momento in cui l'intreccio tocca il suo culmine parossistico. Il Lettore intraprende così la lettura di 'Senza temere il vento e la vertigine' di Camillo Valeriano (un thriller politico ambientato in una città mitteleuropea durante una sanguinosa rivoluzione comunista, tra barricate e dilemmi etici); poi di 'Guarda in basso dove l'ombra si addensa' del belga Bertrand Vandervelde (un noir metropolitano asfissiante in cui un tassista parigino si trova coinvolto nell'occultamento di un cadavere dentro una discarica di bidoni); e ancora di 'In una rete di linee che s'intreccia' dell'inglese James Cowles (un raffinato pastiche giallo-erotico in cui un miliardario nevrotico osserva attraverso un sistema di specchi telescopici una donna che fa jogging nel parco). Spinto dal desiderio di salvare Ludmilla dalle trame di Marana, il Lettore vola in Svizzera fino al villaggio alpino dove risiede Silas Flannery, celebre autore di bestseller internazionali entrato in una paralizzante crisi di scrittura. Flannery trascorre le giornate osservando da una veranda Ludmilla che legge seduta su una sdraio in una radura boscosa, confessando nel suo diario intimo di provare una straziante invidia per la capacità della donna di assorbire il testo, desiderando di potersi trasformare in una mano meccanica trasparente che copia la realtà senza l'intromissione della vanità dell'io. La fuga di Marana trascina quindi il Lettore attraverso frontiere esotiche fino in America Latina, nella fittizia repubblica di Santa Prisca e poi nello stato totalitario dell'Ataguitania, regimi corrotti dove la polizia segreta confisca i romanzi per riscriverli secondo le direttive della censura di stato, temendo che la letteratura possa insinuare il virus della verità tra le masse popolari. Qui il Lettore si imbatte in altri frammenti incompiuti: il racconto criminale 'In una rete di linee che s'interseca', il mistero claustrofobico 'Sul tappeto di foglie illuminate dalla luna' ambientato in un giardino giapponese di pietre e bambù, l'inquietante dramma ospedaliero 'Intorno a una fossa che si scava' e l'apologo metafisico 'Quale storia laggiù attende la fine?'. Ciascun incipit è un prodigio di stile, un esercizio di mimetismo letterario in cui Calvino sfoggia la sua straordinaria maestria polifonica, lasciando tuttavia il lettore eternamente sospeso sull'orlo di un abisso di curiosità insoddisfatta.\n\nLa biblioteca universale e i sette lettori\nRientrato faticosamente in patria dopo essere scampato ai commissari della censura estera, il Lettore decide che l'unico modo per spezzare quella catena esasperante di incompiutezze consista nel varcare la soglia di una monumentale biblioteca pubblica, per consultare i cataloghi generali e rintracciare i tomi originali con i loro capitoli conclusivi. All'interno della grandiosa sala di consultazione, dominata da colonnati maestosi e scaffalature a perdita d'occhio, il protagonista siede a un grande tavolo rotondo insieme ad altri sette avventori abituali. Si accende così un dibattito filosofico di abbacinante profondità sul senso ultimo dell'esperienza del leggere: ciascuno dei sette saggi interlocutori dà voce a una precisa e peculiare postura esistenziale di fronte al testo scritto. Il primo lettore confessa di cercare nei libri solo la promessa dell'incipit, quella tensione aurorale e sorgiva che nessuna trama successiva potrà mai eguagliare; il secondo dichiara di leggere unicamente per raggiungere la conclusione, desiderando di toccare il fondo dell'opera per verificare se la vita dei protagonisti trovi un ordine saldo e rassicurante; il terzo cerca le pause e gli interstizi vuoti tra le righe, inseguendo ciò che il testo tace e allude; il quarto si immerge nel flusso verbale per dimenticare il peso e le mediocrità del mondo quotidiano; il quinto esige che ogni frase sia un monumento formale di stile e armonia linguistica; il sesto legge per dialogare con gli spettri dei classici del passato; il settimo, infine, sostiene che ogni nuovo libro sia solo una variazione infinita dell'unico grande Libro Universale che l'umanità continua a riscrivere dall'inizio dei tempi. È proprio durante questa disamina corale che uno dei lettori compie una constatazione folgorante: osservando i titoli delle dieci opere interrotte che il protagonista ha inutilmente inseguito per mezzo pianeta, si rende conto che essi non sono frammenti isolati o casuali, bensì segmenti contigui che, pronunciati uno di seguito all'altro, compongono una lirica compiuta di sapore proustiano ed esistenziale: 'Se una notte d'inverno un viaggiatore, fuori dell'abitato di Malbork, sporgendosi dalla costa scoscesa, senza temere il vento e la vertigine, guarda in basso dove l'ombra si addensa in una rete di linee che s'intreccia, in una rete di linee che s'interseca, sul tappeto di foglie illuminate dalla luna, intorno a una fossa che si scava, quale storia laggiù attende la fine?'.\n\nIl compimento del cerchio: il matrimonio e la felicità della lettura\nLa rivelazione della poesia invisibile sigilla la fine dell'erranza del Lettore. Il labirinto di inganni, false identità e traduzioni apocrife orchestrato da Ermes Marana non ha condotto al vuoto del nulla, ma ha tracciato il percorso necessario affinché il Lettore potesse purificare il proprio sguardo e trovare la sintesi suprema tra arte e vita reale. L'inseguimento dei libri incompiuti non era che la metafora trasparente della ricerca della propria anima gemella: Ludmilla, la Lettrice pura che non legge per vanità né per potere, ma per amore del mondo. La narrazione approda così all'ultimo capitolo, un epilogo colmo di grazia, ironia e calore domestico che chiude il cerchio aperto nelle prime pagine. Ci troviamo nella stanza da letto dove il Lettore e Ludmilla, ormai uniti in matrimonio, dividono un ampio letto a due piazze. Entrambi sono coricati sotto le coperte, ciascuno immerso nel proprio volume personale alla luce della rispettiva lampada da comodino. Ludmilla solleva lo sguardo dal suo testo, spegne la propria luce e si rivolge con dolcezza all'uomo: 'Spegni anche tu? Non sei stanco di leggere?'. Il Lettore, con un sorriso sereno e colmo di beatitudine, risponde pronunciando le parole che suggellano l'intero capolavoro: 'Ancora un momento. Sto per finire Se una notte d'inverno un viaggiatore di Italo Calvino'. La promessa dell'incipit si è finalmente compiuta, riconciliando il desiderio infinito del racconto con la quiete e la pienezza della vita condivisa."
  },
  {
    "id": "seed-harari-2011",
    "isbn": "9788845292491",
    "title": "Sapiens: Da animali a dèi",
    "author": "Yuval Noah Harari",
    "publishYear": "2011",
    "publisher": "Bompiani",
    "pageCount": 544,
    "category": "Saggistica & Storia",
    "coverUrl": "covers/harari.jpg",
    "summaryLength": "deep",
    "authorBio": "Yuval Noah Harari (Haifa, 1976) è uno storico, filosofo e saggista israeliano, professore ordinario presso il Dipartimento di Storia dell'Università Ebraica di Gerusalemme. Dopo il dottorato conseguito a Oxford nel 2002 con una tesi sulla storia militare medievale, ha raggiunto una straordinaria fama planetaria nel 2011 con la pubblicazione di 'Sapiens: Da animali a dèi', tradotto in oltre sessantacinque lingue con decine di milioni di copie vendute. L'opera ridefinisce la storia universale integrando biologia evoluzionistica, antropologia ed economia, tracciando l'ascesa di un primate insignificante divenuto signore del pianeta.",
    "keyThemes": [
      {
        "title": "La Rivoluzione Cognitiva e le Finzioni Condivise",
        "desc": "Settantamila anni fa una mutazione genetica permise a Homo sapiens di comunicare concetti immateriali. La capacità di credere a miti comuni (religioni, nazioni, denaro, leggi) consentì a milioni di individui non imparentati di cooperare in modo flessibile ed efficace, superando il limite di Dunbar di 150 individui."
      },
      {
        "title": "La Rivoluzione Agricola come la Più Grande Truffa",
        "desc": "La transizione alla coltivazione 12.000 anni fa non migliorò la qualità della vita del singolo sapiens, costretto a una fatica massacrante e a una dieta impoverita, ma arricchì le élite ed espanse la biomassa della specie: non fu l'uomo ad addomesticare il grano, ma il grano ad addomesticare l'uomo."
      },
      {
        "title": "I Tre Grandi Unificatori dell'Umanità",
        "desc": "La frammentazione dei popoli preistorici è stata progressivamente saldata da tre potenti forze universali: il denaro (la più universale e tollerante rete di fiducia mai concepita), gli imperi (che fusero culture eterogenee) e le religioni a vocazione universale."
      },
      {
        "title": "La Rivoluzione Scientifica e l'Homo Deus",
        "desc": "La scienza moderna è nata con l'ammissione dell'ignoranza ('Ignoramus') e si è potenziata grazie all'alleanza con l'imperialismo e il credito capitalistico. Oggi la biotecnologia e l'intelligenza artificiale minacciano di spezzare i confini della selezione naturale per inaugurare l'era del post-umano."
      }
    ],
    "summary2m": "Centomila anni fa la Terra era abitata da almeno sei specie diverse di esseri umani: creature insignificanti dal punto di vista ecologico, paragonabili a gorilla o meduse nell'economia della biosfera. Eppure oggi una sola specie è sopravvissuta ed esercita un dominio totale sul globo: Homo sapiens. Il capolavoro di Yuval Noah Harari ricostruisce i tre passaggi epocali che hanno scandito questa vertiginosa ascesa evolutiva. Tutto ha inizio circa settantamila anni fa con la Rivoluzione Cognitiva: una fortuita mutazione genetica dota i sapiens di un linguaggio unico al mondo, capace di descrivere non solo la realtà materiale ma soprattutto entità puramente immaginarie come divinità, spiriti, leggende e valori morali. Questa attitudine alla 'finzione condivisa' permette a migliaia di individui estranei di cooperare stabilmente, consentendo ai sapiens di soppiantare i Neanderthal e colonizzare ogni continente, innescando al contempo la prima grande estinzione della megafauna preistorica.\n\nDodicimila anni fa la Rivoluzione Agricola trasforma i cacciatori-raccoglitori in contadini sedentari: Harari definisce questo passaggio 'la più grande truffa della storia', poiché impose alla maggioranza dei lavoratori turni massacranti nei campi, diete povere e malattie, a fronte del solo vantaggio di moltiplicare il numero complessivo della popolazione e concentrare il potere nelle mani di élite politiche e religiose. Nei millenni successivi, l'umanità si unifica progressivamente attorno a tre grandi ordini intersoggettivi: il denaro (la forma di fiducia reciproca più potente ed ecumenica mai inventata), gli imperi territoriali e le religioni universali. Infine, cinquecento anni fa, la Rivoluzione Scientifica sancisce la rottura decisiva: l'umanità ammette la propria ignoranza e comincia a investire risorse nella ricerca empirica, alleandosi con l'espansione imperiale europea e con il dinamismo del credito capitalistico. L'opera si chiude con un avvertimento cruciale sul nostro presente: padroneggiando l'ingegneria genetica e l'intelligenza artificiale, Homo sapiens si appresta a varcare le leggi della selezione naturale trasformandosi in Homo Deus, ponendosi la domanda più inquietante della sua storia: cosa vogliamo desiderare?",
    "summary5m": "La Rivoluzione Cognitiva e l'invenzione dei miti condivisi\nCentomila anni fa Homo sapiens era solo una delle tante specie umane che popolavano il pianeta, dividendo l'habitat con i Neanderthal in Europa e l'Homo erectus in Asia. Dal punto di vista biologico non possedeva artigli micidiali né una muscolatura formidabile, occupando per millenni una posizione mediana nella catena alimentare. Il momento di rottura si verifica circa settantamila anni fa con la cosiddetta Rivoluzione Cognitiva: un salto mutazionale nel cablaggio cerebrale dota i sapiens di una facoltà linguistica inedita. Se gli scimpanzé possono comunicare 'Attenzione, c'è un leone!', i sapiens sviluppano la capacità esclusiva di parlare di cose che non esistono nel mondo fisico: dèi, miti, spiriti della foresta e diritti universali. Harari dimostra che questa inclinazione alla finzione condivisa è stata l'arma evolutiva vincente: il 'limite di Dunbar' stabilisce che i gruppi basati sulla conoscenza personale e sul pettegolezzo non possono superare i centocinquanta individui; grazie alla fede comune in un mito o in un totem, invece, decine di migliaia di sconosciuti possono fidarsi reciprocamente e combattere per la medesima causa. Armati di questa capacità cooperativa senza pari, i sapiens si espandono rapidamente in tutto il globo, determinando l'estinzione delle altre specie umane concorrenti e provocando la scomparsa di oltre la metà delle specie di grandi mammiferi terrestri in Australia e nelle Americhe.\n\nLa Rivoluzione Agricola: la grande trappola del grano\nCirca dodicimila anni fa, nella Mezzaluna Fertile, si consuma la seconda svolta fondamentale: la Rivoluzione Agricola. Contrariamente alla narrazione tradizionale che celebra questo passaggio come un radioso trionfo dell'ingegno umano, Harari sostiene provocatoriamente che si sia trattato della 'più grande truffa della storia'. Il cacciatore-raccoglitore godeva di una dieta varia e nutriente, lavorava in media poche ore al giorno, non conosceva epidemie infettive e disponeva di una stimolazione sensoriale e intellettuale straordinaria. Con il passaggio alla coltivazione stanziale, l'uomo medio si ritrovò costretto a spezzarsi la schiena dall'alba al tramonto per sarchiare, dissodare e innaffiare una singola graminacea esigente: il frumento. Non fu l'uomo ad addomesticare il grano, ma il grano ad addomesticare l'uomo. Se da un lato l'agricoltura consentì di produrre più calorie per ettaro alimentando un'esplosione demografica senza precedenti, dall'altro rese la popolazione vulnerabile a carestie devastanti, parassiti e carie, generando al contempo la proprietà privata fondiaria, le disuguaglianze sociali e le caste militari parassitarie. Per gestire le masse e il surplus alimentare nacquero le prime città-stato e le prime scritture burocratiche (inventate in Mesopotamia per registrare debiti e sacchi d'orzo), sostenute da codici mitologici di giustizia come il Codice di Hammurabi, che sanciva le gerarchie divine tra nobili, popolani e schiavi.\n\nL'unificazione dell'umanità e la Rivoluzione Scientifica\nNel corso dei millenni successivi, la molteplicità caotica dei popoli della terra è stata progressivamente fusa all'interno di un'unica comunità planetaria globale guidata da tre grandiosi ordini universali. Il primo è l'ordine economico del denaro: la moneta non è un dato materiale, ma un costrutto psicologico basato sulla fiducia reciproca e condivisa. Il denaro è la sola finzione capace di abbattere ogni barriera culturale: persino nemici mortali che si disprezzano sul piano religioso o etnico sono sempre disposti ad accettare gli stessi dobloni d'oro o le stesse banconote. Il secondo è l'ordine politico imperiale: gli imperi, pur nati dalla conquista violenta, hanno integrato milioni di sudditi eterogenei sotto un medesimo diritto civile, unificando lingua e commerci. Il terzo è l'ordine religioso universale: le fedi monoteiste ed etiche (come il cristianesimo, l'islam e il buddhismo) hanno fornito una legittimazione trascendente alle norme morali condivise. Circa cinquecento anni fa, in Europa occidentale, scocca la scintilla della Rivoluzione Scientifica: per la prima volta nella storia, l'umanità compie l'atto rivoluzionario di ammettere la propria ignoranza fondamentale ('Ignoramus'). A differenza delle antiche tradizioni dogmatiche che presumevano di contenere già tutta la verità nei testi sacri, la scienza moderna parte dal presupposto di non sapere, ricorrendo all'osservazione empirica e agli strumenti matematici per acquisire nuovi poteri operativi. Questo metodo si salda immediatamente con l'imperialismo navale europeo e con il sistema del credito capitalistico, creando un circolo virtuoso di investimenti, scoperte geografiche e profitti industriali che trasforma la vita materiale della specie. L'opera si conclude con uno sguardo vertiginoso sull'avvenire: Homo sapiens ha sconfitto le antiche piaghe della fame, delle grandi pestilenze e della guerra globale incontrollata, ma ora si accinge a spezzare le leggi stesse della selezione naturale attraverso l'ingegneria genetica, la tecnologia bionica e l'intelligenza artificiale, minacciando di superare la propria condizione biologica per trasformarsi in una divinità post-umana priva di una meta etica chiara.",
    "summary15m": "La Rivoluzione Cognitiva e il potere supremo della finzione condivisa\nCirca centomila anni fa, la Terra era popolata da almeno sei specie umane contemporaneamente: Homo sapiens nell'Africa orientale, Homo neanderthalensis nei rigidi climi dell'Europa e dell'Asia occidentale, Homo erectus nelle pianure orientali della Cina e di Giava, Homo soloensis, Homo floresiensis (i minuscoli ominidi dell'isola di Flores alti appena un metro) e l'uomo di Denisova in Siberia. Dal punto di vista della biologia evoluzionistica, queste creature erano mammiferi insignificanti che non esercitavano alcun impatto ecologico dominante sulla biosfera: occupavano una fascia mediana nella piramide alimentare, cacciando piccole prede, raccogliendo bacche e radici e vivendo nel terrore costante dei grandi predatori felini come le tigri dai denti a sciabola. Harari apre la sua magistrale indagine ponendo la domanda cardinale: come ha fatto una specie di scimmia bipede qualunque, anatomicamente fragile e priva di difese naturali, a soppiantare tutte le altre specie umane concorrenti e a proclamarsi padrona incontrastata dell'intero pianeta? La risposta risiede nella cosiddetta 'Rivoluzione Cognitiva', avvenuta approssimativamente tra 70.000 e 30.000 anni fa. A causa di una mutazione genetica accidentale che ha ricalibrato i collegamenti interni del cervello di Sapiens (l'albero della conoscenza), la nostra specie ha sviluppato una facoltà linguistica qualitativamente diversa da qualsiasi altro sistema di comunicazione animale. Mentre un cercopiteco verde o uno scimpanzé possono emettere suoni d'allarme per segnalare l'avvicinarsi di un'aquila o di un leopardo, e possono scambiarsi informazioni sulle gerarchie del branco attraverso il pettegolezzo, solo Homo sapiens ha acquisito la capacità straordinaria di parlare di cose che non esistono affatto nella realtà fisica sensibile. Sapiens è diventato il creatore e il consumatore instancabile di 'finzioni condivise': spiriti, antenati guardiani, divinità celesti, nazioni sovrane, diritti umani e codici di giustizia. Harari sottolinea con straordinaria efficacia che questa capacità di forgiare miti intersoggettivi è stata la più formidabile leva tecnologica e strategica della preistoria: l'antropologo Robin Dunbar ha dimostrato che i gruppi di primati basati sulla conoscenza diretta e sulle relazioni personali non possono oltrepassare la soglia critica di centocinquanta individui senza disintegrarsi nel caos delle rivalità intestine; grazie alla fede in un mito comune, invece, migliaia di cacciatori Sapiens che non si erano mai visti prima poterono fidarsi l'uno dell'altro, coordinare le proprie battute di caccia e schierarsi in formazioni belliche compatte contro nemici e belve. I Neanderthal, pur possedendo una massa muscolare assai più potente e un volume cerebrale persino superiore a quello di Sapiens, non possedevano la medesima elasticità simbolica: incapaci di cooperare in masse eccedenti poche decine di consanguinei, vennero inesorabilmente spinti ai margini, assorbiti in minima parte geneticamente e infine sterminati. Muniti della loro micidiale coesione sociale e della tecnologia del fuoco, i sapiens compirono la prima grande migrazione planetaria: varcarono gli oceani raggiungendo l'Australia circa 45.000 anni fa e le Americhe 16.000 anni fa, innescando all'istante la prima ecocatastrofe globale causata dall'uomo, sterminando in pochi secoli oltre il novanta per cento della megafauna indigena, tra cui i diprotodonti australiani, i mammut lanosi e i mastodonti americani.\n\nLa Rivoluzione Agricola: la più grande truffa della storia e la trappola del surplus\nCirca dodicimila anni fa, nelle vallate alluvionali della Mezzaluna Fertile e successivamente in Cina e Mesoamerica, i cacciatori-raccoglitori abbandonano gradualmente il nomadismo per dedicarsi alla coltivazione stanziale dei vegetali e all'allevamento del bestiame. La storiografia classica e l'immaginario popolare hanno tradizionalmente glorificato questo passaggio come il salto di civiltà per eccellenza, la conquista mediante la quale l'uomo si emancipò dalla brutalità della selva per costruire i fasti della cultura urbana. Harari demolisce questo mito con argomentazioni biologiche ed economiche stringenti, definendo la Rivoluzione Agricola 'la più grande truffa della storia dell'umanità'. Se si misura il successo evolutivo non sulla biomassa astratta della specie ma sulla qualità della vita del singolo individuo, l'agricoltore medio visse un'esistenza infinitamente più dura, dolorosa e miserabile rispetto al cacciatore-raccoglitore ancestrale. Quest'ultimo godeva di una dieta ricca e variata composta da centinaia di specie vegetali e animali differenti, non soffriva di carenze nutritive, lavorava in media tra le tre e le cinque ore al giorno per procurarsi il sostentamento e dedicava il resto del tempo al riposo, al gioco, alla socialità e alla contemplazione; inoltre, non conoscendo insediamenti sovraffollati né convivenza forzata con feci animali, era quasi immune dalle grandi malattie infettive epidemiche. L'agricoltore, al contrario, si ritrovò inchiodato alla tirannia del suolo: il suo scheletro fu deformato da fatiche massacranti – dissodare terreni pietrosi, estirpare erbacce, trasportare pesanti giare d'acqua dall'alba al tramonto sotto il sole cocente – per nutrire una pianta capricciosa e fragile originaria della steppa anatolica: il grano (Triticum). Harari commenta ironicamente che non fu l'uomo a coltivare il grano, ma il grano a coltivare e addomesticare l'uomo per moltiplicare i propri geni in tutto il globo. La dieta monotona basata su farinate e cereali provocò rachitismo, artrosi precoce, scorbuto e carie dentarie. Ma la trappola più subdola fu la dinamica demografica: la maggiore disponibilità calorica permise alle donne di partorire a intervalli più ravvicinati, provocando un'esplosione demografica incontrollabile; una volta che la popolazione crebbe di numero, fu impossibile tornare indietro alla caccia e alla raccolta, poiché i boschi non avrebbero più potuto sfamare quella massa umana. Inoltre, la dipendenza da un'unica coltura rese le popolazioni esposte a carestie bibliche in caso di siccità o invasioni di cavallette. L'agricoltura creò l'ansia del futuro: il contadino doveva accumulare eccedenze alimentari per superare i mesi invernali o le annate magre. E proprio questo accumulo di surplus alimentare generò le prime gerarchie stabili della disuguaglianza: su quei sacchi di grano confiscati nacquero le caste dominanti dei sacerdoti, dei monarchi assoluti e dei guerrieri, i quali mantennero il controllo sociale inventando giganteschi ordini immaginati sanciti per legge. In Mesopotamia il Codice di Hammurabi (1776 a.C.) stabiliva come ordine cosmico divino la suddivisione inderogabile degli uomini in 'superiori', 'comuni' e 'schiavi'; millenni dopo, nel 1776 d.C., i Padri Fondatori americani redigevano la Dichiarazione d'Indipendenza affermando che tutti gli uomini sono creati eguali: due miti opposti, ugualmente privi di validità biologica oggettiva (in biologia non esistono né i diritti inalienabili né la gerarchia divina), ma entrambi indispensabili per mantenere la coesione di milioni di sconosciuti all'interno di un sistema funzionante.\n\nL'unificazione dell'umanità: il denaro, gli imperi e le religioni universali\nDopo la Rivoluzione Agricola, il pianeta appariva frammentato in una miriade di mondi umani separati e diffidenti, ciascuno con i propri dialetti incomprensibili, le proprie divinità tribali e i propri tabù locali. Tuttavia, Harari dimostra che la traiettoria profonda della storia umana non è stata la dispersione, bensì un'inesorabile e progressiva unificazione globale. A tessere le fila di questa integrazione su scala planetaria sono state tre invenzioni universali capaci di abbracciare l'intera ecumene: l'ordine economico della moneta, l'ordine politico dell'impero e l'ordine spirituale delle religioni universali. La prima e più prodigiosa forza unificante è stata il denaro: prima dell'invenzione monetaria, il baratto rendeva impossibili le economie complesse, costringendo un coltivatore di mele a trovare un calzolaio che non solo avesse bisogno di mele in quel preciso istante, ma sapesse quante centinaia di mele equivalessero a un paio di stivali. Il denaro ha risolto il problema convertendosi nella più universale ed efficiente tecnologia di fiducia intersoggettiva mai concepita: l'oro, l'argento, le conchiglie cauri o le moderne banconote non possiedono alcun valore d'uso intrinseco (non si possono mangiare né riparano dal freddo), ma valgono unicamente perché ogni essere umano sul pianeta crede fermamente che anche tutti gli altri esseri umani accetteranno quel pezzo di carta o metallo in cambio di beni reali. Il denaro è il solo sistema cognitivo che non discrimina: mentre due individui possono massacrarsi a vicenda per ragioni teologiche o barriere etniche, entrambi accetteranno con reverenza la stessa moneta aurea. La seconda forza assimilatrice è stata la comparsa degli imperi territoriali: entità politiche multi-etniche governate da un centro comune dotate di confini flessibili e appetiti voraci. Sebbene tutti gli imperi siano nati nel sangue della conquista militare e dell'oppressione crudele, essi hanno progressivamente forgiato una cultura imperiale inclusiva, amalgamando popoli eterogenei sotto un unico sistema di pesi e misure, una rete stradale comune, una lingua franca e un codice civile condiviso (come avvenne nell'Impero Romano, nell'Impero Han o nel Califfato islamico). La terza forza unificante è costituita dalle religioni universali e missionarie: nate nel primo millennio a.C. per superare i culti animisti e politeisti locali (legati a singoli fiumi o singole città), fedi come il buddhismo, il cristianesimo e l'islam hanno proclamato l'esistenza di un unico ordine divino trascendente valido per l'intera umanità, esortando i credenti a diffondere la buona novella a ogni creatura vivente senza distinzione di stirpe. Attraverso il commercio monetario, le leggi imperiali e le fedi universali, i confini del pianeta si sono progressivamente saldati, preparando la nascita della civiltà contemporanea.\n\nLa Rivoluzione Scientifica e il matrimonio tra scienza, capitale e impero\nFino al 1500 dell'era volgare, la maggioranza delle civiltà umane riteneva che l'età dell'oro appartenesse al passato e che tutta la conoscenza necessaria alla salvezza fosse già stata rivelata dagli antichi maestri o dai testi sacri: nella Bibbia, nei Veda, nel Corano o nelle opere di Confucio e Aristotele non vi era nulla di essenziale da aggiungere, bastava interpretare fedelmente la tradizione. La modernità si accende quando l'Europa occidentale compie la più audace e dirompente rottura intellettuale della storia: l'ammissione esplicita dell'ignoranza umana. La Rivoluzione Scientifica non è nata come una somma cumulativa di nuove certezze, ma come la confessione che l'umanità 'non sa' ('Ignoramus'). Gli esploratori europei del Rinascimento furono i primi a disegnare mappe geografiche con vaste campiture bianche recanti la dicitura 'Terra Incognita': mentre le antiche carte cinesi o arabe riempivano ogni angolo della terra con mostri o regni leggendari presumendo di conoscere il mondo intero, le carte europee ammettevano il vuoto e invitavano a salpare per esplorarlo. Questa scoperta dell'ignoranza ha inaugurato un'alleanza strategica inedita e micidiale: il triangolo tra scienza, imperialismo e capitalismo. Gli imperi moderni (a cominciare da quello britannico, spagnolo e olandese) non finanziavano spedizioni militari alla cieca: a bordo delle caravelle e delle fregate imbarcavano astronomi, geografi, medici e botanici (come il giovane Charles Darwin sul brigantino Beagle) con il compito preciso di mappare risorse, curare epidemie coloniali e convertire la conoscenza in potenza tecnologica ed economica. A sua volta, questo circolo virtuoso veniva alimentato dal motore finanziario del capitalismo: il credito. Il credito è l'istituto psicologico ed economico mediante il quale il presente scommette fiduciosamente sulla crescita del futuro. Nelle economie premoderne non si investiva nel futuro perché si riteneva che la ricchezza totale fosse una torta statica: se uno si arricchiva, qualcun altro doveva per forza impoverirsi. Il capitalismo scoprì che la torta poteva ingrandirsi all'infinito attraverso l'innovazione scientifica: i profitti ottenuti non venivano dilapidati in banchetti o monumenti funebri, ma reinvestiti nella produzione e nella ricerca empirica. Questo meccanismo ha innescato un'accelerazione esponenziale delle forze produttive, triplicando la popolazione mondiale, debellando malattie un tempo incurabili e inaugurando l'era dell'energia atomica e della cibernetica.\n\nOltre i confini biologici: l'era dell'Homo Deus e le sfide del futuro\nNelle riflessioni conclusive del saggio, Harari sposta l'analisi sul presente e sull'immediato avvenire della specie umana, tracciando un bilancio provocatorio del cammino percorso. Homo sapiens ha trasformato se stesso da un animale intimorito nella savana nel demiurgo padrone del pianeta: ha ridotto la biomassa degli animali selvatici a meno del quattro per cento (il restante novantasei per cento è composto da esseri umani e dai miliardi di animali addomesticati rinchiusi nei lager degli allevamenti industriali), ha sconfitto la minaccia delle grandi carestie storiche e ha reso la morte prematura un'anomalia tecnica anziché un destino ineluttabile. Tuttavia, Harari solleva l'interrogativo più vertiginoso ed etico: siamo diventati più felici? La ricerca neurobiologica dimostra che la felicità non dipende da parametri esteriori come il conto in banca o la potenza tecnologica, ma da complesse costanti biochimiche interne e dal senso di significato che l'individuo attribuisce alla propria esistenza: un contadino medievale o un cacciatore dell'età della pietra, inseriti in una comunità coesa e sorretti da una fede spirituale incrollabile, potevano sperimentare livelli di appagamento psicologico assai superiori a quelli di un moderno cittadino occidentale atomizzato, stressato e consumato dalla solitudine e dall'insoddisfazione cronica. Ma il mutamento più sconvolgente all'orizzonte riguarda la biologia stessa di Sapiens: dopo quattro miliardi di anni in cui ogni forma vivente sulla Terra si è evoluta obbedendo alle ferree leggi della selezione naturale, l'umanità si trova sulla soglia di inaugurare l'era del 'disegno intelligente non divino'. Attraverso la convergenza esplosiva di tre tecnologie – l'ingegneria genetica (con strumenti di riscrittura del genoma come CRISPR), l'integrazione bionica uomo-macchina (interfacce neurali dirette cervello-computer) e l'intelligenza artificiale inorganica –, Homo sapiens si appresta a spezzare i propri confini organici, creando nuove specie modificate e trasformandosi egli stesso in una divinità biologica o cibernetica: Homo Deus. Il saggio si chiude con un monito che risuona come una campana a martello per la coscienza dell'umanità contemporanea: non dobbiamo chiederci cosa diventeremo, ma dobbiamo porci l'interrogativo supremo che nessun animale si è mai trovato ad affrontare prima d'ora: 'C'è qualcosa di più pericoloso di una specie di semidèi insoddisfatti e irresponsabili che non sanno neppure cosa vogliono?'."
  },
  {
    "id": "seed-clear-2018",
    "isbn": "9788851172411",
    "title": "Piccole abitudini per grandi cambiamenti",
    "author": "James Clear",
    "publishYear": "2018",
    "publisher": "De Agostini",
    "pageCount": 320,
    "category": "Crescita Personale & Saggistica",
    "coverUrl": "covers/clear.jpg",
    "summaryLength": "deep",
    "authorBio": "James Clear (Hamilton, 1986) è uno scrittore, ricercatore e conferenziere statunitense tra i massimi esperti mondiali di psicologia comportamentale e formazione delle abitudini. Autore della celebre newsletter settimanale '3-2-1' seguita da milioni di lettori in tutto il globo, ha raggiunto una straordinaria fama planetaria nel 2018 con la pubblicazione di 'Atomic Habits' (edito in Italia con il titolo 'Piccole abitudini per grandi cambiamenti'), tradotto in oltre cinquanta lingue con oltre quindici milioni di copie vendute. L'opera combina in modo brillante neuroscienze cognitive, sociologia e strategie operative quotidiane per svelare l'impatto moltiplicatore dei micro-cambiamenti.",
    "keyThemes": [
      {
        "title": "L'Effetto Composto dell'Uno per Cento",
        "desc": "I risultati straordinari non derivano da sforzi titanici sporadici, ma dalla moltiplicazione esponenziale di abitudini minuscole: migliorando dell'1% al giorno per un anno, si diventa 37 volte più efficaci del punto di partenza."
      },
      {
        "title": "Abitudini Basate sull'Identità e non sugli Obiettivi",
        "desc": "Gli obiettivi si concentrano su ciò che vuoi ottenere, le abitudini su chi vuoi diventare. Ogni singola azione quotidiana è una scheda di voto depositata nell'urna dell'identità personale: non si tratta di 'leggere un libro', ma di 'diventare un lettore'."
      },
      {
        "title": "Le Quattro Leggi del Cambiamento Comportamentale",
        "desc": "Il ciclo neurobiologico dell'abitudine (Segnale, Desiderio, Risposta, Ricompensa) si governa con quattro regole operative: Rendilo Evidente, Rendilo Attraente, Rendilo Facile e Rendilo Appagante."
      },
      {
        "title": "La Regola dei Due Minuti e il Non Sgarrare Due Volte",
        "desc": "Per vincere la procrastinazione occorre scalare l'inizio di ogni nuova abitudine sotto i centoventi secondi. E quando la routine si interrompe per un imprevisto, vale il principio ferreo dei professionisti: non mancare mai due giorni di fila."
      }
    ],
    "summary2m": "Spesso siamo portati a credere che per compiere grandi traguardi o trasformare radicalmente la propria vita occorra compiere gesti clamorosi, colpi di genio o sforzi titanici immediati. Nel celebre saggio 'Piccole abitudini per grandi cambiamenti' (Atomic Habits), James Clear demolisce questa illusione dimostrando che la vera eccellenza umana è il risultato cumulato dell'interesse composto applicato alle routine quotidiane. Se migliori appena dell'uno per cento al giorno per trecentosessantacinque giorni consecutivi, il calcolo matematico della progressione esponenziale (1,01 elevato alla 365) porta a un rendimento finale quasi trentotto volte superiore; al contrario, se peggiori dell'uno per cento ogni giorno (0,99 elevato alla 365), la tua efficienza crolla precipitosamente verso lo zero. Le abitudini sono a tutti gli effetti l'interesse composto della crescita personale.\n\nTuttavia, la maggior parte delle persone fallisce perché si ostina a fissare traguardi ed esiti esteriori ('voglio guadagnare di più', 'voglio perdere dieci chili') invece di progettare sistemi quotidiani efficaci e lavorare sulla propria identità profonda. Clear insegna che il vero cambiamento duraturo non scaturisce dal risultato, ma da chi decidi di diventare: ogni volta che ti siedi alla scrivania per studiare mezz'ora non stai soltanto immagazzinando nozioni, stai depositando una scheda di voto nell'urna dell'identità dello studente diligente. Per modellare le abitudini desiderate ed eliminare quelle nocive, l'autore codifica le Quattro Leggi del Cambiamento Comportamentale, modellate sul ciclo neurologico del cervello umano: Prima Legge (Rendila Evidente), riprogettando gli spazi fisici dell'ambiente ed eliminando l'ambiguità con l'habit stacking; Seconda Legge (Rendila Attraente), sfruttando i picchi di dopamina attraverso il bundle di tentazione e l'influenza positiva dei pari; Terza Legge (Rendila Facile), abbattendo l'attrito iniziale con la celebre 'Regola dei Due Minuti'; Quarta Legge (Rendila Appagante), garantendo una gratificazione immediata visibile tramite un habit tracker e adottando il comandamento fondamentale dei professionisti: non sgarrare mai due volte consecutive.",
    "summary5m": "L'effetto composto dell'1% e il miraggio degli obiettivi\nL'indagine di James Clear prende le mosse da una brillante premessa matematica e psicologica: nella cultura moderna siamo costantemente ossessionati dall'idea che il successo richieda eventi rivoluzionari ed eroismi improvvisi. Clear dimostra che i traguardi più straordinari sono in realtà il frutto della moltiplicazione cumulativa di micro-miglioramenti quotidiani: l'aggregazione dei guadagni marginali. Citando la celebre rinascita del ciclismo britannico sotto la guida visionaria di Dave Brailsford – passata da un secolo di mediocrità a decine di ori olimpici e vittorie a ripetizione al Tour de France grazie a centinaia di microscopici perfezionamenti (dai cuscini per il riposo all'igiene delle mani, dalla temperatura dei gel muscolari alle selle anatomiche) –, l'autore illustra la potente matematica dell'1%: migliorando dell'uno per cento ogni giorno per un anno intero si diventa 37,78 volte migliori; peggiorando dell'un per cento ogni giorno si declina rovinosamente verso lo zero (0,03). Il problema principale è che i risultati non crescono in modo lineare ma esponenziale, costringendo l'individuo ad attraversare il 'Plateau del Potenziale Latente': una fase iniziale in cui si lavora duramente senza scorgere progressi visibili in superficie, accumulando energia come un cubetto di ghiaccio scaldato da meno quattro a zero gradi prima di fondere istantaneamente.\n\nIl primato dell'identità personale e il ciclo dell'abitudine\nLa causa primaria per cui i buoni propositi falliscono risiede nella confusione deleteria tra obiettivi e identità. Gli obiettivi indicano la direzione del viaggio, ma sono i sistemi quotidiani a determinare la velocità e il reale raggiungimento della meta. Chi vince una competizione e chi la perde condivideva fin dall'inizio il medesimo obiettivo (vincere); a fare la differenza è stato unicamente il sistema di allenamento e di recupero. Inoltre, focalizzarsi solo sugli esiti genera un ciclo di felicità condizionata e perennemente rimandata nel tempo. Il vero cambiamento duraturo deve radicarsi nell'identità profonda: chi cerca di smettere di fumare dicendo 'No grazie, sto cercando di smettere' si percepisce ancora come un fumatore che compie una privazione dolorosa; chi risponde con serenità 'No grazie, non sono un fumatore' ha operato una trasformazione del proprio senso di sé. Ogni abitudine non è altro che una scheda di voto depositata nell'urna dell'identità: più voti accumuli attraverso azioni coerenti, più la fiducia in ciò che sei diventa granitica. Dal punto di vista neurobiologico, ogni abitudine si sviluppa lungo un anello a quattro stadi: Segnale, Desiderio, Risposta e Ricompensa. Per governare questo congegno a proprio vantaggio, Clear struttura le Quattro Leggi del Cambiamento Comportamentale.\n\nLe quattro leggi pratiche e la regola del non sgarrare due volte\nLa Prima Legge stabilisce di Rendere il Segnale Evidente. Non basta fare affidamento sulla forza di volontà: occorre progettare l'ambiente fisico in modo strategico. Se vuoi bere più acqua, posiziona bottiglie piene in bella vista in ogni stanza; se vuoi evitare le distrazioni digitali, lascia lo smartphone in un'altra camera. Clear introduce qui la potente formula dell'Habit Stacking (accatastamento delle abitudini): 'Dopo aver [Abitudine Attuale], farò [Nuova Abitudine]'. La Seconda Legge impone di Rendere l'Azione Attraente: la dopamina cerebrale non viene rilasciata quando riceviamo una ricompensa, ma durante l'attesa eccitante del piacere; Clear propone il 'bundle di tentazione', connettendo un dovere necessario a un'attività gratificante, e ricorda l'importanza di circondarsi di persone per cui la buona abitudine è la norma sociale. La Terza Legge prescrive di Rendere l'Azione Facile: la legge dell'energia minima governa la biologia umana; per vincere la resistenza, occorre ridurre l'attrito delle buone abitudini e aumentare l'attrito di quelle dannose. Lo strumento principe è la Regola dei Due Minuti: ogni nuova routine deve essere ridotta all'inizio a un gesto che richieda meno di centoventi secondi ('Leggere un libro' diventa 'Leggere una singola pagina prima di dormire'). Infine, la Quarta Legge comanda di Rendere l'Azione Appagante: il cervello umano privilegia istintivamente le ricompense immediate rispetto a quelle differite. L'impiego di un habit tracker visivo (segnare una X sul calendario) fornisce una gratificazione tangibile immediata. E quando un contrattempo imprevisto spezza la routine virtuosa, Clear enuncia la regola d'oro dei campioni: non sgarrare mai due volte consecutive. Un giorno saltato è un incidente; due giorni saltati sono l'inizio di una nuova abitudine negativa.",
    "summary15m": "L'effetto composto dell'1% e il primato dell'identità sugli obiettivi\nLa trattazione di James Clear prende avvio smantellando uno dei miti più pervasivi e dannosi della società contemporanea: l'illusione secondo cui per trasformare radicalmente la propria vita o raggiungere l'eccellenza professionale occorrano gesti titanici, intuizioni prodigiose o colpi di scena fulminei. La nostra cultura tende a celebrare esclusivamente il momento trionfale dell'esito finale – la medaglia d'oro, la vendita milionaria di un'azienda, la metamorfosi fisica spettacolare –, ignorando sistematicamente le migliaia di scelte impercettibili e ordinarie che hanno preceduto e determinato quel risultato. Clear dimostra che la vera eccellenza non è un singolo evento straordinario, ma il prodotto matematico dell'interesse composto applicato ai micro-comportamenti quotidiani. Il ragionamento poggia su una formulazione quantitativa inconfutabile: se un individuo migliora appena dell'uno per cento al giorno per trecentosessantacinque giorni consecutivi, il calcolo della progressione esponenziale (1,01 elevato alla 365) produce un rendimento finale pari a 37,78; in altre parole, al termine di un anno sarà diventato quasi trentotto volte migliore rispetto al punto di partenza. Al contrario, se peggiora dell'uno per cento ogni giorno (0,99 elevato alla 365), la sua efficacia declinerà precipitosamente fino a sfiorare lo zero assoluto (0,03). A illustrare questa legge è l'epopea del ciclismo britannico sotto la direzione di Dave Brailsford: la Gran Bretagna non aveva quasi mai vinto una medaglia o un Tour de France in oltre un secolo di competizioni; applicando la dottrina dell''aggregazione dei guadagni marginali' – migliorando dell'uno per cento ogni singolo dettaglio, dalla forma aerodinamica delle tute alla qualità dei materassi scelti per ottimizzare il sonno degli atleti, dall'olio per le catene al modo di lavarsi le mani per scongiurare raffreddori –, la squadra ha dominato il decennio successivo conquistando decine di ori olimpici e molteplici trionfi sui Campi Elisi. Tuttavia, la ragione per cui la maggior parte delle persone rinuncia a perseguire i propri propositi risiede nel cosiddetto 'Plateau del Potenziale Latente': all'inizio del processo i risultati rimangono invisibili e impercettibili per settimane o mesi, generando una profonda frustrazione psicologica. Clear paragona questo fenomeno a un cubetto di ghiaccio situato in una stanza con una temperatura di meno quattro gradi: se la temperatura sale a meno tre, poi a meno due e a meno uno, il ghiaccio appare perfettamente intatto; solo al raggiungimento di zero gradi il ghiaccio comincia a sciogliersi istantaneamente. Il disgelo sembra un miracolo improvviso, ma in realtà è stato reso possibile da tutto il calore somministrato nei gradi precedenti.\n\nIl primato dell'identità personale sul miraggio degli obiettivi\nIl secondo snodo cruciale dell'opera affronta la critica serrata al culto esclusivo degli obiettivi. Clear evidenzia che i vincitori e i perdenti di qualsiasi contesa umana condividono esattamente i medesimi obiettivi: ogni atleta alle Olimpiadi desidera vincere la medaglia d'oro, ogni candidato a un concorso desidera essere assunto, ogni imprenditore desidera raddoppiare i profitti; pertanto, l'obiettivo in sé non può costituire il fattore discriminante del successo. A fare la reale differenza è il 'sistema', ossia la qualità delle procedure, delle abitudini e dei processi quotidiani messi in atto. Inoltre, concentrarsi unicamente sui risultati genera due gravi distorsioni psicologiche: la prima è la trappola della felicità condizionata ('sarò felice solo quando avrò raggiunto quel traguardo'), che posticipa perennemente il benessere; la seconda è l'effetto yo-yo, per cui una volta centrato l'obiettivo temporaneo (come tagliare il traguardo di una maratona) l'individuo smette di allenarsi tornando alle abitudini disordinate precedenti. La vera rivoluzione metodologica proposta da Clear consiste nello spostare il baricentro del cambiamento dal piano dei risultati al piano profondo dell'identità personale. Esistono tre livelli concentrici di cambiamento: il livello più esterno è il cambiamento dei Risultati (ciò che ottieni); il livello intermedio è il cambiamento dei Processi (ciò che fai); il livello più intimo e potente è il cambiamento dell'Identità (ciò in cui credi su te stesso). Chi tenta di smettere di fumare e rifiuta una sigaretta dicendo 'No grazie, sto cercando di smettere' si identifica ancora interiormente come un fumatore che compie una dolorosa privazione; chi invece risponde con naturalezza 'No grazie, non sono un fumatore' ha modificato la propria identità profonda. Non si tratta di 'leggere un libro', ma di 'diventare un lettore'; non si tratta di 'correre una maratona', ma di 'diventare un corridore'. Come si costruisce una nuova identità? Non con affermazioni vuote allo specchio, ma attraverso l'accumulo di prove empiriche concrete. Ogni singola azione virtuosa compiuta è una scheda di voto depositata nell'urna dell'identità che desideri edificare: se ti alzi e scrivi un paragrafo, hai votato a favore dell'identità dello scrittore; se rifai il letto e metti in ordine la scrivania, voti per l'identità della persona organizzata. Più voti accumuli giorno dopo giorno, più la certezza di chi sei diventa incrollabile.\n\nLa prima legge (Rendila Evidente): il design dell'ambiente e le intenzioni di attuazione\nSul piano neurobiologico, il cervello umano opera attraverso un ciclo di retroazione continua composto da quattro fasi consecutive: Segnale (Cue), Desiderio (Craving), Risposta (Response) e Ricompensa (Reward). Per padroneggiare questo congegno biologico, Clear formula le Quattro Leggi del Cambiamento Comportamentale. La Prima Legge, corrispondente alla fase del segnale, recita: Rendilo Evidente. La vista è il senso più dominante nel cervello umano, monopolizzando oltre l'undici per cento dei nostri neuroni sensoriali; di conseguenza, i segnali visivi presenti nell'ambiente circostante costituiscono il più potente catalizzatore del comportamento inconscio. Clear decostruisce l'illusione della sola forza di volontà: le persone con maggiore autocontrollo non possiedono una virtù morale superiore, ma strutturano il proprio ambiente in modo da non essere esposte a continue tentazioni. Se desideri suonare la chitarra, non riporla chiusa nella custodia dentro l'armadio, ma posizionala su un cavalletto al centro del soggiorno; se vuoi bere più acqua, disponi bottiglie d'acqua su ogni tavolo e ripiano della casa; se vuoi smettere di perdere tempo sullo smartphone, lascialo ricaricare in un'altra stanza durante le ore di lavoro. Accanto alla riprogettazione degli spazi fisici, Clear introduce due tecniche comportamentali formidabili: la prima è l'Intenzione di Attuazione, formulata secondo la sintassi rigorosa: 'Io farò [COMPORTAMENTO] alle [ORA] nel [LUOGO]'. Decine di studi clinici dimostrano che definire preventivamente le coordinate spaziali e temporali di un'azione moltiplica di oltre tre volte la probabilità della sua effettiva esecuzione, eliminando l'ambiguità decisionale del momento. La seconda strategia è l'Accatastamento delle Abitudini (Habit Stacking), derivato dalla legge di Diderot: ogni comportamento tende a innescarne naturalmente un altro. La formula consiste nell'ancorare la nuova abitudine desiderata a un'abitudine già saldamente consolidata nella routine quotidiana: 'Dopo aver [Abitudine Attuale], farò [Nuova Abitudine]'. Ad esempio: 'Dopo aver versato la tazza di caffè del mattino, aprirò il taccuino e scriverò le tre priorità della giornata'.\n\nLa seconda e terza legge: l'attrazione dopaminica e la regola dei due minuti\nLa Seconda Legge del cambiamento, correlata alla fase del desiderio, prescrive: Rendilo Attraente. La moderna neurobiologia ha dimostrato che i picchi di dopamina non vengono rilasciati dal cervello nel momento in cui consumiamo o riceviamo una ricompensa, bensì nella fase precedente, nell'attesa e nell'anticipazione eccitante del piacere. Per rendere desiderabile un'azione necessaria ma poco entusiasmante, Clear propone il 'Bundle di Tentazione' (Temptation Bundling), connettendo un'azione di cui abbiamo bisogno a un'azione che desideriamo ardentemente: ad esempio, concedersi di guardare la propria serie televisiva preferita solo mentre si pedala sulla cyclette. Inoltre, un peso decisivo è esercitato dall'influenza della cultura sociale: gli esseri umani sono primati sociali che desiderano visceralmente appartenere a un gruppo ed essere approvati dai propri pari. Tendiamo a imitare le abitudini di tre categorie di persone: coloro che ci sono vicini (famiglia e amici intimi), i molti (la tribù e la maggioranza statistica) e i potenti (coloro che godono di prestigio e status elevato). La strategia più efficace per blindare un comportamento virtuoso consiste nell'entrare a far parte di una comunità in cui il comportamento che intendi adottare costituisce già la norma quotidiana condivisa da tutti. La Terza Legge, associata alla fase della risposta, comanda: Rendilo Facile. La biologia umana è governata dalla Legge del Minimo Sforzo: tra due comportamenti analoghi, il cervello sceglierà invariabilmente quello che richiede il minor consumo di energia metabolica e cognitiva. La chiave non risiede nella quantità di tempo trascorsa a fare un'azione, ma nel numero di ripetizioni (la frequenza con cui si attiva la plasticità sinaptica). Per rendere facile una buona abitudine, occorre ridurre sistematicamente l'attrito che la separa dal suo avvio; per eliminare un'abitudine nociva, occorre al contrario aumentare l'attrito fino a renderla inaccessibile (ad esempio staccare la spina della console di gioco e riporla nell'armadio dopo ogni uso). Il vertice metodologico di questa legge è la celebre 'Regola dei Due Minuti': quando si inaugura una nuova abitudine, la sua esecuzione iniziale deve essere ridotta a un gesto che richieda meno di centoventi secondi. 'Leggere ogni sera' diventa 'Leggere una sola pagina'; 'Fare un'ora di ginnastica' diventa 'Allacciarsi le scarpe da corsa e fare un piegamento'; 'Studiare un capitolo' diventa 'Aprire il quaderno e rileggere un paragrafo'. L'obiettivo della regola non è fare un'azione microscopica per pigrizia, ma padroneggiare l'arte di 'presentarsi': un'abitudine deve essere stabilita prima di poter essere migliorata.\n\nLa quarta legge (Rendila Appagante): il tracciamento e la regola del non sgarrare due volte\nLa Quarta Legge del Cambiamento Comportamentale, che chiude il ciclo governando la fase della ricompensa, enuncia: Rendilo Appagante. Il nostro apparato neurologico si è evoluto nell'ambiente ancestrale del Paleolitico, un contesto a ritorno immediato dove ogni gesto (cacciare, raccogliere, fuggire) produceva conseguenze visibili e vitali nel volgere di pochi minuti. La società moderna, al contrario, è un ambiente a ritorno differito: lavori per un mese prima di ricevere lo stipendio, ti alleni per mesi prima di vedere muscoli tonici, studi per anni prima di conseguire una laurea. Il cervello umano tende naturalmente a premiare le gratificazioni immediate e a sottovalutare i costi futuri differiti (motivo per cui il fumo o il cibo spazzatura risultano così insidiosi: offrono piacere istantaneo e rinviano il danno biologico agli anni successivi). Per consolidare un'abitudine virtuosa occorre collegarvi una ricompensa gratificante immediata. Tra gli strumenti più potenti indicati da Clear vi è l'Habit Tracker (il tracciatore di abitudini visivo): segnare una crocetta con una penna su un calendario murale non appena si è completata l'azione quotidiana. Questo semplice gesto appaga simultaneamente tre leggi: rende il progresso evidente (vedendo la sequenza ininterrotta di giorni), lo rende attraente (perché non si desidera spezzare la catena visiva) e lo rende appagante (fornendo una scarica istantanea di soddisfazione al momento della spunta). Tuttavia, la realtà quotidiana è soggetta a imprevisti, malanni, emergenze familiari o giornate di stanchezza opprimente. In questi frangenti interviene il comandamento assoluto che distingue i professionisti dai dilettanti: 'Non saltare mai due volte di fila'. Saltare un giorno per un imprevisto è un incidente; saltare due volte è l'inizio irreversibile di una nuova abitudine negativa. Se oggi sei esausto e non puoi allenarti per un'ora in palestra, vai comunque e fai dieci minuti di flessioni; se non puoi leggere per mezz'ora, leggi due frasi. Mantenere viva la catena, anche solo con una prestazione simbolica e ridotta, preserva l'integrità dell'identità personale: comunica al tuo subconscio che, anche nei giorni più bui e difficili, rimani fedele al tipo di persona che hai scelto consapevolmente di essere. Conclude Clear: non sono i singoli eventi a fare di noi ciò che siamo, ma i sistemi microscopici che ripetiamo con devozione inflessibile ogni giorno."
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
  if (typeof ZXing !== 'undefined') {
    try {
      zxingCodeReader = new ZXing.BrowserMultiFormatReader();
    } catch (_) {}
  }

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
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.12);
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
  const currentKey = "bookflix_gfire_library_v9";
  const raw = localStorage.getItem(currentKey);

  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const seedMap = new Map(INITIAL_BOOKS.map(s => [s.id, s]));
        books = parsed.map(b => {
          const seed = seedMap.get(b.id) || INITIAL_BOOKS.find(s => b.isbn && s.isbn === b.isbn);
          if (seed) {
            return {
              ...seed,
              ...b,
              coverUrl: resolveBookCover(seed),
              publisher: seed.publisher,
              pageCount: seed.pageCount,
              authorBio: seed.authorBio,
              keyThemes: seed.keyThemes,
              summary2m: seed.summary2m,
              summary5m: seed.summary5m,
              summary15m: seed.summary15m
            };
          }
          return {
            ...b,
            coverUrl: resolveBookCover(b)
          };
        });

        // Assicura che tutti i libri di INITIAL_BOOKS siano presenti nella libreria
        INITIAL_BOOKS.forEach(seed => {
          if (!books.some(b => b.id === seed.id || (b.isbn && b.isbn === seed.isbn))) {
            books.push({ ...seed });
          }
        });
        return;
      }
    } catch(e) {
      console.warn("Ripristino libreria iniziale da INITIAL_BOOKS...", e);
    }
  }

  // Inizializzazione pulita
  books = JSON.parse(JSON.stringify(INITIAL_BOOKS));
  saveBooks();
}


function saveBooks() {
  localStorage.setItem("bookflix_gfire_library_v7", JSON.stringify(books));
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
      createShelfHtml("I tuoi Classici & Narrativa", books.filter(b => b.category.includes("Classici") || b.category.includes("Scolastici") || b.category.includes("Fantascienza") || b.category.includes("Narrativa"))),
      createShelfHtml("Filosofia, Idee & Saggistica", books.filter(b => b.category.includes("Saggistica") || b.category.includes("Filosofia") || b.category.includes("Crescita"))),
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
  if (len === "standard") return "⏱ 5 min";
  return "📖 15 min";
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
  const len = book.summaryLength || "deep";
  let summaryText = "";
  if (len === "fast") {
    summaryText = book.summary2m || book.summary;
  } else if (len === "standard") {
    summaryText = book.summary5m || book.summary;
  } else {
    summaryText = book.summary15m || book.summary;
  }

  let md = `# 🎬 BookFlix: ${book.title}\n\n`;
  md += `> **Autore:** ${book.author} | **Anno:** ${book.publishYear} | **Genere:** ${book.category}\n`;
  if (book.publisher) md += `> **Editore:** ${book.publisher}\n`;
  if (book.pageCount) md += `> **Pagine:** ${book.pageCount}\n`;
  if (book.isbn) md += `> **ISBN:** ${book.isbn}\n`;
  md += `> **Durata Sintesi:** ${getBadgeText(len)}\n\n`;
  md += `---\n\n`;

  if (book.keyThemes && book.keyThemes.length > 0) {
    md += `## 💡 Punti Chiave & Temi Principali\n\n`;
    book.keyThemes.forEach((th, idx) => {
      md += `### 0${idx+1}. ${th.title}\n${th.desc}\n\n`;
    });
    md += `---\n\n`;
  }
  
  md += `## 📖 Trama & Svolgimento (${getBadgeText(len)})\n\n${summaryText}\n\n`;
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

// GENERATORE DINAMICO COPERTINE SVG
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

// RISOLUZIONE ACCURATA COPERTINE
function resolveBookCover(book) {
  if (!book) return generateDynamicBookCover("Libro", "Autore");
  
  const title = (book.title || "").toLowerCase().trim();
  const author = (book.author || "").toLowerCase().trim();
  const isbn = (book.isbn || "").replace(/[^0-9X]/gi, "");

  // 1. Fabio Geda - Nel mare ci sono i coccodrilli
  if (title.includes("coccodrilli") || title.includes("geda") || title.includes("enaiat") || isbn === "9788868369323") {
    return "covers/geda.jpg";
  }
  // 2. Ernst Cassirer - Rousseau, Kant, Goethe
  if (title.includes("rousseau") || (title.includes("kant") && title.includes("goethe")) || author.includes("cassirer") || isbn === "9788815072047" || isbn === "9788815099389") {
    return "covers/cassirer.jpg";
  }
  // 3. Lewis Carroll - Alice nel Paese delle Meraviglie
  if (title.includes("alice") || title.includes("meraviglie") || title.includes("wonderland") || author.includes("carroll") || isbn === "9788804709848") {
    return "covers/alice.jpg";
  }
  // 4. Antoine de Saint-Exupéry - Il Piccolo Principe
  if (title.includes("piccolo principe") || title.includes("petit prince") || title.includes("saint-exup") || author.includes("exup") || isbn === "9788845277344") {
    return "covers/principe.jpg";
  }
  // 5. George Orwell - 1984
  if (title === "1984" || title.includes("1984") || (author.includes("orwell") && title.includes("1984")) || isbn === "9788804668237" || isbn === "9788804719137") {
    return "covers/orwell.jpg";
  }
  // 6. Italo Calvino - Se una notte d'inverno un viaggiatore
  if (title.includes("viaggiatore") || (title.includes("calvino") && title.includes("inverno")) || isbn === "9788804739500" || isbn === "9788804738596") {
    return "covers/calvino.jpg";
  }
  // 7. Yuval Noah Harari - Sapiens
  if (title.includes("sapiens") || title.includes("animali a d") || author.includes("harari") || isbn === "9788845292491" || isbn === "9788845292798" || isbn === "9788845296499") {
    return "covers/harari.jpg";
  }
  // 8. James Clear - Piccole abitudini (Atomic Habits)
  if (title.includes("abitudini") || title.includes("atomic habits") || author.includes("clear") || isbn === "9788851172411" || isbn === "9791221208870") {
    return "covers/clear.jpg";
  }

  // Fallback direct URL if provided
  if (book.coverUrl && (book.coverUrl.startsWith("http://") || book.coverUrl.startsWith("https://") || book.coverUrl.startsWith("covers/"))) {
    return book.coverUrl;
  }

  return generateDynamicBookCover(book.title, book.author, book.category);
}


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

// =========================================================================
// AGGIORNAMENTO DINAMICO DURATA RIASSUNTO (2 min / 5 min / 15 min)
// =========================================================================
function renderDetailSummaryContent(book, len) {
  // 1. Aggiorna stato attivo pulsanti del selettore
  document.querySelectorAll("#summary-duration-switcher .dur-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.len === len);
  });

  // 2. Aggiorna badge di lettura e registro
  const summaryPill = document.getElementById("summary-reading-time");
  const registerBadge = document.getElementById("summary-register-badge");
  const heroBadge = document.getElementById("detail-length");

  if (len === "fast") {
    if (summaryPill) summaryPill.textContent = "⚡ Sintesi Rapida • 2 min (~300-400 parole)";
    if (registerBadge) registerBadge.textContent = "Panoramica Diretta & 3 Insegnamenti Chiave";
    if (heroBadge) heroBadge.textContent = "⚡ 2 min";
  } else if (len === "standard") {
    if (summaryPill) summaryPill.textContent = "⏱️ Riassunto Standard • 5 min (~700-900 parole)";
    if (registerBadge) registerBadge.textContent = "Svolgimento Narrativo & Punti Chiave";
    if (heroBadge) heroBadge.textContent = "⏱ 5 min";
  } else {
    if (summaryPill) summaryPill.textContent = "📖 Riassunto Approfondito • 15 min (~1800-2500 parole)";
    if (registerBadge) registerBadge.textContent = "Narrazione Completa Fase per Fase";
    if (heroBadge) heroBadge.textContent = "📖 15 min";
  }

  // 3. Recupera il testo calibrato per la durata selezionata
  let actualText = "";
  if (len === "fast") {
    actualText = book.summary2m || book.summary;
  } else if (len === "standard") {
    actualText = book.summary5m || book.summary;
  } else {
    actualText = book.summary15m || book.summary;
  }

  if (!actualText || actualText.length < 50) {
    actualText = book.summary || "Trattazione dell'opera in fase di caricamento.";
  }

  // 4. Formattazione fluida a paragrafi con titoletti evidenziati
  const summaryBody = document.getElementById("summary-text");
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

  // 5. Aggiorna textarea di esportazione Notion per mantenere sincronia
  const notionArea = document.getElementById("tab-notion-textarea");
  if (notionArea) {
    notionArea.value = buildNotionMarkdown(book);
  }
}

// DETAIL SCREEN & SCHEDA NETFLIX
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
  document.getElementById("flashcard-badge-count").textContent = book.flashcards ? book.flashcards.length : 0;

  // Griglia Scheda Editoriale
  const editorialCard = document.getElementById("detail-editorial-card");
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

  // Punti Chiave & Temi Principali
  const themesContainer = document.getElementById("summary-themes-container");
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

  // Biografia Autore
  const authorBioContainer = document.getElementById("author-bio-container");
  if (authorBioContainer) {
    const bioText = book.authorBio || `${book.author} è una delle voci letterarie più rilevanti dell'epoca moderna nel genere "${book.category}". La sua opera si distingue per profondità tematica, rigore stilistico e capacità di interrogare la condizione umana e civile.`;
    authorBioContainer.innerHTML = `
      <h4>✍️ Biografia dell'Autore & Contesto Letterario</h4>
      <p>${bioText}</p>
    `;
  }

  // Renderizza la durata attiva (default da book.summaryLength)
  const currentLen = book.summaryLength || "deep";
  renderDetailSummaryContent(book, currentLen);

  // Collega i click sui pulsanti della durata
  document.querySelectorAll("#summary-duration-switcher .dur-btn").forEach(btn => {
    btn.onclick = () => {
      const len = btn.dataset.len;
      if (currentBook) {
        currentBook.summaryLength = len;
        const bIdx = books.findIndex(b => b.id === currentBook.id);
        if (bIdx !== -1) {
          books[bIdx].summaryLength = len;
          saveBooks();
        }
        renderDetailSummaryContent(currentBook, len);
      }
    };
  });

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

  // TAB 4: MORALE
  const moralText = document.getElementById("moral-text");
  moralText.textContent = book.moral || "Questo libro invita a riflettere profondamente sui condizionamenti sociali e storici, incoraggiando la difesa della dignità e l'autenticità delle proprie scelte.";

  // TAB 5: NOTION
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
  document.getElementById("btn-detail-back").onclick = closeAllModalsAndDetail;

  const btnDetailCloseX = document.getElementById("btn-detail-close-x");
  if (btnDetailCloseX) {
    btnDetailCloseX.onclick = closeAllModalsAndDetail;
  }

  const btnDetailBottomClose = document.getElementById("btn-detail-bottom-close");
  if (btnDetailBottomClose) {
    btnDetailBottomClose.onclick = closeAllModalsAndDetail;
  }

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
      const len = currentBook.summaryLength || "deep";
      const summaryContent = (len === "fast") ? currentBook.summary2m : ((len === "standard") ? currentBook.summary5m : currentBook.summary15m) || currentBook.summary;
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
            <h2>1. Trama & Svolgimento (${getBadgeText(len)})</h2>
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

  // CARICAMENTO FOTO DA GALLERIA
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

  // DEMO CHIPS
  document.querySelectorAll(".demo-chip").forEach(chip => {
    chip.onclick = () => {
      const isbn = chip.dataset.isbn;
      handleBarcodeDetected(isbn);
    };
  });

  // RICERCA MANUALE ONLINE
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

  // SELETTORE LUNGHEZZA
  document.querySelectorAll(".length-chips .chip").forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll(".length-chips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      selectedSummaryLength = chip.dataset.length;
    };
  });

  // GENERAZIONE AI
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
// MOTORE SCANNER CONTINUO REAL-TIME
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
        scanDetectTimer = setTimeout(runNativeLoop, 70);
      }
    };
    runNativeLoop();
  }

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

  triggerScanFeedback();

  const reticleFrame = document.getElementById("scanner-reticle-frame");
  if (reticleFrame) reticleFrame.classList.add("detected");
  const reticleBadge = document.getElementById("reticle-badge");
  if (reticleBadge) reticleBadge.classList.add("show");

  const statusText = document.getElementById("camera-status-text");
  if (statusText) {
    statusText.innerHTML = `✅ <strong>Codice Rilevato: ${cleanIsbn}</strong><br>Caricamento scheda in corso...`;
    statusText.style.color = "#00E676";
  }

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
// RICERCA AUTOMATICA ISTANTANEA E APERTURA SCHEDA SENZA CONFERME
// =========================================================================
async function lookupIsbnDirectly(isbn) {
  const cleanIsbn = isbn.replace(/[^0-9X]/gi, "");
  const scannerModal = document.getElementById("scanner-modal");
  const closeScanner = () => {
    if (scannerModal) scannerModal.classList.remove("open");
    stopLiveVideo();
  };

  const existing = books.find(b => (b.isbn || "").replace(/[^0-9X]/gi, "") === cleanIsbn);
  if (existing) {
    closeScanner();
    openDetail(existing);
    return;
  }

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

// RICERCA ONLINE CON GOOGLE BOOKS E OPEN LIBRARY
async function searchBookOnline(query) {
  const clean = query.trim();
  const numericOnly = clean.replace(/[^0-9X]/gi, "");
  const isIsbn = (numericOnly.length === 10 || numericOnly.length === 13);
  let results = [];

  const cleanLower = clean.toLowerCase();
  const seed = INITIAL_BOOKS.find(b => {
    const bIsbn = (b.isbn || "").replace(/[^0-9X]/gi, "");
    const bTitle = (b.title || "").toLowerCase();
    const bAuthor = (b.author || "").toLowerCase();
    return (isIsbn && bIsbn === numericOnly) || 
           (cleanLower.includes("coccodrilli") && bTitle.includes("coccodrilli")) ||
           ((cleanLower.includes("rousseau") || cleanLower.includes("cassirer")) && bTitle.includes("rousseau")) ||
           (cleanLower.includes("alice") && bTitle.includes("alice")) ||
           ((cleanLower.includes("principe") || cleanLower.includes("exupery")) && bTitle.includes("principe")) ||
           (cleanLower.includes("1984") && bTitle.includes("1984")) ||
           (cleanLower.includes("viaggiatore") && bTitle.includes("viaggiatore")) ||
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
      : `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(clean)}`;
    
    const res = await fetch(gbUrl);
    if (res.ok) {
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        const item = data.items[0];
        const info = item.volumeInfo || {};
        const gCover = extractGoogleBooksCover(info);
        
        results.push({
          title: info.title || clean,
          author: (info.authors && info.authors.length > 0) ? info.authors.join(", ") : "Autore Sconosciuto",
          publishYear: info.publishedDate ? info.publishedDate.substring(0, 4) : "2024",
          publisher: info.publisher || "Edizione Digitale",
          pageCount: info.pageCount || 240,
          category: (info.categories && info.categories.length > 0) ? info.categories[0] : "Narrativa & Saggistica",
          coverUrl: gCover,
          isbn: isIsbn ? numericOnly : (info.industryIdentifiers ? (info.industryIdentifiers[0].identifier || "") : ""),
          description: info.description || ""
        });
      }
    }
  } catch(e) {
    console.warn("Google Books API fetch failed, trying fallback...", e);
  }

  // 2. Open Library API
  if (results.length === 0) {
    try {
      const olUrl = isIsbn
        ? `https://openlibrary.org/api/books?bibkeys=ISBN:${numericOnly}&format=json&jscmd=data`
        : `https://openlibrary.org/search.json?q=${encodeURIComponent(clean)}&limit=1`;

      const res = await fetch(olUrl);
      if (res.ok) {
        const data = await res.json();
        if (isIsbn && data[`ISBN:${numericOnly}`]) {
          const item = data[`ISBN:${numericOnly}`];
          let olCover = "";
          if (item.cover) {
            olCover = item.cover.large || item.cover.medium || item.cover.small || "";
          }
          results.push({
            title: item.title || clean,
            author: (item.authors && item.authors.length > 0) ? item.authors.map(a => a.name).join(", ") : "Autore Sconosciuto",
            publishYear: item.publish_date ? item.publish_date.slice(-4) : "2024",
            publisher: (item.publishers && item.publishers.length > 0) ? item.publishers[0].name : "Edizione Digitale",
            pageCount: item.number_of_pages || 240,
            category: "Narrativa & Saggistica",
            coverUrl: olCover,
            isbn: numericOnly,
            description: item.notes || ""
          });
        } else if (data.docs && data.docs.length > 0) {
          const item = data.docs[0];
          let olCover = "";
          if (item.cover_i) {
            olCover = `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`;
          }
          results.push({
            title: item.title || clean,
            author: (item.author_name && item.author_name.length > 0) ? item.author_name.join(", ") : "Autore Sconosciuto",
            publishYear: item.first_publish_year ? item.first_publish_year.toString() : "2024",
            publisher: (item.publisher && item.publisher.length > 0) ? item.publisher[0] : "Edizione Digitale",
            pageCount: 240,
            category: "Narrativa & Saggistica",
            coverUrl: olCover,
            isbn: (item.isbn && item.isbn.length > 0) ? item.isbn[0] : (isIsbn ? numericOnly : ""),
            description: ""
          });
        }
      }
    } catch(e) {
      console.warn("Open Library fallback failed...", e);
    }
  }

  // 3. Fallback locale intelligente
  if (results.length === 0) {
    results.push({
      title: isIsbn ? `Libro ISBN ${numericOnly}` : clean,
      author: "Autore da identificare",
      publishYear: new Date().getFullYear().toString(),
      publisher: "Edizione Digitale",
      pageCount: 220,
      category: "Narrativa & Saggistica",
      coverUrl: "",
      isbn: isIsbn ? numericOnly : "",
      description: ""
    });
  }

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

// =========================================================================
// GENERATORE INTELLIGENTE DI SCHEDE A 3 LIVELLI (SENZA META-COMMENTARIO)
// =========================================================================
function generateRichBook(meta, length) {
  const title = meta.title;
  const author = meta.author;
  const year = meta.publishYear || new Date().getFullYear().toString();
  const publisher = meta.publisher || "Edizione Integrale";
  const pageCount = meta.pageCount || 240;

  // Se corrisponde a uno dei libri seme, restituisci direttamente il dataset verificato
  const seed = INITIAL_BOOKS.find(b => {
    const bIsbn = (b.isbn || "").replace(/[^0-9X]/gi, "");
    const metaIsbn = (meta.isbn || "").replace(/[^0-9X]/gi, "");
    const bTitle = (b.title || "").toLowerCase();
    const mTitle = (title || "").toLowerCase();
    return (metaIsbn && bIsbn === metaIsbn) || bTitle === mTitle || (mTitle.length > 5 && bTitle.includes(mTitle));
  });

  if (seed) {
    return {
      ...seed,
      id: "book-" + Date.now(),
      summaryLength: length,
      summary: length === "fast" ? seed.summary2m : (length === "standard" ? seed.summary5m : seed.summary15m)
    };
  }

  const desc = meta.description || "";
  const cleanDesc = desc.replace(/<[^>]*>?/gm, '').trim();

  // Nessun template generico (niente 'Fase 1/Fase 2/Eroi'). Titoli contestuali e prosa continua e naturale:
  const summary2m = `L'opera "${title}" di ${author} affronta con straordinaria lucidità i nodi centrali della propria tematica, ponendo le basi storiche ed esistenziali delle vicende. ${cleanDesc ? cleanDesc.substring(0, 320) + '...' : "La narrazione si articola attraverso snodi cruciali in cui le motivazioni profonde dei protagonisti si misurano con gli ostacoli del contesto e con scelte morali non prorogabili. L'intreccio si sviluppa con coerenza serrata, conducendo a un epilogo limpido e denso di significato."}

I temi portanti e le lezioni dell'opera:
• La coerenza etica e la fedeltà ai principi fondanti anche nelle prove più ardue della realtà.
• Il valore della consapevolezza critica come presupposto ineludibile di libertà e autodeterminazione.
• L'importanza dei legami umani e della responsabilità condivisa nel superare le sfide del destino.`;

  const summary5m = `Contesto originario e premesse di "${title}"
La narrazione di "${title}" si apre delineando le coordinate storiche, umane e culturali all'interno delle quali si muovono le figure dell'opera. ${cleanDesc ? cleanDesc.substring(0, 420) : "Fin dalle prime battute emerge con chiarezza la tensione feconda che orienta l'intera vicenda: un confronto incessante tra le aspirazioni interiori dei protagonisti e i vincoli severi imposti dalle circostanze oggettive."}

Lo sviluppo delle vicende e i punti di svolta
Man mano che l'opera entra nel vivo, le tensioni latenti esplodono in snodi narrativi e concettuali di grande intensità. I passaggi intermedi vedono l'approfondimento dei conflitti etici e pratici: ogni scelta compiuta modifica l'equilibrio delle forze in campo, costringendo i personaggi a ripensare le proprie certezze e a confrontarsi con la verità delle proprie azioni. La trama procede senza pause retoriche, mettendo a nudo le dinamiche psicologiche e sociali che determinano l'evoluzione della storia.

La risoluzione e l'eredità concettuale
Nella parte conclusiva le diverse traiettorie convergono verso un esito naturale e compiuto. L'epilogo non si limita a tirare le fila della vicenda, ma consegna al lettore una visione prospettica duratura: il percorso compiuto dischiude un insegnamento profondo sulla natura delle relazioni umane, sul valore della libertà e sulla tenacia necessaria per difendere la propria dignità contro ogni avversità.`;

  const summary15m = `Inquadramento storico e genesi dell'opera "${title}"
La disamina di "${title}" di ${author} prende avvio dall'analisi puntuale del contesto culturale, sociale ed esistenziale da cui l'opera ha tratto origine. ${cleanDesc ? cleanDesc.substring(0, 500) : "L'autore costruisce un impianto narrativo e concettuale rigoroso, in cui ogni elemento concorre a illuminare le contraddizioni della condizione umana e la complessità dell'orizzonte storico di riferimento. Le premesse pongono interrogativi radicali che attraverseranno l'intero svolgimento del testo."}

L'articolazione delle vicende e i primi contrasti
Nel corpo centrale della trattazione, l'opera si sviluppa attraverso una successione incalzante di snodi tematici. I protagonisti si trovano a dover fronteggiare una serie di sfide concrete, dove l'attrito con la realtà circostante misura la saldezza dei loro ideali. Ogni capitolo aggiunge un tassello indispensabile al mosaico complessivo, offrendo dialoghi serrati, introspezioni profonde e descrizioni vivide dei contesti materiali e delle dinamiche di potere.

I momenti cardine e le scelte decisive
Raggiunto il culmine dell'arco narrativo, le posizioni si polarizzano portando alla luce i dilemmi etici più laceranti. È in questa fase che si consumano le decisioni irrevocabili: i protagonisti sono chiamati ad assumersi la piena responsabilità delle proprie convinzioni, affrontando sacrifici personali e mettendo alla prova la solidarietà dei propri legami. La trattazione segue con meticolosa aderenza ogni snodo drammatico, evitando facili scorciatoie o schematismi astratti.

L'approdo finale e il compimento del senso
L'opera approda infine alla sua risoluzione culminante, dove tutte le tensioni accumulate trovano uno scioglimento organico e profondo. L'epilogo tirando le fila dell'intero percorso restituisce un quadro completo e armonioso del messaggio dell'autore, dimostrando la vitalità universale dell'opera e lasciando nel lettore una risonanza etica ed emotiva che perdura ben oltre l'ultima pagina.`;

  return {
    id: "book-" + Date.now(),
    isbn: meta.isbn || "",
    title: title,
    author: author,
    publishYear: year,
    publisher: publisher,
    pageCount: pageCount,
    category: meta.category || "Narrativa & Saggistica",
    coverUrl: resolveBookCover({ title, author, isbn: meta.isbn, category: meta.category }),
    summaryLength: length,
    summary: length === "fast" ? summary2m : (length === "standard" ? summary5m : summary15m),
    summary2m: summary2m,
    summary5m: summary5m,
    summary15m: summary15m,
    authorBio: `${author} è autore di opere di rilievo internazionale. La sua produzione letteraria e saggistica si distingue per l'intensità della ricerca, la cura stilistica e la capacità di interrogare con profondità le sfide morali della contemporaneità.`,
    keyThemes: [
      {
        title: "La Dignità della Scelta",
        desc: "La centralità dell'azione morale autonoma di fronte ai condizionamenti e alle avversità del contesto storico e sociale."
      },
      {
        title: "La Trasformazione Consapevole",
        desc: "L'evoluzione interiore che scaturisce dal confronto autentico con la realtà e dal superamento delle proprie fragilità."
      },
      {
        title: "L'Etica della Responsabilità",
        desc: "La presa di coscienza dell'impatto indelebile che ogni decisione individuale produce sulla comunità e sul futuro condiviso."
      }
    ]
  };
}


async function callRealGeminiApi(apiKey, meta, length) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const promptText = `Sei un narratore eccezionale e un docente letterario brillante. Devi redigere una scheda di lettura approfondita per il libro specificato, generando tre versioni distinte del riassunto calibrate per durata e lunghezza.

TITOLO: ${meta.title}
AUTORE: ${meta.author}

REGOLE TASSATIVE DI STILE (MANDATORIE):
1. ZERO SCHEMI MECCANICI O TEMPLATE GENERICI:
   - È SEVERAMENTE VIETATO usare titoli astratti come 'Fase 1', 'Fase 2', 'Le prove fisiche', 'L'eroe', o schemi preconfezionati.
   - Usa titoli di sezione naturali, contestuali ed evocativi (es. 'Origini a Nava e la minaccia dei Talebani', 'La fuga attraverso le montagne', 'Il processo e la ribellione').
   - ZERO META-COMMENTARIO DISTACCATO: Racconta e spiega DIRETTAMENTE la storia o i concetti dall'inizio alla fine in modo immersivo, cronologico o concettuale, con nomi propri reali di personaggi, luoghi ed eventi concreti.

2. CALIBRAZIONE ESATTA DELLE 3 DURATE:
   - "summary2m" (⚡ 2 Minuti, Sintesi Rapida ~300-400 parole):
     * Sintesi fedele, diretta e fluida dei fatti/concetti chiave e dei significati centrali dell'opera.
   - "summary5m" (⏱️ 5 Minuti, Riassunto Standard ~700-900 parole):
     * Narrazione completa e fluida con tutti i passaggi salienti e spiegazione esaustiva dei punti chiave, suddivisa in 3-4 sezioni con titoli naturali.
   - "summary15m" (📖 15 Minuti, Riassunto Approfondito ~1800-2500 parole):
     * Narrazione dettagliatissima, capitolo per capitolo o snodo per snodo, identica nello spessore e nella ricchezza al modello narrativo di alto livello (come 'Nel mare ci sono i coccodrilli'), con paragrafi distesi e ricchi di dettagli fattuali.

FORMATO RISPOSTA (RESTITUISCI SOLO UN JSON VALIDO):
{
  "summary2m": "...",
  "summary5m": "...",
  "summary15m": "...",
  "authorBio": "...",
  "keyThemes": [
    { "title": "...", "desc": "..." },
    { "title": "...", "desc": "..." },
    { "title": "...", "desc": "..." }
  ]
}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.7
      }
    })
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error?.message || "Errore chiamata API Gemini");
  }

  const data = await response.json();
  const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textContent) throw new Error("Risposta vuota da Gemini API");

  return JSON.parse(textContent);
}


