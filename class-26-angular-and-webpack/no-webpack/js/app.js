'use strict';

angular.module('demoApp', [])
.component('yodaSpeak', {
  template: `<div>
    <input ng-model="$ctrl.text">

    <button ng-click="$ctrl.getYodaText()"> Get Yoda Text </button>

    <p> Yoda would say: {{ $ctrl.yodaText }} </p>
  </div>`,
  controller: ['$log', '$http', function($log, $http){
    this.$onInit = function(){
      $log.log('init yodaSpeak controller');

      this.getYodaText = function(){
        $http({
          url: 'https://yoda.p.mashape.com/yoda',
          headers: {
            'X-Mashape-Key': 'lbqhiHnPcnmshcxMzZ4OCdMOAAzDp1VNRKtjsnHZ4Xx3cyTQix',
            Accept: 'text/plain',
          },
          params: {
            sentence: this.text,
          },
        })
        .then(res => {
          $log.log('res', res);
          this.yodaText  = res.data; 
        })
        .catch($log.error);
      };
    }
  }],
});
