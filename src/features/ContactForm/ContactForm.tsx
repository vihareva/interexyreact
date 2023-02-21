import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {
    Box,
    Button,
    createTheme,
    FormGroup,
    FormHelperText,
    Grid,
    Paper,
    TextField,
    ThemeProvider
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

// export type ProfileDescriptionFormDataType = {
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: ContactsType
//     aboutMe: string
// }
//
// export type ProfileDescriptionFormPropsType = {
//     profile: ProfileType
//     userId: number
//     switchOffEditMode: () => void
// }
export const schema = yup
    .object({
        fullName: yup.string().required("fullName is a required field"),
        email: yup
            .string()
            .required("email is a required field")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "email incorrect"),
        message: yup.string().required("message is a required field"),
    })
    .required();


export const ContactForm = (props: any) => {
    const dispatch = useDispatch();
    const resolver = yupResolver(schema)
    const {register, handleSubmit, formState: {errors}} = useForm<any>({
        defaultValues: {
            phone: '',
            fullName: '',
            subject: '',
            email: '',
            message:''
        },
        mode: 'onBlur',
        resolver
    });

    const theme = createTheme({
        typography: {
            fontFamily: `"Montserrat",  sans-serif`,
            fontWeightRegular: 500,
        },
        palette: {
            primary: {
                main: '#104f9e'
            }
        }
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return <ThemeProvider theme={theme}>
        <div>
            <Grid container justifyContent="center" >
                <Grid mb={3} item xs={8} alignItems="center" >
                    <Paper elevation={24}>
                        <Grid container justifyContent="center" >
                            <Grid p={6} item xs={10} >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup>
                                        <TextField label="email"
                                                   margin="normal" variant="standard"
                                                   {...register('email')}
                                        />
                                        {errors?.email &&
                                        <FormHelperText>{errors?.email?.message || 'error'}</FormHelperText>}

                                        <TextField label="fullName"
                                                   margin="normal" variant="standard"
                                                   {...register('fullName')}
                                        />
                                        {errors?.fullName &&
                                        <FormHelperText>{errors?.fullName?.message || 'error'}</FormHelperText>}

                                        <TextField label="subject"
                                                   margin="normal" variant="standard"
                                                   {...register('subject')}
                                        />
                                        {errors?.subject &&
                                        <FormHelperText>{errors?.subject?.message || 'error'}</FormHelperText>}

                                        <TextField label="phone"
                                                   margin="normal" variant="standard"
                                                   {...register('phone')}
                                        />
                                        {errors?.phone &&
                                        <FormHelperText>{errors?.phone?.message || 'error'}</FormHelperText>}

                                        <TextField label="message"
                                                   multiline
                                                   margin="normal" variant="standard"
                                                   {...register('message')}
                                        />
                                        {errors?.message &&
                                        <FormHelperText>{errors?.message?.message || 'error'}</FormHelperText>}

                                        <Button type={'submit'}>
                                            Send
                                        </Button>


                                    </FormGroup>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    </ThemeProvider>

}
