"use strict";

(function(){




//html div class d-flex j-c-b to have listed coffees on the left and roasts on the right
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
    //added for updateCoffeesByName function targeting #coffee-name-search in the html
    let coffeeNameSearch = document.querySelector('#coffee-name-search');
    let submitButton = document.querySelector('#submit');



    //added for addNewCoffee function targeting #add-roast-selection and add-coffee-name in html
    let addRoast = document.querySelector('#add-roast-selection');
    let addName = document.querySelector('#add-coffee-name');

    // updated rendered coffees to show in reverse order
    tbody.innerHTML = renderCoffees(coffees.reverse());

    // added EventListener addNewCoffee with its function to show added coffee
    submitButton.addEventListener('click', addNewCoffee);

    //AddEventListener updated to change when drop down selection is changed instead of click
    roastSelection.addEventListener('change',updateCoffees);
    // AddEventListen on keyup to change with key entries match coffees by name
    coffeeNameSearch.addEventListener('keyup', updateCoffeesByName);


    //e.preventDefault() method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be

    //copied the update coffees function that filters through the roasts
    //update coffees by name function filters the coffees by name with the quaryselector
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


    // addNewCoffee function to add a new coffee name (also copied from update coffees)
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

