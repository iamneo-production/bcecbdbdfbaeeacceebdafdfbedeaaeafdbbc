const Button = (props) => {
    const { btnName = props.children,onClick,marked,style } = props;
    return (
    <button style={{backgroundColor:'#8d775f' ,margin:10 ,padding:10, borderRadius:10,border:'none',color:'whitesmoke'}} onClick={onClick} disabled={marked} className={style} >{ btnName }</button>
    )
    }
    export default Button;