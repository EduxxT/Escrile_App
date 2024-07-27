async function loginUser(event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const errorMsg = document.getElementById('error-msg');

    try {
        const response = await fetch(login_route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                correo,
                contrasena
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al iniciar sesión");
        }

        const result = await response.json();
        localStorage.setItem('token', result.token);
        localStorage.setItem('nivelCuenta', result.nivelCuenta);
        const nivelCuenta = parseInt(result.nivelCuenta);

        if (nivelCuenta === 1) {
            window.location.href = './Views/admin/index.html';
        } else if (nivelCuenta === 2) {
            window.location.href = './Views/teacher/index.html';
        } else if (nivelCuenta === 3) {
            window.location.href = './Views/user/index.html';
        } else {
            throw new Error("Nivel de cuenta desconocido");
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        errorMsg.textContent = error.message;
        errorMsg.classList.remove('hidden');
    }
}