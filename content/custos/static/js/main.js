$(document)
    .ready(function () {

        // fix menu when passed
        $('.top-header')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;
        $('.ui.dropdown')
            .dropdown()
        ;

    })
;
