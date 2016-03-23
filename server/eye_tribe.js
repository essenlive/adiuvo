// // Meteor.setInterval(function(){
// //     var requ = {
// //         "category": "tracker",
// //         "request" : "get",
// //         "values": [ "push", "iscalibrated" ]
// //     }
// //     console.log(requ);
// //     var options = {
// //         data : requ
// //     };
// //     console.log(options);
// //     res = HTTP.call(
// //         "GET",
// //         "http://localhost:6555",
// //         options,
// //         // function(){
// //         //     console.log("request made");
// //         // }
// //     );
// //     console.log(res);
// // },20000);
//
// Meteor.startup(function () {
//     var httpMaster = new WebSockifyServer(function (url) {
//         return {host: 'localhost', port: 6555};
//     });
//
//     // server/file.js
//
//     // define the websocket connection using the `io` global variable
//     var socket = io('http://websockify');
//     // subscribe to a data feed
//     var res = socket.emit('subscribe', 'frame');
//
//     // we can now handle connect, disconnect, and data-driven events
//     // NOTE: you must open up a new fiber using Meteor.bindEnvironment
//     // in order to perform Mongo read/writes or call Meteor methods
//     // within the socket connection
//
//     // on connect
//     socket.on('connect', Meteor.bindEnvironment(function() {
//         console.log('Connected to the websocket!');
//         // Meteor.call('methodName1');
//
//         // on data event
//         socket.on('data-event', Meteor.bindEnvironment(function(data) {
//             console.log(data);
//             // Meteor.call('methodName2');
//         }, function(e) {
//             throw e;
//         }));
//
//         // on disconnect
//         socket.on('disconnect', Meteor.bindEnvironment(function() {
//             console.log('Disconnected from the websocket!');
//             // Meteor.call('methodName3');
//         }, function(e) {
//             throw e;
//         }));
//
//     }, function(e) {
//         throw e;
//     }));
// });
