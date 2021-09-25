

// var serverName = "Kodluyoruz.org"




// console.log(serverName)

// console.log(Boolean(1n));
// console.log(Boolean(-1n));
// console.log(Boolean(Infinity));
// console.log(Boolean({}));
// console.log(Boolean(Symbol()));

// let a; 
// console.log(Boolean(a));


// var x = 10/'a';
// console.log(Boolean(x));
// let b = parseInt("123");
// console.log(typeof(b))
// console.log(b)


// let url  = "www.kodluyoruz.org"
// let language = "Java"

// language= language.replace(language,"JavaScript")
// console.log(language)



// newUrl = url.slice(url.indexOf(".")+1)
// console.log(newUrl)

// console.log(document.location)
// console.log(document.location.host)

// document.body.style.backgroundColor = "cyan";

// document.getElementById("domain").innerHTML ="Test";

// document.getElementById("btnClick").addEventListener('click',cliked)
// function cliked(){
//     alert("Butona tıklandı");
// }


// function reverseString(s) {
//     const arry = [s];
//     reversed = arry.reverse();
//     console.log(reversed)
// }


// reverseString("1234");

// console.log(!!2);


// function LargestFour(arr) { 
//     let sortedarray = arr.sort();
//     console.log(sortedarray);
//     let sum = 0;
//     let length = arr.length;
//     let arraynew = arr.slice(length-4,length);
//     if(length<4){
//         for(i=0;i<sortedarray.length;i++){
//             sum +=sortedarray[i]
//             console.log(sum);
//         }
//     }else if (length>=4){
//         for(i=0;i<arr.length+1;i++){
//             sum +=arraynew[i]
//             console.log(sum);
//         };
//     }

//     // code goes here 
//     return sum; 
  
//   }
//   let dizi = [-1, -2, -3] 
//   LargestFour(dizi);
//   // keep this function call here 
//   console.log(LargestFour(readline()));


//   function PalindromeCreator(str) {
//     let arr = str.split('') 
//     if(str.length<4){
//       return "not possible"
//     }
//     else if(str.length>=4){
//       valueNew = getRandomInt(1,str.length);
//       valueNew1 = getRandomInt(1,str.length);
  
//       let strnew = str.split('');
//       strnew.splice(valueNew,1);
//       strnew.splice(valueNew1,1);
  
//       console.log(strnew);
//       let a=palIs(strnew)
//       console.log(a)
//       if(a){
//         return "palindrome"
//       }else{
//         return "not possible"
//       }
//       //console.log("New:",strnew);
//     }
//     // code goes here  
  
//   }
//   function palIs(arr){
//     return arr.join('') === arr.reverse().join('');
  
//   }
  
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }
     
//   // keep this function call here 
//   console.log(PalindromeCreator(readline()));


let examGrade = prompt("Puanı giriniz");
let textInfo;
if(examGrade >=0 && examGrade<=100){
  if(examGrade >=90 || examGrade<101){
    textInfo = "AA"
  }else if(examGrade >=85 || examGrade<90){
    textInfo = "BA"
  }else if(examGrade >=80 || examGrade<85){
    textInfo = "BB"
  }else if(examGrade >=75 || examGrade<80){
    textInfo = "CB"
  }else if(examGrade >=70 || examGrade<85){
    textInfo = "CC"
  }else if(examGrade >=65 || examGrade<85){
    textInfo = "DC"
  }else if(examGrade >=60 || examGrade<85){
    textInfo = "DD"
  }else if(examGrade >=50 || examGrade<85){
    textInfo = "FD"
  }else if(examGrade >=0 || examGrade<49){
    textInfo = "FF"
  }
}else{
  textInfo ="Girilen bilgiler doğru değil"
}
let info = document.querySelector("#info")
info.innerHTML = `${textInfo} -> ${examGrade}`