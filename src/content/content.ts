console.clear()
const init = () => {
    const messageInputBox: HTMLTextAreaElement = document.getElementsByClassName("textarea-container allow-grammarly")[0] as HTMLTextAreaElement;
    messageInputBox.addEventListener("input", () => {
        const inputValue = messageInputBox.value;
        const regex = /\$([\d.]+)/;
        const isMatch = inputValue.match(regex);
        const moneyIs = isMatch ? parseFloat(isMatch[1]) : null
        if (moneyIs) {
            console.log(`Total: ${moneyIs}; and charge: ${20}%; so, you will get ${moneyIs - (moneyIs * 20 / 100)}`)
        }
    })
}

const playSount = () => {
    const createAudioElement = document.createElement("audio");
    const soruceCreate = document.createElement("source");
    soruceCreate.src = "ton.mp3";
    soruceCreate.type = "audio/mp3";

    createAudioElement.appendChild(soruceCreate);
    document.body.appendChild(createAudioElement)
    setTimeout(() => {
        createAudioElement.play().then((res) => console.log('success', res)).catch(er => console.log(er))
    }, 5000)
}


setTimeout(() => {
    if (document.readyState === "complete") {
        init()
        playSount()
    } else {
        init()
        playSount()
    }
}, 1000)
