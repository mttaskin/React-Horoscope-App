import "./Main.scss";
import {data} from "../../helpers/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
{data.map((item,i)=> <Card {...item} key={i}/>)}
    </div>
  )
}

export default Main