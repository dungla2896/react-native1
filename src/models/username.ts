
export interface Username {
    CONTENT?: any;
    firstname: string,
	email: string,
	password: string,
	affiliate: 1,
	mailing: 1,
	birthday: string,
	gender: number,
	origin: number,
	geoname_id: number,
}

export interface UserLogin {
    [x: string]: any;
    login: string;
	validitySeconds: number;
	password: string;
}