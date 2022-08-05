import React, { useState } from 'react';
import reportWebVitals from './reportWebVitals';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// Modal.setAppElement('#App');
function App() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000, abc: '' },
    { make: "Ford", model: "Mondeo", price: 32000, abc: '' },
    { make: "Porsche", model: "Boxster", price: 72000, abc: '' }
  ]);


  const [rowData1] = useState([
    { name: "Abhishek", company: "TCS" },
    { name: "Sabu", company: "INFY" },
    { name: "Rama", company: "google" }
  ]);

  const [columnDefs1] = useState([
    { field: 'name' },
    { field: 'company' },
    // { field: 'price' },
    { field: 'abc', cellRendererFramework: (params) => <div><button onClick={() => actionButton1(params)}>Click</button></div> },

  ]);





  const actionButton = (params) => {
    console.log(params.data);
    setIsOpen(true);

  }


  const actionButton1 = (params) => {
    console.log(params.data);
    setselecteddata(params.data);
    console.log(selecteddata);
    setIsOpen(false);

  }
  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'abc', cellRendererFramework: (params) => <div><button onClick={() => actionButton(params)}>Click</button></div> },

  ]);
  const [selecteddata, setselecteddata] = useState();



  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function setdata(event) {
    console.log(event.data);
    //setselecteddata(event.data);
    setIsOpen(false);

    console.log(selecteddata);
    // alert("hello");
  }


  return (
    <div className="App">


      <p>NAME: {selecteddata ? selecteddata.name : ''}</p>
      <p>COMPANY: {selecteddata ? selecteddata.company : ''}</p>
      {/* <p>PRICE: {selecteddata ? selecteddata.price : ''}</p> */}

      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>


        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}>

        </AgGridReact>
      </div>


      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>


          <AgGridReact
            rowData={rowData1}
            columnDefs={columnDefs1}>
          </AgGridReact>
        </div>
      </Modal>

    </div>
  );
}

export default App;
