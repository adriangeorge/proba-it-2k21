import React from "react"
const CarouselCard = ({ name, text }) => {

    return (
        <div className='flex justify-center mx-10'>
            <div className="flex-col-1 bg-gradient-to-b from-gradient1 to-gradient2 rounded-2xl pl-3 py-3 space-y-5 h-96 max-w-xs">
                <div className="flex">
                    <div className="bg-ic_stud bg-contain bg-left bg-no-repeat pl-7" />
                    <div>
                        <p className="text-left text-xl md:text-4xl">
                            {name + ":"}
                        </p>
                    </div>
                </div>
                <div >
                    <p className='px-3 text-xl md:text-4xl'>
                        {text}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default CarouselCard;