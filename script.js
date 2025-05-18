document.addEventListener('DOMContentLoaded', function() {
    const categoryHeaders = document.querySelectorAll('.expandable-header');
    const expandableItems = document.querySelectorAll('.expandable-item');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const stylesList = this.nextElementSibling;
            if (stylesList && stylesList.classList.contains('styles')) {
                stylesList.style.display = stylesList.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    expandableItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const subStyles = this.querySelector('.sub-styles');
            if (subStyles) {
                subStyles.style.display = subStyles.style.display === 'none' ? 'block' : 'none';
                event.stopPropagation(); // Предотвращаем всплытие события до родительского элемента списка
            }
        });
    });

    // Изначально раскрываем списки первого уровня (Эли и Лагеры)
    document.querySelectorAll('.category > .styles').forEach(ul => {
        ul.style.display = 'block';
    });
});
