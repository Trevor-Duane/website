import styled from 'styled-components'; 

export const NavbarSection = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 2px solid #004c0d;

`
export const Logo = styled.div`
    width: 80px;
    height: 100px
    float: left;
    position: relative;
    left: 0;

    & >img{
        margin:auto;
        height: 200px;
        width: 200px;
    }

`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: #004c0d;

`
export const UIList = styled.ul`
    width: 80%;
    float: right; 
    list-style: none;
    padding: 0;
    position: relative;
    right: 0;

` 
export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #004c0d;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: eb5424;
    }

`
