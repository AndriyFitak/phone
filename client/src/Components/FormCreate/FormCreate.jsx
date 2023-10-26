import s from './FormCreate.module.scss'
const FormCreate = (props) => { 
    const contactCandidate = {
        name: '',
        phone:''
    }
    const handleChangeInput = (inputName, inputValue) => { 
        contactCandidate[inputName] = inputValue
    }
    const handleCreate = () => { 
        const newStore = [ 
            ...props.contactsStore, 
            {   
                id: props.contactsStore.length > 0 
                    ? props.contactsStore[props.contactsStore.length-1].id + 1
                    : 1,
                ...contactCandidate
            }
        ]
        contactCandidate.name = ''
        contactCandidate.phone = ''
        props.reRender(newStore)
    }
    return ( 
        <div className={s.form}>
            <input 
                className={s.form_input} 
                type="text" 
                placeholder="Write name"
                onChange={(e) => {
                    handleChangeInput('name', e.target.value)
                    e.target.value = contactCandidate.name
                }}
            />
            <input 
                className={s.form_input}
                type="text"
                placeholder="Write price" 
                onChange={(e) => {
                    handleChangeInput('phone', e.target.value)
                    e.target.value = contactCandidate.phone
                }}
            />
            <button
                onClick={handleCreate}
                className={s.form_btn}
             >Create</button>
        </div>
    )
}

export default FormCreate