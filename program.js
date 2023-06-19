function updateRoom(roomName) {
    if (!isLoggedIn()) {
        alert("管理者としてログインしてください。");
        return;
    }
    var congestion = prompt("混雑状況を入力してください");
    document.getElementById(roomName + "-status").innerHTML = congestion;
}

function isLoggedIn() {
    var adminId="admin";
    var password="password";
    var inputId = document.getElementById("admin-id").value;
    var inputPassword = document.getElementById("admin-password").value;
    if (adminId == inputId && password == inputPassword) {
        return true;
    } else {
        return false;
    }
}
