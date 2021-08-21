class Validation{


    validationmsg(idName, parentId){
    
        var form = document.getElementById(parentId);
        let span = document.querySelector('.form-error');
        let span2= document.querySelector('.form-validation');


        if ( span2 == null || span != null ){
            if(span != null){
            form.removeChild(span);
            }
            if(span2 !== null){
                form.removeChild(span2);



            }
        var newDiv = document.createElement("span");
        let selector = idName;
      
        
        var newContent = document.createTextNode( `${selector} a réussi `);
        
        newDiv.appendChild(newContent);
         newDiv.classList.add('form-validation');
        
          var currentDiv = document.querySelector(`#${selector}` );
             
        
        
            form.insertBefore(newDiv, currentDiv.nextSibling);
        } else if (span2){
            
            form.removeChild(span2);
     
    
        
        }
    }


}


export default Validation;












