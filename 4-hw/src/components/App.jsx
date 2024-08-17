import { useEffect, useMemo, useState } from 'react'
import ContactForm from './Forms/ContactForm'
import Filter from './Filter'
import ContactList from './ContactList'
import { nanoid } from 'nanoid'

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  )
  const [filter, setFilter] = useState('')

  console.log('App :>>')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    }

    const isDuplicated = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    )

    if (isDuplicated) {
      alert(`${data.name} is already in contacts`)
      return
    }

    setContacts(prevContacts => [...prevContacts, newUser])
  }

  const deleteUser = id => {
    setContacts(prevContacts => ({
      contacts: prevContacts.filter(el => el.id !== id),
    }))
  }

  const searchUser = ({ target: { value } }) => {
    setFilter(value)
  }

  // const getFilteredUsers = () => {
  //   const normalizedFilter = filter.toLowerCase()
  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(normalizedFilter)
  //   )
  // }

  const getFilteredUsers = useMemo(() => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    )
  }, [filter, contacts])

  const filteredUsers = getFilteredUsers()

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createUser={createUser} />
      <h2>Contacts</h2>
      <Filter value={filter} searchUser={searchUser} />
      <ContactList user={filteredUsers} deleteUser={deleteUser} />
    </div>
  )
}

export default App
