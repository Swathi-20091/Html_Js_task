var formData={};
var selectedRow = null
function validateName() {
    const letters = /^[A-Za-z]+$/;
    if (document.getElementById('username').value !== "" && document.getElementById('username').value.match(letters)) {
           formData["username"] = document.getElementById('username').value;
           return true;
    } else {
      alert("Please Enter Valid Name");
      return false;
    }
}

function validateDob() {
  if (document.getElementById('DOB').value !== "") {
   formData["DOB"] = document.getElementById('DOB').value;
    return true;
  } else {
    alert("Please select Date of Birth");
    return false;
  }
}
function validateAge() {
    if (document.getElementById('Age').value !== "") {
     formData["Age"] = document.getElementById('Age').value;
      return true;
    } else {
      alert("Please Enter the Age");
      return false;
    }
  }
function validateGender() {
  if(document. getElementById('male'). checked) {
		formData["gender"]=document. getElementById('male'). value;
        return true;
	} else if (document. getElementById('female'). checked) {
		formData["gender"]=document. getElementById('female'). value;
      return true;
	} else if (document. getElementById('others'). checked) {
		formData["gender"]=document. getElementById('others'). value;
      return true;
    }else {
      alert("Please Select Gender");
      return false;
    }
}
function validatePhoneNumber() {
  const validPhone = /^[987]{1}\d{9}$/;
  if (document.getElementById('phonenumber').value !== "" && validPhone.test(document.getElementById("phonenumber").value)) {
    formData["phonenumber"]  = document.getElementById('phonenumber').value;
    return true;
  } else {
    alert("Please Enter Valid PhoneNumber");
    return false;
  }
}
function validateEmail() {
   const validMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (document.getElementById('email').value !== "" && validMail.test(document.getElementById("email").value)) {
     formData["email"] = document.getElementById('email').value; 
    return true;
  } else {
    alert("Please Enter Valid Email");
    return false;
  }
}
function validateLanguage() {
    formData.language = [];
    if(document.getElementById('Tamil').checked) {
         formData["language"].push(document.getElementById('Tamil').value);
                return true;
     }else if (document.getElementById('English').checked) {
         formData["language"].push(document.getElementById('English').value);
                return true;
     }else if (document.getElementById('Hindi').checked) {
         formData["language"].push(document.getElementById('Hindi').value);
         return true;
     } else {
       alert("Please Select the languages you know");
       return false;
     }
 }
 //read from data
function readFormData(){
    
    formData["username"] = document.getElementById("username").value;
    formData["DOB"] = document.getElementById("DOB").value;
    formData["Age"] = document.getElementById("Age").value;
    if(document.getElementById("male").checked){
        formData["gender"] =document.getElementById("male").value;    
    }
    else if(document.getElementById("female").checked){
        formData["gender"] =document.getElementById("female").value;    
    }
    else{
        formData["gender"] =document.getElementById("others").value;    
    }
    console.log(document.getElementById("gender").value);
    if(document.getElementById("English").checked){
        formData["language"] =document.getElementById("English").value;    
    }
    if(document.getElementById("Tamil").checked){
        formData["language"] =document.getElementById("Tamil").value;    
    }
    if(document.getElementById("Hindi").checked){
        formData["language"] =document.getElementById("Hindi").value;    
    }
    console.log(document.getElementById("language").value);
    formData["email"] = document.getElementById("email").value;
    formData["phonenumber"] = document.getElementById("phonenumber").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.username;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.DOB;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Age;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.gender;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.language;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.email;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.phonenumber;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = `<button id="edit" onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('username').value = selectedRow.cells[0].innerHTML;
    document.getElementById('DOB').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[2].innerHTML;
    if(selectedRow.cells[3].innerHTML === "male") {
        document. getElementById('male'). checked = true;
     }
     else if (selectedRow.cells[3].innerHTML === "female") {
        document. getElementById("female"). checked = true;
     }
     let language = selectedRow.cells[4].innerHTML.split(",");
     if (language[0] === "English") {
        document.getElementById("English").checked =true;
     }
     if (language[1] === "Tamil") {
        document.getElementById("Tamil").checked = true;
     }
     if (language[2] === "Hindi") {
        document.getElementById("Hindhi").checked = true;
     }
    document.getElementById('email').value = selectedRow.cells[5].innerHTML;
    document.getElementById('phonenumber').value = selectedRow.cells[6].innerHTML;
}
//update the data
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.DOB;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.language;
    selectedRow.cells[5].innerHTML = formData.email;
    selectedRow.cells[6].innerHTML = formData.phonenumber;

}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
         var row = td.parentElement.parentElement;
        document.getElementById('List').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('username').value = '';
    document.getElementById('DOB').value = '';
    document.getElementById('Age').value = '';
    if(document. getElementById('male'). checked) {
        document. getElementById('male'). checked = false;
     }
     else if (document. getElementById("female"). checked) {
        document. getElementById("female"). checked = false;
     }
     else if (document. getElementById("others"). checked) {
        document. getElementById("others"). checked = false;
     }
     if (document. getElementById("English"). checked) {
        document.getElementById("English").checked = false;
     }
     if (document. getElementById("Tamil"). checked) {
        document.getElementById("Tamil").checked = false;
     }
     if (document. getElementById("Hindi"). checked) {
        document.getElementById("Hindi").checked = false;
     }
    document.getElementById("email").value = "";
    document.getElementById('phonenumber').value = '';
    selectedRow = null;
}

function onFormSubmit() {
    if (validateName() && validateDob() && validateAge()&&validateGender() && validateLanguage() && validateEmail() && validatePhoneNumber()) {
    if (selectedRow == null) {
                insertNewRecord(formData);
       } 
    else {
                   updateRecord(formData);
       }
    resetForm();
    }
   }
