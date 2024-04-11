import { SubmitHandler, useForm } from "react-hook-form";
import "./signin.css";

type inputs={
    userName:String;
    userPassword:String;
    address:String;
    age:number;
    city:String;
    country:String;
}

function Signin(): JSX.Element {
const{register,
      handleSubmit,
      watch,
      formState:{errors}
    } =useForm<inputs>();

const onSubmit:SubmitHandler<inputs> = (data) => {
    console.log(data);
}

    return (
        <div className="signin box">
            <h1>Sign In</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name" {...register("userName",{required:true, minLength:8, maxLength:16})}/><br/>
                {errors.userName?.type=="required" && <span className="ErrorText">this field IS require<br/></span>}
                {errors.userName?.type=="minLength" && <span className="ErrorText">minimum length: 8<br/></span>}
                {errors.userName?.type=="maxLength" && <span className="ErrorText">maximium length: 16<br/></span>}
                <input type="password" placeholder="password" {...register("userPassword",{required:true, minLength:8, maxLength:16})}/><br/>
                {errors.userPassword?.type=="required" && <span className="ErrorText">this field IS require<br/></span>}
                {errors.userPassword?.type=="minLength" && <span className="ErrorText">minimum length: 8<br/></span>}
                {errors.userPassword?.type=="maxLength" && <span className="ErrorText">maximium length: 16<br/></span>}
                <input type="text" placeholder="address" {...register("address",{required:true, minLength:5})}/><br/>
                {errors.address?.type=="required" && <span className="ErrorText">this field IS require<br/></span>}
                {errors.address?.type=="minLength" && <span className="ErrorText">minimum length: 5<br/></span>}
                <input type="number" placeholder="age" {...register("age",{required:true, min:18, max:120})}/><br/>
                {errors.age?.type=="required" && <span className="ErrorText">this field IS require<br/></span>}
                {errors.age?.type=="min" && <span className="ErrorText">minimum: 18<br/></span>}
                {errors.age?.type=="max" && <span className="ErrorText">maximium: 120<br/></span>}
                <input type="text" placeholder="city" {...register("city",{minLength:5})}/><br/>
                {errors.city?.type=="minLength" && <span className="ErrorText">minimum length: 5<br/></span>}
                <input type="text" placeholder="country" {...register("country",{minLength:5})}/><br/>
                {errors.country?.type=="minLength" && <span className="ErrorText">minimum length: 5<br/></span>}
                <br/><br/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    );
}

export default Signin;
