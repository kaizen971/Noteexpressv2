
import error from './Error.js';
import validation from './validation.js';
import Enregistrment from './enregistrement.js';
import cardscolor from './card-color.js';


let cardcolor = new cardscolor();
let enregistrement = new Enregistrment();
let Error = new error();
let Validation = new validation();
var cards2 = [];
var clickpoubelle= false;
let user ;
let verifconnexion = false;
let statueco = false;



/*-----------------------------------------------Initialisation des stockages -----------------------------------------------*/
var nom = window.location.pathname;

console.log(nom);


statueco = enregistrement.recupérationsave(statueco,"statuedeco")

if(statueco){

   enregistrement.msgconnexion(statueco.identifiant)
  let btndeconnexion = document.querySelector(".btndeconnexion")

              btndeconnexion.classList.remove("invisible");
}
else{
 
  enregistrement.msgconnexion("Veuillez-vous connecter")

}


if (localStorage.getItem("userJSON")==null){ // Si le localStorage est vide , retourner un tableau vide
   user = [ 
 ];

 let admin ={
    identifiant : "admin",


    password : "password",

 }

   user.push(admin);
  
   enregistrement.enregistrement(user,"userJSON")
} 
else{ // sinon retourner le tableau présent dans le cache. 
 
  user = enregistrement.recupérationsave(user,"userJSON")
  
}


let cards;
if (localStorage.getItem("testJSON")==null){ 
   cards = [
 ]
 enregistrement.enregistrement(cards,"testJSON")
 
} 
else{ // sinon retourner le tableau présent dans le cache. 

   cards = enregistrement.recupérationsave(cards,"testJSON")
  
  
}

  if (nom==="/inte.html"){
  console.log("je suis dans l'intégration");

  if (localStorage.getItem("inteJSON")==null){ 
    cards = [
  ]
  enregistrement.enregistrement(cards,"inteJSON")
  
 } 
 else{ // sinon retourner le tableau présent dans le cache. 
 
    cards = enregistrement.recupérationsave(cards,"inteJSON")
   
   
 }
  
  }
  if (nom==="/extend.html"){
    console.log("je suis dans l'extends");
  
    if (localStorage.getItem("extendJSON")==null){ 
      cards = [
    ]
    enregistrement.enregistrement(cards,"extendJSON")
    
   } 
   else{ // sinon retourner le tableau présent dans le cache. 
   
      cards = enregistrement.recupérationsave(cards,"extendJSON")
     
     
   }
  
  }if(nom==="/dev.html"){
  
    console.log("je suis dans le dev");

    if (localStorage.getItem("devJSON")==null){ 
      cards = [
    ]
    enregistrement.enregistrement(cards,"devJSON")
    
   } 
   else{ // sinon retourner le tableau présent dans le cache. 
   
      cards = enregistrement.recupérationsave(cards,"devJSON")
     
     
   }
  
  }
/*------------------------------------------------------Fin de l'initialisation des stockages --------------------------------------------------*/



// On instancie Vue
// On vise la div générale du html pour initialiser le projet avec Vue
let app = new Vue({
    el: '#app',
    // Les données qu'on utilisera dans les objets. 
    data: { 
      question: '',
      reponse: '',
      cards: cards,
      identifiant: '',
      password: '',
      connexionident: '',
      connexionpassword: '',
      user:user
     
    },

    // Ici seront contenues toutes les fonctions de l'appli
    methods: {
      
      ajoutcard: function(){ // Sauvegarde une fiche grâce au input dans le cache.
        if(statueco){
        let questionInput = document.querySelector('#question'); /* Récupere la variable présent dans le input de réponse*/
        let reponseInput = document.querySelector('#reponse'); /* Récupere la variable présent dans le input de question*/
          let categorieInput = document.querySelector('#categorie');
        

          let color = cardcolor.cardscolor(categorieInput.value);

            console.log(color);
        
          let objet = { /* Création d'un objet */
          
          
          
          question: questionInput.value,

          reponse : reponseInput.value,
          
          flipped: false ,
          
          delete: false ,/* Important pour le flippe de la carte */
          
          active: false,
          
          categorie: color
        
          
        }
          
          
        
        
         console.log(categorieInput.value);
         console.log(questionInput);
         
         let cards1; // Clone de 'card' pour ajouter dans une des sauvegarde 

         /*      Récupération des Array list pour ajouter l'objet selon la catégorie choisie       */
          if (categorieInput.value === "css" || categorieInput.value==="html"){ 

          if (localStorage.getItem("inteJSON")==null){ 
            cards1 = [
          ]
          enregistrement.enregistrement(cards1,"inteJSON")
          
         } 
         else{ // sinon retourner le tableau présent dans le cache. 
         
            cards1 = enregistrement.recupérationsave(cards,"inteJSON")

      
        }

        cards1.push(objet);
        console.log("probleme");
        console.log(categorieInput.value);
        enregistrement.enregistrement(cards1, "inteJSON")
         /* Convertie en JSON avec la key "testJSON" */
        //  window.location.reload();
      }
          if (categorieInput.value==="git" || categorieInput.value==="view" || categorieInput.value==="boot"){
          if (localStorage.getItem("extendJSON")==null){ 
            cards1 = [
          ]
          enregistrement.enregistrement(cards1,"extendJSON")
          
         } 
         else{  
         
            cards1 = enregistrement.recupérationsave(cards,"extendJSON")

      
        }
          //On clone la liste de card de extension pour ajouter l'ajout
        cards1.push(objet);
         enregistrement.enregistrement(cards1, "extendJSON")
         /* Convertie en JSON avec la key "testJSON" */
         window.location.reload();

    }
        if (categorieInput.value==="js" ||  categorieInput.value==="php"){
          if (localStorage.getItem("devJSON")==null){ 
            cards1 = [
          ]
          enregistrement.enregistrement(cards1,"devJSON")
          
         } 
         else{ // sinon retourner le tableau présent dans le cache. 
         
            cards1 = enregistrement.recupérationsave(cards,"devJSON")

      
        }

        //On clone la liste de card de extension pour ajouter l'ajout

          cards1.push(objet);
          enregistrement.enregistrement(cards1, "devJSON")
          /* Convertie en JSON avec la key "testJSON" */

          window.location.reload();
        }

          
          
      }
      else{
       
       Error.errormsg( "connexion" , "parent" , "Veuillez-vous connecter");
        
       
      }
      },


      Onclickpoubelle:function(){
        clickpoubelle = !clickpoubelle;
        console.log(clickpoubelle);
        document.querySelector('#icondelete').classList.add("change");
        if(clickpoubelle){
          
          Object.keys(cards).forEach(function (key) {
           
          })
          

        }
        else{
          
          Object.keys(cards).forEach(function (key) {
            
            if(!cards[key].delete){
             
              cards2.push(cards[key]);
              console.log(cards2);
              
              
           }
           
          })
          cards=cards2;
          if (nom==="/inte.html"){
            enregistrement.enregistrement(cards,"inteJSON");

          }
          if (nom==="/extend.html"){
            enregistrement.enregistrement(cards,"extendJSON");

          }
          if (nom==="/dev.html"){
            enregistrement.enregistrement(cards,"devJSON");
          }

          window.location.reload();

        }

      },
      
     toggleCard: function(card) { 
       console.log("click")// Changement de classe d'un élement objet cards. Switch entre flipped et !flipped
        if(clickpoubelle){
          
          card.delete = !card.delete
          
          card.active=!card.active
         
        }
        else{
          card.flipped = !card.flipped
        }
      },
      
      
      inscription: function(){
        let identifiantinput = document.querySelector("#identifiant")
        let passwordinput = document.querySelector("#password")
      
        let objet2 ={
            identifiant : identifiantinput.value,

            password : passwordinput.value

        }

        
        let longueur = user.length;
        let verif = false;
        for(let i=0; i<longueur; i++){
            console.log(user[i].identifiant)
          if(identifiantinput.value == user[i].identifiant ){

            verif=true
            console.log("Identifiant déja utilisé");
            console.log(verif);
            Error.errormsg('password', "modal-dialog", "Identifiant déja utilisé");
            
          }
       




        }
        if(identifiantinput.value==""){

            verif=true
            console.log("Identifiant vide")
            Error.errormsg('password', "modal-dialog", "Identifiant vide");

        }

        if(passwordinput.value==""){

          verif=true
          console.log("password vide")
          Error.errormsg('password', "modal-dialog", "Password vide");

        }
      


        if (!verif){
          user.push(objet2); 

          
            enregistrement.enregistrement(user,"userJSON")
           console.log("Enregistré");
           Validation.validationmsg("password","modal-dialog", "Vous etes enregistré")
      
   
        }
        else{

          console.log("Réessayez");

        }
    },
      connexion: function() {
          let identifiantconnexion = document.querySelector("#identifiant");
          let passwordconnexion = document.querySelector("#password");

          

          let longueur = user.length;
          
          for(let i=0; i<longueur; i++){
              
            if(identifiantconnexion.value == user[i].identifiant && passwordconnexion.value == user[i].password ){
  
              verifconnexion=true;
              console.log(passwordconnexion.value)
              console.log(user[i].password)
              statueco ={
                
                
                connexion : true,
                identifiant : identifiantconnexion.value

              },


              enregistrement.enregistrement(statueco, "statuedeco")
              
            
            }
           
           
         
          }

          if(passwordconnexion.value==""){

            verifconnexion=false;
            
            
            Error.errormsg('password', "modal-dialog", " Champs vide");
            
        
            
          }


          if(verifconnexion){
           
              enregistrement.msgconnexion(identifiantconnexion.value)
              window.location.reload();
              console.log("connexion réussie")
              Validation.validationmsg("password","modal-dialog", "Connexion a reussi");




          }
          else{
            console.log("identifiant incorrect")
            Error.errormsg('password', "modal-dialog", "Identifiant incorrect");

          }





      },

      deconnexion: function(){
        statueco = false
        enregistrement.enregistrement(statueco, "statuedeco")


        window.location.reload();


      },

      filterhtml: function(){

        var nom = window.location.href

        console.log(nom);
        let longueur=nom.length;
        // for(let i=0; i< longueur ; i++){

            

          let  pos = nom.indexOf('dev.html#html');
          console.log(pos);

        // }





      }

    
      
    },

      
     
});

