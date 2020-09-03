import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OneSignalService {

	constructor(private http: HttpClient) { }

	sendDirectMessage(message) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Basic MTk2NmFlMTYtNjhjMS00ZDg0LWIyYWEtNjE3MjZmYWY4MjI1'
		});

		const options = { headers: headers };
		const dataSend = JSON.stringify({
			app_id: "b6c7c986-8af5-4939-a6fe-8a7fe0458689",
			contents: { "en": message },
			included_segments: ["Active Users"],
			data: {text: 'esto es ua prueba'}
		});

		this.http.post('https://onesignal.com:443/api/v1/notifications', dataSend, options).subscribe((data) => {
			console.log(data);
		});
	}
}
