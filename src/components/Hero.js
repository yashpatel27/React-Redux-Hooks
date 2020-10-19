import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker') {
        throw new('Not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
