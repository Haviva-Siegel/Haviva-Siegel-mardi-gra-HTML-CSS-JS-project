//============================================MEDIA============================================//
//==JQUERY FOR MEDIA CONTROL BUTTONS==//
//==A JQUERY FUNCTION THAT MAKES SURE THE CODE IS CORRECT==//
$(document).ready(function () {
    //==ADDING AN EVENT TO THE BUTTONS IN THE MEDIA PAGE SO THE CONTENT IN THE PAGE WILL CHANG ON CLICK==//
    $('.media-control-button').on('click', function () {
        let $this = $(this);
        //==ADDING AND REMOVING THE ACTIVE CLASS TO THE MEDIA CONTROLE BUTTON==//
        $this.addClass('active').siblings().removeClass('active');
        //==GETTING THE VALUE OF THE DATA FILTER==//
        let filter = $this.attr('data-filter');
        //==CONDITIONING THE VALUE OF THE DETE FILTER SO THE ELEMENTS SHOWING WHEN YOU CLICK ALL WILL BE ALL THE ELEMENTS
        //==BUT IF YOU CLICK VIDEO OR IMAGE ONLY THE ELEMENTS WHITH THE SAME CLASS WILL APEAR, AND THE OTHERS WILL DISSAPEAR==//
        if (filter == 'all') {
            $('.gallery-img-container').show();
        } else {
            $('.gallery-img-container').not('.' + filter).hide();
            $('.gallery-img-container').filter('.' + filter).show();
        }
    });
});