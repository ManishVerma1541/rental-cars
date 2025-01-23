import PropTypes, { array } from "prop-types"

const Input =({label, id, name, type='text', placeholder=null})=>{
    return(
        <div className="mb-3">
        <lable id={id} className="form-label">{label}</lable>
        <input id={id} name={name} type={type} className="form-control" placeholder={placeholder} />
        </div>
        
    )

}

Input.prototypes = {
    label : PropTypes.string,
    id : PropTypes.id,
    name : PropTypes.string,
    placeholder : PropTypes.string
}

export default Input