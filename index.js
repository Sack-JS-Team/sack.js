/*
 * Sack.JS
 * A collaborative project from 3 weird dudes
 */

module.exports = {
    me: () => require("."),
    you: (name) => name,
    love: undefined,
    porn: "Please enable NSFW mode or else we will call your parents (if they are dead, we are sorry.)",
    encrypt: (text) => "Sorry, but '" + text + "' is encrypted. You can't read this. Sorry."
};