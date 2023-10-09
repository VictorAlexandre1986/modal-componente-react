import React from 'react'


const BACKGROUND_STYLE = {
    position: 'fixed',
    top:'0',
    bottom:'0',
    right:'0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '1000'

}

const MODAL_STYLE = {
    position: 'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    padding:'100px',
    backgroundColor:'#fff',
    borderRadius:'10px',
    color:'black'
}

const FECHAR_STYLE = {
    position:'fixed',
    top:'10px',
    right:'15px'
}

const CONTEUDO_STYLE ={
    marginBottom:'3rem'
}

const Modal = (props) => {
  if(props.isOpen){
      return (
        <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
                <div style={FECHAR_STYLE}>
                    <span onClick={props.setModalOpen}>X</span>
                </div>
                <div style={CONTEUDO_STYLE}>
                    {props.children}
                </div>
                <button onClick={props.setModalOpen}>Fechar</button>       
            </div>
            
        </div>
      )
  }
}

export default Modal