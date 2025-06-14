const projects = [
  {
    title: "Yu-Gi-Oh! Randomizer!",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1732663508/yugi.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1732664481/yugi2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1732652065/yugi3.png",
    ],
    inicio: "Jul 2024",
    final: "Jul 2024",
    date: "Jul 2024",
    web: "https://givemeayugiohcard.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=NEzQ7VnWCLI",
    github: "http://github.com/pibelanzallamas/givemeayugiohcard",
    desc: "Website for getting a random Yu-Gi-Oh! card from the whole collection. Build it with NodeJs, Express and React. It use an external API.",
    mainFeat: [
      {
        title: "Draw a Random Card",
        desc: "Fetch a random Yu-Gi-Oh! card from YGOPRODeck, the most comprehensive and regularly updated Yu-Gi-Oh! API.",
      },
      {
        title: "Save the image",
        desc: "Click on the card image to save it in full resolution.",
      },
    ],
    techs: [
      "NodeJs",
      "Express",
      "Curl",
      "YGOPRODeck API",
      "React",
      "Javascript",
      "Axios",
      "Sass",
    ],
  },
  {
    title: "Mood Checker",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1749922132/2025-06-14_14-28_hb42xi.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1749922225/2025-06-14_14-30_cauesh.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1749922322/2025-06-14_14-31_hxnue7.png",
    ],
    web: "https://mood-checker.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=AoEKSxLDWao",
    github: "https://github.com/pibelanzallamas/mood-checker",
    desc: "A website that recommends music tailored to your mood.",
    inicio: "May 2024",
    final: "May 2024",
    date: "May 2024",
    mainFeat: [
      {
        title: "Discover Random Songs",
        desc: "Receive song recommendations tailored to the mood you select.",
      },
    ],
    techs: ["React", "Javascript", "Sass"],
  },
  {
    title: "YouFast",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1739567387/elder_2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1749922540/2025-06-14_14-35_yit3uy.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1749923307/2025-06-14_14-48_r2pqdj.png",
    ],
    inicio: "Mar 2024",
    final: "Mar 2024",
    date: "Mar 2024",
    web: "https://youfast.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=lVOHTdXnGaI ",
    github: "http://github.com/pibelanzallamas/yourelder",
    desc: "A tool designed to help elders easily search for songs on YouTube.",

    mainFeat: [
      {
        title: "Faster easier song searcher",
        desc: "Easily search for your favorite songs with this intuitive tool.",
      },
    ],
    techs: [
      "React",
      "Javascript",
      "Axios",
      "dotEnv",
      "Sass",
      "youtube-api-search",
      "google-api-client",
      "react-router-dom",
    ],
  },
];

export default projects;
