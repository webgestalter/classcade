<p align="center">
  <img src="/logo/1.svg" alt="classcade" />
</p><p align="center">
  Instead of writing the same CSS code over and over again<br/>
  just apply it directly to your website elements by predefined and reusable classes.  
</p><p align="center">
  <a href="https://webgestalter.github.io/classcade/classcade.js">classcade.js</a>
  | <a href="https://webgestalter.github.io/classcade/classcade.min.js">classcade.min.js</a>
</p>

# Get Started

Just include `classcade.min.js` before the closing `</body>` tag.

```
<script src='classcade.min.js'></script>
```

Or you could even direct link which would always supply the uptodate version

```
<script src='https://webgestalter.github.io/classcade/classcade.min.js'></script>
```

# Usage

### Set Background-Color

By default the cookie lifetime is set to 1000 days. So you only need to set 1st and 2nd parameter.
```
  <div class='bg-0'></div>
  <div class='bg-000'></div>
  <div class='bg-000000'></div>
```

You also could set background color with transparence:
```
  <div class='bg-000a'></div>
  <div class='bg-000000aa'></div>
```

## Alias Classes
There are several so called "alias classes":
```
  <div class='flex'></div>
```

## More Complex Examples
Here are some more complex examples:

# Parameters

#### Properties

   classname | CSS equivalent      | info
------------ | -------------       | -------------
bg-0         | background:#000000; |
bg-000       | background:#000000; |
bg-000000    | background:#000000; |

#### Seperators

The Values

   seperator | target
------------ | -------------
\-           | declaration gets applied to current element
\-\-         | declares custom property as value
\_           | declaration gets applied to the childs of current element
\_\_         | declares custom property as value to the childs of current element

#### Values
The values are different matters from the given property or class prefix.

   classname | CSS equivalent      | info
------------ | -------------       | -------------
bg-0         | background:#000000; |
bg-000       | background:#000000; |
bg-000000    | background:#000000; |

## Alias Classes
There are several so called "alias classes":

   classname | CSS equivalent              | info
------------ | -------------               | -------------
abs          | position: absolute;         |
absolute     | position: absolute;         |
bold         | font-weight: bold;          |
flex         | display: flex;              |
fix          | position: fixed;            |
fixed        | position: fixed;            |
grid         | display: grid;              |
italic       | font-style: italic;         |
low          | text-transform: lowercase;  |
lowercase    | text-transform: lowercase;  |
nowrap       | flex-wrap: nowrap;          |
rel          | position: relative;         |
relative     | position: relative;         |
sticky       | position: sticky;           |
wrap         | flex-wrap: wrap;            |
underline    | text-decoration: underline; |
up           | text-transform: uppercase;  |
uppercase    | text-transform: uppercase;  |
