module.exports = {
    "extends": "eslint:recommended", //推荐的规则
    "rules": { //自己的规则
        "no-console":["error",{
            "allow":["warn","error","info"]
        }]
    },
    "parser":"babel-eslint",
    "parserOptions":{
        "ecmaVersion":6,
        "sourceType":"script"
    },
    "globals":{
        "window":false
    },
    "env": {
        "browser": false,
        "node":true,
        "es6":true,
        "mocha":true
    },
};