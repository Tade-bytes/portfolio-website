const GetInTouch = () => {
    return (
        <div className="h-[100vh] flex flex-col text-center bg-[#080808] text-[#9C9C9C] px-[10%]">
            <h1 className="text-[#FFFFFF] text-3xl m-[12px] text-Raleway">Get In Touch</h1>
        <p className="text-[#9C9C9C] t mb-2rem text-sm text-Helvetica ">If you have any questions or would like to collaborate, feel free to reach out! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque harum, incidunt ex reprehenderit recusandae doloremque veniam sit odit ut aliquid cupiditate deserunt sapiente similique odio! Enim, quam nostrum. Fugiat.</p>
    <div className="flex flex-col items-center justify-center h-[80%]">
           <form className="w-[50%] p-8 bg-[#1B1B1B] rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="p-2 rounded-md outline-none bg-[#080808] text-[#FFFFFF]" />
                <input type="email" placeholder="Your Email" className="p-2 rounded-md outline-none bg-[#080808] text-[#FFFFFF]" />
                <textarea placeholder="Your Message" className="p-2 rounded-md bg-[#080808] outline-none text-[#FFFFFF] h-[100px]"></textarea>
                <button className="bg-[#3F8E00] text-[#FFFFFF] px-4 py-2 rounded-md hover:bg-[#2D6A00] transition duration-300">Send Message</button>
            </div>
           </form>
        </div>
        </div>
        
    );
} 
export default GetInTouch;