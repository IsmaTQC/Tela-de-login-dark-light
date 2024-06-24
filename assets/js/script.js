const modo = document.getElementById('mode_icon')

modo=addEventListener('click',()=>{
    const form = document.getElementById('login-form')
    if(modo.classList.contains('fa-moon')){//verifica o id onde contem o nome fa-moon
        modo.classList.remove('fa-moon')
        modo.classList.add('fa-sun')

        form.classList.add('dark')
        return
    }
    modo.classList.remove('fa-sun')
        modo.classList.add('fa-moon')
        form.classList.remove('dark')
})