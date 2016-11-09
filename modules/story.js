//Story page with carousel, images from img folder.
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Carousel, Item} from 'react-bootstrap';
import {connect} from 'react-redux'

const Story = React.createClass({
    getInitialState() {
        return {
            index: 0,
            direction: null
        };
    },

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    },

    render() {
        return (
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage1.jpg"/>
                    <Carousel.Caption>
                        <h2>Kate the Brave </h2>

                        <p> This is a tale of a tot named Kate who <span className="rBlendType">trotted</span> along a <span className="rBlendType">trail</span> with a <span className="rBlendType">crab</span> inside a <span className="rBlendType">crate</span>. She
                            was planning to return the <span className="rBlendType">crab</span> to the sea by way of cab, but it was <span className="rBlendType">true</span>, Kate's cab ran
                            out gas around two in the afternoon.</p>

                        <p>Kate and her <span className="rBlendType">crab</span> had to rest, so they found a patch of <span className="rBlendType">grass</span>, by a <span className="rBlendType">brook</span> and under a <span className="rBlendType">tree</span>.
                            Kate <span className="rBlendType">drank</span> tea, read her favorite book and took a bite of <span className="rBlendType">bread</span>. Even though it was <span className="rBlendType">bright</span>,
                            she made a bed and began to sleep.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage2.jpg"/>
                    <Carousel.Caption>
                        <p>While Kate was asleep she had a <span className="rBlendType">dream</span>. </p>

                        <p>Kate and her <span className="rBlendType">crab</span> followed a <span className="rBlendType">stream</span> of steam that led them to a <span className="rBlendType">crab</span> shack. Her <span className="rBlendType">crab</span> snapped
                            his claws and <span className="rBlendType">cried</span> because he had horrible <span className="rBlendType">dread</span> that he would soon be dead.</p>

                        <p>The <span className="rBlendType">crab</span> shack cooks were <span className="rBlendType">crooks</span> who stole <span className="rBlendType">crabs</span> from the sea and boiled them up in their
                            restaurant. The owners of this shady joint were slimy <span className="rBlendType">prawns</span> who would pawn and kill <span className="rBlendType">krill </span>
                             and <span className="rBlendType">crabs</span> for a fee. This filled Kate with <span className="rBlendType">fright</span> and she knew she would have to fight to
                            save her <span className="rBlendType">crab's</span> life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage3.jpg"/>
                    <Carousel.Caption>
                        <p> She had to tie the lid tight on the <span className="rBlendType">crate</span> or the <span className="rBlendType">crooked prawns</span> would <span className="rBlendType">try</span> to cook her <span className="rBlendType">crab </span>
                              too. </p>

                        <p>Kate shouted at those <span className="rBlendType">greedy prawns</span>, "Set the <span className="rBlendType">crabs free</span>!"</p>

                        <p>They laughed as they dipped the <span className="rBlendType">crabmeat</span> in melted butter. The buttery <span className="rBlendType">grease dripped from </span>
                            their chins onto their  <span className="rBlendType">aprons</span>.</p>

                        <p>Suddenly, a  <span className="rBlendType">crane</span> from the  <span className="rBlendType">construction</span> site  <span className="rBlendType">across</span> the  <span className="rBlendType">street crashed</span> into the shack and there
                            was loud BOOM! The  <span className="rBlendType">crab</span> shack exploded and the  <span className="rBlendType">prawns</span> were  <span className="rBlendType">crushed</span> by the
                             <span className="rBlendType"> bricks</span>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage4.jpg"/>
                    <Carousel.Caption>
                        <p>All the <span className="rBlendType">crab</span> and <span className="rBlendType">krill pranced</span> snapping and clapping their claws like cassenettes. The latch
                            on the <span className="rBlendType">prawn</span> dungeon gate flung open and the <span className="rBlendType">crabs</span> cheered, "This is <span className="rBlendType">GREAT</span>!!!"</p>

                        <p>Kate used the <span className="rBlendType">drive</span> thru microphone and made a call to tell them all to <span className="rBlendType">crawl</span> into the
                            <span className="rBlendType"> crane's</span> scoop. The <span className="rBlendType">crabs</span> and <span className="rBlendType">krill</span> spilled into the <span className="rBlendType">crane</span> bucket with a <span className="rBlendType">crash</span>. Kate directed
                            the man to <span className="rBlendType">drive</span> them back to the sea. After that, Kate took the restaurant cash and gave it
                            to The Sea Animal Education Agency. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage5.jpg"/>
                    <Carousel.Caption>
                        <p>She <span className="rBlendType">drove</span> to the ocean and dove in to be with her <span className="rBlendType">friends</span>, but her limbs were too heavy and
                            she could not swim. Kate began to gasp and <span className="rBlendType">grasp</span> because she thought she was <span className="rBlendType"> drowning</span>, but
                            no, she was only <span className="rBlendType">dreaming</span>.</p>

                        <p>Kate woke up to sound of the gentle spring rain falling on her <span className="rBlendType">crown</span> and in her mouth. She
                            coughed and <span className="rBlendType">croaked</span> and took a sip of her <span className="rBlendType">drink</span>. It was now dark and late, she was wet and
                            wanted to get out of the rain.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage6_end.jpg"/>
                    <Carousel.Caption>
                        <p>As she rubbed her eyes, she thought in her <span className="rBlendType">brain</span>, "Oh dear, it was all a <span className="rBlendType">dream</span>!" Suddenly, a
                            <span className="rBlendType"> train</span> whistle blew announcing its arrival. She scooped up her <span className="rBlendType">friend</span> and took shelter on a
                            <span className="rBlendType"> freight train</span>. They rode the rails down to the town. When they got there, Kate hired a boat
                            and took her <span className="rBlendType">crab</span> out in the middle of ocean to finally set it <span className="rBlendType">free</span>. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
});


module.exports = Story;
