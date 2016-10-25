# Hasaki [![node version](https://img.shields.io/badge/node%20-%3E%3D5.8.0-brightgreen.svg)](https://github.com/ElemeFE/hasaki)

A simple file generator for all exist projects.

## Installation

Prerequisites: Node.js ( >= 5.8.0 preferred ). 4.x should also work, but we haven't test it yet.

```bash
$ npm install -g hasaki
```

### Usage

In your project root directory

```bash
$ hasaki init
```

If you want to use default configuration, you can use 

```bash
$ hasaki init -y
```

to generate a default `.hasakirc` file.

see more information by use

```bash
$ hasaki -h
```

#### Create files

After get your `.hasakirc` file, simply run 

```bash
$ hasaki create <page-name> <rule-name><,rule-name2>...
```

it will automatically create some `<page-name>` files according to your `<rule-name>` configuration. You can apply
multi `<rule-name>` by set them one by one or create a new rule and put all the target rule into an array, we call
this new rule a *rule group*.

## .hasakirc

`.hasakirc` is `hasaki` config file, it will automatically generate when you use `hasaki init` . But you can also
write or modify the whole file manually. Make sure the content type should be json.

### configuration fields

- `name` Project name, default value `a hasaki project`.

- `templateRootPath` A path value. It's useful when you use `template` field in `rules`, default value `./_template`.

- `placeholder` You can set this value to add a placeholder in your template file. hasaki will look for your template
file and replace all the `placeholder` to the `<page-name>` which you've set in `hasaki create <page-name> <rule-name>`. The default 
value is `__name`。 In some case, you can set it to `__Name` or `__NAME`。 When placeholder's first letter is uppercase
the `<page-name>`'s first letter will set to uppercase. So it's easy to see `__NAME` will make the whole `<page-name>` become uppercase.

- `rules` type Array
  - `ruleName` type Object, A name for your current rule.
    - `extension` the extension for the target file.
    
    - `suffix` the suffix for the target file.
   
    - `prefix` the prefix for the target file.
        
    - `path` the path where the target file will be.
        
    - `template` the path for your template file. If it's value is not `""`, `content` field will be ignore. 
        
    - `content` default content for target file contain. 

  - `ruleGroup` type Array. You can put your single rule into an array, and named it a new rule. This is very useful
when you want to generate multi files.

## Default .hasakirc

Our default `.hasakirc` looks like

```json
{
  "name": "a hasaki project",
  "templateRootPath": "./_template",
  "placeholder": "__name",
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

## Contribution

请在提交 PR 前阅读我们的[贡献指南](./.github/CONTRIBUTING_zh-cn.md)

## License

MIT
