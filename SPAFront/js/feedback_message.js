  
  $().ready(function () {
  $('#feedbackInput').on('click', function (e) {
		e.preventDefault();
        var $name = $('#last_named').val();
        var $email=$('#emails').val();
        var $textarea1=$('#textarea1').val();
        if(userInfo==null){
            alert("您没有登陆请登录");
        }else{
            socket.emit('feedbackMessage',{
                name:$name,
                email:$email,
                textarea1:$textarea1,
               // Iuserinfo:userInfo
            });
        }
        
    });
  });