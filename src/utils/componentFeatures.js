import { FeatureSet, Features } from './FeatureSet';

export const Button = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.Float]: true,
    [Features.Disabled]: true,
    [Features.MouseEvents]: true
});

export const Title = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true
});