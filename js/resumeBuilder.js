var bio = {
    "name": "Niket C.Patil",
    "role": "System Administrator and Consultant Integration Software Engineer",
    "contacts": {
        "mobile":"+91-7387880660",
        "email":["niket.patil03@gmail.com","niketp03@gmail.com"],
        "github": 'https://github.com/Niket03',
        "location": "Mumbai",
        "linkedin": "https://in.linkedin.com/in/niket-patil-75ba1176",
        "careerObjective": ["To work in a creative and challenging environment and improve my career skills and to utilize them for the innovation of company and to study hard and work in a challenging environment to become a person who wants to serve his profession."],
         },     	
    	"skills": ["Windows Installtion and configuration , Trubulshooting in Windows Server and Linux Server, Basic C++, Basic  ASP.Net with C#, JavaScript, XML, HTML5 and CSS, Basic WCF, Basic WPF, Basic Asp.net with MVC HTML, Ajax, Web Service API, SOAP API, Learning now Angular JS, Ad. HTML5 and CSS3"],
    	"profile": ["A result -oriented professional with over 3 years’ experience in System administrator and Software Engineer as of Troubleshooting in Application services, service Delivery, Web-services API tool, Cloud system,Insightful knowledge of Microsoft Applications, SSL on HTTP, WCF, WPF, Asp.net with MVC, Basic of Docker engine, Knowledge of JIRA System Administrator, Microsoft Team Foundation Server (TFS), Dev RALLY tool,Professional experience with Troubleshooting and Installation of in Windows Server / Linux Operating system/Ubuntu/ Red Hat Linux/Oracle Linux,Professional competencies in performing Installation, Upgrade, Configuration, and support of Hardware, Software, Peripherals and Network Devices in Windows environment. A systematic, organized, hardworking and dedicated worker with an analytical bent of mind, determined to be a part of a growth-oriented organization,Experience in Production server management & support, knowledge of Ticketing System and Production Support, SQL query, Hands-On Application Jboss, Tomcat, WebLogic Servers."],
    	"biopic": "images/Photo.png"  
};

var education = {
    "schools": [{
        "name": "A.J.Mandir Karjat",
        "location": "Karjat-Raigard",
        "degree": "High School",
        "majors": ["Science"],
        "dates": "2008",
    }, {
        "name": "Mumbai University",
        "location": "Mumbai-400001",
        "degree": "B.Sc IT",
        "majors": ["Information Technology"],
        "dates": "2010-2013",
    },
    {
        "name": "Mumbai University",
        "location": "Mumbai-400001",
        "degree": "M.C.A",
        "majors": ["Computer Science"],
        "dates": "2013-2015",
    }],
    "onlineCourses": [{
            "title": "1. Intro into JavaScript",
            "school": "Udacity",
            "dates": "2018",
            //"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            "title": "2. Windows Server 2012: Installation and Configuration",
            "school": "linkedin learning",
            "dates": "2018",
            "url": "http://www.linkedin.com/learning/windows-server-2012-installation-and-configuration"
        },
        {
            "title": "3. Learning VMWare Workstation Pro12",
            "school": "linkedin learning",
            "dates": "2018",
            "url": "http://www.linkedin.com/learning/learning-vmware-workstation-pro-12"
        },
        {
            "title": "4. Apache Web Server Administrator",
            "school": "linkedin learning",
            "dates": "2018",
            "url": "https://www.linkedin.com/learning/apache-web-server-administration"
        },
        {
            "title": "5. Amazon Web Services: Analysis",
            "school": "linkedin learning",
            "dates": "2018",
            "url": "http://www.linkedin.com/learning/amazon-web-services-analysis"
        }
    ]
};
var projects = {
    "projects": [{
            "title": "Final year academic project in B.SC (IT)",
            "project name": "Online Air Ticket Booking System",
            "dates": "2013",
            "description": "Web-Base application as Asp.net with C# coding using Visual Studio 2010 as Application and MSSQL Server 2005 for the database server.",
            "responsibility": " Requirement gathering and analysis for the project, System design, coding and Documentation of the project.",
            "images": ["images/SystemEngineer.png"]
        },

        {
            "title": "Jboss base Application Installer",
            "dates": "2015",
            "description": "Visual Studio 2010 for Application, MSSQL Server 2014 for Database Server.",
            "images": ["images/WB.png"],
            "responsibility": "System Design and Coding",
            "Learn": "4 Month Internship with the Knowledge of Deployment of Jboss Server and WebLogic server with the Database instance and handle troubleshooting in Apache 2.4 Load balancer.",
        },
    ]
};

var work = {
    'EmploymentDetails': [{
        "employer": "Digite Infotech Pvt Ltd",
        "title": "System Administrator and Consultant Integration Engineer",
        "dates": "2015 - Present",
        "location": "Mumbai-Andheri 400093",
        "description": "July 2015 – Till Date with Digite Infotech Pvt. Ltd, work as System Administrator and Consultant Integration Software Engineer. OS installation, Patch installation, Deskside support-Windows and desktop installation and administration skills, Office applications - Install, configure and Support OS Drivers and Patch installation. Desktop Hardware support, Anti-Virus support at Server side.Involving in maintaining and supporting production application and database support of their own application as ‘SwiftALM’, ‘SwiftKanban’ during system administrator, it is based on Jboss and WebLogic server. WebLogic Server Installation and Configuration, troubleshooting skills and ability to figure out deployment issues/errors, performance tuning. Basic understanding for SQL Server queries like select, delete, update, alter etc. Also, getting the knowledge of AWS cloud and troubleshooting in Apache load balancer. Hardware and Networking, Oracle VirtualBox and Microsoft Hyper-V administrator and troubleshooting, telnet, WSUS. Deploying, automating, maintaining and managing AWS cloud-based production system. Experience with AWS EC2 Instances, S3 storage, EBS, IAM User, CloudWatch Billing Management to develop and maintain production application server. Active Directory infrastructure, Administration, Migration, Upgrades Servers and Group policy, DNS Shell scripting, firewall troubleshooting, Server backup, upgrade and restoration, knowledge of ticketing system support on production. During the working period as Software Engineer of tool ‘SwiftSync’ from Digite Infotech Pvt Ltd. It is based on Tomcat Sever. Experience with a JIRA Administrator, RALLY, TFS, ServiceNow, Mingle tool, Bugzilla opensource tool, IBM RTC/RQM tool, Zendesk ticketing system, HP ALM/QC 15.05. also, working on SOAP and REST base API webservices and consuming the webservices API using the java, C# coding. Certification of Completion Kanban Foundation I @ Digite (Mumbai)"
    }]
};

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g,"&lt;");
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace('%data%', bio.biopic));
    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));


    $("#header").append(HTMLskillsStart.replace('%data%', bio.skillsstart));
    $("#header").append(HTMLprofile.replace('%data%', bio.profile));

    for (var i = 0; i < bio.skills.length; i++) {
        $('#skills').prepend(HTMLskills.replace('%data%', bio.skills[i]));

    }
	

    var email = HTMLemail.replace('%data%', bio.contacts.email);
    var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var github = HTMLgithub.replace('%data%', bio.contacts.github);
    var location_home = HTMLlocation.replace('%data%', bio.contacts.location);
    var careerObjective = HTMLcareerObjective.replace('%data%',bio.contacts.careerObjective);
    var linkedin = HTMLlinkedin.replace('%data%',bio.contacts.linkedin);

    var contactsArray = [email, mobile, github, location_home, careerObjective, linkedin];

    for (var i = 0; i < contactsArray.length; i++) {
        $("#topContacts").append(contactsArray[i]);
        $("#footerContacts").append(contactsArray[i]);
    }
};
bio.display();


work.display = function() {
    $('#workExperience').append(HTMLworkStart);
    for (var i = 0; i < work.EmploymentDetails.length; i++) {

        var mywork = HTMLworkEmployer.replace('%data%', work.EmploymentDetails[i].employer) + HTMLworkTitle.replace('%data%', work.EmploymentDetails[i].title);
        $('.work-entry').append(mywork);
        $('.work-entry').append(HTMLworkDates.replace('%data%', work.EmploymentDetails[i].dates));
        $('.work-entry').append(HTMLworkLocation.replace('%data%', work.EmploymentDetails[i].location));
        $('.work-entry').append(HTMLworkDescription.replace('%data%', work.EmploymentDetails[i].description));
    }
};
work.display();


projects.display = function() {
    $('#projects').append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        $('.project-entry').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
        $('.project-entry').append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
        $('.project-entry').append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
        $('.project-entry').append(HTMLprojectresponsibility.replace('%data%', projects.projects[i].responsibility));
        for (var j = 0; j < projects.projects[i].images.length; j++) 
        {
            $('.project-entry').append(HTMLprojectImage.replace('%data%', projects.projects[i].images[j]));
        }

    }
};
projects.display();


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {

        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree), HTMLschoolDates.replace("%data%", education.schools[i].dates), HTMLschoolLocation.replace("%data%", education.schools[i].location), HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) 
    {

        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school), HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates), HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url));
    }
};
education.display();

$('#mapDiv').append(googleMap);