import { Pizza } from "./pizza.model";

export interface CartItem{
    pizza: Pizza,
    qtt: number,
    qttASupprimer: number
}