import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
 
  pproductscollection="products";

  constructor(private angularFirestore :AngularFirestore) { }
  getproductsDoc(data){
    return this.angularFirestore.collection('products').doc(data.payload.doc.id).valueChanges()}
  

  getPlasList() {  return this.angularFirestore.collection('products').snapshotChanges();}


 
 
 
    supprimeProduit(data) {
      return this.angularFirestore.collection("products").doc(data.payload.doc.id).delete();
    }

   
   
    
    productsAdd(products) {  
      return this.angularFirestore.collection('products').add(products);  
    } 
    updateUser(recordID, record) {
      this.angularFirestore.doc('products/' + recordID).update(record);
    }
  
  

    

  }


