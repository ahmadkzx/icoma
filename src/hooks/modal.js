export default function useModal(id) {
  let modalEl
  let modalBackdropEl

  function __getElements() {
    modalEl = document.getElementById(id)
    modalBackdropEl = document.querySelector('[modal-backdrop]')
  }

  function __createBackdropEl() {
    const backdrop = document.createElement('div')
    backdrop.className = 'bg-gray-900 bg-opacity-50 fixed inset-0 z-40'
    backdrop.setAttribute('modal-backdrop', true)
    document.body.appendChild(backdrop)
  }
  
  function show() {
    __getElements()
    modalEl.classList.add('flex')
    modalEl.classList.remove('hidden')
    
    if (modalBackdropEl) {
      modalBackdropEl.classList.remove('hidden')
    } else {
      __createBackdropEl()
    }
  }

  function hide() {
    __getElements()
    modalEl.classList.add('hidden')
    modalBackdropEl.classList.add('hidden')
  }

  return [show, hide]
}