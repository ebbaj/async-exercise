// Promise based
const allUrl = "https://restcountries.eu/rest/v2/all";
const regionUrl = "https://restcountries.eu/rest/v2/region/";
const regionDropdown = document.getElementById("regions");
const table = document.getElementById("countries");

const getRegions = (callback) => {
    fetch(allUrl)
        .then((response) => response.json())
        .then((json) => {
            const allRegions = json.map (
                (info) => "<option>" + info.region + "</option>"
            );
            regionDropdown.innerHTML = [... new Set(allRegions)];
        });
};

const getCountries = (event) => {
    fetch(regionUrl + event.target.value)
        .then((response) => response.json())
        .then((json) => {
            const allCountries = json
                .sort((a, b) => b.population - a.population)
                .map(
                    (info) =>
                        "<tr><td>" + 
                        info.name + 
                        "</td><td>" + 
                        info.population +
                        "</td></tr>"
                );
            table.insertAdjacentHTML("afterbegin", allCountries);
        })
        .catch((error) => console.log(error));
}

getRegions();
regionDropdown.addEventListener("change", getCountries);