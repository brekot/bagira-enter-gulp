document.addEventListener('click', (e) => {

    let elem = e.target.closest('.user-type__link');

    if (elem)
    {
        document.querySelector('.user-type__link_active').classList.remove('user-type__link_active');

        document.querySelectorAll('.user-type-block').forEach((e) => e.classList.add('d-none'));

        elem.classList.add('user-type__link_active');

        document.querySelector('.user-type-block[data-type="' + elem.dataset.type + '"]').classList.remove('d-none');
    }
});