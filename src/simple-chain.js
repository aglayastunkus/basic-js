import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain:[],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        value !== undefined
            ? this.chain.push(( `${value}` ))
            : this.chain.push('( )');
        return this;

    },
    removeLink(position) {
        if (isNaN(position) || position < 1 || position > this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }

        this.chain.splice(position-1, 1);
        return this
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        let text = '';
        this.chain.forEach(function (item) {
            text = text + `( ${item} )~~`;
        });
        this.chain = [];
        return text.slice(0, -2);
    }
};
