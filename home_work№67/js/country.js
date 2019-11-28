var urlParams = new URLSearchParams(window.location.search);


function displayCountryInfo(countryByAlpha3Code) {
    console.log(countryByAlpha3Code, 'display country');
    const countryData = countryByAlpha3Code;
    document.querySelector("#flag-container img").src = countryData[0].flag;
    document.querySelector("#flag-container img").alt = `Flag of ${countryData[0].name}`;
    document.getElementById("capital").innerHTML = countryData[0].capital;
    document.getElementById("dialing-code").innerHTML = `+${countryData[0].callingCodes}`;
    document.getElementById("population").innerHTML = countryData[0].population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData[0].currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
    document.getElementById("region").innerHTML = countryData[0].region;
    document.getElementById("subregion").innerHTML = countryData[0].subregion;
}

function render(response) {
    console.log(response, 'response');
    displayCountryInfo(response)
}
function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}
function aj() {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/alpha?${urlParams}`,
        method: 'GET',
        success: render,
        error: jqueryAjaxError
    });
}

$(document).ready(function() {
    aj();
});