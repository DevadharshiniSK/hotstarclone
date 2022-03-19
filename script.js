let movieContainer1 = document.querySelector(".container>.container-tamil");
let arr1 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3505/133505-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7772/1097772-h-510d7fdd9e3e"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5813/1085813-h-e0f54a881658"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8366/928366-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/272/1050272-h-3391ad0457ca"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7897/977897-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/9189/1000059189/1000059189-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/2465/1000172465/1000172465-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4454/284454-h"
    },    
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/460/1080460-h-01c344482e4a"
    }
];


function tamilMovies(){
    arr1.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer1.appendChild(imgDiv);
})
}
tamilMovies()

let movieContainer2 = document.querySelector(".container>.container-disney");
let arr2 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4600/674600-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1341/1091341-h-0c4699c4630e"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6103/686103-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4425/674425-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4396/674396-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4563/674563-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4539/674539-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4596/674596-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4662/674662-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4384/674384-h"
    }    
    
];


function disneyMovies(){
    arr2.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer2.appendChild(imgDiv);
})
}
disneyMovies()

let movieContainer3 = document.querySelector(".container>.container-malayalam");
let arr3 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1195/1000091195/1000091195-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7077/1057077-h-ae6b5b69076a"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/6926/1000156926/1000156926-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/8379/1000118379/1000118379-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4317/1000164317/1000164317-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8898/68898-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/6111/1000196111/1000196111-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4273/1000154273/1000154273-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9000/549000-h"
    }    
    
];


function malayalamMovies(){
    arr3.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer3.appendChild(imgDiv);
})
}
malayalamMovies()

let movieContainer4 = document.querySelector(".container>.container-hindi");
let arr4 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6715/1106715-h-7b88aaf59197"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2068/1062068-h-54b155e41999"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3913/1073913-h-db43b82e4b2e"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4296/1000194296/1000194296-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2886/892886-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8284/388284-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1527/571527-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4051/1054051-h-aad5a3d35219"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6826/556826-h"
    }    
    
];


function hindiMovies(){
    arr4.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer4.appendChild(imgDiv);
})
}
hindiMovies()

let movieContainer5 = document.querySelector(".container>.container-bengali");
let arr5 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7568/1027568-h-e8d7bfec07b5"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5261/445261-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/7014/1000207014/1000207014-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6115/636115-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4049/1000214049/1000214049-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/688/40688-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5095/565095-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5095/565095-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/5752/1000215752/1000215752-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8542/568542-h"
    }    
    
];


function bengaliMovies(){
    arr5.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer5.appendChild(imgDiv);
})
}
bengaliMovies()

let movieContainer6 = document.querySelector(".container>.container-telugu");
let arr6 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1300/581300-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4338/1000074338/1000074338-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2829/552829-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4328/1000074328/1000074328-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7285/457285-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4327/1000074327/1000074327-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1807/1100001807/1100001807-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4125/1000064125/1000064125-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/6892/1000056892/1000056892-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/5071/1000155071/1000155071-h"
    }    
    
];


function teluguMovies(){
    arr6.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer6.appendChild(imgDiv);
})
}
teluguMovies()

let movieContainer7 = document.querySelector(".container>.container-kannada");
let arr7 = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/6633/1000186633/1000186633-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3002/1000083002/1000083002-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/74/1000060074/1000060074-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9860/169860-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4915/1000154915/1000154915-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4336/534336-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8814/528814-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1989/1100001989/1100001989-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2502/782502-h"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7277/1057277-h-bf4e2ff1932d"
    }    
    
];


function kannadaMovies(){
    arr7.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        movieContainer7.appendChild(imgDiv);
})
}
kannadaMovies()
























