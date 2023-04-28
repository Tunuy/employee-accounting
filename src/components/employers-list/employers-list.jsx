import EmployeesListItem from "../employers-list-item/employees-list-item";
import './employers-list.css';


const EmployersList = () =>{
    return(
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}

export default EmployersList;