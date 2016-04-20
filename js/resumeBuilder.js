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
    "email": "joshjacobsen5@gmail.com"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Node.js"],
  "images": "../images/Gaza.JPG"
}



if (bio.skills.length > 0){
  console.log(bio.skills[0]);
  console.log(bio.skills[1]);
  console.log(bio.skills[2]);
  console.log(bio.skills[3]);
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


//   var formattedSkill = HTMLskills;
//   console.log(formattedSkill);
//   formattedSkill = formattedSkill.replace("%data%", bio.skills[0]);
//   console.log(formattedSkill);
//   $("#skills").append(formattedSkill);
//   formattedSkill = formattedSkill.replace("%data%", bio.skills[1]);
//   console.log(formattedSkill);
//   $("#skills").append(formattedSkill);
// }




var work = {
  "jobs": [
    {
      "employer": "United Nations",
      "title": "Field Security Support Officer",
      "location": "Gaza",
      "dates": "2014-2015",
      "description": "Security"
    },
        {
      "employer": "New Zealand Army",
      "title": "Lance Corporal",
      "location": "Afghanistan",
      "dates": "2010-2011",
      "description": "Special Air Service"
    },
        {
      "employer": "Royal New Zealand Navy",
      "title": "Leading Diver",
      "location": "Devonport",
      "dates": "2007",
      "description": "Diving"
    }
  ]
}

for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);

  var combined = formattedEmployer.concat(formattedTitle);
  console.log(combined);

  $(".work-entry:last").append(combined);


};


var education = {
  "schools": [
    {
      "name": "Massey University",
      "city": "Palmerston North",
      "qualification": "BA",
      "subject": "Politics and Defence Studies",
      "year": "2012",
      "website": "www.massey.ac.nz"
    },
    {
      "name": "Enspiral Dev Academy",
      "city": "Auckland",
      "qualification": "Certificate",
      "subject": "Software Development",
      "year": "2016",
      "website": "www.devacademy.co.nz"
    }
  ],
  "online courses": [
    {
      "school": "Coursera",
      "course": "Introduction to Interactive Programming in Python"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Submarine Captain",
      "dates": "April 2016",
      "website": "http://josh-jacobsen.github.io/javascript-racer/"
    }
  ]
}


