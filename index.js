document.getElementById('ageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const messageElement = document.getElementById('message');

    let message = '';

    switch (true) {
        case age >= 0 && age < 10:
            message = `${name}, Take a glass of milk and go home.`;
            break;
        case age >= 10 && age <= 18:
            message = `${name}, you can enjoy your party but don't drink alcohol.`;
            break;
        case age > 18 && age <= 50:
            message = `${name}, Do what you want.`;
            break;
        case age > 50:
            message = `${name}, Did you take your medicine/food to care for yourself? you must Return home early.`;
            break;
        default:
            message = 'Invalid age';
    }

    messageElement.textContent = message;
});
