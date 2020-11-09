import {visualSnapshots} from 'sosia';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../../../doc-site/src/components/Placeholder';
import {EzLayout} from '../../index';

const scope = {EzCarousel, Placeholder, EzLayout};

describe('EzCarousel', () => {
  visualSnapshots({markdown, scope});
});