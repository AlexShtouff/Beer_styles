document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded сработал (версия для компьютера)');

    const categoryHeaders = document.querySelectorAll('.expandable-header');
    console.log('Найдено заголовков категорий:', categoryHeaders.length);

    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            console.log('Клик по заголовку:', this.textContent);
            const stylesList = this.nextElementSibling;
            console.log('Следующий элемент после заголовка:', stylesList);
            if (stylesList && stylesList.classList.contains('styles')) {
                stylesList.style.display = stylesList.style.display === 'none' ? 'block' : 'none';
                console.log('Состояние списка стилей:', stylesList.style.display);
            }
        });
    });

    const expandableItems = document.querySelectorAll('.expandable-item');
    console.log('Найдено раскрываемых элементов:', expandableItems.length);

    expandableItems.forEach(item => {
        item.addEventListener('click', function(event) {
            console.log('Клик по раскрываемому элементу:', this.textContent);
            const subStyles = this.querySelector('.sub-styles');
            console.log('Найденный подстиль:', subStyles);
            if (subStyles) {
                subStyles.style.display = subStyles.style.display === 'none' ? 'block' : 'none';
                console.log('Состояние подстилей:', subStyles.style.display);
                event.stopPropagation();
            }
        });
    });

    // Изначально раскрываем списки первого уровня (Эли и Лагеры)
    document.querySelectorAll('.category > .styles').forEach(ul => {
        ul.style.display = 'block';
        console.log('Изначально раскрыт список:', ul);
    });
});
