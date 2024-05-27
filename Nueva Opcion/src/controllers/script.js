import Contact from "../models/Contact.js"
import { bst } from "./dependencies.js"

let btnAdd = document.getElementById("agenda-btn");
let btnSearch = document.getElementById("search-btn");
let btnPrint = document.getElementById("imprimir-btn")
let btnPrintOficial = document.getElementById("btnPrint")

let btnMax = document.getElementById("btnMaximo");
let btnMin = document.getElementById("btnMinimo");


btnAdd.addEventListener("click",()=>{
    let firstName = document.getElementById("firstName").value
    let lastName = parseInt(document.getElementById("lastName").value)
    let phoneNumber = document.getElementById("phoneNumber").value

    let contacto = new Contact(firstName, lastName, phoneNumber)
    let data = bst.add(contacto)
    console.log(data);
    if (data){
        alert("Registro exitoso")
        console.log(contacto)
    }
    else
        alert("Falló el registro")
        
})

btnSearch.addEventListener("click", ()=> {
    let searchLName = parseInt(document.getElementById("searchLastName").value)
    let lName = bst.search(searchLName);

    if (lName !== null) {
        alert("Chingamos")
        alert(`Encontrado: ${lName.value.firstName}  ${lName.value.phoneNumber}, Matricula: ${lName.value.lastName}`)
    } else{
        alert("Matricula no Registrada")
        
    }
})


btnPrint.addEventListener("click", () => {
    bst.inOrder(value => {
        console.log(`Nombre: ${value.firstName} ${value.phoneNumber}, Matricula: ${value.lastName}`);
    });
})


btnPrintOficial.addEventListener("click", () => {
    // Obtén el contenedor donde se mostrarán los usuarios
    const userList = document.getElementById("userList");
    
    // Limpia el contenido previo del contenedor (opcional)
    userList.innerHTML = "";
    bst.inOrder((node) => {
        const userItem = document.createElement("div");
        userItem.textContent = node.firstName + " " + node.phoneNumber + " " +node.lastName ;
        userList.appendChild(userItem);
    });
});


btnMax.addEventListener("click", () => {
    let maxValue = bst.findMax();
    if (maxValue) {
        alert(`El valor máximo es: ${maxValue.firstName} ${maxValue.lastName}, Tel: ${maxValue.phoneNumber}`);
    } else {
        alert("El árbol está vacío.");
    }
});

btnMin.addEventListener("click", () => {
    let minValue = bst.finMin();
    if (minValue) {
        alert(`El valor minimo es: ${minValue.firstName} ${minValue.lastName}, Tel: ${minValue.phoneNumber}`);
    } else {
        alert("El arbol esta vacio.")
    }

})


