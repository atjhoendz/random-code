const semver = require('semver')

const cockroachDBVersion = 'CockroachDB CCL v20.2.18 (x86_64-unknown-linux-gnu, built 2021/11/08 15:28:13, go1.13.14)'

const result = semver.gte(semver.coerce(cockroachDBVersion), "21.1.0")

console.log(result)

const checkVersion = (versionResult) => {
  if (!result) {
    console.log('return')
    return
  }

  console.log('halo buddy')
}

checkVersion(result)
