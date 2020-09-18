new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHeath: 100,
        showControlPanel: false,
        turns : []
    },
    methods: {
        startNewGame: function () {
            this.showControlPanel = !this.showControlPanel;
            this.turns = [];
            this.playerHealth = 100;
            this.monsterHeath = 100;
        },
        attack: function () {
            var damage =  this.calculateTheDamage(3, 10);
            this.monsterHeath -= damage;
            this.updateTheLog(damage,'attack');
            if (this.checkTheWinner()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateTheDamage(10, 20);
            this.monsterHeath -= damage;
            this.updateTheLog(damage,'specialAttack');
            if (this.checkTheWinner()) {
                return;
            }
            this.monsterAttacks();
        },
        healYourSelf: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.updateTheLog(10,'heal');
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttacks();
        },
        letsGiveUp: function () {
            this.showControlPanel = false;
            this.turns = [];
        },
        monsterAttacks: function () {
            var damage = this.calculateTheDamage(5, 12);
            this.playerHealth -= damage;
            this.updateTheLog(damage,'monsterAttack');
            this.checkTheWinner();
        },
        calculateTheDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        updateTheLog: function (damage,key) {
            switch (key) {
                case 'attack':
                    this.turns.unshift({
                        isPlayer : true,
                        text : 'Player attacks to Monster for ' + damage
                    });
                    break;
                case 'specialAttack':
                    this.turns.unshift({
                        isPlayer : true,
                        text : 'Player performs special attacks to Monster for ' + damage
                    });
                    break;
                case 'heal':
                    this.turns.unshift({
                        isPlayer : true,
                        text : 'Player heals for ' + damage
                    });
                    break;
                case 'monsterAttack':
                    this.turns.unshift({
                        isPlayer : false,
                        text : 'Monster attacks to Player for ' + damage
                    });
                    break;
                default:
                    break;
            }
        },
        checkTheWinner: function () {
            if (this.monsterHeath <= 0) {
                if (confirm('Woohoo!! You Won. Wanna Start New Game?')) {
                    this.startNewGame();
                } else {
                    this.monsterHeath = 0;
                    this.showControlPanel = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost! Wanna Start New Game?')) {
                    this.startNewGame()
                } else {
                    this.playerHealth = 0;
                    this.showControlPanel = false;
                }
                return true;
            } else {
                return false;
            }
        }
    }
});