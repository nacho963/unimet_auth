import { UnorderedMap } from 'near-sdk-js';
import Certified from './models/Certified';


export const certifies = new UnorderedMap<Certified>("certifies");