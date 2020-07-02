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
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};


coin.flip()
console.log(coin.toString()) 