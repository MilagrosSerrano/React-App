import Goal from './goal';
import { useContext} from 'react';
import { Contexto } from '../../services/memory';
import { Outlet} from 'react-router-dom';



function List() {
    const [state] = useContext(Contexto);
    return (
        <>
            {state.orden.map(value => 
            <Goal {...state.objetos[value]} key={value}></Goal>)}
            <Outlet></Outlet>
        </>
    )
}

export default List;