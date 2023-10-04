function sequencia() {
    const min = 1
    const max = 60

    let sequenciaDeNumerosAleatorios = []

    for (let i = 1; i <= 6; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min

        while (sequenciaDeNumerosAleatorios.includes(numero)) {
            numero = Math.floor(Math.random() * (max - min + 1)) + min
        }

        sequenciaDeNumerosAleatorios.push(numero)
    }

    return sequenciaDeNumerosAleatorios
}

function sequenciaDeNumerosPares() {
    const min = 1
    const max = 60

    let sequenciaDeNumerosAleatorios = []

    for (let i = 1; i <= 6; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min

        while (sequenciaDeNumerosAleatorios.includes(numero) || numero % 2 === 1) {
            numero = Math.floor(Math.random() * (max - min + 1)) + min
        }

        sequenciaDeNumerosAleatorios.push(numero)
    }

    return sequenciaDeNumerosAleatorios
}

function sequenciaDeNumerosImpares() {
    const min = 1
    const max = 60

    let sequenciaDeNumerosAleatorios = []

    for (let i = 1; i <= 6; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min

        while (sequenciaDeNumerosAleatorios.includes(numero) || numero % 2 === 0) {
            numero = Math.floor(Math.random() * (max - min + 1)) + min
        }

        sequenciaDeNumerosAleatorios.push(numero)
    }

    return sequenciaDeNumerosAleatorios
}

module.exports = { sequencia, sequenciaDeNumerosPares, sequenciaDeNumerosImpares }