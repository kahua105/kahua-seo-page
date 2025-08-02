import React from 'react';

export default function Home() {
  return (
    <>
      <section style={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.video}
        >
          <source src="/main-visual.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.content}>
          <h1>世界の構造をデザインする、次世代クリエイターへ。</h1>
          <p>
            感性に、技術を。魂に、創造を。
            <br />
            AI時代の新しいクリエイティブを、あなたに。
          </p>
          <div style={styles.cta}>
<a href="#studio">&#127963; AI映像制作</a>
     <a href="#school"><span>&#127891;</span> SELF-GEN講座</a>
        <a href="#art">&#127800; KAHUA ART</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }

        .cta a {
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 20px;
          border-radius: 5px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          margin: 0 0.5rem;
        }

        .cta a:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit:
