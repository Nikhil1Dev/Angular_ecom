// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [AppComponent, LoginComponent, SignupComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     DemoAngularMaterailModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { HttpClientModule } from '@angular/common/http';

// // ✅ Import Footer Component
// import { FooterComponent } from './shared/footer/footer.component';
// import { CartStatusComponent } from './components/cart-status/cart-status.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     SignupComponent,
//     FooterComponent,
//     CartStatusComponent // ✅ Registering footer component
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     DemoAngularMaterailModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { HttpClientModule } from '@angular/common/http';

// // ✅ Footer & Cart
// import { FooterComponent } from './shared/footer/footer.component';
// import { CartStatusComponent } from './components/cart-status/cart-status.component';

// // ✅ Angular Material Dialog
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';

// // ✅ Popup components for dialogs (inline HTML will be used in AppComponent)
// import { MatIconModule } from '@angular/material/icon';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     SignupComponent,
//     FooterComponent,
//     CartStatusComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     DemoAngularMaterailModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule,

//     // ✅ Material Dialog & Button
//     MatDialogModule,
//     MatButtonModule,
//     MatIconModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogBoxComponent } from './app.component'; // ✅ Import dialog component

import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';

// ✅ Angular Material Dialog & Button
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    CartStatusComponent,
    DialogBoxComponent // ✅ Declare inline dialog component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterailModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}