import React from 'react'
import {ImageFiles} from '../types'  
interface Props {
    image: ImageFiles;
    type: 'static' | 'animated';
    width?: number;
    height?: number;
}
const SvgSprite:React.FC <Props> = ({image, type, width = undefined, height = undefined}) => {
    return (
        <svg width={width} height={height}>
            <use href={`/icons/${type}/weather-sprite.svg#${image}`} />
        </svg>
    )
}

export default SvgSprite
