import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing) {
    debugger;
  }

  regularShare(){
    // share(message, subject, file, url)
    this.socialSharing.share("Social sharing email test message", "some subject", "www/assets/img/hulk.png", null); 

    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
      alert('email possible');
    }).catch((canShareMsg) => {
      // Sharing via email is not possible
      alert('canShareViaEmail ERROR:  ' + canShareMsg);
    });

    // Share via email
    this.socialSharing.shareViaEmail('some Body', 'some Subject', ['dturczyn@kpmg.com']).then(() => {
      // Success!
      alert('email success');
    }).catch((msg) => {
      // Error!
      alert('shareViaEmail ERROR:  ' + msg);
    });

  }

}
