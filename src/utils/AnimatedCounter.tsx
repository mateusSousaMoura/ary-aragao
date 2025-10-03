import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
    value?: number;
    decimal?: boolean;
    decimalValue?: number;
    direction?: "up" | "down";
    stiffness?: number;
    damping?: number;
    prefix?: boolean;
    prefixText?: string;
    suffix?: boolean;
    suffixText?: string;
    color?: string;
    fontStyle?: React.CSSProperties;
    margin?: string;
}

/**
 * Componente de counter animado baseado no Framer Motion
 * Anima números de 0 até o valor final com spring physics
 */
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value = 100,
    decimal = false,
    decimalValue = 100,
    direction = "up",
    stiffness = 300,
    damping = 100,
    prefix = false,
    prefixText = "",
    suffix = false,
    suffixText = "",
    color = "#000000",
    fontStyle = {},
    margin = "-100px"
}) => {
    const initialValue = 0
    const ref = useRef<HTMLSpanElement>(null)
    const updatedDecimalValue = decimal === true ? decimalValue : value
    const motionValue = useMotionValue(
        direction === "down" ? updatedDecimalValue : initialValue
    )
    const springValue = useSpring(motionValue, {
        damping: damping,
        stiffness: stiffness,
    })
    const isInView = useInView(ref, { once: true, margin: margin })

    useEffect(() => {
        if (isInView) {
            motionValue.set(
                direction === "down" ? initialValue : updatedDecimalValue
            )
        }
    }, [motionValue, isInView, direction, updatedDecimalValue])

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current) {
                    ref.current.textContent = Intl.NumberFormat("en-US").format(
                        latest.toFixed(decimal === true ? 2 : 0)
                    )
                }
            }),
        [springValue, decimal]
    )

    return (
        <>
            {prefix && (
                <span style={{ ...fontStyle, color: color }}>{prefixText}</span>
            )}
            <span ref={ref} style={{ ...fontStyle, color: color }}>
                {initialValue}
            </span>
            {suffix && (
                <span style={{ ...fontStyle, color: color }}>{suffixText}</span>
            )}
        </>
    )
}

export default AnimatedCounter
