import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        <div>
          <a
            href="https://resposive-next-js.vercel.app/page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click ME {' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
          
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      

      <div className={styles.grid}>
      <a
          href="http://localhost:3000/page"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Click Me  <span>-&gt;</span>
          </h2>
          <p> Redirect You To (http://localhost:3000/page)</p>
        </a>
        
      </div>
    </main>
  )
}
