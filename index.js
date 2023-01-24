const kits = ["crash", "kick", "snare", "tom"];

const cont = document.querySelector(".con");

kits.forEach(k => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.style.backgroundImage = "url(images/" + k + ".png)";
    btn.innerText = k;
    cont.appendChild(btn);
    const audio = document.createElement("audio");
    audio.src = "sounds/" + k + ".mp3";
    cont.appendChild(audio);

    btn.addEventListener("click", () => {
        audio.play();
    });
    window.addEventListener("keydown", (e) => {
        console.log(e);
        if (e.k === k.slice(0, 1)) {
            audio.play();
        };
    })

})