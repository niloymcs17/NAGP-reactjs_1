import "./App.css";
import Parent from "./component/Parent";
function App() {
  let blogs = [
    {
      id: 1,
      title: "Nagarro",
      description: "Nagarro is a MNC",
    },
    {
      id: 2,
      title: "Nagarro Noida",
      description: "Nagarro is a MNC in Noida",
    },
  ];
  let comments = [
    {
      id: 1,
      blogId: 1,
      comment: "This is a comment 1",
      isActive: true,
    },
    {
      id: 2,
      blogId: 1,
      comment: "This is a comment 2",
      isActive: false,
    },
    {
      id: 3,
      blogId: 2,
      comment: "This is a comment 1",
      isActive: true,
    },
    {
      id: 4,
      blogId: 2,
      comment: "This is a comment 2",
      isActive: false,
    },
  ];
  // localStorage.setItem('blogs',JSON.stringify(blogs));
  localStorage.setItem('comments',JSON.stringify(comments));
  return (
    <div>
      <Parent></Parent>
    </div>
  );
}

export default App;
