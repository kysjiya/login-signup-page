let userarray = [];
(()=>{
    let userinfo;
    userinfo = localStorage.getItem('userdata');
    if(userinfo){
        userarray = JSON.parse(userinfo)
    }
    let userlogged;
    userlogged = localStorage.getItem('userlogged');

    if (userlogged) {
        window.location.href = 'main.html'
        console.log(userlogged)
    }
})()
let signin = (e) => {
    e.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confpassword = document.getElementById('confpassword').value;
    let city = document.getElementById('city').value;
    let gender = document.getElementById('gender').value;   
    console.log(userarray);

    for(let i=0; i<userarray.length; i++){
        if(email === userarray[i].email){
            document.getElementById('emailerror').innerHTML = `Email already exist.`
            setTimeout(()=>{
                document.getElementById('emailerror').innerHTML = ``
            }, 3000)          
            return;
        }
    }
    if(password !== confpassword){
        document.getElementById('passerror').innerHTML = `Kindly enter same password.`
        setTimeout(()=>{
            document.getElementById('passerror').innerHTML = ``
        }, 3000)
        return;
    }
    let userobj = {
        firstname,
        lastname,
        email,
        password,
        confpassword,
        city,
        gender
    }
    console.log(userobj)
    userarray.push(userobj)
    let stringified = JSON.stringify(userarray)
    console.log(stringified)
    localStorage.setItem('userdata', stringified);
    e.target.reset();
}
