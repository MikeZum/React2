import React from "react";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Item = styled.li`
    width: 400px;
    height: 155px;
    background-image: ${(props) => `url(${props.img})`}
`;

export const ListItem = ({ itemList }) => (
    <List>
        {itemList.map(item => (
            <Item
                key={item.id}
                img={item.img}>
                    {item.name}
            </Item>
        ))}
    </List>
);