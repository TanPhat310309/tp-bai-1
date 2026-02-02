import './App.css'
import Student from './Student';

function App() {
  return (
    <div className='container'>
      <h1 className="main-title">Danh sách sinh viên</h1>
      <div className="title">
        <Student name="Lý Tấn Phát" age="17" className="26.SP.IT3" hobby="Anime/Manga/LightNovel"/>
      </div>

      <div className="title">
        <Student name="Nguyễn Thanh Nhật" age="17" className="26.SP.IT3" hobby="Nấu ăn"/>
      </div>

      <div className="title">
        <Student name="Nguyễn Hoàng Cát Tường" age="17" className="26.SP.IT3" hobby="Ngủ nướng"/>
      </div>

    </div>
  );
}

export default App;
