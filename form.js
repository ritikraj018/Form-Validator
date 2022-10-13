function validate()
{
	var username = document.getElementById('username').value
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value
	var confirm_password = document.getElementById('confirm_password').value

	checkusername(username)
	checkemail(email)
	checkpassword(password)
	confirmpassword(password,confirm_password)

}

function checkusername(username)
{
	if(username.length > 7)
	{
		document.getElementById('username').classList.add('success')
		document.getElementById('username').classList.replace('error','success')
		document.getElementById('username_error').innerHTML=''
	}
	else
	{
		document.getElementById('username').classList.add('error')
		document.getElementById('username_error').innerHTML='username must be of atleast 8 characters'
	}
}

function checkemail(email)
{
	if(email.length > 7 && email.includes('@gmail'))
	{
		document.getElementById('email').classList.add('success')
		document.getElementById('email').classList.replace('error','success')
		document.getElementById('email_error').innerHTML=''
	}
	else
	{
		document.getElementById('email').classList.add('error')
		document.getElementById('email_error').innerHTML='must be of atleast 8 characters and contains @gmail'
	}

}

function checkpassword(password)
{
	if(password.length >5  && password.includes('@')){
		document.getElementById('password').classList.add('success')
		document.getElementById('password').classList.replace('error','success')
		document.getElementById('password_error').innerHTML=""
	}
	else{
		document.getElementById('password').classList.add('error')
		document.getElementById('password_error').innerHTML="password must be of atleast 6 characters and includes @"
	}
}

function confirmpassword(password,confirm_password)
{
	if(password == confirm_password && password!=""){
		document.getElementById('confirm_password').classList.add('success')
		document.getElementById('confirm_password').classList.replace('error','success')
		document.getElementById('confirm_password_error').innerHTML=""
	}
	else
	{
		document.getElementById('confirm_password').classList.add('error')
		document.getElementById('confirm_password_error').innerHTML="password do not match"
	}
}