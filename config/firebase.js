const serviceAccount = require('./firebase/test-e5d21-firebase-adminsdk-o109t-6ca4987e3a.json');
const admin = require("firebase-admin");
module.exports = {
    firebaseConfig: {
        apiKey: "AIzaSyDZlbZroVPBMcuZL_GWQE1B-98pPkbtxwE",
        authDomain: "test-e5d21.firebaseapp.com",
        databaseURL: "https://test-e5d21.firebaseio.com",
        projectId: "test-e5d21",
        storageBucket: "test-e5d21.appspot.com",
        messagingSenderId: "412745081190",
        appId: "1:412745081190:web:b2cda6aae7a8f4daba68a7"
    },
    adminConfig:{
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://test-e5d21.firebaseio.com",
        storageBucket: "test-e5d21.appspot.com"
    }
}