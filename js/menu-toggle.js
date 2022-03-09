const mt = document.querySelector('.mt input');
const nav = document.querySelector('nav ul');

mt.addEventListener('click', function (){
nav.classList.toggle('slide');
});


function pindah(url)
        {
                window.location = url;
        }
