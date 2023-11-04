import { Card } from "../components/AllComponents";

export const Schedule = () => {
  return (
    <main>
      <section className="max-w-17xl mx-auto py-7">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Card title="Spring & Summer 2023" />
          <Card title="Autumn & Winter 2023" />
        </div>
      </section>
    </main>
  );
};
