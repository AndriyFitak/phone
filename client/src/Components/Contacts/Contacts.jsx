import ContactItem from './ContactsItem'
import s from './contacts.module.scss'
const Contacts = (props) => { 
    const ContactsCollection = props.list.map(el => {
        const handleDeleteItem = (idToDelete) => {
            const  newList = props.list.filter(item => item.id !==idToDelete)
            props.reRender(newList)
        }
        return (
            <ContactItem
                key={el.id}
                name={el.name}
                phone={el.phone}
                handleDeleteItem = {() => handleDeleteItem(el.id)}
            />
        )
    })
   
    return ( 
        <ul className={s.list}>
            {ContactsCollection}
        </ul>
    )
}

export default Contacts