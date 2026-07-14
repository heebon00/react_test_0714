import Child from "./Child";
import Member from "./Member.jsx";
import "./style.css";

    function Name() {
        return <h1>App안에서 태어난 컴포넌트</h1>;
    }
function App() {
    //컴포넌트의 조건: 함수명이 대문자로 시작,  return이 있어야 하며 태그를 꼭 넣어야 함
    //function Name() {
    ///    return <h1>App안에서 태어난 컴포넌트</h1>;
    //}

    return (
        <>
        <Name/>
        <Child></Child>
        <Child/>
        <Member/>
        <Member />
    
      </> 
       );
}
export default App;