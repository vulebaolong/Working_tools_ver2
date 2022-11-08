function pause_chat() {
    let array_time1 = [
        'input_pause11',
        'input_pause12',
        'input_pause13'
    ]
    let array_time2 = [
        'input_pause21',
        'input_pause22',
        'input_pause23'
    ]

    let result1 = array_time1.map((e) => {
        return document.querySelector(`.${e}`);
    })
    let result2 = array_time2.map((e) => {
        return document.querySelector(`.${e}`);
    })

    let el_chat_pause1 = document.querySelector('.chat_pause1')
    let el_chat_pause2 = document.querySelector('.chat_pause2')

    setInterval(() => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM"

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        if (el_chat_pause1.checked) {
            handle_time(result1,am,h,m,s)            
        }
        if (el_chat_pause2.checked) {
            handle_time(result2,am,h,m,s)
        }
    }, 1000);
}

function handle_time(result,am,h,m,s) {
    let array_time_res = result.map((e) => {
        return e.value
    })
    // console.log(array_time_res);
    if (am === 'PM') {
        if (h == array_time_res[0] && m == array_time_res[1] && s == array_time_res[2]) {
            chat_wrap()
        }
    }
}

