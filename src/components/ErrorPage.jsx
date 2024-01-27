import underConstruction from '../images/under-construction.png'


export default function ErrorPage() {
    return(
    <div class=" text-center opacity-30 pt-8">
        <img src={underConstruction} alt="construction" className='w-auto mx-auto h-96'/>
        <h1 class="text-6xl font-medium py-8">Page under construction.</h1>
        {/* <button class="btn btn-accent text-white font-semibold px-6 py-3 rounded-md mr-6">
        HOME
        </button> */}
    </div>
    )
}
