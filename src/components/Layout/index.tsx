import { Sidebar } from '../Sidebar';
import Head from 'next/head';
import Header from '../HeaderMobile';
import CharacterBackground from '../shared/CharacterBackground';
export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Elegant Noise Records</title>
        <meta
          name="description"
          content="Futuristic Instrumental Record Label"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />

      <div className="main">
        <CharacterBackground />
        <div className="container is-fluid pt-5">{children}</div>
      </div>
    </>
  );
}
