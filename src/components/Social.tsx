import Link from "next/link";
import { FaGithub, FaLinkedin, } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" }
];

export default function Social({ containerStyles, iconStyles }: { containerStyles?: string, iconStyles?: string }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link
                    href={social.path}
                    key={index}
                    className={iconStyles}
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}