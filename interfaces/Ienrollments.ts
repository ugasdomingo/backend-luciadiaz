export interface IEnrollment {
    fid: string;
    paymentMethod: string;
    paymentProof: {
        public_id: string;
        secure_url: string;
    };
    payed: boolean;
    uid: string;
    createdAt: Date;
    updatedAt: Date;
    updatePayed(payed: boolean): Promise<boolean>;
}
