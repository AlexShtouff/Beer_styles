document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expandable-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const subList = item.querySelector(':scope > .sub-styles');
            if (subList) {
                subList.classList.toggle('open');
            }
        });
    });
});
