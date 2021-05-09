
var containerEl = document.querySelector('.blocks');

var mixer = mixitup(containerEl, {
    animation: {
        effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
    },
    load: {
        filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
    }
});

// Add a class to the container to remove 'visibility: hidden;' from targets. This
// prevents any flickr of content before the page's JavaScript has loaded.

containerEl.classList.add('mixitup-ready');

// Show all targets in the container

mixer.show()
    .then(function() {
        // Remove the stagger effect for any subsequent operations

        mixer.configure({
            animation: {
                effects: 'fade scale'
            }
        });
    });



// In this example, we must bind 'change' event handlers to
// our <select> elements, then interact with the mixer via
// its .filter() and .sort() API methods.

var containerE2 = document.querySelector('.blocks');
var selectFilter = document.querySelector('.select-filter');
var selectSort = document.querySelector('.select-sort');

var mixer = mixitup(containerE2);

selectFilter.addEventListener('change', function() {
    var selector = selectFilter.value;

    mixer.filter(selector);
});

selectSort.addEventListener('change', function() {
    var order = selectSort.value;

    mixer.sort(order);
});





