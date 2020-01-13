const serviceAccount = require('./firebase/ds-develop-a482c-firebase-adminsdk-fcxmb-3f5514f8ef.json');
const admin = require("firebase-admin");
module.exports = {
    firebaseConfig: {
        apiKey: "AIzaSyDugObAlAqardRBb77HwMkX1I2X4QiNo2M",
        authDomain: "ds-develop-a482c.firebaseapp.com",
        databaseURL: "https://ds-develop-a482c.firebaseio.com",
        projectId: "ds-develop-a482c",
        storageBucket: "ds-develop-a482c.appspot.com",
        messagingSenderId: "1093280686810",
        appId: "1:1093280686810:web:3bd8a636636abba85afbe3",
        measurementId: "G-LJFM1WK4B6"

    },
    adminConfig:{
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://ds-develop-a482c.firebaseio.com",
        storageBucket: "ds-develop-a482c.appspot.com"
    }
}