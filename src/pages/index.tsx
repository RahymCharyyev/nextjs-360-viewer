import { Inter } from 'next/font/google';
import { React360Viewer } from 'react-360-product-viewer';
import dynamic from 'next/dynamic';

const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <React360Viewer
          imagesBaseUrl='/white-cream'
          imageFilenamePrefix='white-cream_'
          imagesCount={35}
          imagesFiletype='png'
          mouseDragSpeed={20}
          width={1000}
          height={1000}
          showRotationIconOnStartup
        />
        <ReactPhotoSphereViewer
          src='/test1.jpg'
          height={'50vh'}
          width={'50%'}
        />
      </main>
    </>
  );
}
