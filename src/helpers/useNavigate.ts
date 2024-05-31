import {useNavigate} from "react-router-dom";

const UseNavigateHook =()=>{
    const navigate = useNavigate();
    const handleNavigation = (path:string)=>{
        navigate(path)
    }
    return handleNavigation;
}
export {
    UseNavigateHook
}