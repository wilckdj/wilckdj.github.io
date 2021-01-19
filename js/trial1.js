var player = document.getElementById("player");
var block = document.getElementById("block");
function jump() {
    if(player.classList != "animate"){
        player.classList.add("animate")
    }
    
    setTimeout(function(){
        player.classList.remove("animate")
    }, 500)
};

var checkDead = setInterval(function(){
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && playerTop >=130) {
        block.style.animation = "none"
        block.style.display = "none"
        alert("You Lose.")
    }
},10);