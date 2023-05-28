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

let login = (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let correctemail = false;

    for(let i=0; i<userarray.length; i++){
        if(email === userarray[i].email){
            correctemail= true;
            if(password === userarray[i].password){
                console.log(userarray[i])
                localStorage.setItem('userlogged', JSON.stringify(userarray[i]));
                window.location.href = 'main.html'
            }
            else{
                document.getElementById('passerror').innerHTML = `Incorrect password!`
                setTimeout(()=>{
                    document.getElementById('passerror').innerHTML = ``
                },3000)
            }}}
    if(!correctemail){
        document.getElementById('emailerror').innerHTML = `Incorrect email!`
    }
}