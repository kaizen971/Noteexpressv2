class Cardcolor{

            
    
            cardscolor(categorie){
                let cardcolor;
                console.log(categorie)
                switch (categorie) {
                    case 'html':
                        cardcolor = "#4ABB7B";
                        
                        break;

                    case 'css':
                        cardcolor = "#A3E4D7";
                        break;

                    case 'git':
                        cardcolor = "#5DADE2";
                        break;

                    case 'view':
                        cardcolor = "#27AE60";
                        break;

                    case 'boot':
                        cardcolor ="#A569BD";
                        break;


                    case 'js':
                        cardcolor ="#F8C471 ";
                        break;

                    case 'php':
                        cardcolor = "#E59866";
                        break;

                    



                       




                }


               

                return cardcolor;






            }









}

export default Cardcolor;