"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import Contact from "@/models/Contact"
import db from "./db"

export const addContact = async (FormData: any) => {
 const { firstName, lastName, email, phone } = Object.fromEntries(FormData)
 try {
  db.connect()
  const newContact = new Contact({
   firstName, lastName, email, phone
  })
  await newContact.save()
 } catch (error) {
  throw new Error("Unable to create contact" + error)
 }
 revalidatePath("/")
 redirect("/")
}

export const updateContact = async (FormData: any) => {
 const { id, firstName, lastName, email, phone } = Object.fromEntries(FormData)
 try {
  db.connect()
  const updateFields = new Contact({
   firstName, lastName, email, phone
  })
  Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])
  await Contact.findByIdAndUpdate(id, updateFields)
 } catch (error) {
  throw new Error("Unable to update contact" + error)
 }
 revalidatePath("/")
 redirect("/")
}

export const deleteContact = async (FormData: any) => {
 const { id } = Object.fromEntries(FormData)
 try {
  db.connect()
  await Contact.findByIdAndDelete(id)
 } catch (error) {
  throw new Error("Unable to delete contact" + error)
 }
 revalidatePath("/")
}