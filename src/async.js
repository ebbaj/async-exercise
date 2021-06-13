// Your task


/**
  1. Fetch all regions in the world (no duplicates)
  2. Create a drop down with all regions.
  3. When selecting a region in the drop down, get all countries in that region.
  4. You are not allowed to use data from a previous api call, you must make a new api call.
  5. Sort the countries by population (most popoulos at the top)
  6. Display them in a html-table, no css.
  7. You have to do this twice, one with promises, one with async

  Hints!
  Fetch is returning a promise!
  response.json() is returning a promise!
  You can use functional programming like map and sort
*/

// Async
const allUrl = "https://restcountries.eu/rest/v2/all";
const regionUrl = "https://restcountries.eu/rest/v2/region/";
const regionDropdown = document.getElementById("regions");
const table = document.getElementById("countries");

let region = "";

const getRegions = async () => {
  const response = await fetch(allUrl);
  const content = await response.json();
  const allRegions = content.map(
      (info) => "<option>" + info.region + "</option>"
  );
  noDuplicatedRegions = [...new Set(allRegions)];
  regionDropdown.innerHTML = noDuplicatedRegions;
};

getRegions();

const getCountries = async (event) => {
    try {
        const region = event.target.value;
        const response = await fetch(regionUrl + region);
        const content = await response.json();
        const countries = content
            .sort((a, b) => b.population - a.population)
            .map((country) => {
                //return "<tr><td>" + country.name + "</td></tr>
                return "<tr><td>" + country.name + "</td><td>" + country.population + "</td></tr>"
            });
        table.insertAdjacentHTML("afterbegin", countries);
    } catch(error) {
        console.log(error);
    }
};

regionDropdown.addEventListener("change", getCountries);
