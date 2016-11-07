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

                        <p> This is a tale of a tot named Kate who trotted along a trail with a crab inside a crate. She
                            was planning to return the crab to the sea by way of cab, but it was true, Kate's cab ran
                            out gas around two in the afternoon.</p>

                        <p>Kate and her crab had to rest, so they found a patch of grass, by a brook and under a tree.
                            Kate drank tea, read her favorite book and took a bite of bread. Even though it was bright,
                            she made a bed and began to sleep.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage2.jpg"/>
                    <Carousel.Caption>
                        <p>While Kate was asleep she had a dream. </p>

                        <p>Kate and her crab followed a stream of steam that led them to a crab shack. Her crab snapped
                            his claws and cried because he had horrible dread that he would soon be dead.</p>

                        <p>The crab shack cooks were crooks who stole crabs from the sea and boiled them up in their
                            restaurant. The owners of this shady joint were slimy prawns who would pawn and kill krill
                            and crabs for a fee. This filled Kate with fright and she knew she would have to fight to
                            save her crab's life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage3.jpg"/>
                    <Carousel.Caption>
                        <p> She had to tie the lid tight on the crate or the crooked prawns would try to cook her crab
                            too. </p>

                        <p>Kate shouted at those greedy prawns, "Set the crabs free!"</p>

                        <p>They laughed as they dipped the crabmeat in melted butter. The buttery grease dripped from
                            their chins onto their aprons.</p>

                        <p>Suddenly, a crane from the construction across the street crashed into the shack and there
                            was loud BOOM! The crab shack exploded and the prawns were crushed by the
                            bricks.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage4.jpg"/>
                    <Carousel.Caption>
                        <p>All the crab and krill pranced snapping and clapping their claws like cassenettes. The latch
                            on the prawn dungeon gate flung open and the crabs cheered, "This is GREAT!!!"</p>

                        <p>Kate used the drive thru microphone and made a call to tell them all to crawl into the
                            crane's scoop. The crabs and krill spilled into the crane bucket with a crash. Kate directed
                            the man to drive them back to the sea. After that, Kate took the restaurant cash and gave it
                            to The Sea Animal Education Agency. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage5.jpg"/>
                    <Carousel.Caption>
                        <p>She drove to the ocean and dove in to be with her friends, but her limbs were too heavy and
                            she could not swim. Kate began to gasp and grasp because she thought she was drowning, but
                            no, she was only dreaming.</p>

                        <p>Kate woke up to sound of the gentle spring rain falling on her crown and in her mouth. She
                            coughed and croaked and took a sip of her drink. It was now dark and late, she was wet and
                            wanted to get out of the rain.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={462} alt="900x500" src="../../img/kateStoryPage6_end.jpg"/>
                    <Carousel.Caption>
                        <p>As she rubbed her eyes, she thought in her brain, "Oh dear, it was all a dream!" Suddenly, a
                            train whistle blew announcing its arrival. She scooped up her friend and took shelter on a
                            freight train. They rode the rails down to the town. When they got there, Kate hired a boat
                            and took her crab out in the middle of ocean to finally set it free. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
});


module.exports = Story;
