import { useState } from 'react'
import './App.css'
import Modal from './components/Modal/Modal'


function App() {
  const [openModal, setOpenModal] = useState(0)

  return (
    <div className='App'>
      <h3>Modal</h3>
      <div>
        <button onClick={()=>{ setOpenModal(old => {return !old})}}> Abrir o modal</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={(openModal) => { return setOpenModal(!openModal) }}>
        <p>
          Lorem ipsum dolor sit amet. A molestias fuga 33 minus porro est itaque voluptatibus eum temporibus nobis ut ratione possimus in deserunt reiciendis sed assumenda iure? Est sint cumque quo commodi cupiditate est obcaecati voluptatum sed velit officiis in error beatae! Aut internos voluptas et harum modi et sapiente iusto ut magnam minus et repellat aliquam 33 provident fuga.
        </p>
      </Modal>
    </div>
  )
}

export default App
