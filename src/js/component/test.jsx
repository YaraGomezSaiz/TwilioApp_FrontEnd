function play() {
    setmessage("");
    setmessagecolor("");
    fetch(BASENAME + "/", {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(data => {
            setResponsenumber(data.number);
            setResponsetext(data.text);
            if (data.number <= 2) {
                setmessage(
                    "  Ohhh sorry bad luck. Press play to try it again"
                );
                setmessagecolor("red far fa-sad-cry");
            } else {
                setmessage(
                    "  Yesss, well done. Check your prize in your mobile phone!!"
                );
                setmessagecolor("green far fa-smile");
            }
        });
}