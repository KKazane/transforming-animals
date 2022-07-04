const foods = Array.from(document.getElementsByTagName('li'));
const meter = document.querySelector('meter');
const animal = document.querySelector('.animal');
let interval;
let count = 0;
const foodsArray = [];


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
                animal.innerHTML = `<p>ゆにこーん</p><p><img src="image/fantasy_unicorn_rainbow.png"></p>`
            } else if(koto > 1) {
                animal.innerHTML = `<p>ことぶき</p><p><img src="image/youkai_kotobuki.png"></p>`
            } else if(bi > 1) {
                animal.innerHTML = `<p>ばいこーん</p><p><img src="image/fantasy_bicorn_unicorn.png"></p>`
            } else {
                animal.innerHTML = `<p>すれいぷにる</p><p><img src="image/fantasy_sleipnir.png"></p>`
            }
            
        }
    })
});

