import useCounterStore, { usePersonStore } from "./../store/useCounterStore/useCounterStore";
import FallBackImg from './../assets/image.png'
export default function CounterDisplay() {
    const { count, image } = useCounterStore();
    const { firstName, lastName, } = usePersonStore();
    return (
        <div className="p-4 card rounded-lg border-amber-100">
            <h1>Welcome, {firstName} {lastName}</h1>
            <h2 className="text-yellow-400">Shared Count: {count}</h2>
            image at component path /components/CounterDisplay.jsx
            <img className="card-img-top w-52 h-52 mx-auto rounded-lg border-amber-100 object-cover" src={image || FallBackImg} alt="testing 1" />
        </div>
    );
}
