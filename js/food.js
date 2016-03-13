        window.onload = function() {
            var ChangePhoto = function() {
                $('.lt').css('height',$('.lt').width());
                $('.lb').css('height',$('.lt').height());
                $('.show-right').css('height',$('.show-left').height());
                console.log( $('.lt').height())
                $('.rt').css('height',$('.show-right').height()*0.3968);
                $('.rtl').css('height',$('.show-right').height()-$('.rt').height());
                $('.rtr').css('height',$('.show-right').height()-$('.rt').height());
            }
            ChangePhoto();
            $(window).on('resize',function() {
                ChangePhoto();
            });
        }