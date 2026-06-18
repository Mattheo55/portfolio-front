"use client";

import { PersonalTech } from "@/type/PersonalTech"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import TechCard from "./TechCard"

type PersonalTechDialogProps = {
    item: PersonalTech
}

export default function PersonalTechDialog({item}: PersonalTechDialogProps) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div>
                <TechCard image={item.image} description={item.description}>{item.title}</TechCard>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{item.title}</DialogTitle>
                <DialogDescription>{item.description}</DialogDescription>
            </DialogHeader>
            {item.content}
        </DialogContent>
    </Dialog>
  )
}
