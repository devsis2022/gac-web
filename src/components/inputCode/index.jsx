import ReactCodeInput from "react-code-input"
import { InputCodeWrapper } from "./styles"

export const InputCode = ({ error, ...rest }) => {
    return (
        <InputCodeWrapper>
            <ReactCodeInput {...rest}  isValid={!error} />
        </InputCodeWrapper>
    )
}