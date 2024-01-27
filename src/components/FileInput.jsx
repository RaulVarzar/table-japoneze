import { useState } from "react";

export default function FileInput({uploadFile}) {

    const [file, setFile] = useState()

    function onFileChange(event){
        setFile(event.target.files[0]);
    };

    return (
        <div className="flex flex-col items-center w-full gap-3 px-6 py-4 uppercase transition duration-300 rounded-lg cursor-pointer bg-base-300 bg-opacity-30 hover:scale-103">
             <label className="cursor-pointer">
                
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    <span className="mt-2 text-sm leading-normal text-center">Adaugă o fotografie cu mașina</span>
                </div>
                <input type='file' className="hidden" onChange={onFileChange}/>

               
            </label>
            {file && 
                    <>
                        <div className="z-50 flex flex-row items-center content-center gap-3 px-4 py-2 bg-base-300" onClick={() => setFile(null)}>
                            <span className="">{file.name}</span>
                            <span className="mx-auto uppercase text-rose-600"><i class="fa-solid fa-trash-can"></i></span>
                        </div>
                        <button className="mx-auto uppercase btn btn-accent btn-outline btn-sm" onClick={() => uploadFile(file)}>Încarcă</button>    
                    </>
                }
        </div>
    )
}