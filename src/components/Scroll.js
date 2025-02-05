function Scroll(props){
    return(
        <div style={{
            overflowY: "scroll",
            maxHeight: "300px"
        }}
            className="my-3 px-2"
        >
            {props.children}
        </div>
    )

}

export default Scroll;