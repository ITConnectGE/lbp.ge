function loadLanguageFile(language) {
  return fetch(`/locales/${language}.json?v10.7`)
    .then((response) => response.json())
    .catch((error) => console.error("Ошибка загрузки файла:", error));
}

function applyText(languageData) {
  // const header = document.querySelector('h1');
  // if (header) header.textContent = languageData.welcome;

  // const paragraph = document.querySelector('p');
  // if (paragraph) paragraph.textContent = languageData.test;

  const navHome = document.querySelector(".nav .home");
  if (navHome) navHome.textContent = languageData.home;

  const navAbout = document.querySelector(".nav .about");
  if (navAbout) navAbout.textContent = languageData.about;

  const navCareers = document.querySelector(".nav .careers");
  if (navCareers) navCareers.textContent = languageData.careers;

  const navServices = document.querySelector(".nav .services");
  if (navServices) navServices.textContent = languageData.services;

  const navFounder = document.querySelector(".nav .founder");
  if (navFounder) navFounder.textContent = languageData.founder;

  const navLocation = document.querySelector(".nav .location");
  if (navLocation) navLocation.textContent = languageData.location;

  const navBlog = document.querySelector(".nav .blog");
  if (navBlog) navBlog.textContent = languageData.blog;

  const navContact = document.querySelector(".nav .team");
  if (navContact) navContact.textContent = languageData.team;
  const welcome = document.querySelector("#welcome");
  if (welcome) {
    let formattedText = languageData.welcome.replace("is", "is<br>");
    formattedText = formattedText.replace("side", "side<br>");
    welcome.innerHTML = formattedText;
  }
  const welcomeP = document.querySelector("#welcomeP");
  if (welcomeP) welcomeP.textContent = languageData.welcomeP;
  const contactBtn = document.querySelector("#contactBtn");
  if (contactBtn) contactBtn.textContent = languageData.contactBtn;
  const aboutBtn = document.querySelector("#aboutBtn");
  if (aboutBtn) aboutBtn.textContent = languageData.aboutBtn;
  const titleTeam = document.querySelector("#titleTeam");
  if (titleTeam) titleTeam.textContent = languageData.titleTeam;
  const personG = document.querySelector("#personG");
  if (personG) personG.textContent = languageData.personG;
  const personS = document.querySelector("#personS");
  if (personS) personS.textContent = languageData.personS;
  const personM = document.querySelector("#personM");
  if (personM) personM.textContent = languageData.personM;
  const titleAbout = document.querySelector("#titleAbout");
  if (titleAbout) titleAbout.textContent = languageData.titleAbout;
  const subjectAbout = document.querySelector("#subjectAbout");
  if (subjectAbout) subjectAbout.textContent = languageData.subjectAbout;
  const textAbout1 = document.querySelector("#textAbout1");
  if (textAbout1) textAbout1.innerHTML = languageData.textAbout1;
  const textAbout2 = document.querySelector("#textAbout2");
  if (textAbout2) textAbout2.innerHTML = languageData.textAbout2;
  const textAbout3 = document.querySelector("#textAbout3");
  if (textAbout3) textAbout3.innerHTML = languageData.textAbout3;
  const titleServices = document.querySelector("#titleServices");
  if (titleServices) titleServices.textContent = languageData.titleServices;
  const gmail = document.querySelector("#gmail");
  if (gmail) gmail.textContent = languageData.gmail;
  const phone = document.querySelector("#phone");
  if (phone) phone.textContent = languageData.phone;
  const phone2 = document.querySelector("#phone2");
  if (phone2) phone2.textContent = languageData.phone;
  const listType1 = document.querySelector("#listType1");
  if (listType1) listType1.textContent = languageData.listType1;
  const listType2 = document.querySelector("#listType2");
  if (listType2) listType2.textContent = languageData.listType2;
  const listType3 = document.querySelector("#listType3");
  if (listType3) listType3.textContent = languageData.listType3;
  const listType4 = document.querySelector("#listType4");
  if (listType4) listType4.textContent = languageData.listType4;
  const listType5 = document.querySelector("#listType5");
  if (listType5) listType5.textContent = languageData.listType5;
  const listType6 = document.querySelector("#listType6");
  if (listType6) listType6.textContent = languageData.listType6;
  const listType7 = document.querySelector("#listType7");
  if (listType7) listType7.textContent = languageData.listType7;
  const listType8 = document.querySelector("#listType8");
  if (listType8) listType8.textContent = languageData.listType8;
  const listType9 = document.querySelector("#listType9");
  if (listType9) listType9.textContent = languageData.listType9;
  const listType10 = document.querySelector("#listType10");
  if (listType10) listType10.textContent = languageData.listType10;
  const listType11 = document.querySelector("#listType11");
  if (listType11) listType11.textContent = languageData.listType11;
  const listType12 = document.querySelector("#listType12");
  if (listType12) listType12.textContent = languageData.listType12;
  const listType13 = document.querySelector("#listType13");
  if (listType13) listType13.textContent = languageData.listType13;
  const listType14 = document.querySelector("#listType14");
  if (listType14) listType14.textContent = languageData.listType14;
  const listType15 = document.querySelector("#listType15");
  if (listType15) listType15.textContent = languageData.listType15;
  const careersP1 = document.querySelector("#careersP1");
  if (careersP1) careersP1.textContent = languageData.careersP1;
  const careersP2 = document.querySelector("#careersP2");
  if (careersP2) careersP2.textContent = languageData.careersP2;
  const careers = document.querySelector("#titleCareers");
  if (careers) careers.textContent = languageData.careers;
  const titleLocation = document.querySelector("#titleLocation");
  if (titleLocation) titleLocation.textContent = languageData.titleLocation;
  const locationSubject = document.querySelector("#locationSubject");
  if (locationSubject)
    locationSubject.textContent = languageData.locationSubject;
  const locationAdress = document.querySelector("#locationAdress");
  if (locationAdress) locationAdress.textContent = languageData.locationAdress;

  const blog1Title1 = document.querySelector("#blog1Title1");
  if (blog1Title1) blog1Title1.textContent = languageData.blog1Title1;
  const blog1Title2 = document.querySelector("#blog1Title2");
  if (blog1Title2) blog1Title2.textContent = languageData.blog1Title2;
  const blog1Title3 = document.querySelector("#blog1Title3");
  if (blog1Title3) blog1Title3.textContent = languageData.blog1Title3;
  const blog1Text1 = document.querySelector("#blog1Text1");
  if (blog1Text1) blog1Text1.textContent = languageData.blog1Text1;
  const blog1Text2 = document.querySelector("#blog1Text2");
  if (blog1Text2) blog1Text2.textContent = languageData.blog1Text2;
  const blog1Text3 = document.querySelector("#blog1Text3");
  if (blog1Text3) blog1Text3.textContent = languageData.blog1Text3;
  const blog1Text4 = document.querySelector("#blog1Text4");
  if (blog1Text4) blog1Text4.textContent = languageData.blog1Text4;
  const blog1Text5 = document.querySelector("#blog1Text5");
  if (blog1Text5) blog1Text5.textContent = languageData.blog1Text5;
  const blog1Text6 = document.querySelector("#blog1Text6");
  if (blog1Text6) blog1Text6.textContent = languageData.blog1Text6;
  const blog1Text7 = document.querySelector("#blog1Text7");
  if (blog1Text7) blog1Text7.textContent = languageData.blog1Text7;
  const blog1Text8 = document.querySelector("#blog1Text8");
  if (blog1Text8) blog1Text8.textContent = languageData.blog1Text8;
  const blog1Text9 = document.querySelector("#blog1Text9");
  if (blog1Text9) blog1Text9.textContent = languageData.blog1Text9;
  const blog1Link1 = document.querySelector("#blog1Link1");
  if (blog1Link1) blog1Link1.textContent = languageData.blog1Link1;
  const blog1Link2 = document.querySelector("#blog1Link2");
  if (blog1Link2) blog1Link2.textContent = languageData.blog1Link2;
  const blog1Link3 = document.querySelector("#blog1Link3");
  if (blog1Link3) blog1Link3.textContent = languageData.blog1Link3;
  const blog1 = document.querySelector("#blog1");
  if (blog1) blog1.textContent = languageData.blog1ShortTitle;
  const blog2 = document.querySelector("#blog2");
  if (blog2) blog2.textContent = languageData.blog2ShortTitle;

  const blog2Title1 = document.querySelector("#blog2Title1");
  if (blog2Title1) blog2Title1.textContent = languageData.blog2Title1;
  const blog2Title2 = document.querySelector("#blog2Title2");
  if (blog2Title2) blog2Title2.textContent = languageData.blog2Title2;
  const blog2Title3 = document.querySelector("#blog2Title3");
  if (blog2Title3) blog2Title3.textContent = languageData.blog2Title3;
  const blog2Title4 = document.querySelector("#blog2Title4");
  if (blog2Title4) blog2Title4.textContent = languageData.blog2Title4;
  const blog2Title5 = document.querySelector("#blog2Title5");
  if (blog2Title5) blog2Title5.textContent = languageData.blog2Title5;
  const blog2Title6 = document.querySelector("#blog2Title6");
  if (blog2Title6) blog2Title6.textContent = languageData.blog2Title6;

  const blog2Text1 = document.querySelector("#blog2Text1");
  if (blog2Text1) blog2Text1.textContent = languageData.blog2Text1;
  const blog2Text2 = document.querySelector("#blog2Text2");
  if (blog2Text2) blog2Text2.textContent = languageData.blog2Text2;
  const blog2Text3 = document.querySelector("#blog2Text3");
  if (blog2Text3) blog2Text3.textContent = languageData.blog2Text3;
  const blog2Text4 = document.querySelector("#blog2Text4");
  if (blog2Text4) blog2Text4.textContent = languageData.blog2Text4;
  const blog2Text5 = document.querySelector("#blog2Text5");
  if (blog2Text5) blog2Text5.textContent = languageData.blog2Text5;
  const blog2Text6 = document.querySelector("#blog2Text6");
  if (blog2Text6) blog2Text6.textContent = languageData.blog2Text6;
  const blog2Text7 = document.querySelector("#blog2Text7");
  if (blog2Text7) blog2Text7.textContent = languageData.blog2Text7;
  const blog2Text8 = document.querySelector("#blog2Text8");
  if (blog2Text8) blog2Text8.textContent = languageData.blog2Text8;
  const blog2Text9 = document.querySelector("#blog2Text9");
  if (blog2Text9) blog2Text9.textContent = languageData.blog2Text9;
  const blog2Text10 = document.querySelector("#blog2Text10");
  if (blog2Text10) blog2Text10.textContent = languageData.blog2Text10;
  const blog2Text11 = document.querySelector("#blog2Text11");
  if (blog2Text11) blog2Text11.textContent = languageData.blog2Text11;

  const blog2Ul1Li1 = document.querySelector("#blog2Ul1Li1");
  if (blog2Ul1Li1) blog2Ul1Li1.textContent = languageData.blog2Ul1Li1;
  const blog2Ul1Li2 = document.querySelector("#blog2Ul1Li2");
  if (blog2Ul1Li2) blog2Ul1Li2.textContent = languageData.blog2Ul1Li2;
  const blog2Ul1Li3 = document.querySelector("#blog2Ul1Li3");
  if (blog2Ul1Li3) blog2Ul1Li3.textContent = languageData.blog2Ul1Li3;
  const blog2Ul1Li4 = document.querySelector("#blog2Ul1Li4");
  if (blog2Ul1Li4) blog2Ul1Li4.textContent = languageData.blog2Ul1Li4;
  const blog2Ul1Li5 = document.querySelector("#blog2Ul1Li5");
  if (blog2Ul1Li5) blog2Ul1Li5.textContent = languageData.blog2Ul1Li5;
  const blog2Ul1Li6 = document.querySelector("#blog2Ul1Li6");
  if (blog2Ul1Li6) blog2Ul1Li6.textContent = languageData.blog2Ul1Li6;
  const blog2Ul1Li7 = document.querySelector("#blog2Ul1Li7");
  if (blog2Ul1Li7) blog2Ul1Li7.textContent = languageData.blog2Ul1Li7;

  const blog2Ul2Li1 = document.querySelector("#blog2Ul2Li1");
  if (blog2Ul2Li1) blog2Ul2Li1.textContent = languageData.blog2Ul2Li1;
  const blog2Ul2Li2 = document.querySelector("#blog2Ul2Li2");
  if (blog2Ul2Li2) blog2Ul2Li2.textContent = languageData.blog2Ul2Li2;
  const blog2Ul2Li3 = document.querySelector("#blog2Ul2Li3");
  if (blog2Ul2Li3) blog2Ul2Li3.textContent = languageData.blog2Ul2Li3;
  const blog2Ul2Li4 = document.querySelector("#blog2Ul2Li4");
  if (blog2Ul2Li4) blog2Ul2Li4.textContent = languageData.blog2Ul2Li4;
  const blog2Ul2Li5 = document.querySelector("#blog2Ul2Li5");
  if (blog2Ul2Li5) blog2Ul2Li5.textContent = languageData.blog2Ul2Li5;

  const blog2Ul2Text1 = document.querySelector("#blog2Ul2Text1");
  if (blog2Ul2Text1) blog2Ul2Text1.textContent = languageData.blog2Ul2Text1;
  const blog2Ul2Text2 = document.querySelector("#blog2Ul2Text2");
  if (blog2Ul2Text2) blog2Ul2Text2.textContent = languageData.blog2Ul2Text2;
  const blog2Ul2Text3 = document.querySelector("#blog2Ul2Text3");
  if (blog2Ul2Text3) blog2Ul2Text3.textContent = languageData.blog2Ul2Text3;
  const blog2Ul2Text4 = document.querySelector("#blog2Ul2Text4");
  if (blog2Ul2Text4) blog2Ul2Text4.textContent = languageData.blog2Ul2Text4;

  const blog2Ul3Text = document.querySelector("#blog2Ul3Text");
  if (blog2Ul3Text) blog2Ul3Text.textContent = languageData.blog2Ul3Text;

  const blog2Link1 = document.querySelector("#blog2Link1");
  if (blog2Link1) blog2Link1.textContent = languageData.blog2Link1;
  const blog2Link2 = document.querySelector("#blog2Link2");
  if (blog2Link2) blog2Link2.textContent = languageData.blog2Link2;
  const blog2Link3 = document.querySelector("#blog2Link3");
  if (blog2Link3) blog2Link3.textContent = languageData.blog2Link3;
  const blog2Link4 = document.querySelector("#blog2Link4");
  if (blog2Link4) blog2Link4.textContent = languageData.blog2Link4;
  const blog2Link5 = document.querySelector("#blog2Link5");
  if (blog2Link5) blog2Link5.textContent = languageData.blog2Link5;
  const blog2Link6 = document.querySelector("#blog2Link6");
  if (blog2Link6) blog2Link6.textContent = languageData.blog2Link6;

  const blog2Ul2Li5li1 = document.querySelector("#blog2Ul2Li5li1");
  if (blog2Ul2Li5li1) blog2Ul2Li5li1.textContent = languageData.blog2Ul2Li5li1;
  const blog2Ul2Li5li2 = document.querySelector("#blog2Ul2Li5li2");
  if (blog2Ul2Li5li2) blog2Ul2Li5li2.textContent = languageData.blog2Ul2Li5li2;
  const blog2Ul2Li5li3 = document.querySelector("#blog2Ul2Li5li3");
  if (blog2Ul2Li5li3) blog2Ul2Li5li3.textContent = languageData.blog2Ul2Li5li3;
  const blog2Ul2Li5li4 = document.querySelector("#blog2Ul2Li5li4");
  if (blog2Ul2Li5li4) blog2Ul2Li5li4.textContent = languageData.blog2Ul2Li5li4;

  const contactText = document.querySelector("#contact");
  if (contactText) contactText.textContent = languageData.contactText;
  const contactButton = document.querySelector("#contactButton");
  if (contactButton) contactButton.textContent = languageData.contactButton;
  const statusCounsel = document.querySelector("#statusCounsel");
  if (statusCounsel) statusCounsel.textContent = languageData.statusCounsel;
  const statusCounsel2 = document.querySelector("#statusCounsel2");
  if (statusCounsel2) statusCounsel2.textContent = languageData.statusCounsel2;
  const statusLeader = document.querySelector("#statusLeader");
  if (statusLeader) statusLeader.textContent = languageData.statusLeader;
  const blog1Author = document.querySelector("#blog1Author");
  if (blog1Author) blog1Author.textContent = languageData.blog1Author;
  const blog2Author = document.querySelector("#blog2Author");
  if (blog2Author) blog2Author.textContent = languageData.blog2Author;


  // Founder
  const titleFounder = document.querySelector("#titleFounder");
  if (titleFounder) titleFounder.textContent = languageData.titleFounder;

  const subjectFounder = document.querySelector("#subjectFounder");
  if (subjectFounder) subjectFounder.textContent = languageData.subjectFounder;

  const textFounder1 = document.querySelector("#textFounder1");
  if (textFounder1) textFounder1.innerHTML = languageData.textFounder1;

  const textFounder2 = document.querySelector("#textFounder2");
  if (textFounder2) textFounder2.innerHTML = languageData.textFounder2;

  const textFounder3 = document.querySelector("#textFounder3");
  if (textFounder3) textFounder3.innerHTML = languageData.textFounder3;


}

function changeLanguage(language) {
  localStorage.setItem("language", language);
  document.documentElement.lang = language;

  loadLanguageFile(language).then((languageData) => {
    applyText(languageData);

    if (language === "ka") {
      document.body.style.fontFamily = "'Noto Sans Georgian', sans-serif";
    } else {
      document.body.style.fontFamily = "'Montserrat', sans-serif";
    }
  });
}

// При загрузке страницы проверяем язык из localStorage и применяем его
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en"; // по умолчанию английский
  changeLanguage(savedLanguage);

  const languageSelector = document.getElementById("languageSelector");
  if (languageSelector) {
    languageSelector.value = savedLanguage;
  }
});
