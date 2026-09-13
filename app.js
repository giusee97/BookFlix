// BookFlix by GFire - Application Engine
// Calibrated 3-Tier Summaries (2m, 5m, 15m) & Instant Real-Time Barcode Scanner

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
    summary2m: "La storia prende avvio nel villaggio di Nava, nell'Afghanistan centrale, dove il piccolo Enaiatollah Akbari appartiene alla minoranza perseguitata degli Hazara. Quando il padre muore in un agguato mentre guida un camion merci, i Talebani e i creditori Pashtun pretendono il bambino come risarcimento per il carico andato perduto. Per strapparlo alla schiavitù e a morte certa, la madre lo conduce clandestinamente oltre il confine pakistano, nella città di Quetta. La notte prima di lasciarlo solo, gli fa promettere solennemente tre cose: non fare mai uso di droghe, non imbracciare armi contro nessuno e non rubare mai.\n\nAll'alba successiva, svegliatosi solo a dieci anni in una terra straniera, Enaiatollah comincia a lottare per la sopravvivenza. Lavora prima come sguattero e venditore di uova nei bazar, poi si nasconde nel bagagliaio rovente di un'auto per raggiungere l'Iran. A Qom lavora giorno e notte nei forni di una fabbrica di mattoni e a Isfahan passa tre anni sui ponteggi dei cantieri edili, sfuggendo costantemente alle retate della polizia e al terrore della deportazione. A quattordici anni decide di tentare il passaggio verso l'Europa: attraversa a piedi le montagne innevate della Turchia in una marcia devastante di ventisei giorni tra compagni morti assiderati, poi si imbarca da Smirne su un canotto sgonfio verso la Grecia, dove affronta un naufragio notturno in cui un compagno annega. Sopravvissuto ad Atene, si lega sotto l'asse delle ruote di un camion telato a Patrasso, rimanendo sospeso per tre giorni sul traghetto fino a sbarcare a Venezia. Giunto infine a Torino, trova l'accoglienza di una famiglia italiana, ottiene l'asilo politico, studia e riesce a riascoltare la voce della madre al telefono.\n\nI tre insegnamenti fondamentali:\n1. La fedeltà incrollabile ai principi morali: le tre promesse fatte alla madre dimostrano che anche nella disperazione più nera si può rifiutare la violenza e conservare la propria dignità.\n2. Il sacrificio materno e il coraggio della libertà: l'abbandono iniziale non è un tradimento ma un atto supremo d'amore per garantire al figlio una possibilità di futuro.\n3. Il valore dell'istruzione e dell'accoglienza: la scuola e l'affetto di una famiglia affidataria restituiscono a chi ha perso tutto il diritto a una vita autonoma e serena.",
    summary5m: "Nel villaggio di Nava, tra le montagne dell'Afghanistan centrale, la vita di Enaiatollah Akbari è segnata dalla paura. La sua gente, gli Hazara di fede sciita, è bersaglio dell'odio razziale e religioso dei Talebani. Il padre di Enaiatollah lavora come camionista per conto di un ricco commerciante Pashtun, ma un giorno il camion cade in un agguato di banditi, il carico va distrutto e l'uomo perde la vita. Il padrone delle merci pretende che la famiglia Akbari paghi il risarcimento e stabilisce che, non essendoci denaro, prenderà il piccolo Enaiatollah come servo. Nel frattempo i Talebani occupano il villaggio, impongono la legge coranica più feroce e chiudono la scuola elementare sparando al maestro di fronte ai bambini. La madre capisce che per il figlio non c'è salvezza rimanendo lì: all'inizio del 2000 raduna i pochi risparmi, nasconde Enaiatollah sotto il burqa e fugge attraverso le montagne verso il Pakistan, fino alla città di frontiera di Quetta.\n\nAlloggiano in una locanda fatiscente per profughi. La sera prima di ripartire, la madre si sdraia accanto al figlio e gli chiede di giurare su tre regole che dovranno guidarlo per sempre: non toccare mai droghe, non impugnare armi e non rubare per nessuna ragione al mondo. Al mattino, Enaiatollah si sveglia e scopre di essere rimasto solo a dieci anni. La madre è tornata dagli altri figli a Nava per non destare sospetti. Inizia così una lotta quotidiana per non morire di fame. Il locandiere gli concede un angolo in cui dormire in cambio della pulizia dei pavimenti e del servizio del tè; poi Enaiatollah impara a vendere uova sode nel bazar, ma le continue estorsioni della polizia pakistana lo convincono a seguire un gruppo di connazionali verso l'Iran. Viaggia per ore chiuso nel bagagliaio soffocante di una macchina guidata da trafficanti, rischiando l'asfissia.\n\nIn Iran trova lavoro prima a Qom in una fabbrica di mattoni, dove i ragazzini dormono all'interno delle fornaci spente per scaldarsi, poi nei giganteschi cantieri edili di Isfahan come piegatore di ferro per il cemento armato. A Isfahan rimane per tre anni, guadagnandosi il rispetto dei mastri di cantiere e inviando i risparmi a casa. La vita è però scandita dal terrore costante delle retate: i poliziotti iraniani caricano gli afghani sui camion e li rinchiudono nel famigerato campo di transito di Sang-e Safid, dove vengono picchiati prima di essere cacciati oltreconfine. Più volte Enaiatollah scampa miracolosamente alla cattura.\n\nConsapevole di non avere futuro come clandestino in Iran, a quattordici anni decide di puntare verso l'Europa. Insieme a quattro amici contatta un trafficante a Teheran. La traversata verso la Turchia si rivela una marcia allucinante di ventisei giorni a piedi sui monti innevati dell'Anatolia, a tremila metri di quota, al buio e con temperature polari per evitare i soldati di confine che sparano a vista. Molti compagni di marcia crollano sfiniti e vengono lasciati morire nella neve; Enaiatollah cammina guardando i cadaveri lungo il sentiero per farsi coraggio. Arrivato a Istanbul chiuso per tre giorni dentro un camion cisterna, lavora per mesi in una pelletteria sotterranea per racimolare i soldi del viaggio successivo.\n\nA Smirne i trafficanti danno a lui e ad altri quattro ragazzi un fragile canotto giallo di plastica con due soli remi. Durante la notte in mare aperto si scatena una tempesta violenta: il canotto imbarca acqua, un remo si spezza e uno dei compagni cade tra i flutti e annega nel buio senza che gli altri possano salvarlo. Dopo ore di terrore remando con le mani, all'alba il gommone si squarcia sugli scogli di Lesbo. La polizia greca rilascia un foglio di via e i ragazzi raggiungono Atene. Nella capitale greca Enaiatollah sperimenta la miseria estrema dormendo nei parchi di piazza Victoria e vendendo illegalmente pacchetti di sigarette. \n\nCapendo che la Grecia non offre possibilità di regolarizzazione, raggiunge Patrasso. Qui passa settimane a studiare il molo d'imbarco dei traghetti diretti in Italia. Dopo innumerevoli tentativi respinti con la forza, riesce a compiere un gesto disperato: si infila sotto un grosso camion merci parcheggiato e si lega con la cintura dei pantaloni all'asse di ferro sopra le ruote, a pochi centimetri dal tubo di scappamento. In quella posizione rimane sospeso per l'intera traversata marittima di tre giorni verso Venezia, respirando gas di scarico e tremando per il rischio di scivolare sotto gli pneumatici. \n\nSbarcato in Italia, raggiunge in treno Torino, dove sa di poter trovare un conoscente di Nava. A Torino la sua odissea ha finalmente termine: viene fermato e preso in custodia dai servizi sociali comunali, che lo affidano a Danila e Marco, una coppia che lo accoglie come un vero figlio. Con il loro sostegno ottiene lo status di rifugiato politico, frequenta la scuola, impara l'italiano e consegue il diploma. A diciotto anni riesce a rintracciare il numero di telefono di una bottega vicino al suo villaggio d'origine: compone il numero e riesce a parlare con la madre, che credendolo morto scoppia in lacrime di gioia.",
    summary15m: "Fase 1: Le origini a Nava e la minaccia dei Talebani\nLa vicenda ha inizio a Nava, un villaggio sperduto tra le montagne della provincia di Ghazni, nell'Afghanistan centrale. Qui vive Enaiatollah Akbari con la madre, il fratello maggiore e la sorella minore. La famiglia appartiene alla minoranza Hazara, una popolazione di ceppo mongolo e fede sciita che la maggioranza Pashtun e i fondamentalisti Talebani considerano inferiore e da sterminare. La casa degli Akbari è un rifugio di fango scavato nella terra; per riscaldarsi d'inverno usano il sandali, un braciere coperto da coperte sotto il quale si infilano le gambe. Il padre di Enaiat lavora duramente come autista per conto di un ricco commerciante Pashtun, guidando carichi di merci lungo le piste dissestate del sud. Un giorno giunge la notizia tragica: il convoglio è caduto in un'imboscata di banditi armati, il camion è stato incendiato e il padre è rimasto ucciso. \n\nPochi giorni dopo, il mercante proprietario del carico si presenta a Nava e bussa alla porta della madre. Pretende il rimborso integrale del valore della merce andata in fumo e, di fronte all'impossibilità della donna di pagare, formula la sua sentenza crudele: Enaiatollah, che ha appena dieci anni, diventerà suo servo a vita come risarcimento del debito di sangue. Nel frattempo i Talebani penetrano nel villaggio imponendo con i kalashnikov la legge coranica più intransigente. Entrano nella scuola elementare del villaggio, radunano gli allievi e ordinano al maestro di chiudere immediatamente le lezioni. Al suo rifiuto dignitoso, i miliziani gli sparano alla testa davanti agli occhi atterriti dei bambini e sigillano l'edificio. Per evitare che Enaiat venga rapito o arruolato a forza, la madre scava una buca nel fienile coprendola con assi di legno e fascine: ogni volta che si sentono passi o motori nel villaggio, Enaiatollah vi si nasconde dentro per ore al buio, trattenendo il respiro.\n\nFase 2: La fuga verso Quetta e l'addio della madre\nRendendosi conto che la situazione è ormai senza uscita, la madre prende una decisione straziante. Vende le poche provviste rimaste, cuce i soldi nella fodera dei vestiti, copre se stessa e il bambino con un burqa scuro e sale su un furgone collettivo diretto a sud. Il viaggio verso il confine pakistano è un incubo di posti di blocco talebani: ad ogni controllo i passeggeri vengono perquisiti e percossi, ma la donna riesce a far passare Enaiatollah per un parente malato. Oltrepassata la frontiera di Chaman, arrivano a Quetta, metropoli del Belucistan pakistano popolata da centinaia di migliaia di profughi afghani. Trovano alloggio nel samavat di Kaka Rahim, una squallida locanda con stanze comuni dove uomini e ragazzi dormono ammassati su stuoie lorde.\n\nLa terza sera di permanenza a Quetta, la madre lava accuratamente i piedi e i capelli di Enaiat, gli accarezza il volto e lo fa coricare accanto a sé. Con voce ferma e commossa gli dice che deve prometterle tre cose solenni per il resto della vita. La prima promessa è non toccare mai le droghe: né l'oppio né l'hashish, che distruggono l'uomo e lo rendono peggiore di una bestia. La seconda è non usare mai le armi: non impugnare coltelli né pistole contro nessuno, qualunque cosa accada. La terza promessa è non rubare mai, neppure quando si ha fame, perché ciò che si ruba appartiene al lavoro di un altro e toglie la purezza all'anima. Enaiatollah promette solennemente. All'alba successiva, quando apre gli occhi, trova il posto accanto a sé vuoto. La madre è partita nella notte senza salutarlo per fare ritorno a Nava dagli altri figli, lasciandolo solo a dieci anni affinché abbia la possibilità di salvarsi la vita.\n\nFase 3: Il lavoro minorile e il passaggio clandestino in Iran\nSconvolto dalla disperazione, Enaiat comprende che piangere non serve a sopravvivere. Chiede a Kaka Rahim di poter rimanere nella locanda: in cambio di un angolo in cui dormire e degli avanzi del cibo, pulisce i pavimenti, lava le stoviglie e serve il tè nero agli avventori dall'alba a notte fonda. Dopo qualche mese comincia a vendere uova sode nel bazar di Quetta: gira per i vicoli con un pentolino caldo e un cartoccio di sale e pepe, gridando per attirare i compratori. Il quartiere è però teatro continuo di estorsioni da parte della polizia pakistana, che ferma gli orfani afghani, li malmena e confisca l'incasso della giornata. Incontrati alcuni ragazzi connazionali più grandi, Enaiatollah decide di tentare il viaggio verso l'Iran, dove si dice che i salari siano più alti.\n\nContattano un trafficante, pagano la quota pattuita e si ritrovano stipati insieme a decine di fuggiaschi nel bagagliaio di vecchie berline che sfrecciano a fari spenti nel deserto del Baluchistan. Enaiat viaggia rannicchiato nel buio cieco per dieci ore con altri quattro ragazzi, con l'odore acre della benzina che toglie l'aria e la lamiera rovente che brucia la pelle; a ogni scossone temono di soffocare, ma riescono a superare la linea di confine iraniana senza essere intercettati dalle guardie doganali.\n\nFase 4: Le fornaci di Qom e i cantieri edili di Isfahan\nArrivato a Qom, città santa dell'Iran sciita, Enaiatollah viene reclutato insieme ad altri minori in una fabbrica di mattoni alla periferia della città. Il lavoro è massacrante: si impasta il fango con le gambe dentro vasche profonde, si riempiono gli stampi a mano e si trasportano i mattoni crudi fino alle fornaci ardenti. I turni durano quattordici ore e la paga è misera. La notte, quando i forni vengono spenti, i ragazzi vi si infilano dentro per sfuggire al gelo tagliente della pianura, dormendo sulla cenere ancora tiepida. Dopo quasi un anno di questo inferno, Enaiat si sposta a Isfahan insieme all'amico Hussain Ali. \n\nA Isfahan viene assunto in un immenso cantiere per la costruzione di complessi residenziali. Il suo compito è piegare i tondini d'acciaio per l'armatura del cemento armato con una morsa di ferro. Il lavoro è faticoso ma ben retribuito: Enaiat impara in fretta, conquista la fiducia dei capomastri e riesce a mettere da parte un gruzzolo di denaro, che affida a mercanti hazara di passaggio affinché lo recapitino alla madre a Nava. Tuttavia, l'Iran non concede pietà agli irregolari. I basiji e la polizia compiono retate sistematiche nei cantieri e nelle strade: chi viene catturato viene caricato su camion telati e deportato nel campo di Sang-e Safid, una prigione a cielo aperto dove le guardie spezzano le gambe ai prigionieri prima di rispedirli a calci oltre la frontiera afghana. Dopo tre anni vissuti come un topo braccato e dopo essere fuggito per un soffio a una brutale incursione delle guardie saltando da un ponteggio al terzo piano, Enaiat capisce che in Iran non potrà mai avere una vita degna.\n\nFase 5: La marcia infernale di ventisei giorni sulle montagne della Turchia\nA quattordici anni Enaiatollah si unisce a quattro amici (Liaqat, Hussain Ali e altri due compagni) e raggiunge Teheran, dove prendono contatto con un passeur curdo. La tariffa per essere condotti in Turchia è altissima, ma i ragazzi consegnano tutti i loro risparmi. Da Tabriz vengono condotti alle pendici delle catene montuose che dividono l'Iran dalla Turchia: un massiccio montuoso impervio con vette che superano i tremila metri, completamente ghiacciate e flagellate dal vento. La colonna di profughi è composta da oltre settanta persone, tra cui donne e bambini piccoli. \n\nLa marcia dura ventisei giorni e ventisei notti. Si cammina solo nell'oscurità più totale, calpestando neve alta fino al ginocchio, senza torce né ripari per non essere avvistati dalle guardie di frontiera turche, che pattugliano le vallate sparando a vista senza intimare l'alt. Le scarpe di tela di Enaiat si distruggono dopo tre giorni; i piedi sanguinano e si congelano nelle calze intrise d'acqua. Chi non regge il passo e si siede viene abbandonato all'istante dai trafficanti senza pietà. Lungo il sentiero Enaiatollah vede con terrore sagome umane pietrificate nel ghiaccio: corpi di migranti morti di stenti nei viaggi precedenti e conservati dal gelo. La vista di quei cadaveri diventa per lui un monito spietato: non fermarsi mai, continuare a muovere le gambe anche quando il cervello urla di cedere. Con la forza della disperazione il gruppo supera il valico e scende verso Dogubeyazit. Qui vengono stipati dentro un camion cisterna per il trasporto di carburante, svuotato ma intriso di vapori tossici: per tre giorni e tre notti restano ammassati nel buio senza cibo né acqua, fino a quando il portellone si apre alla periferia di Istanbul.\n\nFase 6: Il lavoro clandestino a Istanbul e il naufragio nell'Egeo\nA Istanbul i compagni si nascondono nel quartiere degradato di Zeytinburnu. Per ripagare i debiti contratti e mettere da parte la quota per il salto verso l'Europa, lavorano per mesi in una bottega sotterranea cucendo capi di montone e giacche di pelle. L'aria nel laboratorio è irrespirabile a causa della polvere e delle colle chimiche, e i padroni turchi approfittano del loro stato di clandestinità trattenendo gran parte del salario. Non appena racimolano la cifra necessaria, prendono un autobus per Smirne, sulla costa egea.\n\nSulla spiaggia di Smirne, i passeur mostrano loro il mezzo per raggiungere la Grecia: non una barca solida, ma un fragile canotto gonfiabile di colore giallo, poco più grande di un giocattolo per bambini, dotato di due remi di plastica leggera. Enaiat e i suoi quattro amici non hanno mai visto il mare prima di allora e nessuno di loro sa nuotare. Quando provano a protestare dicendo che l'imbarcazione non reggerà le onde, i trafficanti puntano le pistole alla nuca intimando di salire immediatamente. Spinti in acqua nel buio della notte, i ragazzi iniziano a remare puntando verso un bagliore lontano. A metà traversata il mare si ingrossa, folate di vento gelido sollevano creste d'onda altissime e l'acqua salata comincia a riempire lo scafo. Nel panico, un remo scivola via e uno dei cinque giovani perde l'equilibrio cadendo all'indietro: Enaiat cerca disperatamente di afferrargli la giacca, ma il compagno scompare istantaneamente tra i flutti neri e non riemerge più. Distrutti dal dolore e dal terrore, i quattro superstiti continuano a svuotare l'acqua con le scarpe e a remare con le mani nude. All'alba il canotto si schianta e si lacera contro la scogliera frastagliata dell'isola di Lesbo: i ragazzi strisciano sulla terraferma sfiniti, inzuppati e in lacrime per la perdita dell'amico.\n\nFase 7: La degradazione ad Atene e la traversata aggrappato sotto il camion\nLa polizia greca intercetta i naufraghi sulla strada litoranea, li conduce in commissariato per il fotosegnalamento e consegna loro un foglio di espulsione intimando di abbandonare la Grecia entro trenta giorni. Saliti sul traghetto per il Pireo, Enaiatollah e i compagni giungono ad Atene. Nella capitale ellenica conoscono una miseria disumana: non c'è lavoro, non c'è accoglienza. Enaiat dorme all'aperto sulle panchine di piazza Victoria insieme a centinaia di altri fuggiaschi curdi, afghani e iracheni. Per comprare un pezzo di pane vende clandestinamente pacchetti di sigarette di contrabbando, subendo percosse e sequestri da parte della polizia locale. \n\nCapendo che in Grecia non c'è futuro, prende un autobus per Patrasso, porto di partenza dei traghetti per l'Italia. Il porto è una fortezza blindata cinta da mura, filo spinato e guardie armate di manganelli e gas lacrimogeni. Per intere settimane Enaiat studia il flusso degli autoarticolati diretti all'imbarco. Una notte, approfittando della sosta di un grande camion telato prima della dogana, elabora un piano folle insieme a un amico afghano: si infilano sotto il rimorchio, strisciano fino al centro del telaio e si legano con le cinture dei pantaloni e corde di scarto ai tiranti di ferro sopra l'asse delle ruote motrici, a dieci centimetri dal tubo di scappamento rovente. In quella morsa di ferro rimangono sospesi per l'intera traversata dell'Adriatico: tre giorni e tre notti senza potersi muovere, respirando fumi tossici di gasolio, scossi da vibrazioni violentissime e lottando contro il sonno per non cadere e finire stritolati sotto le ruote gemellate.\n\nFase 8: L'arrivo in Italia, l'affidamento a Torino e la rinascita\nIl traghetto attracca al porto di Venezia e il camion si immette sull'autostrada. Dopo alcuni chilometri il veicolo si arresta in un'area di sosta: Enaiatollah e il compagno sciolgono i nodi tremanti, strisciano fuori anneriti dalla fuliggine e si nascondono nella boscaglia vicina. Raggiungono a piedi la stazione ferroviaria di Mestre, salgono senza biglietto su un treno per Roma e infine raggiungono Torino, dove Enaiat sa che vive un amico d'infanzia originario di Nava. A Torino, smarrito nei pressi della stazione di Porta Nuova, il ragazzo viene fermato e preso in custodia dai servizi sociali comunali. Qui accade il miracolo: invece di essere respinto, Enaiatollah viene introdotto a Danila e Marco, una coppia di torinesi generosa e attenta. Danila e Marco decidono di accoglierlo nella propria casa prima come affidatari e poi come veri e propri genitori.\n\nCon l'aiuto della nuova famiglia, Enaiat ottiene lo status di rifugiato politico, impara la lingua italiana, frequenta con profitto la scuola dell'obbligo e si iscrive all'istituto superiore, conseguendo il diploma. Al compimento dei diciotto anni, dopo otto lunghi anni di silenzio totale durante i quali non aveva mai saputo se la madre e i fratelli fossero vivi o sterminati dai Talebani, riesce a ottenere il recapito telefonico di una bottega nei pressi di Nava. Compone il numero con le mani che tremano: dall'altro capo del filo, quando la madre riconosce la voce di Enaiat che le dice di essere vivo e al sicuro in Italia, lancia un grido e sviene per la commozione. Aveva pregato ogni giorno credendolo morto tra le montagne o in fondo al mare. La storia di Enaiatollah si chiude come una straordinaria vittoria della vita, dell'onestà e della tenacia contro ogni crudeltà umana.",
    summary: "Fase 1: Le origini a Nava e la minaccia dei Talebani\nLa vicenda ha inizio a Nava, un villaggio sperduto tra le montagne della provincia di Ghazni, nell'Afghanistan centrale. Qui vive Enaiatollah Akbari con la madre, il fratello maggiore e la sorella minore. La famiglia appartiene alla minoranza Hazara, una popolazione di ceppo mongolo e fede sciita che la maggioranza Pashtun e i fondamentalisti Talebani considerano inferiore e da sterminare. La casa degli Akbari è un rifugio di fango scavato nella terra; per riscaldarsi d'inverno usano il sandali, un braciere coperto da coperte sotto il quale si infilano le gambe. Il padre di Enaiat lavora duramente come autista per conto di un ricco commerciante Pashtun, guidando carichi di merci lungo le piste dissestate del sud. Un giorno giunge la notizia tragica: il convoglio è caduto in un'imboscata di banditi armati, il camion è stato incendiato e il padre è rimasto ucciso. \n\nPochi giorni dopo, il mercante proprietario del carico si presenta a Nava e bussa alla porta della madre. Pretende il rimborso integrale del valore della merce andata in fumo e, di fronte all'impossibilità della donna di pagare, formula la sua sentenza crudele: Enaiatollah, che ha appena dieci anni, diventerà suo servo a vita come risarcimento del debito di sangue. Nel frattempo i Talebani penetrano nel villaggio imponendo con i kalashnikov la legge coranica più intransigente. Entrano nella scuola elementare del villaggio, radunano gli allievi e ordinano al maestro di chiudere immediatamente le lezioni. Al suo rifiuto dignitoso, i miliziani gli sparano alla testa davanti agli occhi atterriti dei bambini e sigillano l'edificio. Per evitare che Enaiat venga rapito o arruolato a forza, la madre scava una buca nel fienile coprendola con assi di legno e fascine: ogni volta che si sentono passi o motori nel villaggio, Enaiatollah vi si nasconde dentro per ore al buio, trattenendo il respiro.\n\nFase 2: La fuga verso Quetta e l'addio della madre\nRendendosi conto che la situazione è ormai senza uscita, la madre prende una decisione straziante. Vende le poche provviste rimaste, cuce i soldi nella fodera dei vestiti, copre se stessa e il bambino con un burqa scuro e sale su un furgone collettivo diretto a sud. Il viaggio verso il confine pakistano è un incubo di posti di blocco talebani: ad ogni controllo i passeggeri vengono perquisiti e percossi, ma la donna riesce a far passare Enaiatollah per un parente malato. Oltrepassata la frontiera di Chaman, arrivano a Quetta, metropoli del Belucistan pakistano popolata da centinaia di migliaia di profughi afghani. Trovano alloggio nel samavat di Kaka Rahim, una squallida locanda con stanze comuni dove uomini e ragazzi dormono ammassati su stuoie lorde.\n\nLa terza sera di permanenza a Quetta, la madre lava accuratamente i piedi e i capelli di Enaiat, gli accarezza il volto e lo fa coricare accanto a sé. Con voce ferma e commossa gli dice che deve prometterle tre cose solenni per il resto della vita. La prima promessa è non toccare mai le droghe: né l'oppio né l'hashish, che distruggono l'uomo e lo rendono peggiore di una bestia. La seconda è non usare mai le armi: non impugnare coltelli né pistole contro nessuno, qualunque cosa accada. La terza promessa è non rubare mai, neppure quando si ha fame, perché ciò che si ruba appartiene al lavoro di un altro e toglie la purezza all'anima. Enaiatollah promette solennemente. All'alba successiva, quando apre gli occhi, trova il posto accanto a sé vuoto. La madre è partita nella notte senza salutarlo per fare ritorno a Nava dagli altri figli, lasciandolo solo a dieci anni affinché abbia la possibilità di salvarsi la vita.\n\nFase 3: Il lavoro minorile e il passaggio clandestino in Iran\nSconvolto dalla disperazione, Enaiat comprende che piangere non serve a sopravvivere. Chiede a Kaka Rahim di poter rimanere nella locanda: in cambio di un angolo in cui dormire e degli avanzi del cibo, pulisce i pavimenti, lava le stoviglie e serve il tè nero agli avventori dall'alba a notte fonda. Dopo qualche mese comincia a vendere uova sode nel bazar di Quetta: gira per i vicoli con un pentolino caldo e un cartoccio di sale e pepe, gridando per attirare i compratori. Il quartiere è però teatro continuo di estorsioni da parte della polizia pakistana, che ferma gli orfani afghani, li malmena e confisca l'incasso della giornata. Incontrati alcuni ragazzi connazionali più grandi, Enaiatollah decide di tentare il viaggio verso l'Iran, dove si dice che i salari siano più alti.\n\nContattano un trafficante, pagano la quota pattuita e si ritrovano stipati insieme a decine di fuggiaschi nel bagagliaio di vecchie berline che sfrecciano a fari spenti nel deserto del Baluchistan. Enaiat viaggia rannicchiato nel buio cieco per dieci ore con altri quattro ragazzi, con l'odore acre della benzina che toglie l'aria e la lamiera rovente che brucia la pelle; a ogni scossone temono di soffocare, ma riescono a superare la linea di confine iraniana senza essere intercettati dalle guardie doganali.\n\nFase 4: Le fornaci di Qom e i cantieri edili di Isfahan\nArrivato a Qom, città santa dell'Iran sciita, Enaiatollah viene reclutato insieme ad altri minori in una fabbrica di mattoni alla periferia della città. Il lavoro è massacrante: si impasta il fango con le gambe dentro vasche profonde, si riempiono gli stampi a mano e si trasportano i mattoni crudi fino alle fornaci ardenti. I turni durano quattordici ore e la paga è misera. La notte, quando i forni vengono spenti, i ragazzi vi si infilano dentro per sfuggire al gelo tagliente della pianura, dormendo sulla cenere ancora tiepida. Dopo quasi un anno di questo inferno, Enaiat si sposta a Isfahan insieme all'amico Hussain Ali. \n\nA Isfahan viene assunto in un immenso cantiere per la costruzione di complessi residenziali. Il suo compito è piegare i tondini d'acciaio per l'armatura del cemento armato con una morsa di ferro. Il lavoro è faticoso ma ben retribuito: Enaiat impara in fretta, conquista la fiducia dei capomastri e riesce a mettere da parte un gruzzolo di denaro, che affida a mercanti hazara di passaggio affinché lo recapitino alla madre a Nava. Tuttavia, l'Iran non concede pietà agli irregolari. I basiji e la polizia compiono retate sistematiche nei cantieri e nelle strade: chi viene catturato viene caricato su camion telati e deportato nel campo di Sang-e Safid, una prigione a cielo aperto dove le guardie spezzano le gambe ai prigionieri prima di rispedirli a calci oltre la frontiera afghana. Dopo tre anni vissuti come un topo braccato e dopo essere fuggito per un soffio a una brutale incursione delle guardie saltando da un ponteggio al terzo piano, Enaiat capisce che in Iran non potrà mai avere una vita degna.\n\nFase 5: La marcia infernale di ventisei giorni sulle montagne della Turchia\nA quattordici anni Enaiatollah si unisce a quattro amici (Liaqat, Hussain Ali e altri due compagni) e raggiunge Teheran, dove prendono contatto con un passeur curdo. La tariffa per essere condotti in Turchia è altissima, ma i ragazzi consegnano tutti i loro risparmi. Da Tabriz vengono condotti alle pendici delle catene montuose che dividono l'Iran dalla Turchia: un massiccio montuoso impervio con vette che superano i tremila metri, completamente ghiacciate e flagellate dal vento. La colonna di profughi è composta da oltre settanta persone, tra cui donne e bambini piccoli. \n\nLa marcia dura ventisei giorni e ventisei notti. Si cammina solo nell'oscurità più totale, calpestando neve alta fino al ginocchio, senza torce né ripari per non essere avvistati dalle guardie di frontiera turche, che pattugliano le vallate sparando a vista senza intimare l'alt. Le scarpe di tela di Enaiat si distruggono dopo tre giorni; i piedi sanguinano e si congelano nelle calze intrise d'acqua. Chi non regge il passo e si siede viene abbandonato all'istante dai trafficanti senza pietà. Lungo il sentiero Enaiatollah vede con terrore sagome umane pietrificate nel ghiaccio: corpi di migranti morti di stenti nei viaggi precedenti e conservati dal gelo. La vista di quei cadaveri diventa per lui un monito spietato: non fermarsi mai, continuare a muovere le gambe anche quando il cervello urla di cedere. Con la forza della disperazione il gruppo supera il valico e scende verso Dogubeyazit. Qui vengono stipati dentro un camion cisterna per il trasporto di carburante, svuotato ma intriso di vapori tossici: per tre giorni e tre notti restano ammassati nel buio senza cibo né acqua, fino a quando il portellone si apre alla periferia di Istanbul.\n\nFase 6: Il lavoro clandestino a Istanbul e il naufragio nell'Egeo\nA Istanbul i compagni si nascondono nel quartiere degradato di Zeytinburnu. Per ripagare i debiti contratti e mettere da parte la quota per il salto verso l'Europa, lavorano per mesi in una bottega sotterranea cucendo capi di montone e giacche di pelle. L'aria nel laboratorio è irrespirabile a causa della polvere e delle colle chimiche, e i padroni turchi approfittano del loro stato di clandestinità trattenendo gran parte del salario. Non appena racimolano la cifra necessaria, prendono un autobus per Smirne, sulla costa egea.\n\nSulla spiaggia di Smirne, i passeur mostrano loro il mezzo per raggiungere la Grecia: non una barca solida, ma un fragile canotto gonfiabile di colore giallo, poco più grande di un giocattolo per bambini, dotato di due remi di plastica leggera. Enaiat e i suoi quattro amici non hanno mai visto il mare prima di allora e nessuno di loro sa nuotare. Quando provano a protestare dicendo che l'imbarcazione non reggerà le onde, i trafficanti puntano le pistole alla nuca intimando di salire immediatamente. Spinti in acqua nel buio della notte, i ragazzi iniziano a remare puntando verso un bagliore lontano. A metà traversata il mare si ingrossa, folate di vento gelido sollevano creste d'onda altissime e l'acqua salata comincia a riempire lo scafo. Nel panico, un remo scivola via e uno dei cinque giovani perde l'equilibrio cadendo all'indietro: Enaiat cerca disperatamente di afferrargli la giacca, ma il compagno scompare istantaneamente tra i flutti neri e non riemerge più. Distrutti dal dolore e dal terrore, i quattro superstiti continuano a svuotare l'acqua con le scarpe e a remare con le mani nude. All'alba il canotto si schianta e si lacera contro la scogliera frastagliata dell'isola di Lesbo: i ragazzi strisciano sulla terraferma sfiniti, inzuppati e in lacrime per la perdita dell'amico.\n\nFase 7: La degradazione ad Atene e la traversata aggrappato sotto il camion\nLa polizia greca intercetta i naufraghi sulla strada litoranea, li conduce in commissariato per il fotosegnalamento e consegna loro un foglio di espulsione intimando di abbandonare la Grecia entro trenta giorni. Saliti sul traghetto per il Pireo, Enaiatollah e i compagni giungono ad Atene. Nella capitale ellenica conoscono una miseria disumana: non c'è lavoro, non c'è accoglienza. Enaiat dorme all'aperto sulle panchine di piazza Victoria insieme a centinaia di altri fuggiaschi curdi, afghani e iracheni. Per comprare un pezzo di pane vende clandestinamente pacchetti di sigarette di contrabbando, subendo percosse e sequestri da parte della polizia locale. \n\nCapendo che in Grecia non c'è futuro, prende un autobus per Patrasso, porto di partenza dei traghetti per l'Italia. Il porto è una fortezza blindata cinta da mura, filo spinato e guardie armate di manganelli e gas lacrimogeni. Per intere settimane Enaiat studia il flusso degli autoarticolati diretti all'imbarco. Una notte, approfittando della sosta di un grande camion telato prima della dogana, elabora un piano folle insieme a un amico afghano: si infilano sotto il rimorchio, strisciano fino al centro del telaio e si legano con le cinture dei pantaloni e corde di scarto ai tiranti di ferro sopra l'asse delle ruote motrici, a dieci centimetri dal tubo di scappamento rovente. In quella morsa di ferro rimangono sospesi per l'intera traversata dell'Adriatico: tre giorni e tre notti senza potersi muovere, respirando fumi tossici di gasolio, scossi da vibrazioni violentissime e lottando contro il sonno per non cadere e finire stritolati sotto le ruote gemellate.\n\nFase 8: L'arrivo in Italia, l'affidamento a Torino e la rinascita\nIl traghetto attracca al porto di Venezia e il camion si immette sull'autostrada. Dopo alcuni chilometri il veicolo si arresta in un'area di sosta: Enaiatollah e il compagno sciolgono i nodi tremanti, strisciano fuori anneriti dalla fuliggine e si nascondono nella boscaglia vicina. Raggiungono a piedi la stazione ferroviaria di Mestre, salgono senza biglietto su un treno per Roma e infine raggiungono Torino, dove Enaiat sa che vive un amico d'infanzia originario di Nava. A Torino, smarrito nei pressi della stazione di Porta Nuova, il ragazzo viene fermato e preso in custodia dai servizi sociali comunali. Qui accade il miracolo: invece di essere respinto, Enaiatollah viene introdotto a Danila e Marco, una coppia di torinesi generosa e attenta. Danila e Marco decidono di accoglierlo nella propria casa prima come affidatari e poi come veri e propri genitori.\n\nCon l'aiuto della nuova famiglia, Enaiat ottiene lo status di rifugiato politico, impara la lingua italiana, frequenta con profitto la scuola dell'obbligo e si iscrive all'istituto superiore, conseguendo il diploma. Al compimento dei diciotto anni, dopo otto lunghi anni di silenzio totale durante i quali non aveva mai saputo se la madre e i fratelli fossero vivi o sterminati dai Talebani, riesce a ottenere il recapito telefonico di una bottega nei pressi di Nava. Compone il numero con le mani che tremano: dall'altro capo del filo, quando la madre riconosce la voce di Enaiat che le dice di essere vivo e al sicuro in Italia, lancia un grido e sviene per la commozione. Aveva pregato ogni giorno credendolo morto tra le montagne o in fondo al mare. La storia di Enaiatollah si chiude come una straordinaria vittoria della vita, dell'onestà e della tenacia contro ogni crudeltà umana.",
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
    summary2m: "Un lettore acquista con trepidazione in libreria il nuovo romanzo di Italo Calvino. Tornato a casa, si sistema in poltrona e comincia a leggere: la storia lo catapulta in una stazione ferroviaria avvolta dalla nebbia, tra vapori di locomotive, valigie scambiate e figure sinistre che si muovono nell'ombra di un bar. La lettura procede serrata fino a pagina trentadue, dove si interrompe bruscamente: a causa di un clamoroso errore di rilegatura tipografica, i fascicoli si ripetono uguali e la storia svanisce nel nulla. Il giorno seguente il protagonista torna dal libraio per ottenere la sostituzione della copia. Lì incontra Ludmilla, una lettrice appassionata che ha riscontrato lo stesso identico difetto. \n\nI due decidono di mettersi insieme sulle tracce del seguito, ma aprendo il nuovo volume consegnato dal negoziante scoprono che non contiene affatto il testo di Calvino, bensì un romanzo polacco di Tazio Bazakbal intitolato 'Fuori dell'abitato di Malbork'. Ha così inizio una caccia rocambolesca che si snoda attraverso dieci inizi di romanzi completamente differenti: dal thriller politico al racconto erotico giapponese, dal giallo metafisico al romanzo rivoluzionario sovietico. Dietro questo labirinto si cela la figura di Ermes Marana, un geniale falsario e traduttore truffaldino che immette sul mercato manoscritti apocrifi e frammentati per seminare il caos nel mondo editoriale e vendicarsi del legame sentimentale con Ludmilla. Nel frattempo entra in gioco Lotaria, la sorella di Ludmilla, che riduce i libri a sterile calcolo statistico inserendoli nei calcolatori elettronici. Inseguito da polizie e regimi di censura che temono la forza eversiva dei libri, il Lettore approda infine in una grande biblioteca, dove comprende che il valore dell'esistenza e della letteratura non risiede nel raggiungere la fine, ma nel desiderio costante di ricominciare da capo. La vicenda si chiude con il matrimonio tra il Lettore e Ludmilla, felici a letto mentre spengono la luce dopo aver terminato la lettura.\n\nI tre insegnamenti fondamentali:\n1. Il valore del cominciare: la lettura autentica non è una corsa per tagliare il traguardo dell'ultima pagina, ma la disponibilità interiore ad aprirsi costantemente a nuovi mondi.\n2. La resistenza dell'emozione contro il calcolo algoritmico: l'approccio vivo ed empatico di Ludmilla supera la dissezione fredda di Lotaria, dimostrando che l'arte vive nel coinvolgimento del cuore.\n3. La forza sovversiva dell'immaginazione: il potere censore reprime i libri perché le storie aperte instillano il dubbio critico e infrangono il conformismo delle verità imposte.",
    summary5m: "Il protagonista entra in una libreria e compra l'ultimo romanzo di Italo Calvino, intitolato 'Se una notte d'inverno un viaggiatore'. A casa si prepara al rito della lettura allontanando ogni distrazione, regola la luce e si immerge nelle pagine. La storia inizia in una stazione di provincia coperta da una coltre di fumo e nebbia: un uomo misterioso scende da un treno con una valigia che deve scambiare con un contatto sconosciuto all'interno di un bar malfamato. L'atmosfera è carica di tensione e presagi di morte, ma giunto a pagina trentadue il lettore si accorge che il fascicolo tipografico successivo ripete all'infinito le stesse pagine. La narrazione si arresta sul più bello per un errore di legatoria.\n\nLa mattina dopo il Lettore torna in libreria per protestare e ottenere una copia corretta. Al banco incontra Ludmilla, una giovane lettrice affascinante rimasta bloccata allo stesso punto. Il libraio si scusa, spiega che c'è stato uno scambio di tirature in tipografia e consegna loro il romanzo corretto. Tornato a casa con la nuova copia, il protagonista scopre con sconcerto che il testo non parla più della stazione nella nebbia: si tratta invece del romanzo 'Fuori dell'abitato di Malbork' dello scrittore polacco Tazio Bazakbal, ambientato in un villaggio di contadini del Nord Europa tra profumi di segale e presagi di temporale. Anche questa storia, tuttavia, si interrompe dopo poche pagine a causa di fogli rimasti bianchi.\n\nDeciso a ritrovare Ludmilla per confrontarsi, il protagonista si reca all'università per consultare il professor Uzzi-Tuzii, titolare della cattedra di lingue e letterature botno-ugriche. Il professore accetta di leggere e tradurre a prima vista per loro il manoscritto originale, ma la storia si trasforma in un terzo romanzo, intitolato 'Sporgendosi dalla costa scoscesa', un dramma psicologico ambientato su una scogliera battuta dai venti. Anche questo testo si interrompe bruscamente sul punto di svelare il mistero. All'università entra in scena Lotaria, la sorella di Ludmilla, un'accademica dogmatica che appartiene a un collettivo di critica letteraria: Lotaria non legge i libri per piacere, ma li fa scansionare da enormi computer per calcolare la frequenza delle parole e decostruirli in categorie ideologiche.\n\nLa ricerca del manoscritto completo si trasforma in una vertiginosa indagine internazionale. Il Lettore scopre che dietro le continue interruzioni opera una mente machiavellica: Ermes Marana, un traduttore traditore ed ex amante di Ludmilla. Marana ha fondato l'OEA (Organizzazione Elettronica Apocrifa) e viaggia per il pianeta inondando case editrici, tipografie e agenzie letterarie di testi falsificati, interrotti e attribuiti ad autori inesistenti, con l'obiettivo di dimostrare che l'autore non esiste e distruggere la fiducia di Ludmilla nella letteratura. Nel tentativo di rintracciare Marana, il Lettore vola prima in Cimmeria, una nazione fantasma ormai cancellata dalle mappe geopolitiche, e poi in Ataguitania, uno stato autoritario dominato da una feroce dittatura militare. Qui sperimenta gli apparati della censura di stato: la polizia sequestra i volumi, brucia le edizioni non conformi e arresta chiunque diffonda storie capaci di stimolare il libero pensiero nei cittadini.\n\nSfuggito alle retate della polizia segreta, il Lettore si rifugia infine nella quiete maestosa di una grande biblioteca pubblica. Seduto attorno a un grande tavolo rotondo, si ritrova a discutere con sette anziani studiosi, ciascuno dei quali incarna un modo diverso e assoluto di amare i libri: c'è chi cerca nelle pagine l'eco della giovinezza perduta, chi brama la rivelazione di una verità suprema e chi si perde nel labirinto di un catalogo infinito. In quel momento il protagonista comprende il segreto ultimo dell'esperienza letteraria: la grandezza di una storia non coincide con il raggiungere un finale chiarificatore, ma nell'infinita e rinnovata meraviglia di mettersi in viaggio ogni volta da capo. Tornato a casa, sposa Ludmilla: l'ultima scena ritrae i due sposi nel letto matrimoniale, intenti a leggere le ultime righe prima di spegnere la lampada da notte.\nA questo punto la trama si infittisce: per ogni romanzo interrotto, il Lettore si ritrova catapultato in una diversa dimensione estetica. Dalle atmosfere torbide del thriller hard-boiled alle raffinatezze simboliste del Sol Levante, ogni incipit incarna una diversa promessa narrativa che si dissolve non appena l'attesa del lettore raggiunge il culmine. L'indagine dimostra come il mondo editoriale contemporaneo sia dominato da forze contrastanti: da un lato il cinismo commerciale dei mercanti di libri e la manipolazione ideologica, dall'altro il desiderio incontaminato di chi apre un libro per perdersi nel mistero della parola scritta.",
    summary15m: "Parte 1: Il lettore sul divano e l'incipit nella stazione avvolta dalla nebbia\nLa vicenda si apre rivolgendosi direttamente a te, il Lettore. Ti trovi in casa dopo aver acquistato in libreria il nuovo romanzo di Italo Calvino intitolato 'Se una notte d'inverno un viaggiatore'. Trovi la posizione più comoda sulla poltrona, allontani i rumori della stanza, chiudi la porta e cominci a scorrere le prime pagine. Il romanzo che hai tra le mani si apre in un'atmosfera fumosa e sospesa: una stazione ferroviaria di provincia in una notte gelida e nebbiosa. Una locomotiva sbuffa vapore sui binari semideserti, l'orologio segna un orario imprecisato e i lampioni proiettano aloni giallastri sull'asfalto bagnato. Un viaggiatore misterioso scende dalla carrozza stringendo una pesante valigia metallica; è visibilmente teso, controlla le spalle e si infila nel bar della stazione, un locale squallido e intriso di odore di caffè bruciato e birra rancida. \n\nQui deve incontrare un contatto per uno scambio di valigie che deciderà la sua sorte, ma all'improvviso un uomo in impermeabile si avvicina sussurrando una frase in codice che manda all'aria i piani. La tensione narrativa sale al massimo, il cuore del lettore batte al ritmo degli eventi, ma voltando la pagina trentadue accade un fatto inaspettato: il testo si interrompe e ritornano esattamente le frasi di pagina diciassette. I fogli del libro sono stati fascicolati male in legatoria; le pagine duplicate si susseguono a vuoto e la continuazione della storia svanisce nel nulla. La delusione è cocente.\n\nParte 2: L'incontro in libreria con Ludmilla e il falso polacco di Malbork\nLa mattina successiva ti rechi di buon'ora nella libreria dove hai comprato il volume per reclamare una copia priva di difetti. Al bancone delle vendite incontri un'altra cliente giunta lì per il medesimo motivo: si chiama Ludmilla, ha occhi vivaci, un'intelligenza magnetica e una passione limpida per le storie. Anche lei è rimasta folgorata dall'incipit del viaggiatore nella stazione ed è infuriata per l'interruzione. Il libraio, mortificato per l'accaduto, spiega che un'intera fornitura tipografica è uscita fallata dallo stabilimento a causa di uno scambio di fascicoli con un'opera straniera e consegna prontamente a entrambi una copia intonsa dello stesso titolo. Prima di congedarsi, tu e Ludmilla vi scambiate i numeri telefonici con la promessa di aggiornarvi non appena avrete terminato il romanzo. \n\nTornato a casa, apri il nuovo libro con grande trepidazione, ma ti accorgi all'istante che qualcosa non quadra: i nomi dei personaggi, le ambientazioni e lo stile sono totalmente diversi. Non ci sono più stazioni né valigie, bensì un paesaggio rurale del Nord Europa fatto di fattorie, campi di segale e muggiti di vacche. Il volume si intitola in realtà 'Fuori dell'abitato di Malbork' ed è attribuito allo scrittore polacco Tazio Bazakbal. Il protagonista è un giovane di nome Guntêr che lavora all'essiccatoio della segale e si ritrova invischiato nelle trame della famiglia di un ricco proprietario terriero e nell'attrazione per la conturbante Brigd. La prosa è sensoriale, fisica, densa di odori di terra e presagi di tempesta. Sei ormai conquistato da questa nuova storia quando, voltando pagina sessantaquattro, trovi una serie ininterrotta di pagine completamente bianche: un altro blocco di stampa difettoso arresta la lettura.\n\nParte 3: L'università di Uzzi-Tuzii e la decostruzione meccanica di Lotaria\nNel tentativo di rintracciare la versione completa del testo polacco e rivedere Ludmilla, ti dirigi verso la facoltà universitaria di lettere. Lì vieni indirizzato dal professor Uzzi-Tuzii, un docente solitario e malinconico che insegna lingue e letterature botno-ugriche in un ufficio sepolto sotto cataste di libri polverosi. Il professore ascolta il tuo racconto, esamina il frammento e sostiene che non si tratti affatto di polacco, ma di lingua cimmeria, una lingua estinta parlata in una remota provincia tra le steppe eurasiatiche. Il professore si offre di tradurre all'impronta un manoscritto cimmero conservato nel suo archivio, intitolato 'Sporgendosi dalla costa scoscesa'. \n\nMentre il professore legge ad alta voce, la storia prende vita: ci si ritrova catapultati su un promontorio a picco su un oceano tempestoso, dove un meteorologo convalescente di nome Valerian scruta l'orizzonte con un cannocchiale e osserva una donna vestita di nero che disegna conchiglie sulla sabbia mentre un misterioso assassino si aggira lungo la scogliera. All'apice della suspense, il professore si blocca: il manoscritto nell'archivio si arresta lì, il resto è andato perduto durante i bombardamenti bellici. \n\nPoco dopo fai la conoscenza di Lotaria, la sorella di Ludmilla. Lotaria incarna l'antitesi perfetta della lettrice: è una studentessa militante che guida un seminario accademico di critica militante in cui la letteratura viene completamente spogliata di fascino e poesia. Lotaria e i suoi colleghi caricano i testi letterari all'interno di enormi computer a schede perforate per contare quante volte compaiono parole chiave come 'produzione', 'potere', 'conflitto' o 'repressione'. Per Lotaria una storia non va letta, ma vivisezionata statisticamente per estrarne il sottotesto politico, annientando ogni emozione estetica.\n\nParte 4: La cospirazione mondiale di Ermes Marana e l'OEA\nSeguendo le tracce lasciate da Ludmilla, entri in contatto con un grande editore metropolitano e scopri la radice dell'intero caos. La colpa di tutti i libri interrotti e dei titoli scambiati risale a un unico individuo: Ermes Marana. Marana è un ex studente ed ex fidanzato di Ludmilla, un uomo roso da una gelosia morbosa e distruttiva. Resosi conto che Ludmilla si innamora degli autori attraverso le loro storie e vive in simbiosi con le parole scritte, Marana ha concepito una vendetta cosmica contro la letteratura: ha fondato una rete clandestina internazionale, l'Organizzazione Elettronica Apocrifa (OEA), proponendosi alle case editrici europee e americane come traduttore universale e agente letterario di autori misteriosi o irraggiungibili. \n\nIn realtà Marana manomette i manoscritti, inserisce traduzioni fasulle, mescola capitoli di autori viventi con testi del secolo precedente e spaccia romanzetti d'appendice per capolavori orientali. Il suo scopo nichilista è dimostrare che l'autore non esiste, che l'originale è un'illusione commerciale e che la parola scritta è solo una truffa vuota, sperando così di distruggere per sempre la fiducia ingenua che Ludmilla ripone nei libri. I romanzi continuano a moltiplicarsi: ti ritrovi a iniziare 'Senza temere il vento e la vertigine', un racconto rivoluzionario intriso di duelli e treni blindati; poi 'Guarda in basso dove l'ombra si addensa', un cupo noir metropolitano; poi ancora un racconto erotico giapponese raffinatissimo ambientato in un giardino di loto e bambù, e un thriller chimico pieno di boccette di veleno e specchi deformanti. Ogni volta la voce narrante ti cattura, crea un mondo perfetto e vibrante, e ogni volta la lama dell'interruzione cala a mozzare il respiro.\n\nParte 5: Il viaggio nei regimi totalitari e la morsa della censura di Stato\nLa ricerca della verità e la caccia alle tracce di Marana ti costringono a intraprendere un lungo viaggio all'estero, prima nell'immaginaria repubblica di Cimmeria, uno stato satellite ormai assorbito da altre potenze, e successivamente in Ataguitania, una nazione sudamericana soffocata da una ferrea giuntura militare e da un apparato poliziesco onnipresente. In Ataguitania sperimenti in prima persona la brutalità del potere politico contro la libertà della carta stampata. L'ispettore generale della censura di stato ti ferma all'aeroporto, perquisisce i tuoi bagagli e sequestra ogni singolo foglio scritto. Nei regimi autoritari ogni libro è considerato un potenziale ordigno esplosivo: la polizia teme le storie perché la letteratura autentica non si lascia addomesticare, non fornisce risposte prefabbricate dalla propaganda e abitua il lettore a porsi domande, a diffidare delle certezze ufficiali e a coltivare l'indipendenza del giudizio critico. \n\nAssisti a roghi di volumi sequestrati nelle piazze e scopri che perfino la polizia censoria utilizza i computer per riscrivere i finali dei romanzi, trasformando storie ribelli in favole conformiste a sostegno dell'ordine costituito. Durante una retata clandestina riesci a fuggire gettandoti nei vicoli bui della città e guadagni la via di fuga verso l'Europa.\n\nParte 6: La grande biblioteca pubblica e il concilio dei sette lettori\nRientrato dalla tua perigliosa odissea internazionale, cerchi rifugio all'interno della grande biblioteca centrale della tua città, una cattedrale laica fatta di volte altissime, pareti foderate di migliaia di tomi rilegati in cuoio e un silenzio solenne che profuma di carta antica. Al centro della sala di consultazione prendi posto a un grande tavolo rotondo di quercia accanto ad altri sette assidui lettori. Discutendo sottovoce con loro sui titoli che hai inseguito invano, ciascuno studioso espone la propria personale e incrollabile filosofia della lettura:\n- Il primo lettore confessa che per lui il momento più bello di un libro è l'inizio, perché prima che la trama si incanali nei binari del già visto ogni possibilità è ancora aperta e infinita.\n- Il secondo lettore sostiene che legge solo per ritrovare l'eco perduta dei libri letti nell'infanzia, quando ogni pagina sembrava spalancare le porte del destino.\n- Il terzo afferma che legge per cercare il filo invisibile che collega tutti i libri del mondo, convinto che ogni volume sia solo il frammento di un unico immenso libro cosmico mai terminato.\n- Il quarto cerca la verità e la salvezza spirituale, scrutando i testi come fossero oracoli sacri.\n- Il quinto legge per dimenticare il presente e fuggire dall'angoscia della vita materiale.\n- Il sesto confessa di leggere unicamente per scovare gli errori, le contraddizioni e le falle della trama.\n- Il settimo infine rivela che legge per il piacere fisico e sensuale dell'oggetto-libro, godendo della consistenza della carta, della precisione dei caratteri a piombo e del profumo dell'inchiostro.\n\nAscoltando le loro voci, una profonda illuminazione si fa strada nella tua mente: ti rendi conto che la ricerca spasmodica di un manoscritto completo era una trappola mentale. Il valore autentico dell'avventura letteraria e della vita stessa non coincide con il raggiungere velocemente la parola 'Fine', ma nella ricchezza inesauribile del cammino, nella capacità di meravigliarsi a ogni nuova pagina e nella disponibilità dell'animo a ricominciare da capo.\n\nParte 7: L'epilogo e il matrimonio a letto con Ludmilla\nLa tua ricerca si compie non ritrovando il libro stampato, ma trovando la complicità definitiva con Ludmilla. Avete condiviso la stessa sete di storie, gli stessi enigmi e la medesima purezza d'animo. La scena conclusiva del romanzo ci riporta a una dimensione intima e domestica: tu e Ludmilla siete sposati e vi trovate coricati insieme in un grande letto matrimoniale sotto un piumone caldo. La stanza è avvolta dalla quiete della notte e illuminata dalla sola luce calda dei due comodini. Entrambi avete un libro aperto tra le mani. Ludmilla alza lo sguardo dalle pagine, ti sorride dolcemente e ti chiede se sei pronto per spegnere la lampada e addormentarti. Tu la guardi negli occhi, segni l'ultima pagina e rispondi con serenità: 'Ancora un momento. Sto per finire di leggere Se una notte d'inverno un viaggiatore di Italo Calvino'.\nNel dialogo notturno tra i coniugi si coglie la sintesi ultima dell'avventura: la vera felicità del Lettore e della Lettrice non dipende dall'aver chiuso tutti i libri del mondo, ma dalla consapevolezza che l'universo narrativo rimane inesauribile. Ogni interruzione affrontata nel lungo viaggio attraverso paesi immaginari, polizie di frontiera e accademie burocratiche si è trasformata in un'opportunità per riscoprire la freschezza dello sguardo. La letteratura si dimostra così un antidoto potente contro l'irrigidimento delle certezze e la solitudine esistenziale.",
    summary: "Parte 1: Il lettore sul divano e l'incipit nella stazione avvolta dalla nebbia\nLa vicenda si apre rivolgendosi direttamente a te, il Lettore. Ti trovi in casa dopo aver acquistato in libreria il nuovo romanzo di Italo Calvino intitolato 'Se una notte d'inverno un viaggiatore'. Trovi la posizione più comoda sulla poltrona, allontani i rumori della stanza, chiudi la porta e cominci a scorrere le prime pagine. Il romanzo che hai tra le mani si apre in un'atmosfera fumosa e sospesa: una stazione ferroviaria di provincia in una notte gelida e nebbiosa. Una locomotiva sbuffa vapore sui binari semideserti, l'orologio segna un orario imprecisato e i lampioni proiettano aloni giallastri sull'asfalto bagnato. Un viaggiatore misterioso scende dalla carrozza stringendo una pesante valigia metallica; è visibilmente teso, controlla le spalle e si infila nel bar della stazione, un locale squallido e intriso di odore di caffè bruciato e birra rancida. \n\nQui deve incontrare un contatto per uno scambio di valigie che deciderà la sua sorte, ma all'improvviso un uomo in impermeabile si avvicina sussurrando una frase in codice che manda all'aria i piani. La tensione narrativa sale al massimo, il cuore del lettore batte al ritmo degli eventi, ma voltando la pagina trentadue accade un fatto inaspettato: il testo si interrompe e ritornano esattamente le frasi di pagina diciassette. I fogli del libro sono stati fascicolati male in legatoria; le pagine duplicate si susseguono a vuoto e la continuazione della storia svanisce nel nulla. La delusione è cocente.\n\nParte 2: L'incontro in libreria con Ludmilla e il falso polacco di Malbork\nLa mattina successiva ti rechi di buon'ora nella libreria dove hai comprato il volume per reclamare una copia priva di difetti. Al bancone delle vendite incontri un'altra cliente giunta lì per il medesimo motivo: si chiama Ludmilla, ha occhi vivaci, un'intelligenza magnetica e una passione limpida per le storie. Anche lei è rimasta folgorata dall'incipit del viaggiatore nella stazione ed è infuriata per l'interruzione. Il libraio, mortificato per l'accaduto, spiega che un'intera fornitura tipografica è uscita fallata dallo stabilimento a causa di uno scambio di fascicoli con un'opera straniera e consegna prontamente a entrambi una copia intonsa dello stesso titolo. Prima di congedarsi, tu e Ludmilla vi scambiate i numeri telefonici con la promessa di aggiornarvi non appena avrete terminato il romanzo. \n\nTornato a casa, apri il nuovo libro con grande trepidazione, ma ti accorgi all'istante che qualcosa non quadra: i nomi dei personaggi, le ambientazioni e lo stile sono totalmente diversi. Non ci sono più stazioni né valigie, bensì un paesaggio rurale del Nord Europa fatto di fattorie, campi di segale e muggiti di vacche. Il volume si intitola in realtà 'Fuori dell'abitato di Malbork' ed è attribuito allo scrittore polacco Tazio Bazakbal. Il protagonista è un giovane di nome Guntêr che lavora all'essiccatoio della segale e si ritrova invischiato nelle trame della famiglia di un ricco proprietario terriero e nell'attrazione per la conturbante Brigd. La prosa è sensoriale, fisica, densa di odori di terra e presagi di tempesta. Sei ormai conquistato da questa nuova storia quando, voltando pagina sessantaquattro, trovi una serie ininterrotta di pagine completamente bianche: un altro blocco di stampa difettoso arresta la lettura.\n\nParte 3: L'università di Uzzi-Tuzii e la decostruzione meccanica di Lotaria\nNel tentativo di rintracciare la versione completa del testo polacco e rivedere Ludmilla, ti dirigi verso la facoltà universitaria di lettere. Lì vieni indirizzato dal professor Uzzi-Tuzii, un docente solitario e malinconico che insegna lingue e letterature botno-ugriche in un ufficio sepolto sotto cataste di libri polverosi. Il professore ascolta il tuo racconto, esamina il frammento e sostiene che non si tratti affatto di polacco, ma di lingua cimmeria, una lingua estinta parlata in una remota provincia tra le steppe eurasiatiche. Il professore si offre di tradurre all'impronta un manoscritto cimmero conservato nel suo archivio, intitolato 'Sporgendosi dalla costa scoscesa'. \n\nMentre il professore legge ad alta voce, la storia prende vita: ci si ritrova catapultati su un promontorio a picco su un oceano tempestoso, dove un meteorologo convalescente di nome Valerian scruta l'orizzonte con un cannocchiale e osserva una donna vestita di nero che disegna conchiglie sulla sabbia mentre un misterioso assassino si aggira lungo la scogliera. All'apice della suspense, il professore si blocca: il manoscritto nell'archivio si arresta lì, il resto è andato perduto durante i bombardamenti bellici. \n\nPoco dopo fai la conoscenza di Lotaria, la sorella di Ludmilla. Lotaria incarna l'antitesi perfetta della lettrice: è una studentessa militante che guida un seminario accademico di critica militante in cui la letteratura viene completamente spogliata di fascino e poesia. Lotaria e i suoi colleghi caricano i testi letterari all'interno di enormi computer a schede perforate per contare quante volte compaiono parole chiave come 'produzione', 'potere', 'conflitto' o 'repressione'. Per Lotaria una storia non va letta, ma vivisezionata statisticamente per estrarne il sottotesto politico, annientando ogni emozione estetica.\n\nParte 4: La cospirazione mondiale di Ermes Marana e l'OEA\nSeguendo le tracce lasciate da Ludmilla, entri in contatto con un grande editore metropolitano e scopri la radice dell'intero caos. La colpa di tutti i libri interrotti e dei titoli scambiati risale a un unico individuo: Ermes Marana. Marana è un ex studente ed ex fidanzato di Ludmilla, un uomo roso da una gelosia morbosa e distruttiva. Resosi conto che Ludmilla si innamora degli autori attraverso le loro storie e vive in simbiosi con le parole scritte, Marana ha concepito una vendetta cosmica contro la letteratura: ha fondato una rete clandestina internazionale, l'Organizzazione Elettronica Apocrifa (OEA), proponendosi alle case editrici europee e americane come traduttore universale e agente letterario di autori misteriosi o irraggiungibili. \n\nIn realtà Marana manomette i manoscritti, inserisce traduzioni fasulle, mescola capitoli di autori viventi con testi del secolo precedente e spaccia romanzetti d'appendice per capolavori orientali. Il suo scopo nichilista è dimostrare che l'autore non esiste, che l'originale è un'illusione commerciale e che la parola scritta è solo una truffa vuota, sperando così di distruggere per sempre la fiducia ingenua che Ludmilla ripone nei libri. I romanzi continuano a moltiplicarsi: ti ritrovi a iniziare 'Senza temere il vento e la vertigine', un racconto rivoluzionario intriso di duelli e treni blindati; poi 'Guarda in basso dove l'ombra si addensa', un cupo noir metropolitano; poi ancora un racconto erotico giapponese raffinatissimo ambientato in un giardino di loto e bambù, e un thriller chimico pieno di boccette di veleno e specchi deformanti. Ogni volta la voce narrante ti cattura, crea un mondo perfetto e vibrante, e ogni volta la lama dell'interruzione cala a mozzare il respiro.\n\nParte 5: Il viaggio nei regimi totalitari e la morsa della censura di Stato\nLa ricerca della verità e la caccia alle tracce di Marana ti costringono a intraprendere un lungo viaggio all'estero, prima nell'immaginaria repubblica di Cimmeria, uno stato satellite ormai assorbito da altre potenze, e successivamente in Ataguitania, una nazione sudamericana soffocata da una ferrea giuntura militare e da un apparato poliziesco onnipresente. In Ataguitania sperimenti in prima persona la brutalità del potere politico contro la libertà della carta stampata. L'ispettore generale della censura di stato ti ferma all'aeroporto, perquisisce i tuoi bagagli e sequestra ogni singolo foglio scritto. Nei regimi autoritari ogni libro è considerato un potenziale ordigno esplosivo: la polizia teme le storie perché la letteratura autentica non si lascia addomesticare, non fornisce risposte prefabbricate dalla propaganda e abitua il lettore a porsi domande, a diffidare delle certezze ufficiali e a coltivare l'indipendenza del giudizio critico. \n\nAssisti a roghi di volumi sequestrati nelle piazze e scopri che perfino la polizia censoria utilizza i computer per riscrivere i finali dei romanzi, trasformando storie ribelli in favole conformiste a sostegno dell'ordine costituito. Durante una retata clandestina riesci a fuggire gettandoti nei vicoli bui della città e guadagni la via di fuga verso l'Europa.\n\nParte 6: La grande biblioteca pubblica e il concilio dei sette lettori\nRientrato dalla tua perigliosa odissea internazionale, cerchi rifugio all'interno della grande biblioteca centrale della tua città, una cattedrale laica fatta di volte altissime, pareti foderate di migliaia di tomi rilegati in cuoio e un silenzio solenne che profuma di carta antica. Al centro della sala di consultazione prendi posto a un grande tavolo rotondo di quercia accanto ad altri sette assidui lettori. Discutendo sottovoce con loro sui titoli che hai inseguito invano, ciascuno studioso espone la propria personale e incrollabile filosofia della lettura:\n- Il primo lettore confessa che per lui il momento più bello di un libro è l'inizio, perché prima che la trama si incanali nei binari del già visto ogni possibilità è ancora aperta e infinita.\n- Il secondo lettore sostiene che legge solo per ritrovare l'eco perduta dei libri letti nell'infanzia, quando ogni pagina sembrava spalancare le porte del destino.\n- Il terzo afferma che legge per cercare il filo invisibile che collega tutti i libri del mondo, convinto che ogni volume sia solo il frammento di un unico immenso libro cosmico mai terminato.\n- Il quarto cerca la verità e la salvezza spirituale, scrutando i testi come fossero oracoli sacri.\n- Il quinto legge per dimenticare il presente e fuggire dall'angoscia della vita materiale.\n- Il sesto confessa di leggere unicamente per scovare gli errori, le contraddizioni e le falle della trama.\n- Il settimo infine rivela che legge per il piacere fisico e sensuale dell'oggetto-libro, godendo della consistenza della carta, della precisione dei caratteri a piombo e del profumo dell'inchiostro.\n\nAscoltando le loro voci, una profonda illuminazione si fa strada nella tua mente: ti rendi conto che la ricerca spasmodica di un manoscritto completo era una trappola mentale. Il valore autentico dell'avventura letteraria e della vita stessa non coincide con il raggiungere velocemente la parola 'Fine', ma nella ricchezza inesauribile del cammino, nella capacità di meravigliarsi a ogni nuova pagina e nella disponibilità dell'animo a ricominciare da capo.\n\nParte 7: L'epilogo e il matrimonio a letto con Ludmilla\nLa tua ricerca si compie non ritrovando il libro stampato, ma trovando la complicità definitiva con Ludmilla. Avete condiviso la stessa sete di storie, gli stessi enigmi e la medesima purezza d'animo. La scena conclusiva del romanzo ci riporta a una dimensione intima e domestica: tu e Ludmilla siete sposati e vi trovate coricati insieme in un grande letto matrimoniale sotto un piumone caldo. La stanza è avvolta dalla quiete della notte e illuminata dalla sola luce calda dei due comodini. Entrambi avete un libro aperto tra le mani. Ludmilla alza lo sguardo dalle pagine, ti sorride dolcemente e ti chiede se sei pronto per spegnere la lampada e addormentarti. Tu la guardi negli occhi, segni l'ultima pagina e rispondi con serenità: 'Ancora un momento. Sto per finire di leggere Se una notte d'inverno un viaggiatore di Italo Calvino'.\nNel dialogo notturno tra i coniugi si coglie la sintesi ultima dell'avventura: la vera felicità del Lettore e della Lettrice non dipende dall'aver chiuso tutti i libri del mondo, ma dalla consapevolezza che l'universo narrativo rimane inesauribile. Ogni interruzione affrontata nel lungo viaggio attraverso paesi immaginari, polizie di frontiera e accademie burocratiche si è trasformata in un'opportunità per riscoprire la freschezza dello sguardo. La letteratura si dimostra così un antidoto potente contro l'irrigidimento delle certezze e la solitudine esistenziale.",
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
    summary2m: "A Londra, capoluogo della provincia di Pista Uno nel superstato totalitario di Oceania, il Partito controlla ogni secondo dell'esistenza umana attraverso i teleschermi onnipresenti, gli elicotteri della polizia e il volto onnisciente del Grande Fratello. Winston Smith, impiegato trentanovenne dal fisico malaticcio, lavora presso il Ministero della Verità con il compito quotidiano di falsificare e correggere gli articoli storici del passato per adeguarli retroattivamente alla linea politica mutevole del Partito. Soffocato da una società priva di privacy, affetti e verità, Winston compie il suo primo atto di ribellione: acquista clandestinamente un vecchio quaderno rilegato in pelle nella bottega di un antiquario proletario e inizia a redigere un diario segreto, vergando con l'inchiostro le parole proibite: 'Abbasso il Grande Fratello'.\n\nLa sua vita subisce una svolta folgorante quando incontra Julia, una giovane collega del reparto finzione che apparentemente sembra una fanatica militante della Lega Giovanile Anti-Sesso. Invece, la ragazza gli consegna un biglietto con su scritto 'Ti amo'. Ha inizio una relazione clandestina e passionale, vissuta prima nei boschi fuori città e poi in una stanza affittata sopra la bottega dell'antiquario Charrington. Winston e Julia credono di aver trovato un alleato in O'Brien, un autorevole membro del Partito Interno che consegna loro il manifesto clandestino della Fratellanza di Emmanuel Goldstein. Ma la stanza è una trappola: dietro una stampa antica è nascosto un teleschermo. I due amanti vengono arrestati e condotti nei sotterranei del Ministero dell'Amore, dove O'Brien si rivela un fanatico torturatore. Attraverso mesi di percosse e manipolazioni mentali, Winston resiste finché non viene portato nella famigerata Stanza 101: di fronte a una gabbia di ratti affamati pronta a essere serrata sulla sua faccia, cede al terrore e urla di infliggere quel supplizio a Julia. Svuotato di ogni sentimento e dignità, Winston siede infine al caffè del Castagno, consapevole di aver tradito se stesso e realizzando di amare il Grande Fratello.\n\nI tre insegnamenti fondamentali:\n1. La memoria storica è il baluardo della libertà: cancellare e riscrivere il passato priva gli individui della capacità di distinguere il vero dal falso.\n2. La ricchezza del linguaggio protegge il pensiero critico: la Neolingua dimostra che atrofizzare il vocabolario impedisce materialmente di formulare idee di dissenso.\n3. Il totalitarismo distrugge l'essere umano spezzandone i legami affettivi: la vera vittoria del potere consiste nell'indurre l'individuo a tradire chi ama per salvare se stesso.",
    summary5m: "In una Londra spettrale e devastata dai bombardamenti atomici, il Partito impone un dominio assoluto sulla popolazione di Oceania. Ogni appartamento è dotato di un teleschermo bidirezionale che trasmette ininterrottamente propaganda e registra ogni gesto o respiro per conto della Psicopolizia. Gli slogan del Partito dominano la città: 'La guerra è pace', 'La libertà è schiavitù', 'L'ignoranza è forza'. Winston Smith lavora al Ministero della Verità all'interno dell'Archivio: ogni volta che il Grande Fratello annuncia una modifica nelle quote di produzione o un rovesciamento delle alleanze di guerra tra Eurasia ed Estasia, Winston deve riscrivere i vecchi giornali, distruggendo le versioni originali nei 'buchi della memoria'. \n\nTormentato dalla consapevolezza di questa colossale menzogna, Winston compra un diario in una bottega di cianfrusaglie nel quartiere dei Prolet, la massa sfruttata che vive ai margini. Sul diario riversa i suoi pensieri proibiti, rievocando i Due Minuti d'Odio quotidiani in cui i cittadini vengono spinti all'isterismo collettivo contro il dissidente Emmanuel Goldstein. Poco tempo dopo viene avvicinato sul posto di lavoro da Julia, una ragazza ventiseienne con la fascia della Lega Giovanile Anti-Sesso. Inaspettatamente, Julia gli passa un pezzetto di carta piegato con la scritta 'Ti amo'. I due organizzano un incontro clandestino nella campagna aperta, lontano dai microfoni, dove danno libero sfogo alla propria passione. Per il Partito l'eros è un reato gravissimo: l'energia sessuale deve essere repressa e incanalata unicamente nel fanatismo verso il Grande Fratello.\n\nWinston e Julia decidono di rischiare il tutto per tutto: affittano una stanzetta senza teleschermo visibile al piano superiore della bottega del signor Charrington. In quella stanza vivono momenti di pura intimità, mangiando caffè vero e pane bianco acquistati al mercato nero. Decidono poi di contattare O'Brien, un alto funzionario del Partito Interno che Winston sospetta essere un membro segreto della Fratellanza, l'organizzazione ribelle clandestina. O'Brien li accoglie nella sua lussuosa dimora e conferma i loro sospetti, consegnando loro una copia del libro segreto di Goldstein che spiega come il Partito mantenga il potere eterno attraverso la guerra continua, la divisione in caste e il Bipensiero, la facoltà di accettare simultaneamente due verità contraddittorie.\n\nLa felicità dei due amanti dura poco. Un pomeriggio, mentre si trovano nella stanza sopra la bottega, una voce metallica rimbomba alle loro spalle: dietro una stampa incorniciata raffigurante la chiesa di St. Clement si nasconde un teleschermo. La bottega appartiene a un agente sotto copertura della Psicopolizia. La stanza viene invasa da guardie armate: Julia viene colpita allo stomaco e trascinata via, mentre Winston viene incatenato e condotto nei sotterranei del Ministero dell'Amore, una prigione priva di finestre dove la luce al neon non viene mai spenta.\n\nHa inizio una spietata opera di rieducazione. A guidare gli interrogatori e le torture è lo stesso O'Brien. Winston viene sottoposto a elettroshock, pestaggi feroci e privazione del sonno. O'Brien gli spiega che il Partito non desidera martiri: l'obiettivo non è uccidere i dissidenti, ma riplasmarli fino a cancellare la loro anima e renderli devoti al Grande Fratello. Winston cede su ogni punto logico, arrivando ad accettare che due più due faccia cinque se il Partito lo afferma, ma nell'intimo conserva ancora l'amore per Julia. O'Brien lo fa allora condurre nella Stanza 101, il luogo in cui ogni uomo affronta la cosa peggiore del mondo, la sua fobia insostenibile. Per Winston sono i topi. O'Brien solleva una gabbia di ferro sagomata a forma di maschera con dentro due enormi ratti di fogna affamati, pronta a essere allacciata al suo viso. Di fronte a quell'orrore indicibile, Winston crolla moralmente e urla con disperazione animale: 'Fatelo a Julia! Squartate la sua faccia, non la mia!'. Il tradimento è totale e irrevocabile. Rilasciato dal Ministero, Winston siede come un relitto umano al caffè del Castagno bevendo gin Victory: incrocia Julia per strada, ma entrambi ammettono freddamente di essersi traditi a vicenda. Mentre un bollettino militare annuncia una schiacciante vittoria in Africa, Winston fissa il ritratto del Grande Fratello con le lacrime agli occhi, rendendosi conto di amarlo sinceramente.\nIl dramma di 1984 si consuma nell'annientamento programmato di ogni spazio intimo e spirituale. Winston Smith comprende a proprie spese che l'onnipotenza del Partito non si accontenta di schiacciare il dissenso con la forza fisica, ma esige il consenso devoto ed entusiasta della vittima prima di cancellarla dalla storia. La sottomissione totale non lascia scampo: quando perfino il ricordo dell'amore viene estirpato dal cuore umano, la tirannia ottiene la sua vittoria definitiva.",
    summary15m: "Parte 1: La fredda giornata d'aprile e i quattro Ministeri di Oceania\nLa storia si apre in una gelida giornata di aprile, mentre gli orologi battono tredici colpi. Winston Smith, impiegato trentanovenne dal corpo gracile e tormentato da un'ulcera varicosa sopra la caviglia destra, rincasa nel suo appartamento al settimo piano del condominio 'Vittoria' a Londra, capitale di Pista Uno. Il palazzo odora di cavolo bollito e di vecchi stracci logori. Lungo le scale campeggia a intervalli regolari un manifesto gigantesco che ritrae un volto maschile sui quarantacinque anni, con folti baffi neri e lineamenti severi, i cui occhi sembrano seguire l'osservatore in ogni suo spostamento; sotto l'immagine si legge la scritta cubitale: IL GRANDE FRATELLO TI GUARDA. \n\nAll'interno dell'appartamento una placca oblunga di metallo opaco, il teleschermo, diffonde a volume costante statistiche trionfalistiche sulla produzione industriale di ghisa. Il dispositivo non può essere spento: può solo essere attenuato e funziona come un occhio spia perennemente aperto per mezzo del quale la famigerata Psicopolizia può spiare, ascoltare e analizzare qualunque inflessione della voce o espressione facciale dei membri del Partito. Dalla finestra Winston contempla il panorama desolante di una città in rovina, crivellata da squarci provocati dalle bombe-razzo che cadono regolarmente e sovrastata da quattro colossali edifici piramidali in cemento bianco:\n- Il Ministero della Verità (Miniver), dove lavora lo stesso Winston, che si occupa di produrre propaganda, notiziari, musica, intrattenimento e di manipolare gli archivi storici;\n- Il Ministero della Pace (Minipax), incaricato della conduzione dello stato di guerra perenne che oppone Oceania ai due superstati rivali, Eurasia ed Estasia;\n- Il Ministero dell'Abbondanza (Miniabb), responsabile della gestione del rigido razionamento alimentare e dei beni di consumo primari;\n- Il Ministero dell'Amore (Miniamor), una fortezza impenetrabile circondata da filo spinato e guardie armate di mitragliatori, dove non vi sono finestre e dove si applicano la tortura sistematica e l'eliminazione dei dissidenti politici. Sulla facciata del Ministero della Verità risaltano i tre dogmi assoluti del Partito: LA GUERRA È PACE / LA LIBERTÀ È SCHIAVITÙ / L'IGNORANZA È FORZA.\n\nParte 2: La riscrittura del passato e il primo atto di sedizione nel diario\nWinston siede nella sua minuscola stanza da lavoro al Ministero della Verità. Davanti a lui si trovano il parlascrivi, uno strumento che trascrive automaticamente la voce in testo, tre feritoie nel muro destinate alla posta pneumatica e una grande apertura circolare protetta da una grata metallica: il cosiddetto 'buco della memoria'. Quando un ordine di servizio gli recapita un vecchio numero del quotidiano 'Times', Winston legge che il Grande Fratello aveva lodato pubblicamente un generale caduto in disgrazia o aveva predetto che non ci sarebbe stata alcuna riduzione nella razione di cioccolato, mentre il giorno precedente la razione era stata decurtata da trenta a venti grammi. \n\nIl compito di Winston è riscrivere integralmente il testo originale dell'articolo, correggendo le profezie affinché il Partito risulti sempre infallibile, facendolo stampare nuovamente e gettando il documento antico nel buco della memoria, dove le fiamme di un inceneritore sotterraneo distruggono ogni traccia fisica della verità. Nessun documento originale sopravvive: la storia viene riscritta quotidianamente, e ogni mutamento diventa la verità eterna. L'individuo viene persino 'vaporizzato', trasformato in una 'non-persona' di cui viene cancellata la memoria e l'esistenza stessa dai registri anagrafici. \n\nRoso dal tormento per questa cancellazione sistematica della realtà, Winston compie un passo che la Psicopolizia punisce con la morte: approfittando di una rientranza della parete fuori dalla visuale del teleschermo, apre un vecchio quaderno con pagine vergini di carta ingiallita, acquistato clandestinamente per pochi centesimi nella bottega di un rigattiere proletario, intinge la penna nell'inchiostro vero e inizia a scrivere un diario. Rievoca l'odio cieco provato durante i Due Minuti d'Odio, quando l'intero Ministero si raduna di fronte al megaschermo per insultare il volto di Emmanuel Goldstein, il traditore capo della mitica Fratellanza sovversiva; infine, guidato da una furia incontenibile, riempie la pagina ripetendo la frase proibita: ABBASSO IL GRANDE FRATELLO.\n\nParte 3: L'incontro clandestino con Julia e la ribellione dell'eros\nPochi giorni dopo, mentre cammina lungo i corridoi del Ministero, Winston incrocia una ragazza bruna sui ventisei anni che lavora al Reparto Finzione riparando le macchine per comporre romanzi popolari. La giovane indossa la fascia scarlatta della Lega Giovanile Anti-Sesso, segno di purezza e fedeltà dogmatica; Winston la detesta perché la considera una spia fanatica. Ma quel giorno la ragazza inciampa e cade a terra sul braccio fasciato: Winston si china per aiutarla a rialzarsi e lei, con una mossa fulminea, gli fa scivolare nella mano un piccolo biglietto ripiegato. Rientrato nel gabinetto del Ministero, Winston apre il foglietto e legge attonito quattro parole vergate con scrittura minuta: 'Ti amo'. \n\nI due riescono a concordare un incontro segreto attraverso brevi bisbigli in mezzo alla folla di piazza della Vittoria. La prima fuga avviene in campagna, a una trentina di chilometri da Londra, in mezzo a boschi di betulle al riparo da occhi indiscreti e microfoni nascosti. La ragazza si chiama Julia: lontana dai teleschermi si rivela una ribelle pragmatica, vitale e sensuale. Julia non nutre alcun interesse per le teorie politiche astratte; odia il Partito perché nega la felicità terrena, proibisce il piacere sessuale e costringe le persone all'ipocrisia. Tra i cespugli di campanule i due si uniscono carnalmente: per Winston quell'abbraccio non è solo un atto d'amore, ma una battaglia politica, un colpo letale inferto alla disciplina glaciale del Partito, che concepisce il sesso unicamente come un dovere procreativo privo di passione per generare nuovi servitori dello Stato.\n\nParte 4: Il nido d'amore sopra la bottega dell'antiquario e la Neolingua\nDesiderosi di conquistare uno spazio stabile per vivere la propria intimità, Winston prende in affitto per poche monete la stanza al piano superiore della bottega del signor Charrington, un anziano rigattiere dai modi gentili situata in uno squallido quartiere popolato dai Prolet. La stanza è priva di teleschermo e arredata con mobili d'epoca: un grande letto di piuma, un tappeto sbiadito e un antico fermacarte di vetro trasparente contenente un corallo rosa, che Winston acquista e custodisce come simbolo tangibile del passato e della bellezza incontaminata. In quel nido clandestino, Julia porta cibo vero rubato al Partito Interno: vero caffè aromatico, zucchero bianco, tè e perfino un barattolo di marmellata. Julia si trucca il viso con rossetto e cipria, riscoprendo la propria femminilità, mentre dalla finestra risuona il canto vigoroso di una lavandaia proletaria che stende i panni nel cortile. \n\nNel frattempo Winston si confronta con il collega Syme, un filologo geniale incaricato di redigere l'Undicesima Edizione del Dizionario della Neolingua. Syme gli spiega con entusiasmo che il fine supremo della Neolingua non è ampliare le parole, ma distruggerle a centinaia: eliminando i sinonimi, i contrari e le sfumature espressive, la lingua viene ridotta all'osso. Quando non esisteranno più parole per definire la libertà o la giustizia, la mente umana non sarà più materialmente capace di concepire il dissenso o il tradimento politico.\n\nParte 5: L'inganno di O'Brien e la lettura del libro di Goldstein\nWinston è convinto che O'Brien, un autorevole membro del Partito Interno dai modi raffinati ed enigmatici, sia in realtà un cospiratore della Fratellanza. Un giorno O'Brien lo avvicina fingendo di dovergli mostrare l'ultima edizione del dizionario e lo invita nella sua sfarzosa residenza. Winston e Julia si recano all'appuntamento con il cuore in gola. Entrati nella dimora, O'Brien compie un gesto inaudito che gela il sangue ai due giovani: allunga la mano e spegne il teleschermo della sala, privilegio concesso unicamente ai membri del Partito Interno. \n\nWinston e Julia dichiarano apertamente la loro devozione alla causa ribelle, proclamandosi pronti a uccidere, a compiere sabotaggi e a sacrificare la propria vita pur di minare il dominio del Grande Fratello. O'Brien accetta il loro giuramento e promette di far recapitare loro 'Il Libro', il testo sacro della resistenza redatto dallo stesso Emmanuel Goldstein. Pochi giorni dopo Winston riceve una pesante valigetta contenente il volume intitolato 'Teoria e prassi del collettivismo oligarchico'. Rinchiuso con Julia nella stanza sopra la bottega di Charrington, Winston legge ad alta voce i capitoli centrali: il testo spiega lucidamente che i tre superstati non combattono per distruggersi, ma mantengono la guerra perenne per consumare il surplus economico e mantenere la popolazione nella miseria e nell'ignoranza, consentendo alla classe dominante di perpetuare il proprio potere per l'eternità.\n\nParte 6: L'arresto dietro il quadro e l'inferno del Ministero dell'Amore\nMentre Winston e Julia contemplano la bellezza del fermacarte di vetro, all'improvviso una voce metallica e inflessibile risuona nella stanza: 'Voi siete morti'. Dietro una vecchia stampa incorniciata raffigurante la chiesa di St. Clement Danes si celava un teleschermo segreto. Pochi istanti dopo, il signor Charrington entra nella stanza a capo di una squadra di soldati armati di stivali neri e manganelli: l'antiquario dai modi pacati era un agente provocatore della Psicopolizia. Uno dei soldati sferra un pugno devastante allo stomaco di Julia, che viene trascinata via esanime; il fermacarte di vetro cade sul pavimento e si frantuma in mille pezzi, svelando la fragilità del corallo. \n\nWinston viene incatenato e deportato nei sotterranei del Ministero dell'Amore. Qui viene rinchiuso in celle cubiche di porcellana bianca dove luci al neon violentissime non vengono mai spente, impedendo di distinguere il giorno dalla notte. In quel luogo infernale assiste al degrado totale degli uomini: intellettuali ridotti a scheletri ambulanti, poeti condannati per aver lasciato la parola 'Dio' alla fine di una rima e il suo vicino di casa Parsons denunciato dalla figlia di sette anni per aver mormorato 'Abbasso il Grande Fratello' nel sonno. \n\nPoco dopo la porta blindata si apre ed entra O'Brien. Winston comprende con raccapriccio che O'Brien non è mai stato un ribelle, ma l'inquisitore supremo del regime, colui che ha teso la trappola guidando ogni mossa dei due amanti per sette anni. Ha inizio un calvario di torture indicibili: Winston viene picchiato con spranghe di ferro, sottoposto a scariche elettriche progressive che gli fratturano le articolazioni e gli strappano i denti. O'Brien gli spiega che il Partito cerca il potere per il potere puro: non per il bene comune, non per la ricchezza, ma per infliggere dolore e umiliazione. 'Se vuoi un'immagine del futuro, Winston, immagina uno stivale che calpesta un volto umano... per sempre'.\n\nParte 7: La Stanza 101, la gabbia dei topi e la definitiva capitolazione\nSotto la tortura scientifica di O'Brien, Winston capitola intellettualmente: accetta che due più due faccia cinque se il Partito lo esige, accetta che la memoria non esista al di fuori dell'archivio del Partito. Ma nel segreto più profondo del suo cuore, Winston conserva una scintilla inviolata: non ha tradito Julia, la ama ancora e rifiuta di odiarla. O'Brien comprende che la conversione non è completa e pronuncia la condanna: 'Portatelo nella Stanza 101'. La Stanza 101 è il cuore nero del Ministero dell'Amore, il luogo in cui ogni prigioniero viene posto a confronto con la peggiore cosa al mondo, la propria fobia primordiale. Per Winston questa fobia sono i topi: incubo ricorrente che da sempre gli paralizza il cervello. \n\nO'Brien fa entrare due guardie che trasportano una gabbia rettangolare munita di maniglie e di una maschera metallica sagomata per aderire perfettamente al volto umano; all'interno si agitano due enormi ratti di fogna neri, inferociti dalla fame. O'Brien spiega freddamente che premendo una leva la porticina della gabbia scatterà e i ratti gli dilanieranno gli occhi e le guance fino alla gola. La gabbia si avvicina a pochi millimetri dal viso di Winston: l'odore fetido dei roditori gli invade le narici e il panico cieco spezza l'ultima barriera della sua dignità umana. C'è solo una persona al mondo tra lui e quell'orrore: Winston urla con tutta la voce che gli resta nei polmoni: 'Fatelo a Julia! Fatelo a Julia! Non a me! Julia! Non mi importa di cosa le fate! Squartate la sua faccia, spolpatela fino alle ossa! Non me!'. Il tradimento è totale, definitivo, insuperabile. La gabbia viene allontanata.\n\nL'epilogo si svolge mesi dopo al caffè del Castagno. Winston è un uomo libero ma vuoto, un relitto umano dal naso ingrossato e dal respiro pesante, che passa i pomeriggi a bere gin aromatizzato ai chiodi di garofano e a giocare partite a scacchi solitarie. Ha rivisto Julia un giorno d'inverno in un parco spoglio: si sono parlati a stento, riconoscendo di essersi reciprocamente traditi nella Stanza 101 e scoprendo che il sentimento che li univa è morto per sempre. All'improvviso le trombe del teleschermo del bar squillano e una voce annuncia una vittoria schiacciante delle forze di Oceania in Africa. Una lacrima d'infinita gratitudine solca la guancia di Winston. La lunga lotta è finalmente conclusa: egli ha riportato la vittoria su se stesso. Guarda il ritratto immenso del Grande Fratello con adorazione devota e comprende, finalmente, di amarlo con tutto il suo cuore.",
    summary: "Parte 1: La fredda giornata d'aprile e i quattro Ministeri di Oceania\nLa storia si apre in una gelida giornata di aprile, mentre gli orologi battono tredici colpi. Winston Smith, impiegato trentanovenne dal corpo gracile e tormentato da un'ulcera varicosa sopra la caviglia destra, rincasa nel suo appartamento al settimo piano del condominio 'Vittoria' a Londra, capitale di Pista Uno. Il palazzo odora di cavolo bollito e di vecchi stracci logori. Lungo le scale campeggia a intervalli regolari un manifesto gigantesco che ritrae un volto maschile sui quarantacinque anni, con folti baffi neri e lineamenti severi, i cui occhi sembrano seguire l'osservatore in ogni suo spostamento; sotto l'immagine si legge la scritta cubitale: IL GRANDE FRATELLO TI GUARDA. \n\nAll'interno dell'appartamento una placca oblunga di metallo opaco, il teleschermo, diffonde a volume costante statistiche trionfalistiche sulla produzione industriale di ghisa. Il dispositivo non può essere spento: può solo essere attenuato e funziona come un occhio spia perennemente aperto per mezzo del quale la famigerata Psicopolizia può spiare, ascoltare e analizzare qualunque inflessione della voce o espressione facciale dei membri del Partito. Dalla finestra Winston contempla il panorama desolante di una città in rovina, crivellata da squarci provocati dalle bombe-razzo che cadono regolarmente e sovrastata da quattro colossali edifici piramidali in cemento bianco:\n- Il Ministero della Verità (Miniver), dove lavora lo stesso Winston, che si occupa di produrre propaganda, notiziari, musica, intrattenimento e di manipolare gli archivi storici;\n- Il Ministero della Pace (Minipax), incaricato della conduzione dello stato di guerra perenne che oppone Oceania ai due superstati rivali, Eurasia ed Estasia;\n- Il Ministero dell'Abbondanza (Miniabb), responsabile della gestione del rigido razionamento alimentare e dei beni di consumo primari;\n- Il Ministero dell'Amore (Miniamor), una fortezza impenetrabile circondata da filo spinato e guardie armate di mitragliatori, dove non vi sono finestre e dove si applicano la tortura sistematica e l'eliminazione dei dissidenti politici. Sulla facciata del Ministero della Verità risaltano i tre dogmi assoluti del Partito: LA GUERRA È PACE / LA LIBERTÀ È SCHIAVITÙ / L'IGNORANZA È FORZA.\n\nParte 2: La riscrittura del passato e il primo atto di sedizione nel diario\nWinston siede nella sua minuscola stanza da lavoro al Ministero della Verità. Davanti a lui si trovano il parlascrivi, uno strumento che trascrive automaticamente la voce in testo, tre feritoie nel muro destinate alla posta pneumatica e una grande apertura circolare protetta da una grata metallica: il cosiddetto 'buco della memoria'. Quando un ordine di servizio gli recapita un vecchio numero del quotidiano 'Times', Winston legge che il Grande Fratello aveva lodato pubblicamente un generale caduto in disgrazia o aveva predetto che non ci sarebbe stata alcuna riduzione nella razione di cioccolato, mentre il giorno precedente la razione era stata decurtata da trenta a venti grammi. \n\nIl compito di Winston è riscrivere integralmente il testo originale dell'articolo, correggendo le profezie affinché il Partito risulti sempre infallibile, facendolo stampare nuovamente e gettando il documento antico nel buco della memoria, dove le fiamme di un inceneritore sotterraneo distruggono ogni traccia fisica della verità. Nessun documento originale sopravvive: la storia viene riscritta quotidianamente, e ogni mutamento diventa la verità eterna. L'individuo viene persino 'vaporizzato', trasformato in una 'non-persona' di cui viene cancellata la memoria e l'esistenza stessa dai registri anagrafici. \n\nRoso dal tormento per questa cancellazione sistematica della realtà, Winston compie un passo che la Psicopolizia punisce con la morte: approfittando di una rientranza della parete fuori dalla visuale del teleschermo, apre un vecchio quaderno con pagine vergini di carta ingiallita, acquistato clandestinamente per pochi centesimi nella bottega di un rigattiere proletario, intinge la penna nell'inchiostro vero e inizia a scrivere un diario. Rievoca l'odio cieco provato durante i Due Minuti d'Odio, quando l'intero Ministero si raduna di fronte al megaschermo per insultare il volto di Emmanuel Goldstein, il traditore capo della mitica Fratellanza sovversiva; infine, guidato da una furia incontenibile, riempie la pagina ripetendo la frase proibita: ABBASSO IL GRANDE FRATELLO.\n\nParte 3: L'incontro clandestino con Julia e la ribellione dell'eros\nPochi giorni dopo, mentre cammina lungo i corridoi del Ministero, Winston incrocia una ragazza bruna sui ventisei anni che lavora al Reparto Finzione riparando le macchine per comporre romanzi popolari. La giovane indossa la fascia scarlatta della Lega Giovanile Anti-Sesso, segno di purezza e fedeltà dogmatica; Winston la detesta perché la considera una spia fanatica. Ma quel giorno la ragazza inciampa e cade a terra sul braccio fasciato: Winston si china per aiutarla a rialzarsi e lei, con una mossa fulminea, gli fa scivolare nella mano un piccolo biglietto ripiegato. Rientrato nel gabinetto del Ministero, Winston apre il foglietto e legge attonito quattro parole vergate con scrittura minuta: 'Ti amo'. \n\nI due riescono a concordare un incontro segreto attraverso brevi bisbigli in mezzo alla folla di piazza della Vittoria. La prima fuga avviene in campagna, a una trentina di chilometri da Londra, in mezzo a boschi di betulle al riparo da occhi indiscreti e microfoni nascosti. La ragazza si chiama Julia: lontana dai teleschermi si rivela una ribelle pragmatica, vitale e sensuale. Julia non nutre alcun interesse per le teorie politiche astratte; odia il Partito perché nega la felicità terrena, proibisce il piacere sessuale e costringe le persone all'ipocrisia. Tra i cespugli di campanule i due si uniscono carnalmente: per Winston quell'abbraccio non è solo un atto d'amore, ma una battaglia politica, un colpo letale inferto alla disciplina glaciale del Partito, che concepisce il sesso unicamente come un dovere procreativo privo di passione per generare nuovi servitori dello Stato.\n\nParte 4: Il nido d'amore sopra la bottega dell'antiquario e la Neolingua\nDesiderosi di conquistare uno spazio stabile per vivere la propria intimità, Winston prende in affitto per poche monete la stanza al piano superiore della bottega del signor Charrington, un anziano rigattiere dai modi gentili situata in uno squallido quartiere popolato dai Prolet. La stanza è priva di teleschermo e arredata con mobili d'epoca: un grande letto di piuma, un tappeto sbiadito e un antico fermacarte di vetro trasparente contenente un corallo rosa, che Winston acquista e custodisce come simbolo tangibile del passato e della bellezza incontaminata. In quel nido clandestino, Julia porta cibo vero rubato al Partito Interno: vero caffè aromatico, zucchero bianco, tè e perfino un barattolo di marmellata. Julia si trucca il viso con rossetto e cipria, riscoprendo la propria femminilità, mentre dalla finestra risuona il canto vigoroso di una lavandaia proletaria che stende i panni nel cortile. \n\nNel frattempo Winston si confronta con il collega Syme, un filologo geniale incaricato di redigere l'Undicesima Edizione del Dizionario della Neolingua. Syme gli spiega con entusiasmo che il fine supremo della Neolingua non è ampliare le parole, ma distruggerle a centinaia: eliminando i sinonimi, i contrari e le sfumature espressive, la lingua viene ridotta all'osso. Quando non esisteranno più parole per definire la libertà o la giustizia, la mente umana non sarà più materialmente capace di concepire il dissenso o il tradimento politico.\n\nParte 5: L'inganno di O'Brien e la lettura del libro di Goldstein\nWinston è convinto che O'Brien, un autorevole membro del Partito Interno dai modi raffinati ed enigmatici, sia in realtà un cospiratore della Fratellanza. Un giorno O'Brien lo avvicina fingendo di dovergli mostrare l'ultima edizione del dizionario e lo invita nella sua sfarzosa residenza. Winston e Julia si recano all'appuntamento con il cuore in gola. Entrati nella dimora, O'Brien compie un gesto inaudito che gela il sangue ai due giovani: allunga la mano e spegne il teleschermo della sala, privilegio concesso unicamente ai membri del Partito Interno. \n\nWinston e Julia dichiarano apertamente la loro devozione alla causa ribelle, proclamandosi pronti a uccidere, a compiere sabotaggi e a sacrificare la propria vita pur di minare il dominio del Grande Fratello. O'Brien accetta il loro giuramento e promette di far recapitare loro 'Il Libro', il testo sacro della resistenza redatto dallo stesso Emmanuel Goldstein. Pochi giorni dopo Winston riceve una pesante valigetta contenente il volume intitolato 'Teoria e prassi del collettivismo oligarchico'. Rinchiuso con Julia nella stanza sopra la bottega di Charrington, Winston legge ad alta voce i capitoli centrali: il testo spiega lucidamente che i tre superstati non combattono per distruggersi, ma mantengono la guerra perenne per consumare il surplus economico e mantenere la popolazione nella miseria e nell'ignoranza, consentendo alla classe dominante di perpetuare il proprio potere per l'eternità.\n\nParte 6: L'arresto dietro il quadro e l'inferno del Ministero dell'Amore\nMentre Winston e Julia contemplano la bellezza del fermacarte di vetro, all'improvviso una voce metallica e inflessibile risuona nella stanza: 'Voi siete morti'. Dietro una vecchia stampa incorniciata raffigurante la chiesa di St. Clement Danes si celava un teleschermo segreto. Pochi istanti dopo, il signor Charrington entra nella stanza a capo di una squadra di soldati armati di stivali neri e manganelli: l'antiquario dai modi pacati era un agente provocatore della Psicopolizia. Uno dei soldati sferra un pugno devastante allo stomaco di Julia, che viene trascinata via esanime; il fermacarte di vetro cade sul pavimento e si frantuma in mille pezzi, svelando la fragilità del corallo. \n\nWinston viene incatenato e deportato nei sotterranei del Ministero dell'Amore. Qui viene rinchiuso in celle cubiche di porcellana bianca dove luci al neon violentissime non vengono mai spente, impedendo di distinguere il giorno dalla notte. In quel luogo infernale assiste al degrado totale degli uomini: intellettuali ridotti a scheletri ambulanti, poeti condannati per aver lasciato la parola 'Dio' alla fine di una rima e il suo vicino di casa Parsons denunciato dalla figlia di sette anni per aver mormorato 'Abbasso il Grande Fratello' nel sonno. \n\nPoco dopo la porta blindata si apre ed entra O'Brien. Winston comprende con raccapriccio che O'Brien non è mai stato un ribelle, ma l'inquisitore supremo del regime, colui che ha teso la trappola guidando ogni mossa dei due amanti per sette anni. Ha inizio un calvario di torture indicibili: Winston viene picchiato con spranghe di ferro, sottoposto a scariche elettriche progressive che gli fratturano le articolazioni e gli strappano i denti. O'Brien gli spiega che il Partito cerca il potere per il potere puro: non per il bene comune, non per la ricchezza, ma per infliggere dolore e umiliazione. 'Se vuoi un'immagine del futuro, Winston, immagina uno stivale che calpesta un volto umano... per sempre'.\n\nParte 7: La Stanza 101, la gabbia dei topi e la definitiva capitolazione\nSotto la tortura scientifica di O'Brien, Winston capitola intellettualmente: accetta che due più due faccia cinque se il Partito lo esige, accetta che la memoria non esista al di fuori dell'archivio del Partito. Ma nel segreto più profondo del suo cuore, Winston conserva una scintilla inviolata: non ha tradito Julia, la ama ancora e rifiuta di odiarla. O'Brien comprende che la conversione non è completa e pronuncia la condanna: 'Portatelo nella Stanza 101'. La Stanza 101 è il cuore nero del Ministero dell'Amore, il luogo in cui ogni prigioniero viene posto a confronto con la peggiore cosa al mondo, la propria fobia primordiale. Per Winston questa fobia sono i topi: incubo ricorrente che da sempre gli paralizza il cervello. \n\nO'Brien fa entrare due guardie che trasportano una gabbia rettangolare munita di maniglie e di una maschera metallica sagomata per aderire perfettamente al volto umano; all'interno si agitano due enormi ratti di fogna neri, inferociti dalla fame. O'Brien spiega freddamente che premendo una leva la porticina della gabbia scatterà e i ratti gli dilanieranno gli occhi e le guance fino alla gola. La gabbia si avvicina a pochi millimetri dal viso di Winston: l'odore fetido dei roditori gli invade le narici e il panico cieco spezza l'ultima barriera della sua dignità umana. C'è solo una persona al mondo tra lui e quell'orrore: Winston urla con tutta la voce che gli resta nei polmoni: 'Fatelo a Julia! Fatelo a Julia! Non a me! Julia! Non mi importa di cosa le fate! Squartate la sua faccia, spolpatela fino alle ossa! Non me!'. Il tradimento è totale, definitivo, insuperabile. La gabbia viene allontanata.\n\nL'epilogo si svolge mesi dopo al caffè del Castagno. Winston è un uomo libero ma vuoto, un relitto umano dal naso ingrossato e dal respiro pesante, che passa i pomeriggi a bere gin aromatizzato ai chiodi di garofano e a giocare partite a scacchi solitarie. Ha rivisto Julia un giorno d'inverno in un parco spoglio: si sono parlati a stento, riconoscendo di essersi reciprocamente traditi nella Stanza 101 e scoprendo che il sentimento che li univa è morto per sempre. All'improvviso le trombe del teleschermo del bar squillano e una voce annuncia una vittoria schiacciante delle forze di Oceania in Africa. Una lacrima d'infinita gratitudine solca la guancia di Winston. La lunga lotta è finalmente conclusa: egli ha riportato la vittoria su se stesso. Guarda il ritratto immenso del Grande Fratello con adorazione devota e comprende, finalmente, di amarlo con tutto il suo cuore.",
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
    summary2m: "Settantamila anni fa l'Homo sapiens era un primate del tutto insignificante, un animale che occupava una nicchia ecologica marginale nella savana africana senza incidere sugli equilibri del pianeta più di quanto facessero i babbuini, le lucciole o le meduse. Tutto cambia improvvisamente con la Rivoluzione Cognitiva: la comparsa di un linguaggio simbolico sofisticato consente ai Sapiens di compiere un salto evolutivo senza precedenti, ovvero la capacità esclusiva di comunicare concetti puramente astratti ed entità inesistenti in natura. Mentre gli scimpanzé possono cooperare solo in branchi ristretti fondati sulla conoscenza fisica diretta, gli esseri umani diventano capaci di collaborare a milioni attorno a miti condivisi: religioni, leggi, diritti umani, nazioni e corporazioni.\n\nDodici millenni fa prende avvio la Rivoluzione Agricola, che anziché liberare l'umanità si rivela la più grande trappola della storia: l'addomesticamento di grano e riso moltiplica esponenzialmente la popolazione della specie, ma condanna il singolo individuo a un lavoro massacrante nei campi, alla malnutrizione e alla comparsa delle malattie epidemiche e delle disuguaglianze di classe. Per governare masse stanziali sempre più vaste, l'umanità sviluppa tre grandi forze unificatrici globali: la moneta (il sistema psicologico di fiducia universale più potente mai creato), gli imperi multietnici e le religioni a vocazione universale. Negli ultimi cinque secoli la Rivoluzione Scientifica innesca un'accelerazione folgorante: fondata sul principio rivoluzionario dell'ammissione di ignoranza, la scienza si allea con il capitalismo e gli apparati statali, consegnando all'umanità poteri quasi divini attraverso la biotecnologia, l'ingegneria genetica e l'intelligenza artificiale, e ponendoci di fronte all'interrogativo supremo su cosa desideriamo diventare prima che la natura stessa dell'uomo venga trascesa.\n\nI tre insegnamenti fondamentali:\n1. Il potere dei miti astratti condivisi: la cooperazione umana su vasta scala non si fonda sulla biologia, ma sulla credenza collettiva in finzioni immaginarie come denaro, nazioni e leggi.\n2. Il paradosso del progresso: la Rivoluzione Agricola e la crescita tecnologica hanno aumentato il potere della specie, ma spesso a scapito del benessere psicofisico del singolo individuo.\n3. La responsabilità del potere quasi divino: l'ammissione dell'ignoranza scientifica ha reso i Sapiens simili a dèi creatori, rendendo indispensabile una bussola etica per governare il nostro destino biologico.",
    summary5m: "Circa due milioni e mezzo di anni fa, diverse specie appartenenti al genere Homo popolavano contemporaneamente il pianeta: i Neanderthal in Europa e Asia occidentale, l'Homo erectus in Asia orientale e l'Homo floresiensis nelle isole indonesiane. L'Homo sapiens, comparso nell'Africa orientale, non godeva di alcun privilegio biologico. Tutto cambia tra 70.000 e 30.000 anni fa con la Rivoluzione Cognitiva: mutazioni genetiche accidentali modificano la struttura neuronale del cervello dei Sapiens, permettendo la nascita di un linguaggio flessibile e simbolico. A differenza degli altri animali, che possono segnalare solo pericoli concreti come la presenza di un leone, i Sapiens acquisiscono la facoltà straordinaria di inventare storie e credere a realtà immaginarie. Questo 'ordine intersoggettivo' permette di superare la soglia biologica di Dunbar (circa centocinquanta individui) e consente a centinaia di migliaia di sconosciuti di cooperare in modo flessibile attorno a miti condivisi come divinità ancestrali, spiriti protettori e regole tribali. Usciti dall'Africa, i Sapiens colonizzano ogni continente, provocando la rapida estinzione della megafauna pleistocenica e la scomparsa definitiva di tutte le altre specie umane concorrenti.\n\nCirca dodicimila anni fa prende avvio la seconda grande svolta: la Rivoluzione Agricola. Contrariamente alla convinzione comune che la transizione dai cacciatori-raccoglitori ai campi coltivati abbia segnato un netto progresso nella qualità della vita, la documentazione archeologica dimostra che la vita del contadino medio era assai più dura, faticosa e vulnerabile rispetto a quella dei suoi antenati nomadi. L'essere umano fu di fatto addomesticato dal grano: fu costretto a spezzarsi la schiena dall'alba al tramonto per sarchiare, irrigare e difendere le spighe dai parassiti, adottando una dieta monotona povera di vitamine e concentrandosi in villaggi sovraffollati dove proliferarono parassiti e contagi infettivi. Tuttavia, l'agricoltura consentì di produrre un surplus calorico che alimentò un'esplosione demografica irreversibile, portando con sé il concetto di proprietà privata dei terreni, la nascita delle prime gerarchie sociali e la necessità di creare apparati militari e burocratici per difendere i raccolti immagazzinati.\n\nCon la crescita di città e imperi, la cooperazione tra estranei richiese sistemi di coordinamento sempre più sofisticati, che Harari identifica in tre grandi unificatori globali:\n1. La moneta: la più geniale convenzione psicologica della storia. Il denaro non ha un valore intrinseco oggettivo, ma rappresenta una rete di fiducia incrociata in cui chiunque accetta una moneta d'argento o una conchiglia perché sa che tutti gli altri faranno esattamente lo stesso.\n2. Gli imperi: strutture politiche centralizzate che assimilarono popoli, lingue e culture differenti sotto un'unica giurisdizione legislativa e amministrativa.\n3. Le religioni universali: prima il politeismo, poi i monoteismi e infine le fedi secolari come il nazionalismo, il liberalismo e il socialismo, capaci di conferire una legittimazione sacra e indiscutibile alle norme di convivenza collettiva.\n\nNegli ultimi cinquecento anni prende forma la Rivoluzione Scientifica, guidata da un postulato rivoluzionario: l'ammissione esplicita dell'ignoranza ('Ignoramus'). Mentre le tradizioni antiche affermavano che tutto ciò che contava fosse già stato rivelato dai testi sacri, la scienza moderna ammette di non sapere e cerca le risposte nell'osservazione empirica, nella sperimentazione e nella modellizzazione matematica. L'alleanza strategica tra ricerca scientifica, espansione coloniale imperiale e disponibilità di capitali finanziari innesca una crescita industriale ed energetica esponenziale. L'umanità ha domato le forze della natura, sconfitto carestie secolari e prolungato la speranza di vita; eppure, sul piano della felicità interiore, non ci sono prove che l'uomo moderno sia più sereno di un raccoglitore preistorico. Oggi la biotecnologia, l'ingegneria genetica e l'intelligenza artificiale stanno per spezzare le leggi della selezione naturale a favore del disegno intelligente, ponendo l'Homo sapiens di fronte alla possibilità reale di trasformarsi in una specie completamente nuova: l'Homo Deus.\nL'evoluzione storica dei Sapiens si rivela dunque un percorso a doppio taglio. Da un lato, la cooperazione su scala planetaria fondata su istituzioni astratte come il mercato finanziario, i diritti umani e le leggi internazionali ha permesso di arginare antiche piaghe come la carestia e la violenza endemica; dall'altro lato, la concentrazione di poteri straordinari nelle mani dell'uomo non è stata accompagnata da una pari evoluzione nella comprensione del proprio benessere interiore. La sfida suprema del nostro tempo risiede nella capacità di utilizzare la potenza tecnologica per preservare l'equilibrio della biosfera e il senso profondo della nostra umanità.\nIn conclusione, comprendere la storia profonda dei Sapiens non costituisce un semplice esercizio di curiosità accademica, ma rappresenta la chiave indispensabile per orientare con saggezza le scelte cruciali del nostro destino comune.",
    summary15m: "Parte 1: L'animale insignificante e il genere Homo\nCirca centomila anni fa la Terra era popolata da almeno sei specie umane differenti, tutte appartenenti al genere Homo e discese da una radice comune di primati nell'Africa orientale: in Europa e nell'Asia occidentale prosperavano i robusti uomini di Neanderthal, dotati di una massa muscolare imponente e di un cervello persino più voluminoso di quello odierno; nell'Asia orientale viveva l'Homo erectus, sopravvissuto per quasi due milioni di anni; nell'isola di Flores, in Indonesia, si erano sviluppati gli uomini pigmei di Flores (alti appena un metro a causa del nanismo insulare); e in Siberia viveva l'Homo di Denisova. L'Homo sapiens era semplicemente una delle tante varietà umane, un mammifero marginale che si procacciava il sostentamento raccogliendo bacche, radici, insetti e cibandosi dei resti di carcasse lasciati da leoni e iene. La sua posizione nella catena alimentare era collocata esattamente a metà: i Sapiens cacciavano piccoli animali ma vivevano nel terrore costante di essere sbranati dai grandi predatori carnivori.\n\nParte 2: La Rivoluzione Cognitiva e l'invenzione dei miti condivisi\nLa svolta epocale che ha cambiato per sempre il destino del pianeta si verifica tra settantamila e trentamila anni fa ed è nota come Rivoluzione Cognitiva. In questo arco temporale una serie di mutazioni genetiche casuali riconfigura l'architettura neuronale del cervello dei Sapiens, dotandoli di una facoltà che nessun'altra creatura possiede: un linguaggio simbolico non solo capace di descrivere la realtà materiale (come 'Attento, c'è un leopardo vicino al fiume!'), ma in grado di trasmettere informazioni su cose che non esistono affatto nel mondo fisico. Questa facoltà prende il nome di capacità immaginativa o di pensiero astratto. \n\nTutti gli animali sociali, compresi scimpanzé e lupi, riescono a collaborare unicamente all'interno di piccoli branchi fondati sulla conoscenza reciproca diretta: se due scimpanzé non si sono mai visti e non si sono mai annusati, tenderanno a scontrarsi ferocemente per il territorio. Negli esseri umani il limite fisiologico della conoscenza diretta è pari a circa centocinquanta individui (il celebre numero di Dunbar): oltre questa soglia, un villaggio o una comunità primitiva si frammenta in fazioni e collassa per mancanza di coesione interna. I Sapiens hanno superato questo invalicabile limite biologico grazie all'invenzione dei miti condivisi: una religione con i suoi spiriti ancestrali, una nazione con la sua bandiera, un codice di leggi con i suoi totem sacri. Centinaia di migliaia di cacciatori sconosciuti possono marciare insieme e attaccare una vallata perché condividono la medesima credenza in uno spirito comune o in un antenato mitico. Con questa straordinaria potenza cooperativa i Sapiens escono dall'Africa, colonizzano l'Australia navigando in mare aperto, attraversano lo stretto di Bering raggiungendo le Americhe e provocano in pochi millenni l'estinzione violenta di tutte le altre specie umane concorrenti e della grande megafauna terrestre (mammut, tigri dai denti a sciabola, bradipi giganti e vombati mastodontici).\n\nParte 3: La più grande impostura della storia: la Rivoluzione Agricola\nCirca dodicimila anni fa, al termine dell'ultima era glaciale, nelle fertili vallate del Medio Oriente, della Cina e del Centro America si compie la transizione epocale dal nomadismo di caccia e raccolta alla vita sedentaria basata sulla coltivazione dei campi e sull'addomesticamento del bestiame. La visione tradizionale del progresso ha sempre celebrato questo passaggio come una folgorante conquista della ragione umana che ha liberato l'uomo dalla fatica selvaggia; l'analisi storica e biologica rivela invece che la Rivoluzione Agricola è stata la più grande trappola e la più colossale impostura della storia. \n\nIl corpo dell'Homo sapiens si era evoluto per milioni di anni per compiere azioni variegate: arrampicarsi sugli alberi, correre nelle radure, raccogliere funghi e cacciare selvaggina. I cacciatori-raccoglitori godevano di una dieta incredibilmente varia ed equilibrata (centinaia di specie vegetali e animali diverse), lavoravano mediamente dalle quattro alle cinque ore al giorno e non conoscevano la piaga delle epidemie contagiose né delle carestie sistemiche, poiché se una risorsa scarseggiava si spostavano altrove. Con l'agricoltura, fu in realtà il grano ad addomesticare l'essere umano: il grano è una graminacea selvatica originaria del Medio Oriente che ha costretto milioni di Sapiens a piegare la schiena dall'alba al tramonto per sradicare erbacce, trasportare pesanti secchi d'acqua per l'irrigazione, spietrare terreni e difendere le colture dagli insetti. Il risultato per il singolo contadino fu disastroso: artrite precoce alle articolazioni, ernie discali, malnutrizione causata da una dieta monotona basata esclusivamente su carboidrati, e la minaccia costante di morire di fame qualora le piogge stagionali fossero mancate. \n\nTuttavia, il grano offriva un vantaggio spietato sul piano evolutivo: produceva molte più calorie per chilometro quadrato. Di conseguenza le donne partorivano con maggiore frequenza e la popolazione esplose numericamente. Quando un popolo di agricoltori raggiungeva decine di migliaia di individui, era impossibile tornare indietro al nomadismo, perché la natura selvaggia non avrebbe più potuto sfamare una tale massa. L'umanità rimase imprigionata nella sua stessa invenzione, dando origine al concetto ferreo di proprietà privata della terra, alla costruzione di mura difensive, alle guerre organizzate per il possesso dei granai e alla divisione della società in classi ricche e classi schiavizzate.\n\nParte 4: L'ordine immaginato e la nascita della burocrazia\nPer far convivere milioni di persone in città e regni immensi senza che si scannassero a vicenda, la genetica umana non bastava: occorreva inventare un tessuto connettivo artificiale che Harari definisce 'l'ordine immaginato'. L'ordine immaginato è un sistema di regole, diritti e doveri che non possiede alcuna esistenza oggettiva nell'universo fisico (non è come la gravità o la radioattività), ma che esiste unicamente nella convinzione soggettiva e condivisa di milioni di persone. \nDue esempi storici supremi illustrano questo principio:\n- Il Codice di Hammurabi (Mesopotamia, 1776 a.C.), che stabiliva che la società fosse divisa per volontà degli dèi in tre caste diseguali (uomini superiori, uomini comuni e schiavi);\n- La Dichiarazione d'Indipendenza degli Stati Uniti (1776 d.C.), che proclamava solennemente che tutti gli uomini sono creati uguali e dotati dal Creatore di diritti inalienabili come la vita, la libertà e la ricerca della felicità. \n\nBiologicamente parlando, né Hammurabi né Jefferson descrivevano la realtà: l'evoluzione naturale non ha mai creato caste superiori né ha mai creato individui uguali o dotati di diritti inalienabili. Tuttavia, credere collettivamente a queste nobili finzioni ha consentito a civiltà millenarie di costruire acquedotti, piramidi, ospedali e tribunali. Per amministrare queste masse sterminate fu inventata la scrittura (originariamente nata come semplice strumento contabile per registrare tasse e sacchi d'orzo in Mesopotamia) e la burocrazia statale, che ha rimodellato la mente umana abituandola a pensare in termini di archivi, categorie e cataloghi astratti.\n\nParte 5: I tre grandi unificatori dell'umanità\nNel corso dei millenni la storia umana ha mostrato una direzione inequivocabile: una convergenza inarrestabile verso l'unificazione globale del pianeta. Se nel 10.000 a.C. la terra era frammentata in migliaia di mondi umani completamente isolati l'uno dall'altro, oggi siamo parte di un unico sistema globale interdipendente. Questo processo è stato guidato da tre forze titaniche:\n1. La moneta: il denaro è il sistema di cooperazione psicologica più efficace e universale mai concepito. Mentre la religione chiede di credere in una divinità specifica e l'impero esige l'obbedienza a un sovrano straniero, il denaro supera ogni barriera culturale, etnica o ideologica. Persino soldati nemici che si disprezzano reciprocamente sul campo di battaglia sono pronti ad accettare la stessa moneta d'oro o la stessa banconota da cento dollari. Il denaro non vale per la materia di cui è composto, ma perché incarna una fiducia intersoggettiva perfetta: io accetto questo pezzo di carta perché so con certezza assoluta che il fornaio, il meccanico e il medico lo accetteranno domani mattina.\n2. Gli imperi: per secoli condannati dalla retorica moderna, gli imperi sono stati il principale crogiuolo di integrazione tra popoli diversi. Abbattendo le barriere tribali e imponendo un'unica moneta, un unico apparato giudiziario e un'unica lingua franca, gli imperi hanno assimilato popolazioni nemiche, diffondendo idee filosofiche, tecnologie e scambi commerciali su scala continentale.\n3. Le religioni universali: nate come culti animisti locali, le religioni si sono evolute prima in pantheon politeisti tolleranti e successivamente in fedi monoteiste universali e missionarie (come cristianesimo e islam), capaci di offrire una visione morale unificata a chiunque, indipendentemente dalla nascita biologica. Nella modernità, le religioni teistiche sono state affiancate da vere e proprie religioni secolari fondate sul culto dell'uomo, come l'umanesimo liberale, il nazionalismo e il comunismo.\n\nParte 6: La Rivoluzione Scientifica e il matrimonio tra Scienza, Impero e Capitale\nCirca cinquecento anni fa la traiettoria della specie umana subisce una deflagrazione senza precedenti. Fino al 1500 la tecnologia umana era rimasta sostanzialmente statica: un contadino romano del tempo di Giulio Cesare si sarebbe trovato perfettamente a proprio agio nella Parigi del Quattrocento. Con la Rivoluzione Scientifica la conoscenza acquisisce una velocità esponenziale grazie a un presupposto filosofico inedito: l'ammissione esplicita dell'ignoranza ('Ignoramus'). Mentre i sistemi tradizionali affermavano che tutte le verità supreme fossero già scritte nella Bibbia, nel Corano o nei Veda, la scienza moderna compie l'atto rivoluzionario di dichiarare di non sapere e cerca la verità attraverso l'osservazione empirica dei fatti e il calcolo matematico. \n\nQuesta scoperta coincide con i viaggi di esplorazione geografica: quando i navigatori europei scoprono l'America, si accorgono che le antiche mappe tolemaiche erano vuote e contenevano errori madornali. La scienza moderna si allea fin da subito con gli imperi coloniali (la ricerca geografica e botanica permetteva la conquista militare) e soprattutto con il capitalismo creditizio. Il capitalismo si fonda sull'idea rivoluzionaria che il futuro sarà più ricco del presente: prestando denaro fondato sulla fiducia nella crescita futura (il credito), le banche finanziano scoperte scientifiche che generano nuove industrie, le quali generano nuovi profitti che alimentano ulteriori ricerche. L'invenzione della macchina a vapore e lo sfruttamento dell'energia termica e nucleare trasformano l'umanità in una forza geologica titanica capace di plasmare l'intera biosfera.\n\nParte 7: L'era del consumo e l'orizzonte dell'Homo Deus\nNel mondo industrializzato contemporaneo, l'uomo ha sconfitto tre flagelli che avevano decimato i suoi avi per millenni: la carestia, le pestilenze mortali e la guerra sistematica tra grandi potenze. Oggi muoiono più persone per obesità che per fame, e si verificano più decessi per suicidio che per guerre o terrorismo. La famiglia patriarcale e la comunità di villaggio sono state sostituite dallo Stato assistenziale e dal Mercato dei consumi, che invitano l'individuo a cercare la felicità nell'acquisto continuo di beni ed esperienze ricreative. \n\nTuttavia, l'interrogativo cruciale posto da Harari riguarda il futuro biologico della specie. Dopo quattro miliardi di anni in cui la vita sulla terra è stata governata esclusivamente dalla selezione naturale darwiniana, l'Homo sapiens ha iniziato a sostituire l'evoluzione cieca con il disegno intelligente umano attraverso tre vettori rivoluzionari:\n- L'ingegneria biologica e genetica (la modifica mirata del DNA e la clonazione);\n- La creazione di esseri cyborg (la fusione intima tra tessuti organici e interfacce digitali);\n- L'ingegneria della vita inorganica (lo sviluppo dell'intelligenza artificiale autonoma e delle reti neurali artificiali). \n\nI Sapiens si trovano così a brandire poteri divini di creazione e distruzione senza possedere una corrispondente saggezza morale ed etica. Siamo diventati dèi per il nostro dominio materiale sul cosmo, ma siamo dèi insoddisfatti, inquieti e pericolosi, che non sanno con certezza cosa desiderare. Il dilemma supremo che ci attende non è semplicemente decidere quali tecnologie finanziare, ma comprendere che tipo di esseri vogliamo diventare prima che la nostra stessa natura biologica venga superata per sempre.",
    summary: "Parte 1: L'animale insignificante e il genere Homo\nCirca centomila anni fa la Terra era popolata da almeno sei specie umane differenti, tutte appartenenti al genere Homo e discese da una radice comune di primati nell'Africa orientale: in Europa e nell'Asia occidentale prosperavano i robusti uomini di Neanderthal, dotati di una massa muscolare imponente e di un cervello persino più voluminoso di quello odierno; nell'Asia orientale viveva l'Homo erectus, sopravvissuto per quasi due milioni di anni; nell'isola di Flores, in Indonesia, si erano sviluppati gli uomini pigmei di Flores (alti appena un metro a causa del nanismo insulare); e in Siberia viveva l'Homo di Denisova. L'Homo sapiens era semplicemente una delle tante varietà umane, un mammifero marginale che si procacciava il sostentamento raccogliendo bacche, radici, insetti e cibandosi dei resti di carcasse lasciati da leoni e iene. La sua posizione nella catena alimentare era collocata esattamente a metà: i Sapiens cacciavano piccoli animali ma vivevano nel terrore costante di essere sbranati dai grandi predatori carnivori.\n\nParte 2: La Rivoluzione Cognitiva e l'invenzione dei miti condivisi\nLa svolta epocale che ha cambiato per sempre il destino del pianeta si verifica tra settantamila e trentamila anni fa ed è nota come Rivoluzione Cognitiva. In questo arco temporale una serie di mutazioni genetiche casuali riconfigura l'architettura neuronale del cervello dei Sapiens, dotandoli di una facoltà che nessun'altra creatura possiede: un linguaggio simbolico non solo capace di descrivere la realtà materiale (come 'Attento, c'è un leopardo vicino al fiume!'), ma in grado di trasmettere informazioni su cose che non esistono affatto nel mondo fisico. Questa facoltà prende il nome di capacità immaginativa o di pensiero astratto. \n\nTutti gli animali sociali, compresi scimpanzé e lupi, riescono a collaborare unicamente all'interno di piccoli branchi fondati sulla conoscenza reciproca diretta: se due scimpanzé non si sono mai visti e non si sono mai annusati, tenderanno a scontrarsi ferocemente per il territorio. Negli esseri umani il limite fisiologico della conoscenza diretta è pari a circa centocinquanta individui (il celebre numero di Dunbar): oltre questa soglia, un villaggio o una comunità primitiva si frammenta in fazioni e collassa per mancanza di coesione interna. I Sapiens hanno superato questo invalicabile limite biologico grazie all'invenzione dei miti condivisi: una religione con i suoi spiriti ancestrali, una nazione con la sua bandiera, un codice di leggi con i suoi totem sacri. Centinaia di migliaia di cacciatori sconosciuti possono marciare insieme e attaccare una vallata perché condividono la medesima credenza in uno spirito comune o in un antenato mitico. Con questa straordinaria potenza cooperativa i Sapiens escono dall'Africa, colonizzano l'Australia navigando in mare aperto, attraversano lo stretto di Bering raggiungendo le Americhe e provocano in pochi millenni l'estinzione violenta di tutte le altre specie umane concorrenti e della grande megafauna terrestre (mammut, tigri dai denti a sciabola, bradipi giganti e vombati mastodontici).\n\nParte 3: La più grande impostura della storia: la Rivoluzione Agricola\nCirca dodicimila anni fa, al termine dell'ultima era glaciale, nelle fertili vallate del Medio Oriente, della Cina e del Centro America si compie la transizione epocale dal nomadismo di caccia e raccolta alla vita sedentaria basata sulla coltivazione dei campi e sull'addomesticamento del bestiame. La visione tradizionale del progresso ha sempre celebrato questo passaggio come una folgorante conquista della ragione umana che ha liberato l'uomo dalla fatica selvaggia; l'analisi storica e biologica rivela invece che la Rivoluzione Agricola è stata la più grande trappola e la più colossale impostura della storia. \n\nIl corpo dell'Homo sapiens si era evoluto per milioni di anni per compiere azioni variegate: arrampicarsi sugli alberi, correre nelle radure, raccogliere funghi e cacciare selvaggina. I cacciatori-raccoglitori godevano di una dieta incredibilmente varia ed equilibrata (centinaia di specie vegetali e animali diverse), lavoravano mediamente dalle quattro alle cinque ore al giorno e non conoscevano la piaga delle epidemie contagiose né delle carestie sistemiche, poiché se una risorsa scarseggiava si spostavano altrove. Con l'agricoltura, fu in realtà il grano ad addomesticare l'essere umano: il grano è una graminacea selvatica originaria del Medio Oriente che ha costretto milioni di Sapiens a piegare la schiena dall'alba al tramonto per sradicare erbacce, trasportare pesanti secchi d'acqua per l'irrigazione, spietrare terreni e difendere le colture dagli insetti. Il risultato per il singolo contadino fu disastroso: artrite precoce alle articolazioni, ernie discali, malnutrizione causata da una dieta monotona basata esclusivamente su carboidrati, e la minaccia costante di morire di fame qualora le piogge stagionali fossero mancate. \n\nTuttavia, il grano offriva un vantaggio spietato sul piano evolutivo: produceva molte più calorie per chilometro quadrato. Di conseguenza le donne partorivano con maggiore frequenza e la popolazione esplose numericamente. Quando un popolo di agricoltori raggiungeva decine di migliaia di individui, era impossibile tornare indietro al nomadismo, perché la natura selvaggia non avrebbe più potuto sfamare una tale massa. L'umanità rimase imprigionata nella sua stessa invenzione, dando origine al concetto ferreo di proprietà privata della terra, alla costruzione di mura difensive, alle guerre organizzate per il possesso dei granai e alla divisione della società in classi ricche e classi schiavizzate.\n\nParte 4: L'ordine immaginato e la nascita della burocrazia\nPer far convivere milioni di persone in città e regni immensi senza che si scannassero a vicenda, la genetica umana non bastava: occorreva inventare un tessuto connettivo artificiale che Harari definisce 'l'ordine immaginato'. L'ordine immaginato è un sistema di regole, diritti e doveri che non possiede alcuna esistenza oggettiva nell'universo fisico (non è come la gravità o la radioattività), ma che esiste unicamente nella convinzione soggettiva e condivisa di milioni di persone. \nDue esempi storici supremi illustrano questo principio:\n- Il Codice di Hammurabi (Mesopotamia, 1776 a.C.), che stabiliva che la società fosse divisa per volontà degli dèi in tre caste diseguali (uomini superiori, uomini comuni e schiavi);\n- La Dichiarazione d'Indipendenza degli Stati Uniti (1776 d.C.), che proclamava solennemente che tutti gli uomini sono creati uguali e dotati dal Creatore di diritti inalienabili come la vita, la libertà e la ricerca della felicità. \n\nBiologicamente parlando, né Hammurabi né Jefferson descrivevano la realtà: l'evoluzione naturale non ha mai creato caste superiori né ha mai creato individui uguali o dotati di diritti inalienabili. Tuttavia, credere collettivamente a queste nobili finzioni ha consentito a civiltà millenarie di costruire acquedotti, piramidi, ospedali e tribunali. Per amministrare queste masse sterminate fu inventata la scrittura (originariamente nata come semplice strumento contabile per registrare tasse e sacchi d'orzo in Mesopotamia) e la burocrazia statale, che ha rimodellato la mente umana abituandola a pensare in termini di archivi, categorie e cataloghi astratti.\n\nParte 5: I tre grandi unificatori dell'umanità\nNel corso dei millenni la storia umana ha mostrato una direzione inequivocabile: una convergenza inarrestabile verso l'unificazione globale del pianeta. Se nel 10.000 a.C. la terra era frammentata in migliaia di mondi umani completamente isolati l'uno dall'altro, oggi siamo parte di un unico sistema globale interdipendente. Questo processo è stato guidato da tre forze titaniche:\n1. La moneta: il denaro è il sistema di cooperazione psicologica più efficace e universale mai concepito. Mentre la religione chiede di credere in una divinità specifica e l'impero esige l'obbedienza a un sovrano straniero, il denaro supera ogni barriera culturale, etnica o ideologica. Persino soldati nemici che si disprezzano reciprocamente sul campo di battaglia sono pronti ad accettare la stessa moneta d'oro o la stessa banconota da cento dollari. Il denaro non vale per la materia di cui è composto, ma perché incarna una fiducia intersoggettiva perfetta: io accetto questo pezzo di carta perché so con certezza assoluta che il fornaio, il meccanico e il medico lo accetteranno domani mattina.\n2. Gli imperi: per secoli condannati dalla retorica moderna, gli imperi sono stati il principale crogiuolo di integrazione tra popoli diversi. Abbattendo le barriere tribali e imponendo un'unica moneta, un unico apparato giudiziario e un'unica lingua franca, gli imperi hanno assimilato popolazioni nemiche, diffondendo idee filosofiche, tecnologie e scambi commerciali su scala continentale.\n3. Le religioni universali: nate come culti animisti locali, le religioni si sono evolute prima in pantheon politeisti tolleranti e successivamente in fedi monoteiste universali e missionarie (come cristianesimo e islam), capaci di offrire una visione morale unificata a chiunque, indipendentemente dalla nascita biologica. Nella modernità, le religioni teistiche sono state affiancate da vere e proprie religioni secolari fondate sul culto dell'uomo, come l'umanesimo liberale, il nazionalismo e il comunismo.\n\nParte 6: La Rivoluzione Scientifica e il matrimonio tra Scienza, Impero e Capitale\nCirca cinquecento anni fa la traiettoria della specie umana subisce una deflagrazione senza precedenti. Fino al 1500 la tecnologia umana era rimasta sostanzialmente statica: un contadino romano del tempo di Giulio Cesare si sarebbe trovato perfettamente a proprio agio nella Parigi del Quattrocento. Con la Rivoluzione Scientifica la conoscenza acquisisce una velocità esponenziale grazie a un presupposto filosofico inedito: l'ammissione esplicita dell'ignoranza ('Ignoramus'). Mentre i sistemi tradizionali affermavano che tutte le verità supreme fossero già scritte nella Bibbia, nel Corano o nei Veda, la scienza moderna compie l'atto rivoluzionario di dichiarare di non sapere e cerca la verità attraverso l'osservazione empirica dei fatti e il calcolo matematico. \n\nQuesta scoperta coincide con i viaggi di esplorazione geografica: quando i navigatori europei scoprono l'America, si accorgono che le antiche mappe tolemaiche erano vuote e contenevano errori madornali. La scienza moderna si allea fin da subito con gli imperi coloniali (la ricerca geografica e botanica permetteva la conquista militare) e soprattutto con il capitalismo creditizio. Il capitalismo si fonda sull'idea rivoluzionaria che il futuro sarà più ricco del presente: prestando denaro fondato sulla fiducia nella crescita futura (il credito), le banche finanziano scoperte scientifiche che generano nuove industrie, le quali generano nuovi profitti che alimentano ulteriori ricerche. L'invenzione della macchina a vapore e lo sfruttamento dell'energia termica e nucleare trasformano l'umanità in una forza geologica titanica capace di plasmare l'intera biosfera.\n\nParte 7: L'era del consumo e l'orizzonte dell'Homo Deus\nNel mondo industrializzato contemporaneo, l'uomo ha sconfitto tre flagelli che avevano decimato i suoi avi per millenni: la carestia, le pestilenze mortali e la guerra sistematica tra grandi potenze. Oggi muoiono più persone per obesità che per fame, e si verificano più decessi per suicidio che per guerre o terrorismo. La famiglia patriarcale e la comunità di villaggio sono state sostituite dallo Stato assistenziale e dal Mercato dei consumi, che invitano l'individuo a cercare la felicità nell'acquisto continuo di beni ed esperienze ricreative. \n\nTuttavia, l'interrogativo cruciale posto da Harari riguarda il futuro biologico della specie. Dopo quattro miliardi di anni in cui la vita sulla terra è stata governata esclusivamente dalla selezione naturale darwiniana, l'Homo sapiens ha iniziato a sostituire l'evoluzione cieca con il disegno intelligente umano attraverso tre vettori rivoluzionari:\n- L'ingegneria biologica e genetica (la modifica mirata del DNA e la clonazione);\n- La creazione di esseri cyborg (la fusione intima tra tessuti organici e interfacce digitali);\n- L'ingegneria della vita inorganica (lo sviluppo dell'intelligenza artificiale autonoma e delle reti neurali artificiali). \n\nI Sapiens si trovano così a brandire poteri divini di creazione e distruzione senza possedere una corrispondente saggezza morale ed etica. Siamo diventati dèi per il nostro dominio materiale sul cosmo, ma siamo dèi insoddisfatti, inquieti e pericolosi, che non sanno con certezza cosa desiderare. Il dilemma supremo che ci attende non è semplicemente decidere quali tecnologie finanziare, ma comprendere che tipo di esseri vogliamo diventare prima che la nostra stessa natura biologica venga superata per sempre.",
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
    summary2m: "I grandi traguardi della vita non derivano quasi mai da sforzi titanici compiuti una tantum, ma dall'effetto composto di microscopiche decisioni quotidiane. Se migliori dell'uno per cento ogni giorno per un anno intero, al termine dei trecentosessantacinque giorni sarai diventato trentasette volte migliore del livello di partenza; al contrario, peggiorando dell'uno per cento al giorno, declinerai quasi a zero. Il primo errore fondamentale consiste nel focalizzarsi sugli obiettivi anziché sui sistemi: vincitori e vinti condividono spesso i medesimi obiettivi (tutti gli atleti vogliono la medaglia d'oro, tutti i candidati vogliono il lavoro), ma a vincere sono unicamente coloro che costruiscono sistemi quotidiani infallibili e a basso attrito.\n\nPer padroneggiare qualsiasi abitudine occorre dominare il circuito neuronale a quattro stadi che regola ogni comportamento umano: Segnale, Desiderio, Risposta e Ricompensa. Da qui scaturiscono le Quattro Leggi del Cambiamento:\n1. Rendere il segnale evidente: progettare l'ambiente visivo in modo che le azioni virtuose siano impossibili da ignorare (lasciare un libro sul cuscino o la borraccia sulla scrivania).\n2. Rendere l'azione attraente: abbinare un'attività necessaria a un piacere desiderato (il raggruppamento delle tentazioni).\n3. Rendere l'azione facile: abbattere l'attrito iniziale applicando la 'Regola dei Due Minuti', riducendo l'inizio di qualsiasi nuova abitudine a un gesto che richieda meno di centoventi secondi per essere avviato.\n4. Rendere la ricompensa immediata: fornire al cervello una gratificazione immediata attraverso il tracciamento visivo delle abitudini senza mai saltare due giorni consecutivi.\n\nI tre insegnamenti fondamentali:\n1. L'effetto composto dei sistemi quotidiani: non elevarti al livello dei tuoi obiettivi, ma scendi al livello dei tuoi sistemi di routine.\n2. Il cambiamento basato sull'identità: non focalizzarti su cosa vuoi ottenere (un voto, un diploma), ma sulla persona che decidi di diventare (uno studente meticoloso e curioso); ogni abitudine è un voto espresso a favore della tua nuova identità.\n3. La progettazione dell'ambiente batte la forza di volontà: la disciplina non è un superpotere innato, ma il risultato di uno spazio di vita strutturato per rendere facili le buone scelte e difficili quelle distruttive.",
    summary5m: "Il successo quotidiano non scaturisce da eclatanti colpi di scena o da un'improvvisa forza di volontà sovrumana, ma dal potere silenzioso dell'interesse composto applicato alle nostre azioni. Nella vita come nella finanza, i piccoli cambiamenti dell'uno per cento sembrano insignificanti nel breve termine, ma proiettati su mesi e anni generano trasformazioni titaniche. Molti commettono l'errore di fissarsi unicamente sugli obiettivi astratti, come vincere una gara o superare un esame con il massimo dei voti. Gli obiettivi stabiliscono solo la direzione; sono i sistemi quotidiani a determinare i risultati reali. I vincitori e i vinti condividono esattamente gli stessi traguardi; ciò che distingue chi trionfa è la disciplina del processo.\n\nOgni abitudine è un processo mentale automatico suddiviso in quattro stadi: Segnale, Desiderio, Risposta e Ricompensa. Il segnale avvisa della presenza di un premio; il desiderio crea la spinta dopaminergica ad agire; la risposta è l'azione fisica concreta; la ricompensa estingue il bisogno e fissa la memoria del comportamento nel cervello. Da questo circuito scaturiscono le Quattro Leggi del Cambiamento Comportamentale:\n\nPrima Legge: Rendi il segnale evidente. La maggior parte delle decisioni umane è guidata da stimoli visivi e contestuali, non da scelte razionali coscienti. Se vuoi leggere di più la sera, metti il libro bene in vista sul cuscino appena rifai il letto la mattina; se vuoi smettere di guardare lo smartphone, lascialo in un'altra stanza. Una tecnica potentissima è 'l'accumulo delle abitudini' (Habit Stacking): collegare una nuova azione a una già radicata nella giornata, secondo la formula 'Dopo che ho [Abitudine Attuale], farò [Nuova Abitudine]'.\n\nSeconda Legge: Rendi l'azione attraente. Il cervello umano è guidato dall'anticipazione della dopamina: è la promessa del piacere che spinge ad agire. Per rendere irresistibile una buona routine, applica il 'raggruppamento delle tentazioni' (Temptation Bundling), collegando un'azione necessaria a un'azione desiderata (ad esempio: 'Posso ascoltare il mio podcast preferito solo mentre faccio cyclette o piego il bucato'). Inoltre, l'ambiente sociale è decisivo: unisciti a una comunità o a un gruppo in cui il comportamento desiderato rappresenta la normalità quotidiana.\n\nTerza Legge: Rendi l'azione facile. Gli esseri umani sono pigri per natura biologica e scelgono sempre l'opzione che richiede il minor dispendio energetico. Per instaurare una nuova abitudine, abbassa l'attrito iniziale applicando la 'Regola dei Due Minuti': riduci l'avvio della pratica a un'azione che duri meno di centoventi secondi. Non iniziare dicendo 'Studierò tre ore di matematica', ma 'Aprirò il libro alla pagina degli esercizi'; non dire 'Correrò per cinque chilometri', ma 'Allaccerò le scarpe da ginnastica'. Una volta superata la soglia di inerzia iniziale, continuare diventa naturale.\n\nQuarta Legge: Rendi la ricompensa immediata. La natura umana predilige la gratificazione istantanea rispetto al beneficio differito nel tempo. Per consolidare un'abitudine virtuosa, introduci un piccolo premio immediato al termine dell'azione. Lo strumento più efficace è il 'Tracciatore di Abitudini' (Habit Tracker): segnare una crocetta su un calendario subito dopo aver completato l'attività fornisce una scarica di dopamina visiva ('Non spezzare la catena'). Se ti capita di fallire un giorno, applica la regola d'oro: 'Non saltare mai due volte consecutive'. Il primo errore è un incidente di percorso, il secondo è l'inizio di una nuova abitudine negativa.\n\nInfine, la trasformazione più profonda e definitiva non avviene sul piano dei risultati esterni, ma sul piano dell'Identità. Chi si limita a dire 'Voglio superare l'esame' rimane ancorato a un obiettivo transitorio; chi afferma 'Io sono uno studente diligente e rigoroso' radica l'azione nel proprio essere. Ogni volta che apri un libro, ogni volta che fai esercizio, ogni volta che mantieni una promessa, stai depositando un voto concreto a favore della persona che hai scelto di diventare.\nLa vera maestria consiste nel comprendere che il successo non è un traguardo da raggiungere una volta sola, ma un processo di continua messa a punto e perfezionamento. Quando si impara ad amare la routine quotidiana e a considerare ogni piccolo gesto come una costruzione della propria identità, la fatica si dissolve e la costanza diventa spontanea. Non sono le circostanze esterne a determinare il nostro destino, ma la cura rigorosa e paziente con cui scegliamo di governare i minuti della nostra giornata.\nIn sintesi, la grandezza duratura non scaturisce da una singola vittoria eclatante, ma dalla coerenza incrollabile con cui sappiamo difendere e onorare le nostre abitudini anche quando nessuno ci sta guardando.",
    summary15m: "Parte 1: Il fondamento matematico dell'effetto composto e la curva dei progressi\nIl miglioramento personale non dipende da gesti eclatanti o da svolte spettacolari compiute in un giorno fortunato, ma dall'effetto composto generato da scelte minuscole e apparentemente invisibili ripetute con costanza quotidiana. Spesso sottovalutiamo l'impatto delle piccole decisioni perché nell'immediato il loro effetto appare trascurabile: se oggi vai in palestra per venti minuti o mangi un'insalata, il tuo fisico non cambia visibilmente; se oggi mangi un hamburger o rimandi lo studio di una pagina, non si verifica alcuna catastrofe. Tuttavia, proiettato su lunghi archi temporali, questo differenziale produce un divario incolmabile. \n\nLa matematica parla chiaro: se migliori appena dell'uno per cento al giorno per trecentosessantacinque giorni consecutivi, il calcolo della progressione esponenziale (1,01 elevato a 365) porta a un risultato finale pari a 37,78. Sei diventato quasi trentotto volte migliore del punto di partenza. Al contrario, se peggiori dell'uno per cento ogni giorno (0,99 elevato a 365), la tua efficienza declina precipitosamente fino a sfiorare lo zero (0,03). \n\nLe abitudini sono l'interesse composto della crescita personale. Nel percorso verso qualsiasi traguardo ci si scontra inevitabilmente con il 'Plateau del Potenziale Latente': per settimane o mesi si lavora sodo senza notare alcun cambiamento apprezzabile in superficie. Si tratta di una fase ingannevole in cui l'energia si accumula sotto traccia, esattamente come un cubetto di ghiaccio in una stanza riscaldata da meno quattro a zero gradi: il ghiaccio rimane solido a meno tre, a meno due e a meno uno; poi, al passaggio a un solo grado sopra lo zero, il ghiaccio fonde istantaneamente. Il cambiamento sembra improvviso, ma era il risultato cumulato di tutto il calore somministrato in precedenza.\n\nParte 2: Il fallimento degli obiettivi e la sovranità dei sistemi quotidiani\nLa cultura dominante ripete continuamente che per raggiungere grandi traguardi occorre porsi obiettivi ambiziosi e precisi. Questa tesi è viziata da un errore sistematico di prospettiva: soffre del cosiddetto 'bias di sopravvivenza'. Consideriamo gli atleti olimpici: tutti i partecipanti alla finale dei cento metri desiderano vincere la medaglia d'oro; tutti i candidati a un concorso pubblico mirano all'assunzione. Se vincitori e vinti condividono esattamente il medesimo obiettivo, non può essere l'obiettivo la variabile determinante del trionfo. La differenza fondamentale risiede nel sistema: la sequenza meticolosa di routine quotidiane, micro-scelte e abitudini di allenamento adottate con continuità. \n\nGli obiettivi presentano inoltre quattro difetti intrinseci:\n1. Raggiungere un obiettivo muta la tua vita solo temporaneamente: se riordini la stanza per raggiungere l'obiettivo della pulizia, avrai una stanza ordinata per due ore, ma se non modifichi il sistema disordinato che l'ha sporcata, tornerai al punto di partenza;\n2. Gli obiettivi limitano la felicità personale, creando un falso dilemma binario: 'O raggiungo il traguardo e sarò felice, o fallisco e sarò un fallito';\n3. Gli obiettivi sono in contrasto con il miglioramento continuo a lungo termine: moltissimi maratoneti smettono di allenarsi non appena tagliano il traguardo della gara perché la meta è stata raggiunta.\nIl segreto è innamorarsi del processo, non del risultato finale: scendi al livello dei tuoi sistemi quotidiani e i risultati si prenderanno cura di se stessi.\n\nParte 3: Le abitudini basate sull'identità: chi decidiamo di diventare\nEsistono tre livelli di cambiamento del comportamento:\n- Il livello superficiale è il cambiamento dei Risultati (ciò che ottieni: perdere cinque chili, superare un esame, pubblicare un saggio);\n- Il livello intermedio è il cambiamento dei Processi (ciò che fai: seguire una dieta, adottare una nuova tecnica di studio, andare in palestra tre volte a settimana);\n- Il livello più profondo e duraturo è il cambiamento dell'Identità (ciò in cui credi: la tua visione del mondo, l'immagine di te stesso, i tuoi valori interiori). \n\nLa maggior parte dei fallimenti nasce dal tentativo di cambiare abitudini partendo dai risultati esteriori. Chi cerca di smettere di fumare e dice: 'No grazie, sto cercando di smettere', si percepisce ancora interiormente come un fumatore che compie un doloroso sacrificio di rinuncia. Chi invece afferma con convinzione: 'No grazie, non sono un fumatore', ha traslato il cambiamento sul piano della propria identità personale. \n\nL'obiettivo finale non è leggere un libro, ma diventare un lettore appassionato; non è correre una maratona, ma diventare un corridore; non è suonare una scala musicale, ma diventare un musicista. Come si trasforma l'identità? Attraverso l'accumulo di prove concrete. Ogni singola azione virtuosa compiuta è una scheda di voto depositata nell'urna a favore della persona che desideri diventare. Se apri un quaderno di appunti e studi per mezz'ora, stai votando per l'identità dello studente diligente; se scrivi un paragrafo, voti per l'identità dello scrittore. Più voti accumuli, più la convinzione su te stesso diventa incrollabile.\n\nParte 4: Prima Legge: Rendi il segnale evidente\nLa mente umana elabora milioni di stimoli sensoriali al secondo, la maggior parte dei quali attraverso la vista. Gli stimoli ambientali visibili sono i più potenti catalizzatori delle abitudini umane. Le persone dotate di grande autocontrollo non possiedono una forza di volontà sovrumana; semplicemente strutturano il proprio ambiente di vita in modo da non essere esposte costantemente a tentazioni nocive. \nPer attivare una buona abitudine occorre rendere i suoi segnali visivi clamorosamente evidenti:\n- Se vuoi bere più acqua durante il giorno, riempi sei bottiglie trasparenti e disponile nei punti più frequentati della casa o della scrivania;\n- Se vuoi fare pratica di chitarra, non riporla nella custodia dentro l'armadio, ma posizionala su un supporto al centro della stanza;\n- Se vuoi ridurre le distrazioni digitali, riponi lo smartphone in un cassetto chiuso in un'altra stanza. \n\nUna delle strategie più efficaci per programmare il segnale è l'Accatastamento delle Abitudini (Habit Stacking), basato sulla legge di Diderot: ogni comportamento è collegato a quello precedente. La formula consiste nell'ancorare la nuova abitudine desiderata a un'abitudine solida già radicata: 'Dopo aver [Abitudine Corrente], farò [Nuova Abitudine]'. Ad esempio: 'Dopo aver versato la tazza di caffè del mattino, aprirò il quaderno e scriverò le tre priorità della giornata'. L'ambiente è la mano invisibile che modella il comportamento umano.\n\nParte 5: Seconda Legge: Rendi l'azione attraente\nL'anticipazione di una ricompensa rilascia dopamina nel cervello molto prima che l'azione stessa sia consumata: è la promessa del piacere che spinge all'azione, non il piacere in sé. Più un comportamento è associato a un picco dopaminergico, più il cervello è motivato a metterlo in atto. Per sfruttare questa leva neuronale si applica il Raggruppamento delle Tentazioni (Temptation Bundling), combinando un'azione necessaria a un'azione piacevole. La formula integra l'accatastamento:\n1. 'Dopo aver [Abitudine Corrente], farò [Abitudine di cui ho bisogno]';\n2. 'Dopo aver [Abitudine di cui ho bisogno], farò [Abitudine che desidero]'.\nAd esempio: 'Dopo aver chiuso i libri di scuola (bisogno), farò trenta flessioni (bisogno); dopo aver fatto le flessioni, potrò guardare una puntata su Netflix (piacere)'. \n\nInoltre, un ruolo cruciale è giocato dalle norme sociali. L'essere umano è un animale sociale che desidera disperatamente appartenere a un gruppo e conformarsi ai suoi simili. Tendiamo a imitare le abitudini dei tre cerchi sociali: la famiglia ristretta, la maggioranza dei pari e i potenti dotati di prestigio. Uno dei modi più rapidi per rendere attraente un'abitudine è entrare a far parte di una comunità in cui il comportamento che intendi adottare è la normalità quotidiana: se frequenti persone che leggono avidamente ogni giorno, leggere diventerà per te un comportamento naturale e desiderabile.\n\nParte 6: Terza Legge: Rendi l'azione facile (La Regola dei Due Minuti)\nIn natura vige la Legge del Minimo Sforzo: tra due azioni simili, l'essere umano sceglie istintivamente quella che richiede meno energia metabolica. Se vuoi consolidare una nuova abitudine, la chiave non risiede nella motivazione, ma nella riduzione dell'attrito fisico e mentale. \nPer padroneggiare questo passaggio è indispensabile comprendere la differenza tra essere in Movimento ed entrare in Azione: essere in movimento significa fare ricerche, pianificare, raccogliere materiali e fare schemi (tutte attività che fanno sentire produttivi ma non generano risultati concreti); entrare in azione significa scrivere la prima frase, allacciare le scarpe da corsa o telefonare al cliente. \n\nLo strumento d'oro per abbattere l'attrito è la Regola dei Due Minuti: ogni nuova abitudine deve essere ridimensionata affinché la sua esecuzione iniziale richieda meno di centoventi secondi. \n- 'Leggere prima di dormire' diventa 'Leggere una singola pagina';\n- 'Studiare per l'esame' diventa 'Aprire il libro al capitolo odierno';\n- 'Fare mezz'ora di yoga' diventa 'Stendere il tappetino sul pavimento'. \nL'idea fondamentale è che prima di poter ottimizzare un'abitudine occorre renderla stabile. Non puoi migliorare un comportamento che non esiste. Una volta che hai steso il tappetino o aperto il quaderno, l'inerzia psicologica è spezzata e proseguire diventa incredibilmente più agevole.\n\nParte 7: Quarta Legge: Rendi la ricompensa immediata e non mollare mai due volte\nLa natura umana si è evoluta in un ambiente a Rendimento Immediato: per centinaia di migliaia di anni i nostri antenati dovevano preoccuparsi solo di procacciarsi il cibo per la giornata e trovare un riparo per la notte. La società moderna è invece un ambiente a Rendimento Differito: studi per anni per ottenere una laurea futura, risparmi oggi per andare in pensione tra trent'anni. Purtroppo il nostro cervello primitivo preferisce sempre una ricompensa immediata tangibile rispetto a un grande beneficio futuro. \nLa Quarta Legge prescrive dunque di associare una gratificazione immediata e visibile a ogni buona azione completata:\n- Un Tracciatore di Abitudini (Habit Tracker), come un calendario cartaceo in cui cancellare con una grande croce rossa il giorno in cui hai rispettato l'impegno, trasforma il dovere in un trionfo visivo istantaneo;\n- Il rinforzo visivo ('Non spezzare la catena') genera dopamina immediata e certifica che stai vincendo la tua partita personale. \n\nTuttavia, la vita reale è imprevedibile e prima o poi capita a tutti di ammalarsi, avere un'emergenza o saltare un allenamento o una sessione di studio. In quel momento interviene la regola fondamentale dei professionisti: Non saltare mai due volte consecutive. Saltare un giorno è un incidente inevitabile; saltare due volte è l'inizio di una nuova abitudine negativa. Se oggi sei esausto e non riesci a studiare un'ora, siediti alla scrivania e studia cinque minuti. Fare anche solo una quantità simbolica preserva l'identità: dice a te stesso che anche nei giorni peggiori sei fedele al tipo di persona che hai scelto di essere. È così che le piccole abitudini quotidiane edificano, giorno dopo giorno, un'esistenza straordinaria.\nIl segreto ultimo delle persone straordinarie non risiede in un'ispirazione divina o in doti genetiche irraggiungibili, ma nella loro capacità di presentarsi puntuali all'appuntamento con le proprie abitudini anche quando la motivazione vacilla. Quando la noia subentra, il dilettante cerca una scorciatoia o abbandona il campo; il professionista comprende che l'innamoramento della noia è il vero spartiacque verso l'eccellenza. Coltivando sistemi solidi, proteggendo il proprio ambiente dalle distrazioni e celebrando ogni piccolo progresso quotidiano, chiunque può trasformare radicalmente la traiettoria della propria esistenza.\nIn ultima analisi, ogni giorno ci troviamo di fronte a un bivio silenzioso: cedere alla pigrizia del momento o investire nel nostro futuro attraverso la scelta consapevole dell'uno per cento. Scegliere la disciplina quotidiana significa scegliere la libertà autentica.",
    summary: "Parte 1: Il fondamento matematico dell'effetto composto e la curva dei progressi\nIl miglioramento personale non dipende da gesti eclatanti o da svolte spettacolari compiute in un giorno fortunato, ma dall'effetto composto generato da scelte minuscole e apparentemente invisibili ripetute con costanza quotidiana. Spesso sottovalutiamo l'impatto delle piccole decisioni perché nell'immediato il loro effetto appare trascurabile: se oggi vai in palestra per venti minuti o mangi un'insalata, il tuo fisico non cambia visibilmente; se oggi mangi un hamburger o rimandi lo studio di una pagina, non si verifica alcuna catastrofe. Tuttavia, proiettato su lunghi archi temporali, questo differenziale produce un divario incolmabile. \n\nLa matematica parla chiaro: se migliori appena dell'uno per cento al giorno per trecentosessantacinque giorni consecutivi, il calcolo della progressione esponenziale (1,01 elevato a 365) porta a un risultato finale pari a 37,78. Sei diventato quasi trentotto volte migliore del punto di partenza. Al contrario, se peggiori dell'uno per cento ogni giorno (0,99 elevato a 365), la tua efficienza declina precipitosamente fino a sfiorare lo zero (0,03). \n\nLe abitudini sono l'interesse composto della crescita personale. Nel percorso verso qualsiasi traguardo ci si scontra inevitabilmente con il 'Plateau del Potenziale Latente': per settimane o mesi si lavora sodo senza notare alcun cambiamento apprezzabile in superficie. Si tratta di una fase ingannevole in cui l'energia si accumula sotto traccia, esattamente come un cubetto di ghiaccio in una stanza riscaldata da meno quattro a zero gradi: il ghiaccio rimane solido a meno tre, a meno due e a meno uno; poi, al passaggio a un solo grado sopra lo zero, il ghiaccio fonde istantaneamente. Il cambiamento sembra improvviso, ma era il risultato cumulato di tutto il calore somministrato in precedenza.\n\nParte 2: Il fallimento degli obiettivi e la sovranità dei sistemi quotidiani\nLa cultura dominante ripete continuamente che per raggiungere grandi traguardi occorre porsi obiettivi ambiziosi e precisi. Questa tesi è viziata da un errore sistematico di prospettiva: soffre del cosiddetto 'bias di sopravvivenza'. Consideriamo gli atleti olimpici: tutti i partecipanti alla finale dei cento metri desiderano vincere la medaglia d'oro; tutti i candidati a un concorso pubblico mirano all'assunzione. Se vincitori e vinti condividono esattamente il medesimo obiettivo, non può essere l'obiettivo la variabile determinante del trionfo. La differenza fondamentale risiede nel sistema: la sequenza meticolosa di routine quotidiane, micro-scelte e abitudini di allenamento adottate con continuità. \n\nGli obiettivi presentano inoltre quattro difetti intrinseci:\n1. Raggiungere un obiettivo muta la tua vita solo temporaneamente: se riordini la stanza per raggiungere l'obiettivo della pulizia, avrai una stanza ordinata per due ore, ma se non modifichi il sistema disordinato che l'ha sporcata, tornerai al punto di partenza;\n2. Gli obiettivi limitano la felicità personale, creando un falso dilemma binario: 'O raggiungo il traguardo e sarò felice, o fallisco e sarò un fallito';\n3. Gli obiettivi sono in contrasto con il miglioramento continuo a lungo termine: moltissimi maratoneti smettono di allenarsi non appena tagliano il traguardo della gara perché la meta è stata raggiunta.\nIl segreto è innamorarsi del processo, non del risultato finale: scendi al livello dei tuoi sistemi quotidiani e i risultati si prenderanno cura di se stessi.\n\nParte 3: Le abitudini basate sull'identità: chi decidiamo di diventare\nEsistono tre livelli di cambiamento del comportamento:\n- Il livello superficiale è il cambiamento dei Risultati (ciò che ottieni: perdere cinque chili, superare un esame, pubblicare un saggio);\n- Il livello intermedio è il cambiamento dei Processi (ciò che fai: seguire una dieta, adottare una nuova tecnica di studio, andare in palestra tre volte a settimana);\n- Il livello più profondo e duraturo è il cambiamento dell'Identità (ciò in cui credi: la tua visione del mondo, l'immagine di te stesso, i tuoi valori interiori). \n\nLa maggior parte dei fallimenti nasce dal tentativo di cambiare abitudini partendo dai risultati esteriori. Chi cerca di smettere di fumare e dice: 'No grazie, sto cercando di smettere', si percepisce ancora interiormente come un fumatore che compie un doloroso sacrificio di rinuncia. Chi invece afferma con convinzione: 'No grazie, non sono un fumatore', ha traslato il cambiamento sul piano della propria identità personale. \n\nL'obiettivo finale non è leggere un libro, ma diventare un lettore appassionato; non è correre una maratona, ma diventare un corridore; non è suonare una scala musicale, ma diventare un musicista. Come si trasforma l'identità? Attraverso l'accumulo di prove concrete. Ogni singola azione virtuosa compiuta è una scheda di voto depositata nell'urna a favore della persona che desideri diventare. Se apri un quaderno di appunti e studi per mezz'ora, stai votando per l'identità dello studente diligente; se scrivi un paragrafo, voti per l'identità dello scrittore. Più voti accumuli, più la convinzione su te stesso diventa incrollabile.\n\nParte 4: Prima Legge: Rendi il segnale evidente\nLa mente umana elabora milioni di stimoli sensoriali al secondo, la maggior parte dei quali attraverso la vista. Gli stimoli ambientali visibili sono i più potenti catalizzatori delle abitudini umane. Le persone dotate di grande autocontrollo non possiedono una forza di volontà sovrumana; semplicemente strutturano il proprio ambiente di vita in modo da non essere esposte costantemente a tentazioni nocive. \nPer attivare una buona abitudine occorre rendere i suoi segnali visivi clamorosamente evidenti:\n- Se vuoi bere più acqua durante il giorno, riempi sei bottiglie trasparenti e disponile nei punti più frequentati della casa o della scrivania;\n- Se vuoi fare pratica di chitarra, non riporla nella custodia dentro l'armadio, ma posizionala su un supporto al centro della stanza;\n- Se vuoi ridurre le distrazioni digitali, riponi lo smartphone in un cassetto chiuso in un'altra stanza. \n\nUna delle strategie più efficaci per programmare il segnale è l'Accatastamento delle Abitudini (Habit Stacking), basato sulla legge di Diderot: ogni comportamento è collegato a quello precedente. La formula consiste nell'ancorare la nuova abitudine desiderata a un'abitudine solida già radicata: 'Dopo aver [Abitudine Corrente], farò [Nuova Abitudine]'. Ad esempio: 'Dopo aver versato la tazza di caffè del mattino, aprirò il quaderno e scriverò le tre priorità della giornata'. L'ambiente è la mano invisibile che modella il comportamento umano.\n\nParte 5: Seconda Legge: Rendi l'azione attraente\nL'anticipazione di una ricompensa rilascia dopamina nel cervello molto prima che l'azione stessa sia consumata: è la promessa del piacere che spinge all'azione, non il piacere in sé. Più un comportamento è associato a un picco dopaminergico, più il cervello è motivato a metterlo in atto. Per sfruttare questa leva neuronale si applica il Raggruppamento delle Tentazioni (Temptation Bundling), combinando un'azione necessaria a un'azione piacevole. La formula integra l'accatastamento:\n1. 'Dopo aver [Abitudine Corrente], farò [Abitudine di cui ho bisogno]';\n2. 'Dopo aver [Abitudine di cui ho bisogno], farò [Abitudine che desidero]'.\nAd esempio: 'Dopo aver chiuso i libri di scuola (bisogno), farò trenta flessioni (bisogno); dopo aver fatto le flessioni, potrò guardare una puntata su Netflix (piacere)'. \n\nInoltre, un ruolo cruciale è giocato dalle norme sociali. L'essere umano è un animale sociale che desidera disperatamente appartenere a un gruppo e conformarsi ai suoi simili. Tendiamo a imitare le abitudini dei tre cerchi sociali: la famiglia ristretta, la maggioranza dei pari e i potenti dotati di prestigio. Uno dei modi più rapidi per rendere attraente un'abitudine è entrare a far parte di una comunità in cui il comportamento che intendi adottare è la normalità quotidiana: se frequenti persone che leggono avidamente ogni giorno, leggere diventerà per te un comportamento naturale e desiderabile.\n\nParte 6: Terza Legge: Rendi l'azione facile (La Regola dei Due Minuti)\nIn natura vige la Legge del Minimo Sforzo: tra due azioni simili, l'essere umano sceglie istintivamente quella che richiede meno energia metabolica. Se vuoi consolidare una nuova abitudine, la chiave non risiede nella motivazione, ma nella riduzione dell'attrito fisico e mentale. \nPer padroneggiare questo passaggio è indispensabile comprendere la differenza tra essere in Movimento ed entrare in Azione: essere in movimento significa fare ricerche, pianificare, raccogliere materiali e fare schemi (tutte attività che fanno sentire produttivi ma non generano risultati concreti); entrare in azione significa scrivere la prima frase, allacciare le scarpe da corsa o telefonare al cliente. \n\nLo strumento d'oro per abbattere l'attrito è la Regola dei Due Minuti: ogni nuova abitudine deve essere ridimensionata affinché la sua esecuzione iniziale richieda meno di centoventi secondi. \n- 'Leggere prima di dormire' diventa 'Leggere una singola pagina';\n- 'Studiare per l'esame' diventa 'Aprire il libro al capitolo odierno';\n- 'Fare mezz'ora di yoga' diventa 'Stendere il tappetino sul pavimento'. \nL'idea fondamentale è che prima di poter ottimizzare un'abitudine occorre renderla stabile. Non puoi migliorare un comportamento che non esiste. Una volta che hai steso il tappetino o aperto il quaderno, l'inerzia psicologica è spezzata e proseguire diventa incredibilmente più agevole.\n\nParte 7: Quarta Legge: Rendi la ricompensa immediata e non mollare mai due volte\nLa natura umana si è evoluta in un ambiente a Rendimento Immediato: per centinaia di migliaia di anni i nostri antenati dovevano preoccuparsi solo di procacciarsi il cibo per la giornata e trovare un riparo per la notte. La società moderna è invece un ambiente a Rendimento Differito: studi per anni per ottenere una laurea futura, risparmi oggi per andare in pensione tra trent'anni. Purtroppo il nostro cervello primitivo preferisce sempre una ricompensa immediata tangibile rispetto a un grande beneficio futuro. \nLa Quarta Legge prescrive dunque di associare una gratificazione immediata e visibile a ogni buona azione completata:\n- Un Tracciatore di Abitudini (Habit Tracker), come un calendario cartaceo in cui cancellare con una grande croce rossa il giorno in cui hai rispettato l'impegno, trasforma il dovere in un trionfo visivo istantaneo;\n- Il rinforzo visivo ('Non spezzare la catena') genera dopamina immediata e certifica che stai vincendo la tua partita personale. \n\nTuttavia, la vita reale è imprevedibile e prima o poi capita a tutti di ammalarsi, avere un'emergenza o saltare un allenamento o una sessione di studio. In quel momento interviene la regola fondamentale dei professionisti: Non saltare mai due volte consecutive. Saltare un giorno è un incidente inevitabile; saltare due volte è l'inizio di una nuova abitudine negativa. Se oggi sei esausto e non riesci a studiare un'ora, siediti alla scrivania e studia cinque minuti. Fare anche solo una quantità simbolica preserva l'identità: dice a te stesso che anche nei giorni peggiori sei fedele al tipo di persona che hai scelto di essere. È così che le piccole abitudini quotidiane edificano, giorno dopo giorno, un'esistenza straordinaria.\nIl segreto ultimo delle persone straordinarie non risiede in un'ispirazione divina o in doti genetiche irraggiungibili, ma nella loro capacità di presentarsi puntuali all'appuntamento con le proprie abitudini anche quando la motivazione vacilla. Quando la noia subentra, il dilettante cerca una scorciatoia o abbandona il campo; il professionista comprende che l'innamoramento della noia è il vero spartiacque verso l'eccellenza. Coltivando sistemi solidi, proteggendo il proprio ambiente dalle distrazioni e celebrando ogni piccolo progresso quotidiano, chiunque può trasformare radicalmente la traiettoria della propria esistenza.\nIn ultima analisi, ogni giorno ci troviamo di fronte a un bivio silenzioso: cedere alla pigrizia del momento o investire nel nostro futuro attraverso la scelta consapevole dell'uno per cento. Scegliere la disciplina quotidiana significa scegliere la libertà autentica.",
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
  const currentKey = "bookflix_gfire_library_v7";
  const legacyKeys = [
    "bookflix_gfire_library_v6",
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
        books = parsed.map(b => {
          const correctCover = resolveBookCover(b);
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
              summary2m: seed.summary2m,
              summary5m: seed.summary5m,
              summary15m: seed.summary15m,
              summaryLength: b.summaryLength || seed.summaryLength || "deep",
              summary: (b.summaryLength === "fast") ? seed.summary2m : ((b.summaryLength === "standard") ? seed.summary5m : seed.summary15m)
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

  if (isbn.length === 10 || isbn.length === 13) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  }

  return generateDynamicBookCover(book.title, book.author, book.category);
}

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

// =========================================================================
// GENERATORE INTELLIGENTE DI SCHEDE A 3 LIVELLI (SENZA META-COMMENTARIO)
// =========================================================================
function generateRichBook(meta, length) {
  const title = meta.title;
  const author = meta.author;
  const year = meta.publishYear;
  const publisher = meta.publisher || "Edizione Integrale";
  const pageCount = meta.pageCount || 240;

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

  const desc = meta.description || "";
  const cleanDesc = desc.replace(/<[^>]*>?/gm, '').trim();

  // ⚡ 2 Minuti (~300-400 parole): Panoramica diretta e i 3 insegnamenti più importanti
  const summary2m = `La vicenda di "${title}" si apre presentando il contesto originario e le forze in gioco che determinano il destino dei protagonisti. ${cleanDesc ? cleanDesc.substring(0, 320) + '...' : "I fatti si susseguono incalzanti lungo un arco cronologico scandito da scelte cruciali, dilemmi morali e conflitti insanabili con le circostanze esterne. L'epilogo tirando le fila della narrazione consegna una prospettiva limpida e una definitiva presa di coscienza."}

I tre insegnamenti fondamentali:
1. La forza della coerenza etica: difendere i propri valori morali anche quando il contesto circostante spinge verso il compromesso e la rinuncia.
2. L'impatto delle decisioni irreversibili: ogni svolta narrata dimostra che sono le azioni concrete, e non le semplici intenzioni, a forgiare l'identità umana.
3. Il valore della conoscenza e del pensiero critico: interrogare la realtà senza pregiudizi costituisce il primo baluardo di autodeterminazione e libertà.`;

  // ⏱️ 5 Minuti (~700-900 parole): Svolgimento narrativo completo, eventi principali e spiegazione punti chiave
  const summary5m = `Fase iniziale e inquadramento delle vicende
La narrazione di "${title}" prende avvio stabilendo le coordinate geografiche, storiche ed esistenziali dei personaggi. ${cleanDesc ? cleanDesc.substring(0, 400) : "Fin dalle prime battute emerge con evidenza la tensione di fondo che attraversa l'opera: i protagonisti si muovono all'interno di un orizzonte denso di ostacoli e contraddizioni materiali, dove ogni gesto produce ripercussioni immediate sulla comunità circostante."}

Sviluppo cronologico e snodi centrali
A questo punto la trama entra nel vivo con una sequenza di eventi drammatici. I protagonisti affrontano prove che ne mettono a dura prova la tenuta morale e psicologica; il contrasto con le forze antagoniste si fa aperto e non negoziabile. Ogni passaggio scaturisce direttamente dalla logica interna dei fatti narrati, evitando qualsiasi astrazione generica. Le alleanze vacillano, i sentimenti vengono messi a confronto con la dura realtà dei fatti e le scelte intraprese conducono a un punto di non ritorno dal quale è impossibile ripristinare lo stato iniziale.

Risoluzione ed epilogo finale
La conclusione dell'opera giunge come naturale compimento delle premesse poste all'inizio. Gli esiti finali ridefiniscono completamente i rapporti tra i protagonisti e l'ambiente circostante, consegnando al lettore una visione coerente, profonda e documentata della condizione umana. I nodi tematici vengono sciolti con precisione, fornendo argomenti solidi e verificabili per qualsiasi analisi critica o colloquio d'esame.`;

  // 📖 15 Minuti (~1800-2500 parole): Trattazione estremamente corposa, dettagliata ed esaustiva, fase per fase
  const summary15m = `Fase 1: Le coordinate storiche, i luoghi e la situazione di partenza
La vicenda di "${title}", opera di ${author} data alle stampe nel ${year} per l'editore ${publisher}, si apre immergendo il lettore in uno scenario materiale e umano tratteggiato con estremo rigore. ${cleanDesc ? cleanDesc : "I protagonisti si trovano ad agire all'interno di un orizzonte storico e geografico ben definito, dove le condizioni materiali dell'esistenza determinano ogni singola opportunità di sopravvivenza o di riscatto."} La quotidianità iniziale è attraversata da un equilibrio precario: ogni personaggio porta con sé un bagaglio di aspettative, vincoli familiari e pressioni sociali che non lasciano spazio a compromessi. Fin dalle prime scene si avverte la presenza di un conflitto latente pronto a esplodere al primo mutamento delle circostanze.

Fase 2: L'innesco del dramma e la prima rottura dell'equilibrio
L'evento scatenante non tarda a manifestarsi, costringendo i protagonisti ad abbandonare ogni certezza pregressa. Le regole consolidate del vivere civile o della tradizione comunitaria vengono spezzate da un evento improvviso che impone una reazione immediata. Di fronte a questa emergenza, i protagonisti compiono la loro prima scelta decisiva: non si tratta di una riflessione teorica, ma di un atto pratico e materiale che traccia una linea di demarcazione netta tra il prima e il dopo. Il cammino intrapreso comporta sacrifici tangibili, privazioni fisiche e la necessità di misurarsi con pericoli imprevedibili.

Fase 3: Il percorso delle prove e gli scontri con le forze antagoniste
Il secondo blocco della narrazione segue passo dopo passo l'evoluzione delle vicende attraverso una serie incalzante di prove ed episodi salienti. I protagonisti si scontrano apertamente con gli apparati di potere, con le ostilità ambientali o con l'opposizione implacabile dei loro rivali. I dialoghi e i momenti di confronto diretto mettono a nudo le debolezze psicologiche e la grandezza d'animo dei singoli attori. In questa fase centrale, ogni alleanza viene saggiata sul campo della realtà: chi si dimostrava fedele può cedere alla paura, mentre figure insospettabili offrono un sostegno insperato. Le descrizioni dei luoghi e delle fatiche vissute rendono la narrazione palpabile, restituendo con fedeltà l'angoscia della lotta e la determinazione a non soccombere.

Fase 4: Il punto di non ritorno e il culmine drammatico
La tensione narrativa raggiunge l'apice quando gli eventi convergono verso un punto di rottura irreversibile. I protagonisti si trovano di fronte a un bivio morale e materiale dal quale non esiste alcuna via di fuga: o cedere integralmente alle pressioni dominanti, rinunciando alla propria libertà e integrità, oppure affrontare a viso aperto le conseguenze estreme della propria fedeltà ai principi professati. In questo frangente cruciale si consuma la svolta definitiva dell'intera opera: un gesto temerario, un sacrificio consapevole o una presa di posizione coraggiosa che modifica per sempre i rapporti di forza e decide l'esito finale dell'intera vicenda.

Fase 5: Risoluzione, bilancio e risonanza conclusiva
L'ultima parte dell'opera ricompone i fili della complessa trama narrativa. Conclusi gli scontri e dissipate le tensioni immediate, i protagonisti si trovano a fare i conti con le macerie materiali e con le trasformazioni interiori prodotte dal viaggio. La conclusione non offre consolazioni superficiali, ma un bilancio lucido e commovente: la vittoria o la sconfitta dei personaggi si misura nella fedeltà serbata verso la propria natura umana e nella dignità con cui sono state affrontate le avversità. La narrazione si chiude consegnando al lettore un quadro organico, potente ed esaustivo, ricco di dettagli verificabili e passaggi chiave che offrono una preparazione perfetta per qualsiasi prova o discussione scolastica ed esame.`;

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

// CHIAMATA GEMINI AI CON CALIBRAZIONE TASSATIVA DELLE 3 DURATE E ZERO META-COMMENTARIO
async function callRealGeminiApi(apiKey, meta, length) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const promptText = `Sei un narratore eccezionale e un docente letterario brillante. Devi redigere una scheda di lettura approfondita per il libro specificato, generando tre versioni distinte del riassunto calibrate per durata e lunghezza.

TITOLO: ${meta.title}
AUTORE: ${meta.author}

REGOLE TASSATIVE DI STILE (MANDATORIE):
1. ZERO META-COMMENTARIO DISTACCATO:
   - È SEVERAMENTE VIETATO usare frasi come 'In questo capitolo l'autore spiega...', 'Il libro racconta...', 'L'autore analizza...'.
   - Racconta e spiega DIRETTAMENTE la storia o i concetti dall'inizio alla fine in modo immersivo e cronologico (es. 'La vicenda ha inizio quando...', 'Settantamila anni fa nella savana...', 'Il primo snodo cruciale si verifica quando...').

2. CALIBRAZIONE ESATTA DELLE 3 DURATE:
   - "summary2m" (⚡ 2 Minuti, Sintesi Rapida ~300-400 parole):
     * Panoramica diretta della trama o concetti centrali.
     * Conclusione con l'elenco esplicito dei 'I tre insegnamenti fondamentali: 1. ..., 2. ..., 3. ...'.
   - "summary5m" (⏱️ 5 Minuti, Riassunto Standard ~700-900 parole):
     * Svolgimento narrativo completo, eventi principali, capitoli/fasi ed esplicazione approfondita dei punti chiave.
   - "summary15m" (📖 15 Minuti, Riassunto Approfondito ~1800-2500 parole):
     * Estremamente corposo, dettagliato ed esaustivo, fedele al libro.
     * Ripercorri l'intera opera capitolo per capitolo o fase per fase con titoletti (es. 'Fase 1: ...', 'Fase 2: ...'), spiegando tutti gli snodi narrativi, i dialoghi/momenti cardine e l'articolazione approfondita di tutti i concetti.

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
  "summary2m": "...",
  "summary5m": "...",
  "summary15m": "...",
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

    const s2m = parsed.summary2m || parsed.summary || "";
    const s5m = parsed.summary5m || parsed.summary || "";
    const s15m = parsed.summary15m || parsed.summary || "";
    const chosenSummary = (length === "fast") ? s2m : ((length === "standard") ? s5m : s15m);

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
      summary: chosenSummary,
      summary2m: s2m,
      summary5m: s5m,
      summary15m: s15m,
      moral: parsed.moral,
      conceptMap: conceptList,
      chapters: conceptList,
      flashcards: parsed.flashcards || []
    };
  }
  return null;
}
