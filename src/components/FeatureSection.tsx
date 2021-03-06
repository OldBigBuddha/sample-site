import Feature from "./Feature";

const samples = [
  {
    title: "React",
    description: "Build encapsulated components that manage their own state, then compose them to make complex UIs."
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
  },
  {
    title: "VS Code",
    description: "Spend more time coding and less time switching between tools. Use features and extensions that integrate with Azure and GitHub to develop, debug, and deploy all from one place."
  }
]

const FeatureSection: React.FC = () => (
  <section className="px-24 py-12 bg-red-200">
    <h2 id="feature" className="text-4xl font-bold text-center underline mb-8">Features</h2>
    <ul className="flex justify-around">
      {samples.map(sample => <Feature title={sample.title} description={sample.description} />)}
    </ul>
  </section>
)

export default FeatureSection;