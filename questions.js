// Fragenkatalog - hier kannst du beliebig Fragen hinzufügen oder ändern.
// "correct" ist der INDEX (0 = erste Antwort, 1 = zweite, 2 = dritte, 3 = vierte)

const QUESTIONS = [

    // === GESCHICHTE ===
    {
        question: "Wer fand im Jahr 1498 den Seeweg nach Indien?",
        answers: ["Christoph Kolumbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher Herrschaftsbereich gilt als das größte zusammenhängende Landreich der Weltgeschichte?",
        answers: ["Das Römische Reich", "Das Britische Weltreich", "Das Mongolische Reich", "Das Osmanische Reich"],
        correct: 2,
        category: "Geschichte"
    },
    {
        question: "In welchem Jahr wurden die Vereinten Nationen (UNO) offiziell gegründet?",
        answers: ["1918", "1945", "1955", "1961"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der erste Mensch, der 1961 in den Weltraum abhob und die Erde umkreiste?",
        answers: ["Neil Armstrong", "Juri Gagarin", "Buzz Aldrin", "John Glenn"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der letzte russische Zar, der infolge der Revolution von 1917 abdanken musste?",
        answers: ["Alexander III.", "Nikolaus II.", "Peter der Große", "Iwan der Schreckliche"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher karthagische Feldherr überquerte im Krieg gegen Rom mit Elefanten die Alpen?",
        answers: ["Scipio Africanus", "Hannibal", "Hamilkar Barkas", "Hasdrubal"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß die letzte Pharaonin Ägyptens, bevor das Land eine römische Provinz wurde?",
        answers: ["Nofretete", "Kleopatra VII.", "Hatschepsut", "Teje"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher Staatsmann gilt als der „Gründer der Türkei\" und erster Präsident der Republik?",
        answers: ["Ismet Inönü", "Mustafa Kemal Atatürk", "Recep Tayyip Erdoğan", "Enver Pascha"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer führte im Deutschen Reich im 19. Jahrhundert die Kranken-, Unfall- und Rentenversicherung ein?",
        answers: ["Wilhelm I.", "Otto von Bismarck", "Friedrich III.", "Leo von Caprivi"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welchem Jahr endete der Zweite Weltkrieg offiziell in Europa?",
        answers: ["1918", "1945", "1939", "1953"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß der Leibarzt von Adolf Hitler, der für seine unkonventionellen Behandlungsmethoden bekannt war?",
        answers: ["Josef Mengele", "Theodor Morell", "Karl Brandt", "Werner Haase"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher römische Kaiser teilte das Reich im Jahr 285 in eine West- und eine Osthälfte?",
        answers: ["Konstantin der Große", "Diokletian", "Theodosius I.", "Trajan"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welcher Schlacht im Jahr 1813 unterlag Napoleon Bonaparte den verbündeten Armeen von Preußen, Österreich, Russland und Schweden?",
        answers: ["Schlacht bei Waterloo", "Völkerschlacht bei Leipzig", "Schlacht bei Austerlitz", "Schlacht bei Jena"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß das Schiff, mit dem die Pilgerväter 1620 in Nordamerika landeten?",
        answers: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher preußische König wurde auch der „Soldatenkönig\" genannt?",
        answers: ["Friedrich der Große", "Friedrich Wilhelm I.", "Friedrich I.", "Wilhelm II."],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welchem heutigen Land lag das antike Mesopotamien zum größten Teil?",
        answers: ["Iran", "Irak", "Syrien", "Ägypten"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war die erste Frau im Amt des britischen Premierministers?",
        answers: ["Theresa May", "Margaret Thatcher", "Queen Victoria", "Elizabeth I."],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welches Ereignis im Jahr 1914 gilt als unmittelbarer Auslöser des Ersten Weltkriegs?",
        answers: ["Der Untergang der Titanic", "Das Attentat von Sarajevo", "Die Russisch-Japanische-Krise", "Die Besetzung Elsass-Lothringens"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß der geheime Zusatzpakt zum Hitler-Stalin-Pakt, der die Aufteilung Osteuropas regelte?",
        answers: ["Münchner Abkommen", "Geheimes Zusatzprotokoll", "Warschauer Pakt", "Molotow-Ribbentrop-Zusatz"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher US-Präsident ordnete den Abwurf der Atombomben auf Hiroshima und Nagasaki an?",
        answers: ["Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welche Dynastie regierte Österreich-Ungarn bis zum Ende des Ersten Weltkriegs?",
        answers: ["Hohenzollern", "Habsburger", "Bourbonen", "Romanows"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher Entdecker nannte den Pazifischen Ozean aufgrund seiner ruhigen Gewässer „Mar Pacífico\"?",
        answers: ["Vasco da Gama", "Ferdinand Magellan", "James Cook", "Amerigo Vespucci"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welchem Jahr begann der Bau der Berliner Mauer?",
        answers: ["1945", "1961", "1953", "1989"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der Anführer der Jakobiner während der Französischen Revolution?",
        answers: ["Georges Danton", "Maximilien de Robespierre", "Jean-Paul Marat", "Napoleon Bonaparte"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß die erste Zivilisation, die eine Keilschrift entwickelte?",
        answers: ["Die Ägypter", "Die Sumerer", "Die Phönizier", "Die Inka"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher Vertrag beendete 1648 den Dreißigjährigen Krieg?",
        answers: ["Vertrag von Tordesillas", "Westfälischer Friede", "Friede von Utrecht", "Wiener Kongress"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der erste Präsident der Vereinigten Staaten von Amerika?",
        answers: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "Benjamin Franklin"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß der berühmte Inka-Stützpunkt in den peruanischen Anden, der erst 1911 wiederentdeckt wurde?",
        answers: ["Chichén Itzá", "Machu Picchu", "Tikal", "Cuzco"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welches antike Weltwunder befand sich in Alexandria?",
        answers: ["Die Hängenden Gärten", "Der Leuchtturm (Pharos)", "Das Mausoleum von Halikarnassos", "Der Koloss von Rhodos"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der Begründer des Islam?",
        answers: ["Abraham", "Mohammed", "Isa (Jesus)", "Musa (Moses)"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welcher Stadt wurde 1945 die Charta der Vereinten Nationen unterzeichnet?",
        answers: ["New York", "San Francisco", "Genf", "London"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welche englische Königin regierte von 1837 bis 1901 und gab einer ganzen Ära ihren Namen?",
        answers: ["Elizabeth I.", "Victoria", "Elizabeth II.", "Mary I."],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher Philosoph war der Lehrer von Alexander dem Großen?",
        answers: ["Platon", "Aristoteles", "Sokrates", "Diogenes"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welchem Jahr fiel die Berliner Mauer?",
        answers: ["1987", "1989", "1990", "1991"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
        answers: ["Ludwig Erhard", "Konrad Adenauer", "Willy Brandt", "Helmut Kohl"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß die spanische Flotte, die 1588 versuchte, England zu invadieren?",
        answers: ["Conquistadores", "Armada", "Santa Maria", "Galeonen-Flotte"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher russische Zar ließ die Stadt St. Petersburg als „Fenster nach Europa\" bauen?",
        answers: ["Iwan der Schreckliche", "Peter der Große", "Alexander I.", "Nikolaus I."],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welcher heutigen Nation lag die antike Stadt Karthago?",
        answers: ["Libyen", "Tunesien", "Algerien", "Marokko"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß das Wirtschaftsprogramm der USA zum Wiederaufbau Europas nach dem Zweiten Weltkrieg?",
        answers: ["New Deal", "Marshallplan", "Truman-Doktrin", "Morgenthau-Plan"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher Entdecker erreichte als erster den Südpol?",
        answers: ["Robert Falcon Scott", "Roald Amundsen", "Ernest Shackleton", "Fridtjof Nansen"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher König von Frankreich wurde „Sonnenkönig\" genannt?",
        answers: ["Ludwig XIII.", "Ludwig XIV.", "Ludwig XVI.", "Heinrich IV."],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welche Zivilisation baute die Stadt Teotihuacán im heutigen Mexiko?",
        answers: ["Maya", "Azteken (übernommen von einer unbekannten Kultur)", "Inka", "Olmeken"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welchem Jahr begann die Reformation durch Martin Luthers Thesenanschlag?",
        answers: ["1492", "1517", "1555", "1618"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der letzte Präsident der Sowjetunion?",
        answers: ["Boris Jelzin", "Michail Gorbatschow", "Leonid Breschnew", "Nikita Chruschtschow"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welches Reich wurde durch den Pakt von Verdun 843 in drei Teile geteilt?",
        answers: ["Das Römische Reich", "Das Frankenreich", "Das Byzantinische Reich", "Das Heilige Römische Reich"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war die ägyptische Königin, die mit Nefertiti (Nofretete) verheiratet war?",
        answers: ["Ramses II.", "Echnaton", "Tutanchamun", "Thutmosis III."],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wie hieß der legendäre Gründer Roms (zusammen mit seinem Bruder Remus)?",
        answers: ["Aeneas", "Romulus", "Augustus", "Pompejus"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Welcher chinesische Kaiser ließ die erste Version der Großen Mauer bauen und einigte das Reich?",
        answers: ["Han Wudi", "Qin Shihuangdi", "Kublai Khan", "Sun Yat-sen"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "In welchem Jahr wurde die Sklaverei in den USA durch den 13. Verfassungszusatz offiziell abgeschafft?",
        answers: ["1861", "1865", "1870", "1776"],
        correct: 1,
        category: "Geschichte"
    },
    {
        question: "Wer war der Anführer der Unabhängigkeitsbewegung in Indien, der für gewaltlosen Widerstand bekannt war?",
        answers: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Indira Gandhi"],
        correct: 1,
        category: "Geschichte"
    },

    // === NATURWISSENSCHAFTEN ===
    {
        question: "Welcher Physiker formulierte das universelle Gesetz der Schwerkraft?",
        answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was wird in der Zellbiologie als das „Kraftwerk der Zelle\" bezeichnet?",
        answers: ["Zellkern", "Mitochondrien", "Ribosomen", "Golgi-Apparat"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie lange benötigt das Licht der Sonne, um die Erdoberfläche zu erreichen?",
        answers: ["30 Sekunden", "8 Minuten", "1 Stunde", "24 Stunden"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches chemische Element verbirgt sich hinter dem Symbol „Au\"?",
        answers: ["Silber", "Gold", "Kupfer", "Aluminium"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wer gilt als der Erfinder des World Wide Web (WWW)?",
        answers: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Planet ist der Sonne am nächsten?",
        answers: ["Venus", "Merkur", "Mars", "Jupiter"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist die härteste natürlich vorkommende Substanz auf der Erde?",
        answers: ["Eisen", "Diamant", "Quarz", "Granit"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie viele Planeten gehören nach heutiger Definition zu unserem Sonnensystem?",
        answers: ["Sieben", "Acht", "Neun", "Zehn"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wer war die erste Frau, die einen Nobelpreis gewann?",
        answers: ["Lise Meitner", "Marie Curie", "Irène Joliot-Curie", "Dorothy Hodgkin"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie nennt man die unterste Schicht der Atmosphäre, in der das Wetter stattfindet?",
        answers: ["Stratosphäre", "Troposphäre", "Mesosphäre", "Exosphäre"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Edelgas hat die Ordnungszahl 2 im Periodensystem?",
        answers: ["Neon", "Helium", "Argon", "Krypton"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist die Maßeinheit für die elektrische Stromstärke?",
        answers: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Organ im menschlichen Körper produziert Insulin?",
        answers: ["Leber", "Bauchspeicheldrüse", "Milz", "Niere"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise (inklusive Weisheitszähne)?",
        answers: ["28", "32", "30", "34"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches chemische Element wird durch das Symbol 'K' dargestellt?",
        answers: ["Kohlenstoff", "Kalium", "Kalzium", "Kupfer"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was besagt der erste Hauptsatz der Thermodynamik im Wesentlichen?",
        answers: ["Die Entropie nimmt zu", "Energieerhaltung", "Der absolute Nullpunkt ist unerreichbar", "Wärme fließt von warm nach kalt"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welche Farbe hat flüssiger Sauerstoff?",
        answers: ["Farblos", "Hellblau", "Hellgrün", "Zartrosa"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wer entwickelte die Theorie der Plattentektonik (Kontinentaldrift)?",
        answers: ["Charles Darwin", "Alfred Wegener", "Gregor Mendel", "Max Planck"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist die Lichtgeschwindigkeit im Vakuum ungefähr (in km/s)?",
        answers: ["150.000", "300.000", "450.000", "1.000.000"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie nennt man den Vorgang, bei dem Wasser direkt von festem in gasförmigen Zustand übergeht?",
        answers: ["Kondensation", "Sublimation", "Verdampfung", "Resublimation"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Teil des Auges ist für das Farbsehen verantwortlich?",
        answers: ["Stäbchen", "Zapfen", "Hornhaut", "Iris"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist das leichteste Metall auf Erden?",
        answers: ["Aluminium", "Lithium", "Magnesium", "Beryllium"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Hormon bereitet den Körper auf 'Kampf oder Flucht' vor?",
        answers: ["Cortisol", "Adrenalin", "Testosteron", "Östrogen"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "In welcher Einheit wird die Frequenz gemessen?",
        answers: ["Joule", "Hertz", "Newton", "Pascal"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Planet unseres Sonnensystems hat die meisten Monde?",
        answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie nennt man die Vererbungseinheiten, die auf den Chromosomen liegen?",
        answers: ["Proteine", "Gene", "Aminosäuren", "Enzyme"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist der Hauptbestandteil von Erdgas?",
        answers: ["Ethan", "Methan", "Propan", "Butan"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Himmelskörper wurde 2006 der Status als Planet aberkannt?",
        answers: ["Ceres", "Pluto", "Eris", "Makemake"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie heißt das Pigment, das Pflanzen ihre grüne Farbe verleiht?",
        answers: ["Hämoglobin", "Chlorofyll", "Melanin", "Carotin"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Element hat die höchste Elektronegativität?",
        answers: ["Sauerstoff", "Fluor", "Chlor", "Stickstoff"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist die chemische Formel für Ozon?",
        answers: ["O2", "O3", "CO2", "H2O"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie viele Halswirbel hat eine Giraffe?",
        answers: ["12", "7", "24", "15"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welche Kraft hält die Planeten auf ihrer Bahn um die Sonne?",
        answers: ["Zentrifugalkraft", "Gravitation", "Magnetismus", "Reibungskraft"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist die Hauptursache für Ebbe und Flut?",
        answers: ["Erdrotation", "Mondanziehungskraft", "Meeresströmungen", "Winde"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Stoff ist der Hauptbestandteil von Glas?",
        answers: ["Kalk", "Quarzsand (Siliciumdioxid)", "Soda", "Ton"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie nennt man ein Atom mit einer elektrischen Ladung?",
        answers: ["Isotop", "Ion", "Molekül", "Neutron"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Teil des Gehirns steuert das Gleichgewicht und die Koordination?",
        answers: ["Großhirn", "Kleinhirn", "Hirnstamm", "Zwischenhirn"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "In welcher Galaxie befindet sich unser Sonnensystem?",
        answers: ["Andromeda", "Milchstraße", "Sombrero-Galaxie", "Whirlpool-Galaxie"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Metall ist bei Raumtemperatur flüssig?",
        answers: ["Gallium", "Quecksilber", "Brom", "Cäsium"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist die prozentuale Zusammensetzung von Stickstoff in der Erdatmosphäre?",
        answers: ["21%", "78%", "0,9%", "0,04%"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Gesetz beschreibt das Verhältnis von Spannung, Stromstärke und Widerstand?",
        answers: ["Hookesches Gesetz", "Ohmsches Gesetz", "Faradaysches Gesetz", "Snellius-Gesetz"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Teil der Zelle enthält die Erbinformation?",
        answers: ["Zytoplasma", "Zellkern", "Ribosomen", "Lysosomen"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Was ist das härteste Metall?",
        answers: ["Titan", "Wolfram", "Osmium", "Eisen"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie nennt man die Lehre von den Pilzen?",
        answers: ["Botanik", "Mykologie", "Phykologie", "Zoologie"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welche Wellenform wird für WLAN-Signale verwendet?",
        answers: ["Infrarot", "Radiowellen (Mikrowellen)", "Ultraviolett", "Schallwellen"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wer entdeckte das Penicillin?",
        answers: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Paul Ehrlich"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welches Element ist der Hauptbestandteil der Sonne?",
        answers: ["Helium", "Wasserstoff", "Kohlenstoff", "Sauerstoff"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie viele Kontinente gibt es auf der Erde?",
        answers: ["5", "7", "6", "8"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Welcher Planet wird oft als 'Morgenstern' oder 'Abendstern' bezeichnet?",
        answers: ["Mars", "Venus", "Merkur", "Jupiter"],
        correct: 1,
        category: "Naturwissenschaften"
    },
    {
        question: "Wie nennt man den Effekt, bei dem die Frequenz einer Welle sich ändert, wenn sich Quelle und Beobachter bewegen?",
        answers: ["Tyndall-Effekt", "Doppler-Effekt", "Photoelektrischer Effekt", "Compton-Effekt"],
        correct: 1,
        category: "Naturwissenschaften"
    },

    // === KUNST & KULTUR ===
    {
        question: "Welcher Renaissance-Künstler malte das Wandgemälde „Das letzte Abendmahl\"?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Raffael", "Donatello"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schrieb den Roman „Stolz und Vorurteil\"?",
        answers: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "Emily Dickinson"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Maler schuf das Werk „Der Kuss\" im Jugendstil?",
        answers: ["Egon Schiele", "Gustav Klimt", "Oskar Kokoschka", "Claude Monet"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welcher Stadt steht das Opernhaus mit der charakteristischen Segelarchitektur?",
        answers: ["New York", "Sydney", "London", "Paris"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer ist der Autor des dystopischen Romans „1984\"?",
        answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Margaret Atwood"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher niederländische Maler schuf die „Sternennacht\"?",
        answers: ["Rembrandt", "Vincent van Gogh", "Jan Vermeer", "Frans Hals"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Künstler schuf „Guernica\" als Reaktion auf den spanischen Bürgerkrieg?",
        answers: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Francisco de Goya"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie heißt der US-Preis für Literatur, Journalismus und Musik?",
        answers: ["Oscar", "Pulitzer-Preis", "Grammy", "Golden Globe"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer malte das „Mädchen mit dem Perlenohrring\"?",
        answers: ["Peter Paul Rubens", "Johannes Vermeer", "Rembrandt", "Jan van Eyck"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer komponierte die Oper „Die Zauberflöte\"?",
        answers: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Richard Wagner"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Architekt entwarf das Guggenheim-Museum in Bilbao?",
        answers: ["Le Corbusier", "Frank Gehry", "Zaha Hadid", "Walter Gropius"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welchem Jahrhundert lebte der Dichter Dante Alighieri?",
        answers: ["12. Jahrhundert", "13./14. Jahrhundert", "15. Jahrhundert", "16. Jahrhundert"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie heißt die Epoche der Kunstgeschichte, die auf das Barock folgte?",
        answers: ["Renaissance", "Rokoko", "Klassizismus", "Romantik"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Schriftsteller schuf die Figur des Detektivs Sherlock Holmes?",
        answers: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Raymond Chandler"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Was ist das Hauptmerkmal des Pointillismus?",
        answers: ["Grobe Pinselstriche", "Kleine Farbpunkte", "Geometrische Formen", "Verschwommene Ränder"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer malte das berühmte Porträt 'Mona Lisa'?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Raffael", "Tizian"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welcher Stadt spielt James Joys' Roman 'Ulysses'?",
        answers: ["London", "Dublin", "Paris", "New York"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welches Musikinstrument wird oft als 'Königin der Instrumente' bezeichnet?",
        answers: ["Violine", "Orgel", "Klavier", "Harfe"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schrieb das Drama 'Faust'?",
        answers: ["Friedrich Schiller", "Johann Wolfgang von Goethe", "Heinrich Heine", "Gotthold Ephraim Lessing"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Filmregisseur ist für Klassiker wie 'Psycho' und 'Die Vögel' bekannt?",
        answers: ["Steven Spielberg", "Alfred Hitchcock", "Stanley Kubrick", "Francis Ford Coppola"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie nennt man die japanische Kunst des Papierfaltens?",
        answers: ["Ikebana", "Origami", "Haiku", "Bonsai"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Künstler gilt als Hauptvertreter des Surrealismus und malte 'Die Beständigkeit der Erinnerung'?",
        answers: ["René Magritte", "Salvador Dalí", "Max Ernst", "Joan Miró"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer komponierte die 'Neunte Sinfonie', die die 'Ode an die Freude' enthält?",
        answers: ["Johannes Brahms", "Ludwig van Beethoven", "Franz Schubert", "Gustav Mahler"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welcher Sprache wurde das Epos 'Ilias' ursprünglich verfasst?",
        answers: ["Latein", "Altgriechisch", "Hebräisch", "Sanskrit"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie heißt das berühmteste Ballett von Pjotr Iljitsch Tschaikowski?",
        answers: ["Giselle", "Schwanensee", "Coppélia", "Don Quichotte"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Maler schnitt sich in einem Anfall von Wahnsinn ein Stück seines Ohres ab?",
        answers: ["Paul Gauguin", "Vincent van Gogh", "Henri Matisse", "Edvard Munch"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schrieb die 'Harry Potter'-Buchreihe?",
        answers: ["Stephen King", "J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welches Land ist die Heimat des Flamenco?",
        answers: ["Italien", "Spanien", "Portugal", "Mexiko"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schuf die Skulptur 'Der Denker'?",
        answers: ["Donatello", "Auguste Rodin", "Alberto Giacometti", "Henry Moore"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie nennt man ein Gedicht mit 14 Zeilen und einem festen Reimschema?",
        answers: ["Ode", "Sonett", "Elegie", "Ballade"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer ist der Schöpfer der Comicfiguren 'Asterix und Obelix'?",
        answers: ["Hergé", "Uderzo und Goscinny", "Franquin", "Peyo"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welchem Museum befindet sich das Original der 'Venus von Milo'?",
        answers: ["British Museum", "Louvre", "Metropolitan Museum of Art", "Prado"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welche Rockband veröffentlichte das Album 'The Wall'?",
        answers: ["The Beatles", "Pink Floyd", "Led Zeppelin", "The Rolling Stones"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schrieb den Roman 'Der alten Mann und das Meer'?",
        answers: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie heißt das bekannteste Gemälde von Edvard Munch?",
        answers: ["Die Nachtwache", "Der Schrei", "Das Frühstück im Grünen", "Impression, Sonnenaufgang"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher italienische Tenor war Teil der 'Drei Tenöre' (neben Domingo und Carreras)?",
        answers: ["Andrea Bocelli", "Luciano Pavarotti", "Enrico Caruso", "Vittorio Grigolo"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer malte die Deckenfresken der Sixtinischen Kapelle?",
        answers: ["Leonardo da Vinci", "Michelangelo", "Raffael", "Botticelli"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welche fiktive Stadt ist die Heimat von Batman?",
        answers: ["Metropolis", "Gotham City", "Central City", "Star City"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schrieb das Musical 'Das Phantom der Oper'?",
        answers: ["Leonard Bernstein", "Andrew Lloyd Webber", "Stephen Sondheim", "Cole Porter"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welcher kulturellen Epoche entstand der Jazz?",
        answers: ["Ende des 18. Jahrhunderts", "Anfang des 20. Jahrhunderts", "Mitte des 19. Jahrhunderts", "Nach dem Zweiten Weltkrieg"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer ist der Autor von 'Don Quijote'?",
        answers: ["Lope de Vega", "Miguel de Cervantes", "Federico García Lorca", "Gabriel García Márquez"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Künstler ist für seine Campbell’s-Suppendosen-Bilder bekannt?",
        answers: ["Roy Lichtenstein", "Andy Warhol", "Keith Haring", "Jasper Johns"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welche Oper von Bizet spielt im Milieu der Tabakarbeiterinnen in Sevilla?",
        answers: ["Aida", "Carmen", "Tosca", "La Traviata"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer schrieb den Klassiker 'Die Verwandlung'?",
        answers: ["Thomas Mann", "Franz Kafka", "Bertolt Brecht", "Hermann Hesse"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie nennt man die traditionelle indische Musikrichtung?",
        answers: ["Gamelan", "Raga", "Fado", "Enka"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Regisseur schuf die 'Star Wars'-Saga?",
        answers: ["Steven Spielberg", "George Lucas", "James Cameron", "Ridley Scott"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "In welchem Land wurde der Tango erfunden?",
        answers: ["Brasilien", "Argentinien", "Chile", "Kolumbien"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wer malte 'Die Freiheit führt das Volk'?",
        answers: ["Jacques-Louis David", "Eugène Delacroix", "Jean-Auguste-Dominique Ingres", "Gustave Courbet"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Welcher Philosoph schrieb 'Also sprach Zarathustra'?",
        answers: ["Immanuel Kant", "Friedrich Nietzsche", "Arthur Schopenhauer", "Georg Wilhelm Friedrich Hegel"],
        correct: 1,
        category: "Kunst & Kultur"
    },
    {
        question: "Wie heißt das Architektur- und Design-Institut, das 1919 von Walter Gropius gegründet wurde?",
        answers: ["Werkbund", "Bauhaus", "Secession", "De Stijl"],
        correct: 1,
        category: "Kunst & Kultur"
    },

    // === ESSEN & TRINKEN ===
    {
        question: "Von welchem Kontinent stammt die Kartoffel ursprünglich?",
        answers: ["Afrika", "Amerika", "Asien", "Australien"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "In welchem Teil eines Apfels finden sich die meisten Vitamine?",
        answers: ["Im Kerngehäuse", "In der Schale", "Im Fruchtfleisch", "Im Stiel"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist das teuerste Gewürz der Welt nach Gewicht?",
        answers: ["Vanille", "Safran", "Zimt", "Muskatnuss"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welcher Pflanze wird Schokolade hergestellt?",
        answers: ["Kaffeepflanze", "Kakaopflanze", "Teestrauch", "Zuckerrohr"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "In welchem Land hat das Gericht Sushi seinen Ursprung?",
        answers: ["China", "Japan", "Thailand", "Vietnam"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Alkaloid in Kaffee wirkt stimulierend auf den Organismus?",
        answers: ["Nicotin", "Koffein", "Adrenalin", "Serotonin"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt der Honigwein, der mit der Wikingerkultur assoziiert wird?",
        answers: ["Absinth", "Met", "Sherry", "Cidre"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welche Marmelade wird traditionell für die Sachertorte verwendet?",
        answers: ["Erdbeere", "Aprikose/Marille", "Himbeere", "Kirsche"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Land hat den höchsten Pro-Kopf-Kaffeeverbrauch weltweit?",
        answers: ["Italien", "Finnland", "USA", "Brasilien"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist die Hauptzutat von klassischem Hummus?",
        answers: ["Linsen", "Kichererbsen", "Bohnen", "Erbsen"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man die scharfe japanische Meerrettichpaste?",
        answers: ["Ginger", "Wasabi", "Miso", "Sake"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welcher Getreidesorte wird traditionell Bourbon Whiskey hergestellt?",
        answers: ["Gerste", "Mais", "Roggen", "Weizen"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Obst ist die Hauptzutat einer klassischen Tarte Tatin?",
        answers: ["Birne", "Apfel", "Pfirsich", "Aprikose"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt der italienische Blauschimmelkäse aus der Lombardei?",
        answers: ["Roquefort", "Gorgonzola", "Stilton", "Camembert"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist die Basis von 'Guacamole'?",
        answers: ["Tomaten", "Avocado", "Paprika", "Gurke"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welcher Pflanze wird Tequila gewonnen?",
        answers: ["Kaktus", "Agave", "Zuckerrohr", "Aloe Vera"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man den Vorgang, bei dem Wein in ein anderes Gefäß umgefüllt wird, um ihn von Depot zu trennen?",
        answers: ["Filtern", "Dekantieren", "Fermentieren", "Destillieren"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Land ist bekannt für seine 'Peking-Ente'?",
        answers: ["Japan", "China", "Vietnam", "Korea"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist 'Tofu' eigentlich?",
        answers: ["Geronnene Sojamilch", "Gepresster Reis", "Kichererbsenpaste", "Weizengluten"],
        correct: 0,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt das Nationalgericht Spaniens, das oft mit Safranreis und Meeresfrüchten zubereitet wird?",
        answers: ["Risotto", "Paella", "Couscous", "Polenta"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welcher Fisch wird traditionell für 'Gravad Lax' verwendet?",
        answers: ["Kabeljau", "Lachs", "Forelle", "Hering"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist die Hauptzutat von 'Meringue' (Baiser)?",
        answers: ["Mehl", "Eiweiß und Zucker", "Sahne", "Eigelb"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man den indischen Lehmofen, in dem Brot und Fleisch gebacken werden?",
        answers: ["Wok", "Tandoor", "Tajine", "Hibachi"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Gewürz wird aus der Rinde eines Baumes gewonnen?",
        answers: ["Nelke", "Zimt", "Pfeffer", "Kardamom"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist 'Pumpernickel'?",
        answers: ["Ein Kuchen", "Ein dunkles Vollkornbrot", "Ein Käse", "Ein Eintopf"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welcher Frucht wird 'Kirschwasser' destilliert?",
        answers: ["Apfel", "Kirsche", "Zwetschge", "Birne"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt die berühmte französische Fischsuppe aus Marseille?",
        answers: ["Consommé", "Bouillabaisse", "Gazpacho", "Minestrone"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welcher Pilz gilt als einer der teuersten Speisepilze weltweit?",
        answers: ["Pfifferling", "Trüffel", "Steinpilz", "Champignon"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist die Grundzutat von 'Pesto Genovese'?",
        answers: ["Petersilie", "Basilikum", "Minze", "Koriander"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welcher Bohne wird Schokolade gemacht?",
        answers: ["Kaffeebohne", "Kakaobohne", "Vanillebohne", "Tonkabohne"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man die kleinen italienischen Teigklößchen, die oft aus Kartoffeln hergestellt werden?",
        answers: ["Ravioli", "Gnocchi", "Tortellini", "Fusilli"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Land ist der größte Weinproduzent der Welt (nach Volumen)?",
        answers: ["Frankreich", "Italien", "Spanien", "USA"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist 'Umami'?",
        answers: ["Ein japanisches Messer", "Die fünfte Geschmacksrichtung", "Eine Kochtechnik", "Ein spezielles Gewürz"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt das ungarische Nationalgericht aus Fleisch, Zwiebeln und Paprika?",
        answers: ["Pörkölt (Gulasch)", "Lecsó", "Halászlé", "Dobostorte"],
        correct: 0,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welchem Teil des Zuckerrohrs wird Rum gewonnen?",
        answers: ["Blätter", "Melasse (oder Saft)", "Wurzeln", "Samen"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist 'Rooibos' eigentlich?",
        answers: ["Ein Schwarztee", "Ein südafrikanischer Strauch", "Ein chinesischer Kräutertee", "Ein Früchtetee"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man den Teig für Strudel, der extrem dünn ausgezogen wird?",
        answers: ["Mürbeteig", "Strudelteig (Ausziehteig)", "Blätterteig", "Hefeteig"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welche Frucht wird auch als 'Königin der Früchte' bezeichnet und ist für ihren intensiven Geruch bekannt?",
        answers: ["Mango", "Durian", "Papaya", "Ananas"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus was besteht 'Gelatine' primär?",
        answers: ["Sojaprotein", "Tierisches Bindegewebe (Kollagen)", "Algenstärke", "Zucker"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt der griechische Schnaps mit Anisgeschmack?",
        answers: ["Tsipouro", "Ouzo", "Metaxa", "Raki"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist die Hauptzutat von 'Couscous'?",
        answers: ["Reis", "Hartweizengrieß", "Hirse", "Mais"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man die Technik, Fleisch bei niedriger Temperatur lange in Fett zu garen?",
        answers: ["Braten", "Konfieren (Confit)", "Sautieren", "Pochieren"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Land ist die Heimat des 'Pilsner' Biers?",
        answers: ["Deutschland", "Tschechien", "Belgien", "Österreich"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist 'Kaviar'?",
        answers: ["Fischfleisch", "Fischrogen (Eier)", "Schneckeneier", "Algenextrakt"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie nennt man den Schaumwein aus der gleichnamigen Region in Frankreich?",
        answers: ["Prosecco", "Champagner", "Cava", "Sekt"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist die Hauptzutat von 'Ratatouille'?",
        answers: ["Kartoffeln", "Gemüse (Auberginen, Zucchini, Paprika)", "Fleisch", "Nudeln"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Aus welcher Region stammt der 'Edamer' Käse?",
        answers: ["Schweiz", "Niederlande", "Dänemark", "Frankreich"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Was ist 'Kimchi'?",
        answers: ["Ein Reisgericht", "Fermentiertes Gemüse (meist Koh)", "Eine Suppe", "Ein Getränk"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Wie heißt der bekannte mexikanische Kaffeelikör?",
        answers: ["Baileys", "Kahlúa", "Tia Maria", "Amaretto"],
        correct: 1,
        category: "Essen & Trinken"
    },
    {
        question: "Welches Gewürz verleiht dem Curry seine charakteristische gelbe Farbe?",
        answers: ["Kreuzkümmel", "Kurkuma", "Koriander", "Kardamom"],
        correct: 1,
        category: "Essen & Trinken"
    },

    // === SPORT ===
    {
        question: "Welches Land ist mit fünf Titeln Rekordweltmeister im Männerfußball?",
        answers: ["Deutschland", "Brasilien", "Italien", "Argentinien"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wer hält den Weltrekord über 100 Meter mit 9,58 Sekunden?",
        answers: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Grand-Slam-Titel hat Novak Djokovic gewonnen (Stand 2023)?",
        answers: ["20", "24", "22", "18"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie lang ist ein Marathon offiziell?",
        answers: ["40,000 km", "42,195 km", "45,195 km", "38,000 km"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart fanden 2008 die Olympischen Sommerspiele statt?",
        answers: ["London", "Peking", "Athen", "Tokio"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Spieler stehen pro Mannschaft beim Fußball auf dem Platz?",
        answers: ["10", "11", "12", "9"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welcher Schwimmer gewann 23 Olympische Goldmedaillen?",
        answers: ["Mark Spitz", "Michael Phelps", "Ian Thorpe", "Ryan Lochte"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart wird das Turnier in Wimbledon ausgetragen?",
        answers: ["Golf", "Tennis", "Cricket", "Polo"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wer ist Rekordtorschütze bei Fußball-Weltmeisterschaften?",
        answers: ["Pelé", "Miroslav Klose", "Cristiano Ronaldo", "Gerd Müller"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welche Sportart wird beim „Super Bowl\" gespielt?",
        answers: ["Baseball", "American Football", "Basketball", "Eishockey"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele rote Karten braucht eine Mannschaft im Fußball, damit das Spiel abgebrochen wird?",
        answers: ["3", "4", "5", "6"],
        correct: 2,
        category: "Sport"
    },
    {
        question: "In welcher Stadt fanden die ersten Olympischen Spiele der Neuzeit (1896) statt?",
        answers: ["Paris", "Athen", "London", "Rom"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Löcher hat ein Standard-Golfplatz?",
        answers: ["9", "18", "12", "24"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welcher Tennisspieler hat die meisten Wimbledon-Titel bei den Herren gewonnen (Stand 2023)?",
        answers: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie lang ist eine Bahn in einem olympischen Schwimmbecken?",
        answers: ["25 Meter", "50 Meter", "100 Meter", "75 Meter"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welches Land hat die meisten Goldmedaillen in der Geschichte der Olympischen Sommerspiele gewonnen?",
        answers: ["China", "USA", "Russland/Sowjetunion", "Deutschland"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart ist der Begriff 'Birdie' gebräuchlich?",
        answers: ["Tennis", "Golf", "Badminton (Federball)", "Cricket"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wer ist der einzige Boxer, der im Schwergewicht ungeschlagen zurückgetreten ist?",
        answers: ["Muhammad Ali", "Rocky Marciano", "Mike Tyson", "Joe Louis"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Spieler gehören zu einer Basketballmannschaft auf dem Feld?",
        answers: ["4", "5", "6", "11"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welche Nation gewann die erste Fußball-Weltmeisterschaft der Männer im Jahr 1930?",
        answers: ["Brasilien", "Uruguay", "Argentinien", "Italien"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie nennt man den Endpunkt einer Curling-Bahn, auf den die Steine gleiten sollen?",
        answers: ["Target", "House", "Circle", "Base"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart gibt es die Disziplinen 'Reißen' und 'Stoßen'?",
        answers: ["Ringen", "Gewichtheben", "Judo", "Fechten"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Sätze braucht ein männlicher Tennisspieler normalerweise, um ein Grand-Slam-Match zu gewinnen?",
        answers: ["2", "3", "4", "5"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welcher Formel-1-Fahrer hält zusammen mit Lewis Hamilton den Rekord von 7 Weltmeistertiteln?",
        answers: ["Sebastian Vettel", "Michael Schumacher", "Ayrton Senna", "Alain Prost"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart wird um den 'America's Cup' gekämpft?",
        answers: ["Polo", "Segeln", "Golf", "Pferderennen"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Hürden müssen bei einem 110-Meter-Hürdenlauf übersprungen werden?",
        answers: ["8", "10", "12", "15"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welche Farbe hat das Trikot des Führenden bei der Tour de France?",
        answers: ["Rosa", "Gelb", "Grün", "Weiß"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie heißt die höchste Spielklasse im deutschen Männerfußball?",
        answers: ["Premier League", "Bundesliga", "La Liga", "Serie A"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welche kampfsportart bedeutet übersetzt „Der sanfte Weg\"?",
        answers: ["Karate", "Judo", "Taekwondo", "Kung Fu"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Punkte zählt ein Touchdown im American Football?",
        answers: ["3", "6", "7", "2"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart ist Steffi Graf eine Legende?",
        answers: ["Schwimmen", "Tennis", "Leichtathletik", "Ski Alpin"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Spieler stehen beim Volleyball pro Team gleichzeitig auf dem Feld?",
        answers: ["5", "6", "7", "4"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welches Land ist die Heimat des Cricket?",
        answers: ["Indien", "England", "Australien", "Südafrika"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie nennt man einen Treffer beim Eishockey, der direkt nach dem Bully erzielt wird?",
        answers: ["Face-off goal", "One-timer", "Slapshot", "Wristshot"],
        correct: 0,
        category: "Sport"
    },
    {
        question: "Welches Ereignis findet alle vier Jahre statt und umfasst Sportarten wie Skifahren und Eishockey?",
        answers: ["Sommerolympiade", "Winterolympiade", "World Games", "Commonwealth Games"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Schiedsrichter sind normalerweise bei einem NFL-Spiel auf dem Feld?",
        answers: ["3", "7", "5", "1"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart wird der 'Davis Cup' vergeben?",
        answers: ["Golf", "Tennis", "Tischtennis", "Badminton"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie heißt der berühmte Basketballspieler mit der Trikotnummer 23, der für die Chicago Bulls spielte?",
        answers: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Magic Johnson"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Kilometer liegen zwischen den beiden Toren auf einem Polofeld?",
        answers: ["ca. 0,27 km", "ca. 0,5 km", "ca. 1 km", "ca. 0,1 km"],
        correct: 0,
        category: "Sport"
    },
    {
        question: "Welche Sportart kombiniert Skilanglauf und Schießen?",
        answers: ["Nordische Kombination", "Biathlon", "Triathlon", "Moderner Fünfkampf"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Gänge hat ein traditionelles Radrennen bei den Olympischen Spielen (Bahnrad)?",
        answers: ["Variabel", "1 (Singlespeed)", "10", "21"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Stadt steht das berühmte Fußballstadion 'Maracanã'?",
        answers: ["São Paulo", "Rio de Janeiro", "Buenos Aires", "Montevideo"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie nennt man den Schlag beim Baseball, bei dem der Schläger alle Basen umrunden kann?",
        answers: ["Strikeout", "Home Run", "Bunt", "Foul Ball"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Welcher Radprofi gewann fünfmal hintereinander die Tour de France (bevor seine Titel aberkannt wurden)?",
        answers: ["Eddy Merckx", "Lance Armstrong", "Miguel Indurain", "Bernard Hinault"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Ringe hat das offizielle Logo der Olympischen Spiele?",
        answers: ["4", "5", "6", "3"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "In welcher Sportart gibt es die 'Tour of Flanders'?",
        answers: ["Motorsport", "Radsport", "Segeln", "Laufen"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie viele Spieler hat eine Handballmannschaft auf dem Feld?",
        answers: ["6", "7", "11", "5"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wer gewann die FIFA-Weltmeisterschaft 2022?",
        answers: ["Frankreich", "Argentinien", "Kroatien", "Marokko"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie heißt der höchste Berg der Welt, der eine extreme Herausforderung für Bergsteiger darstellt?",
        answers: ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
        correct: 1,
        category: "Sport"
    },
    {
        question: "Wie nennt man das Feld beim Baseball, auf dem der Batter steht?",
        answers: ["Pitcher's Mound", "Home Plate", "First Base", "Dugout"],
        correct: 1,
        category: "Sport"
    }
];
