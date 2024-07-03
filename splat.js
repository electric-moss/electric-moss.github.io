var splataudio = new Audio('https://whyp.it/tracks/189307/lancer-splat?token=23hWA')

window.addEventListener("load", function(){
    for (var i in ingredients) {
        if (ingredients[i].onLand) continue;
        ingredients[i].onLand = splataudio.play;
    }
  })

  