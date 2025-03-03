function validateFields() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const recoverButton = document.getElementById('recover-password-button');
    const loginButton = document.getElementById('login-button');
    const registrar = document.getElementById('register-button')

    console.log('Email:', email);
    
    if (!email) { 
        console.log('Campo de email vazio'); 
        recoverButton.disabled = true;
    } else if (validateEmail(email)) {
        console.log('Email válido'); 
        recoverButton.disabled = false;
    } else {
        console.log('Email inválido'); 
        recoverButton.disabled = true;
    }

    console.log('Senha:', password);

    // O botão de login só será ativado se o email for válido e a senha não estiver vazia
    if (validateEmail(email) && password) {
        console.log('Email e senha válidos, ativando botão de login'); 
        loginButton.disabled = false;
    } else {
        console.log('Email ou senha inválidos, desativando botão de login'); 
        loginButton.disabled = true;
    }

    if(validateEmail(email)&& password){
        registrar.disabled = true
    }
    else{
        registrar.disabled = false
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
