import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import anggaImg from './components/angga.jpg';
import bgImg from './components/spider.jpeg';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };
  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };
  return (
    <Container-fluid>
      <div className="container-fluid d-flex align-items-center pt-5 pb-5" style={{ minHeight: '100vh', backgroundColor: '#4053A0' }}>
        <div className="container rounded-4 border border-2 border-secondary shadow" style={{ minHeight: '100%', backgroundColor: '#e9eaec' }}>
          <div className="row g-2 mt-2 rounded-3 shadow-sm" style={{ backgroundColor: '#4053A0' }}>
            <div className="col-12 col-md-4">
              <div className=" d-flex align-items-center p-2">
                <img src={anggaImg} alt="Angga" className="ms-2 img-fluid rounded-circle" style={{ width: '3rem', height: '3rem', objectFit: 'cover' }} />
                <h4 className=" m-0 ms-4 font-monospace fw-bold text-light">
                  Hallo, Angga <span className="text-info">ヾ(⌐■_■)ノ</span>
                </h4>
              </div>
            </div>

            <div className="col-12 col-md-4 m-0 d-flex align-items-center">
              <div className="col-4 col-md-4 h-100 d-flex align-items-center justify-content-center">
                <div className="shadow d-flex justify-content-center pt-1 pb-1 rounded-5" style={{ width: '7rem' }}>
                  <button className="btn btn-outline-info">
                    <a className="text-light fw-bold text-light text-decoration-none" href="#Home">
                      🏚️ Home
                    </a>
                  </button>
                </div>
              </div>

              <div className="col-4 col-md-4 h-100 d-flex align-items-center justify-content-center">
                <div className="shadow d-flex justify-content-center pt-1 pb-1 rounded-5" style={{ width: '7rem' }}>
                  <button className="btn btn-outline-info">
                    <a className="text-decoration-none fw-bold text-light" href="#TaskList">
                      📒 TaskList
                    </a>
                  </button>
                </div>
              </div>

              <div className="col-4 col-md-4 h-100 d-flex align-items-center justify-content-center">
                <div className="shadow d-flex justify-content-center pt-1 pb-1 rounded-5" style={{ width: '7rem' }}>
                  <button className="btn btn-outline-info">
                    <a className="text-light text-decoration-none fw-bold" href="#Footer">
                      👀 Footer
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-center me-4">
                <h5 className="text-end fw-bold font-monospace text-light">
                  --welcome <span className="fs-1"> 🥰</span>
                </h5>
              </div>
            </div>
          </div>

          {/* Awal section Home */}
          <section id="Home">
            <div className="container-fluid">
              <div className="row g-4 mt-2">
                <div className="col-12 col-md-6">
                  <div id="isi1" className="text-dark d-flex flex-column justify-content-center" style={{ height: '30rem' }}>
                    <h1 className="font-monospace">
                      Selamat
                      <span className="font-sans text-danger fw-bold"> Datang 🚀</span>
                    </h1>
                    <h4 className="fw-bold">Angga Adriasah 👋</h4>
                    <p className="lead">Gunakan web ini untuk mengatur kegiatan anda agar menjadi lebih struktur dan produktif, dengan web ini anda dapat menyimpan barbagai macam tugas, mulai dari keseharian maupun tugas kuliah.</p>
                    <Button className="text-dark border border-dark shadow btn btn-info btn-sm mb-2" type="button" onClick={handleShowForm} style={{ width: '10rem' }}>
                      + Tambahkan Tugas{' '}
                    </Button>
                    <button className="btn btn-outline-primary btn-sm" type="button" style={{ width: '10rem' }}>
                      <a href="#TaskList" className="text-dark text-decoration-none">
                        Lihat Tugas 👀
                      </a>
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div
                    className="col-12 col-lg-5 rounded-3 shadow mb-3 border border-dark"
                    style={{ height: '30rem', width: '100%', backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          {/* Akhir section Home */}

          <div className="ps-2 pe-2 mt-3 mb-4 rounded-2 d-flex align-items-center" style={{ width: '100%', height: '4rem', backgroundColor: '#4053A0' }}>
            <div className="bg-primary rounded-1 d-flex align-items-center ps-2 pe-2" style={{ width: '100%', height: '3rem' }}>
              <div className="bg-info rounded-1 d-flex align-items-center ps-2 pe-2" style={{ width: '100%', height: '2rem' }}>
                <div className="bg-warning rounded-1 d-flex align-items-center ps-2 pe-2" style={{ width: '100%', height: '1rem' }}>
                  <div className="bg-danger rounded" style={{ width: '100%', height: '0.3rem' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Awal Section TaskList */}
          <section id="TaskList">
            <div className="container">
              <div className="rounded-3 shadow p-3" style={{ backgroundColor: 'white', minHeight: '30rem' }}>
                <h5 className="text-center mt-3 mb-3 fw-bold bg-info pt-2 pb-2 rounded-5 shadow"> Tugas Anda 📒📌</h5>
                <div className="">
                  <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={showEditForm} />
                  <TaskForm show={showForm} handleClose={handleCloseForm} addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
                </div>
              </div>
            </div>
          </section>
          {/* Akhir section TaskList */}

          {/* Awal Section Footer */}
          <section id="Footer">
            <div className=" mt-3 rounded-3 shadow-sm" style={{ backgroundColor: '#4053A0' }}>
              <h6 className="pt-3 pb-3 text-center font-monospace text-light">CopyRight By Angga.Adr</h6>
            </div>
          </section>
          {/* Akhir Section Footer */}
        </div>
      </div>
    </Container-fluid>
  );
}
export default App;
