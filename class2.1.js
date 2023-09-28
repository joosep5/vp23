const firstName = "Joosep";
const lastName = "Madar";

console.log("Programmi autor on " + firstName + " " + lastName);

function dateETformatted(){

	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	const dayNamesET =  ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];

	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let dayNow = (timeNow.getDay() - 1);
	//let dateET = dateNow + "." + (monthNow + 1) + "." + yearNow;
	let dateET = dayNamesET[dayNow] + ", " + dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
	return dateET;
}

let dateETNow = dateETformatted();

console.log("Täna on " + dateETNow);
console.log("Täna on tõesti " + dateETformatted());