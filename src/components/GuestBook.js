import React, { useState, useEffect } from 'react';
import { Button, Form, Table, Modal } from 'react-bootstrap';

const Guestbook = () => {
  const [guests, setGuests] = useState([]);
  const [newName, setNewName] = useState('');
  const [editName, setEditName] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

 // Load data from localStorage on component mount
 useEffect(() => {
    const savedGuests = JSON.parse(localStorage.getItem('guests')) || [];
    setGuests(savedGuests);
  }, []);

  // Save data to localStorage whenever the `guests` state changes
  useEffect(() => {
    localStorage.setItem('guests', JSON.stringify(guests));
  }, [guests]);

  // Create
  const handleAddGuest = () => {
    if (newName.trim() === '') return;
    setGuests([...guests, newName]);
    setNewName('');
  };

  // Update
  const handleEditGuest = () => {
    const updatedGuests = [...guests];
    updatedGuests[editIndex] = editName;
    setGuests(updatedGuests);
    setShowModal(false);
  };

  // Delete
  const handleDeleteGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
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
          {guests.map((guest, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{guest}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => openEditModal(index)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteGuest(index)}
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
