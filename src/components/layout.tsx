import styles from '@styles/modules/layout.module.scss'
import Link from 'next/link'
import ThemePanel from "@components/ThemePanel";
import * as React from "react";

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }:{
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/icons/versel.svg"
              className={`${styles.headerHomeImage}`}
            />

          </>
        ) : (
            null
        )}
      </header>

      <main>{children}
        <ThemePanel/>
      </main>

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
