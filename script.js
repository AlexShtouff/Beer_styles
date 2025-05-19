document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded сработал');

    function toggleOpen(element) {
        element.classList.toggle('open');
        console.log('Состояние элемента (open):', element.classList.contains('open'));
    }

    // Обработка заголовков категорий
    document.querySelectorAll('.expandable-header').forEach(header => {
        header.addEventListener('pointerdown', () => {
            const stylesList = header.nextElementSibling;
            if (stylesList && stylesList.classList.contains('styles')) {
                toggleOpen(stylesList);
            }
        });
    });

    // Обработка вложенных стилей
    document.querySelectorAll('.expandable-item').forEach(item => {
        item.addEventListener('pointerdown', (event) => {
            const subStyles = item.querySelector('.sub-styles');
            if (subStyles) {
                toggleOpen(subStyles);
                event.stopPropagation();
            }
        });
    });

    // Изначально раскрываем все списки первого уровня
    document.querySelectorAll('.category > .styles').forEach(ul => {
        ul.classList.add('open');
        console.log('Изначально раскрыт список:', ul);
    });
});
