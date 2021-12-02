import fotoperfil from "../imgs/fotoperfil.jpg"
import SobreMi from "../imgs/SobreMi.jpg"


const text = 'Hello, Kike. I am interested in your work...'
export const Data = {
    personal:
    {   
        name: "Jaider",
        middleName: 'Enrique',
        middleInitial: 'E.',
        lastName: 'Vanegas',
        secondLastName: 'Palomino',
        age: '34',
        DOB: 'June / 22nd / 1987',
        BIO: "I am Jaider Vanegas. You can call me Kike. At age of 34, and after 10 years as an English teacher at the top language centers in my city (Medellin, Col.) I have decided to leave my comfort zone to expand and look for new horizons. That's what defines me best.. that I am fearful like everyone else, but it won't keep me from testing my limits, and reaching out for what I want.",
        BIO2: "I am a multidisiciplinary person. I play the guitar at a hight level, the harmonica and other musical instruments that I have learned by myself. I paint and draw using different techniques. I learned English and managed to get to a C2 level with a honorary mention given by the University of Michigan and Cambridge English Dep. I am learning French, and I am able to understand Portuguese... all of these with no official training, but just pure will, determination and a couple of videos on YouTube. I play different kinds of sports: I play soccer, American Football, and do free-style rollerblading... all of them at a competitive level. I love reading and learning new things. I often find myself challenged by what I am learning at the time, only to find myself again having it sucessfully learned.",
        social : 
        {
            facebook: "https://www.facebook.com/kkvz23/",
            twitter: "https://twitter.com/KkVngz23",
            instagram: "https://www.instagram.com/kkvngz23/",
            LinkedIn: "https://www.linkedin.com/in/jaidervanegas23/",
            YouTuBe: "https://www.youtube.com/channel/UCCzn5vab6xL1-Vwdzk8Meeg",
            WhatsApp: `https://api.whatsapp.com/send?phone=573016368707&text=${text}`,
            phone: +573016368707,
            email: 'jaidervanegas@live.com'
        }
    },
    images: 
    {
        avatar: fotoperfil,
        BGAbout: SobreMi
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