let htmlSearchLDP = `
<div class="search_container">
    <div class="search_box">                
        <div class="search_button">                          
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" Placeholder="Tìm kiếm L3" class="search_input"/>                
    </div>
    <div class="search_result_box">
                        
    </div>
</div>
`

function start_search() {
    var el_search_button = document.querySelector('.search_button');
    // var el_search_box = document.querySelector('.search_box')
    var el_search_input = document.querySelector('.search_input');
    var el_search_result_box = document.querySelector('.search_result_box');
    var el_search_container = document.querySelector('.search_container');

    // body.onclick = (e) => {
    //     var docu_toggle = Array.from(e.target.classList)
    //     var reslut_docu_toggle = docu_toggle.some(e => {
    //         console.log(e);
    //         return  e === 'search_container' ||
    //                 e === 'search_box' ||
    //                 e === 'search_button' ||
    //                 e === 'search_input' ||
    //                 e === 'search_result_box' ||
    //                 e === 'fa-magnifying-glass' ||
    //                 e === 'search_result_item' ||
    //                 e === 'search_result_L1' ||
    //                 e === 'search_result_L2' ||
    //                 e === 'search_result_L3' ||
    //                 e === 'search_result_Explain' ||
    //                 e === 'search_label_L1'
    //     })
    //     console.log(reslut_docu_toggle);
    //     if (reslut_docu_toggle === false) {
    //         el_search_input.classList.remove("search_input_after")
    //         el_search_result_box.classList.remove("search_result_box_after")
    //     }
    // }

    el_search_container.onclick = (e1) => {
        var e1_length = e1.path.length - 3;
        e1.path.forEach((e2, i) => {
            if (i < e1_length) {
                var el_item = Array.from(e2.classList).includes('search_result_item');
                if (el_item) {
                    console.log(e2);
                    var L1 = e2.children[0].children[0].innerText;
                    var L2 = e2.children[1].children[0].innerText;
                    var L3 = e2.children[2].children[0].innerText;
                    selectLDP(L1, L2, L3);
                }
            }
        });
    };

    el_search_button.onclick = (e) => {
        e.stopPropagation();
        el_search_input.classList.toggle('search_input_after');
        el_search_result_box.classList.toggle('search_result_box_after');
    };

    el_search_input.onkeyup = (e) => {
        processChanges(e);
    };
}
function search_LDP(e) {
    var value_input = e.target.value.trim();
    var L3_search = data_LDP.filter((value) => {
        return value.L3.toLocaleUpperCase().includes(value_input.toLocaleUpperCase());
    });
    var el_search_result_box = document.querySelector('.search_result_box');

    var el_search_result_item = ``;

    console.log(L3_search);
    L3_search.forEach((e1) => {
        console.log(e1);
        var background = '';
        switch (e1.L1) {
            case 'Vận chuyển':
                background = 'background: #FFD966;';
                break;

            case 'Thanh toán':
                background = 'background: #A4C2F4;';
                break;

            case 'Tài khoản & Gian lận':
                background = 'background: #6AA84F';
                break;

            case 'Trả hàng & Hoàn tiền':
                background = 'background: #26a69a';
                break;

            case 'Marketing':
                background = 'background: #CCA677';
                break;

            case 'BD':
                background = 'background: #A19FCC';
                break;

            case 'Trang người bán & Sao quả tạ':
                background = 'background: #068899';
                break;

            case 'Sản phẩm và pháp lý':
                background = 'background: #63D297';
                break;

            case 'ShopeePay':
                background = 'background: #A4C2F4';
                break;

            case 'Digital product':
                background = 'background: #FFD966';
                break;

            case 'Câu hỏi chung':
                background = 'background: #9FC5E8';
                break;

            case 'Câu hỏi khác':
                background = 'background: #EA9999';
                break;

            case 'ShopeeFood':
                background = 'background: #EA9999';
                break;

            case 'Bảo hiểm':
                background = 'background: #26A69A';
                break;

            default:
                break;
        }
        el_search_result_item += `
            <div class="search_result_item">
                <div class="search_result_L1" style="${background}">
                    <label class="search_label_L1">${e1.L1}</label>
                </div>
                <div class="search_result_L2">
                    <label class="search_label_L1">${e1.L2}</label>
                </div>
                <div class="search_result_L3">
                    <label class="search_label_L1">${e1.L3}</label>
                </div>
                <div class="search_result_Explain">
                    <label class="search_label_L1">${e1.Explain}</label>
                </div>
            </div>
        `;
    });
    el_search_result_box.innerHTML = el_search_result_item;
    console.log(el_search_result_item);
}
const processChanges = debounce((e) => search_LDP(e));
function debounce(func, delay = 300) {
    let timer;
    console.log('1');
    return (args) => {
        //console.log(args);

        clearTimeout(timer);
        timer = setTimeout(() => {
            func(args);
        }, delay);
    };
}

function selectLDP(Request_L1, Request_L2, Request_L3) {
    let Request_LDP = `${Request_L1} / ${Request_L2} / ${Request_L3}`;
    console.log(Request_LDP);
    let workstation_current = fun_workstation_current();

    let el_ldp = workstation_current.querySelector("input[id='62']");
    el_ldp.focus();
    document.execCommand('insertText', false, Request_L3);

    let el_menu_ldps = document.querySelectorAll('.cs-cascader-menus');
    let el_menu_ldp = selectLDP_find_menu(el_menu_ldps);

    console.log(el_menu_ldp.children[0].children);
    Array.from(el_menu_ldp.children[0].children).forEach((element) => {
        if (Request_LDP === element.children[0].innerText) {
            element.children[0].click();
        }
    });
}
function selectLDP_find_menu(el_menu_ldps) {
    let el_menu_ldp;
    el_menu_ldps.forEach((element) => {
        if (!Array.from(element.parentElement.parentElement.classList).includes('cs-select-dropdown-hidden')) {
            el_menu_ldp = element;
        }
    });
    return el_menu_ldp;
}
function fun_workstation_current() {
    let el_workstation_current;
    Array.from(document.querySelector('#workstation').children[0].children).forEach((e) => {
        console.log(Object.keys(e.attributes).length);
        if (Object.keys(e.attributes).length === 2) {
            console.log(e);

            el_workstation_current = e;
        }
    });
    return el_workstation_current;
}


//LDP
function edit() {
    let e = fun_workstation_current()
    var id = e.attributes.id.value.substr(44, 11);
    console.log('id: ', id);

    if (id === 'case-detail') {
        console.log('thông tin');
        var status =
            e.children[0].children[0].children[0].children[0].children[0].children[0].children[2]
                .children[0].children[1].children[0].children[0].children[2].children[0];
        console.log(status);
        eventFire(status, 'click');
    }

    if (id === 'agentchat?s') {
        console.log('chat');
        var status =
            e.children[0].children[0].children[0].children[0].children[2].children[0].children[1]
                .children[0].children[2];
        console.log(status);
        eventFire(status, 'click');
    }
}
function TDHTGH() {
    selectLDP('Vận chuyển', 'Đang chờ giao', '[Trước EDT] Theo dõi hành trình giao hàng');
}
function HoiGiao() {
    selectLDP('Vận chuyển', 'Đang chờ giao', '[Sau EDT] Hối giao');
}
function HoiLay() {
    selectLDP('Vận chuyển', 'Lấy hàng/ Gửi hàng', 'Hối lấy hàng');
}
function CCHT() {
    selectLDP('Câu hỏi khác', 'Câu hỏi khác', 'Chat chưa hoàn tất');
}