
const projObj = [
    {
        Title : "Full stack E-commerce site using MERN STACK",
        Link : "https://github.com/SARIF-MALIK/GoFood-FullStack",
        Img : "./assets/project1.png"
    },
    {
        Title : "Ticket Management Jira",
        Link : "https://sarif-malik.github.io/TicketManagement-jeera/",
        Img : "./assets/project2.png"
    },
    {
        Title : "Chat Bot using ChatGpt API",
        Link : "https://github.com/SARIF-MALIK/Chatbot",
        Img : "./assets/project3.png"
    },
    {
        Title : "Daily Blogs & Journals",
        Link : "https://github.com/SARIF-MALIK/DailyBlogs",
        Img : "./assets/project4.png"
    },
    {
        Title : "Chat app using Socket.io",
        Link : "https://github.com/SARIF-MALIK/ChatApp",
        Img : "./assets/project5.png"
    },
    {
        Title : "Crypto King using React",
        Link : "https://sarif-cryptoking.netlify.app/",
        Img : "./assets/project6.png"
    }
]

let projCont = document.querySelector('.project'); 

projObj.map((projElement)=>{
    let proj = document.createElement('div'); 
    proj.setAttribute("class", "proj"); 

    proj.innerHTML = `<img src=${projElement.Img} alt="">
    <div class="projCont">
    <h3>${projElement.Title}</h3>
    <a class="btn darkBtn" href=${projElement.Link} target="_blank" >Visit site</a>
    </div>`

    projCont.appendChild(proj); 
})















