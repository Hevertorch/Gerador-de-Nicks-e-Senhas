let sliderElement = document.getElementById("slider");
let buttonElement = document.getElementById("btnSenha");
let buttonnomeElement = document.getElementById("btnnome");
let senhaElement = document.getElementById("senha");
let nomeElement = document.getElementById("nome");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
let silabas = [
    "ba", "be", "bi", "bo", "bu",
    "ca", "ce", "ci", "co", "cu",
    "da", "de", "di", "do", "du",
    "fa", "fe", "fi", "fo", "fu",
    "ga", "ge", "gi", "go", "gu",
    "la", "le", "li", "lo", "lu",
    "ma", "me", "mi", "mo", "mu",
    "na", "ne", "ni", "no", "nu",
    "pa", "pe", "pi", "po", "pu",
    "ra", "re", "ri", "ro", "ru",
    "sa", "se", "si", "so", "su",
    "ta", "te", "ti", "to", "tu",
    "va", "ve", "vi", "vo", "vu"
];

buttonElement.addEventListener("click", function() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    senhaElement.value = pass;
});

buttonnomeElement.addEventListener("click", function() {
    let nome = "";
    let totalChars = parseInt(sliderElement.value);
    let qtdSilabas = Math.floor(totalChars / 2);

    for (let i = 0; i < qtdSilabas; ++i) {
        nome += silabas[Math.floor(Math.random() * silabas.length)];
    }

    // Se número de caracteres for ímpar, adiciona uma letra aleatória
    if (totalChars % 2 !== 0) {
        nome += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    nomeElement.value = nome.charAt(0).toUpperCase() + nome.slice(1);
});