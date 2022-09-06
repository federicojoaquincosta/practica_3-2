const Espada = require("./espada.js");
const Herrero = require("./herrero.js"); 

const excalibur = new Espada;
const masamune = new Espada;
const pedrito = new Herrero;
const carlitos = new Herrero;

masamune.cambiarNombreEspada("Masamune");
excalibur.cambiarNombreEspada("Excalibur");

console.log(excalibur.declararNombre());

pedrito.cambiarNombreHerrero("Pedrito");
carlitos.cambiarNombreHerrero("Carlitos");

console.log(pedrito.declararNombre());

pedrito.afeitarse(excalibur);
pedrito.crecerBarba();
pedrito.afilar(excalibur);
pedrito.afeitarse(excalibur);

console.log(carlitos.declararEstadoAnimo());
pedrito.contarChiste(carlitos);
console.log(carlitos.declararEstadoAnimo())
carlitos.encantar(masamune);
masamune.desenfundarse();
masamune.lanzarse(pedrito);
masamune.liberar(excalibur);