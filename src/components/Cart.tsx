import {useState, FC, ReactNode} from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    children?: ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         onClick,
         children
    }) => {

    const [state, setState] = useState(0);

    return (
        <div
            style={{
                width,
                height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'lightgrey' : ''
            }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
}

export default Card;