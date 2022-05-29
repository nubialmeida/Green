import React, { useState } from "react";
import InputMask from "react-input-mask";

export default function InputComponent(props) {
    const VALID_INPUT = /[a-zA-Zà-ýÀ-Ý0-9]/g;
    const IS_ACTIVE = { TRUE: "active", FALSE: "" };
    const [active, setActive] = useState(IS_ACTIVE.FALSE);

    let boxClass = ["input-area"];
    if (active) {
        boxClass.push("active");
    }

    return (
        <div className="input">
            <InputMask
                mask={props?.mask}
                type={props.type}
                placeholder={props?.placeholder}
                onChange={props.onChange}
                onFocus={() => setActive(IS_ACTIVE.TRUE)}
                onBlur={
                    !VALID_INPUT.test(props.value)
                        ? () => setActive(IS_ACTIVE.FALSE)
                        : null
                }
                required
                autoComplete="off"
                className={boxClass.join(" ")}
            />
            <label>{props.description}</label>
        </div>
    );
}
