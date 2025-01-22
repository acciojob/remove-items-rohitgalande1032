let dropdown = document.getElementById("colorSelect");

function renderDropdown() {
	let selectedIndex = dropdown.selectedIndex;
	dropdown.remove(selectedIndex)
}

