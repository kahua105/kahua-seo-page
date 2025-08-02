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
          <h1 style={styles.title}>世界の構造をデザインする、次世代クリエイターへ。</h1>
          <p style={styles.description}>
            感性に、技術を。魂に、創造を。
            <br />
            AI時代の新しいクリエイティブを、あなたに。
          </p>
          <div style={styles.cta}>
            <a href="#studio" style={styles.link}>🏛️ AI映像制作</a>
            <a href="#school" style={styles.link}>🎓 SELF-GEN講座</a>
            <a href="#art" style={styles.link}>🌸 KAHUA ART</a>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },
  cta: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  link: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '12px 24px',
    borderRadius: '8px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    fontSize: '1rem',
    fontWeight: '500',
  },
};
