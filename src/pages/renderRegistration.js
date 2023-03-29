
const form = document.querySelector('form');
const regBtn = form.querySelector('button[type="submit"]');


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')
    const username = formData.get('username');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:8000/auth/signUp', {
            method: 'POST',
            body: JSON.stringify({ name, username, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.href = 'index.html';
        } else {
            const error = await response.json();
            console.error(error);
            alert('Повторите ввод');
        }
    } catch (error) {
        console.error(error);
        alert('Произошла ошибка при регистрации');
    }
});