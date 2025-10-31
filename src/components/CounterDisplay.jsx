import useCounterStore from "./../store/useCounterStore/useCounterStore";

export default function CounterDisplay() {
    const { count, image } = useCounterStore();
    return (
        <div className="p-4 card rounded-lg border-amber-100">
            <h2 className="text-yellow-400">Shared Count: {count}</h2>
            image at component path /components/CounterDisplay.jsx
            <img className="card-img-top w-52 h-52 mx-auto rounded-lg border-amber-100" src={image} alt="testing 1" />
        </div>
    );
}
