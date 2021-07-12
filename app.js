var btnClick = document.querySelectorAll('.btn-style');
var IDmachine = document.getElementById('img-machine');
var IDhumain = document.getElementById('img-humain');
var scoreM = document.getElementById('scoreM');
var scoreH = document.getElementById('scoreH');
var reset = document.getElementById('btn-reset');
var Bscore = document.getElementById('scores');
var scoreBlock = document.getElementById('div-score');
var btn_close = document.getElementById('close');
var imageH = document.createElement('img');
var imageM = document.createElement('img');
var ListScore = document.createElement('ul');
var Rimages = [1, 2, 3];
var cmptH = 1;
var cmptM = 1;
var scores = [];
if(parseInt(localStorage.getItem('size')) > 0){
    scores.push(localStorage.getItem('score'));
}
ListScore.classList.add('list-style');


reset.addEventListener('click', supprimer);
Bscore.addEventListener('click', best_score);
btn_close.addEventListener('click', fermer);


function Rshow(){
    var R = Math.floor(Math.random()* Rimages.length);
    return Rimages[R];
}

btnClick.forEach(elet =>{
    elet.addEventListener('click', function(){
        IDmachine.innerHTML = ' ';
        var Rimg = Rshow();
        imageH.src = 'images/image'+elet.value+'.png';
        IDhumain.appendChild(imageH);
        setTimeout(function(){
            imageM.src = 'images/image'+Rimg+'.png';
            IDmachine.appendChild(imageM);
            (elet.value == Rimg) ? scoreH.innerText = 'score : '+cmptH++ : scoreM.innerText = 'score : '+cmptM++;
        }, 2500)
    });
})

function supprimer(){
    scores.push(--cmptH)
    localStorage.setItem('score',scores.toString());
    localStorage.setItem('size', scores.length.toString());
    cmptM = 1;
    cmptH = 1;
    scoreH.innerText = 'score : 0';
    scoreM.innerText = 'score : 0';
    IDmachine.innerHTML = ' ';
    IDhumain.innerHTML = ' ';
}
function best_score(){
    ListScore.innerHTML = ' ';
    var l = localStorage.getItem('score');
    var list = [];
    list.push(l);
    var tab = list[0].split(',');
    for(let i=0; i<tab.length; i++){
        var li = document.createElement('li');
        li.textContent = tab[i];
        //console.log(list[i]);
        ListScore.appendChild(li);
    }
    scoreBlock.appendChild(ListScore);
    scoreBlock.style.left = '0';
    scoreBlock.classList.add('active')
}

function fermer(){
    scoreBlock.style.left = `${-1*100}%`;
}
