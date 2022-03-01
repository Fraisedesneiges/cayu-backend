export declare class UsersController {
    login(username: string, password: string): {
        message: string;
    };
    register(username: string, password: string): {
        message: string;
    };
    addFavorites(username: string, productId: Int32Array): {
        message: string;
    };
    deleteFavorites(username: string, productId: Int32Array): {
        message: string;
    };
}
