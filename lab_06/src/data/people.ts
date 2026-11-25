export type Person = {
    id: number;
    name: string;
    surname: string;
    avatar: string;
    following: boolean;
};

export const people: Person[] = [
    { id: 1, name: 'Anna', surname: 'Kowalska', avatar: 'https://i.pravatar.cc/150?img=44', following: true },
    { id: 2, name: 'Piotr', surname: 'Nowak', avatar: 'https://i.pravatar.cc/150?img=48', following: false },
    { id: 3, name: 'Maria', surname: 'Wiśniewska', avatar: 'https://i.pravatar.cc/150?img=8', following: false },
    { id: 4, name: 'Krzysztof', surname: 'Gajc', avatar: 'https://i.pravatar.cc/150?img=67', following: true },
];
