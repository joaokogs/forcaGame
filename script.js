let list = [];
let secretWordTips;
let secretWord;
let fail = 6

createWord();

function createWord(){
    const indexWord = parseInt(Math.random() * words.length)
    secretWord = words[indexWord].word
    secretWordTips = words[indexWord].tips

    console.log(secretWord)
    console.log(secretWordTips)
}

selectWord()

function selectWord(){
    const tips = document.getElementById("tipsText");
    tips.innerHTML = secretWordTips;
    const wordScreen = document.getElementById("secretWord");
    wordScreen.innerHTML = "";

    for(i = 0; i < secretWord.length; i++){
        if(list[i] == undefined){
            list[i] = " &nbsp;"

            wordScreen.innerHTML =  wordScreen.innerHTML + "<div class='letters'>" + list[i] + "</div>"
        } else{
            wordScreen.innerHTML =  wordScreen.innerHTML + "<div class='letters'>" + list[i] + "</div>"
        }
    }
}

function check(letter){
    document.getElementById("key-" + letter).disabled = true;
    if(fail > 0){
        changeStyle("key-" + letter);
        compareList(letter);
        selectWord();
    }
}

function changeStyle(key){
    document.getElementById(key).style.background = "#222222";
    document.getElementById(key).style.color = "#db3535";
}

function compareList(letter){
    const after = secretWord.indexOf(letter)

    if(after < 0){
        fail--
        changeImage();
        if(fail == 0){
            openModal("Não foi dessa vez...", "Tente novamente")
        }
    } else{
        for(i = 0; i < secretWord.length; i++){
            if(secretWord[i] == letter){
                list[i] = letter;
            }
        }
    }

    let wins = true;
    for(i = 0; i < secretWord.length; i++){
        if(secretWord[i] != list[i]){
            wins = false;
        }
    }

    if(wins == true){
        openModal("Parabéns","Você acertou a palavra!")
        fail = 0;
    }
}

function changeImage(){
    switch(fail){
        case 5:
            document.getElementById("img").style.background = "url('forca01.png')";
            break;
        
        case 4:
            document.getElementById("img").style.background = "url('forca02.png')";
            break;

        case 3:
            document.getElementById("img").style.background = "url('forca03.png')";
            break;

        case 2:
            document.getElementById("img").style.background = "url('forca04.png')";
            break;
            
        case 1:
            document.getElementById("img").style.background = "url('forca05.png')";
            break;
            
        case 0:
            document.getElementById("img").style.background = "url('forca06.png')";
            break;
        
        default: 
            document.getElementById("img").style.background = "url('forca.png')";
            break;
    }
}

function openModal(title, message){
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerHTML = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message



    $("#myModal").modal({
        show: true
    });
}

let btnReset = document.getElementById("reset")

btnReset.addEventListener("click", function(){
    location.reload();
})