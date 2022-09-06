class Herrero {
    nombre = "nombrexdefecto";
    barbudo = true;
    diasDesdeUltimoAccidente = 0;
    estaContento = false;

    cambiarNombreHerrero(nombrenuevo){
        this.nombre = nombrenuevo;
    }

    declararNombre(){
        return "El nombre de este herrero es " + this.nombre; 
    }
    
    afilar(espada) {
        espada.tieneFilo = true;
    }

    desafilar(espada) {
        espada.tieneFilo = false;
    }

    encantar(espada){
        espada.espadaMagica = true;
        console.log(this.nombre + " ha encantado a la espada " + espada.nombre + " para que sea mágica");
    }

    declararEstadoAnimo(){
        if (this.estaContento === false)
        return this.nombre + " está triste"
        else {
            return this.nombre + " está feliz"
        }
    }

    contarChiste(amigo) {
        amigo.estaContento = true;
        console.log(this.nombre + " le contó un chiste a " + amigo.nombre);
    }

    crecerBarba(){
        this.barbudo = true;
    }

    afeitarse(navaja){
        if (this.barbudo === true && navaja.tieneFilo === true) {
            this.diasDesdeUltimoAccidente++
            this.barbudo = false
            navaja.tieneFilo = false;
            console.log(this.nombre + " se ha afeitado exitosamente usando a " + navaja.nombre);
            console.log(this.nombre + " lleva " + this.diasDesdeUltimoAccidente + " días sin accidentarse");
        }
        else if (navaja.tieneFilo === false){
            this.diasDesdeUltimoAccidente = 0;
            console.log("Ay! " + this.nombre +" se cortó afeitándose. Habrá que tener más cuidado");
        }

    }

}

module.exports = Herrero;