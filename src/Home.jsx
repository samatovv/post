import { useState } from 'react';
import './App.css';
import Video from './video';  // Убедитесь, что путь правильный
import Modal from './Modal'

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
    setShowVideo(true); // Показываем видео после входа
  };

  return (
    <>
      {!showVideo ? (
        <div>
          <div onClick={handleShow} className='flex justify-center items-center lg:w-100% cursor-pointer'>
            <img className='absolute w-16 h-16' src='https://cdn-icons-png.freepik.com/512/120/120625.png'/>
            <img  src='https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/1/0/1/8378101/884482179086.jpg'/>
          </div>
            <div className='text-center font-bold mx-auto text-[25px] text-red-700 w-[370px]'>
              <p>Кыргыз кино КАРЫНДАШ Толугу менен</p>
            </div>
        </div>
      ) : (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      
      <Modal 
        showModal={showModal} 
        handleCloseModal={handleCloseModal}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default Home;
