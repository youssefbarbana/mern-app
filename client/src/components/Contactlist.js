
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcontact } from '../js/actions/Contact'
import Contact from './Contact'

const Contactlist = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contactreducer.contacts)
    const loadcontacts = useSelector(state => state.contactreducer.loadcontacts)
    console.log(contacts,loadcontacts)
    useEffect(() => {
        dispatch(getcontact())
        
    }, [dispatch])
   
    return (
        <div style={{display:"grid", gridTemplateColumns:"30% 30% 30%", marginLeft:"10%",gridGap:"20px"}}>
           
           {loadcontacts? (<h2>loading...</h2>): (contacts.map(el => <Contact key={el._id} contact={el}/>))}
           
        </div>
    )
}

export default Contactlist
