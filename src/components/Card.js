
import { Link } from "react-router-dom";


const Card = (props) => {
    {/*This is the Project Component */}

    
    return (

        <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={process.env.PUBLIC_URL + props.image} alt="screenshot of project webpage"/>
                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">{props.date}</h2>
                    <h1 class="text-2xl font-semibold mb-3">{props.name}</h1>
                    <p class="leading-relaxed mb-3">{props.description}</p>
                    <div class="flex items-center flex-wrap ">
                        <Link to={`/projects/${props.param}`}  class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;