import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => (
<Modal 
isOpen={!!props.selectedOption}
contentLabel="SelectedOption">
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleSelectedOption}>Ok</button>
</Modal>
);
export default OptionModal