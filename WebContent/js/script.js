/**
 * 
 */

document.getElementById("execute").addEventListener("click", getDataDogs);

function getDataDogs()
{
	//Create object
	let xhr = new XMLHttpRequest();
	

	xhr.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
			{
				viewData(this.responseText);
			}
	}
	
	//Prepare the request
	xhr.open("get", "perros.json", true);
	
	//Send the request
	xhr.send();
}

function viewData(responseData)
{
	let table = document.getElementById("tableData");
	let dogsList = JSON.parse(responseData);
	
	for (let i = 0; i < dogsList.length; i++)
	{
		let dog = dogsList[i];
		createRow(table, dog);
	}
}

function createRow(t, d)
{
	let tbody = t.tBodies[0];
	let row = document.createElement("tr");
	
	let tdName = document.createElement("td");
	let tdAge = document.createElement("td");
	let tdWeight = document.createElement("td");
	let tdLive = document.createElement("td");
	let tdPropierti = document.createElement("td");
	let tdCare = document.createElement("td");
	let tdUbication = document.createElement("td");
	let tdHealth = document.createElement("td");
	
	tdName.innerText = d.nombre;
	tdAge.innerText = d.edad;
	tdWeight.innerText = d.peso;
	tdLive.innerText = d.vivo;
	tdPropierti.innerText = d.propietario.nombre;
	tdCare.innerText = d.cuidados[0];
	tdUbication.innerText = d.ubicacion;
	tdHealth.innerText = d.Salud;
	
	row.appendChild(tdName);
	row.appendChild(tdAge);
	row.appendChild(tdWeight);
	row.appendChild(tdLive);
	row.appendChild(tdPropierti);
	row.appendChild(tdCare);
	row.appendChild(tdUbication);
	row.appendChild(tdHealth);
	
	tbody.appendChild(row);
}