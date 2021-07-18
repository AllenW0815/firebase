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
    datas.forEach((data) => {
        let key = data.getAttribute('data-type')
        order[key] = data.value
    })
    return order
}

// 時間
let now = moment().format('YYYY-MM-DD HH:mm:ss')

// 寫入
const writeOrder = () => {
    let orderRef = db.collection("semicolon").doc("orders").collection(user).doc(now)

    orderRef.set(creatOrder())
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

// 讀取顯示
const getOrders = () => {
    let orderRef = db.collection("semicolon").doc("orders").collection(user)

    orderRef.get()
    .then((res) => {
        console.log(res.docs);
        res.forEach((doc) => {
            console.log(doc.data());
        })
        let a = Object.entries(res.docs)
        console.log(a);
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });
}
