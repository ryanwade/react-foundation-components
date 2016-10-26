import { PropTypes } from 'react';
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

export const Divider = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true
});

export const NumberField = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.Disabled]: true,
    [Features.DataEvents]: true,
    [Features.InputField]: PropTypes.number.isRequired
});

export const TextField = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.Disabled]: true,
    [Features.DataEvents]: true,
    [Features.InputField]: PropTypes.string.isRequired
});

export const TextArea = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.Disabled]: true,
    [Features.DataEvents]: true,
    [Features.InputField]: PropTypes.string.isRequired
});