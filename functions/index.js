const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.submitRequest = functions.https.onCall((data, context) => {
    return admin.firestore().collection("Information").add({
        Video_Link: data.videolink,
        Catagory: data.catagory,
        In_Game_Name: data.ingamename,
        Video_Timestamp: data.video_timestamp,
        Real_Name: data.realname,
        Email: data.email,
        Description: data.description,
    });
});