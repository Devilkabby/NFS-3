class Form {
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Welcome To  Need For Speed Most Wanted");
        title.position(1000,500);


        var input = createInput("Enter Your Name")
        input.position(200,500);

        var greeting = createElement('h3');
        greeting.position(700,800);

        var button = createButton("Let's PLAY")
        button.position(200,500);
    }
}