const api = axios.create({
  baseURL: `http://localhost:8008/api/v1`,
});

api.get("/images").then((res) => {
  const rd = res.data;
  bgpage = rd[0].imageUrl;
  herobg = rd[26].imageUrl;
  homecarrou1 = rd[27].imageUrl;
  homecarrou2 = rd[28].imageUrl;
  homecarrou3 = rd[29].imageUrl;
  reqbg = rd[32].imageUrl;
  secfeatimg = rd[30].imageUrl;
  secnewsfeatimg = rd[31].imageUrl;

  var elemid = function (id) {
    return document.getElementById(id);
  };

  elemid("heroBg").style.backgroundImage = `url(${herobg})`;
  elemid("imageCarrouselOne").src = homecarrou1;
  elemid("imageCarrouselTwo").src = homecarrou2;
  elemid("imageCarrouselThree").src = homecarrou3;
  elemid("requireBg").style.backgroundImage = `url(${reqbg})`;
  elemid("sectionFeaturesImageFeature").src = secfeatimg;
  elemid("sectionNewLettFeatureImage").src = secnewsfeatimg;
  //   console.log(rd);
  //   console.log(bgpage);
});
