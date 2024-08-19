document.addEventListener('click', (e) => {

    let elem = e.target.closest('.password-toggle');

    if (elem)
    {
        let input = elem.previousElementSibling;

        if (input.type === "password")
        {
            input.type = "text";

            elem.classList.add('password-toggle_show');
        }
        else
        {
            input.type = "password";

            elem.classList.remove('password-toggle_show');
        }
    }
});