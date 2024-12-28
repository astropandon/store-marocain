document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const header = document.getElementById('navbar');
    const closeHeaderBtn = document.getElementById('closeHeader');
    const shopLink = document.getElementById('sho');
    const dropdown = document.getElementById('mon');
    const closeDropdownBtn = document.getElementById('closeHead');
    
    
    menuIcon.addEventListener('click', function(event) {
        header.style.display = 'flex'; 
        event.stopPropagation(); 
});


closeHeaderBtn.addEventListener('click', function(event) {
    header.style.display = 'none'; 
    event.stopPropagation();
});


shopLink.addEventListener('click', function(event) {
    dropdown.style.display = 'flex';
    dropdown.style.flexDirection = 'column'; 
    event.stopPropagation();
});


closeDropdownBtn.addEventListener('click', function(event) {
    dropdown.style.display = 'none';
    event.stopPropagation();
});


document.addEventListener('click', function(event) {
    if (!header.contains(event.target)) {
        header.style.display = 'none';
    }
    if (!dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});


window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        header.style.display = 'block'; 
        dropdown.style.display = 'none'; 
    } else {
        header.style.display = 'none'; 
    }
});
});
