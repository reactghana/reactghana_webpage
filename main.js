//////////////////////////////
/////////////////////////////
//DATABASE

//MEETINGS
const meetUps = [];

//TEAM
const ourTeam = [
  {
    twitter: "@cbavlon",
    teamName: "Jonathan Selorm",
    about: "Javascript Lover, Bloger, Music Addict.",
    teamURL: "img/react.png"
  }
];

//SPONSERS
const ourSponsors = [
  {
    image: "img/cirlorm.png"
  }
];

//NEWS
const ourNews = [];

//JOBS
const ourJobs = [];

/////////////////////////
//OPs

// for MEETINGS
for (var i = 0; i < meetUps.length; i++) {
  if (meetUps[i].length !== 0) {
    const { title, description, imgURL, readMore } = meetUps[i];
    $("#meetings").append(
      '<div class="column is-one-quarter"> <div id="box" class="box"> <div class="image is-5by3"> <img src="' +
        imgURL +
        '" /> </div> <span class="title is-5" id="title">' +
        title +
        "</span><article>" +
        description +
        '</article> <a href="' +
        readMore +
        '" ><span>Read more...</span></a> </div> </div> '
    );

    document.querySelector(".empty").innerHTML = "";
  }
  //   if (meetUps.length == 0) {
  //     $("#meetings").append("<div class='empty'>NO MEETINGS</div>");
  //   }
}

// for NEWs
for (var i = 0; i < ourNews.length; i++) {
  if (ourNews.length == 2) {
    const { newsTitle, detail, newsLink } = ourNews[i];
    $("#news").append(
      '<div> <article class="has-text-light"> <header class="has-text-warning">' +
        newsTitle +
        "</header> " +
        ' <a class="subtitle is-5" href="' +
        newsLink +
        '">read more ...</a> </article></div>'
    );
    document.querySelector(".empty2").innerHTML = "";
  } else {
    $("#news").append("<div class='empty'>NO NEWS</div>");
  }
}

// for JOBs
for (var i = 0; i < ourJobs.length; i++) {
  if (ourJobs.length !== 0) {
    const { jobTitle, jobDetail, jobLink } = ourJobs[i];
    $("#job").append(
      '<div> <article class="subtitle is-5 has-text-primary"> <header class="title has-text-warning">' +
        jobTitle +
        "</header> " +
        jobDetail +
        ' <a class="subtitle is-5" href="' +
        jobLink +
        '">read more ...</a> </article></div>'
    );
    document.querySelector(".empty3").innerHTML = "";
  } else {
    $("#job").append("<div class='empty'>NO JOB</div>");
  }
}

// for Team
for (var i = 0; i < ourTeam.length; i++) {
  if (ourTeam.length !== 0) {
    const { twitter, teamName, about, teamURL } = ourTeam[i];
    $("#team").append(
      '<div class="column is-half subtitle is-4"> <div class="image is-5by3"> <img src="' +
        teamURL +
        '" /> </div> <span class="has-text-warning">' +
        twitter +
        '</span><br><span class="has-text-light"><a href=""><i class="fab fa-github"></i></a> <a href=""><i class="fab fa-twitter"></i></a></span> <p class="title is-4 has-text-success">' +
        teamName +
        "</p> " +
        about +
        " </div>"
    );
    document.querySelector(".empty4").innerHTML = "";
  } else {
    $("#team").append("<div class='empty'>NO TEAM</div>");
  }
}

// for SPONSORS
for (var i = 0; i < ourSponsors.length; i++) {
  if (ourSponsors.length !== 0) {
    const { image } = ourSponsors[i];
    $("#sponsor").append(
      ' <div class="column is-one-quarter"> <div class="image is-128x128"> <img src="' +
        image +
        '" /> </div> </div> '
    );
    document.querySelector(".empty5").innerHTML = "";
  } else {
    $("#sponsor").append("<div class='empty'>NO SPONSOR</div>");
  }
}
