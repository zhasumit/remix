interface TitleProps {
    first: string;
    second: string;
}

const Title: React.FC<TitleProps> = ({ first, second }) => {
    return (
        <div className="uppercase text-[6em] font-semibold font-poppins leading-none poppinsfont">
            {first} <span className="lighterpoppins">{second}</span>
        </div>
    );
};

export default Title;
