function Student(props) {
  return (
    <>
      <p>Họ tên: {props.name}</p>
      <p>Tuổi: {props.age}</p>
      <p>Lớp: {props.className}</p>
      <p>Sở thích: {props.hobby}</p>
    </>
  );
}
export default Student;
