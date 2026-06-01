document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const siteNav = document.getElementById('siteNav');

    if (mobileMenuButton && siteNav) {
        mobileMenuButton.addEventListener('click', function () {
            siteNav.classList.toggle('open');
        });
    }

    const filterButtons = document.querySelectorAll('.filter-button');
    const labCards = document.querySelectorAll('.lab-card');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedFilter = button.getAttribute('data-filter');

            filterButtons.forEach(function (filterButton) {
                filterButton.classList.remove('active');
            });

            button.classList.add('active');

            labCards.forEach(function (card) {
                const categories = card.getAttribute('data-category');

                if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
