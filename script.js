const Res = {
    1: "Python, NodeJS, PHP, C#(ASP)",
    2: `<div style="display: flex;flex-direction: column ; align-items: center; justify-content: center;">
            <div style="display: flex; text-align: center; gap: 10px;">
                <span>📞 Tel:</span> <span>+261 38 49 055 96</span>
            </div>
            <div style="display: flex; text-align: center; gap: 10px;">
                <span>📧 E-mail:</span> <span>chrisk3ly@gmail.com</span>
            </div>
            <div style="display: flex; text-align: center; gap: 10px;">
                <span>📘 Facebook:</span> <span>Fitahiana Christalin Ratsimbazafy</span>
            </div>
        </div>
    `
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
document.getElementById("send_message").addEventListener("submit", send);
async function send(event) {
    event.preventDefault(); 
    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        nom: nom,
        email: email,
        message: message
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://send-mess-6v5j.onrender.com/sendMessage/", requestOptions);
        
        if (!response.ok) {
            // Gère les erreurs HTTP (ex. 400, 500)
            throw new Error(`Erreur HTTP : ${response.status} ${response.statusText}`);
        }

        const result = await response.text();
        console.log(result);
        alert("Message envoyé avec succès !");
    } catch (error) {
        console.error('Une erreur est survenue lors de l’envoi du message :', error);
        alert("Erreur lors de l’envoi du message. Veuillez réessayer plus tard.");
    }
    finally {
        document.getElementById("send_message").reset();
    }
}
