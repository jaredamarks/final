import React, { useState, useEffect } from 'react';
import { Button, Form, Table, Modal } from 'react-bootstrap';

const Guestbook = () => {
  const [guests, setGuests] = useState([]);
  const [newName, setNewName] = useState('');
  const [editName, setEditName] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

//endpoint URL
const URL = "http://localhost:3000/guests"

 // UseEffect runs function to get Guests for state to hold and display from the db.json file using json-server
 useEffect(() => {
  console.log("useEffects ran")
    getGuests()
  }, []);


  async function getGuests(){
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("response from server: ", data);
      setGuests(data);
    } catch (error) {
      console.error('Error fetching guests:', error);
    }
  }

  // Create
  const handleAddGuest = () => {
   
   console.log(newName);
    const user = { guest: newName };
    postGuest(user);
    //setGuests([...guests, user]);
    setNewName('');
  };

 const postGuest = async (user) => {
   const response = await fetch(URL, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(user),
   })
   getGuests()
  }

  // Update
  const handleEditGuest = () => {
    const updatedGuests = [...guests];
    updatedGuests[editIndex] = editName;
    setGuests(updatedGuests);
    setShowModal(false);
  };

  // Delete
  const handleDeleteGuest = async (index) => {
    const response = await fetch(URL + '/' + index, 
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      
    
    //setGuests(guests.filter((_, i) => i !== index));
    getGuests();
  };

  // Open Modal for Edit
  const openEditModal = (index) => {
    setEditName(guests[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2>GuestBook</h2>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button variant="primary" onClick={handleAddGuest} className="ms-2">
          Add
        </Button>
      </Form>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests && guests.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.id}</td>
              <td>{guest.guest}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => openEditModal(guest.id)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteGuest(guest.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Guest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditGuest}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Guestbook;
