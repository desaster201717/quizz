// Fragenkatalog - hier kannst du beliebig Fragen hinzufügen oder ändern.
// "correct" ist der INDEX (0 = erste Antwort, 1 = zweite, 2 = dritte, 3 = vierte)

const QUESTIONS = [

    // === GESCHICHTE ===
    {
        question: "Wer fand im Jahr 1498 den Seeweg nach Indien?",
        answers: ["Christoph Kolumbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
        correct: 1
    },
    {
        question: "Welcher Herrschaftsbereich gilt als das größte zusammenhängende Landreich der Weltgeschichte?",
        answers: ["Das Römische Reich", "Das Britische Weltreich", "Das Mongolische Reich", "Das Osmanische Reich"],
        correct: 2
    },
    {
        question: "In welchem Jahr wurden die Vereinten Nationen (UNO) offiziell gegründet?",
        answers: ["1918", "1945", "1955", "1961"],
        correct: 1
    },
    {
        question: "Wer war der erste Mensch, der 1961 in den Weltraum abhob und die Erde umkreiste?",
        answers: ["Neil Armstrong", "Juri Gagarin", "Buzz Aldrin", "John Glenn"],
        correct: 1
    },
    {
        question: "Wer war der letzte russische Zar, der infolge der Revolution von 1917 abdanken musste?",
        answers: ["Alexander III.", "Nikolaus II.", "Peter der Große", "Iwan der Schreckliche"],
        correct: 1
    },
    {
        question: "Welcher karthagische Feldherr überquerte im Krieg gegen Rom mit Elefanten die Alpen?",
        answers: ["Scipio Africanus", "Hannibal", "Hamilkar Barkas", "Hasdrubal"],
        correct: 1
    },
    {
        question: "Wie hieß die letzte Pharaonin Ägyptens, bevor das Land eine römische Provinz wurde?",
        answers: ["Nofretete", "Kleopatra VII.", "Hatschepsut", "Teje"],
        correct: 1
    },
    {
        question: "Welcher Staatsmann gilt als der „Gründer der Türkei\" und erster Präsident der Republik?",
        answers: ["Ismet Inönü", "Mustafa Kemal Atatürk", "Recep Tayyip Erdoğan", "Enver Pascha"],
        correct: 1
    },
    {
        question: "Wer führte im Deutschen Reich im 19. Jahrhundert die Kranken-, Unfall- und Rentenversicherung ein?",
        answers: ["Wilhelm I.", "Otto von Bismarck", "Friedrich III.", "Leo von Caprivi"],
        correct: 1
    },
    {
        question: "In welchem Jahr endete der Zweite Weltkrieg offiziell in Europa?",
        answers: ["1918", "1945", "1939", "1953"],
        correct: 1
    },

    // === NATURWISSENSCHAFTEN ===
    {
        question: "Welcher Physiker formulierte das universelle Gesetz der Schwerkraft?",
        answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
        correct: 1
    },
    {
        question: "Was wird in der Zellbiologie als das „Kraftwerk der Zelle\" bezeichnet?",
        answers: ["Zellkern", "Mitochondrien", "Ribosomen", "Golgi-Apparat"],
        correct: 1
    },
    {
        question: "Wie lange benötigt das Licht der Sonne, um die Erdoberfläche zu erreichen?",
        answers: ["30 Sekunden", "8 Minuten", "1 Stunde", "24 Stunden"],
        correct: 1
    },
    {
        question: "Welches chemische Element verbirgt sich hinter dem Symbol „Au\"?",
        answers: ["Silber", "Gold", "Kupfer", "Aluminium"],
        correct: 1
    },
    {
        question: "Wer gilt als der Erfinder des World Wide Web (WWW)?",
        answers: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
        correct: 1
    },
    {
        question: "Welcher Planet ist der Sonne am nächsten?",
        answers: ["Venus", "Merkur", "Mars", "Jupiter"],
        correct: 1
    },
    {
        question: "Was ist die härteste natürlich vorkommende Substanz auf der Erde?",
        answers: ["Eisen", "Diamant", "Quarz", "Granit"],
        correct: 1
    },
    {
        question: "Wie viele Planeten gehören nach heutiger Definition zu unserem Sonnensystem?",
        answers: ["Sieben", "Acht", "Neun", "Zehn"],
        correct: 1
    },
    {
        question: "Wer war die erste Frau, die einen Nobelpreis gewann?",
        answers: ["Lise Meitner", "Marie Curie", "Irène Joliot-Curie", "Dorothy Hodgkin"],
        correct: 1
    },
    {
        question: "Wie nennt man die unterste Schicht der Atmosphäre, in der das Wetter stattfindet?",
        answers: ["Stratosphäre", "Troposphäre", "Mesosphäre", "Exosphäre"],
        correct: 1
    },

    // === KUNST & KULTUR ===
    {
        question: "Welcher Renaissance-Künstler malte das Wandgemälde „Das letzte Abendmahl\"?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Raffael", "Donatello"],
        correct: 1
    },
    {
        question: "Wer schrieb den Roman „Stolz und Vorurteil\"?",
        answers: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "Emily Dickinson"],
        correct: 1
    },
    {
        question: "Welcher Maler schuf das Werk „Der Kuss\" im Jugendstil?",
        answers: ["Egon Schiele", "Gustav Klimt", "Oskar Kokoschka", "Claude Monet"],
        correct: 1
    },
    {
        question: "In welcher Stadt steht das Opernhaus mit der charakteristischen Segelarchitektur?",
        answers: ["New York", "Sydney", "London", "Paris"],
        correct: 1
    },
    {
        question: "Wer ist der Autor des dystopischen Romans „1984\"?",
        answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Margaret Atwood"],
        correct: 1
    },
    {
        question: "Welcher niederländische Maler schuf die „Sternennacht\"?",
        answers: ["Rembrandt", "Vincent van Gogh", "Jan Vermeer", "Frans Hals"],
        correct: 1
    },
    {
        question: "Welcher Künstler schuf „Guernica\" als Reaktion auf den spanischen Bürgerkrieg?",
        answers: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Francisco de Goya"],
        correct: 1
    },
    {
        question: "Wie heißt der US-Preis für Literatur, Journalismus und Musik?",
        answers: ["Oscar", "Pulitzer-Preis", "Grammy", "Golden Globe"],
        correct: 1
    },
    {
        question: "Wer malte das „Mädchen mit dem Perlenohrring\"?",
        answers: ["Peter Paul Rubens", "Johannes Vermeer", "Rembrandt", "Jan van Eyck"],
        correct: 1
    },
    {
        question: "Wer komponierte die Oper „Die Zauberflöte\"?",
        answers: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Richard Wagner"],
        correct: 1
    },

    // === ESSEN & TRINKEN ===
    {
        question: "Von welchem Kontinent stammt die Kartoffel ursprünglich?",
        answers: ["Afrika", "Amerika", "Asien", "Australien"],
        correct: 1
    },
    {
        question: "In welchem Teil eines Apfels finden sich die meisten Vitamine?",
        answers: ["Im Kerngehäuse", "In der Schale", "Im Fruchtfleisch", "Im Stiel"],
        correct: 1
    },
    {
        question: "Was ist das teuerste Gewürz der Welt nach Gewicht?",
        answers: ["Vanille", "Safran", "Zimt", "Muskatnuss"],
        correct: 1
    },
    {
        question: "Aus welcher Pflanze wird Schokolade hergestellt?",
        answers: ["Kaffeepflanze", "Kakaopflanze", "Teestrauch", "Zuckerrohr"],
        correct: 1
    },
    {
        question: "In welchem Land hat das Gericht Sushi seinen Ursprung?",
        answers: ["China", "Japan", "Thailand", "Vietnam"],
        correct: 1
    },
    {
        question: "Welches Alkaloid in Kaffee wirkt stimulierend auf den Organismus?",
        answers: ["Nicotin", "Koffein", "Adrenalin", "Serotonin"],
        correct: 1
    },
    {
        question: "Wie heißt der Honigwein, der mit der Wikingerkultur assoziiert wird?",
        answers: ["Absinth", "Met", "Sherry", "Cidre"],
        correct: 1
    },
    {
        question: "Welche Marmelade wird traditionell für die Sachertorte verwendet?",
        answers: ["Erdbeere", "Aprikose/Marille", "Himbeere", "Kirsche"],
        correct: 1
    },
    {
        question: "Welches Land hat den höchsten Pro-Kopf-Kaffeeverbrauch weltweit?",
        answers: ["Italien", "Finnland", "USA", "Brasilien"],
        correct: 1
    },
    {
        question: "Was ist die Hauptzutat von klassischem Hummus?",
        answers: ["Linsen", "Kichererbsen", "Bohnen", "Erbsen"],
        correct: 1
    },

    // === SPORT ===
    {
        question: "Welches Land ist mit fünf Titeln Rekordweltmeister im Männerfußball?",
        answers: ["Deutschland", "Brasilien", "Italien", "Argentinien"],
        correct: 1
    },
    {
        question: "Wer hält den Weltrekord über 100 Meter mit 9,58 Sekunden?",
        answers: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"],
        correct: 1
    },
    {
        question: "Wie viele Grand-Slam-Titel hat Novak Djokovic gewonnen (Stand 2023)?",
        answers: ["20", "24", "22", "18"],
        correct: 1
    },
    {
        question: "Wie lang ist ein Marathon offiziell?",
        answers: ["40,000 km", "42,195 km", "45,195 km", "38,000 km"],
        correct: 1
    },
    {
        question: "In welcher Stadt fanden 2008 die Olympischen Sommerspiele statt?",
        answers: ["London", "Peking", "Athen", "Tokio"],
        correct: 1
    },
    {
        question: "Wie viele Spieler stehen pro Mannschaft beim Fußball auf dem Platz?",
        answers: ["10", "11", "12", "9"],
        correct: 1
    },
    {
        question: "Welcher Schwimmer gewann 23 Olympische Goldmedaillen?",
        answers: ["Mark Spitz", "Michael Phelps", "Ian Thorpe", "Ryan Lochte"],
        correct: 1
    },
    {
        question: "In welcher Sportart wird das Turnier in Wimbledon ausgetragen?",
        answers: ["Golf", "Tennis", "Cricket", "Polo"],
        correct: 1
    },
    {
        question: "Wer ist Rekordtorschütze bei Fußball-Weltmeisterschaften?",
        answers: ["Pelé", "Miroslav Klose", "Cristiano Ronaldo", "Gerd Müller"],
        correct: 1
    },
    {
        question: "Welche Sportart wird beim „Super Bowl\" gespielt?",
        answers: ["Baseball", "American Football", "Basketball", "Eishockey"],
        correct: 1
    }
];
