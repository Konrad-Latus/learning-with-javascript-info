let login = prompt('siabadaba')

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login':
    '';

alert(message);