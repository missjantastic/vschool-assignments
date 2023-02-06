import React from 'react'

export default function ColorPalette(props){
    const { colors, getColors, updateActiveColor } = props;

    const swatches = colors.map(color => {
        const { index } = color
        const width = 100 / (colors.length*1.5);
        const style = {
            backgroundColor: `#${color}`,
            width: `${width}%`,
            paddingTop: `${width}%`,
            borderRadius: '15px'
        }

        return(
            <div 
                onClick={()=>updateActiveColor(color)}
                id={color}
                key={index + color}
                style={style}
            />
        )
    })
    
    return(
        <div className='color-palette'>
            <div className ='color-swatches'>
                {swatches}
            </div>
            <button onClick={getColors} className='new-palette-button'>Generate New Palette</button>
        </div>
    )
}