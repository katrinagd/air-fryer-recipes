const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.recipe');
const emptyMessage = document.querySelector('.empty');

searchInput.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase();

    let anyMatch = false;

    divs.forEach(item => {
        const recipeText = item.querySelector('p').textContent.toLowerCase();
        if (recipeText.includes(word)) {
            item.style.display = 'block';
            anyMatch = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!anyMatch && word.length > 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
});


