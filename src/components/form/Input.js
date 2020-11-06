import React from 'react';

export const Input = ({ label, name, type, register, required, value }) => {
    return (
        <div className="form-input w50">
            <div className="column-label w50"><label>{label}</label></div>
            <div className="column w50"><input name={name} type={type} ref={register({ required })} value={value} /></div>
        </div >
    );
};

export const EmailInput = ({ name, register, required, value }) => {
    return (
        <div className="form-email w100">
            <div className="column-label w25"><label>Eamil</label></div>
            <div className="column w75"><input name={name} type="email" className="w90" ref={register({ required })} value={value} /></div>
        </div>
    );
};

export const CheckPasswords = ({ label, name, register, required }) => {
    return (
        <div className="form-checkPw w50">
            <div className="column-label w50"><label>{label}</label></div>
            <div className="column w50">
                <input name={name} type="password" className="w40" ref={register({ required })} />
                <input name="checkPw" type="password" className="w40" ref={register({ required })} placeholder="重複新密碼" />
            </div>
        </div>
    );
}

export const CellphoneInput = ({ label, name, register, required, values }) => {
    return (
        <div className="form-cellphone w50">
            <div className="column-label w50"><label>{label}</label></div>
            <div className="column w50">
                <input name={`${name}_ext`} className="w20" type="tel" ref={register({ required })} value={values[0]} />
                <input name={name} type="tel" className="w50" ref={register({ required })} value={values[1]} />
            </div>
        </div>
    );
}