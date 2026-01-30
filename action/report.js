'use server';

import { generateSeoPdf } from "@/lib/pdf/generateSeoReport";

export default async function createReport(form, prevState, formData) {
    try {
        console.log(form)
        const pdfBuffer = await generateSeoPdf(form);

        return {
            success: true,
            message: "PDF successfully generated",
            pdf: Buffer.from(pdfBuffer).toString('base64')
        }

    } catch (error) {
        console.error(error.message);
        return {
            success: false,
            message: 'Failed to generate PDF'
        }
    }
}