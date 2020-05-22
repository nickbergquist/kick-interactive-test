(function() {

    var kitchens = {
        
        init: function() {

            var $_ = this;

            $_.initFooter();
            $_.bindEvents();
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

        initFooter: function() {

            var eleYear = document.querySelector('#year');
            var dateToday = new Date();
            var year = dateToday.getFullYear();

            eleYear.textContent = year;
        }
    }

    kitchens.init();
})()
