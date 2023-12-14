function Btn ({action, text, className})
    {
        return (
            <button className={className} onClick={action}>{text}</button>
        )
    }
export default Btn