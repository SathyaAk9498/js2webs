function validate(){

    let uname = document.getElementById("uname").value;
    let fname = document.getElementById("fname").value;
    let gender = document.cform.gender.value;
    let DOB = document.getElementById("DOB").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let tamil = document.getElementById("tamil");
    let english = document.getElementById("english");
    let hindi = document.getElementById("hindi");
    let malayalam = document.getElementById("malayalam");
    
    
        document.write("NAME : ");
        document.write(uname.fontcolor("blue"));
        document.write("<br>");
        document.write("FATHER NAME : ");
        document.write(fname.fontcolor("blue"));
        document.write("<br>");
        document.write("GENDER : ");
        document.write(gender.fontcolor("blue"));
        document.write("<br>");
        document.write("DATE OF BIRTH : ");
        document.write(DOB.fontcolor("blue"));
        document.write("<br>");
       
        if(email == "" && password == ""){
            alert("email and password cannot be blank ")
        }
    else{
        alert("registered successfully")
    }
    
        document.write("EMAIL : ");
        document.write(email.fontcolor("blue"));
        document.write("<br>");
    
        document.write("PASSWORD : ");
        document.write(password.fontcolor("blue"));
        document.write("<br>");
    
       
        document.write("MOBILE NUMBER : ");
        document.write(mobile.fontcolor("blue"));
        document.write("<br>");
        document.write("LANGUAGES KNOWN : ");
        if (tamil.checked == true) {
            document.write(tamil.value.fontcolor("blue"));
            document.write("<br>");
        }
        if (english.checked == true) {
           
            document.write(english.value.fontcolor("blue"));
            document.write("<br>");
        }
        if (hindi.checked == true) {
           
            document.write(hindi.value.fontcolor("blue"));
            document.write("<br>");
        }
    
        if (malayalam.checked == true) {
           
            document.write(malayalam.value.fontcolor("blue"));
            document.write("<br>");
        }
    
    
    }



// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
 }

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});
function one(){
    var a=Number (document.getElementById('fix').value)
    var b=Number (document.getElementById('opr').value)
    document.getElementById('result').innerHTML=a+b
}