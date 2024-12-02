import sumit from "/me/sumit.jpg"
import longIcon from "/me/long icon.png"
import Title from "./title"

const Banner = () => {
    return (
        <>
            <div className="flex gap-10 mt-20 items-center mb-28">
                <div >
                    <img src={sumit} className="rounded-full font-bold p-1 bg-white -mt-8" />
                    <img src={longIcon} className="relative -top-2 -rotate-12 h-10 ml-16" />

                </div>
                <div>
                    <Title first="software" second="developer" />
                    <div className="text-neutral-400 font-light">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</div>
                    <div className="mt-5 flex gap-8">

                        <div><span className="font-semibold text-4xl">NA</span>
                            <div className="text-neutral-500 text-sm tracking-tighter leading-tight uppercase">
                                <div>Years of<br /> Experience</div>
                            </div>
                        </div>
                        <div><span className="font-semibold text-4xl">+10</span>
                            <div className="text-neutral-500 text-sm tracking-tighter leading-tight uppercase">
                                <div>Projects<br /> Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default Banner