let coin = {
    state: 0,
    flip: function () {

        if (Math.random() >= 0.5) {

            this.state = 1

        } else {
            this.state = 0

        }




    },
    toString: function () {
        if (this.state === 0) {
            return "heads"

        } else {
            return "tails"
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "Images/heads.jpg"
        } else {
            image.src = "Images/tails.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

coin.flip()
console.log(coin.toString())

document.body.appendChild(coin.toHTML());

function display20Flips() {
    for (let i = 0; i < 20; i++) {
        coin.toString()
    }
}

display20Flips()

coin.flip()
console.log(coin.toString())

document.body.appendChild(coin.toHTML());

function display20images() {
    for (let i = 0; i < 20; i++) {
        coin.toHTML()
    }
}

display20images()