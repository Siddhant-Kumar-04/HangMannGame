import Button from './ComponentsFolder/Button/Button.jsx';
import CustomComponent from './Componet.jsx';
import InputCom from './ComponentsFolder/InputComponent/InputCom.jsx';
function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Hello World</h1>
      <CustomComponent />
      <Button
        text="primary"
        type="submit"
        styleType="primary"
        onclickHandler={function on()
        {
        console.log("Hello Primary");
        }}
      />
      <Button text="Secondary Text" type="button" styleType="secondary" onclickHandler={function on() {
        console.log("Hello Secondaryx");
      }} />
      <Button text="Secondary Text" type="submit" styleType="warning" onclickHandler={function on() {
        console.log("Waring clicked");
      }} />
      <Button />
      <Button />
      <InputCom type="text" value="" placeholder="Enter Text Here" />
    </div>
  )
}

export default App