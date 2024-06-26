export interface ISells {
    bid: string;
    paymentProof: {
        public_id: string;
        secure_url: string;
    };
    payed: boolean;
    paymentMethod: string;
    uid: string;
    notes: string;
    createdAt: string;
    updatedAt: string;
    updatePayed: (payed: boolean) => Promise<boolean>;
}
