const countries = document.getElementById("country");
const list_btn = document.getElementById("list-links");
const nav_link = document.getElementById("link");

console.log(nav_link);

list_btn.addEventListener("click", function () {
    nav_link.classList.toggle("showHide");
});

async function getCountry() {
    try {
        let data = await fetch("../country-flag.json");
        let response = await data.json();

        response.forEach((country) => {
            let flag = country.flag;
            let myCountry = country.country;

            let option = document.createElement("option");
            option.classList.add("option-item");
            option.textContent = `
                ${myCountry}
        `;
            countries.appendChild(option);
        });
    } catch (error) {
        console.log("Error al cargar los países:", error);
    }
}

getCountry();
