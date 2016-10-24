# Hasaki

文件生成器

# 使用

### 安装

### 初始化

进入项目目录

`hasaki init`

如果你想使用默认配置，可以使用

`hasaki init -y`

### 生成页面

使用 `RULE1`, `RULE2` 两条规则分别生成名为 `PAGE_NAME` 的文件

`hasaki create PAGE_NAME RULE1,RULE2`

# 规则

项目初始化后会在根目录生成配置文件 `.hasakirc`，默认如下

```json
{
  "name": "hasaki",
  "templateRootPath": "./_template",
  "placeholder": "",
  "rules": [
    {
      "containerRule": {
        "extension": "js",
        "suffix": "",
        "prefix": "_",
        "path": "./container/",
        "template": "container.js"
      }
    },
    {
      "actionRule": {
        "extension": "js",
        "suffix": "",
        "path": "./actions/",
        "template": "action.js"
      }
    },
    {
      "sagaRule": {
        "extension": "js",
        "suffix": "saga",
        "path": "./saga/",
        "content": "haha"
      }
    },
    {
      "rule3": [
        "actionRule",
        "sagaRule",
        "containerRule"
      ]
    }
  ]
}
```

- `name`
    - 项目名
- `templateRootPath`
    - 模板文件路径
- `placeholder`
    - 组件/模块占位符
- `rules`
    - `extension`
        - 生成文件的扩展名
    - `suffix`
        - 生成文件的前缀
    - `prefix`
        - 生成文件的后缀
    - `path`
        - 文件生成路径
    - `template`
        - 文件生成依据的模板
    - `content`
        - 生成文件的内容

此外单条规则也可以是数组，如 `rule3`。当为数组时，会依据数组每个元素对应的规则生成相应的文件。
