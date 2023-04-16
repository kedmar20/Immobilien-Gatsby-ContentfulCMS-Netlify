import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import {
    ThumbnailImage,
    ThumbnailInfo,
    ThumbnailWrapper,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource}) => (
    <ThumbnailWrapper>
        <ThumbnailImage src={imageSource} alt="" />
        <ThumbnailInfo>
            <p>adresse immo</p>
            <p>titel immo</p>
        </ThumbnailInfo>
    </ThumbnailWrapper>
);