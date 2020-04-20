
$(function(){
    var gold = [
        { name: 'Samsung', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'samsung.jpg', category: 'IT & Elektronik' },
        { name: 'IKEA',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'ikea.png', category: 'IT & Elektronik' },
        { name: 'Samsung', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'samsung.jpg', category: 'IT & Elektronik' },
        { name: 'IKEA',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'ikea.png', category: 'IT & Elektronik' },
        { name: 'Samsung', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'samsung.jpg', category: 'IT & Elektronik' },
        { name: 'IKEA',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'ikea.png', category: 'IT & Elektronik' },
          ];
  
// funktion som ligger till producter
var appendlist  = function(array, location){
    var template=array.map(function(item,id){
return `

<div class="col m4 offset-s6">
<div class="card">
  <div class="card-image">
    <img class="image-company" src="pic/company/${item.picture}">

  </div>
  <div class="card-content">
  <h4 class="gold">${item.name} - <span class="gold" >${item.category}</span></h4>
  <p>${item.description}</p>
  <div class="card-action">

  <!-- Modal Trigger -->
    <a class="waves-effect  modal-trigger" href="#modal1"><p class="gold">This is a link</p></a>
   
    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
      <h4 class="gold">${item.name} - <span class="gold" >${item.category}</span></h4>
      <p>${item.description}</p>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect  btn-flat"><p class="gold">Agree</p></a>
      </div>
    </div>
   

    

  </div>
</div>
</div>

`;
    });
    $(location).html(template);
};


appendlist(gold,$('.gold-gene'));



});

$(document).ready(function(){
  $('.carousel').carousel();
});



$(document).ready(function(){
  $('.modal').modal();
});