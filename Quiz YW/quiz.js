let results = []
let questionsDiv = document.querySelectorAll('.question')
let modal = document.querySelector('.modal')
let noticeH2 = document.querySelector('.notice h2')
let noticeP = document.querySelector('.notice p')
    

function calcular(){

     for(let i = 0; i < questionsDiv.length + 1; i++){
        
        let questaoAtual = 'question_'+[i]
        let questao = document.getElementsByName(questaoAtual)
       
        for(let j = 0; j < questao.length; j++){
            if(questao[j].checked){
                console.log(questao[j].id + ' ' + questao[j].value)
                results.push(parseInt(questao[j].value))
            }
        }
    } 

    let total = results.reduce((acumulador, valorAtual) => acumulador + valorAtual)

    console.log(total)
    console.log(typeof total)

    
    if(total <= 14){
        modal.classList.toggle('modal_on')
        noticeH2.textContent = "Parabéns!"
        noticeP.textContent = "Você é do tipo que sabe delegar responsabilidades, estabelecer metas realistas e recusar exigências absurdas. Continue assim. Sua saúde mental agradece."
    } else if(total >= 14 && total <= 26){
        modal.classList.toggle('modal_on')
        noticeH2.textContent = "Atenção!"
        noticeP.textContent = "O burnout está virando a esquina. Que tal reavaliar suas expectativas? Se o custo é mais alto que o benefício, o esgotamento é uma questão de tempo."
    } else if(total >= 26){
        modal.classList.toggle('modal_on')
        noticeH2.textContent = "Cuidado!"
        noticeP.textContent = "Você está a um passo do burnout. Procure conversar a respeito com colegas ou familiares. Se o estresse ocupacional chegou a níveis intensos, não postergue uma visita ao médico."
    }
  
}

function fechar(){
    location.reload();
}


 
