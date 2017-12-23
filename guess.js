alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

document.getElementById("playButton");
playButton.addEventListener("click", function () {
    this.parentNode.classList.add("displayNone")
    document.querySelector('.lvlSelect').style.display = 'block';
})
document.querySelector('.lvlSelect').querySelector('h2').addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
    document.querySelector('#level1').style.display = 'block';
})
//document.querySelector('.lvlPack1').style.display = 'none';

var imagesLvl1 = document.getElementById("level1").querySelectorAll("img");
console.log(imagesLvl1);
for (var i = 0; i < imagesLvl1.length; i++) {
    imagesLvl1[i].addEventListener("click", function () {
        console.log(this.alt);
        deleteButtons();
        removeSelectedImages()
        this.classList.toggle("selected");
        var selectedImg = this;
        var img = this.alt;
        var imgName = img;
        img = img.split("");
        var buttonArea = document.querySelector(".buttons");
        console.log(buttonArea);
        var numNewLetter = img.length / 2;
        for (var i = 0; i < numNewLetter; i++) {
            var number = Math.floor(Math.random() * 26);
            img.push(alphabet[number]);
        }
        console.log(img);
        shuffle(img);
        console.log(img);
        for (var i = 0; i < img.length; i++) {
            //    console.log(img[i]);
            if (i % 5 == 0) {
                buttonArea.insertAdjacentHTML('beforeend', '<br>');
            }
            buttonArea.insertAdjacentHTML('beforeend', '<button>' + img[i] + '</button>');
        }
        var buttons = document.querySelector(".buttons").querySelectorAll("button");
        console.log(buttons);
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                console.log(this.textContent);
                document.querySelector(".letters").insertAdjacentHTML('beforeend', '<button>' + this.textContent + '</button>');
                if (checkWord() == imgName) {
                    modal.style.display = "block";
                    console.log("U guessed it!");
                    addCheckMark();
                    deleteButtons();
                    selectedImg.classList.remove("selected");
                }
                this.classList.add("hidden");
            })
        }

        function checkWord() {
            var word = '';
            var letterButtons = document.querySelector(".letters").querySelectorAll("button");
            for (var i = 0; i < letterButtons.length; i++) {
                word += letterButtons[i].textContent;
            }
            //            console.log("WORD!");
            //            console.log(word);
            return word;
        }

        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        function addCheckMark() {
            console.log("called Check Mark");
            console.log(selectedImg);
            selectedImg.insertAdjacentHTML('afterend', '<img class="checkMark" src="Resources/checkMark.png">');
        }

        function removeSelectedImages() {
            var images = document.getElementById("level1").querySelectorAll("img");
            for (var i = 0; i < images.length; i++) {
                images[i].classList.remove("selected");
            }
        }

    })
}

function deleteButtons() {
    var delButtons = document.querySelector(".buttons").querySelectorAll("button");
    for (var i = 0; i < delButtons.length; i++) {
        delButtons[i].remove();
    }
    //    var myNode = document.querySelector(".letters");
    //    while (myNode.firstChild) {
    //        myNode.removeChild(myNode.firstChild);
    //    }
    var delButtonsName = document.querySelector(".letters").querySelectorAll("button");
    for (var i = 0; i < delButtonsName.length; i++) {
        delButtonsName[i].remove();
    }
    var brTags = document.querySelector(".buttons").querySelectorAll("br");
    for (var i = 0; i < brTags.length; i++) {
        brTags[i].remove();
    }
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//btn.onclick = function () {
//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//console.log("before");
//console.log(myArray2);
//shuffle(myArray2);
//console.log("after");
//console.log(myArray2);
