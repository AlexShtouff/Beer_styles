document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expandable-item').forEach(item => {
        const subList = item.querySelector(':scope > .sub-styles');
        if (subList) {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                subList.classList.toggle('open');
                item.classList.toggle('open');
            });
        }
    });
});
