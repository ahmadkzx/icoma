export default function CreatePackModal() {
  return (
    <div
      id="create-pack-modal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-700">
          <div className="flex justify-between items-start p-5 rounded-t border-b border-gray-500">
            <h3 className="text-xl font-semibold lg:text-2xl text-white">
              Create new pack
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              data-modal-toggle="create-pack-modal"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Name</label>
            <input type="email" id="email" class="border text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Awesome Pack" required />
          </div>
          
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600">
            <button
              data-modal-toggle="create-pack-modal"
              type="button"
              className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Create
            </button>
            <button
              data-modal-toggle="create-pack-modal"
              type="button"
              className="focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
