const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let siteNav = document.querySelectorAll ("a");
let siteNavData = ["Services", "Product", "Vision", "Features", "About", "Contact"]
for (i=0; i<siteNav.length; i++){
siteNav[i].textContent = siteNavData[i];
};

let siteHeader = document.querySelector("nav");
let addition1 = document.createElement('a');
addition1.textContent = "Append";
addition1.style.color = "green";

let addition2 = document.createElement('a');
addition2.textContent = "Prepend";
addition2.style.color = "green";

siteHeader.appendChild(addition1);
siteHeader.prepend(addition2);

// let siteHeader1 = document.querySelectorAll ("nav a");
siteNav.forEach (element => {element.style.color = "green";})
// siteHeader.forEach (element => {element.style.color = "green";})


let codePic = document.getElementById ("cta-img");
codePic.src = "/img/header-img.png";

let headline = document.querySelector("h1");
headline.textContent = 'DOM is awesome';
headline.style.marginLeft = "200px";

let headerButton = document.querySelector("button");
headerButton.textContent = "Get Started";
headerButton.style.marginLeft = "200px";


let aboutHData = ["Features", "About", "Services", "Product", "Vision"]
let aboutText = document.querySelectorAll("div p");
let aboutH = document.querySelectorAll("div h4");
for (i=0; i<aboutH.length; i++){
  aboutH[i].textContent = aboutHData[i];
  aboutText[i].textContent=`${aboutHData[i]} content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
}

let middleImg = document.querySelector(".middle-img");
middleImg.src = "/img/mid-page-accent.jpg";

let contactData = ["123 Way 456 Street Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"];
let contactTitle = document.querySelector (".contact h4");
contactTitle.textContent = "Contact";
let contact = document.querySelectorAll (".contact p");
for (i=0; i<contactData.length; i++){
  contact[i].textContent = contactData[i];}

let footerNote = document.querySelector ("footer p");
footerNote.textContent = "Copyright Great Idea! 2018";