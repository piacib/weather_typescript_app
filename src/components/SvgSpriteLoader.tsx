import React from 'react'
import {ImageFiles} from '../types'  
interface Props {
    image: ImageFiles;
    type: 'static' | 'animated';
}
const SvgSprite:React.FC <Props> = ({image, type}) => {
    return (
        <svg>
            <use href={`/icons/${type}/weather-sprite.svg#${image}`} />
        </svg>
    )
}

export default SvgSprite
