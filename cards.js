console.log("cards");

var situationCards = [];

//GAMES
// 1xx: Random flying good and bad photos, clicking
// 3: Falling good and bad photos, catching
// 7x: Maze

// 2x: Text flies up, good and bad passages, clicking
// 4x: Questionare, 3 questions, 4 answers each
// 5x: Yes, No questionnare, based on picture
// 6x: Quick random quessing on picture

//CARDS:Game
//Instagram Photos: 1 
//Privacy policy: 2 
//Personalized Shopping: 1 
//Application permission: 5
//Fitness: 7
//Facebook: 4
//Name: 6



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
    { name: "NY Daily news", link: "http://www.nydailynews.com/life-style/instagram-worst-social-network-cyber-bullying-study-article-1.3339477" },
    { name: "Huffington Post", link: "https://www.huffingtonpost.co.uk/entry/instagram-dangerous-app-young-peoples-mental-health_uk_591b050ee4b07d5f6ba61e23" },
    { name: "Mother\'s circle", link: "http://motherscircle.net/instagram-safety-tips-for-teens/" }
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
  game: "User agreement",
  gameDescription: "Your interviewer wants to see if you fit into the company, and will show you an example of a Terms of Service. Read through it. Click on texts you can never agree with",
  gameDescriptionForCreator: "A long blob of lorem text. Sometimes hidden inside is a privacy concern. Sometimes it’s just lorem. You get points for not accepting the terms with privacy concerns.",
  links: [
    { name: "ToS;DR", link: "https://tosdr.org" },
    { name: "Engadget", link: "https://www.engadget.com/2018/04/11/mark-zuckerberg-facebook-house-energy-commerce-committee-hearing/" },
    { name: "CNET", link: "https://www.cnet.com/news/yahoo-aol-oath-privacy-policy-verizon-emails-messages/" },
  ],
  documentation: "Nathaniel S. Good, Jens Grossklags, David Thaw, Aaron Perzanowski, Deirdre K. Mulligan, and Joseph A. Konstan. 2006. User choices and regret: Understanding users’ decision process about consensually acquired spyware. I/S: J. LawPolicy 2, 2 (2006), 283–344.",
  quote: `..."analyzes and stores all communications content, including email content," so the company has previously disclosed that it's been able to scan the contents of your emails, at least (CNET)`
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
    { name: "Forbes", link: "https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1fdd80336668" },

  ],
  documentation: "",
  quote: "If we send someone a catalog and say, ‘Congratulations on your first child!’ and they’ve never told us they’re pregnant, that’s going to make some people uncomfortable."
});


situationCards.push(
  {
    title: "Application permission",
    description: "Your mobile phone has an array of sensors that can track your every move. When you install a new application, you might get a question for it to track your location, see your contacts or photos, or read your device information. But why do that new game you just installed need your precice location, even when your phone is sleeping? When you install a new application, think about the permissions it need, and if the possible ramifications are worth it. If you are unsure what a permission means, find an explanation on the internet. It is also a good idea to read the Privacy Policy of the application, to see what it can do with your information.",
    image: "https://www.howtogeek.com/wp-content/uploads/2015/10/2017-06-08-14.44.59.png",
    value: 70,
    explanation: "App with too many permissions can compromite your phone and the data you send and receive",
    game: "APP permissions",
    gameDescription: "Look at each permission and decide whether it is necessary for the functioning or it is too much.",
    gameDescriptionForCreator: "Just find a selection of app permission screens for popular app and display them sequentially. I will find some and add links as comments here. Good thing about this is both adding a method of interaction between the players of the game while also adding minimal extra work for us.",
    links: [{
      name: "The Atlantic",
      link: "https://www.theatlantic.com/technology/archive/2014/05/your-app-permissions-could-be-taking-advantage-of-your-data/361830/"
    },
    { name: "Livemint", link: "https://www.livemint.com/Technology/MgXdozaCPINNWh8AvbRUCO/Android-users-should-take-app-permissions-more-seriously.html" },
    { name: "Daily Mail", link: "http://www.dailymail.co.uk/sciencetech/article-5550535/Googles-Android-allowed-Facebook-collect-users-call-logs-text-messages.html" }],
    documentation: "Lin, Jialiu, et al. \"Modeling users’ mobile app privacy preferences: Restoring usability in a sea of permission settings.\" (2014)",
    quote: "While some of these permissions are necessary for the app to function, some apps take advantage of that process to gather (and exploit) information they may not actually need. (The Atlantic)" 
  }
)

situationCards.push({
  title: "Open profile on fitness app",
  description: "While social media often can pinpoint the area you are located in, an open profile in any fitness related social media very quickly can tell people exactly where you are through running routes etc. Making it easy for people to find you, including people you might not want to deal with.\n\nIt can also show to the interviewer your poor health condition and he can secretly discriminate you. ",
  image: "https://www.howtogeek.com/wp-content/uploads/2015/10/2017-06-08-14.44.59.png",
  value: 20,
  explanation: "It is only a potentional issue",
  game: "Endless runner",
  gameDescription: "Your goal is to perform your training quickly, collect all the cherries and avoid all the creepos",
  gameDescriptionForCreator: "Mario run wiht shady looking people as obstacles or so.",
  links: [{
    name: "The Guardian",
    link: "https://www.theguardian.com/world/2018/jan/28/fitness-tracking-app-gives-away-location-of-secret-us-army-bases"
  },
  {
    name: "Wired",
    link: "https://www.wired.com/story/strava-privacy-settings-how-to/"
  }],
  documentation: "",
  quote: "And then there are things you don't particularly want it to do, like stalk your every move and follow you home at night. (The Wired)"
})

situationCards.push({
  title: "Facebook permissions",
  description: "While Facebook might share your information with people regardless of your privacy settings, a snoopy boss that is preparing for a job interview with you will need to visit your profile to succesfully learn information about you. If your profile is public this will hand him or her a lot of information that is far too private to be relevant to the interviewing process. ",
  image: "",
  value: 90,
  explanation: "Facebook profile is very likely to be visited by interviewer to check you",
  game: "Answer questions",
  gameDescription: "Answer the questions based on your knowledge and what you have read in the detail of the card",
  gameDescriptionForCreator: "Clicking away things like race, gender, age, political views, interests, hobbies etc while avoiding to click words like experience, education etc",
  links: [
    {
      name: "Monster",
      link: "https://www.monster.com/career-advice/article/do-this-before-you-friend-your-boss-on-facebook"
    },
    {
      name: "AmericanBar",
      link: "https://www.americanbar.org/publications/gp_solo/2012/november_december2012privacyandconfidentiality/to_snoop_or_not_privacy_rights_applicants_potential_employees.html, https://forskning.no/arbeid-ledelse-og-organisasjon/2012/01/vanskeligere-fa-jobbintervju-med-utenlandsk-navn "
    },
    {
      name:  "ScientificAmerican",
      link: "https://blogs.scientificamerican.com/observations/the-facebook-controversy-privacy-is-not-the-issue/"
    }
    
  ],
  documentation: "Simply put if a employeer has access to material he will use it and even if not intentionally there will always be a subconscious bias present during the interview. And things that should have no relevancy to the hiring process such as religion might make a difference. This is evident for example in Norway that people with foreign sounding names often get bypassed for jobs while if they change their name to Norwegian sounding they get a job interview with the exact same application/CV.",
  quote: "Friending your boss on Facebook can be a risky move. Let’s face it: We all have a skeleton or two in our virtual closet, and you’re basically giving your manager a front row seat. (Monster)"
})

situationCards.push({
    title: "Using real name online",
    description: "Anytime you put something on the Internet stamped with your own name you are at risk of it showing up in a Google search on your name. Often times discussions online can get heated or contain personal views or oppinions that should not be relevant to a job interviewing process.",
    image: "",
    value: 65,
    game: "Choose appropriate post",
    explanation: "Many pages and sites have really good SEO. It can happend then by googling your name, interviewer can get all your posts",
    gameDescription: "Click on the post you would find appropriate - focus on the content",
    gameDescriptionForCreator: "",
    links: [{
      name: "LifeHacker",
      link: "https://lifehacker.com/5824839/do-you-use-your-real-name-online"
    },
    {
      name: "CyberSafetyLady",
      link: "https://thecybersafetylady.com.au/2011/08/should-you-use-your-real-name-on-the-internet/"
    }
  ],
    documentation: "",
    quote: "Even so, there are other very good reasons to stay anonymous online, whether it's because you live in a place where it's not safe to speak freely, you're commenting on a topic you don't want others who know you to see, you're a member of a minority group, or you're just new to a community and don't want to go in with both feet yet. (LifeHacker)"
})