const logo_array = [
'art/LOGOS/cannons_logo_creative.png',
'art/LOGOS/cannons_logo_draws.png',
'art/LOGOS/cannons_logo_games.png',
'art/LOGOS/cannons_logo_modding.png',
'art/LOGOS/cannons_logo_va.png',
'art/LOGOS/cannons_logo_writing.png',
];


const logo = document.getElementById("logo");
logo.addEventListener("click", changeLogo);


function changeLogo(){
    logo.style.backgroundColor = "white";
}
//logo changes to a different random logo on time interval or click
//if click, reset the timer

