import { motion } from "framer-motion"
import { exit } from "process"


const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
};

const reverseIndex = (index: number): number => {
    const totalSpteps = 6;
    return totalSpteps - index - 1;
}

export default function Stairs() {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={stairAnimation}
                    transition={{
                        duration: 0.4,
                        delay: reverseIndex(index) * 0.1,
                        ease: "easeInOut"
                    }}
                    className="w-full h-full bg-white relative"
                />
            ))}
        </>
    )
}