const Home =() => {
    return(
        <div className=" flex flex-col px-[10%] bg-[#080808] gap-3 h-[100vh] text-[#9C9C9C] w-[100%] ">
            <div className="flex flex-row border-b-[1px] border-x-[1px] py-2 gap-5  justify-center rounded-b-lg  bg-[#1B1B1B] opacity-[100%] text-center cursor-pointer ">
                <ul className="flex flex-row w-[90%] justify-between">
                    <li>
                        Home
                    </li>
                    <li>
                        Case Study
                    </li>
                    <li>
                        Testimonials
                    </li>
                    <li>
                        Recent Work
                    </li>
                    <li>
                        Get In Touch
                    </li>
                </ul>
                <div className="ml-5">
                    emojis
                </div>
            </div>
            <div className="flex flex-row mt-[108px] ">
                <div className="w-[50%] mt-[44px]">
                    <div>
                    <h2 className="text-Raleway text-xl font-bold text-[#FFFFFF]">Oluwatade Iyanuoluwa
                        
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusantium velit amet perspiciatis earum officia est dolorem deleniti fugiat perferendis ipsum veniam, dicta, unde numquam, eligendi quo natus saepe eos!
                    </p>
                    </div>
                   
                    <div className="bg-[#3F8E00] w-[50%] px-3 py-2 text-[#FFFFFF] border-solid rounded-sm ">Let's get started</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Home;