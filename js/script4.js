const btns = document.querySelectorAll('button'); //querySelector works ONLY for 1 button
const overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Clicked!');
// };

// btn.addEventListener('click', () => {
//     alert('Click!!');
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
                                //event
// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });

//btn.addEventListener('click', deleteElement); //FOR QUERYSELECTOR 
//overlay.addEventListener('click', deleteElement); //FOR QUERYSELECTOR 
btns.forEach( btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});



const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});