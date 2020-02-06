$(document).ready(function() {
    let checkHideText = true;

    $('.tooltip').tooltipster({
        theme: 'tooltipster-borderless',
        contentCloning: true,
        plugins: ['follower'],
        anchor: 'bottom-left',
        offset: [0, 0]
    });

    $('.hide-chat').click( function() {
        if (checkHideText) {
            $('.chat').css('display','none');
            $('.my-chat-field').css('display', 'none');
            $('.all-chat').css('display', 'none');
            $('.my-chat').css('display', 'none')
            $('.hide-text').css('top', '3px');
            checkHideText = false;
        }
        else {
            $('.chat').css('display','block');
            $('.my-chat-field').css('display', 'none');
            $('.all-chat').css('display', 'block');
            $('.my-chat').css('display', 'block');
            $('.hide-text').css('top', '15px');
            checkHideText = true;
        }
    })

    $('.all-chat').click( function() {
        $('.my-chat-field').hide();
        $('.chat').show();
        $('.all-chat').css("background-color", "#D6D5D5");
        $('.my-chat').css("background-color", "#83C731");
    });

    $('.my-chat').click(function () {
        $('.chat').hide();
        $('.my-chat-field').show();
        $('.all-chat').css("background-color", "#83C731");
        $('.my-chat').css("background-color", "#D6D5D5");
    })
    


});

