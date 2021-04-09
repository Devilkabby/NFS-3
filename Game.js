class Game {
    constructor(){
        
    }
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    /*readPosition(data){
        position = data.val(); // 'ball/position' ---> x and y
        position.x and position.y
    }*/
    
    Start(){
        if (gameState === 0){
            form = new Form()
            form.display()
        }
    }



    update(state){
        database.ref('/').update({
            gameState : state
        });
    }
}