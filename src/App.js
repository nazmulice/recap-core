import './App.css';
import Countries from './component/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCom(){
//   const [comment, setComment] = useState([]);

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => setComment(data))
//   })

//   return(
//     <div>
//       <h3>Load Comment</h3>
//       {
//         comment.map(comment =><Comment title={comment.title} body={comment.body}></Comment> )
//       }
//     </div>
//   )
// }
// function Comment(props){
//   return(
// <div>
// <h2>{props.title}</h2>
// <p>{props.body}</p>
// </div>
//   )
// }


// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleInc = () => setCount(count + 1);
//   const handleDec = () => setCount(count - 1);
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={handleInc}>Increase</button>
//         <button onClick={handleDec}>Decrease</button>
//     </div>
//   )
// }
export default App;
