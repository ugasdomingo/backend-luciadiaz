export interface ITherapyTask {
    uid: string;
    task: string;
    observations: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    updateStatus: (status: string) => Promise<boolean>;
}
