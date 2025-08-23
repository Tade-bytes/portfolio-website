import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import display from '../assets/images/display.jpg';

const Home = () => {
  return (
    <div className=" flex flex-col px-[10%] bg-[#080808] gap-3 h-[100vh] text-[#9C9C9C] w-[100%] ">
      <div className=' py-2'>
        < p className="animate-bounce hover:text-[#3F8E00] mt-[12px] my-2 text-Helvetica text-3xl text-[#FFFFFF] italic leading-5 transition duration-300 text-center h-[10%]">
                Oluwatade Iyanuoluwa
         </p>
      </div>

       
      <div className="flex flex-row border-[1px] gap-5  justify-center rounded-lg  bg-[#1B1B1B] opacity-[100%] text-cente p-3 cursor-pointer ">
        <ul className="flex flex-row w-[90%] justify-between">
          <li className="cursor-pointer hover:text-[#3F8E00] hover:italic transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-[#3F8E00]  hover:italic transition duration-300">Case Study</li>
          <li className="cursor-pointer hover:text-[#3F8E00]  hover:italic transition duration-300">Testimonials</li>
          <li className="cursor-pointer hover:text-[#3F8E00]  hover:italic transition duration-300">Recent Work</li>
          <li className="cursor-pointer hover:text-[#3F8E00]  hover:italic transition duration-300">Get In Touch</li>
        </ul>
       
      </div>
      <div className="flex flex-row gap-4 mt-[108px] ">
        <div className="w-[50%] my-[44px] box-border">
          <div>
            <h2 className="text-Helvetica my-[20px] text-3xl leading-5 font-bold text-[#FFFFFF]">
              Oluwatade Iyanuoluwa
            </h2>
            <p className='my-[30px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              accusantium velit amet perspiciatis earum officia est dolorem
              deleniti fugiat perferendis ipsum veniam, dicta, unde numquam,
              eligendi quo natus saepe eos!
            </p>
          </div>

          <div className="bg-[#3F8E00]  cursor-pointer w-[30%] px-3 py-3 text-[#FFFFFF] border-solid rounded-sm ">
            Let's get started
          </div>
        </div>
        <div className=" flex flex-col justify-center w-[50%] items-center">
          <img className='rounded-[50%] w-[16rem] h-[16rem]' src={display}/>
           
            <div className='flex flex-row gap-3 mt-[20px]'>
              <a href=''>
                 <GitHubIcon className="cursor-pointer hover:text-[#3F8E00] transition duration-300" />
              </a>
              <a href=''>
                  <XIcon className="cursor-pointer hover:text-[#3F8E00] transition duration-300" />
              </a>
              <a href=''>
                 <RedditIcon className="cursor-pointer hover:text-[#3F8E00] transition duration-300" />
                 
              </a>
              <a href=''>
                <EmailIcon className="cursor-pointer hover:text-[#3F8E00] transition duration-300" />
                 
              </a>
              <a href=''>
                <LinkedInIcon className="cursor-pointer hover:text-[#3F8E00] transition duration-300" />
                 
              </a>
                
               
               
                
                
            </div>
        </div>
            
      </div>
    </div>
  );
};
export default Home;
