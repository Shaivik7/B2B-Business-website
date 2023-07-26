function main(){
    let query = window.matchMedia("(max-width: 768px)");
    if (query.matches){
        document.querySelector('#button2').addEventListener('click', btn3);
        var newUrl1 = ""
        function btn3(){
            document.querySelector('#button1').style.boxShadow = "none";
            document.querySelector('#button2').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 2.jpg')";
            newUrl1 = document.querySelector('.showcase').style.backgroundImage;
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundSize = "fit";
            document.querySelector('.showcase').style.backgroundPosition = "0 0";
        }  
        document.querySelector('#button1').addEventListener('click', btn4);
        var url3 = "";
        function btn4(){
            document.querySelector('#button2').style.boxShadow = "none";
            document.querySelector('#button1').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 1.jpg')";
            url3 = document.querySelector('.showcase').style.backgroundImage;
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundPosition = "0 0";
            document.querySelector('.showcase').style.backgroundSize = "fit";
        }

        function changeImage4(){
            if(url3 !== ("Intro page pics/Image 2.jpg")){
            btn3();
        }
        }
        function changeImage3(){
            if(newUrl1 !== ("Intro page pics/Image 1.jpg")){
            btn4();
        }
    }

        setInterval(changeImage3, 4000);
        setInterval(changeImage4, 8000);
    }else{
        document.querySelector('#button1').addEventListener('click', btn1);
        document.querySelector('#button2').addEventListener('click', btn2);

        var newUrl = "";
        var url = ""

        function btn2(){
            document.querySelector('#button1').style.boxShadow = "none";
            document.querySelector('#button2').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 2.jpg')";
            newUrl = document.querySelector('.showcase').style.backgroundImage;
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundSize = "cover";
            document.querySelector('.showcase').style.backgroundPosition = "0 -15.625rem";
        }
        function btn1(){
            document.querySelector('#button2').style.boxShadow = "none";
            document.querySelector('#button1').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 1.jpg')";
            url = document.querySelector('.showcase').style.backgroundImage;
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundPosition = "0 0";
            document.querySelector('.showcase').style.backgroundSize = "cover";
        }

        function changeImage(){
            if(url !== ("Intro page pics/Image 2.jpg")){
            btn2();
        }
        }
        function changeImage1(){
            if(newUrl !== ("Intro page pics/Image 1.jpg")){
            btn1();
        }}
        

        setInterval(changeImage, 4000);
        setInterval(changeImage1, 8000);
    }
}

main();





// document.querySelector('#button1').addEventListener('click', btn1)
// document.querySelector('#button2').addEventListener('click', btn2)

// var url = ""
// var newUrl = ""

// function btn2(){
//     document.querySelector('#button1').style.boxShadow = "none";
//     document.querySelector('#button2').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
//     document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 2.jpg')";
//     url = document.querySelector('.showcase').style.backgroundImage;
//     document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
//     document.querySelector('.showcase').style.backgroundSize = "cover";
//     document.querySelector('.showcase').style.backgroundPosition = "0 -15.625rem";
// }
// function btn1(){
//     document.querySelector('#button2').style.boxShadow = "none";
//     document.querySelector('#button1').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
//     document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 1.jpg')";
//     newUrl = document.querySelector('.showcase').style.backgroundImage;
//     document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
//     document.querySelector('.showcase').style.backgroundPosition = "0 0";
//     document.querySelector('.showcase').style.backgroundSize = "cover";
// }

// function changeImage(){
//     if(url !== ("Intro page pics/Image 1.jpg")){
//         btn2();
//     }
// }
// function changeImage1(){
//     if(newUrl !== ("Intro page pics/Image 2.jpg")){
//         btn1();
//     }
// }
// setInterval(changeImage, 4000);
// setInterval(changeImage1, 8000);