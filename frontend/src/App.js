import './App.css';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import MainCard from './Components/MainCard/MainCard'

function App() {
  return (
    <div className="main-card">
        <h1 className="title">Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <div className="content">
          <ImageUploader />
        </div>

    </div>
  );
}

export default App;
