function dados() {
     let ds = [
                {id:1, login:"Bulma",password:"123", Email:"bulma@gmail.com"},
                {id:2, login:"Vegeta", password:"1234", Email:"vegeta@gmail.com"},
                {id:3, login:"Kuririn", password:"12345", Email:"kuririn@gmail.com"}
              ]
        return ds
}

function login() {
    const ds = dados()

    let lg = document.querySelector("#email").value
    let ps = document.querySelector("#senha").value

    for (i = 0; i < ds.length; i++) {
        if (lg == ds[i].login && ps == ds[i].password) {
            sessionStorage.setItem("usuarioLogado", JSON.stringify(ds[i]));
            alert("Bem vindo(a): " + ds[i].login)
            window.location.href = "index.html"; 
        } 
    }
}










