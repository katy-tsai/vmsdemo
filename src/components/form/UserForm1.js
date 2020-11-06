import React from 'react';
import { useForm } from "react-hook-form";
import { Input, CellphoneInput, EmailInput, CheckPasswords } from './Input';

const UserForm = ({ mainUser }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="form-div mainUser">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <Input name="username" label="主帳號 Main Username" register={register} value="123456" />
                    <Input name="displayname" label="名稱 Display Name" register={register} value="TUTK 管理者" />
                </div>
                <div className="row">
                    <CellphoneInput name="cellphone" label="手機 Cellphone" register={register} values={["+886", "9123456789"]} />
                    <Input name="lineId" label="Line ID" register={register} value="@12981kd" />
                </div>
                <div className="row">
                    <EmailInput name="email" label="EMAIL" register={register} value="tutkadmin@tutk.com" />
                </div>
                <div className="row">
                    <Input name="password" label="原密碼 Password" register={register} value="123456" />
                    <CheckPasswords name="checkpw" label="新密碼 New Password" register={register} />
                </div>
                {/* <button></button> */}
            </form>
        </div>
    );
};

export default UserForm;