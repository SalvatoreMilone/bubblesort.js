const arrNumeri = [9,7,2,1,4,3,10,5,11,8,6,13,12,15,14,16,20,18,19,17];
const numeriDiv = document.getElementById("numeriDiv")
const sortNumeriDiv = document.getElementById("sortNumeriDiv")
console.log(arrNumeri)

for (let i=0 ; i < arrNumeri.length; i++){
    numeriDiv.innerHTML += `<div id="numero-${arrNumeri[i]}">${arrNumeri[i]}</div>`
}

for (let i=0; i < arrNumeri.length; i++){
    
    for (let j = 0; j < arrNumeri.length; j++){
        
        let appoggio;
        
        if(arrNumeri[i] < arrNumeri[j]){   
            appoggio = arrNumeri[i];
            arrNumeri[i] = arrNumeri[j];
            arrNumeri[j] = appoggio;
        }
    }
}

    console.log(arrNumeri)
    
    
    for (let i=0 ; i < arrNumeri.length; i++){
        sortNumeriDiv.innerHTML += `<div id="numeroSorted-${arrNumeri[i]}">${arrNumeri[i]}</div>`
    }
    
    let altezza = 20;
    let colorChange = 235;
    
    
    for (let i=1 ; i < arrNumeri.length +1; i++){
        altezza += 10;
        colorChange -= 8;
        let styleNum = document.getElementById("numero-"+(i));
        styleNum.style.height=altezza.toString()+"px";
        styleNum.style.backgroundColor = "rgb(235," + colorChange + ",52)";

        let styleNumSorted = document.getElementById("numeroSorted-"+(i))
        styleNumSorted.style.height=altezza.toString()+"px";
        styleNumSorted.style.backgroundColor = "rgb(235," + colorChange + ",52)";
    }
    