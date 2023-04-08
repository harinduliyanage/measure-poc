export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
  
    return '';
  };
  
  export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';
    if(password.length < 8) return 'Password should be min 8 char';
    if(password.length > 20) return 'Password should be max 20 char';
    return '';
  };

  export const confirmPasswordValidator = (password: string , confirmPassword: string) => {
    if (!confirmPassword || confirmPassword.length <= 0) return 'Confirm password cannot be empty.';
    if(password !== confirmPassword) return "Passwoad and confirm password should be same";
    return '';
  }
  
  export const nameValidator = (name: string) => {
    if (!name || name.length <= 0) return 'Name cannot be empty.';
  
    return '';
  };