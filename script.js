var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

var selectedAccount = null;
var password = "1234"; // Contraseña de ejemplo

function login() {
    var accountSelector = document.getElementById("account");
    selectedAccount = accountSelector.value;
    document.querySelector(".account-selection").style.display = "none";
    document.querySelector(".interaction").style.display = "block";
}

function authenticate() {
    var enteredPassword = document.getElementById("password").value;
    if (enteredPassword === password) {
        document.querySelector(".interaction").style.display = "none";
        document.querySelector(".operations").style.display = "block";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

function checkBalance() {
    var saldo = cuentas[selectedAccount].saldo;
    document.getElementById("result").textContent = "Saldo actual: $" + saldo;
}

function deposit() {
    var depositAmount = parseFloat(prompt("Ingresa el monto a depositar:"));
    if (!isNaN(depositAmount) && depositAmount > 0) {
        cuentas[selectedAccount].saldo += depositAmount;
        var saldo = cuentas[selectedAccount].saldo;
        document.getElementById("result").textContent = "Has depositado $" + depositAmount + ". Nuevo saldo: $" + saldo;
    } else {
        alert("Monto inválido. Inténtalo de nuevo.");
    }
}

function withdraw() {
    var withdrawAmount = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= cuentas[selectedAccount].saldo && (cuentas[selectedAccount].saldo - withdrawAmount) >= 10 && (cuentas[selectedAccount].saldo - withdrawAmount) <= 990) {
            cuentas[selectedAccount].saldo -= withdrawAmount;
            var saldo = cuentas[selectedAccount].saldo;
            document.getElementById("result").textContent = "Has retirado $" + withdrawAmount + ". Nuevo saldo: $" + saldo;
        } else {
            alert("Monto inválido o no cumples con las reglas de negocio.");
        }
    } else {
        alert("Monto inválido. Inténtalo de nuevo.");
    }
}
