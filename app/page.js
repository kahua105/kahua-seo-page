// app/page.js

export default function Home() {
  return (
    <>
      <head>
        <title>KAHUA｜記憶を揺らす一滴</title>
        <meta name="description" content="KAHUAのアートは、記憶を揺らし、世界へ干渉する。思想が作品となり、あなたに触れるLP。" />
        <meta name="keywords" content="KAHUA, アート, NFT, 観測アート, 干渉, 精神構造, 芸術" />

        {/* OGP設定 */}
        <meta property="og:title" content="KAHUA｜記憶を揺らす一滴" />
        <meta property="og:description" content="KAHUAのアートは、思想と干渉のための装置。記憶の一滴が、あなたの世界に届く。" />
        <meta property="og:image" content="https://kahua.art/ogp.jpg" />
        <meta property="og:url" content="https://seo.kahua.art" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <main style={{ padding: '3rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem' }}>記憶を揺らす、一滴。</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
          このページは、KAHUAが世界に届ける“思想アート”の入口。<br />
          観る者の内面へ静かに干渉し、記憶に作用する作品群。<br />
          あなたが開く、最初のゲートかもしれません。
        </p>

        {/* CTAボタン */}
        <a href="https://kahua.art" target="_blank" style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          marginTop: "2rem"
        }}>
          KAHUAの作品を見る
        </a>
      </main>
    </>
  )
}

