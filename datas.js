
const wHome = 12000;
const hHome = 1084;
const ratioHome = wHome/hHome;

let projectList = [

    // types : 0 = Projet personnel ; 1 = projet d'école ; 2 = projet de stage
    // 0
    {

    },
    // A PROPOS
    {
        offset : [,],
        size : [,],
        id : "aPropos",
        name: "Bienvenue !",
        text: "Je m'appelle Eliot, je suis artiste designer diplômé en création industrielle à l'ENSCI - Les Ateliers. Mon approche du design et de la création est à la fois poétique, rêveuse ; et réaliste, consciente des enjeux sociétaux, écologiques et techniques de demain. <br><br>  Pour en savoir plus sur ma <u>pratique</u>, sur les <u>services</u> que je propose ainsi que sur mes <u>travaux</u> actuels et passés, je vous invite à parcourir les différents espaces de ce site. <br><br> Je suis ouvert à toute proposition de travail ou de collaboration ! <br> Bonne visite :)",
        desc:"",
        type: "",
        date: "",
        spot : 1,
        imgSrc1 : "none",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "multimedia mediation illustration objet",
        link : ""

    },
    // TERRES LOINTAINES
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "terresLointaines",
        name: "Terres Lointaines",
        text: "Ce court métrage, inspiré du 'Monde d'Edena' écrit et dessiné par Moebius, raconte l'histoire d'un être humanoïde échoué sur une terre inconnue, qu'il va devoir arpenter et découvrir.",
        desc:"",
        type: "Projet d'études",
        date: "2020",
        spot : 1,
        imgSrc1 : "terreslointaines.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "illustration multimedia ",
        link : ""

    },
    // OLLAS
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "ollas",
        name: "Ollas",
        text: "Ollas en terre cuite, dessinée dans le cadre de mon stage chez les Transfarmers.",
        desc:"",
        type: "Projet de stage",
        date: "2021",
        spot : 1,
        imgSrc1 : "none",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // POL
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "pol",
        name: "Pol",
        text: "Issu d’un partenariat avec la galerie d’art Bertrand Grimont, ce projet est une tentative de contrepied à la tendance actuelle des scénographies jetables.",
        desc:"",
        type: "Projet d'études",
        date: "2019",
        spot : 1,
        imgSrc1 : "pol.jpg",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // LAMPE ICOSAEDRE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "lampeIcosaedre",
        name: "Lampe Icosaèdre",
        text: "Fabriquée à partir d'une ancienne maquette de projet. <br>Sa lumière diffuse est idéale pour le travail de bureau !",
        desc:"",
        type: "Projet personnel",
        date: "2018",
        spot : 1,
        imgSrc1 : "lampe-icosaedre.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : "none"

    },
    // CHAISE ATTACHE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "chaiseAttache",
        name: "Chaise Attache",
        text: "Cette assise démontable réutilise le principe d'assemblage de Pol.",
        desc:"",
        type: "Projet personnel",
        date: "2020",
        spot : 1,
        imgSrc1 : "none",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : "none"

    },
    // FABRIQUE A BRAC
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "fabriqueABrac",
        name: "Fabrique À Brac",
        text: "Les objets industriels qui nous entourent possèdent des potentiels d’usage intéressants et souvent inexploités.<br><br>A travers mon projet de deeplôme, j'explore différentes pistes de projet pour inciter les gens à regarder les objets industriels avec curiosité et ingéniosité",
        desc:"",
        type: "Projet de deeplôme",
        date: "2022",
        spot : 1,
        imgSrc1 : "lafabriqueabrac.gif",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "mediation multimedia ",
        link : ""

    },
    // NASA
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "nasa",
        name: "NASA",
        text: "C'est un module déployable pour scooter qui permet à un intervenant de proposer des activités scientifiques, créatives et ludiques aux jeunes vivant dans des zones délaissées.<br><br> Réalisé avec Adèle Nyitrai, pour les Petits Débrouillards.",
        desc:"",
        type: "Projet d'études",
        date: "2018",
        spot : 1,
        imgSrc1 : "nasa.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // LAMPE RESSORT
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "lampeRessort",
        name: "Lampe Ressort",
        text: "Ce projet est un objet manifeste, un prototype de lampe d’architecte dont les principes de fonctionnement sont mis en valeur. L’objectif est de rendre l’objet plus compréhensible et tangible pour l’utilisateur.",
        desc:"",
        type: "Projet personnel",
        date: "2018",
        spot : 1,
        imgSrc1 : "lamperessort.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // TABLE BASSE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "tableBasse",
        name: "Table Basse",
        text: "Fabriquée à partir d'un vieux meuble",
        desc:"",
        type: "Projet personnel",
        date: "2022",
        spot : 1,
        imgSrc1 : "none",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // LAMPE COLETTE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "lampeColette",
        name: "Lampe Colette",
        text: "Cette applique murale orientable est conçue autour de la pince à dessin, objet industriel que j’ai détourné de son utilisation principale pour en faire une pièce d’assemblage à multiples facettes.",
        desc:"",
        type: "Projet personnel",
        date: "2022",
        spot : 1,
        imgSrc1 : "lampepince.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // CHMUP
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "chmupTheDog",
        name: "Chmup The Dog",
        text: "Chmup, chien fidèle aux pouvoirs télékinésiques, part à la recherche de son maitre fait prisonnier dans un repaire de scientifiques.",
        desc:"",
        type: "Projet personnel",
        date: "2019",
        spot : 1,
        imgSrc1 : "course.gif",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "multimedia illustration ",
        link : ""

    },
    // VASE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "vaseSuspendu",
        name: "Vase suspendu",
        text: "Dans ce vase, les fleurs sont placées individuellement, avec attention et conscience du geste, dans les trous du plateau prévus à cet effet. Un autre regard peut alors se poser sur la fleur, à la fois comme objet unique de contemplation ou comme partie intégrante d’une composition.<br><br>Réalisé avec Sidonie Couëdel.",
        desc:"",
        type: "Projet d'études",
        date: "2017",
        spot : 1,
        imgSrc1 : "vase-suspendu-triptique.gif",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // MEUBLE A BAZAR
    {
        offset : [,],
        size : [,],
        offsetW : 0,
        offsetH : 0,
        id: "meubleBazar",
        name: "Meuble à bazar",
        text: "J'ai fabriqué ce meuble pour ranger efficacement et de manière économe en place mes dessins et les objets que je collecte pour bricoler. Je l'ai essentiellement conçu à partir de matière récupérée, dont je disposais à proximité.",
        desc:"",
        type: "Projet personnel",
        date: "2023",
        spot : 1,
        imgSrc1 : "meuble-a-bazar.jpg",
        imgSrc2 : "../assets_accueil/illustrations_APropos_0000s_0000_lampe-icosaedre.png",
        class : "objet ",
        link : "oui/"

    },
    // PARLERS ESPACE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "parlersEspace",
        name: "Parlers Espace",
        text: "Dans le monde matériel auquel nous appartenons, notre personnalité transparaît à travers nos espaces. Des langages, propres à chacun émergent des aménagements, des objets avec lesquels nous bâtissons nos quotidiens. A travers l'appropriation de ces espaces, nous racontons des histoires.",
        desc:"",
        type: "Mémoire",
        date: "2021",
        spot : 1,
        imgSrc1 : "parlersespace.gif",
        imgSrc2 : "parlersespace.gif",
        class : "multimedia mediation illustration ",
        link : ""

    },
    // POMME DE TERRE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "pommeDeTerre",
        name: "Pomme de Terre",
        text: "Une pomme de terre nostalgique du passé se réveille dans une caisse. Elle espère être cuisinée comme ses aïeules, mais le monde de la cuisine a bien changé...<br><br>Réalisé avec Théophile Perrot.",
        desc:"",
        type: "Projet d'études",
        date: "2019",
        spot : 1,
        imgSrc1 : "pommedeterre.jpg",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "multimedia mediation ",
        link : ""

    },
    // CARNETS
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "carnets",
        name: "Carnets",
        text: "Mes carnets m'accompagnent partout où je vais. En voyage, dans la rue, dans le métro, chez moi, chez mes amis...<br><br>J'y dessine et j'y écrit ce que je vois, pense et imagine, sans but particulier. Ils évoluent avec moi.",
        desc:"",
        type: "",
        date: "",
        spot : 1,
        imgSrc1 : "carnets.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "illustration ",
        link : ""

    },
    // POLES IMAGES
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "poleImage",
        name: "Qu'est ce qu'un Pôle Image ?",
        text: "Cette pastille mixant plusieurs types d'animation est une réponse de l'entreprise Cinémagraphic à un appel à projet lancé par les Pôles Images.<br><br>J'y ai été assistant à la réalisation, à l'animation et à la prise de vue.",
        desc:"",
        type: "Projet professionnel",
        date: "2024",
        spot : 1,
        imgSrc1 : "poleimage.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "multimedia mediation ",
        link : ""

    },
    // ILLUSTRATIONS
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "illustrations",
        name: "Illustrations",
        text: "",
        desc:"",
        type: "",
        date: "",
        spot : 1,
        imgSrc1 : "none",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "illustration ",
        link : ""

    },
    // MOBILIER GRILLAGE
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "mobilierGrillage",
        name: "Mobilier Grillage",
        text: "Quoi de plus pérenne que de fabriquer les objets qui nous entourent en utilisant des matières réemployées ?<br><br>C’est dans cette optique que j’ai imaginé ce mobilier de jardin, fabriqué à partir d’un gisement de matière récupérée, le panneau grillagé rigide.",
        desc:"",
        type: "Projet personnel",
        date: "depuis 2020",
        spot : 1,
        imgSrc1 : "mobiliergrillage.jpg",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet ",
        link : ""

    },
    // STELLARIUM
    {
        offset : [,],
        size : [,],
        offsetW : 250,
        offsetH : 0,
        id: "stellarium",
        name: "Stellarium",
        text: "Cet observatoire stellaire est un de mes premiers projets.<br><br> J'y propose au spectateur une visite guidée de la voie lactée et des exoplanètes potentiellement habitables proches de la terre.",
        desc:"",
        type: "Projet personnel",
        date: "2016",
        spot : 1,
        imgSrc1 : "stellarium.png",
        imgSrc2 : "20240304_illustrations_ChmupTheDog.png",
        class : "objet mediation ",
        link : ""

    },
    // CHARLETTE
    {
        offset : [,],
        size : [,],
        offsetW : 750,
        offsetH : 0,
        id: "charlette",
        name: "Charlette",
        text: "Cette remorque permet de transporter facilement une palette aux normes européennes avec n'importe quel vélo.<br><br> Ce projet est à l'initiative de l'association Veloma, que j'ai eu le plaisir d'assister dans la conception et la réalisation de ce premier prototype.",
        desc:"",
        type: "Projet professionnel",
        date: "2023",
        spot : 1,
        imgSrc1 : "none",
        imgSrc2 : "../assets_accueil/illustrations_APropos_0000s_0000_lampe-icosaedre.png",
        class : "objet ",
        link : "https://veloma.org/2024/02/16/charlette-charrette-palette/"

    },
    // // SITE WEB
    // {
    //     offset : [,],
    //     size : [,],
    //     offsetW : 750,
    //     offsetH : 0,
    //     id: "siteWeb",
    //     name: "Site Web",
    //     text: "",
    //     desc:"",
    //     type: "Projet professionnel",
    //     date: "depuis 2023",
    //     spot : 1,
    //     imgSrc1 : "none",
    //     imgSrc2 : "../assets_accueil/illustrations_APropos_0000s_0000_lampe-icosaedre.png",
    //     class : "objet ",
    //     link : "bonjour/"

    // },
    // // MosquitOS
    // {
    //     offset : [,],
    //     size : [,],
    //     offsetW : 750,
    //     offsetH : 0,
    //     id: "mosquitos",
    //     name: "MosquitOS",
    //     text: "",
    //     desc:"",
    //     type: "Projet professionnel",
    //     date: "2023",
    //     spot : 1,
    //     imgSrc1 : "none",
    //     imgSrc2 : "../assets_accueil/illustrations_APropos_0000s_0000_lampe-icosaedre.png",
    //     class : "objet ",
    //     link : "bonjour/"

    // },


];






