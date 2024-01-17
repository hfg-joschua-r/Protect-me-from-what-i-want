type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  const { children } = props;
  return (
    <section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-24
    flex flex-col items-start justify-center text-white`}
    >
      {children}
    </section>
  );
};

export default function Interface() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold">Protect me from what I want</h1>
      </Section>
      <Section>
        <h1 className="text-4xl font-bold">Was passiert in unserem Kopf</h1>
      </Section>
      <Section>
        <h1 className="text-4xl font-bold">Apps, hook model</h1>
      </Section>
      <Section>
        <h1 className="text-4xl font-bold">More Info</h1>
      </Section>
    </>
  );
}
