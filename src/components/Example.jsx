import  Button  from "@/components/Button"

const Example = () => {
  return (
    <>
      <h1 className="main-title">
    Пока<br/>
    <mark>Ну и пока</mark>
  </h1>
      <Button bla>
        <span>Кнопка<b>1</b></span>
        </Button>
      <Button mode="primary" caunt={10} isBig={true} />
   <Button mode="primary" someConfig={{
    bla1: '123',
      caunt: 10,
      isBig: true
   }}
   input={[1,2,3,4]}
   />
   
  <h2>Всем пока</h2>
    </>

     )
}
export default Example 