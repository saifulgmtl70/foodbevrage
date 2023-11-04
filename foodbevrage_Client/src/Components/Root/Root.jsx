import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className=" mx-auto font-WorkSans">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;