

let buttonCliced = document.querySelector('#btnClick')
let toggle = true; 
buttonCliced.addEventListener("click",function(){
    //console.log("Tiklandi")

    this.value == "Tikla" ? this.value ="Tiklama" : this.value = "Tikla";
})

buttonCliced.addEventListener("mouseover",function(){
    console.log(this);
    this.style.color == "red" ? this.style.color = "black" : this.style.color="red";
    console.log(this.style.color)
})

