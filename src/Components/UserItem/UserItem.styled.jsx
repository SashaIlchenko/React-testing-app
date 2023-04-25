import styled from "@emotion/styled";

export const Item = styled.li`
position: relative;
padding-bottom:36px;
width: 380px;
list-style: none;
background-image: linear-gradient(to right, #471CA9
0%, #5736A3 69%, #4B2A99 100%);
 box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);
 border-radius: 21px;`


export const Wrapper = styled.div`
margin-bottom: 62px;
padding: 20px;
border-bottom: 8px solid #EBD8FF;
width:340px;
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),
inset 0 3px 3px 0 rgba(251, 248, 255, 0.06),
inset 0 -2px 3px 0 rgba(174, 123, 227, 0.25);
 `

export const Avatar = styled.img`
position: absolute;
    top: 190px;
    left: 135px;
width:80px;
height:80px;
border-radius:50%;
border:8px solid #EBD8FF;
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),
inset 0 3px 3px 0 rgba(251, 248, 255, 0.06),
inset 0 -2px 3px 0 rgba(174, 123, 227, 0.25); 
`
export const TweetsInfo = styled.p`
margin-bottom:16px;
text-align: center;
text-transform: uppercase;
font-size: 20px;
line-height:1.2;
color:#EBD8FF;
`

export const FollowingBtn = styled.button`
margin-bottom: 10px;
width: 196px;
margin-left: auto;
margin-right: auto;
color: #373737;
background-color: #EBD8FF;
border-radius: 10.31px;
 &.active {
    background-color: #5CD3A8;
  }
`
