const foods = Array.from(document.getElementsByTagName('li'));
const meter = document.querySelector('meter');
const animal = document.querySelector('.animal');
const again = document.querySelector('.again');
const button = document.querySelector('.again');
let interval;
let count = 0;
let foodsArray = [];


foods.forEach(food => {
    food.addEventListener('click', () => {
        // 餌やりのアニメーションCSS指定
        if(interval) {
            clearInterval(interval);
        }
        
        food.classList.add('addFood');
        interval = setInterval(() => {
            food.classList.remove('addFood');
        }, 1000);

        //餌やりメーターの変化
        count++;
        meter.value = count;

        //餌なにをやったか記録
        if(foodsArray.length < 3) {
            foodsArray.push(food.classList[0]);
            console.log(foodsArray);
        }
        
        if(foodsArray.length === 3) {
            // 餌三つ以上になったら赤ちゃん画像を変える
            count = 0;
            meter.value = count;
            meter.classList.add('hide');
            let uni = 0;
            let koto = 0;
            let bi = 0;
            for(let food of foodsArray) {
                if(food === "uniFood") {
                    uni++;
                } else if(food === "kotoFood") {
                    koto++;
                } else {
                    bi++;
                }
            }

            if(uni > 1) {
                animal.innerHTML = `<h2>✨ゆにこーん✨</h2><p><img src="image/fantasy_unicorn_rainbow.png"></p>`
                again.innerHTML = `<button type=button>もういっかい！</button>`
            } else if(koto > 1) {
                animal.innerHTML = `<h2>✨ことぶき✨</h2><p><img src="image/youkai_kotobuki.png"></p>`
                again.innerHTML = `<button type=button>もういっかい！</button>`
            } else if(bi > 1) {
                animal.innerHTML = `<h2>✨ばいこーん✨</h2><p><img src="image/fantasy_bicorn_unicorn.png"></p>`
                again.innerHTML = `<button type=button>もういっかい！</button>`
            } else {
                animal.innerHTML = `<h2>✨すれいぷにる✨</h2><p><img src="image/fantasy_sleipnir.png"></p>`
                again.innerHTML = `<button type=button>もういっかい！</button>`
            }
            
        }
    })
});

button.addEventListener('click', () => {
    foodsArray = [];
    meter.classList.remove('hide');
    animal.innerHTML = `<h2>あかちゃん</h2>
    <p><img src="image/animal_mouse_baby_science.png"></p>`;
    again.innerHTML = ``;
});
