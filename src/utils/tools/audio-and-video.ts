import type { Tool } from "../types";

export const audioAndVideo: Tool[] = [
  {
    name: "Audacity",
    preview: "/previews/audacity.png",
    description:
      "A free, open-source, cross-platform audio software for multi-track recording and editing.",
    link: "https://github.com/audacity/audacity",
    tags: ["dev", "open-source", "audio"],
    category: "Audio & Video",
  },
  {
    name: "Remotion",
    preview: "/previews/remotion.png",
    description:
      "A React library for creating videos programmatically, allowing you to build complex video compositions with React components.",
    link: "https://www.remotion.dev",
    tags: ["dev", "open-source", "video"],
    category: "Audio & Video",
  },
  {
    name: "FFmpeg",
    preview: "/previews/ffmpeg.png",
    description:
      "A powerful multimedia framework for handling video, audio, and other multimedia files and streams.",
    link: "https://github.com/FFmpeg/FFmpeg",
    tags: ["dev", "open-source", "audio", "video"],
    category: "Audio & Video",
  },
  {
    name: "Kdenlive",
    preview: "/previews/kdenlive.png",
    description:
      "A free and open-source video editor that provides a wide range of features for video editing and production.",
    link: "https://kdenlive.org",
    tags: ["open-source", "video"],
    category: "Audio & Video",
  },
  {
    name: "Shotcut",
    preview: "/previews/shotcut.png",
    description:
      "A free, open-source, cross-platform video editor that supports a wide range of formats and features.",
    link: "https://shotcut.org",
    tags: ["open-source", "video"],
    category: "Audio & Video",
  },
];
