export type Recording = {
  title: string;
  composer?: string;
  src: string;
  description?: string;
};

export const recordings: Recording[] = [
  {
    title: "Ave Maria",
    composer: "For voice and piano",
    src: "/audio/ave-maria.mp3",
  },
  {
    title: "St Joseph's Prayer",
    composer: "For voice and piano",
    src: "/audio/st-josephs-prayer.mp3",
  },
  {
    title: "Litanei",
    composer: "Schubert. For voice and piano",
    src: "/audio/litanei.mp3",
  },
  {
    title: "The Warrior is a Child",
    composer: "For voice and piano",
    src: "/audio/the-warrior-is-a-child.mp3",
  },
];
