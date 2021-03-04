import * as React from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../src/components/layout'
import utilStyles from '@styles/modules/utils.module.scss'
import Link from 'next/link'
import modalTransition from '@styles/transitions/fade.module.scss';
import {CSSTransition} from 'react-transition-group';

import Modal from '@components/CustomModal'
import Modal2 from '@components/ConfirmModal'

import Deskera from "@public/images/deskera-logo.svg"

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [confirmModal, setConfirmModal] = React.useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  };

  const handleOpenModal2 = () => {
    setConfirmModal(!confirmModal)
  };

  const handleAcept = () => {
    console.log(true);
  };
  const handleDegree = () => {
    console.log(false);
  };

  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <button
          onClick={() => setModalIsOpen(true)}
          className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold
           py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="button">

          <Deskera/>
        </button>


        <button type="button"
                onClick={() => setConfirmModal(true)}
                className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg
                shadow-md hover:bg-red-700 focus:outline-none">
          Confirm modal
        </button>

        <CSSTransition
          in={modalIsOpen}
          timeout={200}
          classNames={modalTransition}
          unmountOnExit
        >
          <Modal isOpen={modalIsOpen} closeModal={handleOpenModal}/>
        </CSSTransition>

        <CSSTransition
          in={confirmModal}
          timeout={200}
          classNames={modalTransition}
          unmountOnExit
        >
          <Modal2
            isOpen={confirmModal}
            closeModal={handleOpenModal2}
            accept={handleAcept}
            decline={handleDegree}
          />
        </CSSTransition>

        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            1111111111111111111111111111111111111111111111111111111111111
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>

          <div dangerouslySetInnerHTML={{__html: '<p><b>TEST</b></p>'}} />;
          <br/>
          <br/>
          <Link href="/posts">
            <a> go on POSTS</a>
          </Link>
        </section>
      </>
    </Layout>
  )
}

