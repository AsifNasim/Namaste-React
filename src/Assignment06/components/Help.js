const help = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Help</h1>

            <form>
                <input className="border m-2 p-2 border-black rounded-lg" type="text" name="firstname" placeholder="firstname" id="" />
                <input className="border m-2 p-2 border-black rounded-lg"  type="text" placeholder="lastname" />
                <input className=" border m-2 p-2 bg-slate-500 text-white rounded-md cursor-pointer" type="button" value="Submit" />

            </form>
            
        </div>
    )
}

export default help;