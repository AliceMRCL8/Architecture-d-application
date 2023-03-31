const form = document.querySelector('form')
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const login = document.getElementById('login').value
        if (login == 'az@gmail.com')
        {alert ('connexion réussie')}
        else {
            alert ('connexion echoué')
        }
        const pw = document.getElementById('password').value
        if (pw == 'azer')
        {alert ('connexion réussie')}
        else {
            alert ('connexion echoué')
        }
    })