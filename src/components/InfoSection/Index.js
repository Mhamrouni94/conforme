import { Button } from '../ButtonElements'
import React from 'react'
import { InfoContainer, InfoWapper,
          InfoRow, Column1, TextWrapper,
          TopLine, Heading, Subtitle, BtnWarp,
          Column2, Img, ImgWarp} from './InfoElements'
import Register from '../Register/Register'          


const InfoSection = ({lightBg, id, imgStart, topLine, lightText,
 headLine, darkText, description, buttonLabel, img, alt,
 primary, dark, dark2 }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
         <InfoWapper>
          <InfoRow imgStart= {imgStart}>
           <Column1>
            <TextWrapper>
             <TopLine>{topLine}</TopLine>
             <Heading lightText={lightText}>{headLine}</Heading>
             <Subtitle darkText={darkText}>{description}</Subtitle>
             <BtnWarp>
               <Button to="/Register"
               smooth={true}
               duration={500}
               spy={true}
               exacte="true"
               offset={-80}
               primary={primary ? 1 : 0}
               dark={dark ? 1 : 0}
               dark2={dark2 ? 1 : 0}
               >{buttonLabel}</Button>
             </BtnWarp>
            </TextWrapper>
           </Column1>
           <Column2>
            <ImgWarp>
                <Img src={ img } alt={alt}/>
                   
            </ImgWarp>
           </Column2>
          </InfoRow>
         </InfoWapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection