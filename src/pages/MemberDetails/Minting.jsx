import {React, useState} from 'react'
import MemberDetailsTable from './MembrDetailsTable'
import ReactModal from 'react-modal';


export const Minting = () => {

const [modal, setModal] = useState(false);

const handleModal = () => {
  setModal(() => !modal);
}


  return (
    <div>
  <MemberDetailsTable onClick={handleModal} />
  {/* <ReactModal isOpen={modal}>
  <table>
    <tr>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
    </tr>
    <tr>
      <td>paragraph</td>
      <td>paragraph</td>
      <td>paragraph</td>
      <td>paragraph</td>
    </tr>
      
    </table>    
  </ReactModal> */}
 </div>
  )
}
export default Minting