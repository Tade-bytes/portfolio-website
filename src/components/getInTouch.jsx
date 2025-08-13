const GetInTouch = () => {
    return (
        <div className="h-[100vh] flex flex-col text-center bg-[#080808] text-[#9C9C9C] px-[10%]">
            <h1 className="text-[#FFFFFF] text-xl m-[12px] text-Raleway">Get In Touch</h1>
        <p className="text-[#9C9C9C] t mb-2rem text-sm text-Helvetica w-[80%    ]">If you have any questions or would like to collaborate, feel free to reach out! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque harum, incidunt ex reprehenderit recusandae doloremque veniam sit odit ut aliquid cupiditate deserunt sapiente similique odio! Enim, quam nostrum. Fugiat.</p>
        <div>
            <Form>
                <input type="text" placeholder="Your Name" className="w-[80%] p-2 mb-4 border border-gray-300 rounded-md" />
            </Form>
        </div>
        </div>
        
    );
} 
export default GetInTouch;