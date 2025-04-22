import Nav from "./component/Nav";
import Intro from "./component/Intro";
import Service_intro from "./component/Service_intro";

export default function Home() {
  return (
    <div className='kanit'>
      <Nav></Nav>
      <Intro></Intro>
      <Service_intro></Service_intro>
    </div>
  );
}
