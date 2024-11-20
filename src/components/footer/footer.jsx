import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { amber } from '@mui/material/colors';

export default function Footer() {
    return(<>
    <footer className="w-[100%] bg-indigo-950">
        <section className="max-w-7xl m-auto flex justify-between py-[100px]">
        <div>
            <img className='w-[200px]' src={logo} alt="" />
        </div>
        <div className='grid gap-[15px]'>
            <p className='text-amber-50 text-[20px] font-[600]'>Social media</p>
            <p className='text-amber-50 flex gap-[5px] items-center font-[100]'><GitHubIcon sx={{color: amber[50]}}></GitHubIcon>GitHub</p>
            <p className='text-amber-50 flex gap-[5px] items-center'><TwitterIcon sx={{color: amber[50]}}></TwitterIcon>Twitter</p>
            <p className='text-amber-50 flex gap-[5px] items-center'><InstagramIcon sx={{color: amber[50]}}></InstagramIcon>Instagram</p>
            <p className='text-amber-50 flex gap-[5px] items-center'><LinkedInIcon sx={{color: amber[50]}}></LinkedInIcon>LinkedIn</p>
        </div>
        <div className='grid gap-[15px]'>
            <p className='text-amber-50 text-[20px] font-[600]'>Quick Links</p>
            <Link className='text-amber-50'>Home</Link>
            <Link className='text-amber-50'>Proffessianal list</Link>
            <Link className='text-amber-50'>About</Link>
            <Link className='text-amber-50'>Contact</Link>
        </div>
        <div className='grid gap-[15px]'>
            <p className='text-amber-50 text-[20px] font-[600]'>Address</p>
            <p className='text-amber-50'>10 Beta Road, Sandbox City, EX 12345</p>
            <p  className='text-amber-50 text-[20px] font-[600]'>Mobile</p>
            <p className='text-amber-50'>07700 900123 </p>
            <p className='text-amber-50 text-[20px] font-[600]'>Email</p>
            <p className='text-amber-50'>user123@propath.com</p>
        </div>
        </section>
        <div className='w-[100%] bg-amber-50 h-[1px]'> </div>
        <div className='m-auto py-[25px] text-center'>
            <p className='text-amber-50 text-[15px] tracking-[1px]'> ©2024</p>
    </div>
    </footer>
    </>)
}