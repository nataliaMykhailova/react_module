import {useNavigate} from "react-router-dom";

const UseNavigate =()=>{
    const navigate = useNavigate();
    const handleNavigation = (path:string)=>{
        navigate(path, {state:{foo:'bar'}})
    }
return handleNavigation;
}
export {
    UseNavigate
}