const foods = Array.from(document.getElementsByTagName('li'));
let interval;

console.log(foods);
foods.forEach(food => {
    food.addEventListener('click', () => {
        if(interval) {
            clearInterval(interval);
        }
        
        food.classList.add('addFood');
        interval = setInterval(() => {
            food.classList.remove('addFood');
        }, 1000);
    })
});