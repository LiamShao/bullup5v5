$().ready(function(){
    $('#friend_list_btn').on('click', function(e){
        if(userInfo == null){
            bullup.alert("请您先登录");
        }else{
            var friendCount = 0;
            for(var index in userInfo.friendList){
                friendCount++
            }
            bullup.loadTemplateIntoTarget('swig_home_friendlist.html', {
                'userInfo': userInfo,
                'friendListLength': friendCount
            }, 'user-slide-out');
            $('.collapsible').collapsible();
            $('#friend_list_real_btn').click();
        }
    });

    $('#confirm_add_friend_btn').on('click', function(e){
        var inputUserNickName = $('#first_name2').val();
        console.log(inputUserNickName);
        if(inputUserNickName == ""){
            bullup.alert('请输入对方昵称');
        }else{
            for(var friendName in userInfo.friendList){
                if(friendName == inputUserNickName){
                    bullup.alert(friendName + '已经是您的好友');
                    return;
                }
            }
            $('#coollap').modal('close');
            bullup.alert('已发送好友请求');
            socket.emit('addFriendRequest', {
                'userInfo': userInfo,
                'invitedUserNickname': inputUserNickName
            })            
        }
    });
});