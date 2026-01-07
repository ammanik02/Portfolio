"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollFadeProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    yOffset?: number;
}

export const ScrollFade = ({
    children,
    delay = 0,
    className = "",
    yOffset = 30 // "Slightly lower on the Y-axis (about 20–40px)"
}: ScrollFadeProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // "Animation should begin just before the section is fully visible"
            transition={{
                duration: 0.8, // "Slow, controlled"
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // Natural ease-in-out (Apple style)
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
