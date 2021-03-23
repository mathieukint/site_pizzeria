function validateForm() {

    var valForm = true;
    console.log('b:'+valForm);

    const surname_value = document.getElementById('prenom_personne').value;
    const name_value = document.getElementById('nom_personne').value;
    const age_value = document.getElementById('age_personne').valuee;
    const mail_value = document.getElementById('mail_personne').value;
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phone_value = document.getElementById('tel_personne').value;
    const canfav_value = document.getElementById('canfav_personne').value;
    const message_value = document.getElementById('message_personne').value;

    /*---------------------------------------
    *   Gestion d'erreur pour le nom
    *---------------------------------------*/
    
    if(surname_value=='') {
        document.getElementById('prenom_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    } else if(surname_value.length<4){
        document.getElementById('prenom_Error').innerHTML = 'Le prénom doit comporter au mois quatre lettres';
        valForm=false;
    } else {
        document.getElementById('prenom_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Gestion d'erreur pour le prénom
    *---------------------------------------*/
    
    if(name_value=='') {
        document.getElementById('nom_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    } else if(name_value.length<4){
        document.getElementById('nom_Error').innerHTML = 'Le nom doit comporter au moins quatre lettres';
        valForm=false;
    } else {
        document.getElementById('nom_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Gestion d'erreur pour l'age
    *---------------------------------------*/
    if(age_value=='') {
        document.getElementById('age_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    } else if(document.getElementById('age_personne').value<=18){
        document.getElementById('age_Error').innerHTML = 'Vous êtes trop jeune';
        valForm=false;
    } else {
        document.getElementById('age_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Gestion d'erreur pour le mail
    *---------------------------------------*/
    console.log(mailformat.test(mail_value))
    if(mail_value=='') {
        document.getElementById('mail_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    } else if(mail_value.length<4){
        document.getElementById('mail_Error').innerHTML = 'Le mail doit comporter au moins quatre caractères';
        valForm=false;
    } else if(mailformat.test(mail_value)==false){
        document.getElementById('mail_Error').innerHTML = 'Le format du mail est incorrect';
        valForm=false;
    } else {
        document.getElementById('mail_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Gestion d'erreur pour le telephone
    *---------------------------------------*/
    if(phone_value=='') {
        document.getElementById('tel_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    } else if(isNaN(document.getElementById('tel_personne').value)==true){
        document.getElementById('tel_Error').innerHTML = 'Le numéro de téléphone doit être un nombre';
        valForm=false;
    } else if(isInteger(document.getElementById('tel_personne').value)==true){
        document.getElementById('tel_Error').innerHTML = 'Le numéro de téléphone doit être un entier';
        valForm=false;
    } else if(document.getElementById('tel_personne').value.length<10){
        document.getElementById('tel_Error').innerHTML = 'Le numéro de téléphone doit comporter 10 chiffres';
        valForm=false;
    } else {
        document.getElementById('tel_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Gestion d'erreur pour le canal favori
    *---------------------------------------*/
    if(canfav_value=='') {
        document.getElementById('canfav_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    } else {
        document.getElementById('canfav_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Gestion d'erreur pour le message
    *---------------------------------------*/
    if(message_value=='') {
        document.getElementById('message_Error').innerHTML = 'Le champ ne peut être vide';
        valForm=false;
    }
    else if(document.getElementById('message_personne').value.length<50){
        document.getElementById('message_Error').innerHTML = 'Le champ doit comporter au moins cinquante caractères';
        valForm=false;
    } else {
        document.getElementById('message_Error').innerHTML = '';
    }

    /*---------------------------------------
    *   Retour du formulaire
    *---------------------------------------*/
    console.log(valForm);
    return valForm;

}