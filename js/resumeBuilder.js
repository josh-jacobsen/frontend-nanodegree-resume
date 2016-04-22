/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "Josh Jacobsen");

var formattedRole = HTMLheaderRole.replace("%data%", "Full Stack Developer");

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);



var bio = {
  "name": "Josh Jacobsen",
  "role": "Full Stack Developer",
  "welcomeMessage": "Welcome to my resume",
  "contacts": {
    "mobile": "021123456",
    "email": "joshjacobsen5@gmail.com",
    "twitter": "JD_Jacobsen",
    "github": "josh-jacobsen",
    "blog": "josh-jacobsen.github.io/blog",
    "location": "Auckland, NZ"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Node.js"],
  "images": "images/fry.jpg"
}

if (Object.keys(bio.contacts).length > 0){
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(HTMLemail);
  $("#topContacts").append(HTMLtwitter);
  $("#topContacts").append(HTMLgithub);
  $("#topContacts").append(HTMLblog);
  $("#topContacts").append(HTMLlocation);
}

var formattedBioPic = HTMLbioPic.replace("%data%", bio.images);
$("#header").append(formattedBioPic);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

var work = {
  "jobs": [{
    "employer": "United Nations",
    "title": "Field Security Support Officer",
    "location": "Gaza",
    "dates": "2014-2015",
    "description": "I was responsible for advising on and implementing all aspects of " +
        "UNRWA security and risk management in the field. In the absence of the Field Security Officer, " +
        "I served as principle advisor to the Director of Operations for Gaza in matters of programmatic safety " +
        "and security."
  }, {
    "employer": "United Nations",
    "title": "Safety and Security Advisor",
    "location": "Jordan",
    "dates": "2014",
    "description": "I was responsible for mitigating the risks posed to UNRWA programmes, " +
        "personnel and assets across Jordan, the West Bank, Lebanon, Syria, and Gaza through the " +
        "provision of specialized, coordinated and focused security management support."
  }, {
    "employer": "New Zealand Army",
    "title": "Team Leader",
    "location": "Afghanistan",
    "dates": "2010-2011",
    "description": "I was responsible for providing leaderhip and direction to the soldiers under my command " +
        "to ensure their welfare, fitness, morale and discipline, in order to provide a cohesive tactical " +
        "unit to carry our operations."
  }, {
    "employer": "Royal New Zealand Navy",
    "title": "Leading Diver",
    "location": "Devonport",
    "dates": "2005-2007",
    "description": "As a Navy diver, and later as a Dive Instructor, I performed a range of functions " +
        "to provide specialist underwater recovery, mine counter measures, and battle damage repair support " +
        "to the New Zealand Navy"
  }]
}

//console.log(work.jobs[0].responsibilites[0]);

function displayWork(){
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);


    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job]["location"]);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job]["description"]);

    var combined = formattedEmployer.concat(formattedTitle);

    $(".work-entry:last").append(combined);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);

    //var formattedworkResponsibilities = HTMLworkResponsibilitesItem.replace("%data%", work.jobs[0].responsibilites[0]);

    //$(".work-entry:last").append(HTMLworkResponsibilitesList);
    //$(".responsibilites:last").append(formattedworkResponsibilities);
  };
}

displayWork();

var education = {
  "schools": [
  {
    "name": "Enspiral Dev Academy",
    "location": "Auckland",
    "qualification": "Certificate",
    "subject": "Software Development",
    "year": "2016",
    "website": "www.devacademy.co.nz"
  }, {
    "name": "California State University",
    "location": "Hayward",
    "qualification": "BA",
    "subject": "Politics and Defence Studies",
    "year": "2012",
    "website": "www.devacademy.co.nz"
  }, {
    "name": "Massey University",
    "location": "Palmerston North",
    "qualification": "BA",
    "subject": "Politics and Defence Studies",
    "year": "2009-2011",
    "website": "www.massey.ac.nz"
  }],
  "online courses": [{
    "school": "Coursera",
    "course": "Introduction to Interactive Programming in Python",
    "dates": "2015",
    "url": "https://www.coursera.org/learn/interactive-python-1"
  }]
}

education.display = function() {
 for (school in education.schools){
  $("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].qualification);
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].year);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].subject);

  $(".education-entry:last").append(formattedSchoolName);
  $(".education-entry:last").append(formattedSchoolDegree);
  $(".education-entry:last").append(formattedSchoolDates);
  $(".education-entry:last").append(formattedSchoolLocation);
  $(".education-entry:last").append(formattedSchoolMajor);

 }
 if (education["online courses"].length > 0){
  $(".education-entry:last").append(HTMLonlineClasses);

  //var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.schools[school])
 }
}

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';


education.display();



var projects = {
  "projects": [{
    "title": "Submarine Captain",
    "dates": "April 2016",
    "description": "Fire torpedoes at the enemy ship",
    "images": ["images/fry.jpg", "images/fry3.jpg"]
  }, {
    "title": "Rice Rocks",
    "dates": "April 2015",
    "description": "Destroy the asteroids before they hit your ship",
    "images": ["images/fry.jpg", "images/fry3.jpg"]
  }
  ]
}






projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates"]);
    $(".project-entry:last").append(formattedProjectDates);

    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));

    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedImage);
      }
    }
    //$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project]["images"]));
  }
}

projects.display();

// HTMLprojectTitle
// HTMLprojectDates
// HTMLprojectDescription
// HTMLprojectImage

$("#mapDiv").append(googleMap);