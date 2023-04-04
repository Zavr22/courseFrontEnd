

const form = document.querySelector('form');
const submBtn = form.querySelector('button[type="submit"]');
const userId = localStorage.getItem('userId');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const roi = formData.get('roi');

    try {
        const response = await fetch('http://localhost:8000/settings/profit', {
            method: 'POST',
            body: JSON.stringify({ roi }),
            headers: {
                'Authorization': `Bearer ${userId}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            event.preventDefault()
        } else {
            const error = await response.json();
            console.error(error);
            alert('Вы не можете установить настройки');
        }
    } catch (error) {
        console.error(error);
        alert('Произошла ошибка при установлении настроек');
    }
});
