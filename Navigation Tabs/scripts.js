// initialize event listeners for the tabs
window.addEventListener('load', function()
{
    document.getElementById('home').addEventListener('click', activateTab);;
    document.getElementById('thoughts').addEventListener('click', activateTab);;
    document.getElementById('about').addEventListener('click', activateTab);;
    document.getElementById('txt').innerHTML = "<br>This is home";
});

// activate tab function
function activateTab(event)
{
    // store the current id in currID
    var currID = this.id;
    
    // reset all the active links
    document.getElementById('home').className = '';
    document.getElementById('thoughts').className = '';
    document.getElementById('about').className = '';
    
    // sets the current tab to active
    document.getElementById(currID).className = 'active';
    
    // set the text under the tabs based on which tab it is
    if(currID === 'home')
        document.getElementById('txt').innerHTML = "<br>This is home";
    else if(currID === 'thoughts')
        document.getElementById('txt').innerHTML = "<br>This is thoughts";
    else if(currID === 'about')
        document.getElementById('txt').innerHTML = "<br>This is about";
}