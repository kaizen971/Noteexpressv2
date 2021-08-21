

class error{


  dynamite(){
    let form = document.querySelector("#parent");
    let span = document.querySelector('.form-error');
    
   
        
        form.removeChild(span);


  }
 
   errormsg(idName, parentId, message) {
    var form = document.getElementById(parentId);
    let span = document.querySelector('.form-error');
    let span2= document.querySelector('.form-validation');
    if (span == null){
    if(span2 != null){

      form.removeChild(span2);
    }
    
    var newDiv = document.createElement("span");
    let selector = idName;
  
    
    var newContent = document.createTextNode( `${selector} is invalid, ${message} !`);
    
    newDiv.appendChild(newContent);
     newDiv.classList.add('form-error');
    
      var currentDiv = document.querySelector(`#${selector}` );
         
    
    
    form.insertBefore(newDiv, currentDiv.nextSibling);
    } else{
        form.removeChild(span)
        
        var newDiv = document.createElement("span");
        let selector = idName;

        
        var newContent = document.createTextNode( `${selector} is invalid, ${message} !`);
        
        newDiv.appendChild(newContent);
         newDiv.classList.add('form-error');
        
          var currentDiv = document.querySelector(`#${selector}` );
             
        
        
        form.insertBefore(newDiv, currentDiv.nextSibling);

    }
}
   




 
}

export default error;


