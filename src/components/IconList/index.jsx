import IconCard from '../IconCard'
import IconModal from '../IconModal'

export default function IconList({ icons }) {
  return (
    <div className="grid md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 2xl:grid-cols-18 gap-2">
      {icons.map((icon, index) => <IconCard icon={icon} key={icon.id} />)}
      <IconModal />
    </div>
  )
}