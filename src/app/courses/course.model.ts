export interface Course {
    id?: number,
    description: string,
    longDescription: string,
    lessonsCount: number,
    category: 'BEGINNER' | 'ADVANCED',
    seqNo: number,
    promo:boolean
}