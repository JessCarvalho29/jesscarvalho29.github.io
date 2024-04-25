let deliveryOrTakeout = 0;

function deliveryForm(id) {
    const takeoutForm = document.getElementById("takeoutForm");
    const deliveryForm = document.getElementById("deliveryForm");
    const takeoutCheckbox = document.getElementById("takeout");
    const deliveryCheckbox = document.getElementById("delivery");
    const nameDelivery = document.getElementById("nameDelivery");
    const nameTakeout = document.getElementById("nameTakeout");

    if(id === "delivery"){
        showDeliveryFrom(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox, nameDelivery);
    } else {
        showTakeoutForm(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox, nameTakeout);
    }

    deliveryOrTakeout = id;
}

function showTakeoutForm(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox, nameTakeout){
    takeoutCheckbox.checked = true;
    deliveryCheckbox.checked = false;
    deliveryForm.setAttribute("hidden", true);
    takeoutForm.removeAttribute("hidden"); 
    nameTakeout.setAttribute("required", true);
    nameDelivery.removeAttribute("required");
}

function showDeliveryFrom(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox, nameDelivery){
    takeoutCheckbox.checked = false;
    deliveryCheckbox.checked = true;
    deliveryForm.removeAttribute("hidden"); 
    takeoutForm.setAttribute("hidden", true);
    nameDelivery.setAttribute("required", true);
    nameTakeout.removeAttribute("required");
}

function submitRequest(){
    localStorage.clear('name');
    localStorage.clear('quantity');
    localStorage.clear('deliveryOrTakeout');

    if(deliveryOrTakeout === "delivery"){
        const nameDelivery = document.getElementById("nameDelivery");
        const nameDeliveryValue = nameDelivery.value;
        localStorage.setItem('name', nameDeliveryValue);
    } else {
        const nameTakeout = document.getElementById("nameTakeout");
        const nameTakeoutValue = nameTakeout.value;
        localStorage.setItem('name', nameTakeoutValue);
    }
    
    const quantity = document.getElementById("quantity");
    const quantityValue = quantity.value;
    localStorage.setItem('quantity', quantityValue);

    const getPizzaWay = deliveryOrTakeout;
    localStorage.setItem('deliveryOrTakeout', getPizzaWay);

    // console.log(localStorage.getItem('name'));
    // console.log(localStorage.getItem('quantity'));
    // console.log(localStorage.getItem('deliveryOrTakeout'));

}

function displayMessage(){
    const divMessage = document.getElementById("submitMessage");
    let html;
    const quantity = localStorage.getItem('quantity');

    if(quantity == 1){
        html = `
        <h1>Thank you for buying with us, ${localStorage.getItem('name')}!</h1>
        <br>
        <p>We received your order of ${localStorage.getItem('quantity')} pizza. We'll send updates about the ${localStorage.getItem('deliveryOrTakeout')} to your cellphone.</p>`;
    } else {
        html = `
        <h1>Thank you for buying with us, ${localStorage.getItem('name')}!</h1>
        <br>
        <p>We received your order of ${quantity} pizzas. We'll send updates about the ${localStorage.getItem('deliveryOrTakeout')} to your cellphone.</p>`;
    }

    divMessage.innerHTML = html;
}

