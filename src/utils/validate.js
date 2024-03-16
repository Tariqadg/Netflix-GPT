export const CheckValidateData=(email,password)=>{
    const isEmailValid= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)
    const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if (!isEmailValid) return "Email ID is not Valid"
    if (!isPassValid) return "Password in not Valid"

    return null


}