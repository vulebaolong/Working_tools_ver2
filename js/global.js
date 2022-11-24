// Hàm click
function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
        
    }
}

// tìm nạp vào root
function Get_el_main_container(params, flag, audio_request) {
    return new Promise(function (resolve, reject) {
        const observerOptions = {
            childList: true,
        }
        const observer = new MutationObserver(callback)

        const targetNodes = params
        observer.observe(targetNodes, observerOptions)
        function callback(mutations) {


            if (flag === 1) {
                console.log('mutations: ', mutations);
                console.log('mutations: ', mutations[0].target);
                var el_main_container = mutations[0].target.children[0].children[0].children[1]
                observer.disconnect()
                if (el_main_container.classList[0] === 'main-container') {

                    resolve(el_main_container)
                }
            }
            if (flag === 2) {
                console.log('mutations: ', mutations);
                console.log('mutations: ', mutations[0].target);
                console.log('mutations: ', mutations[0].target.children[0]);
                observer.disconnect()
                resolve([
                    mutations[0].target.children[0].children[0].children[0],
                    mutations[0].target.children[1]
                ])
            }
            if (flag === 3) {
                console.log('mutations: ', mutations);
                console.log('mutations: ', mutations[0].target);
                if (mutations[0].target.children[0].classList[0] === 'flexible-tabs___kjiTt') {
                    var casee = mutations[0].target.children[0].children[0].children[0].children[0].children[0].children[1].children[0].innerText
                    console.log('thêm case: ', casee);
                    console.log(mutations[0].addedNodes[0].children[0].children[0].children[0]);
                    console.log(mutations[0].addedNodes[0].children[0].children[0].children[0].classList);
                    var reslut = Array.from(mutations[0].addedNodes[0].children[0].children[0].children[0].classList).some((e) => {
                        return e === 'new-status___3T8Lw'
                    })
                    if (reslut) {
                        // var oldItems = JSON.parse(localStorage.getItem('case_chat_new')) || [];
                        // var newItem = casee
                        // oldItems.push(newItem);
                        // localStorage.setItem('case_chat_new', JSON.stringify(oldItems));
                        // console.log('case_chat_new:', JSON.parse(localStorage.getItem('case_chat_new')));

                        if (document.querySelector('.on_off_audio').checked) {
                            var audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
                            audio_request.play();
                            console.log('chạy nhạc');
                        }
                        console.log('chat mới');
                    } else {
                        console.log('không phải chat mới');
                    }
                    chat_new_nav(mutations[0].target.children[0].children[0].children[0])
                }
            }
        }
    })
}

// lỗi
function Erorr(params) {
    switch (params) {
        case 1:
            var el_erorr_container = document.querySelector('.long-shopee-react-toast')
            el_erorr_container.classList.toggle("none")
            break;

        case 2:
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e1 => {
                console.log(Object.keys(e1.attributes).length);
                if (Object.keys(e1.attributes).length === 2) {
                    var chat_wrapper = e1.children[0].children[1].children[0].children[0].children
                    console.log('chat_wrapper: ', chat_wrapper);
                    Array.from(chat_wrapper).forEach((e2) => {
                        if (e2.classList.value.slice(0, 16) === 'chat_message_box') {
                            var chat_wrapper_items = e2.children[0].children[0].children[0].children[0].children[0].children[0].children
                            console.log('chat_wrapper_items: ', chat_wrapper_items);
                            Array.from(chat_wrapper_items).forEach((e3) => {
                                e3.innerHTML = ''
                            })
                        }
                    })
                }
            });
            break;

        case 3:
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e1 => {
                console.log(Object.keys(e1.attributes).length);
                if (Object.keys(e1.attributes).length === 2) {
                    var chat_wrapper = e1.children[0].children[1].children[0].children[0].children
                    console.log('chat_wrapper: ', chat_wrapper);
                    Array.from(chat_wrapper).forEach((e2) => {
                        if (e2.classList.value.slice(0, 16) === 'chat_message_box') {
                            var chat_wrapper_items = e2.children[0].children[0].children[0].children[0].children[0].children[0].children
                            console.log('chat_wrapper_items: ', chat_wrapper_items);
                            Array.from(chat_wrapper_items).forEach((e3) => {
                                if (e3.children.length !== 0) {
                                    var chat_wrapper_item = e3.children[0].children[0].children[0]

                                    if (chat_wrapper_item.classList[1].slice(0, 14) === 'message_myself') {
                                        //console.log(chat_wrapper_item)
                                        chat_wrapper_item.insertAdjacentHTML("afterbegin", erorr2);
                                    }
                                }
                            })
                        }
                    })
                }
            });
            break;

        default:
            break;
    }

}

// lắng nghe phím bấm
function listen_key() {
    document.addEventListener(
        'keydown',
        function (event) {
            //xem đang nhấn phím gì
            // console.log(event);

            if (event.altKey && event.code === 'KeyQ') {
                add_mes_chat_end();
            }
            if (event.altKey && event.code === 'KeyP') {
                chat_wrap()
            }
            //LDP
            if (event.altKey && event.code === 'Backquote') {
                edit();
            }
            if (event.altKey && event.code === 'Digit1') {
                TDHTGH();
            }
            if (event.altKey && event.code === 'Digit2') {
                HoiGiao();
            }
            if (event.altKey && event.code === 'Digit3') {
                HoiLay();
            }
            if (event.altKey && event.code === 'Digit0') {
                CCHT();
            }

        },
        false,
    );
}

//Pause chat 2
function chat_wrap(params) {

    let el_right_section = document.querySelector('.right-section___2FA6h').children
    let item_section_status = el_right_section[3].children[0].children[0].children[0].children[1].children[0].innerText

    let item_section = el_right_section[3].children[0].children[0].children[0]
    if (item_section_status === "Busy") {
        console.log(item_section_status);
    }
    if (item_section_status === "Online") {

        //click lần 1 vào Online ở ngoài
        chat_wrap_Reading(item_section, 1)
            .then((e) => {
                console.log(e);
                // setTimeout(() => {
                //     e.click() 
                // }, 10000);
                // click lần 2 vào Busy bên tay trái
                return chat_wrap_Reading(e, 2)
            })
            .then((e) => {
                console.log(e);
                //click lần 3 vào wrapup bên tay phải
                e.click()
                //click lần 4 ra ngoài (Online ở ngoài)
                item_section.click()
            })
    }
    if (item_section_status === "Offline") {

        //click lần 1 vào Online ở ngoài
        chat_wrap_Reading(item_section, 1)
            .then((e) => {
                console.log(e);
                // setTimeout(() => {
                //     e.click() 
                // }, 10000);
                // click lần 2 vào Busy bên tay trái
                return chat_wrap_Reading(e, 2, item_section_status)
            })
            .then((e) => {
                console.log(e);
                //click lần 3 vào wrapup bên tay phải
                e.click()
                //click lần 4 ra ngoài (Online ở ngoài)
                item_section.click()
                console.log(el_right_section[3].children[0].children[0].children[0].children[1].children[0].innerText);
            })
    }
}
function chat_wrap_Reading(item_section, step, item_section_status) {
    return new Promise((resolve, reject) => {

        let targetNodes
        switch (step) {
            case 1:
                //bấm lần 1
                targetNodes = item_section.parentElement.parentElement
                break;
            case 2:
                //bấm lần 2
                switch (item_section_status) {
                    case 'Offline':
                        targetNodes = item_section.parentElement.parentElement.children[1].children[0].children[0]
                        break;

                    default:
                        targetNodes = item_section.parentElement.parentElement.children[1]
                        break;
                }

                break;
        }
        console.log(targetNodes, 'step: ', step);
        const observerOptions = {
            childList: true,
            attributes: true,
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNodes, observerOptions);
        function callback(mutations) {
            console.log('mutations: ', mutations, 'step: ', step);
            console.log('mutations: ', mutations[0].target, 'step: ', step);
            observer.disconnect();


            switch (step) {
                case 1:
                    //bấm lần 1
                    resolve(mutations[0].target.children[1].children[0].children[1]);
                    break;
                case 2:
                    //bấm lần 2
                    switch (item_section_status) {
                        case 'Offline':
                            resolve(mutations[0].target.children[2]);
                            break;

                        default:
                            resolve(mutations[0].target.children[0].children[0].children[2]);

                            break;
                    }
                    break;
            }

        }


        item_section.click()

    })
}

//Đồng hồ
function time_clock() {
    setInterval(() => {
        

        let el_time_hours2 = document.querySelector('.time_hour2');
        let el_time_minutes2 = document.querySelector('.time_minutes2');
        let el_time_second2 = document.querySelector('.time_second2');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM"

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        el_time_hours2.innerHTML = h;
        el_time_minutes2.innerHTML = m;
        el_time_second2.innerHTML = s;
      
       

       
    }, 1000);
}

// Kết thúc chat nhanh
function add_mes_chat_end() {
    let e = fun_workstation_current()
    console.log(e);
    var id = e.attributes.id.value.substr(44, 11);
    var id_case = e.attributes.id.value.slice(-19);
    console.log(id_case);

    let html_mes_chat = `
                <div class="container_mes_chat" id="${id_case}">
                    <div class="mes_chat">
                        <div class="mes_chat_buttons_menu">
                            <div class="mes_chat_buttons1">
                                <i class="fa-solid fa-paper-plane-top"></i>       
                            </div>
                            <div class="mes_chat_buttons2">
                                <i class="fa-solid fa-paper-plane-top"></i>          
                            </div>
                            <div class="mes_chat_buttons3">
                                <i class="fa-solid fa-paper-plane-top"></i>          
                            </div>
                        </div>            
                        <textarea name="" id="" cols="30" rows="10" class="mes_chat_textarea"></textarea>
                    </div>
                </div>
            `;
    var chat = e.querySelector('.cs_inhouse_chat___1w4Y4');
    var chat_box = chat.querySelector('.chat_box___3_Qef');
    var chat_textarea = chat_box.querySelector('textarea');
    var chat_bottom_menu = chat_box.querySelector('.bottom_menu___1Y9jH');
    var chat_top_menu = chat_box.querySelector('.top_menu___wEUk3');

    if (id === 'agentchat?s') {
        console.log('chat');
        if (chat.children.length === 1) {
            chat.children[0].insertAdjacentHTML('afterend', html_mes_chat);
            var mes_chat = chat.querySelector(`[id="${id_case}"]`);
            console.log(mes_chat);
            var el_mes_chat_textarea = mes_chat.querySelector('.mes_chat_textarea');
            var el_mes_chat_buttons1 = mes_chat.querySelector('.mes_chat_buttons1');
            var el_mes_chat_buttons2 = mes_chat.querySelector('.mes_chat_buttons2');
            var el_mes_chat_buttons3 = mes_chat.querySelector('.mes_chat_buttons3');

            el_mes_chat_buttons1.onclick = (e) => {
                e.stopPropagation();
                console.log(chat_box.children.length);
                console.log(chat_box.children);
                if (chat_box.children.length === 4) {
                    if (el_mes_chat_textarea.value.trim() !== '') {
                        const path = chrome.runtime.getURL('click_chat_end/chat_end_1.txt');
                        fun_click_chat_end(path, chat_textarea, chat_bottom_menu.children[1], chat_top_menu.children[1], el_mes_chat_textarea)
                    }
                }
            };

            el_mes_chat_buttons2.onclick = (e) => {
                e.stopPropagation();
                if (chat_box.children.length === 4) {
                    if (el_mes_chat_textarea.value.trim() !== '') {
                        const path = chrome.runtime.getURL('click_chat_end/chat_end_2.txt');
                        fun_click_chat_end(path, chat_textarea, chat_bottom_menu.children[1], chat_top_menu.children[1], el_mes_chat_textarea)
                    }
                }
            };

            el_mes_chat_buttons3.onclick = (e) => {
                e.stopPropagation();
                const path = chrome.runtime.getURL('click_chat_end/chat_end_3.txt');
                fun_click_chat_end(path, chat_textarea, chat_bottom_menu.children[1], chat_top_menu.children[1], el_mes_chat_textarea)
            };
        } else {
            chat.querySelector(`[id="${id_case}"]`).classList.toggle('none');
        }
    }
}
function fun_mes_chat(flag, chat_textarea, chat_bottom_menu, mes_chat, chat_top_menu) {
    return new Promise((resolve, reject) => {
        if (flag === 0) {
            chat_textarea.focus();
            document.execCommand('insertText', false, `${mes_chat}`);
            eventFire(chat_bottom_menu, 'click');

            setTimeout(() => {
                resolve();
            }, 70);
        }

        if (flag === 1) {
            chat_top_menu.click();
        }
    });
}
function fun_click_chat_end(path, chat_textarea, chat_bottom_menu, chat_top_menu, el_mes_chat_textarea) {
    fetch(path)
        .then(response => response.text())
        .then(async (texts_data) => {
            let texts = texts_data.split("\r\n")
            console.log(texts)
            let step = texts.length + 1
            let texts_length = texts.length
            for (let index = 0; index < step; index++) {
                if (index < texts_length) {
                    await fun_handle_click_chat_end(texts[index], chat_textarea, chat_bottom_menu, el_mes_chat_textarea)
                }
                if (index === texts_length) {
                    console.log('click kết thúc');
                    chat_top_menu.click();
                }
            }
        })
}
function fun_handle_click_chat_end(mess_chat, chat_textarea, chat_bottom_menu, el_mes_chat_textarea) {
    return new Promise((resolve, reject) => {
        let mess
        if (mess_chat === '*') {
            mess = el_mes_chat_textarea.value
            // mess = `${el_mes_chat_textarea.value}`
            // console.log(mess);
        } else {
            mess = mess_chat
        }
        chat_textarea.focus();
        document.execCommand('insertText', false, `${mess}`);
        eventFire(chat_bottom_menu, 'click');

        console.log('gửi =>>>>', mess);
        setTimeout(() => {
            resolve()
        }, 70);
    })
}