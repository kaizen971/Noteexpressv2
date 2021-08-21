class Enregistrement{
        
        enregistrement(Nomobjet, keysave){
           
           const myjson = JSON.stringify(Nomobjet); 
            localStorage.setItem(keysave, myjson);

            $.post('api.php', {"user": myjson}).then(function(data){

                console.log(data);

            });


           


        }

        recupérationsave(Nomobjet, keysave ){


            let text = localStorage.getItem(keysave); /* Récupere le cache ayant la clé "testJson" */
            Nomobjet = JSON.parse(text);/* Convertie le JSon(en format text) en objet(format objet) */

            return Nomobjet
        }

        msgconnexion(utilisateur){

            var paragraphe = document.getElementById("Messageconnexion");

            var newContent = document.createTextNode( `Bienvenue, ${utilisateur} !`);
            paragraphe.appendChild(newContent);
        }

        msgsuppression(idName){

            var paragraphe = document.getElementById(`${idName}`);

            var newContent = document.createTextNode( `Supression autorisée !`);
            paragraphe.appendChild(newContent);
        }

        recupvar(){


                let myjson = "je suis là";
            $.post('api.php', {"user": myjson}).then(function(data){

                console.log(myjson);

            });




        }









}

export default Enregistrement;