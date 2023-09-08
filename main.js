const scrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,

};
//head container
ScrollReveal().reveal(".head-container h1",scrollRevealOption);
ScrollReveal().reveal(".head-container h4",{
  ...scrollRevealOption,
  delay:500,
});

ScrollReveal().reveal(".head-container .btn",{
    ...scrollRevealOption,
    delay:1000,
  });

//About Container
ScrollReveal().reveal(".about-container .about-image",scrollRevealOption);
ScrollReveal().reveal(".about-container .section-header",{
    ...scrollRevealOption,
    delay:500,
  });
ScrollReveal().reveal(".about-container .section-subheader",{
    ...scrollRevealOption,
    delay:1000,
  });

  ScrollReveal().reveal(".about-container .about-flex",{
    ...scrollRevealOption,
    delay:1500,
  });

  ScrollReveal().reveal(".about-container .btn",{
    ...scrollRevealOption,
    delay:1800,
  });

  //discover container
//   ScrollReveal().reveal(".discover-container .section-header",scrollRevealOption);
// ScrollReveal().reveal(".discover-container .section-subheader",{
//     ...scrollRevealOption,
//     delay:500,
//   });
  ScrollReveal().reveal(".discover-card ",{
    ...scrollRevealOption,
    interval:500,
  });

  ScrollReveal().reveal(".discover-card-content ",{
    ...scrollRevealOption,
    interval:500,
    delay:200,
  });

  //Blog container
  ScrollReveal().reveal(".blog-card ",{
    ...scrollRevealOption,
     duration:1000,
     interval:400,
  });
