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

export const ExpandContent = new FeatureSet({
    [Features.Visibility]: true
});

export const ExpandTitle = new FeatureSet({
    [Features.MouseEvents]: true
});

export const Expand = new FeatureSet({
    [Features.ClassNames]: true
});

export const Menu = new FeatureSet({
    [Features.Visibility]: true,
    [Features.Alignment]: true,
    [Features.Orientaiton]: true,
    [Features.ContentExpand]: true,
    [Features.MenuStyle]: true
});

export const MenuItem = new FeatureSet({
    [Features.Visibility]: true,
    [Features.Active]: true
});

export const MenuText = new FeatureSet({
    [Features.Visibility]: true
});

export const Icon = new FeatureSet({
    [Features.Visibility]: true,
    [Features.Icon]: true
});

export const Row = new FeatureSet({
    [Features.Visibility]: true,
    [Features.ContentExpand]: true,
    [Features.RowStyle]: true,
    [Features.Gutters]: true
});

export const Column = new FeatureSet({
    [Features.Visibility]: true,
    [Features.ColumnStyle]: true
});