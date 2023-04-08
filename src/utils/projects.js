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
    title: 'App Clima',
    referencia: "https://dazzling-liger-d9e01c.netlify.app",
    img: Pclima,
    texto: `Aplicación que te permite ver el clima,
            la temperatura, la humedad de tu localización`,
    tecnologies: ['React', 'axios', 'JavaScript', 'Vite']
  },
  {
    id: 2,
    title: 'App Box-Shadow',
    referencia: "https://dazzling-florentine-1b687f.netlify.app",
    img: BoxShadow,
    texto: `Una aplicación que te devuelve un codigo CSS, para
    darle sombra a la caja en el box-model`,
    tecnologies: ['HTML', 'CSS', 'JavaScript', 'Vite']

  },
  {
    id: 3,
    title: 'App Pokemon',
    referencia: "https://steady-nougat-633108.netlify.app",
    img: Ppokemon,
    texto: `Realizada para mostrar a todos los pokemones que existen
    con sus diferentes características, y estadísticas`,
    tecnologies: ['React', 'axios', 'Router', 'Redux', 'JavaScript', 'Vite']
  },
  {
    id: 4,
    title: 'Todo API',
    referencia: "https://github.com/Programadordelfuturo/ToDo-App",
    img: PtodoAPI,
    texto: `API diseñada a crear nuevas tareas que hacer`,
    tecnologies: ['JavaScript', 'nodeJS', 'Express', 'Sequelize', 'nodemon', 'Thunder Client'],
  },
  {
    id: 5,
    title: 'E-commers-API',
    referencia: "https://github.com/Programadordelfuturo/Ecommers-backend",
    img: PtodoAPI,
    texto: `API para E-commers, de lo cual tienes productos, productos agregados al carrito, etc`,
    tecnologies: ['JavaScript', 'nodeJS', 'Express', 'Sequelize', 'nodemon', 'Thunder Client', 'bcrypt', 'cors', 'dotenv', 'JWT', 'morgan'],
  },
  {
    id: 6,
    title: 'Proyect-NFT',
    referencia: "https://etherscan.io/address/0x8b3a1873013a90c6077af72b2ab95263288ab941",
    img: PtodoAPI,
    texto: `Proyecto NFT, Smart Contract cargado en etherscan que contiene 10000 NFT's siendo personajes entre normales 
    (personas de distintas etnias) y fantasticos (extraterresstres, fantasmas, spectros, etc)`,
    tecnologies: ['JavaScript', 'nodeJS', 'Express']
  },
  {
    id: 7,
    title: 'Calculadora',
    referencia: "https://sensational-zabaione-3c81e6.netlify.app",
    img: Pcalculadora,
    texto: `Realicé una calculadora como práctica completa de las tecnologías
    basicas como JS, HTML, CSS`,
    tecnologies: ['HTML', 'CSS', 'JavaScript', 'Vite']
  },
  {
    id: 8,
    title: 'Random Password',
    referencia: "https://lambent-sprite-37e961.netlify.app",
    img: Pcalculadora,
    texto: `Te da una contraseña con caracteres al azar, puedes escoger el
    tamaño de la contraseña`,
    tecnologies: ['React', 'JavaScript', 'Vite']
  },
  {
    id: 9,
    title: 'Contability Project',
    referencia: "https://one-proyect.netlify.app",
    img: Pcontability,
    texto: `Hecha para el mercado Chileno que ayuda a saber el
    monto final el cual tendra que pagar el cliente por un bien o servicio dado
    y tambien ayuda a calcular el monto que se tiene que presentar y pagar ante 
    la institución correspondiente`,
    tecnologies: ['Vue', 'TailwindCSS', 'JavaScript', 'Vue CLI']
  },
  {
    id: 10,
    title: 'Registra tu Nombre',
    referencia: "https://sweet-malasada-784f81.netlify.app",
    img: Pwelcome,
    texto: `Permite mostrar tu nombre una vez agregado en el input`,
    tecnologies: ['React', 'JavaScript', 'Vite']
  },
  {
    id: 11,
    title: 'App Rick And Morty',
    referencia: "https://helpful-piroshki-e74e4c.netlify.app",
    img: RickMorty,
    texto: `Inspirada en la serie animada Rick and Morty, presenta
    a los personajes de la serie y sus características`,
    tecnologies: ['React', 'axios', 'JavaScript', 'Vite']
  },
  {
    id: 12,
    title: 'Frases Celebres',
    referencia: "https://lovely-halva-a54879.netlify.app",
    img: Pquotes,
    texto: `Puedes ver las frases ya preparadas que te deje 😉`,
    tecnologies: ['React', 'JavaScript', 'Vite']
  },
]

