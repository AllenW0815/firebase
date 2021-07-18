/* DOM */
const date = getElement('#date')
const submitBtn = getElement('#submit')

/* 日期自動生成 */
date.value= moment().format('YYYY-MM-DD')

/* 寫入 */
submitBtn.addEventListener('click',writeOrder)