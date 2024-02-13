import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import { RiLinkedinLine } from "react-icons/ri"
import IconDescription from "./IconDescription"

export default function ContactDetails() {
    return (
        <div className="flex gap-7 flex-wrap mt-auto max-lg:mt-14 max-sm:grid max-sm:grid-cols-2 max-sm:gap-0">
            <IconDescription description="615-207-5367" icon={() => <HiOutlinePhone size={22} color="#E9A5C5" />} />
            <IconDescription description="daniellezror@gmail.com"
                link={`mailto:daniellezror@gmail.com`}
                icon={() => <HiOutlineMail size={22} color="#E9A5C5" />} />
            <IconDescription description="Nashville, TN" icon={() => <HiOutlineLocationMarker size={22} color="#E9A5C5" />} />
            <IconDescription description="Github Profile"
                link="https://github.com/DanielleZror"
                icon={() => <FiGithub size={22} color="#E9A5C5" />} />
            <IconDescription description="Linkedin Profile"
                link="https://www.linkedin.com/in/danielle-zror-496b35189/"
                icon={() => <RiLinkedinLine size={22} color="#E9A5C5" />} />
        </div>
    )
}
