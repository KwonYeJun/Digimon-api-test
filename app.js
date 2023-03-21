const root = document.getElementById('root');
console.log(root);

let listtest = [];

function test(i) {
  const xhr = new XMLHttpRequest();
 
  const _URL = `https://www.digi-api.com/api/v1/digimon?page=${i}`;
  xhr.open('GET', _URL);
  xhr.send();
  xhr.addEventListener('load', function () {

    const Digimon = JSON.parse(xhr.response);
    

  //   for(let i=0;i <Digimon.content.length;i++){
  //   createimg.setAttribute('src',Digimon.content[0].image)
  // }
    // console.dir(Digimon.content[0].image);
    let vvv = Digimon.content[0].image;
    console.dir(vvv);
    let createimg = document.createElement('img');
    createimg.setAttribute("src",vvv);
    root.appendChild(createimg); 
return vvv;
    
  })
}

for (let i = 1; i < 284; i++) {
  test(i);

}