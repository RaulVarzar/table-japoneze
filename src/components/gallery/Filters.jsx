export default function Filters({brandFilter, onChange }) {
    return(
        <div className="flex flex-row items-center content-center gap-4">
            <select className="px-8 max-w-xsmx-auto w-fit select select-bordered" value={brandFilter} onChange={onChange}> 
                <option value='' defaultValue>Marcă</option>
                <option value="honda">Honda</option>
                <option value="toyota">Toyota</option>
                <option value="mazda">Mazda</option>
                <option value="nissan">Nissan</option>
            </select>
        </div>
    )
}