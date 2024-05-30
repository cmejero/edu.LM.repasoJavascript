



let registros = [];
const dataStored3 = localStorage.getItem("clientes");
if (dataStored3) {
	registros = JSON.parse(dataStored3)
	console.log("memoria clientes")
	console.log(registros)
}
if (document.getElementById("contador3")) {
	document.getElementById("contador3").innerHTML = typeof (registros)
}

console.log(registros)

function agregar() {
	if (document.getElementById("pass2").value === document.getElementById("pass1").value) {

		registros.push({

			nombre: document.getElementById("nombre1").value.toLowerCase(),
			apellido: document.getElementById("apellido").value.toLowerCase(),
			pregunta: document.getElementById("pregunta").value.toLowerCase(),
			respuesta: document.getElementById("respuesta").value.toLowerCase(),
			email: document.getElementById("email").value,
			pass: document.getElementById("pass2").value


		})
		console.log(usuario)

		console.log(usuario)
		localStorage.setItem("clientes", JSON.stringify(registros))
	}

}

function maestra() {
	if (nombre() && apellidos() && pass()) {
		alert("Ha sido registrado correctamente")

		return true;
	}


	else if (!nombre()) {
		alert("El nombre está escrito incorrectamente")
		return false;
	}
	else if (!apellidos()) {
		alert("el apellido está escrito incorrectamente")
		return false;
	}
	else if (!pass()) {
		alert("las contraseñas no coinciden")
		return false;
	}


}


function nombre() {
	let name = document.getElementById("nombre1").value
	console.log(name);

	if (isNaN(name)) {
		return 1;
	}
	else {
		return 0;
	}
}

function apellidos() {
	let apellido1 = document.getElementById("apellido").value

	if (isNaN(apellido1)) {
		return 1;
	}
	else {
		return 0;
	}
}

function pass() {
	let pass11 = document.getElementById("pass1").value;
	let pass22 = document.getElementById("pass2").value;

	if (pass11 === pass22) {


		return 1;

	}
	else {
		return 0;
	}
}


//########################################################3

let accion;
let pedirAnimal;
let pedirAccion;
let fechaString
let tiempo;
const escritura = document.getElementById("escribir");



function agregar2() {

	let buscarCliente = prompt("Introduzca el email del cliente")

	for (let i = 0; i < registros.length; i++) {
		if (buscarCliente.toLowerCase() === registros[i].email) {

			let pedir = prompt("introduzca la fecha en este formato: dd-MM-yyyy hh:mm")
			let fecha = new Date(pedir);
			fechaString = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + "/" + fecha.getHours() + "/" + fecha.getMinutes();


			let fechaActual = new Date();
			let diferenciaFechas = fecha - fechaActual;

			if (diferenciaFechas < 0) {
				alert("La fecha introducida es incorrecta")

			}
			else {
				pedirAnimal = prompt("Introduzca el animal")

				if (pedirAnimal.toLowerCase() === "perro") {

					pedirAccion = prompt("Quieres un chequear o limpiar")

					if (pedirAccion.toLowerCase() === "chequear") {

						tiempo = "45"
					}
					else if (pedirAccion.toLowerCase() === "limpiar") {

						tiempo = fecha.setMinutes(fecha.setMinutes() + 30)
					}
				}
				else if (pedirAnimal.toLowerCase() === "gato") {
					pedirAccion = prompt("Quieres un chequear o limpiar")

					if (pedirAccion === "chequear") {

						tiempo = fecha.setMinutes(fecha.setMinutes() + 25)
					}
					else if (pedirAccion.toLowerCase() === "limpiar") {

						tiempo = "60'"
					}

				}
				else if (pedirAnimal.toLowerCase() === "exotico") {
					pedirAccion = prompt("Quieres un chequear o limpiar")


					if (pedirAccion.toLowerCase() === "chequear") {

						tiempo = "90'"


					}
					else if (pedirAccion.toLowerCase() === "limpiar") {

						tiempo = "30'"


					}

				}
				else {
					alert("Animal no reconocido")

				}
			}












		}
		escritura.innerHTML += ("<tr><td>" + registros[i].nombre + "</td><td>" + registros[i].apellido + "</td><td>" + fechaString + "</td><td>" + pedirAnimal + "</td><td>" + pedirAccion + "</td><td>" + tiempo + "</td></tr>");

		break;


	}

}


function eliminar() {

	let buscarCliente = prompt("Introduzca el animal del cliente")
	document.getElementById("escribir").innerHTML = "";

	for (let i = 0; i < registros.length; i++) {
		const borrar = registros.filter(p => registros[i].animal == buscarCliente)
		{
			return escritura
		}




	}
}





