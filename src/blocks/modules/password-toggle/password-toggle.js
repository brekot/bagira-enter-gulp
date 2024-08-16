document.addEventListener('click', (e) => {

    let elem = e.target.closest('.password-toggle');

    if (elem)
    {
        let input = elem.previousElementSibling;

        if (input.type === "password") input.type = "text";
        else input.type = "password";
    }
});