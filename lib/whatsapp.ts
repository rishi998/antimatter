import { company } from "@/lib/company";

export function getWhatsAppUrl(message = company.whatsappMessage): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}
