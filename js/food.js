        window.onload = function() {
            var ChangePhoto = function() {
                console.log($('#tf-sl').width());
                $('#ft-sl').height($('#ft-sl').width()*2);                
                $('#fo-sl').height($('#fo-sl').width()*2);
                $('#tf-sl').height($('#tf-sl').width()*2);
                $('#fun-sl').height($('#fun-sl').width()*2);       
                $('#st-sl').height($('#st-sl').width()/0.648);  
                $('#ft-sr').height($('#ft-sl').height());
                $('#fo-sr').height($('#fo-sl').height());
                $('#tf-sr').height($('#tf-sl').height());
                $('#fun-sr').height($('#fun-sl').height());
                $('#st-sr').height($('#st-sl').height());
                $('#st-ct').height($('#st-sl').height());








                // $('.lt').css('height',$('.show-left').width());
                // $('.lb').css('height',$('.show-left').width());
                // $('.show-right').css('height',$('.show-left').height());
                // $('.rt').css('height',$('.show-right').height()*0.3968);
                // $('.rtl').css('height',$('.show-right').height()-$('.rt').height());
                // $('.rtr').css('height',$('.show-right').height()-$('.rt').height());
            }
            ChangePhoto();
            $(window).on('resize',function() {
                ChangePhoto();
            });
        }