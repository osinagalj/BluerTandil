// Remove Items From Cart
$('a.remove').click(function(){
    event.preventDefault();
    $( this ).parent().parent().parent().hide( 400 );
   
  })
  
  // Just for testing, show all items
    $('a.btn.continue').click(function(){
      $('li.items').show(400);
    })

var month = (new Date()).getMonth();
var myURL = 'https://api.whatsapp.com/send?phone=542235386914&text=Me%20gustar%C3%ADa%20saber%20el%20precio%20de%20los%20perfumes%20para%20auto'; //+ month + '&param=1';
document.getElementById('myUniqueLinkId').href = myURL;



function miFuncion()
{   
    
    product = document.getElementById('ProducName').innerHTML;
    price = document.getElementById('Price').innerHTML;
    alert("producto = " + product + " precio = " + price);
}



