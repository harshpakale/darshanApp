let arrFromLS = JSON.parse(localStorage.getItem("userData")) || [];


function displaytable(arrFromLS) {
    document.querySelector("tbody").innerHTML="";
    arrFromLS.forEach(function(elem) {
      // console.log(elem);

      let tr = document.createElement("tr");
      

      let td1 = document.createElement("td");
      td1.innerText = elem.username;

      let td2 = document.createElement("td");
      td2.innerText = elem.password;

      
     

      tr.append(td1,td2);
      document.querySelector("tbody").append(tr);
      
    });
  }
  console.log(arrFromLS);
  displaytable(arrFromLS)
  