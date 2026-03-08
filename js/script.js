let countries = document.getElementById("country");

async function getCountry() {
    let data = await fetch("../country-flag.json");
    let response = await data.json();

    response.forEach((country) => {
        let flag = country.flag;
        let myCountry = country.country;

        let option = document.createElement("option");
        option.classList.add("option-item");
        option.innerHTML = `
                <span>${myCountry}</span>
        `;
        countries.appendChild(option);
    });
}

getCountry();
