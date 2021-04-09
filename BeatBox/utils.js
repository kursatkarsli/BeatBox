/**
 * Beat class that keeps track of playing the audio
 
 */
 let sound = new Audio("");

class Beat {
    constructor(audioSrc) {
        this.audioSrc = new Audio(audioSrc);
    }

    play = () => {
        this.audioSrc.currentTime = 0;
        this.audioSrc.play();
    
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode) {
        this.element = document.getElementById(keyCode)
        this.color = color;
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
    }
    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend', this.deselect);
    }
    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
        
        
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow=`0 0 17px 0 ${this.color}`
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }
}