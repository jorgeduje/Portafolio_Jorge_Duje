import fotoperfil from "../imgs/fotoperfil.jpg"
import SobreMi from "../imgs/SobreMi.jpg"
import bg from "../imgs/bg.jpg"
import mountain1 from "../imgs/mountain1.png"
import mountain2 from "../imgs/mountain2.png"
import textMountain from "../imgs/textMountain.png"
import TextV2W from "../imgs/TextV2W.png"
import fondoAcademic from "../imgs/fondoAcademic.jpg"


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
    workBackground :
    {
        experienceA :
        {   YOS: "2013",
            YOF: "2018",
            institute: "Centro Colombo Americano",
            city: "Medellin / Colombia",
            online: false,
            logo: 'https://colomboworld.com/wp-content/uploads/2019/03/Imagotipo-CCAM-2019-Policrom%C3%ADa.png'
        },
        experienceB :
        {   
            YOS: "2018",
            YOF: "2021",
            institute: "COMFAMA",
            city: "Medellin / Colombia",
            online: false,
            logo: 'https://fundacionpostobon.com/wp-content/uploads/2018/03/logo-comfama-01.png'
        },
        experienceC :
        {   
            completed: false,
            YOS: "2020",
            YOF: "Present",
            institute: "Univseridad EAFIT",
            city: "Medellin / Colombia",
            online: true,
            logo: 'https://www.eafit.edu.co/cec/congresos/losas-y-pilas/PublishingImages/Paginas/Inicio/Logotipo-EAFIT-azul-en-PNG.png'
        }

    }
}