export type Artist = {
  name: string;
  role: string;
  image: string;
  bio: string[];
};

export const artists: Artist[] = [
  {
    name: "Alvin Tan",
    role: "Baritone",
    image: "/images/alvin-portrait-blue.jpg",
    bio: [
      "Alvin Tan is a Singaporean baritone whose artistic journey spans opera, classical song, Chinese cultural expression, and contemporary vocal projects. Trained in the Western classical tradition, he has performed in opera, concert, and recital settings, bringing together vocal discipline, emotional directness, and a deep sensitivity to text.",
      "His performance background includes international vocal competitions, opera productions, and cross-cultural music projects. In recent years, Alvin has also developed a distinctive artistic direction that bridges classical singing with Chinese aesthetics, sacred repertoire, and new vocal expression.",
      "Together with pianist Wayne Teo, he presents intimate voice and piano programmes for sacred spaces, private gatherings, and recital settings.",
    ],
  },
  {
    name: "Wayne Teo",
    role: "Piano",
    image: "/images/wayne-piano-portrait.jpg",
    bio: [
      "Wayne Teo is a Singapore-based pianist and accompanist whose training spans solo piano, chamber music, and vocal collaboration. He graduated from the École Normale de Musique de Paris, where he studied solo piano with Erik Berchot and chamber music with the late Devy Erlih. He was awarded the Premier Prix à l’unanimité avec les félicitations du Jury, coming out top of his cohort.",
      "He later won 2nd prize at the International Nikolai Rubinstein Competition in Paris and continued his studies at La Schola Cantorum under Igor Lazko. His musical formation also includes the Isang Yun Music Academy at the Tongyeong International Music Festival, as well as masterclasses with Olivier Cazal and Cecile Wang. Wayne obtained the Music Diploma of the State in France and was awarded 3rd prize at the Thailand International Chopin Piano Competition.",
      "As a collaborative pianist, Wayne works across vocal accompaniment, chamber music, vocal coaching, musical theatre, and instrumental repertoire.",
    ],
  },
];
