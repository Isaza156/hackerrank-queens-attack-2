var arriba = 0;
var arribaDerecha = 1;
var derecha = 2;
var abajoDerecha = 3;
var abajo = 4;
var abajoIzquierda = 5;
var izquierda = 6;
var arribaIzquierda = 7;

function direccionDistancia(filaReina, columnaReina, filaObstaculo, columnaObstaculo) {
    if (filaObstaculo === filaReina) {
        return columnaObstaculo < columnaReina ?
            [izquierda, columnaReina - columnaObstaculo]
            :
            [derecha, columnaObstaculo - columnaReina];
    } else if (columnaObstaculo === columnaReina) {
        return filaObstaculo < filaReina ?
            [abajo, filaReina - filaObstaculo]
            :
            [arriba, filaObstaculo - filaReina];
    } else if (Math.abs(filaObstaculo - filaReina) === Math.abs(columnaObstaculo - columnaReina)) {
        if (filaObstaculo < filaReina) {
            return columnaObstaculo < columnaReina ?
                [abajoIzquierda, columnaReina - columnaObstaculo]
                :
                [abajoDerecha, columnaObstaculo - columnaReina];
        } else {
            return columnaObstaculo < columnaReina ?
                [arribaIzquierda, columnaReina - columnaObstaculo]
                :
                [arribaDerecha, columnaObstaculo - columnaReina]
        }
    }
    return null;
}

function distanciaPredeterminada

