"use strict";
// let cem = 0;
// for(let i = 1;i<=5;i++){
//     cem=cem+i;
// }
// console.log("1-den 5-e qeder olan ededlerin cemi:", cem);

// for(let i =10; i>=1; i--){
//     console.log(i);
    
// }

// const word = "America";
// let newWord = "";
// for(let i = 0; i<7;i++){
//     console.log(word[i]);
    
// }
// for(let i = 0;i<7;i++){
//     newWord +=word[i];
// }
// console.log(newWord);

// for(let i = 6 ; i>=0;i--){
//     newWord+=word[i];
// }
// console.log(newWord);



// let word = prompt("Word");
// let newWord = "";
// for(let i = 0;i<word.length;i++){
//     newWord+=word[i];
// }
// console.log(newWord);


// let word = prompt("word");
// let newWord = "";
// for(let i = word.length-1 ; i>=0; i--){
//     newWord+= word[i]
// }
// console.log(newWord);



// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i = 1;
// do{
//     console.log(i);
//     i++
    
// }while(i<=10);


// const number = Math.ceil(Math.random() * 10);
// let luck = 3;
// let mesaj = ("1-10 arası rəqəm seçin");
// let guess = prompt(mesaj);
// let succes = true;

// while(guess != number){
//     if(luck>1){
//         if(guess<number){
//             mesaj=("Yuxarı qalx")
//         }else{
//             mesaj = ("Aşağı düş")
//         }
//         luck--;
//         alert(`${luck} şansınız qalıb`)
//         guess= prompt(mesaj);
//     }else{
//         succes = false;
//         break;
//     }
// }
// if(succes){
//     alert(`Təbriklər,Doğru rəqəm ${number} idi`);
// }else{
//     alert(`Şansınız qalmadı, Doğru rəqəm ${number} idi`);
// }

// let cehd = 1;
// let prize = 100;
// let number = Math.ceil(Math.random()*20);
// let mesaj = ("1-20 arasi reqem daxil edin");
// let guess =prompt(mesaj);

// while(guess!=number){
//     if(guess<number){
//         mesaj=("Yuxari cix");
        
//     }else{
//         mesaj=("Asagi dus");
//     }
//     cehd++;
//     guess=prompt(mesaj);
// }
// prize=Math.floor(prize/cehd);
// document.writeln(`<h1>Təbriklər siz ${cehd} dəfə tapdığınız üçün ${prize} Dollar qazandınız!</h1>`)




// let cehd = 1;
// let price = 100;
// let reqem = Math.ceil(Math.random()*30);
// let mesaj = ("1-den 30-a qeder reqem texmin et");
// let texmin = prompt(mesaj);

// while(texmin!=reqem){
//     if(texmin<reqem){
//         mesaj=("yuxari qalx");
//     }else{
//         mesaj=("asagi dus");
//     }
//     cehd++;
//     texmin=prompt(mesaj);
// }
// price=Math.floor(price/cehd);
// document.writeln(`<h1>Təbriklər,Siz rəqəmi ${cehd} dəfəyə tapdığınız üçün ${price} Dollar qazandınız</h1>`)



// let pul = 100;
// let cehd = 1;
// let mesaj = ("1-den 40-a qeder bir eded teyin edin");
// let texmin = prompt(mesaj);
// let reqem = Math.ceil(Math.random()* 40);


// while(texmin !=reqem ){
//     if(texmin<reqem){
//         mesaj = ("Yuxari qalx");
//     }else{
//         mesaj=("asagi dus");
//     }
//     cehd++;
//     texmin=prompt(mesaj);
// }
// pul=Math.floor(pul/cehd);
// document.writeln(`<h1>Təbriklər,Siz rəqəmi ${cehd} dəfəyə tapdığınız üçün ${pul} Dollar qazandınız</h1>`)


// let sans = 5;
// let reqem = Math.ceil(Math.random()*10);
// let success=true;
// let mesaj = ("1-den 10- a qeder bir eded secin");
// let texmin = prompt(mesaj);

// while(texmin!=reqem){
//     if(sans>1){
//         if(texmin<reqem){
//             mesaj=("yuxari");
//         }else{
//             mesaj=("asagi");
//         }
//         sans--;
//         alert(`${sans} sansiniz qaldi.`)
//         texmin=prompt(mesaj)
//     }else{
//         success=false;
//         break;
//     }
// }
// if(success){
//     document.writeln(`Tebrikler,Eded ${reqem} idi`)
// }else{
//     document.write(`Qazanmadin,dogru eded ${reqem} idi`)
// }





// for(let i = 1; i<=10;i++){
//     console.log(i);
    
// }


// let number = Math.ceil(Math.random()*10);
// let price = 100;
// let mesaj = ("1 ile 10 arasinda bir reqem secin");
// let guess=prompt(mesaj);
// let cehd = 1;

// while(guess!=number){
//     if(guess<number){
//         mesaj=("yuxari");
//     }else{
//         mesaj=("asagi");
//     }
//     cehd++;
//     guess=prompt(mesaj);
// }
// price=Math.floor(price/cehd);
// document.writeln(`tebrikler,cavab ${number} idi,Sizin hediyyeniz ${price} dollar`);


let sans = 5;
let number = Math.ceil(Math.random()*10);
let mesaj = ("1 ile 10 arasinda bir reqem secin");
let guess = prompt(mesaj);
let success = true;

while(guess!=number){
    if(sans>1){
        if(guess<number){
            mesaj=("yuxari");
        }else{
            mesaj=("asagi");
        }
        sans--;
        alert(`${sans} sansiniz qaldi`)
        guess=prompt(mesaj);

    }else{
        success=false;
        break;
    }
}
if(success){
    document.writeln(`<h1>Tebrikler,Reqem ${number} idi.</h1>`)
}else{
    document.writeln(`<h2>Uduzdunuz,Reqem ${number} idi</h2>`)
}
---------------------------------
let cehd=1;

let money=100;

let number=Math.ceil(Math.random()*10;

let mesaj=("1 ile 10 arasindaki dogru reqemi tapim");

let guess=prompt(mesaj);


while(guess!=number){

       if(guess<number){
        
       mesaj=("Yuxari qalx");
       
       }else{
       
        mesaj=("Asagi dus");
 
        }
        cehd++;
        guess=(mesaj);

}

money=Math.floor(money/sans);
document.writeln(`Tebrikler,Siz reqemi ${cehd} cehd ile tapdiginiz ucun ${money} dollar qazandiniz.`)







