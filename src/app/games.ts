export interface IGames {
    id: number;
    name: string;
    description: string;
    image: string;
    category: {
        id: number,
        name: string
    };
    price: string;
    text: string;
    screenshots: string;
    cat: string;
}
