import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Carousel, Item} from 'react-bootstrap';
import {connect} from 'react-redux'

const Game = React.createClass({

    wrapperID : "my-memory-game",
    cards : [
        {
            id : 1,
            img: "../public/img/kateCards-01.jpg"
        },
        {
            id : 2,
            img: "../public/img/kateCards-02.jpg"
        },
        {
            id : 3,
            img: "../public/img/kateCards-03.jpg"
        },
        {
            id : 4,
            img: "../public/img/kateCards-04.jpg"
        },
        {
            id : 5,
            img: "../public/img/kateCards-05.jpg"
        },
        {
            id : 6,
            img: "../public/img/kateCards-06.png"
        },
        {
            id : 7,
            img: "../public/img/kateCards-07.png"
        },
        {
            id : 8,
            img: "../public/img/kateCards-08.png"
        },
        {
            id : 9,
            img: "../public/img/kateCards-09.png"
        },
        {
            id : 10,
            img: "../public/img/img/kateCards-10.png"
        },
        {
            id : 11,
            img: "../public/img/kateCards-11.png"
        },
        {
            id : 12,
            img: "../public/img/kateCards-12.png"
        },
        {
            id : 13,
            img: "../public/img/kateCards-13.png"
        },
        {
            id : 14,
            img: "../public/img/kateCards-14.png"
        },
        {
            id : 15,
            img: "../public/img/kateCards-15.png"
        },
        {
            id : 16,
            img: "../public/img/kateCards-16.png"
        }
    ],
    onGameStart : function() { return false; },
    onGameEnd : function() { return false; },

    render() {
        return (
            <div>
                <div id="my-memory-game"></div>
                <script src="../scripts/memory.js"></script>
                <script>
                    var myMem = new Memory({
                });
                </script>
            </div>
        );
    }
});


module.exports = Game;
