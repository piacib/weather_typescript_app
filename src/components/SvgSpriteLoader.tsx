import React from 'react'
import {ImageFiles} from '../types'  
interface Props {
    image: ImageFiles;
    type: 'static' | 'animated';
    width?: number;
    height?: number;
    style?: any;
}
const SvgSprite:React.FC <Props> = ({image, type, width = undefined, height = undefined, style = undefined}) => {
    return (
        <svg width={width} height={height} style={style}>
            <use href={`/icons/${type}/weather-sprite.svg#${image}`} />
        </svg>
    )
}

export default SvgSprite
