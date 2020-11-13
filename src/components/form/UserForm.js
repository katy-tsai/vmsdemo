import React from 'react';
import { useForm } from "react-hook-form";
import Card from '../card/Card';

const UserForm = ({ data, isSub, addSubUser, saveUser, index }) => {
    const { register, handleSubmit, errors } = useForm({ defaultValues: { ...data } });
    const onSubmit = data => {
        if (isSub) {
            saveUser(data, index);
        } else {
            saveUser(data);
        }

    };

    return (
        <Card className={isSub ? 'sub' : ''} title={isSub ? "子帳號" : "主帳號"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <label className="col-3">帳號:</label>
                    <input className="col-3" name="userName" type="text" disabled={data.userName} ref={register({ required: true })} />
                    {errors.userName && <span>This field is required</span>}
                    <label className="col-3">名稱:</label>
                    <input className="col-3" name="displayName" type="text" ref={register({ required: true })} />
                </div>
                <div className="row">
                    <label className="col-3">手機:</label>
                    <div className="col-3 ">
                        <input className="col-4  gutter-width mr-30" name="cellphone.areaCode" type="text" ref={register({ required: true })} />
                        <input className="col-8 gutter-width" name="cellphone.no" type="text" ref={register({ required: true })} />
                    </div>
                    <label className="col-3">Line ID:</label>
                    <input className="col-3" name="lineID" type="text" ref={register({ required: true })} />
                </div>
                <div className="row">
                    <label className="col-3">EMAIL:</label>
                    <input className="col-9" name="email" type="text" ref={register({ required: true })} />
                </div>
                {/* <div className="row">
                    <label className="col-3">{isSub ? '重設密碼:' : '原密碼:'}</label>
                    <input className="col-3" name="pwd" type="password" ref={register} autoComplete="false" />
                    <label className="col-3">{isSub ? '重複新密碼:' : '新密碼:'}</label>
                    {isSub ? (<input className="col-3" name="checkPwd" type="password" autoComplete="false" placeholder="重複新密碼" ref={register} />) :
                        (<div className="col-3 ">
                            <input className="col-6  gutter-width mr-30" name="newPwd" autoComplete="false" type="password" ref={register} />
                            <input className="col-6 gutter-width" name="checkPwd" autoComplete="false" type="password" placeholder="重複新密碼" ref={register} />
                        </div>)
                    }
                </div> */}
                <div className="card_buttons">
                    {!isSub && <button className="main_btn mx-10 my-10" type="button" onClick={addSubUser}>新增子帳號</button>}
                    <button className="main_btn mx-10 my-10" type="submit" >保存</button>
                </div>
            </form>
        </Card>
    );
};

export default UserForm;