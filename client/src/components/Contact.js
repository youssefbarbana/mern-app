import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletecontact, getonecontact } from '../js/actions/Contact'
import { toggleTrue } from '../js/actions/edit'
const Contact = ({contact}) => {
  const dispatch=useDispatch()
    return (
        <div >
            
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>name: {contact.name}</Card.Title>
    <Card.Text>
      email: {contact.email}<br/>
      phone: {contact.phone}
    </Card.Text>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <Button variant="primary" onClick={()=>dispatch(deletecontact(contact._id))}>delete</Button>
    <Link to={`/edit/${contact._id}`}><Button variant="primary" onClick={()=>{dispatch(getonecontact(contact._id));dispatch(toggleTrue())}}>edit</Button></Link>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Contact
