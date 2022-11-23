import React, {useRef, useState} from "react"
import {Container,Row,Col,Button} from "reactstrap";

function TodoList (){
    const [todos,setTodos] = useState([
        {id:1,title:"Abrorxoja",lastname:"Counter",phone:+998930033506,completed:false,count:23},
        {id:2,title:"Ahrorxoja",lastname:"Counter",phone:+998930033506,completed:true,count: 34},
        {id:3,title:"Asrorxoja",lastname:"Counter",phone:+998930033506,completed:false,count: 45}
    ]);
    const titleRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const countRef = useRef();
    const DeteleAllTodo =(id)=>{
        let confirmation  = window.confirm("Are you delete All");
        if(confirmation){
            setTodos([]);
        }
    }
    const DeteleTodo =(id)=>{
let confirmation  = window.confirm("Are you delette");
        if(confirmation){
setTodos(todos.filter(todo=>todo.id !== id ));
        }
    }
    const  Kop =()=>{
        setTodos(todos[0].count +3);
    }
    const AddTodo =()=>{
        let nId = null;
        todos.length !==0 ?
            nId = todos[todos.length - 1].id +1
            :
            nId = 1;
        let todo = {
            id:nId,
            title:titleRef.current.value,
            lastname:lastnameRef.current.value,
            phone:phoneRef.current.value,
            completed:false,
            count:countRef.current.value,

        };
        if(todo.title !== ""){
            setTodos(todos.concat(todo));
            titleRef.current.value = "";
            lastnameRef.current.value = "";
            phoneRef.current.value = "";

        }else {
            alert("Toliq toldiring");
        }


    }



    return(
        <>
            <Container>
                <Row className="py-3">
                    <Col className="d-flex justify-content-between align-items-center">
                        <div className="border border-dark input-group w-100">
                            <input type="text" ref={titleRef} className="form-control" placeholder="FirstName" aria-label="revsdfvfv" aria-describedby="button-addon"/>
                            <input type="text" ref={lastnameRef} className="form-control" placeholder="LastName"  aria-label="revsdfvfv" aria-describedby="button-addon"/>
                            <input type="number" ref={phoneRef} className="form-control"  placeholder="Phone" aria-label="revsdfvfv" aria-describedby="button-addon"/>
                            <input type="number" ref={countRef} className="form-control" placeholder="Count" aria-label="revsdfvfv" aria-describedby="button-addon"/>
                            <br/>
                            <button onClick={AddTodo} type="button" className="btn btn-success" id="button-addon"> + Add Users</button>
                        </div>
                        <div>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Row className="py-4">
                        <Col className="d-flex justify-content-end align-items-center">
                            <Button color="danger" onClick={DeteleAllTodo}><i className="bi bi-trash"></i>Delete all</Button>
                        </Col>
                    </Row>
                    <Col>
                        <table className="border table table-hover table-secondary">
                        <thead className="table-info">
                        <tr className="align-middle">
                            <th>#</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Phone</th>
                            <th>Active</th>
                            <th>Count</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {todos.map((todo,index)=>{
                            return(
<tr className="mx-3">
    <td>{index + 1}</td>
    <td>{todo.title}</td>
    <td>{todo.lastname}</td>
    <td>{todo.phone}</td>
    <td><input type={"checkbox"}/></td>
    <td>
        <i className="btn btn-secondary me-2">+</i>
        {todo.count}
        <i className="btn btn-secondary ms-2" >-</i>
    </td>
    <td>        <i onClick={()=>DeteleTodo(todo.id)} className="bi bi-x btn btn-secondary ms-2"></i>
    </td>
</tr>
                            )
                        })}
                        </tbody>

                    </table>

                    </Col>
                </Row>
            </Container>
            </>
    )
}
export default TodoList;