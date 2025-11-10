import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
    { Icon: <FaGithub />, path: 'https://github.com/pavithranarul' },
    { Icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/pavithran-arul-301611247/' },
    { Icon: <FaTwitter />, path: 'https://twitter.com/pavithranarul' },
    { Icon: <FaInstagram />, path: 'https://www.instagram.com/pavithranarul/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyles}>{item.Icon}
                </Link>
            );
        })}
    </div>;
};
export default Social;