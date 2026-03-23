import './App.css'
import Student from './Student';

function App() {
  return (
    <div className='container'>
      <h1 className="main-title">Danh sách sinh viên</h1>
      <div className="title1">
        <Student name="Lý Tấn Phát" age="17" className="26.SP.IT3" hobby="Anime/Manga/Manhwa/Manhua"/>
      </div>

      <div className="title2">
        <Student name="Nguyễn Thanh Nhật" age="17" className="26.SP.IT3" hobby="Nấu ăn"/>
      </div>

      <div className="title3">
        <Student name="Nguyễn Hoàng Cát Tường" age="17" className="26.SP.IT3" hobby="Ngủ nướng"/>
      </div>

      <div className="title4">
        <Student name="Ngô Minh Tân" age="17" className="26.SP.IT3" hobby="Chơi game"/>
      </div>
    </div>
  );
}

export default App;
