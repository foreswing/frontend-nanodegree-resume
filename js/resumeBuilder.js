//                                     Define my resume variables
//--------------------------------------------------------------------------------------------------------------
var firstName = "Ken";
var lastName = "Haulotte";
var fullName = firstName + " " + lastName;
var role = " --------------- Applications Designer -------------- Developer ------------ Implementation Specialist";
var street = "3501 Palmer Cove ";
var city = "Round Rock, ";
var state = "TX ";
var zip = "78664";
var mobile = "(925)-548-4947 ";
var address = "Austin, TX"
var email = "foreswing@gmail.com ";
var twitter = "foreswing@twitter.com ";
var blog = "foreswing@blog.com ";
var gitHub = "foreswing ";
var picUrl = "images/jimmeny.jpg";
var welcome = "The Best Person for the Job !!!";


var skills = [
	"|  Design  |",
	"|  Build  |",
	"|  Develop  |",
	"|  Test  |",
	"|  Package  |",
	"|  Distribute  |",
	"|  Implement  |",
	"|  Maintain  |",
	"|  Support  |"
	];

var contact = {
	"address": address,
	"mobile": mobile,
	"email": email,
	"twitter": twitter,
	"blog": blog,
	"gitHub": gitHub
};

var bio = {
	"name": fullName,
	"role": role,
	"contact": contact,
	"picURL": picUrl,
	"welcome": welcome,
	"skills": skills
};

var employment = {
	"jobs": [
	{
		"Company": "AT&T",
		"Title": "Lab Manager",
		"Location": "Austin, TX",
		"Dates": "2006 - Present",
		"Description": "Direct installation, configuration, maintenance and support of AT&T Mobility lab facilities and equipment in Atlanta, GA and Austin, TX"
	},
	{
		"Company": "Cingular Wireless",
		"Title": "Lab Manager",
		"Location": "Pleasanton, CA",
		"Dates": "2003 - 2006",
		"Description": "Direct installation, configuration, maintenance and Support of Cingular Wireless lab facilities and equipment in Pleasanton, CA, Atlanta, GA and Austin, TX"
	},
	{
		"Company": "Pulsent",
		"Title": "Director - Applications Engineering",
		"Location": "Milpitas, CA",
		"Dates": "2001 - 2003",
		"Description": "Direct installation, configuration, maintenance and Support of Video lab facilities and equipment in Milpitas, CA"
	},	
	{
		"Company": "SBC Communications",
		"Title": "Various - Director",
		"Location": "St. Louis, MO",
		"Dates": "1979 - 2001",
		"Description": "Network Operations Director - SBC Long Distance, Network Technical Support Manager, Network Operations Project Manager, Human Resources Program Management, Human Resources Systems Manager, Information Technology Systems Analyst"
	}
  ]
}

var education = {
	"schools": [
	{
		"Name": "Westminster College",
		"City": "Fulton, MO",
		"Degree": "BA",
		"Major": ["Accounting", " Psychology"]
	},
	{
		"Name": "University of Dallas",
		"City": "Dallas, TX",
		"Degree": "MBA",
		"Major": ["Finance", " Telecommunications Management"]
	}
  ]
}

var projects = {
	"project": [
	{
		"Name": "Build Data Center for Cingular Wireless",
		"City": "Atlanta, GA",
		"Dates": "July - Dec 2009",
		"Description": "Designed & Directed construction of 7K Sq Ft Data Center"
	},
	{
		"Name": "Implement SS7 Network & Associated Equipment Throughout SBC",
		"City": "St. Louis, MO ",
		"Dates": "Aug 1998 - Jan 1999",
		"Description": "Directed installation and Commissioning of SS7 Network in 25 Markets"
	}
  ]
}
//--------------------------------------------------------------------------------------------------------------
//                                           End Variable Definition


//                                       Replace HTML with my information - BIO
//--------------------------------------------------------------------------------------------------------------
bio.display = function() {

		var formattedName = HTMLheaderName.replace("%data%", fullName);
		var formattedRole = HTMLheaderRole.replace("%data%", role);
		var formattedContact = HTMLcontactGeneric.replace("%data%", address);
		var formattedEmail = HTMLemail.replace("%data%", email);
		var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
		var formattedGitHub = HTMLgithub .replace("%data%", gitHub);
		var formattedBlog = HTMLblog.replace("%data%", blog);
		var formattedBioPic = HTMLbioPic.replace("%data%", picUrl);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcome);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);

		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedContact);		
		$("#topContacts").append(formattedGitHub);
		$("#topContacts").append(formattedBlog);
		$("#topContacts").append(formattedTwitter);		


		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (skills in bio.skills) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
				$("#skills").append(formattedSkills);
			};
		};
		
		$("#header").append("<br/> <br/>");
		$("#header").append(formattedWelcomeMsg);
};

bio.display();


//                                   Replace HTML with my information - Employment
//--------------------------------------------------------------------------------------------------------------
employment.display = function() {

	if (employment.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);
		for (jobs in employment.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", employment.jobs[jobs].Company);
			var formattedTitle = HTMLworkTitle.replace("%data%", employment.jobs[jobs].Title);
			var formattedLocation = HTMLworkLocation.replace("%data%", employment.jobs[jobs].Location);
			var formattedDates = HTMLworkDates.replace("%data%", employment.jobs[jobs].Dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", employment.jobs[jobs].Description);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		};
	};
};

employment.display();


//                                   Replace HTML with my information - Projects
//--------------------------------------------------------------------------------------------------------------
projects.display = function() {	

	if (projects.project.length > 0) {

		$("#projects").append(HTMLprojectStart);

		for (proj in projects.project) {

			var formattedProjName = HTMLprojectTitle.replace("%data%", projects.project[proj].Name);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[proj].Dates);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].Description);
			$(".project-entry:last").append(formattedProjName);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescription);
		};
	};
};

projects.display();


//                                   Replace HTML with my information - Education
//--------------------------------------------------------------------------------------------------------------
education.display = function() {	

	if (education.schools.length > 0) {

		$("#education").append(HTMLschoolStart);

		for (item in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[item].Name);
			var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[item].City);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].Degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].Major);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolCity);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
	};
};

education.display();


//                       Replace HTML with Map of Places I've Lived, Learned & Played
//--------------------------------------------------------------------------------------------------------------
$("#mapDiv").append(googleMap);


//                                                End HTML replacement
//--------------------------------------------------------------------------------------------------------------
















//                   My Unused Code Created During Class and Kept Here for Reference Purposes
//--------------------------------------------------------------------------------------------------------------


// $(document).click(function(loc) {
//   x = loc.pageX;
//   y = loc.pageY;
//   logClicks(x,y);
// });


// $("#main").append("<br/>", address.street, "<br/>");
// $("#main").append(address.city, ", ", address.state, "  ", address.zip);
// $("#main").append("<br/>", "<br/>", welcome, "<br/>", "<br/>");
// $("#main").append(bio.skills, "<br/>", "<br/>");

// $("#main").append("<br/>", "<strong>Work Experience</strong>", "<br/>", "<br/>");
//var prev_i = 0;
// for (i=0; i < employment.jobs.length; i++) {
// 	if (i != prev_i) {
// 		$("#main").append("<br/>");
// 	};
// 	Object.getOwnPropertyNames(employment.jobs[i]).forEach(function(val, idx, array) {
// 	$("#main").append((val + ' -> ' + employment.jobs[i][val]), "<br/>");
// 	prev_i = i;
// });
// };

// $("#main").append("<br/>", "<strong>Key Projects</strong>", "<br/>", "<br/>");

// for (i=0; i < projects.project.length; i++) {
// 	if (i != prev_i) {
// 		$("#main").append("<br/>");
// 	};
// 	Object.getOwnPropertyNames(projects.project[i]).forEach(function(val, idx, array) {
// 	$("#main").append((val + ' -> ' + projects.project[i][val]), "<br/>");
// 	prev_i = i;
// });
// };

// $("#main").append("<br/>", "<strong>Education</strong>", "<br/>", "<br/>");

// for (i=0; i < education.schools.length; i++) {
// 	if (i != prev_i) {
// 		$("#main").append("<br/>");
// 	};
// 	Object.getOwnPropertyNames(education.schools[i]).forEach(function(val, idx, array) {
// 	$("#main").append((val + ' -> ' + education.schools[i][val]), "<br/>");
// 	prev_i = i;
// });
// };
//                                         End Unused Code
//--------------------------------------------------------------------------------------------------------------