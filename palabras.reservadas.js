class PalabraReservada {

    static esPalabraReservada(palabraReservada) {
        switch(palabraReservada) {
            case PALABRAS_RESERVADAS.CONSTRUCTOR:
            case PALABRAS_RESERVADAS.TO_STRING:
                return true;
            default:
                return false;
        }
    }
}

const PALABRAS_RESERVADAS = {
    CONSTRUCTOR: 'constructor',
    TO_STRING: 'tostring'
};


module.exports = PalabraReservada;