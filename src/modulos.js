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

module.exports = { sequencia }