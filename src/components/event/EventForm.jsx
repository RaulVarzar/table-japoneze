import { useState } from "react"

export default function EventForm() {

    const [emptyFields, setEmptyFields] = useState([])

    function getEmptyFields(obj) {
        const filtered = Object.keys(obj).filter(key => 
            obj[key] === null 
            || obj[key] === undefined 
            || obj[key] === "")
        return filtered
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        const participate = data.getAll("participate")
        const terms = data.get("terms")

        const formDataObject = Object.fromEntries(data.entries())
        formDataObject.participate = participate
        formDataObject.terms = terms
        console.log(Object.keys(formDataObject))

        if(getEmptyFields(formDataObject).length === 0) {
            console.log(formDataObject)
            console.log("SUBMITTED")
        } else setEmptyFields(getEmptyFields(formDataObject))
    }

    return(
        <div className="flex flex-col max-w-[800px] mx-auto items-center justify-center gap-6 p-4 py-8 transition duration-300 rounded-lg lg:p-12 lg:px-24 hover:bg-opacity-80 bg-opacity-50 bg-neutral">
                <div className="mx-auto text-center">
                    <h3 className="font-bold text-md md:text-xl">FORMULAR INSCRIERE</h3>
                    <span className="text-2xl italic md:text-4xl">SAISHO FEST 2024</span>
                </div>
                <div className="w-full max-w-2xl mx-auto">
                    <form onSubmit={handleFormSubmit}>
                    <div className="mb-5">
                        <label
                        htmlFor="name"
                        className={"block mb-1 text-base font-medium text-base-content " + (emptyFields.includes('name') && " text-error")}
                        >
                        Nume complet
                        </label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-6 py-3 text-base font-medium bg-transparent border-b-2 outline-none border-opacity-30 border-base-content text-base-content focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                        htmlFor="email"
                        className={"block mb-1 text-base font-medium text-base-content " + (emptyFields.includes('email') && " text-error")}
                        >
                        Adresa de email
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-6 py-3 text-base font-medium bg-transparent border-b-2 outline-none border-opacity-30 border-base-content text-base-content focus:shadow-md"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="social" className="block mb-1 text-base font-medium text-base-content">
                            Instagram/Facebook 
                            <span className="text-xs">("-" daca nu se aplica)</span>
                        </label>
                        <input 
                            className="w-full px-6 py-3 text-base font-medium bg-transparent border-b-2 outline-none border-opacity-30 border-base-content text-base-content focus:shadow-md"
                            type="text" 
                            name="social"
                            id="social"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-between gap-0 py-4 mb-5 2xl:flex-row lg:gap-2 form-control ">
                        <span>Particip la:</span>

                        <div className="flex flex-col gap-x-6 md:flex-row">
                            <label className="gap-2 cursor-pointer label">
                                <span className="label-text">Circuit</span> 
                                <input type="checkbox" className="checkbox" name="participate" value="circuit"/>
                            </label>
                            <label className="gap-2 cursor-pointer label ">
                                <span className="label-text">Drift</span> 
                                <input type="checkbox" className="checkbox" name="participate" value="drift"/>
                            </label>
                            <label className="gap-2 cursor-pointer label">
                                <span className="label-text">Expo</span> 
                                <input type="checkbox" className="checkbox" name="participate" value="expo"/>
                            </label>
                        </div>
                        {emptyFields.includes('participate') && <p>Alege cel putin una.</p>}
                        
                    </div>

                    <div className="mb-5">
                        <label
                        htmlFor="car"
                        className={"block mb-1 text-base font-medium text-base-content" + (emptyFields.includes('car') && " text-error")}
                        >
                        Mașina ta:
                        </label>
                        <input
                        type="text"
                        name="car"
                        placeholder="MARCA ȘI MODELUL"
                        className="w-full px-6 py-3 text-base font-medium bg-transparent border-b-2 outline-none border-opacity-30 border-base-content text-base-content focus:shadow-md"
                        />
                    </div>

                    <div className="flex flex-row items-center my-4">
                        <label htmlFor="terms" className="inline gap-3 my-3cursor-pointer label">
                            <span className={"label-text " + (emptyFields.includes('terms') && " text-error")}>Am citit si sunt de acord cu regulamentul</span> 
                        </label>
                        <input type="checkbox" className={"checkbox checkbox-erro" + (emptyFields.includes('terms') && " checkbox-error") } name="terms" id="terms"/>
                    </div>
                    
                    <button className="w-full mx-auto text-base font-semibold capitalize btn btn-accent btn-outline ">
                        Trimite
                    </button>
                    {emptyFields.length > 0 && <p className="pt-4 text-center text-warning">Please fill in all fields.</p>}
                    </form>
                </div>
            </div>
    )
}