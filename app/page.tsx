import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";



const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">

                        <h1 className="h1 mb-6">
                            Bonjour je suis <br/> <span className="text-accent">Achraf Elkalchy</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">Passionné par l'innovation technologique, je crée des expériences
                            web immersives et élégantes, alliant créativité et performance. En quête d'un stage de fin d’études pour mars 2025,
                            je suis prêt à relever de nouveaux défis en développement full stack.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Link href="https://drive.google.com/file/d/15YTiPCd42CpFoM_8ER-_SAi0jF5LKg0I/view?usp=sharing">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" >
                           <span className="flex items-center gap-2">
                               Télacharger CV
                               <FiDownload className="text-xl" />
                           </span>
                            </Button>
                            </Link>
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6"
                                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                                    items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                            </div>
                        </div>

                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>

    )
}
export default Home;
