(() => {
    let userlogged;
    userlogged = localStorage.getItem('userlogged');

    if (!userlogged) {
        window.location.href = 'login.html'
        console.log(userLogged)
    }
})()

let logout = () => {
    localStorage.removeItem('userlogged');
    window.location.href = 'login.html'
}