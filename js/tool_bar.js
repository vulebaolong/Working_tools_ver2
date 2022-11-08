let html_tool_bar = `
<div class="toolbar_wraper">
        <div class="toolbar_left">
            <div class="toolbar_left_move">

                <i class="fa-solid fa-grip-lines-vertical"></i>
            </div>
            <div class="time_time">
                <div class="time_hour2">89</div>:
                <div class="time_minutes2">45</div>:
                <div class="time_second2">67</div>
            </div>
        </div>
        <div class="toolbar_container_content">
            <div class="toolbar_container">
                <div class="toolbar_mid">
                    <div class="split"></div>
                    <div class="toolbar_item toolbar_mid_calendar">
                        <i class="fa-regular fa-calendar-days"></i>
                        <div class="toolbar_mid_calendar_container">
                            <div class="toolbar_mid_calendar_content">
                                <input class="toolbar_mid_calendar_date" type="date">
                                <div class="toolbar_mid_calendar_period">
                                    <input class="input_toobar toolbar_mid_calendar_input" type="text" value="14"
                                        maxlength="3">
                                    <input class="toolbar_mid_calendar_checkbox" type="checkbox" checked="true">
                                    <label>Ngày làm việc</label>
                                </div>
                                <div class="toolbar_mid_calendar_button">
                                    <i class="fa-solid fa-calendar-plus"></i>
                                    <div>Get</div>
                                </div>
                                <input class="toolbar_mid_calendar_result" type="text" value="??-??-???">
                            </div>
                        </div>
                    </div>
                    <div class="toolbar_item toolbar_mid_setting">
                        <i class="fa-solid fa-paper-plane-top"></i>
                        <div class="toolbar_mid_setting_container">
                            <div class="toolbar_mid_setting_content">
                                <div class="split_c margin_top10"></div>
                                <div class="toolbar_mid_setting_item1">
                                    <p>Auto play audio chat new</p>
                                    <label class="toggle_switch chat_audio">
                                        <input class="on_off_audio " type="checkbox" checked="true">
                                        <span></span>
                                    </label>
                                </div>
                                <div class="split_c"></div>
                                <div class="toolbar_mid_setting_item2">
                                    <p class="toolbar_mid_setting_title">Pause chat time</p>
                                    <div class="toolbar_mid_setting_pause1">
                                        <div class="toolbar_mid_setting_time">
                                            <input class="pause_h input_toobar input_pause input_pause11" maxlength="2" value="06">
                                            <span class="pause_text2">Giờ</span>
                                            <input class="pause_m input_toobar input_pause input_pause12" maxlength="2" value="00">
                                            <span class="pause_text2">Phút</span>
                                            <input class="pause_s input_toobar input_pause input_pause13" maxlength="2" value="00">
                                            <span class="pause_text2">Giây</span>
                                        </div>
                                        <label class="toggle_switch">
                                            <input class="chat_pause1" type="checkbox" checked="true">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div class="toolbar_mid_setting_pause1">
                                        <div class="toolbar_mid_setting_time">
                                            <input class="pause_h input_toobar input_pause input_pause21" maxlength="2" value="00">
                                            <span class="pause_text2">Giờ</span>
                                            <input class="pause_m input_toobar input_pause input_pause22" maxlength="2" value="00">
                                            <span class="pause_text2">Phút</span>
                                            <input class="pause_s input_toobar input_pause input_pause23" maxlength="2" value="00">
                                            <span class="pause_text2">Giây</span>
                                        </div>
                                        <label class="toggle_switch">
                                            <input class="chat_pause2" type="checkbox">
                                            <span></span>
                                        </label>
                                    </div>
                                    
                                </div>
                                <div class="split_c margin_bottom10"></div>

                            </div>
                        </div>
                    </div>
                    <div class="split"></div>
                </div>
                <div class="toolbar_right">
                    <div class="toolbar_right_collapse">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`



function run_tool_bar(body) {


    let el_toolbar_wraper = document.querySelector('.toolbar_wraper')
    let el_toolbar_left = document.querySelector('.toolbar_left')
    let el_toolbar_container = document.querySelector('.toolbar_container')
    let el_toolbar_container_content = document.querySelector('.toolbar_container_content')
    let el_toolbar_right_collapse = document.querySelector('.toolbar_right_collapse')
    let el_time_time = document.querySelector('.toolbar_wraper > .toolbar_left > .time_time')
    let el_toolbar_mid = document.querySelector('.toolbar_mid')
    let el_toolbar_mid_calendar = document.querySelector('.toolbar_mid_calendar')
    let el_toolbar_mid_setting = document.querySelector('.toolbar_mid_setting')
    let el_toolbar_mid_calendar_content = document.querySelector('.toolbar_mid_calendar_content')
    let el_toolbar_mid_setting_content = document.querySelector('.toolbar_mid_setting_content')
    let el_toolbar_mid_calendar_input = document.querySelector('.toolbar_mid_calendar_input')
    let el_toolbar_mid_calendar_container = document.querySelector('.toolbar_mid_calendar_container')
    let el_toolbar_mid_setting_container = document.querySelector('.toolbar_mid_setting_container')
    let el_toolbar_mid_calendar_button = document.querySelector('.toolbar_mid_calendar_button')
    let el_toolbar_mid_calendar_date = document.querySelector('.toolbar_mid_calendar_date')
    let el_toolbar_mid_calendar_checkbox = document.querySelector('.toolbar_mid_calendar_checkbox')
    let el_toolbar_mid_calendar_result = document.querySelector('.toolbar_mid_calendar_result')
    let el_toolbar_mid_setting_text = document.querySelectorAll('.toolbar_mid_setting_text')
    let el_toolbar_mid_setting_btn = document.querySelectorAll('.toolbar_mid_setting_btn')


    // collaspe
    el_toolbar_right_collapse.onclick = (e) => {
        e.stopPropagation()

        let el_toolbar_container_left = el_toolbar_container_content.offsetLeft
        if (e.altKey) {
            console.log(el_toolbar_container_left);
            if (el_toolbar_container_left === 94) {
                el_toolbar_container_content.style.cssText = `
            left: unset;
            right: -15px;
            `
                el_toolbar_container.style.cssText = `
            
            justify-content: start;
            `;
                el_toolbar_left.style.cssText = `
            justify-content: end;
            `;
                el_toolbar_mid_calendar_container.style.cssText = `
            right: 0;
            left: unset;
            `
                el_toolbar_mid_setting_container.style.cssText = `
            right: 0;
            left: unset;
            `

                el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
                el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);
                el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
            } else {
                el_toolbar_container_content.style.cssText = `
            left: 94px;
            right: unset;
            `
                el_toolbar_container.style.cssText = `            
            justify-content: end;
            `;

                el_toolbar_left.style.cssText = `
            justify-content: start;
            `;
                el_toolbar_mid_calendar_container.style.cssText = `
            left: 0;
            right: unset;
            `
                el_toolbar_mid_setting_container.style.cssText = `
            left: 0;
            right: unset;
            `

                el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
                el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);

                el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
            }
        } else {
            console.log(el_toolbar_container_left);
            el_toolbar_right_collapse.classList.toggle('toolbar_right_collapse_toggle')
            el_toolbar_container.classList.toggle('toolbar_container_show')

            let el_active_toolbar = el_toolbar_mid.querySelector(`.active_toolbar`)
            el_active_toolbar && el_active_toolbar.classList.remove('active_toolbar')
        }
    }

    // calender
    el_toolbar_mid_calendar.onclick = () => {
        toolBarActive(el_toolbar_mid_calendar, el_toolbar_mid, 'active_toolbar')
    }
    el_toolbar_mid_calendar_button.onclick = (e) => {
        let values = el_toolbar_mid_calendar_date.value
        let ar_value = values.split('-')
        let str_value = ar_value[1] + '-' + ar_value[2] + '-' + ar_value[0]
        let leadtime_request = el_toolbar_mid_calendar_input.value
        let check = el_toolbar_mid_calendar_checkbox.checked
        console.log('leadtime =>>>>>>', leadtime_request, str_value, check);
        let result = leadtime(leadtime_request, str_value, check)
        el_toolbar_mid_calendar_result.value = result
        console.log(result);
    }
    el_toolbar_mid_calendar_input.onclick = (e) => { el_toolbar_mid_calendar_input.select() }





    // chat end
    el_toolbar_mid_setting.onclick = (e) => {
        toolBarActive(el_toolbar_mid_setting, el_toolbar_mid, 'active_toolbar')
        for (let index = 0; index < el_toolbar_mid_setting_text.length; index++) {
            fetch(`../click_chat_end/chat_end_${index + 1}.txt`)
                .then(response => response.text())
                .then((texts_data) => {
                    el_toolbar_mid_setting_text[index].innerHTML = texts_data
                })
        }
    }


    array_elements = [
        el_toolbar_mid_setting_content,
        el_toolbar_mid_calendar_content,
    ]
    handle_click_stopPropagation(array_elements)








    function toolBarActive(element, parent, active_toolbar) {
        let el_active_toolbar = parent.querySelectorAll(`.${active_toolbar}`)
        el_active_toolbar.forEach((e) => {
            if (element.classList !== e.classList) {
                e.classList.remove(active_toolbar)
            }
        })
        element.classList.toggle(active_toolbar)
    }


    function handle_click_stopPropagation(array_elements) {
        array_elements.forEach(element => {
            element.onclick = (e) => {
                e.stopPropagation()
            }
        });
    }
    function leadtime(day_request, current, lam_viec) {
        let day_result

        let day_current = Date.parse(new Date(current)) || Date.parse(new Date());
        // console.log(day_current);

        for (let index = 0; index < day_request;) {
            let day_step = new Date(day_current += 86400000);
            console.log(day_step.toString());
            let year = day_step.getFullYear();
            let month = day_step.getMonth() + 1;
            let day = day_step.getDate();
            let dayofweek = day_step.getDay();

            // const dayname = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];    
            // console.log(dayname[dayofweek] + ' ngày ' + day + '/' + month + '/' + year);
            day_result = day + '-' + month + '-' + year
            // console.log(day_result);

            if (lam_viec) {
                if (dayofweek === 0 || dayofweek === 6) {
                    // console.log('thứ 7 và chủ nhật không chạy dayofweek: ', dayofweek);
                } else {
                    index++
                }
            } else {
                index++
            }


        }
        return day_result
    }


    dragElement(el_toolbar_wraper)

    let el_ar = [
        'toolbar_container',
        'time_time',

    ]

    el_ar.forEach((e) => {
        let element = document.querySelector(`.${e}`)
        // element.onclick = (e1) => {e1.stopPropagation()}
        element.onmousedown = (e1) => { e1.stopPropagation() }
        element.onmousemove = (e1) => { e1.stopPropagation() }
        element.onmouseup = (e1) => { e1.stopPropagation() }
        if (element.getAttribute("type") === 'text') {
            element.onclick = (e) => {
                element.select()
            }
        }
    })
    function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById(elmnt.id + 'header')) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
            elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }


}