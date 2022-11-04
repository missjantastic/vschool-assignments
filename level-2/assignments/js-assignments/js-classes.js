class Player {
    constructor() {
        this.name = "Mario";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
    }

    setName(namePicked){
        if (namePicked === "Mario"){
            this.name = "Mario";
        } else {
            this.name = "Luigi";
        }
    }

    gotHit(){
        if (this.hasStar === true){
            console.log('Your star protected you!');
            this.hasStar = false;
            return;
        }
        switch(this.status) {
            case 'Small' :
                this.status = 'Dead';
                break;
            case 'Big' :
                this.status = 'Small';
                break;
            case 'Powered Up' :
                this.status = 'Big';
                break;
            default :
                return;
        }
    }

    gotPowerup(){
        switch(this.status) {
            case 'Small' :
                this.status = 'Big';
                break;
            case 'Big' :
                this.status = 'Powered Up';
                break;
            case 'Powered Up' :
                this.hasStar = true;
                console.log('Congratulations, you got a star!')
                break;
            default :
                return;
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        const playerInfo = `Name: ${this.name}\nStatus: ${this.status}\nTotalCoins: ${this.totalCoins}\n\n`;
        console.log(playerInfo);
    }
}

function randomRange() {
    return Math.floor(Math.random() * 3);
}

function progressGame(player) {
    let result = randomRange();
    switch(result) {
        case 0 :
            player.gotHit();
            break;
        case 1 :
            player.gotPowerup();
            break;
        case 2 :
            player.addCoin();
            break;
        default : 
            console.log('Number out of range');
    }
    player.print();
}

const myPlayer = new Player();
// print initial character stats
myPlayer.print();

// begin playthrough
let intervalID = setInterval(()=>{
    progressGame(myPlayer)
    // end game if player dies
    if (myPlayer.status === 'Dead') {
        clearInterval(intervalID);
    }
}, 1000)
