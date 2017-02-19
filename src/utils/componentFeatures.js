import { PropTypes } from 'react';
import { FeatureSet, Features } from './FeatureSet';

export const Button = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.MouseEvents]: true,
    [Features.Link]: true,
    [Features.Disabled]: true,
    [Features.Float]: true
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
    [Features.DataEvents]: true,
    [Features.Disabled]: true,
    [Features.InputField]: PropTypes.number.isRequired
});

export const TextField = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.DataEvents]: true,
    [Features.Disabled]: true,
    [Features.InputField]: PropTypes.string.isRequired
});

export const TextArea = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.DataEvents]: true,
    [Features.Disabled]: true,
    [Features.InputField]: PropTypes.string.isRequired
});

export const ExpandContent = new FeatureSet({
    [Features.Visibility]: true
});

export const ExpandTitle = new FeatureSet({
    [Features.MouseEvents]: true
});

export const Expand = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true
});

export const Menu = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.MenuStyle]: true,
    [Features.ContentExpand]: true,
    [Features.Alignment]: true,
    [Features.Orientation]: true
});

export const MenuItem = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.MouseEvents]: true,
    [Features.Link]: true,
    [Features.Active]: true
});

export const MenuText = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true
});

export const Icon = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.IconStyle]: true
});

export const Row = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.RowStyle]: true,
    [Features.ContentExpand]: true,
    [Features.Gutters]: true
});

export const Column = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.ColumnStyle]: true
});

export const Tabs = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.Content] : true,
    [Features.Orientation]: true,
});

export const TabsTitle = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.Label] : true,
    [Features.Active]: true,
});
export const TabsContent = new FeatureSet({
    [Features.ClassNames]: true,
    [Features.Visibility]: true,
    [Features.TabContentStyle]: true,
    [Features.Content] : true,
    [Features.Orientation]: true
});