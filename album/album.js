let getWrapper = document.getElementById("wrapper");


for (i = 0; i < people.length; i++) {
    getWrapper.innerHTML += `<div class="container"><img src="${people[i].img}"><div><p>${people[i].name}, ${people[i].age}</p></div></div>`;
    // console.log(cars[i].brand, cars[i].model)

}


