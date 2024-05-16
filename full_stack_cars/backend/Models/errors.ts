class ClientsErrors {
    public code:number;
    public message:string;

    constructor(code:number, message:string) {
        this.code = code;
        this.message = message;
    }
}

export class RouteNotFound extends ClientsErrors {
    constructor(route:string){
        super(404, `route ${route} not found`);
    }
}
