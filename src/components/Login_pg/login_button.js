function login_button(el, login) {
    el.preventDefault();
    localStorage.setItem('user_login', login);
    // document.getElementById("login_form").submit();
    window.location.href = "/";
}

export default login_button;