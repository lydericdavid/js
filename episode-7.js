alert('bienvenu dans ce septième episode');
    var age = prompt('quel age avez vous? ');

    if(age < 0) {
        alert("on ne vous gère pas");
        prompt('quel age avez vous');
    }
    if(age >= 18) {                     //if et else représentent des conditions.si l'age est inférieur à zéro la boucle revient continuellement.
    alert("vous etes majeur");
    } else {
    alert("vous etes mineur");
    }
