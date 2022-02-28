import DefaultLayout from '../../layouts/default'

export default function LandingPage() {
  return (
    <DefaultLayout>
      <div className="container min-h-[95vh] mx-auto flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-7xl font-mono">icom</h1>
          <p className="font-thin">Create icon components using svg</p>
        </div>

        <div className="mt-5">
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create new pack</button>
          <button class="ml-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Import</button>
        </div>
      </div>
    </DefaultLayout>
  )
}
