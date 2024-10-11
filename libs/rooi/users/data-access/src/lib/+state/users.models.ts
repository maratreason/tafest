/**
 * Interface for the 'Users' data
 */
export interface UsersEntity {
    id: string | number; // Primary ID
    name: string;
    created_at: number,
    surname: string,
    role: number,
    email: string,
    city: string,
    research: string,
    tab_num: string,
    online: number;
}
