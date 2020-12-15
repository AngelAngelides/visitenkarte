import { brandDark, brandGreen, brandLight } from "./colors"

export const h2 = `
    color: ${brandGreen};
    font-family: Spartan;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 28px;
    @media (min-width: 780px) {
        font-size: 32px;
        line-height: 42px;
    }
`

export const h3 = `
    color: ${brandGreen};
    font-family: Spartan;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 18px;
    @media (min-width: 780px) {
        font-size: 24px;
        line-height: 24px;
    }
`

export const footer = `
    color: ${brandLight};
    font-family: Spartan;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 17px;
    text-align: center;
    @media (min-width: 780px) {
        font-size: 16px;
        line-height: 19px;
    }
`
export const copy = `
    color: ${brandDark};
    font-family: Spartan Medium;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
    @media (min-width: 780px) {
        font-size: 20px;
        line-height: 30px;
        font-family: Spartan;
        font-weight: 600;
    }
`
export const articleCopy = `
    color: ${brandDark};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
    font-family: Spartan Medium;
    font-weight: 500;
`
