import { Icon } from "lucide-react";
import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const socials = [
    {Icon: <FaGithub />,path:''},
    {Icon: <FaLinkedinIn />,path:''},
    {Icon: <FaTwitter />,path:''},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} 
                href={item.path} 
                className={iconStyles}>{item.Icon}
            </Link>
            );
        })}
    </div>;
};
export default Social;