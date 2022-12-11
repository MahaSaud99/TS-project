import z from 'zod'

export const addUserSchema = z.object({
    body: z.object({
        username:z.string({required_error: 'username is required!'}),
        password:z.string({required_error:'Password is required!'}).min(8 , 'Password must be more than 8'),
        email:z.string({required_error:'Email is required!'}).email(),
        role:z.enum(['user','admin']),
        joiningYear:z.string({required_error:'Joining year is required!'}),
        age:z.number({required_error: 'Age is required!' , invalid_type_error:'Age must be a number!'})
    })
})
export type addUserSchemaType = z.infer<typeof addUserSchema>['body'];


export const getUserByIdSchema = z.object({
    params:z.object({
        userid:z.string({invalid_type_error:'userid must be string!'})
    })
})
export type getUserByIdSchemaType = z.infer<typeof getUserByIdSchema>['params'];


export const getUserByEmailSchema = z.object({
    params:z.object({
        email:z.string({invalid_type_error:'email must be string!'})
    })
})
export type getUserByEmialSchemaType = z.infer<typeof getUserByEmailSchema>['params'];


export const getUsersByAgeSchema = z.object({
    params:z.object({
        age:z.number({invalid_type_error:'age must be number!'})
    })
})
export type getUsersByAgeSchemaType = z.infer<typeof getUsersByAgeSchema>['params'];


export const getUsersByRoleSchema = z.object({
    params:z.object({
        role:z.string({invalid_type_error:'Role must be string!'})
    })
})
export type getUsersByRoleSchemaType = z.infer<typeof getUsersByRoleSchema>['params'];


export const loginSchema = z.object({
    body: z.object({
        username:z.string({required_error:'Username is required!'}),
        password: z.string({required_error:'Password is required!'})
    })
})
export type loginSchemaType = z.infer<typeof loginSchema>['body'];


export const changePasswordSchema= z.object({
    params:z.object({
        userid:z.string({invalid_type_error:'userid must be string!'})
    }),
    body:z.object({
        password:z.string({required_error:'Password is required!'}).min(8 , 'Password must be more than 8')
    })
})


export const checkJoinigYearSchema= z.object({
    params: z.object({
        userid:z.string({required_error:'userid must be string'}),
        year:z.string({required_error:'joining year must be string'})
    })
})
export type checkJoinigYearSchemaType = z.infer<typeof checkJoinigYearSchema>['params'];


export const getUsersByJoinigYearSchema= z.object({
    params: z.object({
        year:z.string({required_error:'joining year must be string'})
    })
})
export type getUsersByJoinigYearSchemaType = z.infer<typeof getUsersByJoinigYearSchema>['params'];
