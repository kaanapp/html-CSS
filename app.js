
//ELEMENT EKLEME

// const cardBody = document.querySelectorAll(".card") [1];
// console.log (cardBody);

// const link = document.createElement("a");
// link.id = "goBlogWebSite";
// link.className = "btn btn-dark btn-sm mt-3";
// link.href="http://youtube.com";
// link.target="_blank";
// link.innerHTML="Youtube'a Git !";

// cardBody.appendChild(link);

// console.log(link);

//ELEMENT  SİLME

// const cardbody = document.querySelectorAll(".card")[0];
// const todolist = document.querySelectorAll(".list-group") ;
// const selectUl = document.querySelectorAll(".list-group-item");
// const selectUl1 = document.querySelector(".list-group-item");
// const parents = selectUl1.parentElement;

// selectUl1.remove(); // remove metodu ile list group itemlerinden sıfırıncı indekstekini kaldırdık.
// selectUl[selectUl.length-1].remove() // list group itemlerinden sonuncusunu silmek için kullanılır.
// console.log(selectUl);
// console.log(selectUl.length);
// console.log(todolist);
// console.log(parents);

//ELEMENT YER DEĞİŞTİRME
const cardbody = document.querySelectorAll(".card")[1];

console.log(cardbody); // cardbody'i yakaladık konsola çıktı olarak verdik

const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent = "TODO LİSTESİ YENİİİ!!";

console.log(cardbody.childNodes[1]); // cardbody'nin çocuklarını node türünde döndürüp(replacechild metodu nodechild özelliği isterrrr!) 1. indexteki h5 etiketli yazıyı yakaladık.
cardbody.replaceChild(newTitle,cardbody.childNodes[1]); // yeni etiketimi, child nodelardan 1. indextekinin yerine koy.