import {features} from "@/lib/contents";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";

export const Grid = () => {
    return(
        <section id="about">
            <BentoGrid className="w-full  py-20">
                {features.map((item, i) => {
                    return (<BentoGridItem id={item.id} key={i} title={item.title} description={item.description} className={item.className} img={item.img} imgClassName={item.imgClassName} titleClassName={item.titleClassName}/>)
                })}
            </BentoGrid>
        </section>
    )
}