import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'products'})
export class ProductEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar', length: 255})
    code: string;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 255})
    description: string;

    @Column({type: 'varchar', length: 255})
    image: string;

    @Column({type: 'int'})
    price: number;

    @Column({type: 'varchar', length: 255})
    category: string;

    @Column({type: 'int'})
    quantity: number;

    @Column({type: 'varchar', length: 255})
    inventoryStatus: string;

    @Column({type: 'int'})
    rating: number;
}
