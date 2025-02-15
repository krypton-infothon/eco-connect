import { cn } from "@/lib/utils";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
                              className,
                              children
                          }) => {
    return (
        (<div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
                                  className,
                                  id,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                              }) => {
    return (
        (<div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(20, 27, 31)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(11,43,4,1) 0%, rgba(26,99,10,1) 35%, rgba(54,138,35,1) 100%)",
            }}>
            <div className={`"flex justify-center h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                    } `}>
                    )
                </div>
                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="font-sans text-lg lg:text-3xl text-honeydew max-w-96 font-bold z-10 ">
                        {title}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-honeydew z-10`}
                    >
                        {description}
                    </div>
                </div></div>
        </div>)
    );
};
