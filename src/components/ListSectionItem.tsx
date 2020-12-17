type Props = {
  title: string
  description: string
}

const ListSectionItem: React.FC<Props> = ({title, description}) => (
  <li>
    <div className="p-6">
      <p className="text-xl font-bold text-center">{title}</p>
      <p>{description}</p>
    </div>
  </li>
);

export default ListSectionItem;