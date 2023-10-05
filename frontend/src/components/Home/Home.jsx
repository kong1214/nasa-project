import React, { useState, useEffect } from "react";
import * as S from "./Home.style";


function Home() {
    const [nasaData, setNasaData] = useState({})

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=VheC4heKcUAw5twemq4sRdYZmdeiwsmk1bPpqlMA")
            .then(res => res.json()).then(data => setNasaData(data))
    }, []);
    return (
        <S.HomeWrapper>
            <S.MainWrapper>
                <S.MainHeader>Image of the Day</S.MainHeader>
                <S.ContentWrapper>
                    <S.ImageContainer>
                        <S.ImageOfTheDay src={nasaData.url} alt='Nasa Image of the Day' />
                    </S.ImageContainer>
                    <S.ImageTitleExplanationCopyrightDate>
                        <S.ImageTitle>
                            {nasaData.title}
                        </S.ImageTitle>
                        <S.CopyrightDateContainer>
                            by {nasaData.copyright} {`(${nasaData.date})`}
                        </S.CopyrightDateContainer>
                        <S.ImageExplanation>
                            {nasaData.explanation}
                        </S.ImageExplanation>
                    </S.ImageTitleExplanationCopyrightDate>
                </S.ContentWrapper>
            </S.MainWrapper>
        </S.HomeWrapper>
    );
}

export default Home;
