(function(){
    "use strict";

        let currentimg=0;
        const myphotos=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];

        const container=document.getElementById("content");

        const nextbtn=document.getElementById("next");
        const prevbtn=document.getElementById("previous");

        function swapimg()
        {
                const newSlide=document.createElement("img");
                newSlide.className="fadingimg";
                newSlide.src=`slides/${myphotos[currentimg]}`;
                container.appendChild(newSlide);

                if(container.children.length>2)
                {
                    container.removeChild(container.children[0]);
                }
        }

        nextbtn.addEventListener("click",function(event){
            event.preventDefault();

            currentimg++;
            if(currentimg>myphotos.length-1)
            {
                currentimg=0;
            }

            swapimg();

            
        });

        prevbtn.addEventListener("click",function(event){
                event.preventDefault();

                currentimg--;

                if(currentimg<0)
                {
                    currentimg=myphotos.length-1;
                }

                swapimg();
        });
}());