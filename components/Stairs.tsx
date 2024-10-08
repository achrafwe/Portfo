import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const TOTAL_STEPS = 6;

const reverseIndex = (index: number) => {
    if (index < 0 || index >= TOTAL_STEPS) {
        throw new Error("Index hors limites");
    }
    return TOTAL_STEPS - index - 1;
}

const Stairs = () => {
    const delays = Array.from({ length: TOTAL_STEPS }, (_, index) => reverseIndex(index) * 0.1);

    return (
        <>
            {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: delays[index],
                    }}
                    className={"h-full w-full bg-white relative"}
                />
            ))}
        </>
    );
}

export default Stairs;