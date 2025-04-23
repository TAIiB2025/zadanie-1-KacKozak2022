export class Product
{
    nazwa: string;
    cena: number;
    dataUtworzenia: Date;
    czyPromocja: boolean;
    sztuki: number;

    constructor(nazwa: string, cena: number, dataUtworzenia: Date, czyPromocja: boolean, sztuki: number)
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dataUtworzenia = dataUtworzenia;
        this.czyPromocja = czyPromocja;
        this.sztuki = sztuki;
    }
}