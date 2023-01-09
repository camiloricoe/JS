const Description = (props)=> {
    console.log(props);
    return <p style={{color:props.color}}>{props.text}</p>

}

export default Description