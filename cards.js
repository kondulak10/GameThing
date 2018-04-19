console.log("cards");

var situationCards = [];

//GAMES
// 1: Random flying good and bad photos, clicking
// 3: Falling good and bad photos, catching
// 7: Maze

// 2: Text flies up, good and bad passages, clicking
// 4: Questionare, 3 questions, 4 answers each
// 5: Yes, No questionnare, based on picture
// 6: Quick random quessing on picture

//CARDS:Game
//Instagram Photos: Game1 
//Privacy policy: Game2 
//Personalized Shopping: Game1  //TODO: Game



situationCards.push({
  title: "Instagram photos",
  description: "Not every photo you take should be shared with the whole world publicly. Keep in mind that everyone can see that photo and it very likely can stay online forever.\nInterviewer can see your personal life and all the bad things you do.\nAlso the Instagram can become a tool for comparing, which can lead to depressions.",
  image: "http://quotesnhumor.com/wp-content/uploads/2017/11/26-instagram-meme-1.jpg",
  value: 80,
  explanation: "Can see your highly personal and work inappropriate photos (nudity, drinking, drugs, etc.)",
  gameId: 1,
  game: "Flying madness",
  gameDescription: "Photos are flying through the screen, you need to click on the ones you should not share online.",
  gameDescriptionForCreator: "Just flying photos I will send to you from the internet of things people send online. For example: Food, Nudity etc. It runs through the screen quickly, if user clicks on nudity he gets + points (as it is the thing which should not be uploaded).",
  links: [
    {name: "NY Daily news", link: "http://www.nydailynews.com/life-style/instagram-worst-social-network-cyber-bullying-study-article-1.3339477"}, 
    {name: "Huffington Post", link: "https://www.huffingtonpost.co.uk/entry/instagram-dangerous-app-young-peoples-mental-health_uk_591b050ee4b07d5f6ba61e23"},
    {name: "Mother\'s circle", link: "http://motherscircle.net/instagram-safety-tips-for-teens/"}
  ],
  documentation: "",
  quote: "The organization surveyed over 10,000 British teens to measure their experiences with cyberbullying. Seventeen percent of respondents reported being cyber bullied — with 42% saying they were bullied on Instagram. (NYDAILYNEWS)"
});

situationCards.push({
  title: "Privacy Policy",
  description: "Privacy policies, terms and conditions, and terms of service agreements are three different types of legal documents. The privacy policy tells users of websites and applications about storage, sharing and usage of personal information. The documents are usually long, and sometimes deliberately unreadable for people, and making a judgement on if it should be accepted is a hard mental task. Concequences can be far into the future, and it’s easy to think that because everyone else accepts the terms, why shouldn’t you? The mere presence of a privacy policy can also lead people to think that the website or app protects their personal information, regardless of content.",
  image: "http://s2.quickmeme.com/img/92/9236d2646cc387aca154d7519dbb1686c90fb7c7ab8c1982c28eb3e3dda2a196.jpg",
  value: 50,
  explanation: "Not reading contracts and user agreements shows naivity and can get you into bad situations",
  gameId: 2,
  game: "ToS game something cool",
  gameDescription: "Your interviewer wants to see if you fit into the company, and will show you an example of a Terms of Service. Read through it. Click on texts you can never agree with",
  gameDescriptionForCreator: "A long blob of lorem text. Sometimes hidden inside is a privacy concern. Sometimes it’s just lorem. You get points for not accepting the terms with privacy concerns.",
  links: [
    {name: "ToS;DR", link: "https://tosdr.org"},
    {name: "Engadget", link: "https://www.engadget.com/2018/04/11/mark-zuckerberg-facebook-house-energy-commerce-committee-hearing/"},
    {name: "CNET", link: "https://www.cnet.com/news/yahoo-aol-oath-privacy-policy-verizon-emails-messages/"},
  ],
  documentation: "Nathaniel S. Good, Jens Grossklags, David Thaw, Aaron Perzanowski, Deirdre K. Mulligan, and Joseph A. Konstan. 2006. User choices and regret: Understanding users’ decision process about consensually acquired spyware. I/S: J. LawPolicy 2, 2 (2006), 283–344.",
  quote: ""
});

situationCards.push({
  title: "Personalized Shopping",
  description: "By using Big Data, supermarket chains and other stores can give users sales and free goods based on their purchases and patterns. This seems well and good, but this kind of information is very personal, and if used wrongly or sold/stolen by third parties, it’s possible to make up a profile of any person who use the service.",
  image: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cZuZ_Q58TzDEsX3KBMsCCwAAAA%26pid%3D15.1&f=1",
  value: 30,
  explanation: "If data leaks, interviewer can get to know your poor eating habits and health risks",
  gameId: 1,
  game: "Flying Madness",
  gameDescription: "Select the pictures of healthy items, so that the supermarket generates a more positive profile on you. Avoid the unhealthy food.",
  gameDescriptionForCreator: "Healthy and unhealty food flies by",
  links: [
    {name: "Forbes", link: "https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1fdd80336668"},

  ],
  documentation: "",
  quote: "If we send someone a catalog and say, ‘Congratulations on your first child!’ and they’ve never told us they’re pregnant, that’s going to make some people uncomfortable."
});
