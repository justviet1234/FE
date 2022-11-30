function showError(){
var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var city = document.getElementById('city')
var address = document.getElementById('address')

if(firstname==""){
    document.getElementById('firstname1').innerHTML = 'the firstname should not be blank';
}
if(lastname==""){
    document.getElementById('lastname1').innerHTML = 'the firstname should not be blank';
}
if(email==""){
    document.getElementById('email').innerHTML = 'the firstname should not be blank';
}
if(phone==""){
    document.getElementById('phone1').innerHTML = 'the firstname should not be blank';
}
if(city==""){
    document.getElementById('city1').innerHTML = 'the firstname should not be blank';
}
if(address==""){
    document.getElementById('address1').innerHTML = 'the firstname should not be blank';
}
}

