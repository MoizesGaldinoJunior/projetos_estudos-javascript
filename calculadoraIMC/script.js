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

        if (valorImc < 18.5){
            info = 'Abaixo do peso'
            result.style.backgroundColor = 'red'
        }

        texto.textContent = info


    }
}

calcular.addEventListener('click', imcCalc)