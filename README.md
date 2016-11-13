# react-foundation-components
A collection of Foundation components for react

# Components
## List
-	Button
- Column
- Divider
- Expand
- Icon
- Menu
- MenuItem
- MenuText
- NumberField
- Row
- TextArea
- TextField
- Title

## Features

|Component        |Core                                                |Style                      |Input & Events                                                                    |Other|
|-----------------|----------------------------------------------------|---------------------------|----------------------------------------------------------------------------------|---|
|___Button___     |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |[MouseEvents](#MouseEvents), [Link](#Link), [Disabled](#Disabled)                 |[Float](#Float)|
|___Column___     |[ClassNames](#ClassNames), [Visibility](#Visibility)|[ColumnStyle](#ColumnStyle)|                                                                                  |   |
|___Divider___    |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |                                                                                  |   |
|___Expand___     |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |                                                                                  |   |
|___Icon___       |[ClassNames](#ClassNames), [Visibility](#Visibility)|[IconStyle](#IconStyle)    |                                                                                  |   |
|___Menu___       |[ClassNames](#ClassNames), [Visibility](#Visibility)|[MenuStyle](#MenuStyle)    |                                                                                  |[ContentExpand](#ContentExpand), [Alignment](#Alignment), [Orientation](#Orientation)|
|___MenuItem___   |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |[MouseEvents](#MouseEvents), [Link](#Link)                                        |[Active](#Active)|
|___MenuText___   |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |                                                                                  |   |
|___NumberField___|[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |[DataEvents](#DataEvents), [Disabled](#Disabled), [InputField](#InputField)=number|   |
|___Row___        |[ClassNames](#ClassNames), [Visibility](#Visibility)|[RowStyle](#RowStyle)      |                                                                                  |[ContentExpand](#ContentExpand), [Gutters](#Gutters)|
|___TextArea___   |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |[DataEvents](#DataEvents), [Disabled](#Disabled), [InputField](#InputField)=string|   |
|___TextField___  |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |[DataEvents](#DataEvents), [Disabled](#Disabled), [InputField](#InputField)=string|   |
|___Title___      |[ClassNames](#ClassNames), [Visibility](#Visibility)|                           |                                                                                  |   |

# Types & Enums
## <div id="AlignmentEnum">Alignment Enum</div>
* __Left__
* __Right__
* __Center__
* __None__

## <div id="SizeEnum">Size Enum</div>
* __Small__
* __Medium__
* __Large__
* __XLarge__
* __XXLarge__

## <div id="ColumnType">Column Integer Type</div>
number of columns to span

Acceptable Values: __1..12__

# Feature Description and Props

## <div id="ClassNames">ClassNames</div>
### props
|prop|type|
|---|---|
|className| string |
|innerClassName| string |

## <div id="Visibility">Visibility</div>
### props
|prop|type|
|---|---|
|show|bool|

## <div id="Float">Float</div>
### props
|prop|type|
|---|---|
|float|[ALIGNMENT](#AlignmentEnum)|

## <div id="Disabled">Disabled</div>
### props
|prop|type|default|
|---|---|---|
|disabled|bool|false|

## <div id="MouseEvents">MouseEvents</div>
### props
|prop|type|
|---|---|
|onClick|function|

## <div id="DataEvents">DataEvents</div>
### props
|prop|type|
|---|---|
|onChange|function|

## <div id="InputField">InputField</div>
### props
|prop|type|default|
|---|---|---|
|value|string ___or___ number| |
|label|string|null|
|isInline|bool| |

## <div id="Alignment">Alignment</div>
### props
|prop|type|
|---|---|
|alignment|[ALIGNMENT](#AlignmentEnum)|

## <div id="Active">Active</div>
### props
|prop|type|
|---|---|
|isActive|bool|

## <div id="Orientation">Orientation</div>
### props
|prop|type|
|---|---|
|isVertical|bool|
|isHorizontal|bool|
|verticalOn|[SIZE](#SizeEnum) ___or___ [[SIZE](#SizeEnum), ...]|
|horizontalOn|[SIZE](#SizeEnum) ___or___ [[SIZE](#SizeEnum), ...]|

## <div id="ContentExpand">ContentExpand</div>
### props
|prop|type|
|---|---|
|isExpanded|bool|

## <div id="MenuStyle">MenuStyle</div>
### props
|prop|type|
|---|---|
|isSimple|bool|
|isNested|bool|
|iconTop|bool|

## <div id="IconStyle">IconStyle</div>
### props
|prop|type|
|---|---|
|icon|string|

## <div id="RowStyle">RowStyle</div>
### notes
xlargeUp and xxlargeUp only work if specified in foundation settings

see [foundation docs](http://foundation.zurb.com/sites/docs/media-queries.html#changing-the-breakpoints)
~~~
$breakpoint-classes: (small medium large xlarge);
~~~

### props
|prop|type|
|---|---|
|smallUp|[COLUMN](#ColumnType)|
|mediumUp|[COLUMN](#ColumnType)|
|largeUp|[COLUMN](#ColumnType)|
|xlargeUp|[COLUMN](#ColumnType)|
|xxlargeUp|[COLUMN](#ColumnType)|
|isColumn|bool|

##  <div id="Gutters">Gutters</div>
### props
|prop|type|
|---|---|
|isCollapsed|bool|
|collapseOn|[SIZE](#SizeEnum) ___or___ [[SIZE](#SizeEnum), ...]|
|uncollapseOn|[SIZE](#SizeEnum) ___or___ [[SIZE](#SizeEnum), ...]|

## <div id="ColumnStyle">ColumnStyle</div>
### notes
xlargeUp and xxlargeUp only work if specified in foundation settings

see [foundation docs](http://foundation.zurb.com/sites/docs/media-queries.html#changing-the-breakpoints)
~~~
$breakpoint-classes: (small medium large xlarge);
~~~

### props
|prop|type|
|---|---|
|small|[COLUMN](#ColumnType)|
|medium|[COLUMN](#ColumnType)|
|large|[COLUMN](#ColumnType)|
|xlarge|[COLUMN](#ColumnType)|
|xxlarge|[COLUMN](#ColumnType)|
|centerOn|[SIZE](#SizeEnum) ___or___ [[SIZE](#SizeEnum), ...]|
|uncenterOn|[SIZE](#SizeEnum) ___or___ [[SIZE](#SizeEnum), ...]|
|offsetOn|[[SIZE](#SizeEnum), [COLUMN](#ColumnType)] ___or___ [[[SIZE](#SizeEnum), [COLUMN](#ColumnType)], ...]|
|pushOn|[[SIZE](#SizeEnum), [COLUMN](#ColumnType)] ___or___ [[[SIZE](#SizeEnum), [COLUMN](#ColumnType)], ...]|
|pullOn|[[SIZE](#SizeEnum), [COLUMN](#ColumnType)] ___or___ [[[SIZE](#SizeEnum), [COLUMN](#ColumnType)], ...]|
|isEnd|bool|

## <div id="Link">Link</div>
### notes
requires the use of react-router

### props
|props|type|
|---|---|
|link|string|

### context
|context|type|
|---|---|
|router|react-router object|

# Attributions
Inspired by [react-foundation](https://github.com/nordsoftware/react-foundation) and [react-slingshot](https://github.com/coryhouse/react-slingshot)