const Res = {
    1: "Python, NodeJS, PHP, C#(ASP)",
    2: "Conctacting me with this form"
}

function show(i) {
    s = document.getElementById(`sign${i}`).innerText;
    if (s == "+") {
        document.getElementById(`res${i}`).innerHTML = Res[i]
        document.getElementById(`sign${i}`).innerText = "-"
    }
    else {
        document.getElementById(`res${i}`).innerHTML = ""
        document.getElementById(`sign${i}`).innerText = "+"
    }
}