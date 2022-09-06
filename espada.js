class Espada {
    nombre = "nombre por defecto";
    tieneFilo = true;
    espadaMagica = false;
    estaEnfundada = true;


    cambiarNombreEspada(nombrenuevo) {
        this.nombre = nombrenuevo;
    }

    declararNombre(){
        return "El nombre de esta espada es " + this.nombre;
    }

   desenfundarse(){
    if (this.espadaMagica == true) {
        this.estaEnfundada = false;
        console.log(this.nombre + " ha salido sola de su funda!");
    }
   }

   lanzarse(humano) {
    if (this.espadaMagica == true && this.estaEnfundada == false) {
        humano.diasDesdeUltimoAccidente = 0;
        console.log(this.nombre + " le ha provocado un accidente a " + humano.nombre + "! han pasado " + humano.diasDesdeUltimoAccidente + "  días desde su ultimo accidente.")
    }
   }

   liberar(espada){
    if (this.espadaMagica == true && espada.estaEnfundada == true) {
        espada.estaEnfundada = false;
        console.log("Oh no! " + this.nombre + " ha sacado de su funda a " + espada.nombre + "!")
    }
   }


}

module.exports = Espada;