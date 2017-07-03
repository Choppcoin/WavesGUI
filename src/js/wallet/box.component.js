(function () {
    'use strict';

    function WalletBoxController() {
        var ctrl = this;

        var mapping = {};
        mapping[Currency.WAVES.displayName] = {
            image: 'wB-bg-WAV.svg',
            displayName: Currency.WAVES.displayName
        };
        mapping[Currency.BTC.displayName] = {
            image: 'wB-bg-BTC.svg',
            displayName: Currency.BTC.displayName
        };
        mapping[Currency.USD.displayName] = {
            image: 'wB-bg-USD.svg',
            displayName: Currency.USD.displayName
        };
        mapping[Currency.EUR.displayName] = {
            image: 'wB-bg-EUR.svg',
            displayName: Currency.EUR.displayName
        };
        mapping[Currency.CNY.displayName] = {
            image: 'wB-bg-RMB.svg',
            displayName: Currency.CNY.displayName
        };
        mapping[Currency.REAL.displayName] = {
            image: 'wB-bg-BRL.svg',
            displayName: Currency.REAL.displayName
        };
        mapping[Currency.CHOPP.displayName] = {
            image: 'wB-bg-RMB.svg',
            displayName: Currency.CHOPP.displayName
        };

        ctrl.$onChanges = function (changesObject) {
            if (changesObject.balance) {
                var balance = changesObject.balance.currentValue;
                ctrl.integerBalance = balance.formatIntegerPart();
                ctrl.fractionBalance = balance.formatFractionPart();
            }
        };
        ctrl.$onInit = function () {
            ctrl.image = mapping[ctrl.balance.currency.displayName].image;
            ctrl.displayName = mapping[ctrl.balance.currency.displayName].displayName;
        };
    }

    WalletBoxController.$inject = [];

    angular
        .module('app.wallet')
        .component('walletBox', {
            controller: WalletBoxController,
            bindings: {
                balance: '<',
                onSend: '&',
                onWithdraw: '&',
                onDeposit: '&',
                detailsAvailable: '<?'
            },
            templateUrl: 'wallet/box.component'
        });
})();
