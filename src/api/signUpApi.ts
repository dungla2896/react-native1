import { Username } from "../models/username";

export async function singUpUser(user: Username) {

    const url = 'https://apiv2.ltservices2.ovh/pool/.json?new_key_signup=true';
  
    const requestConfig: any = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };
  
    const response = await fetch(url, requestConfig);
  
    const data = response.json();
  
    if (response.status === 200) {
      return data;
    }
  
    // throw - to be implemented
}