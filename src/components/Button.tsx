type bProps = { 
    onClick: () => void; 
    img: string;
}

function Button(props:bProps) { 
    return(
        <a target="_blank" rel="noopener noreferrer">
                <img className="
                w-5vw h-5vw
                sm:w-20 sm:h-20
                bg-transparent
                transition-all duration-300 ease-in-out
                hover:-translate-y-1.5"
                src={props.img ?? "f1_logo.png"}
                onClick={props.onClick ?? null}
                />
        </a>

    );
}

export default Button; 