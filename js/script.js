// init Isotope
var $container = $('#container').isotope({
    itemSelector: '.grid-item'
});

// filter with selects and checkboxes
var $checkboxes = $('.portfolio--nav input');

$checkboxes.change( function() {
    // map input values to an array
    var inclusives = [];

    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
        // if checkbox, use value if checked
        if ( elem.checked ) {
        inclusives.push( elem.value );
        }
    });

    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join(', ') : '*';

    $container.isotope({ filter: filterValue })
});
