import React from 'react';
import facebook from '/assets/socials/facebook.png'
import instagram from '/assets/socials/instagram.png'
import dribbble from '/assets/socials/dribbble.png'
import email from '/assets/socials/sms.png'
const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
      <div className='flex flex-col md:flex-row '>
        {/* texts and icons  */}
        <div className='md:w-1/2'>
          <h1 className='text-3xl mt-16 text-primary font-semibold'>Connect with me:</h1>
          <p className='text-white my-2 md:w-2/3 leading-[2]'>
            Satisfied with me? Please contact me
          </p>
          {/* social icons  */}
          <div className='flex '>
            <a href=""><img src={facebook} alt="" /></a>
            <a href="" className='ml-4'><img src={instagram} alt="" /></a>
            <a href="" className='ml-4'><img src={dribbble} alt="" /></a>
            <a href="" className='ml-4'><img src={email} alt="" /></a>
          </div>
        </div>
        {/* form */}
        <div className='md:w-1/2'>
          <p className='mt-16 text-white text-2xl mb-6'>Contact me, let’s make magic together</p>
          <form>
            <input type="text" name='name' id='name' placeholder='Name' className='bg-[#f5f5f5] md:w-3/4 w-full bg-opacity-10
             py-3 px-3 rounded' />
            <input type="email" name='email' id='email' placeholder='Your Email' className='bg-[#f5f5f5] md:w-3/4 w-full bg-opacity-10
             py-3 px-3 rounded my-3' />
             <textarea name="message" id="message" placeholder='Message' className='bg-[#f5f5f5] md:w-3/4 w-full bg-opacity-10
             py-3 px-3 rounded mb-2'></textarea>
             <button className='btn bg-primary py-2 px-12 text-white hover:bg-white hover:text-primary rounded 
             transition-all duration-500 block'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;