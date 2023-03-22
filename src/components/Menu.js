import { motion } from "framer-motion";
import MenuContent from "./MenuContent";

const menuStack = [
    {
        classList: "extra-layer layer-1",
        animateDelay: 0,
        exitDelay: 0.25,
        isContent: false,
    },
    {
        classList: "extra-layer layer-2",
        animateDelay: 0.15,
        exitDelay: 0.23,
        isContent: false,
    },
    {
        classList: "extra-layer layer-3",
        animateDelay: 0.2,
        exitDelay: 0.2,
        isContent: false,
    },
    {
        classList: "extra-layer layer-4",
        animateDelay: 0.23,
        exitDelay: 0.15,
        isContent: false,
    },
    {
        classList: "menu-content",
        animateDelay: 0.25,
        exitDelay: 0,
        isContent: true,
    },
];

const Menu = () => {
    return (
        <nav id="menu">
            {menuStack.map((stackElement, key) => (
                <motion.div
                    key={key}
                    className={stackElement.classList}
                    initial={{ y: "-150%", skewY: 20 }}
                    animate={{
                        y: 0,
                        skewY: 0,
                        transition: {
                            duration: 0.5,
                            delay: stackElement.animateDelay,
                        },
                    }}
                    exit={{
                        y: "-150%",
                        skewY: 10,
                        transition: {
                            duration: 0.5,
                            delay: stackElement.exitDelay,
                        },
                    }}
                >
                    {stackElement.isContent && <MenuContent />}
                </motion.div>
            ))}
        </nav>
    );
};

export default Menu;
