function Authen_Erorr(URL, col, params, datass) {
    return new Promise((resolve, reject) => {
        if (params === 1) {
            Get_Email_Request(URL, col)
                .then((datas) => {
                    //console.log(datas);
                    datas.shift()
                    //console.log(datas);
                    resolve(datas)
                })
        }
        if (params === 2) {
            Get_Email_current()
                .then((Email_current) => {
                    //console.log(`Email_current (${col}): `, Email_current)
                    //console.log(`datass (${col}): `, datass)
                    var result = datass.includes(Email_current)
                    resolve(result)
                })
        }
    })
}
function Get_Email_Request(URL, col) {
    return new Promise(function (resolve, reject) {
        Get_data_gdoc_col(URL, col)
            .then((datas) => {
                resolve(datas)
            })
    })
}
function Get_Email_current() {
    return new Promise(function (resolve, reject) {
        var objValue = { value: "Gửi đi tin nhắn để lấy TabID_work" }

        chrome.runtime.sendMessage(objValue, (e) => {
            var tabID = e.Work_ID
            var Email = e.Email

            // console.group('Nhận phản hồi từ tin nhắn gửi đi: ', objValue)
            // console.log('Work_ID: ', tabID)
            // console.log('Email: ', Email)
            // console.groupEnd()

            resolve(Email)
        })

        // console.group('Gửi đi')
        // console.log('gửi đi: ', objValue)
        // console.groupEnd()
    })
}
function Get_data_gdoc_col(URL, col) {
    return new Promise((resolve, reject) => {
        var row = []
        var col_ID

        fetch(URL)
            .then(res => res.text())
            .then(rep => {
                const data = JSON.parse(rep.substr(47).slice(0, -2))
                // console.log(data);
                // console.log(data.table.cols);
                // console.log(data.table.rows);

                var obj_cols = data.table.cols
                for (var prop_cols in obj_cols) {
                    var obj2_cols = obj_cols[prop_cols]
                    // console.group(prop_cols)
                    // console.log('obj_cols.' + prop_cols + '=' + obj_cols[prop_cols])
                    // console.log('ID: ', obj2_cols.id);
                    // console.log('value: ', obj2_cols.label);
                    // console.groupEnd()
                    if (obj2_cols.id === col) {
                        row = [...row, obj2_cols.label.trim()]
                        //console.log(row)

                        col_ID = prop_cols
                        //console.log('col_ID: ', col_ID);
                    }
                }

                var obj_rows = data.table.rows
                for (var prop_rows in obj_rows) {
                    if (obj_rows[prop_rows].c[col_ID] !== null) {
                        //console.log('prop_rows.' + prop_rows + '=' + obj_rows[prop_rows])   
                        //console.log('nè: ', obj_rows[prop_rows].c[col_ID].v)
                        row = [...row, obj_rows[prop_rows].c[col_ID].v.trim()]
                    }
                }
                resolve(row)
            })
    })
}
function select(params, elementAdd) {
    var menu = params.children[1].classList[0]
    //console.log(menu);
    //console.log(params);
    //console.log(params.parentElement.children);
    Array.from(params.parentElement.children).forEach((e) => {

        if (Array.from(e.children[1].classList).includes(menu) === false) {
            //console.log(e);
            //console.log(e.children[1]);
            e.children[1].classList.remove('select')
        }
    })
}