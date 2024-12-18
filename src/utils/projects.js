const projects = [
  {
    title: "Yu-Gi-Oh! Randomizer!",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732663508/yugi.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732664481/yugi2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732652065/yugi3.png",
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
      // "https://res.cloudinary.com/daynclfo8/image/upload/v1734131390/moodgif.gif",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732664586/mood.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732664747/mood2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732664769/mood3.png",
    ],
    web: "https://mood-checker.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=LliCjVK8ZBQ",
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
    title: "Your Elder",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/v1734539224/youreldergif.gif",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732665477/elder.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732665526/elder2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732665526/elder3.png",
    ],
    inicio: "Mar 2024",
    final: "Mar 2024",
    date: "Mar 2024",
    web: "https://yourelder.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=VXR-ek3Ez50",
    github: "http://github.com/pibelanzallamas/yourelder",
    desc: "A tool designed to help elders easily search for songs on YouTube.",

    mainFeat: [
      {
        title: "Classic Songs",
        desc: "Easily search for your favorite old songs with this intuitive tool.",
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
