# MySequelize

## Parameters

### Target Options

* `-d`, `--database`, `--db`: database to export (string, this is the only mandatory parameter)
* `--dir`, `--directory`, `-f`: target directory (string, defaults to `./database/model`)
* `-t`, `--table`: table to export (string, defaults to all tables)

### Models Options

* `-e`, `--eol`, `--end_of_line`: end of line character (string, defaults to `\n`)
* `-i`, `--indent`, `--indentation`: indentation character (string, defaults to `\t`)
* `-l`, `--lang`, `--language`: language (string, defaults to `javascript`)
* `--strict`: enables strict mode for javascript (boolean, defaults to `true`)

#### Naming Options

* `--naming.file`: naming convention for file names (string, defaults to `snake`)
* `--naming.field`: naming convention for field names (string, defaults to `snake`)
* `--naming.model`: naming convention for model names (string, defaults to `snake`)

### Server Options

* `-h`, `--host`, `--server-host`: server host name (string, defaults to `localhost`)
* `--password`, `--server.password`, `-x`: server password (string, defaults to an empty string)
* `-p`, `--port`, `--server.port`: server port (integer, defaults to `3306`)
* `--server.user`, `-u`, `--user`: server user (string, defaults to `root`)

### Process Options

* `-s`, `--silent`: disables non-error command line output (boolean, defaults to `false`)
