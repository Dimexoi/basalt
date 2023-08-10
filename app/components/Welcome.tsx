import Header from "./Header";

export default function Welcome() {
  

  return (
    <div className="bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] h-full bg-cover">
      <div className="bg-gradient-to-r from-white to-white/20 h-full">

        <Header welcome={true}/>
        welcome component
      </div>
    </div>
  )
}
