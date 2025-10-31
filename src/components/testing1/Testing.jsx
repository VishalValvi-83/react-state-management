import useCounterStore from '../../store/useCounterStore/useCounterStore';
import FallBackImg from './../../assets/image.png'
const Testing = () => {
    const { count, image } = useCounterStore();
    return (
        <div className="p-4 card rounded-lg border-amber-100">
            <h2 className="text-yellow-400">testing image at component path /components/testing1/testing.jsx </h2>
            <img className="card-img-top w-26 h-26 mx-auto rounded-lg border-amber-100 object-cover" src={image || FallBackImg} alt="testing 1" />
        </div>
    )
}

export default Testing