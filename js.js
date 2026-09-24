let secretNumber;
let attempts = 0;

document.getElementById('save').addEventListener('click', function () {
    let min = +document.getElementById('min-val').value;
    let max = +document.getElementById('max-val').value;

    const minStr = document.getElementById('min-val').value.trim();
    const maxStr = document.getElementById('max-val').value.trim();
    if (minStr === '' || maxStr === '') return;
    if (min !== min || max !== max) return; 

    if (min > max) {
        [min, max] = [max, min];
    }

    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Загадано:', secretNumber, 'тип:', typeof secretNumber);

    attempts = 0;
    document.getElementById('count').textContent = attempts;
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
    document.getElementById('game-panel').style.display = 'block';
});

document.getElementById('cancel').addEventListener('click', function () {
    document.getElementById('min-val').value = '';
    document.getElementById('max-val').value = '';
    document.getElementById('gu').value = '';
    attempts = 0;
    document.getElementById('count').textContent = attempts;
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
});

document.getElementById('go').addEventListener('click', function () {
    const guStr = document.getElementById('gu').value.trim();
    if (guStr === '') return;

    const guu = +guStr;
    if (guu !== guu) return;

    const resultE = document.getElementById('result');

    attempts++;
    document.getElementById('count').textContent = attempts;

    if (guu > secretNumber) {
        resultE.textContent = 'Меньше';
        resultE.className = 'hint-less';
    } else if (guu < secretNumber) {
        resultE.textContent = 'Больше';
        resultE.className = 'hint-more';
    } else {
        resultE.textContent = 'Попал! С попытки: ' + attempts;
        resultE.className = 'win';
    }

    document.getElementById('gu').value = '';
});