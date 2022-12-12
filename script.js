const formElement = document.getElementById("SaveInscription");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

const Activity = document.getElementById("Activity").value;
const  Id  = document.getElementById("ImployeeId").value;
const Name = document.getElementById("ImployeeName").value;
const Identification = document.getElementById("EmployeeIdentification").value;
const City = document.getElementById("EmployeeCity").value;
const Sex = document.getElementById("EmployeeSex").value;
const Age = document.getElementById("EmployeAge").value;
const RegistrationDate = document.getElementById("DateInscription").value;
0
//Creamos un json para que los valores del formulario puedan guardarse

const Registrationsave = { Activity : Activity, Id : Id, Name : Name, Identification : Identification, city : City, Sex : Sex, Age : Age, RegistrationDate : RegistrationDate };
const RegistrationsaveJson = JSON.stringify(Registrationsave);
//debemos enviar los valores al backend
console.log(RegistrationsaveJson);
})