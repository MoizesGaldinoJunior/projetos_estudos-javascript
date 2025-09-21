const calcular = document.getElementById('btnCal')


function imcCalc() {
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const imc = document.getElementById('imc')
    const texto = document.getElementById('text')
    const result = document.getElementById('background')
    
    if (nome !== '' && idade !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso / (altura * altura)).toFixed(1)
        
        let info = ''

        imc.textContent = `Seu IMC é: ${valorImc}`

        if (valorImc <= 18.5){
            info = 'Abaixo do peso'
            result.style.backgroundColor = '#9EF6FF'
            result.style.color = 'black'
        } if (valorImc >= 18.6 && valorImc <= 24.9) {
            info = 'Peso Normal'
            result.style.backgroundColor = 'green'
            result.style.color = '#fff'
        } if (valorImc >= 25 && valorImc <= 29.9) {
            info = 'Sobrepeso'
            result.style.backgroundColor = '#FFCC31'
            result.style.color = '#614900ff'
        } if (valorImc >= 30 && valorImc <= 34.9) {
            info = 'Obesidade 1'
            result.style.backgroundColor = '#FFA32F'
            result.style.color = '#7a4300ff'
        } if (valorImc >= 35 && valorImc <= 39.9) {
            info = 'Obesidade 2'
            result.style.backgroundColor = '#FF8462'
            result.style.color = '#851e02ff'
        } if (valorImc > 40) {
            info = 'Obesidade 3'
            result.style.backgroundColor = '#ff0909ff'
            result.style.color = '#ffffffff'
        }
        texto.textContent = info


    }
}

calcular.addEventListener('click', imcCalc)