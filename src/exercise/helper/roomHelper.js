// 🐶 créé une fonction `calculAir` (air = longeur x largeur) qui sera exportée par defaut
// 🤖 export default function
const calculAir = (longueur, largeur) =>{
  return longueur * largeur;
}

// 🐶 créé une fonction `calculPerimetre` (perimètre = longeur x largeur x 2) qui sera exportée
// 🤖 export function
function calculPerimetre(longueur, largeur) {
  return (longueur + largeur) * 2;
}   
// 🐶 créé une constante `TEMP_MAX` = 60 qui sera exportée
// 🤖 export const
const TEMP_MAX = 60;

export { calculAir, calculPerimetre, TEMP_MAX };