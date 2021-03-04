import styles from '@styles/modules/layout.module.scss'
import utilStyles from '@styles/modules/utils.module.scss'
import Link from 'next/link'

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/icons/versel.svg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            {/*<Link href="/">*/}
            {/*  <a>*/}
            {/*    <img*/}
            {/*      src="/images/icons/versel.svg"*/}
            {/*      className={`${styles.headerImage} ${utilStyles.borderCircle}`}*/}
            {/*      alt={name}*/}
            {/*    />*/}
            {/*  </a>*/}
            {/*</Link>*/}
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className="text-pink-600">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
