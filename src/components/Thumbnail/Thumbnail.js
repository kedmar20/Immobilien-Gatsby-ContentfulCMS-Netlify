import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import {
    ThumbnailImage,
    ThumbnailInfo,
    ThumbnailWrapper,
} from './Thumbnail.styles';
import { Link } from "gatsby";
import OneProdukt from "../../pages/oneprodukt";

export const Thumbnail = ({ url, address, titel, id}) => (
<Link to="/oneprodukt" params={{id}}>
        <ThumbnailWrapper >
            <ThumbnailImage src={url} alt="" id={id}/>
            <ThumbnailInfo>
                <p>{address}</p>
                <p>{titel}</p>
                <p>{id}</p>
            </ThumbnailInfo>
        </ThumbnailWrapper>
</Link>
    );
