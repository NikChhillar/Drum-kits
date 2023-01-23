const kits = ["crash", "kick", "snare", "tom"];

const cont = document.querySelector(".con");

kits.forEach(k => {
    const btn = document.createElement("button");
    cont.appendChild(btn);

})