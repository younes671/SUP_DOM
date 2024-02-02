function shuffleChildren(parent){
        let children = parent.children
        let i = children.length, k , temp
        while (--i > 0) { // boucle tant que 1 oté de est toujours positif (k) stocke unnb aléatoire basé sur i
            k = Math.floor(Math.random() * (i+1))
            // temp pointe temporairement l'élément à la position k dans board
            temp = children[k]
            // remplace l'élément k pointé temporairement à la fin fu contenu de board
            children[k] = children[i]
            parent.appendChild(temp)
        }
}

function showReaction(type, clickedbox){
    clickedbox.classList.add(type)
    if(type !== "success"){
        setTimeout(function(){
            clickedbox.classList.remove(type)
        }, 800)
    }
}

const box = document.createElement("div")
        box.classList.add("box")

const board = document.querySelector("#board")
let nb = 1

for(let i = 1; i <= 10; i++){
        const newbox = box.cloneNode()
        newbox.innerText = i
        board.appendChild(newbox)

        newbox.addEventListener("click", function(){
            // console.log("Boite n°" + i + ", click !")
                if(i == nb){
                    newbox.classList.add("box-clicked")
                    if(nb == board.children.length){
                        board.querySelectorAll(".box").forEach(function(box){
                            showReaction("success", box)
                        })
                    }
                nb++
                }
                else if(i > nb){
                    showReaction("error", newbox)
                    nb = 1
                    board.querySelectorAll(".box-clicked").forEach(function(clickbox){
                        clickbox.classList.remove("box-clicked")
                    })
                }
                else{
                    showReaction("notice", newbox)
                }


        })
    }


    shuffleChildren(board)
