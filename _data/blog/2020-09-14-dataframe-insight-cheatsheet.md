---
template: BlogPost
path: /dataframe-cheatsheet
date: 2020-09-14T05:27:23.228Z
title: DataFrame Insight Cheatsheet
metaDescription: 'python dataframe, dataframe cheatsheet, pandas dataframe'
---
# My DataFrame Cheatsheet
I love working with DataFrames -very readable data tables that we are blessed with Pandas to help us break down complex and annoying data from a variety of formats. That said, filtering and summing down is a vital step for any data analysis (and so you will actually have time to watch Netflix) so here is some quick things to consider:

| Method | Intent
| --- | --- |
| `df.dtypes` | Examine data types |
| `df.info()` | Get summary of DataFrame |
| `df.describe()` | List stat properties for each column: count, mean, std, min, percentiles, maz |
| `df[['attr1', 'attr1']]` | Take subset of DataFrame |
| `df.rename(<dict of cols to replace>)` | Rename column names of DataFrame |
| `df.values.tolist()` | DataFrame to list of lists |
| `df1.join(df2, how=<'inner' if intersection>)` | Join two DataFrames |

