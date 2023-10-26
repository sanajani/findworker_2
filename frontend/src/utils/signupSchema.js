import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name: Yup.string()
        .transform(value => value?.toLowerCase().trim())
        .min(2, 'باید حروف نام شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف نام شما کمتر از ۲۵ حرف باشد')
        .required("نام الزامی است"),
    lastName: Yup.string()
    .transform(value => value?.toLowerCase().trim())
        .min(2, 'باید حروف تخلص شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف تخلص شما کمتر از ۲۵ حرف باشد')
        .required("تخلص الزامی است"),
    username: Yup.string()
    .transform(value => value?.toLowerCase().trim())

        .min(2, 'باید حروف نام خاص شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف نام خاص شما کمتر از ۲۵ حرف باشد')
        .required("نام خاص الزامی است"),
    password: Yup.string()
    .transform(value => value?.toLowerCase().trim())
        .min(5, 'باید حداقل بیشتر از دو حرف باشد رمز شما')
        .max(14, 'باید رمز شما کمتر از ۲۵ حرف باشد')
        .required("رمز الزامی است"),
    job: Yup.string()
        .required("ذکر کردن نوغ وظیفه الزامی است"),
    experiance: Yup.string(),
    firstPhoneNumber: Yup.string()
    .transform(value => value?.trim())
    .required("شماره تماس 1 الزامی است")
    .matches(/^[0-9]+$/, "باید دقیقا ده نمبر باشد")
    .min(10, 'باید دقیقا ده نمبر باشد')
    .max(10, 'باید دقیقا ده نمبر باشد'),
    secondNumber: Yup.string()
    .transform(value => value?.trim())
    .required("شماره تماس 2 الزامی است")
    .matches(/^[0-9]+$/, "باید دقیقا ده نمبر باشد")
    .min(10, 'باید دقیقا ده نمبر باشد')
    .max(10, 'باید دقیقا ده نمبر باشد'),

    province: Yup.string().required('نام ولایت خود را انتخاب کنید لطفا'),
    
    aboutuser: Yup.string()
        .min(30, 'در مورد خود حداقل ۳۰ کلمه بنویسید')
        // .max(100, 'در مورد خود حداقل ۱۰۰ کلمه بنویسید')
        .required("درمورد خود بنویسید این قسمت الزامی میباشد"),
    file: Yup.mixed()
    // .required("profile image is required")
})

export const initialValues = {
    name: 'username',
    lastName: 'username',
    username: 'usernameusername',
    password: 'username',
    job: 'good username',
    experience: 'username',
    firstPhoneNumber: '743982043902',
    secondNumber: '90490239492',
    profile: '',
    province: '',
    aboutuser: 'رمورد خود بنویسید این قسمت الزامی میبارمورد خود بنویسید این قسمت الزامی میبا',
    file: ''
}

export const initialValuesLogin = {
    username: '',
    password: '',
    profile: '',
}

export const loginSchema = Yup.object({
    username: Yup.string()
        .min(2, 'باید حروف نام خاص شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف نام خاص شما کمتر از ۲۵ حرف باشد')
        .required("نام خاص الزامی است"),
    password: Yup.string()
        .min(5, 'باید حداقل بیشتر از دو حرف باشد رمز شما')
        .max(14, 'باید رمز شما کمتر از ۲۵ حرف باشد')
        .required("رمز الزامی است"),
    })

        // import { useEffect } from 'react';
        // import { useRouter } from 'next/router';
        // const MyComponent = () => {
        //   const router = useRouter();
        
        //   useEffect(() => {
        //     const updateURL = () => {
        //       // Retrieve current URL
        //       const { pathname, query } = router;
        //       // Create a new URLSearchParams object from the existing query
        //       const queryParams = new URLSearchParams(query);
        //       // Append or update the query parameter you want
        //       queryParams.set('myParam', 'myValue');
        //       // Update the URL with the new query parameters
        //       const newUrl = `${pathname}?${queryParams.toString()}`;
        //       router.push(newUrl);
        //     };
        //     updateURL();
        //   }, []);
        //   return (
        //     /* your component JSX */
        //   );
        // };
        
        // export default MyComponent;