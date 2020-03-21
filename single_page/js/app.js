new Vue({
el:"#main_app",
data:{

    maths:"More",
    english:"More",
    biology:"More",
    physics:"More",
    chemistry:"More",
    civics:"More",
    aptitude:"More",
    subjects:["Maths","Physics","English","Aptitude","Civics","Chemistry","Biology"],
    nav_links:[
    {page:"home.html",link:"Home"},
    {page:"course.html",link:"Course"},
    {page:"exam.html",link:"Exams"},
    {page:"discuss.html",link:"Discuss"},
    {page:"news.html",link:"News"},
    {page:"about_us.html",link:"About Us"}
       
    ],
    image:[
    {project_logo:"ProjectLogo.PNG"},
    {maths_image:"images/Math.jpg"},
    {physics_image:"images/Physics.jpg"},
    {english_image:"images/English.jpg"},
    {aptitude_image:"images/Aptitude.jpg"},
    {civics_image:"images/Civics.png"},
    {chemistry_image:"images/Chemistry.jpg"},
    {biology_image:"images/Biology.jpg"},

    ],
    subject_description:[
                                        
    {math:"Mathmatics is the science that deals with the logics of shapes,quantity and arrangement.",math_more:"Mathematics is the science of numbers and operations,interrelations,combinations,generalization,and Abstraction."},
    {physics:"Physics is a natural science based on experiments,measurements and Mathematical analysis.",physics_more:"The branch of Science concerned with the nature and properties of matter and energy.The subject matter of physics includes mechanics,heat,light and other radiation,sound,electricity,magnetism,and the structure of atoms. The physical property and phenomena of something."},
    {english:"English is a west Germanic language that was first spoken in early medieval England and Eventually became a global lingua.",english_more:"English is a language - originally the language of England.Today English is the main language of UK,Ireland,USA and more than fifty other language.\
    Throughout the world there are over 400 Million speakers of English."},
    {aptitude:"Aptitude is a component of a competence to do a certain kind of work at a certain level.\
    Acquired or natural ability (Usually measurable with aptitude tests)",aptitude_more:"One's Aptitude is the natural ability to do something:a talent.Something unrelated to practiced skills or learned knowledge.Interestingly this may be a physical or mental ability.A talent for a certain sport,playing a certain instruments,or solving math problem."},
    {civics:"The study of rights and duties of citizenship.Civics or civic education is the study of the theoretical,political and practical aspects of citizenship,",civics_more:"Civics is also called a political science which means,Political-related to government or politics and science means studying the physical and natural world through observation or practically in a systematics way."},
    {chemistry:"The branch of science concerned with the substance of matter is Composed,the investigation of their properties and reactions,and the use of such reactions to form new substances.the complex emotional between people.'their affair was triggered by intense sexual chemistry.'",chemistry_more:"Chemistry is a way to study the properties,characterstics,and chemical changes of matter.It also studies about subatomic particles,which are smaller than atoms.\
    Chemistry itself has been around for a very long time.Modern chemistry dates back to 17th century.Founder of this scientific field is Robert Boyle."},
    {biology:"The study of living organisms,divided into many specialized fields that cover their morphology,physiology,anatomy,behaviour,origin,and distribution.",biology_more:"There are atleast nine umbrella branches of Biology.\
    <dl class='text-right'> \
        <dt>BioChemistry</dt>\
        <dd>the study of the material substances that make up the living things</dd>\
        <dt>Botany</dt>\
        <dd>the study of Plant</dd>\
        <dt>Cellular Biology</dt>\
        <dd>the study of basics cellular units that make up the living things</dd>\
        <dt>Ecology</dt>\
        <dd>the study of how organism interact with their environment</dd>\
        <dt>Evolutionary Biology</dt>\
        <dd>the study of the origin and changes in the diversity of life over time</dd>\
        <dt>Genetics</dt>\
        <dd>the study of heredity.</dd>  \
        <dt>Molecular Biology</dt>\
        <dd>the study of biological molecules.</dd>\
        <dt>Physiology</dt>\
        <dd>the study of the function of organism and their part.</dd>\
        <dt>Zoology</dt>\
        <dd>the study of Animals and their behaviour.</dd>\
    </dl> "},
    
    
    
    
    ],
    handler:[{click:false,id:"maths",},{click:false,id:"physics",},{click:false,id:"english",},{click:false,id:"aptitude",},{click:false,id:"civics",},{click:false,id:"chemistry",},{click:false,id:"biology",},
    ]
    
   
    


},
methods:{
    more_btn_clicked:function(click,subject='maths'){
        if(click && subject=='maths'){
            this.maths="Less";
        }
        else if(!click && subject=='maths'){
            this.maths="More";
        }
        else if (click && subject=='english'){
            this.english="Less";
        }
        else if (!click && subject=='english'){
            this.english="More";
        }
        else if (click && subject=='biology'){
            this.biology="Less";
        }
        else if (!click && subject=='biology'){
            this.biology="More";
        }
        else if (click && subject=='physics'){
            this.physics="Less";
        }
        else if (!click && subject=='physics'){
            this.physics="More";
        }
        else if (click && subject=='chemistry'){
            this.chemistry="Less";
        }
        else if (!click && subject=='chemistry'){
            this.chemistry="More";
        }
        else if (click && subject=='civics'){
            this.civics="Less";
        }
        else if (!click && subject=='civics'){
            this.civics="More";
        }
        else if (click && subject=='aptitude'){
            this.aptitude="Less";
        }
        else if(!click && subject=='aptitude'){
            this.aptitude="More";
        }
            
}


}



});

