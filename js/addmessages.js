
/*$('#login-btn').click( function()*/
var username;

/*Аутентификация пользователя*/

function getUsername (){
	var username = $('#userinput').val();

/*Если пользователь ничего не ввел - алерт*/
	if($("#userinput").val() == '') {
   	 $('#alerttt').html("Please, enter your message");
   	}
	
/*Если пользователь зашел первый раз, либо мы почистили локал сторейдж -
записываем юзернейм в локал сторейдж и делаем редирект на страницу чата*/	
	else if (localStorage.getItem('username') == null) {
		localStorage.setItem('username', username);
		window.location.href = "chat1.html";
	}
/*Если пользователь зашел повторно и ввел свой юзейрнейм, который метчится с юзернеймом из локал сторейдж -
редирект на страницу с чатом и его сообщениями*/
	else if (username == localStorage.getItem('username')) {
		window.location.href = "chat1.html";
	}
/*Если пользователь зашел повторно и ввел свой юзейрнейм - алерт*/
	else {
		$('#alerttt').html("Please, enter a valid username!");
	}
 }

/*Берем имя юзера из локал сторейдж*/
var nameuser = localStorage.getItem('username');

/*Отправка сообщений*/
$('#send').click( function() {
   var message = $('#entermessage').val();

   if($("#entermessage").val() == '') {
   	 $('#alert').html("Please, enter your message");
   	}

   	else { $('#chat').append("<li class='self'><div class='message'><p class='usermessage'>" + message + "</p><p class='username'>" + nameuser + "</p></div></li>");
   	  $('#entermessage').val("");

   	var messages = $('#chat').html();

   	localStorage.setItem('myMessages', messages);
   }
 });

	/* 
   	Как вариант
	username = 'Leha'
   	mystring = 'MessagesOf' + username
   	localStorage.setItem(mystring, messages);
   	*/
   	
if(localStorage.getItem('myMessages')) {
	$('#chat').html(localStorage.getItem('myMessages'));
}

/*Чтобы чистить локал сторейдж*/
/*window.localStorage.clear();*/

