// validates the input from user to make sure its optimal
function validate()
{
    // prevent the default action when the submit button is pressed
    event.preventDefault();
    
    // check to see if potatoes has a value
    if(document.getElementById('potatoes').value == '')
    {
        alert('Please enter the amount of potatoes (0 if not buying)');
        document.getElementById('potatoes').focus();
    }
    
    // also check to see if tomatoes has a value
    else if(document.getElementById('tomatoes').value == '')
    {
        alert('Please enter the amount of tomatoes (0 if not buying)');
        document.getElementById('potatoes').focus();
    }
    
    // check to see if number is negative, if so set the value to 0
    if(parseInt(document.getElementById('potatoes').value, 10) < 0)
        document.getElementById('potatoes').value = 0;
    if(parseInt(document.getElementById('tomatoes').value, 10) < 0)
        document.getElementById('tomatoes').value = 0;
    
    // if all the tests above pass, then proceed to estimate the value
    else
    {
        estimate();
    }
}

// the function that calculates the estimate
function estimate()
{
    // store the values in variables
    var b_potatoes = parseInt(document.getElementById('potatoes').value, 10);
    var b_tomatoes = parseInt(document.getElementById('tomatoes').value, 10);
    var b_delivery;
    
    // grab the radio buttons and store it in temp
    var temp = document.getElementById('cart').delivery;
    
    // loop through until radio button is found and then store it in b_delivery
    for(var i = 0; i < temp.length; i++)
    {
        if(temp[i].checked == true)
            b_delivery = temp[i].value;
    }
    
    // calculate the estimate value of the products
    var estimate = (b_potatoes * 2) + (b_tomatoes * 1);
    
    // calculate the delivery fee
    var shipping = 0;
    if(b_delivery == 'mail')
    {
        shipping = 2;
        estimate += shipping;
    }
    else if(b_delivery == 'ups')
    {
        shipping = 5;
        estimate += shipping;
    }
        
    // add 15% tax to the total
    estimate *= 1.15;
    
    // set the value of the estimate input box to the estimate value calculated
    document.getElementById('txt-estimate').value = '$' + estimate.toFixed(2);
    
    var total_products = b_potatoes + b_tomatoes;
    var estimate_notax = estimate/1.15;
    
    // set the value of the results div
    document.getElementById('results').innerHTML = '<br>Total items: $' + total_products;
    document.getElementById('results').innerHTML += '<br>Total shipping: $' + shipping;
    document.getElementById('results').innerHTML += '<br>Total (without tax): $' + estimate_notax.toFixed(2);
    document.getElementById('results').innerHTML += '<br>Total (with tax): $' + estimate.toFixed(2);
}

// clears the data in the fields
function clearScreen()
{
    document.getElementById('results').innerHTML = '';
    document.getElementById('potatoes').value = '';
    document.getElementById('tomatoes').value = '';
    document.getElementById('tomatoes').value = '';
    document.getElementById('txt-estimate').value = '';
    document.getElementById('cart').delivery[0].checked = true;
}