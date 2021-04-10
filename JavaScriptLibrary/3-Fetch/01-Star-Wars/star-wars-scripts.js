let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then((response) => {
    return response.json();
})

.then(function(json){
    let people = json.results;

    for(p of people){
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
})

let starWarsPlanetList = document.querySelector('ol');

fetch('https://swapi.dev/api/planets')
.then(function(response){
    return response.json();
})

.then(function(json){
    let planets= json.results;

    for(pl of planets){
        let anotherList = document.createElement('ol');
        anotherList.innerHTML = '<p>' + pl.name + '</p>';
        starWarsPlanetList.appendChild(anotherList);
    }
})
