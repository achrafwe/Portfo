"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";  // Import ReactNode

// Define the type for the props of the PageTransition component
type PageTransitionProps = {
    children: ReactNode;  // Specify that children is of type ReactNode
};

// Use the defined props type in the function signature
const PageTransition = ({ children }: PageTransitionProps) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
