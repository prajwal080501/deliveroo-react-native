import { SanityClient } from "@sanity/client";
import imageURLBuilder from "@sanity/image-url"


const client = sanityClient({
    projectID: 'x5rjc3c9',
    useCdn: true,
    apiVersion: '2021-10-21'

});


const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);
