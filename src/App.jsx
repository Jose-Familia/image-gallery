import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function App() {
  const images = [
    {
      // 600px x 400px photos
      original: 'https://picsum.photos/id/1018/600/400/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      // 600px x 400px photos
      original: 'https://picsum.photos/id/1019/600/400/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      // 600px x 400px photos
      original: 'https://picsum.photos/id/1020/600/400/',
      thumbnail: 'https://picsum.photos/id/1020/250/150/',
    },
  ];

  return (
    <div style={{width: "70vw", margin: "auto"}}>
      <ImageGallery items={images} />
    </div>
  );
}

export default App;