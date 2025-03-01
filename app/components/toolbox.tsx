import { Loader2, TriangleAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Tool = {
  name: string;
  url: string;
};

const tools: Tool[] = [
  {
    name: "Mobbin",
    url: "https://www.mobbin.com/",
  },
  {
    name: "JSON Data AI",
    url: "https://www.jsondataai.com/",
  },
  {
    name: "Dev Roadmaps",
    url: "https://www.roadmap.sh/",
  },
];

export default function Toolbox() {
  return (
    <div className="w-full h-screen">
      <div className="mx-auto w-full h-full max-w-screen-lg py-10 flex-wrap flex gap-6">
        {tools.map((tools) => (
          <Tool key={tools.name} {...tools} />
        ))}
      </div>
    </div>
  );
}

function Tool(toolData: Tool) {
  return (
    <a
      className="flex w-fit h-fit items-center flex-col gap-2 hover:scale-105 transition"
      title={toolData.name}
      href={toolData.url}
    >
      <SitePreview src={toolData.url} />
      <span className="font-bold text-lg mx-auto w-32 text-center max-w-32 text-ellipsis">
        {toolData.name}
      </span>
    </a>
  );
}

function SitePreview(props: { src: string }) {
  const [imageData, setImageData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchScreenshot(url: string) {
    setLoading(false);
    setError(true);

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}`;

    fetch(apiUrl)
      .then((response) => {
        response
          .json()
          .then((data) => {
            const screenshot =
              data.lighthouseResult.audits["final-screenshot"]?.details?.data;
            if (screenshot) {
              setImageData(screenshot);
              setLoading(false);
            } else {
              setError(true);
            }
          })
          .catch((error) => {
            console.error(error);
            setError(true);
          });
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }

  useEffect(() => {
    fetchScreenshot(props.src);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="w-28 h-28 border border-gray-500 rounded-lg bg-gray-800 flex items-center justify-center">
        <Loader2 className="w-14 h-14 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-28 h-28 border border-gray-500 rounded-lg bg-gray-800 flex items-center justify-center">
        <TriangleAlertIcon className="w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="w-28 h-28 border border-gray-500 rounded-lg bg-gray-800">
      <img
        src={imageData}
        alt="Site Preview"
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </div>
  );
}
