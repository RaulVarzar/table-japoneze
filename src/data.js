import nissan from './images/7.jpg';
import civic from './images/5.jpg';
import beat from './images/4.jpg';
import mk3civic from './images/6.jpg'
import nb from './images/1.jpg';
import na from './images/10.jpg';
import mr2 from './images/8.jpg';
import nc from './images/11.jpg';
import blog1 from "./images/blog1.webp"
import blog2 from "./images/blog2.webp"
import blog3 from "./images/blog3.webp"
import blog4 from "./images/blog4.webp"
import blog5 from "./images/blog5.webp"
import blog6 from "./images/blog6.webp"

export const cars = [
  {
    image: mk3civic,
    brand: 'Honda',
    model: 'Civic',
    year: '1986',
    displacement:'1.3',
    power:'71',
    drive:'FWB',
    added: '2022-10-31',
    id:'0'
  },
  {
    image: nissan,
    brand: 'Nissan',
    model: 'S14 200SX',
    year: '1998',
    displacement:'2.0',
    power:'200',
    drive:'RWD',
    added: '2022-10-31',
    id:'1'
  },
  {
    image: civic,
    brand: 'Honda',
    model: 'Civic',
    year: '1991',
    displacement:'1.6',
    power:'125',
    drive:'FWD',
    added: '2023-11-31',
    id:'2'
  },
  {
    image: nb,
    brand: 'Mazda',
    model: 'MX5 NB',
    year: '1999',
    displacement:'1.8',
    power:'140',
    drive:'RWD',
    added: '2023-06-31',
    id:'3'
  },
  {
    image: na,
    brand: 'Mazda',
    model: 'MX5 NA',
    year: '1995',
    displacement:'1.8',
    power:'131',
    drive:'RWD',
    added: '2022-12-30',
    id:'4'
  },
  {
    image: beat,
    brand: 'Honda',
    model: 'Beat',
    year: '1993',
    displacement:'0.66',
    power:'64',
    drive:'RWD',
    added: '2023-05-25',
    id:'5'
  },
  {
    image: mr2,
    brand: 'Toyota',
    model: 'MR2',
    year: '1991',
    displacement:'2.0',
    power:'156',
    drive:'RWD',
    added: '2023-07-29',
    id:'6'
  },
  {
    image: nc,
    brand: 'Mazda',
    model: 'MX5',
    year: '2010',
    displacement:'2.0',
    power:'160',
    drive:'RWD',
    added: '2023-07-29',
    id:'7'
  }
];

export const latestUploads = cars.map((car) => car.image).slice(0,6)


export const blogPosts = [
  {
    title: 'Singurul Impreza de drift cu 1JZ din Romania!',
    date: '10.12.2023',
    content: "Swapurile de motor sunt probabil una dintre cele mai interesante si solicitante modificari pe care le poti face unei masini si desi nu exista o istorie predefinita de unde au inceput si cum au devenit populare putem totusi sa ne gandim la primele swapuri pe masini japoneze care au fost facute vreodata si ar fi imposibil sa mentionam swapul facut de Smokey Nagata pe Toyota Supra cu RB26 provenit de pe un Nissan Skyline,",
    image: blog2
  },
  {
    title: 'Retromobil: Povestea unui AE86 Trueno de America',
    date: '14.10.2022',
    content: 'Toyota AE86 e una dintre cele mai cunoscute mașini japoneze în industria filmelor alături de, evident, Supra și Skyline din Fast and Furious. Ceea ce face totuși mașina această specială nu sunt specificațiile, ci simplitatea și pedigree-ul ei în lumea motorsportului. Mulți nu știu, dar AE86 a fost una dintre primele mașini folosite la drift vreodată dar, în același timp, a fost și printre cele mai bune platforme cu tracțiune spate la raliuri, împreună cu Ford Escort MK1 și MK2.',
    image: blog1
  },
  {
    title: 'Cum a fost la Saisho Meet?',
    date: '10.12.2023',
    content: "Să fim sinceri: nimeni, nici eu, nici voi, nu ne-am gândit că o să existe vreodată un eveniment așa reușit, asemănător unui eveniment din afară. Acest meet a dublat și ca eveniment aniversar, deoarece la 3 zile după Saisho Meet blogul Table Japoneze a împlinit 6 ani de când am făcut pagina de Facebook, în vara lui 2016. Atunci când am creat blogul nu am crezut niciodată că o să ajungă așa departe și că o să avem o comunitate așa unită. Știu, sună clișeic și probabil ați mai auzit asta de la orice youtuber sau persoană care a fondat o comunitate care a ajuns mare.",
    image: blog3
  },
  {
    title: 'Trackday pe zapada: Ce am invatat weekendul acesta la Prejmer Raceway',
    date: '10.12.2023',
    content: "Au trecut aproximativ 3 ani de cand s-a tinut un trackday pe zapada in Romania si desi vremea trebuia sa fie putin mai prietenoasa am acceptat provocarea si ne-am aventurat pe circuitul situat in apropiere de Brasov, iata ce am vazut la unul dintre cele mai rare evenimente pe circuit din tara.",
    image: blog4
  },
  {
    title: 'Mostenire de familie: un AE86 Levin Coupe reconditionat',
    date: '10.12.2023',
    content: "Fie ca ai aflat de ea din Initial D, Need for Speed sau pur si simplu de pe internet, AE86 este printre cele mai populare masini sport japoneze. Succesul ei si ce o face speciala este ideea indrazneata a Toyotei de a oferii la inceputul aniilor '80 o masina sport unde iti poti alege atat botul cat si spatele, iar la raliuri in segmentul masinilor cu tractiune spate era superioara din punct de vedere a fiabilitatii comparata cu Ford Escort, deasemenea masina are printre primele sisteme de a ajuta cuplul in ture mici la un motor aspirat, numit T-VIS. (Toyota Variable Induction System) Spre deosebire de sistemele de acum care sunt bazate pe solenoide conectate la axele cu came, acest sistem modifica geometria galeriei de admisie in functie de viteza motorului.",
    image: blog5
  },
  {
    title: 'O experienta de 10 ani cu un road & track nugget',
    date: '10.12.2023',
    content: "Civic Type R EP3 (generatia a 7-a) este destul de under rated cand vine vorba de ce ofera, traind in umbra generatiilor precedente, EG6 si EK9, desi generatia EP3 reprezinta un punct cheie pentru Civic, fiind prima generatie care a oferit motorul K20, pe care Honda continua sa il perfectioneze chiar si dupa 20 de ani de la aparitia lui, fiind prezent si pe ultima generatie de Type R, numita FK8, doar ca motorul este turbo si cu imbunatatiri semnificative. EP3-ul se numera si printre cele 4 generatii de Type R care se produc exclusiv in Swindon, UK, impreuna cu FN2, FK2 si FK8. ",
    image: blog6
  },
  
]