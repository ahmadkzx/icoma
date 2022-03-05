import IconCard from '../IconCard'
import IconModal from '../IconModal'

export default function IconList({ icons }) {
  return (
    <div className="grid grid-cols-18 gap-2">
      {icons.map((icon, index) => <IconCard icon={icon} key={icon.id} />)}
      <IconModal />
    </div>
  )
}