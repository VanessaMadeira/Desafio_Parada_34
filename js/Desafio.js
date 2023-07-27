function escolha(){
    let div = document.getElementById("box");
    console.log(box);
    let escolha = document.getElementById("i_aluno").value;

    switch(escolha){
        case "1":
            box.style.backgroundImage = "url('/img/adenora.jpeg')";
            break;
        case "2":
            box.style.backgroundImage = "url('/img/Alejandro.jpeg')";
            break;
        case "3":
            box.style.backgroundImage = "url('/img/alexandre.jpeg')";
            break;
        case "4":
            box.style.backgroundImage = "url('/img/Cristian.jpeg')";
            break;
        case "5":
            box.style.backgroundImage = "url('/img/Gabi_i.jpeg')";
            break;
        case "6":
            box.style.backgroundImage = "url('/img/Heloisa.jpeg')";
            break;
        case "7":
            box.style.backgroundImage = "url('/img/Jeferson.jpeg')";
            break;
        case "8":
            box.style.backgroundImage = "url('/img/lucas.jpeg')";
            break;
        case "9":
            box.style.backgroundImage = "url('/img/Naiara.jpeg')";
            break;
        case "10":
            box.style.backgroundImage = "url('/img/Rafael.jpeg')";
            break;
        case "11":
            box.style.backgroundImage = "url('/img/vanessa.jpeg')";
            break;
        default:
            box.style.backgroundImage = "url('/img/Willi.jpeg')";
    }

}