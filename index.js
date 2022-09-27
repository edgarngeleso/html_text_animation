if( typeof exports == "object" && typeof module == "object"){
    module.exports = Animate;
}

class Animate{
    constructor(textArea,animationType,animationSpeed=1000){
        this.textArea = textArea;
        this.animationType = animationType;
        this.animationSpeed = animationSpeed;
        
    }

    run(){
        if(this.textArea == "" || this.textArea == null || this.textArea == undefined){
            throw new Error("Text animation requires a html tag eg div,p etc with some text.");
        }

        switch(this.animationType){
            case "flyin":
                new FlyIn(this.textArea,this.animationSpeed).run();
                break;
            case "flyout":
                new FlyOut(this.textArea,this.animationSpeed).run();
                break;
            case "flyout-reverse":
                new FlyOut(this.textArea,this.animationSpeed,true).run();
                break;
            case "fadeout":
                new FadeOut(this.textArea,this.animationSpeed).run();
                break;
            case "fadein":
                new FadeIn(this.textArea,this.animationSpeed).run();
                break;
            case "typewriter":
                new TypeWriter(this.textArea,this.animationSpeed).run();
                break;
            case "wavy":
                new Wavy(this.textArea,this.animationSpeed).run();
                break;
            default:
                new FlyIn(this.textArea,this.animationSpeed).run();
                console.log("default");
                break;
        }
    }
}

class FlyIn{
    constructor(textArea,speed){
        this.textArea = textArea;
        this.speed = speed;
        this.letterPosition = 0;
        this.id = null;
        this.areaContent = this.textArea.textContent; 
    }

    run(){
        this.textArea.style.transition = "all .5s ease";
        this.textArea.innerHTML = "";
        for(let i=0;i<this.areaContent.length;i++){
            let span = document.createElement("span");
            span.style.transition = "all .5s ease";
            span.style.display = "inline-block";
            span.style.width = 10;
            span.style.opacity = 0;
            span.style.transform = "translateY(80px)";
            span.innerHTML = this.areaContent[i];
            this.textArea.appendChild(span);
        }

       this.id = setInterval(()=>{
            this.animate();
        },this.speed)

    }

    animate(){
        let allspans = this.textArea.querySelectorAll("span");
        allspans[this.letterPosition].style.transform = "translateY(0px)";
        allspans[this.letterPosition].style.opacity = 1;
        this.letterPosition++;

        if(this.letterPosition == allspans.length-1){
            clearInterval(this.id);
        }
        
    }
}

class FlyOut{
    constructor(textArea,speed,isReverse=false){
        this.textArea = textArea;
        this.speed = speed;
        this.isReverse = isReverse;
        this.letterPosition = 0;
        this.id = null;
        this.areaContent = this.textArea.textContent; 
    }

    run(){
        this.textArea.style.transition = "all .5s ease";
        this.textArea.innerHTML = "";

        if(this.isReverse){
            for(let i=0;i<this.areaContent.length;i++){
                let span = document.createElement("span");
                span.style.transition = "all .5s ease";
                span.style.display = "inline-block";
                span.style.width = 10;
                span.style.opacity = 1;
                span.style.transform = "translateY(80px)";
                span.innerHTML = this.areaContent[i];
                this.textArea.appendChild(span);
            }
        }else{
            for(let i=0;i<this.areaContent.length;i++){
                let span = document.createElement("span");
                span.style.transition = "all .5s ease";
                span.style.display = "inline-block";
                span.style.width = 10;
                span.style.opacity = 1;
                span.style.transform = "translateY(0px)";
                span.innerHTML = this.areaContent[i];
                this.textArea.appendChild(span);
            }
        }
        

       this.id = setInterval(()=>{
            this.animate();
        },this.speed)

    }

    animate(){
        let allspans = this.textArea.querySelectorAll("span");
        allspans[this.letterPosition].style.transform = "translateY(80px)";
        allspans[this.letterPosition].style.opacity = 0;
        this.letterPosition++;

        if(this.letterPosition == allspans.length-1){
            clearInterval(this.id);
        } 
    }
}


class FadeIn{
    constructor(textArea,speed){
        this.position = [];
        this.textArea = textArea;
        this.speed = speed;
        this.opacity = 0;
        this.id = null;
    }

    run(){
        this.textArea.style.opacity = 0;
        this.id = setInterval(()=>{
            this.animate();
        },this.speed)
    }

    animate(){
        this.opacity+=0.025;
        this.textArea.style.opacity = this.opacity;
        
        if(this.opacity == 1){
            clearInterval(this.id);
        }
    }
}

class FadeOut{
    constructor(textArea,speed){
        this.position = [];
        this.textArea = textArea;
        this.speed = speed;
        this.opacity = 1;
        this.id = null;
    }
    
    run(){
        this.textArea.style.opacity = this.opacity;
        this.id = setInterval(()=>{
            this.animate();
        },this.speed)
    }

    animate(){
        this.opacity-=0.025;
        this.textArea.style.opacity = this.opacity;
        
        if(this.opacity == 0){
            clearInterval(this.id);
        }
    }
}

class TypeWriter{
    constructor(){
        this.position = [];
    }
    run(){

    }
    animate(){
        
    }

}

class Wavy{
    constructor(){
        this.position = [];
    }
    run(){

    }
    animate(){
        
    }
}

