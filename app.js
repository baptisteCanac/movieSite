console.log('Hello World!');
function submitFilter(){
	let ironMan1Container = $("#ironMan1");
	let peakyBlindersContainer = $("#peakyBlinders");
	let prisonBreakContainer = $("#prisonBreak");
	ironMan1Container.hide();
	peakyBlindersContainer.hide();
	prisonBreakContainer.hide();
	let filmInput = document.getElementById("films");
	let serieInput = document.getElementById("series");
	if ($("#films").prop('checked')){
		console.log("films was checked");
		filmInput.checked = false;
		ironMan1Container.show();
	}
	if ($("#series").prop("checked")){
		console.log("series was checked");
		serieInput.checked = false;
		peakyBlindersContainer.show();
		prisonBreakContainer.show();
	}
}