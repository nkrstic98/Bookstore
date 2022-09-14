type Book = {
    id?: number;
    title: string;
    author: string;
    description: string;
    image: string;
    yearPublished: string;
    numberOfPages: string;
    averageGrade: number;
    commentList: BookComment[];
    isOnPromotion: boolean;
};

type BookComment = {
    grade: number;
    title: string;
    username: string;
    text: string;
    date: string;
};

var bookList: Book[] = [
    {
        id: 1,
        title: "Majstor i Margarita",
        author: "Mihail Bulgakov",
        description: '<div style="text-align: justify;">Rukopisi ne gore. <br>\n' +
            '<br>\n' +
            'Tridesetih godina prošlog veka u Moskvu stiže đavo. Ubrzo po dolasku, ovaj neočekivani posetilac sa svojim pomoćnicima, među kojima su i jedan mačor koji govori i prelepa veštica, unosi pometnju kod Moskovljana koji odbijaju da veruju kako u Boga tako i u đavola. U međuvremenu, Majstor, autor neobjavljenog rukopisa o Isusu Hristu i Pontiju Pilatu, očajan leži u psihijatrijskoj bolnici. Njemu odana Margarita toliko ga voli da je zarad njega spremna da đavolu proda dušu. <br>\n' +
            '<br>\n' +
            'Po mnogo čemu jedinstven u ruskoj književnosti, ovaj roman obiluje humorom i filozofskom dubinom.  \tZbog cenzure i aluzija na Staljinovu diktaturu je ovo vrhunsko delo Mihaila Bulgakova u celosti objavljeno bezmalo tri decenije posle piščeve smrti. Danas je osvedočeno blago svetske književnosti.  &nbsp;</div>',
        image: "majstor_i_margarita",
        yearPublished: "2020.",
        numberOfPages: "519",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 2,
        title: "Gozba za vrane - deo prvi",
        author: "Džordž R. R. Martin",
        description: "<div style=\"text-align: justify;\">Sve izgleda previše dobro da bi bilo istinito. Posle ogorčenih borbi i podmuklih izdajstava, sile koje su podelile zemlju iscrpene su pristale na nelagodno primirje. Ili se bar tako čini. Posle smrti čudovišnog kralja Džofrija, Sersei vlada kao namesnica u Kraljevoj luci. Odlazak Roba Starka slomio je kičmu severnjačkoj buni, a njegova braća i sestre razbacani su po čitavom kraljevstvu, poput semenja na vetru. Rat koji je dugo i mahnito buktao, napokon je zgasnuo.<br>\n" +
            "<br>\n" +
            "Međutim, kao i posle svake divovske borbe, neće proći dugo pre nego što preživeli, odmetnici, razbojnici i lešinari počnu da se okupljaju i otimaju oko kostiju mrtvih. Dok se ljudske vrane skupljaju na zgarištima Sedam kraljevstava, kuju se smele nove zavere i opasna nova savezništva, dok neka poznata i neka sasvim nova lica izranjaju iz zlokobnog sutona prošlih bojeva.<br>\n" +
            "<br>\n" +
            "To je vreme kada mudri i ambiciozni, podmukli i snažni otkrivaju veštine, moći i magiju da prežive u surovim i užasnim vremenima koja ih čekaju. Vreme je to da se plemići i kmetovi, vojnici i čarobnjaci, ubice i mudraci ujedine i na kocku stave svoje sudbine… i svoje živote. Jer na gozbi za vrane, mnogi su gosti – ali će retki preživeti.<br>\n" +
            "&nbsp;</div>",
        image: "gozba_za_vrane_1",
        yearPublished: "2006.",
        numberOfPages: "380",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 3,
        title: "Gozba za vrane - deo drugi",
        author: "Džordž R. R. Martin",
        description: '<div style="text-align: justify;">Gvozdenim ostrvima vlada novi kralj, luđi i strašniji nego što je iko mogao i da zamisli. Nezasita morska neman sve više pruža svoje pipke ka obalama Sedam kraljevstava... Vitez sa zlatnom rukom krenuo je na put ka poslednjem zamku iznad koga se vijori barjak kralja na severu. Na tom putu otkriva mračne istine i bori se sa zlodusima sopstvene prošlosti. <br>\n' +
            '<br>\n' +
            'Za to vreme, dok zemljom haraju odmetničke družine, dvor u Kraljevoj luci tone sve dublje u vrtlog izdajstava i spletki. A niko od igrača i ne sluti da je u igru prestola stupila nova, nepredvidljiva i neobuzdana sila, koja preti da poremeti i najpažljivije pripremljene planove...<br>\n' +
            '<br>\n' +
            'Gozba za vrane je u punom jeku.</div>',
        image: "gozba_za_vrane_2",
        yearPublished: "2006.",
        numberOfPages: "416",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 4,
        title: "Igra prestola",
        author: "Džordž R. R. Martin",
        description: "<div style=\"text-align: justify;\"><strong>ROMAN DO SADA NEVIÐENE SNAGE MAŠTE IZ PERA NAJVEĆEG MAJSTORA ŽANRA</strong><br>\n" +
            "<br>\n" +
            "U „Igri prestola“, Džordž R. R. Martin je stvorio istinsko remek-delo, objedinivši sve ono najbolje što žanr epske fantastike može da pruži. Magija, spletke, romanse i pustolovine ispunjavaju stranice prvog toma ovog epskog serijala, koji će zasigurno oduševiti ne samo ljubitelje žanra, već i mnogo širi krug čitalaca.<br>\n" +
            "<br>\n" +
            "Nad zemljom u kojoj leta mogu trajati decenijama, a zime pokolenjima, nadvili su se crni oblaci. Ledeni vetrovi ponovo duvaju i u snežnim bespućima severno od Zimovrela, mračne i natprirodne sile okupljaju se iza velikog zida koji štiti kraljevstvo. U središtu sukoba nalazi se porodica Stark od Zimovrela, ljudi nepopustljivih i tvrdih kao što je i zemlja kojom vladaju. Prostirući se od predela okovanih surovom hladnoćom do dalekog letnjeg kraljevstva obilja i raskoši, ovo je priča o vitezovima i damama, vojnicima i čarobnjacima, plaćenim ubicama i kopiladima, ljudima koji žive u vremenu zlih predskazanja. Kroz mnoge zavere i spletke, tragedije i izdajstva, bitke i opsade, rešava se sudbina porodice Stark, njihovih saveznika i neprijatelja, dok svi oni pokušavaju da pobede u toj najsmrtonosnijoj od svih igara: igri prestola.<br>\n" +
            "&nbsp;</div>",
        image: "igra_prestola",
        yearPublished: "2003.",
        numberOfPages: "655",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 5,
        title: "Oluja mačeva – deo prvi: Čelik i sneg",
        author: "Džordž R. R. Martin",
        description: "<div style=\"text-align: justify;\"><em>Oluja mačeva</em>, treći deo čudesne sage <em>Pesma leda i vatre</em>, remek-dela savremene epske fantastike, nastavlja povest započetu u <em>Igri prestola</em> i briljantno nastavljenu u <em>Sudaru kraljeva</em>.<br>\n" +
            "<br>\n" +
            "„Maštovit, briljantno vođen, prepun iznenađenja, ovo je roman koji u velikom stilu dokazuje da je Martin najveći živi pisac epske fantastike.“ <em>Independent </em><br>\n" +
            "<br>\n" +
            "Od petorice takmaca za krunu, jedan je mrtav, jedan poražen, a rat se ipak rasplamsava žešće nego ikada. U svet se polako vraća davno zaboravljena magija, nova savezništva se sklapaju a stara raskidaju, neke bitke se vode mačevima i kopljima, a druge, odlučnije, perima i gavranovima.<br>\n" +
            "<br>\n" +
            "Dok Džon Snežni jaše s divljanima, njegov brat Rob, neporažen na bojnom polju, mora da se suoči sa izazovima sa kakvim se do sada nije sretao. Tirion Lanister pokušava da se izbavi iz mreže spletki koju plete njegova sestra, a Arja Stark u potrazi za domom luta opustošenom i spaljenom zemljom...<br>\n" +
            "<br>\n" +
            "A dok kraljevstvom besni oluja mačeva, sa severa neumoljivo stiže hladnoća, užas koji preti da uništi sve što je ljudsko.<br>\n" +
            "&nbsp;</div>",
        image: "oluja_maceva_1",
        yearPublished: "2004.",
        numberOfPages: "535",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 6,
        title: "Oluja mačeva – deo drugi: Krv i zlato",
        author: "Džordž R. R. Martin",
        description: "<div style=\"text-align: justify;\"><em>Krv i zlato</em>, nastavlja tkanje raskošne tapiserije započete u <em>Čeliku i Snegu</em>, povesti koja je bez daha ostavila milione čitalaca širom sveta. <br>\n" +
            "<br>\n" +
            "Dok se Rat petorice kraljeva približava krvavom vrhuncu, Džon Snežni i mala družina mladića i bogalja, ostavljeni od svih, spremaju se da sami zaustave divljansku plimu na kapiji Crnog zamka. Rob Stark, Kralj na Severu, kreće u još jedan pohod, da povrati zemlje svog oca. Kraljica Sersei je napokon odigrala završne poteze u igri koja će njenom sinu obezbediti presto, ali njen brat, bezruki vitez, mora da se uhvati u koštac sa neprijateljima strašnijim od svih sa kojima se do sada sukobljavao – demonima svoje prošlosti. A u međuvremenu, zmajevi Deneris Olujrođene, kalisi Dotraka, rastu i jačaju...<br>\n" +
            "<br>\n" +
            "Vođen rukom vrhunskog pripovedača, jedinstven po snazi, zamahu i maštovitosti, roman <em>Krv i zlato</em> je do sada najuzbudljiviji deo <em>Pesme leda i vatre</em> remek-dela savremene epske fantastike.<br>\n" +
            "&nbsp;</div>",
        image: "oluja_maceva_2",
        yearPublished: "2004.",
        numberOfPages: "510",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 7,
        title: "Ples sa zmajevima: Snovi i prah",
        author: "Džordž R. R. Martin",
        description: "<div style=\"text-align: justify;\">PETA KNJIGA NAJVEĆE EPSKE SAGE SAVREMENE FANTASTIKE.<br>\n" +
            "<br>\n" +
            "Budućnost Sedam kraljevstava visi o koncu. Na istoku Deneris, poslednji izdanak kuće Targarjena, čiji su zmajevi sada već izrasli u strašne zveri, vlada kao kraljica grada podignutog na prahu i smrti, opkoljena neprijateljima.<br>\n" +
            "<br>\n" +
            "Pošto se napokon pročulo gde je ona, mnogi traže Deneris i njene zmajeve. Među njima je kepec Tirion Lanister, koji je pobegao iz Kraljeve luke ucenjene glave, osuđen na smrt zbog ubistva svog sestrića kralja Džofrija, posle čega je ubio i svog omraženog oca lorda Tivina.<br>\n" +
            "<br>\n" +
            "Na severu se pruža veliki Zid od leda i kamena – prepreka snažna tek koliko ljudi koji ga brane. Kopile lorda Edarda Starka, Džon Snežni, izabran je za 998. lorda zapovednika Noćne straže, ali on ima neprijatelje i u samoj Straži i s one strane Zida, gde se okupljaju sile neizrecivog užasa.<br>\n" +
            "<br>\n" +
            "Na sve strane ponovo izbijaju ogorčeni sukobi, a u njih su upleteni brojni, nezaboravni i neodoljivi likovi, od odmetnika do sveštenika, od vojnika do volšebnika, od plemića do robova. Plime sudbine neumitno vode ka najvećem plesu do sada...</div>",
        image: "ples_sa_zmajevima_1",
        yearPublished: "2012.",
        numberOfPages: "440",
        averageGrade: 0,
        commentList: [
            {
                date: "14.09.2021.",
                title: "Ples sa zmajevima - deo prvi: Snovi i prah",
                username: "ijovanovic",
                grade: 4,
                text: "Prvi deo Plesa sa zmajevima nam vraća ranije zapostavljene likove.\n" +
                    "Na početku ove knjige, nema preterano bitnih dešavanja i radnja teče sporije. Iza Zida se sakupljaju mračne sile, kao što svi znamo, a Tuđini rastu u brojkama, svakog dana.\n" +
                    "Biću iskren, ova mi se knjiga manje dopala od Gozbe za vrane. Razlog je prilično jednostavan. Uprkos tome što Martin sjajno piše, meni su problem bili uglovi pripovedanja. Više mi se dopadaju dešavanja iz Kraljeve luke, u odnosu na Sever i Zid.\n" +
                    "Opisi i dalje dominiraju, pa u jednom času možete posetiti Bela sidrišta i sedeti kod fontane Ribonogog ili zajedno sa Tirionom posmatrati desetak vrsta kornjača koje žive u Velikoj Rojni. U sledećem momentu možete se zateći daleko iza Zida, dok vam se prsti i celo telo lede, a sa lica vam vise ledenice. Možete naučiti da po mirisu razlikujete gradove i luke u Vesterosu. Bilo da je to Starigrad, sav cvetan, kao naparfemisana udovica, ili možda Lanisgrad sa mirisom mleka i dimom u kosi.",
            },
            {
                date: "20.09.2017.",
                title: "Ples sa zmajevima - deo prvi: Snovi i prah",
                username: "rajka",
                grade: 5,
                text: "Praktično obožavam SVE u vezi ovog serijala, i moj život je upropašćen jer i dalje nema naznake kada nas očekuje sledeći nastavak! Da, to je moj ceo komentar, upravo ovde. Možete da idete sada. Ozbiljno, nemam ideju šta da kažem o ovako fantastičnom serijalu. Izgrađen je jedan neverovatan svet, i zaista mi je bilo stalo do većine likova, čak mi je stalo i do likova koji ne bi trebalo da nam se dopadnu. Odlagala sam čitanje, jer sam znala da je ovo poslednja objavljena knjiga, pročitala sam ih sve vrlo brzo, i šta sada da radim sa svojim životom?! Ovde pratimo Džona, koji je moj najomiljeniji lik ikada i u ovom delu ima ogromnu odgovornost, Tiriona koga potpuno i trajno obožavam (ne ostane li živ u narednim delovima, obećavam da ću pronaći pisca lično!), Deneris (kako je samo mogla da zaključa svoje zmajeve, pobogu!), i druge. Zaljubljena sam u ovaj serijal, kada uronim u čitanje, čitav svet nestane. Tako da, šta sada da radim sa svojim životom? Možda bih mogla da nabavim bojanku."
            }
        ],
        isOnPromotion: false,
    },
    {
        id: 8,
        title: "Ples sa zmajevima: Posle gozbe",
        author: "Džordž R. R. Martin",
        description: '<div style="text-align: justify;">PETA KNJIGA NAJVEĆE EPSKE SAGE SAVREMENE FANTASTIKE<br>\n' +
            '<br>\n' +
            '„Među piscima epske fantastike Martin je daleko najbolji...ovo je napeta, burna knjiga koja izaziva nesanicu.“<br>\n' +
            '<em>Time Magazine</em><br>\n' +
            '<br>\n' +
            '„Suočeni sa neshvatljivim zamahom ovog epa mnogi drugi pisci fantastike mogu samo s nevericom da odmahuju glavom... Njegova ambicija: da stvori Svetonijevih <em>Dvanaest cezara</em> epske fantastike, s likovima tako otrovnim da bi pojeli Bordžije.“<br>\n' +
            '<em>Guardian</em><br>\n' +
            '<br>\n' +
            '„Kolosalno, zapanjujuće... Martin u svom izmaštanom svetu pruža svu opojnu zapletenost Ratova ruža ili carskog Rima.“<br>\n' +
            '<em>SFX</em><br>\n' +
            '<br>\n' +
            '„Džordž R. R. Martin je jedan od naših najboljih pisaca, a ovo je jedna od njegovih najboljih knjiga.“<br>\n' +
            '<em>Rejmond E. Fajst</em><br>\n' +
            '<br>\n' +
            '„Ovo je jedna od onih retkih knjiga koja se čita s lakoćom.“<br>\n' +
            '<em>Robin Hob</em><br>\n' +
            '<br>\n' +
            '„Kakva čudesna povest. Nisam mogla da stanem dok je u zoru nisam završila.“<br>\n' +
            '<em>En Mekafri</em></div>',
        image: "ples_sa_zmajevima_2",
        yearPublished: "2012.",
        numberOfPages: "592",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 9,
        title: "Ponovorođeni Zmaj",
        author: "Robert Džordan",
        description: "<div style=\"text-align: justify;\">Treća knjiga u serijalu <em>Točak vremena</em>.<br>\n" +
            "<br>\n" +
            "Ponovorođeni Zmaj –  onaj koji je najavljen u davnašnjim proročanstvima kao vođa koji će spasti svet, ali ga pri tome i uništiti; spasilac koji će poludeti i ubiti one koji su mu najdraži – konačno je stigao i pokušava da pobegne od svoje sudbine. U stanju je da dodirne Jednu moć, ali u nemogućnosti da je kontroliše. Bez ikoga je ko bi mogao tome da ga poduči jer već tri hiljade godina niko nije imao tu sposobnost. Rand al' Tor, Ponovorođeni Zmaj, zna samo da mora da se suoči sa Mračnim. Ali kako? <br>\n" +
            "<br>\n" +
            "„Odlično napisana avantura epskih razmera.“<br>\n" +
            "– En Makafri<br>\n" +
            "<br>\n" +
            "„Svojom punoćom i toplinom podseća na Tolkinova dela.“<br>\n" +
            "<em>– Publishers Weekly<br>\n" +
            "</em><br>\n" +
            "„Fantastična tapiserija neuobičajene dubine.“<br>\n" +
            "<em>– GMI Journal</em></div>",
        image: "ponovorodjeni_zmaj",
        yearPublished: "2004.",
        numberOfPages: "576",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 10,
        title: "Pored puta",
        author: "Ivo Andrić",
        description: "<div style=\"text-align: justify;\">Znakovi pored puta <br>\n" +
            "Sveske<br>\n" +
            "Omer-paša Latas<br>\n" +
            "Kuća na osami<br>\n" +
            "<br>\n" +
            "Književni dragulji koji krunišu Andrićev opus!<br>\n" +
            "<br>\n" +
            "„Zašto balkanske zemlje ne mogu da uđu u krug prosvećenog sveta, čak ni preko svojih najboljih i najdarovitijih predstavnika? Odgovor nije jednostavan. Ali čini mi se da je jedan od razloga odsustvo poštovanja čoveka, njegovog punog dostojanstva i pune unutarnje slobode, i to bezuslovnog i doslednog poštovanja.“<br>\n" +
            "<br>\n" +
            "„Svi umru samo jednom, a veliki ljudi dva puta – jednom kad ih nestane sa zemlje, a drugi put kad propadne njihova zadužbina.“ <br>\n" +
            "<br>\n" +
            "„Dugotrajno robovanje i rđava uprava mogu toliko zbuniti i unakaziti shvatanja jednog naroda da zdrav razum i prav sud u njemu otančaju i oslabe, da se potpuno izvitopere. Takav poremećen narod ne može više da razlikuje ne samo dobro od zla u svetu oko sebe nego ni svoju sopstvenu korist od očigledne štete.“ <br>\n" +
            "<br>\n" +
            "„Sve su Drine ovog sveta krive i nikad se one neće moći svekolike ni potpuno ispraviti, ali nikad ne smemo prestati da ih ispravljamo.“<br>\n" +
            "<br>\n" +
            "„Žena se zamori da bude čoveku prijatelj.“<br>\n" +
            "<br>\n" +
            "U najznačajnije nedovršene prozne celine iz Andrićeve zaostavštine spadaju njegovi zapisi, zapažanja, romaneskne i pripovedačke zamisli, saveti za pisce i beleške o ljudima, pojavama, jeziku i književnosti koje je pisao celog života, od 20-ih godina XX veka, i sabirao ih u celinu koju je simbolično nazvao <em>Znakovi pored puta</em>. <br>\n" +
            "<br>\n" +
            "Primer piščeve radionice i svojevrsnu dopunu <em>Znakova pored puta</em> predstavljaju ispisi, citati i zapisi iz brojnih piščevih beležnica čiji je izbor posthumno objavljen pod naslovom <em>Sveske</em>. Pritom, brojni Andrićevi ispisi iz svoje lektire na stranim jezicima (nemački, francuski, latinski, italijanski i španski) <strong>prvi put su prevedeni </strong>u ovom izdanju i utoliko je ovaj veliki segment iz njegove zaostavštine sada prvi put kompletan. <br>\n" +
            "<br>\n" +
            "Najzad, nedovršeni roman <em>Omer-paša Latas</em>, o osmanskom paši srpskog porekla koji je u drugoj polovini XIX veka poslat u Sarajevo da uguši begovski ustanak protiv sultanovih reformi u Bosni, i nedovršena zbirka priča <em>Kuća na osami</em> – prava su kruna i sublimat Andrićevog pripovedačkog opusa. <br>\n" +
            "<br>\n" +
            "Objedinjeni među koricama jedne knjige, ovi „usputni“ rukopisi neodvojiv su deo Andrićevog kapitalnog opusa i ključ za razumevanje njegovog književnog postupka i dela.&nbsp;<br>\n" +
            "&nbsp;</div>",
        image: "pored_puta",
        yearPublished: "2018.",
        numberOfPages: "824",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 11,
        title: "Priče",
        author: "Ivo Andrić",
        description: "<div style=\"text-align: justify;\">Sve priče u jednoj knjizi.<br>\n" +
            "<br>\n" +
            "Povodom 125. godišnjice rođenja.<br>\n" +
            "<br>\n" +
            "„Ponekad izgleda da čovečanstvo od prvog bleska svesti, kroz vekove priča samo sebi, u milion varijanata, uporedo sa dahom svojih pluća i ritmom svoga bila, stalno istu priču. A ta priča kao da želi, poput pričanja legendarne Šeherezade, da zavara krvnika, da odloži neminovnost tragičnog udesa koji nam preti, i produži iluziju života i trajanja.“ Ivo Andrić<br>\n" +
            "<br>\n" +
            "Od 1920. do kraja života, za više od pola veka svog plodnog stvaralačkog rada, Andrić je napisao više od sto priča koje se mogu uvrstiti u svaku antologiju svetske priče. Majstor kratke prozne forme, samo naizgled tradicionalan u naraciji i stilu pripovedanja, Andrić zapravo pripada onim velikanima savremene svetske priče koji se uvek čitaju sa novim uzbuđenjem, lako i u dahu. Štaviše, kako vreme prolazi, Andrić je sve moderniji. <br>\n" +
            "<br>\n" +
            "Bilo da pripoveda o bosanskim Muslimanima, Turcima ili Jevrejima, o ženama, gradovima ili fratrima, o neobičnim likovima koje je upoznao ili zamislio u Sarajevu, Višegradu ili Beogradu, Andrić sa neodoljivom ironijom, prepoznatljivim i jedinstvenim stilom uspeva u svojim pričama da čitaoca uvek iznova, kako je sam umeo da kaže, „iznenadi nečim poznatim“.<br>\n" +
            "<br>\n" +
            "U govoru pod nazivom „O priči i pričanju“, koji je održao prilikom primanja Nobelove nagrade u Stokholmu 1961. godine, Andrić će sam sublimirati svoj pripovedački kredo: „Pripovedač možda priča sam sebi svoju priču, kao dete koje peva u mraku da bi zavaralo svoj strah? Ili je cilj toga pričanja da nam osvetli, bar malo, tamne puteve na koje nas često život baca, i da nam o tom životu, koji živimo ali koji ne vidimo i ne razumemo uvek, kaže nešto više nego što mi, u svojoj slabosti, možemo da saznamo i shvatimo.“</div>",
        image: "price",
        yearPublished: "2004.",
        numberOfPages: "850",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 12,
        title: "Romani",
        author: "Ivo Andrić",
        description: "<div style=\"text-align: justify;\">Svi romani u jednoj knjizi.<br>\n" +
            "<br>\n" +
            "<em>Travnička hronika</em>, <em>Na Drini ćuprija</em>, <em>Gospođica</em>, <em>Prokleta avlija</em><br>\n" +
            "<br>\n" +
            "„Ja sam na putovanja trošio ne samo novac i vreme nego i snagu živaca i mašte, jer u putovanja treba uračunati i duge, uglavnom izlišne pripreme u mašti i u stvarnosti... A koliko sam se u tim putovanjima trošio, vidi se najbolje po tome što sam za vreme dva velika rata (1914–1918. i 1941–1944), kada sam bio prisiljen da sedim na jednom mestu, napisao gotovo najveći deo svojih radova.“&nbsp;Ivo Andrić<br>\n" +
            "<br>\n" +
            "U mladu jugoslovensku književnost posle Prvog svetskog rata Ivo Andrić je ušao kao zapažena pesnička pojava zbirkama <em>Ex Ponto</em> i <em>Nemiri</em>, koje je uglavnom napisao tokom godina tamnovanja u šibenskom i mariborskom zatvoru 1914–1915, potom u vreme konfinacije u Zenici i Ovčarevu do 1917. i najzad tokom lečenja u zagrebačkoj Bolnici milosrdnih sestara do kraja rata i ujedinjenja južnoslovenskih naroda. <br>\n" +
            "<br>\n" +
            "Pošto je u periodu između dva rata, uglavnom putujući i seljakajući se po Evropi kao diplomata Kraljevine Jugoslavije, objavljivao samo pripovetke, tokom Drugog svetskog rata, u tišini svoje iznajmljene samačke sobe u Prizrenskoj ulici u Beogradu, napisao je svoja tri od ukupno četiri romana, <em>Travničku hroniku</em> (završen aprila 1942), <em>Na Drini ćupriju</em> (završen decembra 1943) i <em>Gospođicu</em> (decembra 1943 – oktobra 1944). Roman-novelu <em>Prokleta avlija</em> objavio je 1954. godine. <br>\n" +
            "<br>\n" +
            "Za svoj celokupni opus Andrić je 1961. godine dobio Nobelovu nagradu za književnost, „za epsku snagu“, kako stoji u obrazloženju o dodeli nagrade, „kojom je oblikovao motive i sudbine iz istorije svoje zemlje.“ <br>\n" +
            "<br>\n" +
            "Osim što su složene i duboke književne studije različitih događaja i junaka sa balkanske istorijske pozornice od srednjeg veka do drugog svetskog rata, ova remek-dela srpske književnosti istovremeno su i trajni literarni spomenik gradovima Travniku, Višegradu, Beogradu i Istanbulu, koji su uglavnom bili žarišne tačke Andrićevog života i čitavog njegovog pripovednog dela.</div>",
        image: "romani",
        yearPublished: "2014.",
        numberOfPages: "776",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 13,
        title: "Sudar kraljeva",
        author: "Džordž R. R. Martin",
        description: "<div style=\"text-align: justify;\">U drugom delu <em>Pesme leda i vatre</em>, Džordž R. R. Martin stvorio je delo neprevaziđenog zamaha, snage i mašte.<strong> </strong><em>Sudar kraljeva</em> vodi nas u svet spletki i sjaja, čudesa i bitaka,potpuno drugačiji od svega što ste do sada iskusili. <br>\n" +
            "<br>\n" +
            "Kometa boje krvi i plamena plovi preko neba. A od drevnog zamka na Zmajkamenu do ledenih pustoši Zimovrela, kraljevstvo vri. Šest pretendenata želi vlast nad podeljenom zemljom i gvozdeni presto Sedam kraljevstava, ne prežući ni od čega – od bitaka do bratoubistva, od intriga do izdaja. Ovo je priča u kojoj brat kuje zavere protiv brata, a mrtvi se dižu i hodaju po noći. Princeza je prerušena u dečaka beskućnika; vitez uma sprema se da otruje strašnu čarobnicu; a divlji ljudi spuštaju se sa Mesečevih planina i pale sve pred sobom. Dok se tajne otkrivaju i čarolije tkaju a epske bitke smenjuju sa dvorskim spletkama, pobeda može pripasti onima koji imaju najhladniji čelik... i najhladnija srca. Jer kada se kraljevi sudare, čitavo kraljevstvo drhti.<br>\n" +
            "<br>\n" +
            "„Martin ispunjava sva obećanja data u prvom delu, i nastavlja da stvara jedan od najboljih fantastičnih epova ikada napisanih.“ <em>Denver post<br>\n" +
            "<br>\n" +
            "</em></div>",
        image: "sudar_kraljeva",
        yearPublished: "2004.",
        numberOfPages: "750",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 14,
        title: "Zenica sveta",
        author: "Robert Džordan",
        description: "<div style=\"text-align: justify;\">Točak vremena se okreće i Doba dolaze i prolaze, ostavljajući sećanja koja postaju legende. Legende blede u mitove, a čak je i mit davno zaboravljen kada se Doba koje ga je iznedrilo ponovo vrati. U Trećem dobu, Dobu proročanstva, Svet i Vreme leže u skladu. Ono što je bilo, što će biti i što jeste još može da padne pod Senku. <br>\n" +
            "<br>\n" +
            "„Snažan roman široke i složene radnje.“&nbsp;<em>Locus</em><br>\n" +
            "<br>\n" +
            "„Pročitao sam ga za tri dana i već sam stao u red čekajući nastavak.“&nbsp;<em>Interzone</em><br>\n" +
            "<br>\n" +
            "„Veličanstvena saga herojske fantastike.“&nbsp;<em>De Camp</em></div>",
        image: "zenica_sveta",
        yearPublished: "2021.",
        numberOfPages: "615",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
    {
        id: 15,
        title: "Euforija",
        author: "Elin Kulhed",
        description: "<div style=\"text-align: justify;\"><em>Roman o Silviji Plat</em><br>\n" +
            "<br>\n" +
            "Poslednje godine života briljantne književnice u borbi sa svetom, svojim voljenima i samom sobom<br>\n" +
            "<br>\n" +
            "Godina je 1961. Silvija je trudna s drugim detetom i blista od sreće. Sa suprugom Tedom Hjuzom upušta se u novu pustolovinu – renoviraće staru kuću u Devonu i podizati porodicu u sopstvenom kraljevstvu daleko od prljavog užurbanog grada.<br>\n" +
            "<br>\n" +
            "Pre nego što su dobili decu, Ted je bio njen partner u svemu: dvoje intelektualaca koji su od života uzimali sve što bi poželeli. Ali sada se Ted sve češće povlači u svoj studio da piše. Silvija je napuštena, oseća se kao ženka koju opsedaju mladunci. Više od svega želi da piše, da živi punim plućima i ostavi svoj trag u svetu. Da li će svoju besmrtnost ostvariti kroz decu koju sada neguje svojim telom, ili kroz reči koje stavlja na hartiju kada ukrade malo vremena za sebe?<br>\n" +
            "<br>\n" +
            "Ted je napušta. Odlazi kod ljubavnice u London. Silvija je opijena svojom snagom i uništena gubitkom. Ushićena, oseća da je njena stvaralačka moć na vrhuncu. Odlučuje da umre, ali pre smrti ispisuje stranice koje će joj obezbediti večnost.<br>\n" +
            "<br>\n" +
            "„<em>Euforija</em> je užareni kamen koji isijava silovitim osećanjima i daje glas svim ženama rastrzanim između dve životne uloge – majke i umetnice. Ovo nije samo parabola o tragediji jedne žene već i vapaj duše koja svoje spasenje nalazi u kniževnosti.“<br>\n" +
            "– <em>Spettacolo News</em><br>\n" +
            "<br>\n" +
            "„Život jedne književnice vodio je pero druge. Roman pripovedan u prvom licu o umetnici koja je popustila pod silinom sopstvenih misli i osećanja. Maestralno delo.“<br>\n" +
            "<em>– VG</em><br>\n" +
            "<br>\n" +
            "„Roman posle kojeg ćemo drugačije iščitavati dela Silvije Plat.“<br>\n" +
            "– <em>Dagbladet</em><br>\n" +
            "<br>\n" +
            "„Remek-delo!“<br>\n" +
            "– <em>Västerbottens-Kuriren</em></div>",
        image: "euforija",
        yearPublished: "2022.",
        numberOfPages: "296",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: true,
    },
    {
        id: 16,
        title: "Oladi malo",
        author: "Sara Najt",
        description: "<div style=\"text-align: justify;\">Autorka bestselera <em>I za to me zabole: Magija koja menja život<br>\n" +
            "</em><br>\n" +
            "<em>Kako da kontrolišete ono što<br>\n" +
            "možete i prihvatite ono što ne<br>\n" +
            "možete da biste prestali da<br>\n" +
            "šizite i nastavili da živite</em><br>\n" +
            "<br>\n" +
            "Ukrotite anksioznost i preuzmite ponovo kontrolu nad svojim životom pomoću ovog totalno kul vodiča anti-guru autorke.<br>\n" +
            "<br>\n" +
            "Da li provodite više vremena brinući zbog problema umesto da ih rešavate? Da li dopuštate da vam neočekivane poteškoće upropaste dan i da li zbog pitanja „šta ako“ noću ne spavate i vrtite po glavi sve one gadne scenarije o neizvesnoj budućnosti koja vas čeka? Ako je tako onda vam zaista treba <em>Oladi malo</em>.<br>\n" +
            "<br>\n" +
            "Samo zato što se sve raspada, ne znači da vi ne možete to da popravite. Bilo da ste pod stresom zbog onoga što se još nije desilo, ali vas opterećuje gore nego da jeste, ili neopevano šizite zbog onoga što se već desilo, ali bi trebalo malo da oladite, Metod bezbrižnosti Sare Najt pomaže vam da suzbijete teskobu i preterano razmišljanje koje sve čini samo još gorim. <br>\n" +
            "<br>\n" +
            "<em>Oladi malo</em> objašnjava:<br>\n" +
            "<br>\n" +
            "•\tČetiri lica šizenja – i njihova naličja.<br>\n" +
            "•\tKako da prihvatite ono što ne možete da kontrolišete.<br>\n" +
            "•\tProduktivnu efikasnu korisnu zabrinutost (PEKZ).<br>\n" +
            "•\tTri principa izlaženja na kraj sa životnim olujama .<br>\n" +
            "•\tI mnogo toga još!<br>\n" +
            "<br>\n" +
            "„Genije.“ <br>\n" +
            "– <em>Cosmopolitan</em><br>\n" +
            "<br>\n" +
            "„Samopomoć u koju možete da se zakunete.“ <br>\n" +
            "– <em>The Boston Globe</em><br>\n" +
            "<br>\n" +
            "„Urnebesno... zaista praktično.“ <br>\n" +
            "– <em>Booklist</em></div>",
        image: "oladi_malo",
        yearPublished: "2022.",
        numberOfPages: "272",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: true,
    },
    {
        id: 17,
        title: "Služba 2",
        author: "Goran Živaljević",
        description: "<div style=\"text-align: justify;\"><em>O događajima iz nevidljive stvarnosti<br>\n" +
            "</em> <br>\n" +
            "Nastavak svedočenja Gorana Živaljevića, autora knjige o menama i delovanju srpske Službe državne bezbednosti u prethodne tri decenije, ovoga puta u vidu niza poglavlja o običnim, malim ljudima i za većinu čitalaca neprimetnim zbivanjima iz ugla jednog profesionalnog obaveštajca. Uz mnogo nepoznatih pojedinosti iza kulisa političkih igara i bezbednosnih kalkulacija, <em>Služba 2</em> nagoveštava odgovore na mnoga pitanja koja su do danas ostala bez pouzdanog odgovora, između ostalih:<br>\n" +
            "<br>\n" +
            "•\tKako je Služba uvodila telefone političkim disidentima?<br>\n" +
            "•\tDa li je Otpor imao svoja uporišta u Državnoj bezbednosti?<br>\n" +
            "•\tZbog čega nije istraženo ubistvo Momira Gavrilovića?<br>\n" +
            "•\tKako se postaje „novinar u civilu“?<br>\n" +
            "•\tKako su strane obaveštajne službe „zavodile“ Koštunicu? <br>\n" +
            "•\tZbog čega postoji večiti sukob civilne i vojne službe?<br>\n" +
            "•\tKo je glavni kočničar reforme bezbednosnog sektora?<br>\n" +
            "<br>\n" +
            "Izvan saznajnih okvira ove bezbednosne slagalice ostaje utisak da se Živaljević u većini priča iz svoje druge knjige osvedočio i kao odličan pripovedač, a pojedine epizode, kao „Srpski svet“ ili „Lokator“, mogu se svrstati u uzorne primere savremene srpske proze. <br>\n" +
            "<br>\n" +
            "„Dobrodošao prilog našoj savremenoj memoarskoj literaturi i intelektualno osveženje od stereotipa neminovnih u vreme velikih podela. U poređenju sa memoarskim i dnevničkim zapisima pojedinih naših savremenih diplomata, koji su bili na mnogo višim funkcijama i imali veći uticaj nego Živaljević, dobijamo sliku istinski velike vrednosti knjige <em>Služba</em>.“<br>\n" +
            "– Čedomir Antić<br>\n" +
            "<br>\n" +
            "„<em>Služba</em> je bitna knjiga koja će predstavljati građu za istorijsko proučavanje zato što barem svedoči o namernoj nespremnosti države da sebe zaštiti i o njenoj otuđenosti od sopstvenih građana.“<br>\n" +
            "– Vladimir Todorić&nbsp;</div>",
        image: "sluzba_2",
        yearPublished: "2022.",
        numberOfPages: "208",
        averageGrade: 0,
        commentList: [],
        isOnPromotion: false,
    },
]

const bookModel = () => {
    const getBookList = () => {
        return bookList;
    }

    const getBookById = (id: number) => {
        return bookList.find(book => book.id == id);
    }

    const addBook = (book: Book) => {
        let foundBook = bookList.find(b => b.title == book.title)
        if (foundBook != undefined) {
            return false;
        }

        book.id = bookList.length + 1;
        bookList.push(book);

        return true;
    }

    const commentBook = (bookId: number, comment: BookComment): Book => {
        let i = 0;
        for (; i < bookList.length; i++) {
            if(bookList[i].id == bookId) {
                bookList[i].commentList.push(comment);
                bookList[i].averageGrade += comment.grade;
                break;
            }
        }

        return bookList[i];
    }

    const togglePromotion = (bookId: number) => {
        for (let i = 0; i < bookList.length; i++) {
            if(bookList[i].id == bookId) {
                bookList[i].isOnPromotion = !bookList[i].isOnPromotion;
            }
        }
    }

    const getBooksOnPromotion = () => {
        return bookList.filter(book => book.isOnPromotion);
    }

    return {getBookList, getBookById, addBook, commentBook, getBooksOnPromotion, togglePromotion}
}

export {bookModel}
export type {Book, BookComment}