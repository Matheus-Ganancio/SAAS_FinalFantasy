import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Define o que é opcional e obrigatório no formulário
const profileSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    status: z.string(),
    timeZone: z.string().min(1, { message: "Time zone is required" }),
})

type profileFormData = z.infer<typeof profileSchema>;

export function useProfileForm() {
    return useForm<profileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: "",
            address: "",
            phone: "",
            status: "Active",
            timeZone: "",
        }
    })
}