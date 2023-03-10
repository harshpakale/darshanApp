
let btn = document.getElementById("admn");
btn.addEventListener('click', function(){

    if(userArr.username == "darshan@gmail.com" && userArr.password =="hello") {
 window.location.href = "./admin.html";
    } else {
        alert("Wrong Credintials !")
    }
    
})




function myFunction(){
    var x = document.getElementById("pass");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

      if(x.type ===  'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
      }
      else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
      }
}


let submit = document.getElementById("submit");
let mail = document.getElementById("mail").value;
let pass = document.getElementById("pass").value;

let userArr = JSON.parse(localStorage.getItem("userData")) || [];
let saveLead = (event) => {
    event.preventDefault();

    


    let userObj = {
        username : document.getElementById("mail").value,
        password : document.getElementById("pass").value,

        
        
     };


    //  if (userObj.username == "darshan@gmail.com" && userObj.password == "hello"){
        
    //     alert("welcome to Admin Page !!");
    //     window.location.href = "./admin.html";
        
    // } else {
    //     alert("Login Successfully !")
    // }

    userArr.push(userObj);
     console.log(userArr);
    localStorage.setItem("userData", JSON.stringify(userArr));
}


submit.addEventListener('click', saveLead);



