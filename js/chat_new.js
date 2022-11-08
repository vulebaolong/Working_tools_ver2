function chat_new_nav(params) {
    return new Promise(function (resolve, reject) {
        const observerOptions = {
            childList: true,
        }

        const observer = new MutationObserver(callback)

        const targetNodes = params
        observer.observe(targetNodes, observerOptions)
        function callback(mutations) {
            //console.log('mutations: ', mutations);
            //console.log('mutations: ', mutations[0].target);
            if (mutations[0].addedNodes.length > 0) {
                let casee = mutations[0].addedNodes[0].children[0].children[1].children[0].innerText
                console.log(mutations[0].addedNodes[0]);
                console.log(mutations[0].addedNodes[0].style.background);
                console.log('thêm case: ', casee);
                console.log(mutations[0].addedNodes[0].classList);
                let reslut = Array.from(mutations[0].addedNodes[0].classList).some((e) => {
                    return e === 'new-status___3T8Lw'
                })
                if (reslut) {
                    console.log('chat mới');
                    if (document.querySelector('.on_off_audio').checked) {
                        let audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
                        audio_request.play();
                        console.log('chạy nhạc');
                    }


                } else {
                    console.log('không phải chat mới');
                }
            }
        }

    })
}
function testAudio_clickalt() {
    let audio = document.querySelector('.on_off_audio')
    audio.onclick = (e) => {
        if (e.altKey === true) {
            let audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
            audio_request.play();
            console.log('chạy nhạc');
        }
    }
}