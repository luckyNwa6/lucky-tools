if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly请用pnpm install.\u001b[39m\n`,
  )
  process.exit(1)
}
