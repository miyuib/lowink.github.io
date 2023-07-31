// Получение элементов страницы
const clickButton = document.getElementById('clickButton');
const coinsSpan = document.getElementById('coins');
const shopList = document.getElementById('shop');

// Инициализация количества монет и улучшений
let coins = 0;
let upgrades = {
    upgrade1: 0,
    upgrade2: 0
};

// Функция обработки клика по кнопке
clickButton.addEventListener('click', () => {
    coins++;
    updateCoins();
});

// Функция обновления количества монет на странице
function updateCoins() {
    coinsSpan.textContent = coins;
}

// Функция для покупки улучшения
function buyUpgrade(price, increase) {
    if (coins >= price) {
        coins -= price;
        upgrades['upgrade' + increase]++;
        updateCoins();
    }
}

// Функция сохранения прогресса в локальное хранилище
function saveGame() {
    localStorage.setItem('coins', coins);
    localStorage.setItem('upgrades', JSON.stringify(upgrades));
}

// Функция загрузки прогресса из локального хранилища
function loadGame() {
    const savedCoins = localStorage.getItem('coins');
    const savedUpgrades = localStorage.getItem('upgrades');

    if (savedCoins) {
        coins = parseInt(savedCoins);
        updateCoins();
    }

    if (savedUpgrades) {
        upgrades = JSON.parse(savedUpgrades);
    }
}

// Загрузка прогресса при открытии страницы
loadGame();
