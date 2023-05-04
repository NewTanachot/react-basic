import { useState } from "react";
import { useEffect } from "react";
import DataContext from "../Data/DataContext";
import { useContext } from "react";

function FormComponent() {
    const [Name, setName] = useState('')
    const [Surname, setSurname] = useState('')
    const [Nickname, setNickname] = useState('')
    
    const context = useContext(DataContext)

    const CheckNickname = (event) => {
        if (event.target.id === "Name") {
            setName(event.target.value)
        }
        else if (event.target.id === "Surname") {
            setSurname(event.target.value)
        }
        else {
            setNickname(event.target.value)
        }
      };

      const SaveItem = (event) => {
        event.preventDefault();

        // console.log(document.getElementById("Name").value)
        // console.log(document.getElementById("Surname").value)
        // console.log(document.getElementById("Nickname").value)

        console.log("Submit");
    };
    
    // let DisableSubmit = true;
    // useEffect(() => {
    //     if (Name || Surname || Nickname) {
    //         console.log("set to true")
    //         DisableSubmit = false
    //     }
    // }, [Name, Surname, Nickname])

    return (
        <div>
            <h1 className="text-center mb-5">{context.text1}</h1>
            <h1 className="text-center mb-5">{context.text2}</h1>
            <form onSubmit={SaveItem}>
                <div className="row my-2">
                    <div className="col">
                        <label className="form-label">Name</label>
                        <input className="form-control" id="Name" name="Name" type="text" onChange={CheckNickname}/>
                    </div>
                    <div className="col">
                        <label className="form-label">Surname</label>
                        <input className="form-control" id="Surname" name="Surname" type="text" onChange={CheckNickname}/>
                    </div>
                    <div className="col">
                        <label className="form-label">Nickname</label>
                        <input className="form-control" id="Nickname" name="Nickname" type="text" onChange={CheckNickname}/>
                    </div>
                </div>
                <div className="row my-4">
                    <div className=" col-12">
                        <button type="submit" disabled={!(Name || Surname || Nickname)} className="btn btn-primary w-100">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormComponent