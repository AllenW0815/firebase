/* DOM */
const date = getElement('#date')
const submitBtn = getElement('#submit')

function makeSureAdd() {
    Swal.fire({
        title: '確認內容無誤?',
        text: "訂單源源不絕發大財",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
        }).then((result) => {
        if (result.isConfirmed) {
            writeOrder()
            Swal.fire(
            'success'
            )
        }
    })
}




/* 日期自動生成 */
date.value= moment().format('YYYY-MM-DD')

/* 寫入 */
submitBtn.addEventListener('click',makeSureAdd)


/* init */

