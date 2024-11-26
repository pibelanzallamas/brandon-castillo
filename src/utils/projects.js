const projects = [
  {
    title: "Yu-Gi-Oh! Randomizer!",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732652065/yugi.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732652983/yugi2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732653099/yugi3.png",
    ],
    inicio: "Jul 2024",
    final: "Jul 2024",
    date: "Jul 2024",
    web: "https://givemeayugiohcard.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=NEzQ7VnWCLI",
    github: "http://github.com/pibelanzallamas/givemeayugiohcard",
    desc: "Website for getting a random Yu-Gi-Oh! card from all cards: monsters, spells, traps, etc. It use the YGOPRODeck API.",
    mainFeat: [
      {
        title: "Get a random YGO! Card!",
        desc: "Get a random card from the most large Yu-Gi-Oh! database that keeps updating.",
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
      "Axios",
      "React",
      "Javascript",
      "Sass",
      "react-router-dom",
    ],
  },
  {
    title: "Mood Checker",
    photos: [
      //usar una imagén más
      "https://res.cloudinary.com/daynclfo8/image/upload/v1730124633/mood_ac8ky0.png",
    ],
    web: "https://calles-construction.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=LliCjVK8ZBQ",
    github: "https://github.com/pibelanzallamas/mood-checker", //modificar el readime
    desc: "Website for recommending music based on your mood.", //agrandar un pooc
    inicio: "May 2024",
    final: "May 2024",
    date: "May 2024",
    mainFeat: [
      //hacer estos
      {
        title: "Custom Styling",
        desc: "Format and style code snippets with your preferred colors and designs.",
      },
      {
        title: "Export as Image",
        desc: "Easily export your styled snippets as images for sharing.",
      },
    ],
    techs: ["React", "Css", "react-router-dom"],
  },
  {
    title: "Your Elder",
    photos: [
      //agregarle dos imagénes más
      "https://res.cloudinary.com/daynclfo8/image/upload/v1730604495/yourelder_g7n0w7.png",
      "img2",
      "img3",
    ],
    inicio: "Mar 2024",
    final: "Mar 2024",
    date: "Mar 2024",
    web: "https://yourelder.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=VXR-ek3Ez50",
    github: "http://github.com/pibelanzallamas/yourelder", //mod readme
    desc: "YouTube song searcher for elders.",

    mainFeat: [
      //hacer estos
      {
        title: "Custom Styling",
        desc: "Format and style code snippets with your preferred colors and designs.",
      },
      {
        title: "Export as Image",
        desc: "Easily export your styled snippets as images for sharing.",
      },
    ],
    techs: [
      "React",
      "Sass",
      "Axios",
      "dotEnv",
      "youtube-api-search",
      "google-api-client",
      "react-router-dom",
    ],
  },
];

export default projects;
