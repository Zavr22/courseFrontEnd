const button1 = document.getElementById('commercial_offer');
const button2 = document.getElementById('products');
const button3 = document.getElementById('deals');
const button4 = document.getElementById('settings');










button4.addEventListener('click', async =>{
    try{
        window.location.href = 'settingsScreen.html'
    } catch (error){
        console.log(error)
    }
})