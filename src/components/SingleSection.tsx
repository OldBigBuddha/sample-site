type Props = {
  title: string
  description: string
}

const SingleSection: React.FC<Props> = ({title, description}) => (
  <section className="px-36 py-12 bg-yellow-200">
    <h2 id="story" className="text-4xl font-bold text-center underline mb-8">{title}</h2>
    <p className="text-xl">{description}</p>
  </section>
)

export default SingleSection;