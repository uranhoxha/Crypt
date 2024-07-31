import styled from 'styled-components'
import ImageSlider from '../ui/ImageSlider'

const StyledImageSliderContainer = styled.div`
    h2{
        text-align: center;
        font-family: "Quicksand", sans-serif;
        color: #fff;
    }

    height: 100%;
    background: linear-gradient(0deg, #Fff 50%, #1A232C 50%);
    padding-top:30px;
    padding-left:12px;
`


function CompleteImageSlider() {
    return (
        <StyledImageSliderContainer>
            <h2>Blockchain Explorer</h2>
            <ImageSlider/>
        </StyledImageSliderContainer>
    )
}

export default CompleteImageSlider
