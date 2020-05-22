(function() {

    var kitchens = {
        
        init: function() {

            var $_ = this;
            var eleBody = document.querySelector('body');

            $_.updateDOM();
            $_.bindEvents();

            // viewport handling - mobile nav
            if(window.innerWidth >= 480) {

                eleBody.classList.add('view-large');
                $_.siteNavBehaviour.navMaximised();
            }
            else {

                eleBody.classList.add('view-small');
                $_.siteNavBehaviour.navMinimised();
            }

            window.onresize = function() {

                if(window.innerWidth >= 480) {

                    eleBody.classList.remove('view-small');
                    eleBody.classList.add('view-large');
                    $_.siteNavBehaviour.navMaximised();
                }
                else {

                    eleBody.classList.remove('view-large');
                    eleBody.classList.add('view-small');
                    $_.siteNavBehaviour.navMinimised();
                }
            }
        },

        bindEvents: function() {

            var eleAnchorsUndefined = document.querySelectorAll('a[href="#"]');

            eleAnchorsUndefined.forEach(function(ele) {

                ele.addEventListener('click', function(e) {

                    e.preventDefault();
                    alert('Anchor destination not set.');
                });
            });
        },

        updateDOM: function() {

            var eleYear = document.querySelector('#year');
            var dateToday = new Date();
            var year = dateToday.getFullYear();

            eleYear.textContent = year;
        },

        siteNavBehaviour: {

            navMinimised: function() {

                var btnExistingMenuControl = document.querySelector('header .nav-button-show');

                if(!btnExistingMenuControl) {

                    var headerNav = document.querySelector('#siteNav');
                    var btnNav = '<button type="button" class="nav-button-show" aria-expanded="false" aria-controls="siteNav"><span>Show/Hide</span></button>';
            
                    // ToDo: 
                    // Add the button to the DOM.
                    // Add click events
                    // Add keyboard navigation
                }
            },

            navMaximised: function() {

                // ToDo:
                // Reset
            }
        }
    }

    kitchens.init();
})()
