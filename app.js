var player1Name = prompt("Write Your name Player1 CIRCLE");
var player2Name = prompt("Write Your name Player2 CROSS");



var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');
var box9 = document.getElementById('9');
var stats = document.getElementsByClassName('stats');

stats[0].children[1].children[1].innerText = player2Name;
stats[0].children[0].children[1].innerText = player1Name;

var player1 = true
var myCrossList;
var myCircleList;
var crosswins;
var circlewins;



function clicked(e) {
    if (!crosswins && !circlewins) {
        var game = true;
        if (e.children[0].parentNode.classList[4] == undefined) {
            // console.log(e.children[0].parentNode.classList[4])
            if (player1 == true) {
                e.children[0].src = "circle.png";
                e.classList.add("circle");
                player1 = false;
            } else {
                e.children[0].src = "cross.png";
                e.classList.add("cross");
                player1 = true;
            }
        }


        if (box1.classList[4] == "cross") {
            if (box2.classList[4] == "cross" && box3.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box1.classList[4] == "cross") {
            if (box4.classList[4] == "cross" && box7.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box1.classList[4] == "cross") {
            if (box5.classList[4] == "cross" && box9.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box2.classList[4] == "cross") {
            if (box5.classList[4] == "cross" && box8.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box3.classList[4] == "cross") {
            if (box5.classList[4] == "cross" && box7.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box3.classList[4] == "cross") {
            if (box6.classList[4] == "cross" && box9.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box4.classList[4] == "cross") {
            if (box5.classList[4] == "cross" && box6.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box7.classList[4] == "cross") {
            if (box8.classList[4] == "cross" && box9.classList[4] == "cross") {
                crosswins = true;
                game = false;
                console.log("cross has won")
            }
        }
        if (box1.classList[4] == "circle") {
            if (box2.classList[4] == "circle" && box3.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box1.classList[4] == "circle") {
            if (box4.classList[4] == "circle" && box7.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box1.classList[4] == "circle") {
            if (box5.classList[4] == "circle" && box9.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box2.classList[4] == "circle") {
            if (box5.classList[4] == "circle" && box8.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box3.classList[4] == "circle") {
            if (box5.classList[4] == "circle" && box7.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box3.classList[4] == "circle") {
            if (box6.classList[4] == "circle" && box9.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box4.classList[4] == "circle") {
            if (box5.classList[4] == "circle" && box6.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (box7.classList[4] == "circle") {
            if (box8.classList[4] == "circle" && box9.classList[4] == "circle") {
                circlewins = true;
                game = false;
                console.log("circle has won")
            }
        }
        if (crosswins == true) {
            stats[0].children[1].children[1].innerText += " has won";
            stats[0].children[0].remove();
            stats[0].children[0].style.width = "50%";
        } else if (circlewins == true) {
            stats[0].children[0].children[1].innerText += " has won";
            stats[0].children[1].remove();
            stats[0].children[0].style.width = "50%";
        }
    }
    if (box1.classList[4] != undefined && box2.classList[4] != undefined && box3.classList[4] != undefined && box4.classList[4] != undefined && box5.classList[4] != undefined && box6.classList[4] != undefined && box7.classList[4] != undefined && box8.classList[4] != undefined && box9.classList[4] != undefined) {
        if (game == true) {
            console.log("Draw")
            stats[0].children[0].children[1].remove();
            stats[0].children[1].children[1].remove();
            var a = document.createElement('div');
            a.setAttribute('class', 'player d-flex justify-content-around align-items-center');
            var b = document.createElement('div');
            b.setAttribute('class', 'drawFont');
            console.log(b);
            b.appendChild(document.createTextNode('Draw'));
            a.appendChild(b);
            stats[0].appendChild(a);
            console.log(a);
            stats[0].children[2].style.width = "50%";
            // setTimeout(function(){
            //     var restart = prompt("Another game with Same Users ??" , "Yes / No");
            //     if(restart.toLowerCase() == "yes") {
            //         restartGame();
            //     }
            // },500);
        }
    }
}

