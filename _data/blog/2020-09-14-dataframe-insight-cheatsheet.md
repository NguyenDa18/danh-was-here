---
template: BlogPost
path: /dataframe-cheatsheet
date: 2020-09-26T05:27:23.228Z
title: DataFrame Insight Cheatsheet
metaDescription: 'python dataframe, dataframe cheatsheet, pandas dataframe'
tags: ["Python", "Quick Notes"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1601196152/blog/shelf-df_chiphc.jpg
---
# My DataFrame Cheatsheet
* Core image from [Phantasio Games](http://www.phantasiogames.net/2019/11/shelves-are-small.html)

I love working with DataFrames -very readable data tables that we are blessed with Pandas to help us break down complex and annoying data from a variety of formats. That said, filtering and summing down is a vital step for any data analysis (and so you will actually have time to watch Netflix) so here is some quick things to consider:

| Method | Intent
| --- | --- |
| `df.dtypes` | Examine data types |
| `df.info()` | Get summary of DataFrame |
| `df.describe()` | List stat properties for each column: count, mean, std, min, percentiles, max |
| `df.query('col1 > 0 & col1 < 5 | col2 > 0')` | Convenient alternative to slicing connectors: `df[df['col1'] > 0 ...rest]` : use [numexpr](https://numexpr.readthedocs.io/en/latest/user_guide.html) syntax instead of python syntax |
| `df.assign(new_col = lambda x : func(col1))` | Creates a new column by evaluating function (using lambda here) on every row of df |
| `df[['attr1', 'attr1']]` | Take subset of DataFrame |
| `df.rename(<dict of cols to replace>)` | Rename column names of DataFrame |
| `df.values.tolist()` | DataFrame to list of lists |
| `df1.join(df2, how=<'inner' if intersection>)` | Join two DataFrames |
| `df['col'].diff()` | Computer percent changes of time series col |
| `df.corr(method='pearson')` | Review all pairwise correlations of df cols |
| `df[col1].corr(df[col2])` | Pandas correlation method of Series |
| `df.skew()` | Review Gaussian distribution |
| `df.hist()` | View histograms for faster observations |
| `df[<col name>].value_counts()` | Get unique value counts for column |
| `df.drop(columns=<list of cols>, inplace=True/False)` | Delete unnecessary columns |
| `df[<col name>].value_counts(normalize=True)` | Express value counts as proportions of the total |
| `df[df['<col name>'].str.contains('<substring>')]` | Get all rows that contain specific word |
| `df.groupby(['<col1>', '<col2>']).mean()` | Get means by column |
| `sub_df = df[df['col_name'] == '<some value>']` | Create subset DataFrame based on some value |
| `df.sort_values(by='<col_name>', ascending=False)` | Sort by descending |
| `df['change_to_bool'] = df.change_to_bool.astype(bool)` | Change data type to bool |
| `df.isnull().sum()` | Count number of missing values in each column |
| `df.dropna(subset=['specific_col'], inplace=True)` | Drop all rows that are missing specific attribute |
| `df.set_index('col_name', inplace=True)` | Set column as index |
| `df.sample(frac=1.0, replace=True, random_state=42)` | Sample with replacement from a DataFrame |

