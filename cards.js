console.log("cards");

var situationCards = [];

// Game name, id
// Flying madness, 1
// 

situationCards.push({
  //title of the card (user sees that)
  title: "Instagram photos",
  //description of the card (user sees that)
  description: "Not every photo you take should be shared with the whole world publicly. Keep in mind that everyone can see that photo and it very likely can stay online forever.",
  //main image of the card, could be funny to be a meme (user sees that)
  image: "http://quotesnhumor.com/wp-content/uploads/2017/11/26-instagram-meme-1.jpg",
  //value from 0 to 100 how serious it can affect your life (user sees that after playing the card, used for game score)
  value: 80,
  //explanation to show how this card can hurt you
  explanation: "Can see your highly personal and work inappropriate photos (nudity, drinking, drugs, etc.)",
  //game name (user sees that) - more cards can have the same/similar game (try to think in that way)
  gameId: 1,
  game: "Flying madness",
  //game description (user sees that)
  gameDescription: "Photos are flying through the screen, you need to click on the ones you should not share online.",
  //game description for me so I know how to create your game (user does not see that)
  gameDescriptionForCreator: "Just flying photos I will send to you from the internet of things people send online. For example: Food, Nudity etc. It runs through the screen quickly, if user clicks on nudity he gets + points (as it is the thing which should not be uploaded).",
  //links on the topic of the card (user sees that after playing the card)
  links: [
    {name: "NY Daily news", link: "http://www.nydailynews.com/life-style/instagram-worst-social-network-cyber-bullying-study-article-1.3339477"}, 
    {name: "Huffington Post", link: "https://www.huffingtonpost.co.uk/entry/instagram-dangerous-app-young-peoples-mental-health_uk_591b050ee4b07d5f6ba61e23"},
    {name: "Mother\'s circle", link: "http://motherscircle.net/instagram-safety-tips-for-teens/"}
  ],
  //it is something like a link, but for more serious source, preferably one of the books from the teacher (user sees that after playing the card)
  documentation: "",
  //some important quotes or paragraphs from the links or documentation (user sees that after playing the card)
  quote: "The organization surveyed over 10,000 British teens to measure their experiences with cyberbullying. Seventeen percent of respondents reported being cyber bullied — with 42% saying they were bullied on Instagram. (NYDAILYNEWS)"
});

situationCards.push({
  //title of the card (user sees that)
  title: "Privacy Policy",
  //description of the card (user sees that)
  description: "Privacy policies, terms and conditions, and terms of service agreements are three different types of legal documents. The privacy policy tells users of websites and applications about storage, sharing and usage of personal information. The documents are usually long, and sometimes deliberately unreadable for people, and making a judgement on if it should be accepted is a hard mental task. Concequences can be far into the future, and it’s easy to think that because everyone else accepts the terms, why shouldn’t you? The mere presence of a privacy policy can also lead people to think that the website or app protects their personal information, regardless of content.",
  //main image of the card, could be funny to be a meme (user sees that)
  image: "http://s2.quickmeme.com/img/92/9236d2646cc387aca154d7519dbb1686c90fb7c7ab8c1982c28eb3e3dda2a196.jpg",
  //value from 0 to 100 how serious it can affect your life (user sees that after playing the card, used for game score)
  value: 30,
  //explanation to show how this card can hurt you
  explanation: "",
  //game name (user sees that) - more cards can have the same/similar game (try to think in that way)
  gameId: 2,
  game: "ToS game something cool",
  //game description (user sees that)
  gameDescription: "Your interviewer wants to see if you fit into the company, and will show you an example of a Terms of Service. Read through it. If you see something you don't like, don't click the accept button.",
  //game description for me so I know how to create your game (user does not see that)
  gameDescriptionForCreator: "A long blob of lorem text. Sometimes hidden inside is a privacy concern. Sometimes it’s just lorem. You get points for not accepting the terms with privacy concerns.",
  //links on the topic of the card (user sees that after playing the card)
  links: [
    {name: "ToS;DR", link: "https://tosdr.org"},
    {name: "Engadget", link: "https://www.engadget.com/2018/04/11/mark-zuckerberg-facebook-house-energy-commerce-committee-hearing/"},
    {name: "CNET", link: "https://www.cnet.com/news/yahoo-aol-oath-privacy-policy-verizon-emails-messages/"},
  ],
  //it is something like a link, but for more serious source, preferably one of the books from the teacher (user sees that after playing the card)
  documentation: "Nathaniel S. Good, Jens Grossklags, David Thaw, Aaron Perzanowski, Deirdre K. Mulligan, and Joseph A. Konstan. 2006. User choices and regret: Understanding users’ decision process about consensually acquired spyware. I/S: J. LawPolicy 2, 2 (2006), 283–344.",
  //some important quotes or paragraphs from the links or documentation (user sees that after playing the card)
  quote: ""
});

c = {
  title: "2a title",
  description: "2a description",
  gameId: 2,
  game: "game title",
  gameDescription: "game description",
  value: 10,
  explanation: "test2"
}
situationCards.push(c);

c = {
  title: "3a",
  gameId: 3,
  value: 56,
  explanation: "test3"
}

situationCards.push(c);

c = {
  title: "4a",
  value: 23,
  gameId: 4,
  explanation: "test4"
}

situationCards.push(c);

