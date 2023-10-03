export default function InputText({label, id , ...props}) {

    return(
        <div className="flex flex-col gap-1 m-2">
            <label htmlFor={id} className="text-slate-200">{label}</label>
            <input className="bg-slate-700 rounded p-2" type="text" id={id} {...props} />
        </div>
    )
}