/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*
  1. make Object
  2. find id of element for object
  3. find elements in helper.js for matching data in object
  4. replace placholders in strings with object data
  5. appedn to DOM
 */

var placeholder = '%data%';

var bio = {
  name: 'Greg Moss',
  role: 'Engineer',
  contacts: {
    mobile: '770-377-6454',
    'email': 'greg.mossystems@gmail.com',
    'github': 'https://github.com/LuKidx',
    'twitter': ' @thisguy',
    'location': 'Elk Grove, CA'
  },
  welcomeMessage: 'Test sentence',
  skills: ["JQuery", "Javascript", "HTML/CSS"],
  biopic: 'images/face.jpeg',
  display: function () {
    var header = $('#header');
    var contactList = $('#topContacts');
    var name = $(HTMLheaderName.replace(placeholder, bio.name));
    var role = $(HTMLheaderRole.replace(placeholder, bio.role));
    var mobile = $(HTMLmobile.replace(placeholder, bio.contacts.mobile));
    var email = $(HTMLemail.replace(placeholder, bio.contacts.email));
    var github = $(HTMLgithub.replace(placeholder, bio.contacts.github));
    var twitter = $(HTMLtwitter.replace(placeholder, bio.contacts.twitter));
    var location = $(HTMLlocation.replace(placeholder, bio.contacts.location));
    var welcomeMessage = $(HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage));
    var biopic = $(HTMLbioPic.replace(placeholder, bio.biopic));
    header.prepend(role);
    header.prepend(name);
    contactList.append(mobile);
    contactList.append(email);
    contactList.append(github);
    contactList.append(twitter);
    contactList.append(location);
    header.append(welcomeMessage);
    header.append(biopic);
    header.append($(HTMLskillsStart));
    var skills = $('#skills');
    bio.skills.forEach(function(skill) {
      var li = $(HTMLskills.replace(placeholder, skill));
      skills.prepend(li);
    });

  }
};
bio.display();

var work = {
  jobs: [
    {
      'employer': 'United States Navy',
      'title': 'Hospital Corpsman',
      'dates': '2013 - 2015',
      'location': 'Portsmouth, VA',
      'description': 'Treated patients with their chief complaints. Preformed venepunctures, acquired specimen used for pregnancy tests and strep throat, administered IV fluids.'
    },
    {
      'employer': 'ING',
      'title': 'Data Entry Clerk',
      'dates': '2011',
      'location': 'Jacksonville, FL',
      'description': 'Scan documents and input them into the desired clients accounts. Make changes into clients accounts for specific reasons, i.e death of beneficiary.'
    }
  ],
  display: function() {
    var workExperience = $('#workExperience');
    work.jobs.forEach(function(job){
      var workDiv = $(HTMLworkStart);
      workExperience.append(workDiv);
      var employer = HTMLworkEmployer.replace(placeholder, job.employer);
      var title = HTMLworkTitle.replace(placeholder, job.title);
      var employ_title = $(employer + title);
      var date = $(HTMLworkDates.replace(placeholder, job.dates))
      var location = $(HTMLworkLocation.replace(placeholder, job.location))
      var description = $(HTMLworkDescription.replace(placeholder, job.description))
      workDiv.append(employ_title);
      workDiv.append(date);
      workDiv.append(location);
      workDiv.append(description);
    })
  }
};
work.display();

var projects = {
  projects: [
    {
      'title': 'just a friendly chat',
      'dates': '2015',
      'description': 'web-based messaging app, https://luminous-torch-9975.firebaseapp.com/',
      'images': ['images/maxres.jpg']
    }
  ],
  display: function(){
    var projectContainer = $('#projects');
    projects.projects.forEach(function(project){
      var projectStart = $(HTMLprojectStart);
      projectContainer.append(projectStart);
      var title = $(HTMLprojectTitle.replace(placeholder, project.title));
      var dates = $(HTMLprojectDates.replace(placeholder, project.dates));
      var description = $(HTMLprojectDescription.replace(placeholder, project.description));
      projectStart.append(title);
      projectStart.append(dates);
      projectStart.append(description);
      project.images.forEach(function(image) {
        var images = $(HTMLprojectImage.replace("%data%", project.images));
        projectStart.append(images);
      });
    })
  }
};
projects.display();


var education = {
  schools: [
    {
      'name': 'University of Georgia',
      'location': 'Atlanta, Georgia',
      'degree': 'Associates',
      'majors': ['Graphic Design'],
      'dates': '2009 - 2011',
      'url': ''
    }
  ],
  onlineClasses: [
    {
      'title': 'Beginner HTML/CSS',
      'school': 'CodeCademy',
      'date': '2011',
      'url': 'https://www.codecademy.com/'
    }
  ],
  display: function(){
    var eduContainer = $('#education');
    education.schools.forEach(function(school){
      var schoolStart = $(HTMLschoolStart);
      eduContainer.append(schoolStart);
      var name = HTMLschoolName.replace(placeholder, school.name);
      var degree = HTMLschoolDegree.replace(placeholder, school.degree);
      var name_degree = $(name + degree);
      var major = $(HTMLschoolMajor.replace(placeholder, school.majors));
      var date = $(HTMLschoolDates.replace(placeholder, school.dates));
      var location = $(HTMLschoolLocation.replace(placeholder, school.location));
      schoolStart.append(name_degree);
      schoolStart.append(date);
      schoolStart.append(location);
      schoolStart.append(major);
    });

    education.onlineClasses.forEach(function(current_class){
      var onlineHeader = $(HTMLonlineClasses);
      eduContainer.append(onlineHeader);
      var start = $(HTMLschoolStart);
      eduContainer.append(start);
      var title = HTMLonlineTitle.replace(placeholder, current_class.title);
      var school = HTMLonlineSchool.replace(placeholder, current_class.school);
      var title_school = $(title + school);
      var date = $(HTMLonlineDates.replace(placeholder, current_class.date));
      var url = $(HTMLonlineURL.replace(placeholder, current_class.url));
      start.append(title_school);
      start.append(date);
      start.append(url);
    });
  }
};
education.display();


var mapDiv = $('#mapDiv');
mapDiv.append($(googleMap));


var closer = {
    contacts: {
    mobile: '770-377-6454',
    email: 'greg.mossystems@gmail.com',
    github: 'https://github.com/LuKidx',
    twitter: ' @thisguy',
    location: 'Elk Grove, CA'
  },
  display: function () {
    var footer = $('#lets-connect');
    var bottomList = $('#footerContacts');
    var mobile = $(HTMLmobile.replace(placeholder, closer.contacts.mobile));
    var email = $(HTMLemail.replace(placeholder, closer.contacts.email));
    var github = $(HTMLgithub.replace(placeholder, closer.contacts.github));
    var location = $(HTMLlocation.replace(placeholder, closer.contacts.location));
    var twitter = $(HTMLtwitter.replace(placeholder, closer.contacts.twitter));
    bottomList.append(mobile);
    bottomList.append(email);
    bottomList.append(github);
    bottomList.append(twitter);
    bottomList.append(location);
  }
};
closer.display();




