import { Card } from "../components/AllComponents";

export const About = () => {
  return (
    <main>
      <section className="max-w-17xl mx-auto py-7">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Card title="Before Tango" />
          <Card title="First Steps" />
          <Card title="Todaro & Tango Pasion" />
          <Card title="After Tango Pasion" />
        </div>
      </section>
    </main>
  );
};
