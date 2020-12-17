import ListSectionItem from "./ListSectionItem";

type Props = {
  title: string
}

const samples = [
  {
    title: "feature1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent vel aliquam ligula."
  },
  {
    title: "feature2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent vel aliquam ligula."
  },
  {
    title: "feature3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent vel aliquam ligula."
  }
]

const ListSection: React.FC<Props> = ({ title }) => (
  <section className="px-24 py-12 bg-red-200">
    <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
    <ul className="flex justify-around">
      {samples.map(sample => <ListSectionItem title={sample.title} description={sample.description} />)}
    </ul>
  </section>
)

export default ListSection;