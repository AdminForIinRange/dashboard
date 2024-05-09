"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (formData)=>{

    const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData); // formData is transformed into an object

    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
            
        })

        await newUser.save();
    } catch (err) {
        console.log(err);
    }

    revalidatePath('/dashboard/users')// acts like a refresh 
    redirect('/dashboard/users')
}