const PalabraReservada = require('./palabras.reservadas');

class Words {

    count(word) {
        if (!word) {
            return;
        }
        return this.getObjectoConPalabras(word);
    }

    getObjectoConPalabras(word) {
        let cadenaPalabras = this.getArregloDePalabras(word),
            objetoPalabras = {},
            palabra;

        for (let index in cadenaPalabras) {
            palabra = cadenaPalabras[index];

            if (PalabraReservada.esPalabraReservada(palabra)) {
                objetoPalabras[palabra] = 1;
                continue;
            }

            if (this.esPalabraConApostrofesALosCostados(palabra)) {
                objetoPalabras[palabra.split('\'')[1]] = 1;
                continue;
            }

            if (!objetoPalabras[palabra]) {
                objetoPalabras[palabra] = 1;
                continue;
            }

            objetoPalabras[palabra]++;
        }
        return objetoPalabras;
    };

    /**
     * Obtenemos una palabra con las siguientes restricciones.
     * \w — Representa cualquier carácter alfanumérico.
     * \u0400-\u04FF - https://apps.timwhitlock.info/unicode/inspect/hex/0400-04FF
     * \u00C0-\u00FF - https://apps.timwhitlock.info/unicode/inspect/hex/0000-007F
     * \' - Permite los apostrofes.
     *
     * @param word
     * @returns {String[]}
     */
    getArregloDePalabras(word) {
        return word.toLowerCase().match(
            /[\w'\u0400-\u04FF-\u00C0-\u00FF]+/g
        );
    }

    esPalabraConApostrofesALosCostados(palabra) {
        return palabra[0] === '\'' || palabra.substr(palabra.length - 1) === '\'';
    }

}

module.exports = Words;