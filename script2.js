// VARIABLE DECLARATIONS
const menu_items = {
    hotdogs: 5.25,
    fries: 3.75,
    drinks: 2.50
}

const quant = {
    hotdogs: 0,
    fries: 0,
    drinks: 0
}

const special = 10.00;
const discount = .9;
const tax = 0.0625;

// FUNCTION DECLARATIONS
function menu()
{
    alert(
    "JOE'S MENU\n" +
    "\u2022 Hotdogs: $" + menu_items['hotdogs'] +
    "\n\u2022 Fries: $" + menu_items['fries'] +
    "\n\u2022 drinks: $" + menu_items['drinks'] +
    "\n\nSPECIALS\n \u2022 1 hotdog, 1 fry, and a drink: $10\n" +
    "\u2022 10% off orders of $30 or more!"
    );
}

function showMoney(floatNum) 
{
    if (Number.isInteger(floatNum)) {
        str = floatNum.toString() + ".00";
        return str;
    } else {
        const dec = floatNum.toString().split('.')[1].length;
        if (dec == 1) {
            str = floatNum.toString() + "0";
            return str;
        } else {
            roun = Math.round(floatNum * 100) / 100;
            return roun.toString();
        }
    }
}

// MENU ALERT AND ORDER PROMPT
menu();

for (const items in quant) {
    let input = prompt(`How many ${items} would you like?`);
    quant[items] = input;
    if ((quant[items]) == "") {
        quant[items] = 0;
    } else {
        quant[items] = parseFloat(quant[items]);
    }
}

//DISPLAYING VARIABLES
let subtotal = 0;
for (const items in quant) {
    document.getElementById(`${items}-qty`).innerHTML = quant[items];
    document.getElementById(`${items}-price`).innerHTML = `$${menu_items[items]}`;
    
    let itemTotal = quant[items] * menu_items[items];
    document.getElementById(`${items}-total`).innerHTML = `$${itemTotal}`;
    subtotal += itemTotal;
    document.getElementById(`${items}-total`).innerHTML = `$${showMoney(itemTotal)}`;
}

if (quant[`hotdogs`] == 1 && quant[`fries`] == 1 && quant[`drinks`] == 1) {
    subtotal = special;
    document.getElementById('discount').innerHTML = `$0.00`;
} else if (subtotal >= 30) {
    let dis = subtotal * .1;
    document.getElementById('discount').innerHTML = `$${showMoney(dis)}`;
    subtotal = subtotal * discount;
} else {
    document.getElementById('discount').innerHTML = `$0.00`;
}
document.getElementById('subtotal').innerHTML = `$${showMoney(subtotal)}`;
document.getElementById('taxes').innerHTML = `$${showMoney(subtotal * tax)}`;
document.getElementById('total').innerHTML = `$${showMoney(subtotal + (subtotal*tax))}`;
