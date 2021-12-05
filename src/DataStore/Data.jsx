import fotoperfil from "../imgs/fotoperfil.jpg"
import SobreMi from "../imgs/SobreMi.jpg"
import bg from "../imgs/bg.jpg"
import mountain1 from "../imgs/mountain1.png"
import mountain2 from "../imgs/mountain2.png"
import textMountain from "../imgs/textMountain.png"
import TextV2W from "../imgs/TextV2W.png"
import fondoAcademic from "../imgs/fondoAcademic.jpg"
import clima from "../imgs/clima.png"
import github from "../imgs/github.png"
import todoList from "../imgs/todoList.png"
import pokedex from "../imgs/pokedex.png"
import ecommerce from "../imgs/ecommerce.png"


const text = 'Hello, Jorge. I am interested in your work...'
export const Data = {
    personal:
    {   
        name: "Jorge",
        lastName: 'Duje',
        age: '29',
        DOB: 'Sept / 19 / 1992',
        BIO: "My name is Jorge Duje, I am currently 29 years old, I am from Cordoba Argentina, after some years studying economics, I decided to change my way to this wonderful world of programming, since I have always been curious about technologies.",
        BIO2: "I am very curious about things that I do not have information, I like to know everything, and that has led me to find in my day to day, a moment to study something new. I am a self-learning person. I really like working in a team, teaching, contributing my knowledge, and learning from others.I am a family man, in my free time, I like to go fishing, spend time with my family, and go out to play with my dogs, they are 3, Jack, Lola, Rojo.I am an enterprising person, trying to improve myself day by day, and generate new knowledge.Currently I am dedicated to Front-end. but I am also studying Back-end technologies.",
        social : 
        {
           
            twitter: "https://twitter.com/DujeJorge",
            instagram: "https://www.instagram.com/jorge_duje/",
            LinkedIn: "https://www.linkedin.com/in/jorge-duje-2212b4219/",
            WhatsApp: `https://api.whatsapp.com/send?phone=543544563586&text=${text}`,
            phone: 543544563586,
            email: 'jorgeduje4@gmai.com'
        }
    },
    images: 
    {
        avatar: fotoperfil,
        BGAbout: SobreMi,
        bg: bg,
        mountain1: mountain1,
        mountain2: mountain2,
        textMountain: textMountain,
        TextV2W: TextV2W,
        fondoAcademic: fondoAcademic
    },
    
    academic :
    {
        bachelor :
        {   completed: true,
            Degree: "Bachelor degree in Education and Theology",
            institute: "Corporacion Universitaria Adventista (UNAC)",
            city: "Medellin / Colombia",
            online: false,
            yearOfCompletion: "2011",
            yearsInTotal: 5
        },
        diploma :
        {   
            completed: true,
            Degree: "Diploma in Didactics of English",
            institute: "Univserity Luis Amigo",
            city: "Medellin / Colombia",
            online: false,
            yearOfCompletion: "2018",
            yearsInTotal: 1
        },
        programming :
        {   
            completed: false,
            Degree:"Full Stack Software Development & Computer Science",
            institute: "Academlo",
            city: null,
            online: true,
            yearOfCompletion: "in Progress",
            projectsDone :
            {
                portfolio:"https://pensive-benz-c1206c.netlify.app/index.html",
                singleLevelGame: "https://tender-tesla-759884.netlify.app/",
                GitHubSearch: "",
                Weather: ""
            },
            skills : 
            {
                HTML5: true,
                CSS: true,
                JavaScript: true,
                React: true,
                libraries : {
                    bootstrap: '',
                    SASS: '',
                    Tailwind: ''
                },
                Angular: "",
                NodeJS: "",
                Python: "",
                MySQL: "",

            }
        }

    },
    workHistory: [
        {
            id: 1,
            name: "Pokedex App",
            stage: "True-beginner",
            description: "Pokedex web application using the pokemon API, getting familiar with Sass",
            technologies: "Html, Css, Javascript, Sass",
            url1: "https://jorgeduje.github.io/Podedex-API-Pokemon/",
            url2:"https://github.com/jorgeduje/Podedex-API-Pokemon",
            image: pokedex 
        },

        {
            id: 2,
            name: "ToDo List App",
            stage: "True-beginner",
            description: "To-do list that allows you to change the status, I learned to handle states and hooks",
            technologies: "Html, Css, Javascript, React",
            url1: "https://jorgeduje.github.io/ToDo-List-App-React/",
            url2:"https://github.com/jorgeduje/ToDo-List-App-React",
            image: todoList 
        },


        {
            id: 3,
            name: "Github Search App",
            stage: "Beginner",
            description: "Application to search for github users, which allows you to see their followers, followin and repositories",
            technologies: "Html, Css, Javascript, React, Bootstrap",
            url1: "https://react-github-searching-abc5v8qw9-jorgeduje.vercel.app/",
            url2:"https://github.com/jorgeduje/react-github-searching",
            image: github 
        },

        {
            id: 4,
            name: "Weather App",
            stage: "Beginner",
            description: "Application that allows you to check the climate of any part of the world with all its properties",
            technologies: "Html, Css, Javascript, React, Tailwind",
            url1: "https://app-climaa-2aliquf46-jorgeduje.vercel.app/",
            url2:"https://github.com/jorgeduje/app-clima",
            image: clima 
        },

        {
            id: 5,
            name: "E-commerce",
            stage: "Fluent",
            description: "Official project for a Spa center, using Paypal and reservations by whatsapp, a comforting experience working as a team",
            technologies: "Html, Css, Javascript, React, Tailwind, React-Router v6",
            url1: "https://app-ecommerce-6jrg9tf2c-jorgeduje.vercel.app/",
            url2:"https://github.com/jorgeduje/app-ecommerce",
            image: ecommerce 
        },

        
    ]
   
}
