// Add JavaScript code here

function show() {
    document.getElementById('closet').className = "show-div"
}

function hide() {
    document.getElementById('closet').className = "hide-div"
}



save_btn = document.querySelector(".save-btn")
cancel_btn = document.querySelector(".cancel-btn")

save_btn.onclick = function () {
    this.innerHTML = '<div class="loader"></div>';
    setTimeout(() => {
        this.innerHTML = 'Sent';
        this.style = "pointer-events:none;background:white;color:green;";
    }, 5000);
}

cancel_btn.onclick = function () {
    this.innerHTML = '<div class="loader"></div>';
    setTimeout(() => {
        this.innerHTML = 'cancelled';
        this.style = "pointer-events:none;background:white;color:black;";
    }, 5000);
}
