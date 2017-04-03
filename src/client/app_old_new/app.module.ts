import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AntivirusModule } from './antivirus/antivirus.module';
import { ContactInfoModule } from './contactInfo/contactInfo.module';
import { BackupModule } from './backup/backup.module';
import { LatestNewsModule } from './latestNews/latestNews.module';
import { LockComputerModule } from './lockComputer/lockComputer.module';
import { MailBehaviourModule } from './mailBehaviour/mailBehaviour.module';
import { OnlineUseModule } from './onlineUse/onlineUse.module';
import { OrganizationModule } from './organization/organization.module';
import { PasswordModule } from './password/password.module';
import { PhishingModule } from './phishing/phishing.module';
import { SoftwareUpdateModule } from './softwareUpdate/softwareUpdate.module';
import { ClassifcationDataModule } from './classifcationData/classifcationData.module';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routes';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AntivirusModule, ContactInfoModule, BackupModule, LatestNewsModule, LockComputerModule, MailBehaviourModule, OnlineUseModule, OrganizationModule, PasswordModule, PhishingModule, SoftwareUpdateModule, ClassifcationDataModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
