import { FunctionComponent, createElement } from "react";

export default function IconDescription({ className, description, icon, link }: { className?: string, description: string, icon: FunctionComponent, link?: string }) {
    return (
        <>
            {link ?
                <a target="_blank" rel="noreferrer" className="flex gap-2 items-center max-sm:mb-6 max-sm:w-fit"
                    href={link}>
                    {createElement(icon)}
                    <h5>{description}</h5>
                </a > :
                <div className={`flex gap-2 items-center max-sm:mb-6 ${className}`}>
                    {createElement(icon)}
                    <h5 className="text-center">{description}</h5>
                </div>
            }
        </>
    )
}
