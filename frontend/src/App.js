import './App.css';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import MainCard from './Components/MainCard/MainCard'

function App() {
  return (
    <div>
        <p className="title">React Drag and Drop Image Upload</p>
        <div className="content">
          <ImageUploader />
        </div>

    </div>
  );
}

export default App;
