import { useParams } from "react-router-dom";
function ParamComp(){
    const {id}=useParams();
    return(
        <div>
            Param: {id}
        </div>
    )
}
export default ParamComp