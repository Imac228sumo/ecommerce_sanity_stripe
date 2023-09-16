import {createClient}  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import {} from 'next-sanity'
export const config = {
    projectId: '25b60z39',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
}

export const client = createClient(config);

export const urlFor = (source) => imageUrlBuilder(client).image(source);

//const builder = createImageUrlBuilder(client);

//export const urlFor = (source) => builder.image(source);