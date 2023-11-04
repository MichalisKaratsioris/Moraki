import Performance from "../assets/videos/Pavadita.mp4";

export const Home = () => {
  return (
    <main>
      <video className="w-full h-auto max-w-full" controls muted autoPlay>
        <source src={Performance} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
};
