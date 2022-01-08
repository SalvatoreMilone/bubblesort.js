const arrNumeri = [9,7,2,1,4,3,10,5,11,8,6,13,12,15,14,16,20,18,19,17];
const numeriDiv = document.getElementById("numeriDiv")
const sortNumeriDiv = document.getElementById("sortNumeriDiv")
console.log(arrNumeri)

let altezza = 20;
let colorChange = 235;

for (let i=0 ; i < arrNumeri.length; i++){
    numeriDiv.innerHTML += `<div id="numero-${arrNumeri[i]}">${arrNumeri[i]}</div>`
}

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

console.log(arrNumeri)

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




