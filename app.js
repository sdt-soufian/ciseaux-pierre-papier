var btnClick = document.querySelectorAll('.btn-style');
var IDmachine = document.getElementById('img-machine');
var IDhumain = document.getElementById('img-humain');
var scoreM = document.getElementById('scoreM');
var scoreH = document.getElementById('scoreH');
var reset = document.getElementById('btn-reset');
var imageH = document.createElement('img');
var imageM = document.createElement('img');
var Rimages = [1, 2, 3];
var cmptH = 1;
var cmptM = 1;

reset.addEventListener('click', supprimer);
function Rshow(){
    var R = Math.floor(Math.random()* Rimages.length);
    return Rimages[R];
}

btnClick.forEach(elet =>{
    elet.addEventListener('click', function(){
        IDmachine.innerHTML = ' ';
        var Rimg = Rshow();
        console.log(Rimg);
        imageH.src = 'images/image'+elet.value+'.png';
        IDhumain.appendChild(imageH);
        setTimeout(function(){
            imageM.src = 'images/image'+Rimg+'.png';
            IDmachine.appendChild(imageM);
            console.log(Rimg);
            (elet.value == Rimg) ? scoreH.innerText = 'score : '+cmptH++ : scoreM.innerText = 'score : '+cmptM++;
        }, 2500)
    });
})

function supprimer(){
    cmptM = 1;
    cmptH = 1;
    scoreH.innerText = 'score : 0';
    scoreM.innerText = 'score : 0';
    IDmachine.innerHTML = ' ';
    IDhumain.innerHTML = ' ';
}
