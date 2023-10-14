import Titulo from "./title"

export default function TitleEditable () {
    return (
        <section id="titleEditable" className="w-full flex flex-wrap justify-center content-center bg-slate-300 h-1/6 rounded-t-lg" >
            <Titulo className={"flex w-full justify-center content-center mt-1 h-10/12"} >
                <input
                    type="text"
                    id="taskText"
                    className="w-11/12 border bg-slate-100 px-5"
                />
            </Titulo>
        </section>
    )
}