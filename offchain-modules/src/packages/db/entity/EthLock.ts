import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class EthLock {
  @PrimaryColumn()
  ckb_tx_hash: string;

  @Column()
  chain: number;

  @Column()
  asset: string;

  @Column()
  amount: string;

  @Column()
  recipientAddress: string;
}
