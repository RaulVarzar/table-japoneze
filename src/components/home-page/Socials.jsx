export default function socials(){
    return(
        <div className="grid w-full h-full grid-rows-3 bg-neutral">
            <div className="grid items-center content-center w-full row-span-1">
                <h3 className="text-lg font-bold uppercase text-stone-600 lg:text-xl opacity-90">Find us on social media</h3>
            </div>
            <div className="grid grid-cols-3 row-span-2">
                <div className="z-50 grid content-center w-full h-full gap-2 duration-300 cursor-pointer text-neutral-content group hover:bg-base-300 hover:text-accent">
                    <i className="text-4xl fa-brands fa-instagram group-hover:scale-105 trantition "></i>
                    <span className="hidden xl:block">@tablejaponeze</span>
                </div>
                <div className="z-50 grid content-center w-full h-full gap-2 duration-300 cursor-pointer text-neutral-content group hover:bg-base-300 hover:text-accent">
                    <i className="text-4xl duration-300 fa-brands fa-square-facebook group-hover:scale-105 trantition group-hover:text-accent"></i>
                    <span className="hidden xl:block">TableJaponeze</span>
                </div>
                <div className="z-50 grid content-center w-full h-full gap-2 duration-300 cursor-pointer text-neutral-content group hover:bg-base-300 hover:text-accent">
                    <i className="text-4xl duration-300 fa-brands fa-youtube group-hover:scale-105 trantition group-hover:text-accent"></i>
                    <span className="hidden xl:block">Table Japoneze</span>
                </div>
            </div>
        </div>
    )
}