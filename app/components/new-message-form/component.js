import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  channel:null,
  msgText: "",
  actions: {
    createMsg() {
      var msgText = this.get('msgText');
      var channel = this.get('channel');
      if (msgText.length > 0) {
        var msg = this.get('store').createRecord('message', {
            text: msgText,
            channel: channel,
            author: "Kyriakos"
        });
        this.set('msgText', '');
        msg.save().then(() => {
          channel.save();
        });
      }

    }
  }
});