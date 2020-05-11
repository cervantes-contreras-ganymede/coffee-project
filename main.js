"use strict";

(function(){

    function renderCoffee(coffee) {
        let html = '<div class="d-flex justify-content-between">';
        html += '<h3>' + coffee.name + '</h3>';
        html += '<h3>' + coffee.roast + '</h3>';
        html += '</div>';

        return html;
    }

    function renderCoffees(coffees) {
        let html = '';
        for(let i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        let filteredCoffees = [];
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees.reverse());
    }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    let coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];


    let tbody = document.querySelector('#coffees');
    let roastSelection = document.querySelector('#roast-selection');
    let coffeeNameSearch = document.querySelector('#coffee-name-search');
    let submitButton = document.querySelector('#submit');



    let addRoast = document.querySelector('#add-roast-selection');
    let addName = document.querySelector('#add-coffee-name');


    tbody.innerHTML = renderCoffees(coffees.reverse());

    submitButton.addEventListener('click', addNewCoffee);

    roastSelection.addEventListener('change',updateCoffees);
    coffeeNameSearch.addEventListener('keyup', updateCoffeesByName);





//function to search coffees by typing in name in search bar
    function updateCoffeesByName(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        let inputCoffee = coffeeNameSearch.value;
        let filteredCoffees = [];
        coffees.forEach(function(coffee) {
            if (coffee.name.toLowerCase().includes(inputCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees.reverse());
    }
//JS to add coffee by name on
    function addNewCoffee(e){
        e.preventDefault();
        let newCoffee = {};
        newCoffee.id = coffees.length + 1;
        newCoffee.roast = addRoast.value;
        newCoffee.name = addName.value;
        coffees.push(newCoffee);
        tbody.innerHTML = renderCoffees(coffees.reverse());
    }


})();

