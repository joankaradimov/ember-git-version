import config from '../config/environment';

export default {
  name: 'print-git-info',

  initialize: function() {
    console.log(config.currentRevision);
  }
}
