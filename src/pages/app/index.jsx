import IconCard from '../../components/IconCard'
import DefaultLayout from '../../layouts/default'

export default function AppPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto mt-3">
        <div className="grid grid-cols-18 gap-2">
          <IconCard />
          <IconCard />
          <IconCard />
        </div>
      </div>
    </DefaultLayout>
  )
}