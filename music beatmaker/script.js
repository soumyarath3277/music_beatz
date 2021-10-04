window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d26060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60d394"
    ];
    // console.log(sounds[0]);

    
    //sounds
    pads.forEach((pad, index) =>{
        pad.addEventListener("click", function(){
           sounds[index].currentTime=0;
           sounds[index].play();

           createBubbles(index);
        }); 
    });

   //create a function that makes bubbles
   const createBubbles= (index) => {
       const bubble = document.createElement("div");
       visual.appendChild(bubble); 
       bubble.style.backgroundColor = colors[index];
       bubble.style.animation="jump is ease";
       bubble.addEventListener('animationed',function(){
           visual.removeChild(this);

       });
   };
});
