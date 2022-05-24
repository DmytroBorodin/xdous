const roadmapFrameData = [
  {
    frameId: "value",
    frameTitle: "Value",
    frameSubtext:
      "We are the skaters of the internet. We’re skating between the blurred lines of the physical and digital worlds as they are beginning to blend. We are a community of individuals who aren’t afraid to push the boundaries, challenge the status quo, and communicate boldly. We’re making an impact on web3 culture.",
    frameSubtitle: "Values",
    frameParagraphs: [
      {
        textTitle: "Community first: ",
        text: "Azuki is creative, brave, relentless. It's easy to follow trends and improve incrementally. It's harder to be original and do dope sh*t. We pave our own path.",
      },
      {
        textTitle: "Trust the process: ",
        text: "Azuki is creative, brave, relentless. It's easy to follow trends and improve incrementally. It's harder to be original and do dope sh*t. We pave our own path.",
      },
      {
        textTitle: "Trust the process:",
        text: "Good things take time. Decentralized movements can't turn corners as quickly as centralized movements, and that's both a blessing and a curse. Decentralized doesn't mean there can't be leaders. The core team will provide guard rails and resources for all beans to grow together, but it won't happen overnight.",
      },
    ],
  },
  {
    frameId: "community",
    frameTitle: "Community",
    frameParagraphs: [
      {
        textTitle: "Community first: ",
        text: "Mods help protect and grow our community, the most valuable part of Azuki. We've recently brought on a group of paid full-time and part-time mods. In an effort to professionalize community management in the NFT space, Azuki mods have daily calls within the Community and Product teams, work set hours, take regular breaks, and spend time off-screen.",
      },
      {
        textTitle: "Trust the process: ",
        text: "Calling all builders, artists, and creatives. The Garden is full of talented human beans that want to use their skills and passion for Azuki to create additive things for the community. Azuki will empower and provide grants to excellent members with great ideas through a grants program. We are working through the legal framework and application process.",
      },
      {
        textTitle: "Trust the process:",
        text: "From casual hangouts to heartfelt stories, we have seen community-run spaces sprout all over Twitter. These forums are important places to grow the connective tissue of our community. See you at the next Red Bean Soup, or any of the other great spaces that are hosted by Azuki holders.",
      },
    ],
  },
  {
    frameId: "merch",
    frameTitle: "Merch / Physical World",
    frameParagraphs: [
      {
        textTitle: "Streetwear: ",
        text: "Members of The Garden can expect exclusive drops in perpetuity. First drop coming very soon.",
      },
      {
        textTitle: "Collectibles: ",
        text: "Design phase has commenced...",
      },
      {
        textTitle: "Expanding Core Team:",
        text: "We just brought on steamboy, Daph, Demna, and njoo as full-time members. Our careers page will be live soon with additional open roles.",
      },
      {
        textTitle: "IRL Events:",
        text: "Meet-ups, exhibits, music festivals, and more give us the opportunity to expand our reach beyond a purely digital experience.",
      },
    ],
  },
  {
    frameId: "metaverse",
    frameTitle: "Into the Metaverse",
    frameSubtext:
      "We are the skaters of the internet. We’re skating between the blurred lines of the physical and digital worlds as they are beginning to blend. We are a community of individuals who aren’t afraid to push the boundaries, challenge the status quo, and communicate boldly. We’re making an impact on web3 culture.",
    frameSubtitle: "Values",
    frameParagraphs: [
      {
        textTitle: "Community first: ",
        text: "Azuki is creative, brave, relentless. It's easy to follow trends and improve incrementally. It's harder to be original and do dope sh*t. We pave our own path.",
      },
      {
        textTitle: "Trust the process: ",
        text: "Azuki is creative, brave, relentless. It's easy to follow trends and improve incrementally. It's harder to be original and do dope sh*t. We pave our own path.",
      },
      {
        textTitle: "Trust the process:",
        text: "Good things take time. Decentralized movements can't turn corners as quickly as centralized movements, and that's both a blessing and a curse. Decentralized doesn't mean there can't be leaders. The core team will provide guard rails and resources for all beans to grow together, but it won't happen overnight.",
      },
    ],
  },
  {
    frameId: "giveaways",
    frameTitle: "Giveaways & Airdrops",
    frameParagraphs: [
      {
        textTitle: "Streetwear: ",
        text: "Members of The Garden can expect exclusive drops in perpetuity. First drop coming very soon.",
      },
      {
        textTitle: "Collectibles: ",
        text: "Design phase has commenced...",
      },
      {
        textTitle: "Expanding Core Team:",
        text: "We just brought on steamboy, Daph, Demna, and njoo as full-time members. Our careers page will be live soon with additional open roles.",
      },
      {
        textTitle: "IRL Events:",
        text: "Meet-ups, exhibits, music festivals, and more give us the opportunity to expand our reach beyond a purely digital experience.",
      },
    ],
  },
  {
    frameId: "add_on_mind",
    frameTitle: "Add what’s on your mind, we will check!",
    frameSubtext:
      "We truly appreciate your interest in your project and want you to head to our discord server and write what do you think on #idea-feedback channel.",
    frameParagraphs: [],
    btnText: "Join our discord",
    imgs: [
      "../imgs/rm_lst_bg_1.png",
      "../imgs/rm_lst_bg_2.png",
      "../imgs/rm_lst_bg_3.png",
      "../imgs/rm_lst_bg_4.png",
    ],
  },
];

const frameAttrs = {
  wrapperAttrs: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__wrapper",
    },
    {
      attrName: "id",
      attrVal: "",
    },
  ],
  titleBlockAttrs: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__header main__container",
    },
  ],
  titleAttrs: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__title",
    },
  ],
  closeBtnAttrs: [
    {
      attrName: "class",
      attrVal: "frame__close__btn",
    },
  ],
  subtextAttrs: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__subtext",
    },
  ],
  subtitleAttrs: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__subtitle",
    },
  ],
  textTitle: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__textitle",
    },
  ],
  text: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__text",
    },
  ],
  btn: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__button main__container",
    },
  ],
  btnIcon: [
    {
      attrName: "class",
      attrVal: "icon-sc_link_3_ic",
    },
  ],
  btnText: [
    {
      attrName: "class",
      attrVal: "roadmap__frame__btn__text",
    },
  ],
};
