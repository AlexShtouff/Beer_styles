document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expandable-item').forEach(item => {
        const subList = item.querySelector(':scope > .sub-styles');
        const arrow = item.querySelector('.arrow');

        if (subList && arrow) {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                subList.classList.toggle('open');
                arrow.textContent = subList.classList.contains('open') ? '↓' : '→';
            });
        }
    });
});
