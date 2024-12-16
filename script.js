    document.querySelector('button').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Thank you, ${name}! Your email (${email}) has been received.`);
        } else {
            alert('Please fill in both Name and Email fields.');
        }
    });