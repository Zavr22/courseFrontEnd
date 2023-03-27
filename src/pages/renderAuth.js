

const form = document.querySelector('form');
const loginBtn = form.querySelector('button[type="submit"]');


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:8000/auth/signIn', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.href = 'mainScreen.html';
        } else {
            const error = await response.json();
            console.error(error);
            alert('Неверные логин или пароль');
        }
    } catch (error) {
        console.error(error);
        alert('Произошла ошибка при авторизации');
    }
});

