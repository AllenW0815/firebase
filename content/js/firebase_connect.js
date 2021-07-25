// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyDlkW4Y5mKZ3V3yX8TGiHQ1gIrEh5I6pUw",
    authDomain: "order-recording-c4913.firebaseapp.com",
    projectId: "order-recording-c4913",
    storageBucket: "order-recording-c4913.appspot.com",
    messagingSenderId: "92582935058",
    appId: "1:92582935058:web:5ab2c1e25ca7a008cef6cb",
    measurementId: "G-P7DSFSLF51"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();

// default
let user = 'Allen'


// 創建寫入時的一個物件
let datas = getElements('[data-type]')
function creatOrder() {;
    let order = {}
    let unix = moment().unix()
    order['unix'] = unix
    datas.forEach((data) => {
        let key = data.getAttribute('data-type')
        order[key] = data.value
    })
    return order
}

// 關於使用者
const dedectUser = () => {
    userDom = getElement('#user')
    userDom.innerText = user
}

const changeUser = () => {
    const form = getElement('form')
    userDom = getElement('#user')
    if(user === 'Allen') {
        user = 'Taco'
        userDom.innerText = user
    }else if(user === 'Taco'){
        user = 'Allen'
        userDom.innerText = user
    }
    if(!form) {
        getOrders()
    }
}

// 寫入
const writeOrder = () => {
    // 時間
    let now = moment().format('YYYY-MM-DD HH:mm:ss')
    let orderRef = db.collection("semicolon").doc("orders").collection(user).doc(now)

    orderRef.set(creatOrder())
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

// 刪除
function deleteOrder(e) {;
    e.stopPropagation();
    const order = e.target.closest('tr')
    const orderId = order.getAttribute('data-id')
    let orderRef = db.collection("semicolon").doc("orders").collection(user).doc(orderId)

    orderRef.delete()
    .then(() => console.log("Document successfully deleted!"))
    .then(() => getOrders())
    .catch((error) => {
        console.error("Error removing document: ", error);
    });
}


// 讀取顯示
const getOrders = () => {
    // console.log(user);
    let orderRef = db.collection("semicolon").doc("orders").collection(user)

    orderRef.get()
    .then((res) => {
        let dataArray = res.docs.sort((a,b) => a.data().unix > b.data().unix ? -1 : 1)
        // console.log(dataArray[0].data());
        let profit =  0 
        const showOrders = getElement('#show_orders')
        const showProfit = getElement('.profit')
        let display = ''
        dataArray.forEach((doc) => {
            let item = doc.data()
            display += `<tr data-id="${doc.id}">`
            display += `<th>
            ${item.date}
            <svg class="del_btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
            </th>`
            display += `
            <td>${item.customer}</td>
            <td>${item.order_content}</td>
            <td>${item.price}</td>
            <td>${item.cost}</td>
            <td>${item.other_cost}</td>
            <td>${item.price-item.cost-item.other_cost}</td>`
            display += `</tr>`

            profit += item.price - item.cost - item.other_cost
        })
        showOrders.innerHTML = display
        showProfit.innerText =`$ ${profit}`

    })
    .then(() => {
        const delBtn = getElements('.del_btn')
        // console.log(delBtn);
        delBtn.forEach((btn) => {
            btn.addEventListener('click', deleteOrder)
        })
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });
}



/* common run */

/* DOM */
const userBtn = getElement('#user_btn')


/* user */
userBtn.addEventListener('click',changeUser)

/* init */
dedectUser()