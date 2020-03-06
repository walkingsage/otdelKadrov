

let bday = document.getElementById('birthday'),
age = document.getElementById('age'),
name = document.getElementById('name'),
familya = document.getElementById('familya'),
plaseofbirth = document.getElementById('placeofbirtch'),
grazjdanstvo = document.getElementById('grazjdanstvo'),
endButton = document.querySelector('endbutton');
  
 bday.onblur = function (event) {
    function get_current_age(date) {
          return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
        }
        age.value = (get_current_age(bday.value));

    };
    
const hideElem = elem => {
    elem.style.display = 'none';
}

hideElem(age);


name.addEventListener('keyup',function(){
    name.value = name.value.replace(/[0-9,-.,:+/*]/, '');
});

name.addEventListener('input',function(){
    name.value = name.value.replace(/[0-9,-.,:+/*]/g, '');
});

familya.addEventListener('keyup',function(){
    familya.value = familya.value.replace(/[0-9,-.,:+/*]/, '');
});

familya.addEventListener('input',function(){
    familya.value = familya.value.replace(/[0-9,-.,:+/*]/g, '');
});

plaseofbirth.addEventListener('keyup',function(){
    plaseofbirth.value = plaseofbirth.value.replace(/[0-9,-.,:+/*]/, '');
});

plaseofbirth.addEventListener('input',function(){
    plaseofbirth.value = plaseofbirth.value.replace(/[0-9,-.,:+/*]/g, '');
});

grazjdanstvo.addEventListener('keyup',function(){
    grazjdanstvo.value = grazjdanstvo.value.replace(/[0-9,-.,:+/*]/, '');
});

grazjdanstvo.addEventListener('input',function(){
    grazjdanstvo.value = grazjdanstvo.value.replace(/[0-9,-.,:+/*]/g, '');
});