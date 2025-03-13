let illusTypes = ["architecture","vaisseau","paysage","corps", "nature","objet","machine","interieur","X"]
let illusList =[
{
    name :"le survol",
    src : "1.jpg",
    type : [0,"vaisseau", "paysage"],
    date : ""
},
{
    name :"ville en bordure du monde n°2",
    src : "2.jpg",
    type : [0,"architecture","paysage"],
},
{
    name :"forteresse volante",
    src : "3.jpg",
    type : [0,"vaisseau","architecture","paysage"],
},
{
    name :"illustration de la Lettre à Dark Vador",
    src : "darkVador.jpg",
    type : [0,"vaisseau","corps"],
},
{
    name :"observation à Paris, Montmartre",
    src : "2024-10-21-montmartre-unfinished.jpg",
    type : [1,"architecture","paysage"],
},
{
    name :"la plaine encore",
    src : "2025_02_09_a-la-plaine.jpg",
    type : [1,"architecture","corps","paysage"],
},
{
    name :"serpents à face humaine",
    src : "6.jpg",
    type : [0,"corps","creature"],
},
{
    name :"splinter-spaceship",
    src : "7.jpg",
    type : [0,"vaisseau","machine"],
},
{
    name :"crystaux",
    src : "2025-01-03-crystaux VLQ cop.jpg",
    type : [0,"objet","nature"],
},
{
    name :"fusion de planètes",
    src : "8.jpg",
    type : [0,"paysage","vaisseau"],
},
{
    name :"ville en bordure du monde n°3",
    src : "9.jpg",
    type : [0,"architecture","paysage"],
},
{
    name :"observation à la maison",
    src : "2024-11-07-observations-à-la-maison-01-VLQ.jpg",
    type : [1,"interieur","nature"],
},
{
    name :"observation à Paris",
    src : "5.jpg",
    type : [1,"architecture"],
},
{
    name :"ancien vaisseau",
    src : "10.jpg",
    type : [0,"vaisseau"],
},
{
    name :"ville en bordure du monde n°1",
    src : "11.jpg",
    type : [0,"architecture","paysage"],
},
{
    name :"montre",
    src : "12.jpg",
    type : [0,"objet"],
},
{
    name :"pieuvre mécanique",
    src : "13.jpg",
    type : [0,"vaisseau","machine"],
},
{
    name :"extrait de BD : arrivée en ville",
    src : "14.jpg",
    type : [0,"architecture","paysage"],
},
{
    name :"cours julien - 01",
    src : "2025-02-07-cours julien.jpg",
    type : [1,"architecture"],
},
{
    name :"fleurs",
    src : "2024-12-23-fleurs.jpg",
    type : [0,"nature"],
},
{
    name :"chez Marc",
    src : "2025-02-06-observationchezmarc.jpg",
    type : [1,"architecture","interieur"],
},
{
    name :"coloc à marseil bebeh",
    src : "2025-03-10-la colocLQ.jpg",
    type : [1,"architecture","interieur"],
},
{
    name :"chez Marc 02",
    src : "2025-01-28 chez marc.jpg",
    type : [1,"architecture"],
},
{
    name :"tiens mais c'est où ?",
    src : "2025-01-28 plaine pour toujoursbb.jpg",
    type : [1,"architecture"],
},
{
    name :"port qui pourrait être",
    src : "2025-01-03-imagination-port.jpg",
    type : [0,"architecture","paysage"],
},
{
    name :"plante grasse",
    src : "2025-01-03-plante grasse.jpg",
    type : [1,"plante","nature"],
},
{
    name :"observation à Porto",
    src : "15.jpg",
    type : [1,"architecture","paysage"],
},
{
    name :"ville flottante",
    src : "16.jpg",
    type : [0,"architecture","paysage","vaisseau"],
},
{
    name :"vaisseau étoile",
    src : "17.jpg",
    type : [0,"vaisseau"],
},
{
    name :"vaisseau donut",
    src : "4.jpg",
    type : [0,"vaisseau"],
},
{
    name :"abstraction : clocher",
    src : "18.jpg",
    type : [0,"architecture","objet"],
},
{
    name :"crystaux pas très justes",
    src : "19.jpg",
    type : [0,"objet","nature"],
},
{
    name :"ancien vaisseau : isométrique",
    src : "20.jpg",
    type : [0,"vaisseau"],
},
{
    name :"ville perchée",
    src : "ville-perchée.jpg",
    type : [0,"architecture"],
},
{
    name :"ilot",
    src : "21.jpg",
    type : [0,"architecture"],
},
{
    name :"abstraction : clocher n°2",
    src : "22.jpg",
    type : [0,"architecture"],
},
{
    name :"le château dans le ciel",
    src : "23.jpg",
    type : [0,"architecture","paysage","vaisseau"],
},
{
    name :"l'usine de Gardanne",
    src : "v.jpg",
    type : [1,"architecture","paysage"],
},
{
    name :"nouvel an 2024 - 02",
    src : "2025-01-03-nouvel an 02.jpg",
    type : [1,"interieur"],
},
{
    name :"modele vivant à MarseilleCity",
    src : "2024-10-21-modeleVivant.jpg",
    type : [1,"corps"],
},
{
    name :"marseille la plaine - 01",
    src : "2024-10-21-0006_0001_marseille la plaine.jpg",
    type : [1,"architecture"],
},
{
    name :"marseille la plaine - 02",
    src : "carnet-canson-A5-n2-2024-10-21-marseille la plaine toujours.jpg",
    type : [1,"architecture"],
},
{
    name :"nouvel an 2024 - 01",
    src : "2025-01-03-nouvel an 015.jpg",
    type : [1,"interieur","corps"],
},
{
    name :"Tours 2024-10-21",
    src : "2024-10-21-observationATours.jpg",
    type : [1,"architecture"],
},
{
    name :"observation à la maison 2024-12",
    src : "2025-01-03-0014observatuion a la maison.jpg",
    type : [1,"interieur"],
},
{
    name :"gare de niort",
    src : "gare-de-niort.jpg",
    type : [1,"architecture"],
},
{
    name :"l'Hotel de Ville",
    src : "hotel-de-ville-paris.jpg",
    type : [1,"architecture"],
},
{
    name :"dans un parc, à Paris",
    src : "observation-a-pariiiis.jpg",
    type : [1],
},
{
    name :"croquis d'un boulevard, Paris",
    src : "observation-a-paris-boulevard-jesaisplusquoi.jpg",
    type : [1,"architecture"],
},
{
    name :"Panthéon",
    src : "pantheon.jpg",
    type : [1,"architecture"],
},
{
    name :"tour Saint-Jacques",
    src : "tour-saint-jacques.jpg",
    type : [1,"architecture"],
},
{
    name :"Voyage interrail - 01",
    src : "voyage-interrail-01.jpg",
    type : [1,"architecture"],
},
{
    name :"Voyage interrail - 02",
    src : "voyage-interrail-02.jpg",
    type : [1,"architecture","paysage"],
},
{
    name :"Voyage interrail - 03",
    src : "voyage-interrail-03.jpg",
    type : [1,"architecture"],
},
{
    name :"Voyage interrail - 04",
    src : "voyage-interrail-04.jpg",
    type : [1,"architecture"],
},


]