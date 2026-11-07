import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  // Fungsi penentu warna badge prioritas
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'info';
      default: return 'secondary';
    }
  };

  // Fungsi penentu warna badge status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Done': return 'success';
      case 'In Progress': return 'primary';
      case 'To Do': return 'secondary';
      default: return 'secondary';
    }
  };

  if (tasks.length === 0) {
    return <p className="text-center text-muted mt-4">Tidak ada tugas ditemukan. Silakan tambah tugas baru!</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Card className="mb-3 shadow border-0 border-start border-bottom border-5 border-info" key={task.id}>
          <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <div className="mb-3 mb-md-0">
              <h5 className="mb-1 fw-bold">{task.name}</h5>
              <div className="mb-2">
                <Badge bg={getPriorityBadge(task.priority)} className="me-2 text-white">
                  {task.priority}
                </Badge>
                <Badge bg={getStatusBadge(task.status)}>
                  {task.status}
                </Badge>
              </div>
              <small className="text-muted">
                Dibuat pada: {task.createdAt || 'Baru saja'}
              </small>
            </div>
            <div>
              <Button variant="outline-primary" size="sm" className="me-2 px-3 rounded-pill" onClick={() => showEditForm(task)}>
                Edit
              </Button>
              <Button variant="outline-danger" size="sm" className="px-3 rounded-pill" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;