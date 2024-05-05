const Options = ({ buttonOption, clickHandler, feedbackType }) => {
    return (
        <>
            <button onClick={() => clickHandler(feedbackType)}>{buttonOption}</button>
        </>
    )
}

export default Options