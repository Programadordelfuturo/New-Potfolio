import RickMorty from '../assets/Proyecto-RickMorty.png';
import BoxShadow from '../assets/ProyectoBoxShadow.png'
import Ppokemon from '../assets/P-pokemon.png';
import Pwelcome from '../assets/P-welcome.png';
import Pclima from '../assets/P-clima.png';
import Pquotes from '../assets/P-Quotes.png';
import Pcalculadora from '../assets/P-Calculadora.png';
import Pcontability from '../assets/P-contability.png';
import PtodoAPI from '../assets/P-ToDoAPI.png'

export const containerProjects = [
  {
    id: 1,
    title: 'Aplicación del Clima',
    referencia: "https://dazzling-liger-d9e01c.netlify.app",
    img: Pclima,
    texto: `Aplicación que te permite ver el clima,
            la temperatura, la humedad de tu localización`,
    tecnologies: ['React', 'axios', 'JS', 'Vite']
  },
  {
    id: 2,
    title: 'Aplicación Box-Shadow',
    referencia: "https://dazzling-florentine-1b687f.netlify.app",
    img: BoxShadow,
    texto: `Una aplicación que te devuelve un codigo CSS, para
    darle sombra a la caja en el box-model`,
    tecnologies: ['HTML', 'CSS', 'JS', 'Vite']

  },
  {
    id: 3,
    title: 'Aplicación Pokemon',
    referencia: "https://steady-nougat-633108.netlify.app",
    img: Ppokemon,
    texto: `Realizada para mostrar a todos los pokemones que existen
    con sus diferentes características, y estadísticas`,
    tecnologies: ['React', 'axios', 'Router', 'Redux', 'JS', 'Vite']
  },
  {
    id: 4,
    title: 'Lista de tareas API',
    referencia: "https://github.com/Programadordelfuturo/ToDo-App",
    img: PtodoAPI,
    texto: `API diseñada a crear nuevas tareas que hacer`,
    tecnologies: ['JS', 'nodeJS', 'Express', 'Sequelize', 'nodemon', 'Thunder Client'],
  },
  {
    id: 5,
    title: 'Tienda virtual API',
    referencia: "https://github.com/Programadordelfuturo/Ecommers-backend",
    img: PtodoAPI,
    texto: `API para E-commers, de lo cual tienes productos, productos agregados al carrito, etc`,
    tecnologies: ['JS', 'nodeJS', 'Express', 'Sequelize', 'nodemon', 'Thunder Client', 'bcrypt', 'cors', 'dotenv', 'JWT', 'morgan'],
  },
  {
    id: 6,
    title: 'Proyecto NFT',
    referencia: "https://etherscan.io/address/0x8b3a1873013a90c6077af72b2ab95263288ab941",
    img: PtodoAPI,
    texto: `Proyecto NFT, Smart Contract cargado en etherscan que contiene 10000 NFT's siendo personajes entre normales 
    (personas de distintas etnias) y fantasticos (extraterresstres, fantasmas, spectros, etc)`,
    tecnologies: ['JS', 'nodeJS', 'Express']
  },
  {
    id: 7,
    title: 'Calculadora',
    referencia: "https://sensational-zabaione-3c81e6.netlify.app",
    img: Pcalculadora,
    texto: `Realicé una calculadora como práctica completa de las tecnologías
    basicas como JS, HTML, CSS`,
    tecnologies: ['HTML', 'CSS', 'JS', 'Vite']
  },
  {
    id: 8,
    title: 'Contraseña Random',
    referencia: "https://lambent-sprite-37e961.netlify.app",
    img: Pcalculadora,
    texto: `Te da una contraseña con caracteres al azar, puedes escoger el
    tamaño de la contraseña`,
    tecnologies: ['React', 'JS', 'Vite']
  },
  {
    id: 9,
    title: 'Proyecto de Contabilidad',
    referencia: "https://one-proyect.netlify.app",
    img: Pcontability,
    texto: `Hecha para el mercado Chileno que ayuda a saber el
    monto final el cual tendra que pagar el cliente por un bien o servicio dado
    y tambien ayuda a calcular el monto que se tiene que presentar y pagar ante 
    la institución correspondiente`,
    tecnologies: ['Vue', 'Tailwind CSS', 'JS', 'Vue CLI']
  },
  {
    id: 10,
    title: 'Registra tu Nombre',
    referencia: "https://sweet-malasada-784f81.netlify.app",
    img: Pwelcome,
    texto: `Permite mostrar tu nombre una vez agregado en el input`,
    tecnologies: ['React', 'JS', 'Vite']
  },
  {
    id: 11,
    title: 'Aplicación Rick And Morty',
    referencia: "https://helpful-piroshki-e74e4c.netlify.app",
    img: RickMorty,
    texto: `Inspirada en la serie animada Rick and Morty, presenta
    a los personajes de la serie y sus características`,
    tecnologies: ['React', 'axios', 'JS', 'Vite']
  },
  {
    id: 12,
    title: 'Frases Celebres',
    referencia: "https://lovely-halva-a54879.netlify.app",
    img: Pquotes,
    texto: `Puedes ver las frases ya preparadas que te deje 😉`,
    tecnologies: ['React', 'JS', 'Vite']
  },
]

export const containerProjectsEnglish = [
  {
    id: 1,
    title: 'App Clima',
    referencia: "https://dazzling-liger-d9e01c.netlify.app",
    img: Pclima,
    texto: `Application that allows you to see the weather, 
            temperature, humidity of your location`,
    tecnologies: ['React', 'axios', 'JS', 'Vite']
  },
  {
    id: 2,
    title: 'App Box-Shadow',
    referencia: "https://dazzling-florentine-1b687f.netlify.app",
    img: BoxShadow,
    texto: `An application that returns you a CSS code, to shade the
            to shadow the box in the box-model`,
    tecnologies: ['HTML', 'CSS', 'JS', 'Vite']

  },
  {
    id: 3,
    title: 'App Pokemon',
    referencia: "https://steady-nougat-633108.netlify.app",
    img: Ppokemon,
    texto: `Made to show all the pokemon that exist, with their different characteristics
            with their different characteristics and statistics`,
    tecnologies: ['React', 'axios', 'Router', 'Redux', 'JS', 'Vite']
  },
  {
    id: 4,
    title: 'Todo API',
    referencia: "https://github.com/Programadordelfuturo/ToDo-App",
    img: PtodoAPI,
    texto: `API designed to create new tasks to do`,
    tecnologies: ['JS', 'nodeJS', 'Express', 'Sequelize', 'nodemon', 'Thunder Client'],
  },
  {
    id: 5,
    title: 'E-commers-API',
    referencia: "https://github.com/Programadordelfuturo/Ecommers-backend",
    img: PtodoAPI,
    texto: `API for E-commers, from which you have products, products added to the cart, etc.`,
    tecnologies: ['JS', 'nodeJS', 'Express', 'Sequelize', 'nodemon', 'Thunder Client', 'bcrypt', 'cors', 'dotenv', 'JWT', 'morgan'],
  },
  {
    id: 6,
    title: 'Proyect-NFT',
    referencia: "https://etherscan.io/address/0x8b3a1873013a90c6077af72b2ab95263288ab941",
    img: PtodoAPI,
    texto: `NFT Project, Smart Contract loaded in etherscan containing 10000 NFT's being characters such as normal people 
    (people of different ethnicities) and fantastic (aliens, ghosts, spectres, etc).`,
    tecnologies: ['JS', 'nodeJS', 'Express']
  },
  {
    id: 7,
    title: 'Calculadora',
    referencia: "https://sensational-zabaione-3c81e6.netlify.app",
    img: Pcalculadora,
    texto: `I made a calculator as a complete practice of the basic technologies such as the
    technologies such as JS, HTML, CSS`,
    tecnologies: ['HTML', 'CSS', 'JS', 'Vite']
  },
  {
    id: 8,
    title: 'Random Password',
    referencia: "https://lambent-sprite-37e961.netlify.app",
    img: Pcalculadora,
    texto: `It gives you a password with random characters, you can choose the size of the
    password size`,
    tecnologies: ['React', 'JS', 'Vite']
  },
  {
    id: 9,
    title: 'Contability Project',
    referencia: "https://one-proyect.netlify.app",
    img: Pcontability,
    texto: `Made for the Chilean market that helps to know the final amount that the
    the final amount that the customer will have to pay for a given good or service and also helps to
    and also helps to calculate the amount that has to be presented and paid to the corresponding 
    the corresponding institution`,
    tecnologies: ['Vue', 'Tailwind CSS', 'JS', 'Vue CLI']
  },
  {
    id: 10,
    title: 'Registra tu Nombre',
    referencia: "https://sweet-malasada-784f81.netlify.app",
    img: Pwelcome,
    texto: `Allows to display your name once added in the input`,
    tecnologies: ['React', 'JS', 'Vite']
  },
  {
    id: 11,
    title: 'App Rick And Morty',
    referencia: "https://helpful-piroshki-e74e4c.netlify.app",
    img: RickMorty,
    texto: `Inspired by the animated series Rick and Morty, it introduces the
    the characters of the series and their characteristics`,
    tecnologies: ['React', 'axios', 'JS', 'Vite']
  },
  {
    id: 12,
    title: 'Frases Celebres',
    referencia: "https://lovely-halva-a54879.netlify.app",
    img: Pquotes,
    texto: `You can see the ready-made sentences I left you 😉`,
    tecnologies: ['React', 'JS', 'Vite']
  },
]


