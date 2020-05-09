alert('bienvenu dans ce huitième episode');
    var nom = prompt('Quel est votre nom?');
    var sexe = prompt('De quel sexe etes-vous? homme ou femme?');
        if(sexe != "homme" && sexe != "femme"){
            alert("ecrivez soit homme soit femme.");
            prompt('De quel sexe etes-vous? homme ou femme?');
        }
      if(sexe=="homme"){
          alert("Bonjour Monsieur " + nom);
      }else{
          alert("Bonjour Madame ");
      }
        
