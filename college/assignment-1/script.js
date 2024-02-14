function deliveryForm(id) {
    const takeoutForm = document.getElementById("takeoutForm");
    const deliveryForm = document.getElementById("deliveryForm");
    const takeoutCheckbox = document.getElementById("takeout");
    const deliveryCheckbox = document.getElementById("delivery");

    if(id === "delivery"){
        showDeliveryFrom(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox);
    } else {
        showTakeoutForm(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox);
    }
}

function showTakeoutForm(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox ){
    takeoutCheckbox.checked = true;
    deliveryCheckbox.checked = false;
    deliveryForm.setAttribute("hidden", true);
    takeoutForm.removeAttribute("hidden"); 
}

function showDeliveryFrom(takeoutForm, deliveryForm, takeoutCheckbox, deliveryCheckbox ){
    takeoutCheckbox.checked = false;
    deliveryCheckbox.checked = true;
    deliveryForm.removeAttribute("hidden"); 
    takeoutForm.setAttribute("hidden", true);
}

function submitRequest(){
    const message = document.getElementById("submitMessage");
    message.removeAttribute("hidden", true);
}
