import { useState } from "react";
import useCounterStore, { usePersonStore } from "./../store/useCounterStore/useCounterStore";

export default function CounterButtons() {
    const { increase, reset, setImage } = useCounterStore();
    const { firstName = 'vishal', lastName = 'valvi', updateLastName } = usePersonStore();

    const [imageUrl, setImageUrl] = useState("");
    const [updateName, setUpdateName] = useState({
        firstName: firstName,
        lastName: lastName
    });

    return (
        <div className="container">
            <button onClick={increase}>Increase</button>
            <button className="mx-2" onClick={reset}>Reset</button>
            <div className="my-5 mx-auto w-1/2">
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="form-field p-2 border-2 border-amber-300 rounded-lg bg-yellow-200 text-black" type="text" placeholder="Enter image url" />
                <button onClick={() => setImage(imageUrl)} className="mx-3 p-9 bg-amber-300 ">Upload</button>
            </div>
            <div>
                <input type="text" name="name" id="name" placeholder="Enter firstName " className="form-field p-2 border-2 border-amber-300 rounded-lg bg-yellow-200 text-black" value={updateName.firstName} onChange={(e) => setUpdateName({ ...updateName, firstName: e.target.value })} />
                <input type="text" name="name" id="name" placeholder="Enter lastName" className="form-field p-2 border-2 border-amber-300 rounded-lg bg-yellow-200 text-black" value={updateName.lastName} onChange={(e) => setUpdateName({ ...updateName, lastName: e.target.value })} />
                <button onClick={() => { updateLastName(updateName.firstName, updateName.lastName); setUpdateName({ firstName: "", lastName: "" }) }} className="mx-3 p-9 bg-amber-300 ">Upload Name</button>
            </div>
        </div>
    );
}
