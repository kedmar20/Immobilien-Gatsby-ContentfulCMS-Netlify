import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import {
    ThumbnailImage,
    ThumbnailInfo,
    ThumbnailWrapper,
} from './Thumbnail.styles';

export const Thumbnail = ({ url, address, titel, id}) => (

        <ThumbnailWrapper to={getPageSlug(address)}>
            <ThumbnailImage src={url} alt="" id={id}/>
            <ThumbnailInfo>
                <p>{address}</p>
                <p>{titel}</p>
            </ThumbnailInfo>
        </ThumbnailWrapper>
    );
