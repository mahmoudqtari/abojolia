var httpRequest = new XMLHttpRequest();
var result;
var id = "";
var data = "";
var data_listed = "";
var ingredient = [];

var queryString = window.location.search;

for (var i = 4; i < queryString.length; i++) {
    id = id + "" + queryString[i];
}

console.log(id);

httpRequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${id}`);
httpRequest.send();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
        result = JSON.parse(httpRequest.response).recipe;
        ingredient = result.ingredients;
        PrintImage();
        listed(ingredient);
        document.getElementById("title").innerHTML = result.title;
    }
}

function PrintImage() {
    data = `
            <img src="${result.image_url}" alt="${result.title}$" class="img-fluid h-100 object-fit-cover">
        `;
    document.getElementById("imag").innerHTML = data;
}

function listed(ingredient) {
    data_listed = "";
    for (var i = 0; i < ingredient.length; i++) {
        data_listed += `
            <li class="listed-items">
            ${ingredient[i]}
            </li>
        `;
    }
    document.getElementById("data-listed").innerHTML = data_listed;
}