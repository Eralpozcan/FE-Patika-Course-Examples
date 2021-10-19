

let userFormDom = document.querySelector('#userForm')
const alertDOM = document.querySelector('#alert')
const alertFunction = (title,message,alerttype="warning") =>`
<div class="alert alert-${alerttype} alert-dismissible fade show" role="alert">
  <strong>${title}</strong>${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

userFormDom.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector('#username');
    const USER_SCORE = document.querySelector("#score");
    if (USER_NAME.value && USER_SCORE.value){
        addItem(USER_NAME.value,USER_SCORE.value);
        USER_NAME.value = ''
        USER_SCORE.value = ''
    }else{
        alertDOM.innerHTML = alertFunction("Başlık bilgisi"," Hatalı veya eksik bilgi girdiniz","danger");
    }
    
}



const userListDom = document.querySelector('#userList')

const addItem = (userName,score) => {
    let liDOM = document.createElement('li')
    console.log(userName);
    liDOM.innerHTML = `${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDom.append(liDOM)
};




