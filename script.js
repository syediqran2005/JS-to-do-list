function signup(){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('EMAIL',email)
    localStorage.setItem('PASSWORD',pass)
    location.href = ('./signin.html')

}

function signin(){
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('EMAIL') == email && localStorage.getItem('PASSWORD') == pass){
        location.href = ('./index.html')
    }
        else {
            alert('chal nikal pehle signup kar ke aaaoo')
            location.href = ('./signup.html')
        }
    }


function logout(){
    localStorage.clear()
    location.href = ('./signin.html')
}    



 var getul = document.getElementById('ul')

function message() {
    
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ''

    
    var dateInput = document.getElementById('taskDate');
    var taskDate = dateInput.value;
    li.innerHTML = litext.nodeValue + " (Due: " + taskDate + ")"

    
    if (getul.firstChild) {
        getul.insertBefore(li, getul.firstChild);
    } else {
        getul.appendChild(li);
    }
    
    litext.value = "";
    dateInput.value = "";
    
      
    var deletebtn = document.createElement('button' )
    var deletebtnText = document.createTextNode('DELETE')
    deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')


    var editbtn = document.createElement('button')
    var editbtnText = document.createTextNode('EDIT')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfunc(this)')


    deletebtn.setAttribute('class','btn btn-danger  aaa')

    editbtn.setAttribute('class','btn btn-info  aaa')

    // localStorage.setItem('TEXT',litext.nodeValue)
    
    // localStorage.setItem('myList', JSON.stringify([litext.nodeValue, litext.nodeValue, litext.nodeValue]));  
   
    var myList = JSON.parse(localStorage.getItem('myList')) || [];
    var newTextValue = document.getElementById('ul').value;
    myList.push(newTextValue);
    localStorage.setItem('myList', JSON.stringify(myList));
    


}

function deleteall(){
    getul.innerHTML = ''
}

function del(e){
    e.parentNode.remove()

}

function editfunc(e){
    var edit = prompt('Enter edit value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit
}