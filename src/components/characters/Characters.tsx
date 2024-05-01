import React from 'react';
import Character from "../character/Character";

const Characters = () => {
    return (
        <div>

            <Character name={'Bart'} image={'https://i.pinimg.com/474x/4a/ae/13/4aae13a8bf01f47530afcb4b30de3e1a.jpg'}></Character>

            <Character name={'Homer'}
                       image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}></Character>


        </div>
    );
};

export default Characters;