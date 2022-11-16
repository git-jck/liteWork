// get all dropdowns from the documents
const dropdowns = document.querySelectorAll('.dropdown');

//loop through the dropdowns elements
dropdowns.forEach(dropdown => {
    // get inner elements from each dropdown //get the dropdown button
    const select = dropdown.querySelector('select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('menu li');
    const selected = dropdown.querySelector('.selected');

    /* we are using this method in order to have multiple dropdown
    menus on the page work */

    // add an event listener to the select element
    select.addEventListener('click', () => {
        // add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        // add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        // add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    // loop through all the options elements
    options.forEach(option => {
        // add an event listener (click event) to each option element
        option.addEventListener('click', () => {
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            // add the clicked option styles to the option element
            select.classList.remove('select-clicked');
            // add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            // add the open styles to the menu element
            menu.classList.remove('menu-open');
            // remove active class from all the options elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            
            // add the active class to the clicked option element
            option.classList.add('active');
        });
    });
});