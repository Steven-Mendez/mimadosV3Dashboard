import React from 'react';
import Sidebar from './../components/sidebar';
import Header from './../components/Header';
import Timeline from './../components/TimeLine/Timeline';
import './ReleaseNotesScreen.css';

const ReleaseNotesScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Notas de la versión </h2>
          </div>
          <Timeline />
        </section>
      </main>
    </>
  );
};

export default ReleaseNotesScreen;
