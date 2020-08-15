import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: Observable<any[]>;
	private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) { }
  
  obtener(tabla, show?): Observable<any> {
		this.itemsCollection = this.db.collection(tabla);
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
  }
  
  obtenerId(tabla, id, show?): Observable<any> {
		this.itemsCollection = this.db.collection(tabla, ref => ref.where('id', '==', id));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
  }

  obtenerUniqueId(tabla, id): Observable<any> {
		this.itemsCollection = this.db.collection(tabla, ref => ref.where('idunico', '==', id));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
  }

  obtenerProductoCategoria(categoria): Observable<any> {
		this.itemsCollection = this.db.collection('productos', ref => ref.where('idunicoCategoria', '==', categoria));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
  }
  
  obtenerLogin(user, pass): Observable<any> {
		this.itemsCollection = this.db.collection('usuarios', ref => ref.where('user', '==', user).where('pass', '==', pass));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
  }
  
  obtenerChat(id) {
		this.itemsCollection = this.db.collection('chat', ref => ref.where('uniqueId', '==', id));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
	}

	obtenerChatReceptor(idReceptor) {
		this.itemsCollection = this.db.collection('chat', ref => ref.where('receptor', '==', idReceptor));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
	}

	obtenerChatEmisor(idEmisor) {
		this.itemsCollection = this.db.collection('chat', ref => ref.where('emisor', '==', idEmisor));
		return this.itemsCollection.snapshotChanges().pipe(
			map(data => {
				return data.map(d => {
					const retorno = d.payload.doc.data();
					retorno['id'] = d.payload.doc.id;
					return retorno;
				});
			})
		);
	}

	guardarDatos(tabla: string, data) {
		this.itemsCollection = this.db.collection<any>(tabla);
		return this.itemsCollection.add(JSON.parse(JSON.stringify(data))).then(
			(resp) => {
				return resp.id;
			}
		).catch(() => {
			return false;
		});
	}

	actualizarDatos(tabla, data, id) {
		this.itemsCollection = this.db.collection<any>(tabla);
		return this.itemsCollection.doc(id).update(JSON.parse(JSON.stringify(data))).then(
			() => {
				return true;
			}
		).catch(() => {
			return false;
		});
	}

	eliminarDatos(tabla: string, id: any) {
		this.itemsCollection = this.db.collection<any>(tabla);
		this.itemsCollection.doc(id).delete().then(
			() => {
				return true;
			}
		).catch(() => {
			return false;
		});
	}
  
}
