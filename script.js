let arrNumeri = [9,7,20,4,1,3,10,5,11,8,6,13,12,15,14,16,2,18,19,17];
const numeriDiv = document.getElementById("numeriDiv"); // initial array container
const sortNumeriDiv = document.getElementById("sortNumeriDiv"); //sorted array container
const btnShuffle = document.getElementById("btnShuffle"); //btn shuffle
const btnInOrDec = document.getElementById("btnInOrDec") // btn increase or dec.

btnShuffle.addEventListener("click", function(){ //on click shuffle the array items
    shuffleArray(arrNumeri)
})

let increaseOrDecrease = 0;

btnInOrDec.addEventListener("click", function(){
    btnInOrDec.classList.toggle("increase")

    if(btnInOrDec.classList == "increase"){
        increaseOrDecrease = 1
        console.log(increaseOrDecrease) 
    }else{
        increaseOrDecrease = 0
        console.log(increaseOrDecrease) 
    }
    sortedBubble()
})

bubble()

function bubble(){
    let altezza = 20;
    let colorChange = 235;
    
    numeriDiv.innerHTML = " ";
    sortNumeriDiv.innerHTML = " ";

    for (let i=0 ; i < arrNumeri.length; i++){
        numeriDiv.innerHTML += `<div id="numero-${arrNumeri[i]}">${arrNumeri[i]}</div>`
    }

    sortedBubble()
    
    
}
function sortedBubble(){
    let altezza = 20;
    let colorChange = 235;
    console.log(arrNumeri)
    
    if(increaseOrDecrease === 0){
        increaseBubble()
    }else if(increaseOrDecrease === 1){
        decreaseBubble()
    }

    for (let i=0 ; i < arrNumeri.length; i++){
        altezza += 10;
        colorChange -= 8;
        let styleNum = document.getElementById("numero-"+(i+1));
        styleNum.style.height=altezza.toString()+"px";
        styleNum.style.backgroundColor = "rgb(235," + colorChange + ",52)";
        
        let sortedNumero = document.getElementById("sortedNumero-"+(i+1));
        sortedNumero.style.height=altezza.toString()+"px";
        sortedNumero.style.backgroundColor = "rgb(235," + colorChange + ",52)";
        
    }
}

function shuffleArray(arrNumeri) {
    for (var i = arrNumeri.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrNumeri[i];
        arrNumeri[i] = arrNumeri[j];
        arrNumeri[j] = temp;
    }

    bubble()
}

function increaseBubble(){
    for (let i=0; i < arrNumeri.length; i++){
        
        for (let j = 0; j < arrNumeri.length; j++){
            
            
            if(arrNumeri[i] < arrNumeri[j]){   
                appoggio = arrNumeri[i];
                arrNumeri[i] = arrNumeri[j];
                arrNumeri[j] = appoggio;
            }
            sortNumeriDiv.innerHTML = " ";
            for (let i=0 ; i < arrNumeri.length; i++){
                sortNumeriDiv.innerHTML += `<div id="sortedNumero-${arrNumeri[i]}">${arrNumeri[i]}</div>`;
            }
        }
    }
}

function decreaseBubble(){
    sortNumeriDiv.innerHTML = " ";
    for (let i=0; i < arrNumeri.length; i++){
        
        for (let j = 0; j < arrNumeri.length; j++){
            
            
            if(arrNumeri[i] > arrNumeri[j]){   
                appoggio = arrNumeri[i];
                arrNumeri[i] = arrNumeri[j];
                arrNumeri[j] = appoggio;
            }
            sortNumeriDiv.innerHTML = " ";
            for (let i=0 ; i < arrNumeri.length; i++){
                sortNumeriDiv.innerHTML += `<div id="sortedNumero-${arrNumeri[i]}">${arrNumeri[i]}</div>`;
            }
        }
    }

}