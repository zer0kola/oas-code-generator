import { z } from "zod";

export const OrderSchema = z.object({
  id: z.number().int().optional(),
  petId: z.number().int().optional(),
  quantity: z.number().int().optional(),
  shipDate: z.string().datetime({ offset: true }).optional(),
  status: z
    .enum(["placed", "approved", "delivered"])
    .describe("Order Status")
    .optional(),
  complete: z.boolean().optional(),
});
export type OrderSchema = z.infer<typeof OrderSchema>;
