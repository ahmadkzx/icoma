import DefaultLayout from '../../layouts/default'
import CreatePackModal from '../../components/CreatePackModal'

export default function LandingPage() {
  return (
    <DefaultLayout>
      <div className="container min-h-[95vh] mx-auto flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-7xl font-mono">icom</h1>
          <p className="font-thin">Create icon components using svg</p>
        </div>

        <div className="mt-5">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            data-modal-toggle="create-pack-modal"
          >
            Create new pack
          </button>
          <label for="import" className="cursor-pointer ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">
            Import
            <input type="file" id="import" className="invisible w-0" />
          </label>
        </div>
      </div>

      <CreatePackModal />
    </DefaultLayout>
  );
}
