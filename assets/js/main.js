var httpRequest = new XMLHttpRequest();
var result=[];

function getFood(category){
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${category}`);
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4){
            result=JSON.parse(httpRequest.response).recipes;
            console.log(typeof(result));
            PrintData();
        }
    }
}

function PrintData(){
    var data ="";
    for(var i=0; i<result.length; i++){
        data += `
            <div class="col-lg-3 col-md-6 pb-5">
                <img src="${result[i].image_url}" alt="${result[i].title}$"class="w-100 h-75 pt-5 object-fit-cover">
                <p class="pt-4 text-center" >${result[i].title}</p>
                <div class="link d-flex align-items-center">
                    <a href="details.html?id=${result[i].recipe_id}" class=" text-decoration-none d-inline-block text-center w-100" > READ MORE </a>
                </div>
            </div>
        `;
    }

    document.getElementById("food").innerHTML = data;
}


var food_links = document.querySelectorAll(".nav-link");
var food_type;
for(var i=0;i<food_links.length;i++){
    food_links[i].addEventListener('click',function(e){
        food_type = e.target.innerHTML;
        getFood(food_type);
    })
}