//ul
let acc = document.querySelectorAll(".accordion");
let img = document.querySelector('.butImg');

acc.forEach(item => {
    item.addEventListener("click",() =>{
        item.classList.toggle("active");
        let panel = item.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
          img.style.display = 'block';
        } else {
          panel.style.display = "block";
          img.style.display = 'none';
        }
        panel.addEventListener('click', (event) => {
          item.innerText = event.target.innerText;
        })
    })
})


let liAcc = document.querySelectorAll(".liAcc");

liAcc.forEach(item => {
    item.addEventListener("click",() =>{
        item.classList.toggle("active");
        let panel = item.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    })
})
