function add(a,b,callback){

    console.log("Adding two numbers");
    callback(a+b);
}
add(2,3,function(result){
    console.log("Addition is done and the result is: " + result);
});

function createOrder(item,proceedPayment){
    console.log("Creating order for item: " + item);
    let orderId = Math.floor(Math.random() * 1000);
    proceedPayment(orderId);
}

createOrder("Laptop",function proceedPayment(orderId){
    console.log("Processing payment for order: " + orderId);
    
});



function createOrder(item, callback) {
    setTimeout(() => {
        console.log("✅ Order created for:", item);

        let orderId = Math.floor(Math.random() * 1000);

        callback(orderId);
    }, 1000);
}

function proceedPayment(orderId, callback) {
    setTimeout(() => {
        console.log("💳 Payment successful for Order ID:", orderId);

        let paymentId = Math.floor(Math.random() * 1000);

        callback(paymentId);
    }, 1000);
}

function verifyPayment(paymentId, callback) {
    setTimeout(() => {
        console.log("✔️ Payment Verified. Payment ID:", paymentId);

        let isVerified = true;

        callback(isVerified);
    }, 1000);
}

function generateInvoice(orderId, callback) {
    setTimeout(() => {
        console.log("🧾 Invoice Generated for Order ID:", orderId);

        let invoiceId = "INV" + Math.floor(Math.random() * 1000);

        callback(invoiceId);
    }, 1000);
}

function sendEmail(invoiceId, callback) {
    setTimeout(() => {
        console.log("📧 Email Sent with Invoice:", invoiceId);

        callback();
    }, 1000);
}

// Callback Hell

createOrder("Laptop", function (orderId) {

    proceedPayment(orderId, function (paymentId) {

        verifyPayment(paymentId, function (isVerified) {

            if (isVerified) {

                generateInvoice(orderId, function (invoiceId) {

                    sendEmail(invoiceId, function () {

                        console.log("🎉 Order Completed Successfully!");

                    });

                });

            }

        });

    });

});