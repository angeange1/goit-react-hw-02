const Options = ({ clickHandler, totalFeedback, resetHandler }) => {
    return (
        <>
            <button onClick={() => clickHandler("good")}>Good</button>
            <button onClick={() => clickHandler("neutral")}>Neutral</button>
            <button onClick={() => clickHandler("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetHandler}>Reset</button>}
        </>
    )
}

export default Options