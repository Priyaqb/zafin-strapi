export default ({ env }) => ({
  auth: {
    secret: env('91c395be2613d140e126a005a5b591ef749bb6df7e7818dad41faa397bcc41a0'),
  },
  apiToken: {
    salt: env('05189b86472110ef4d75923e1ca4ac112210c92dd4521bd4534c26f994e16e3e'),
  },
  transfer: {
    token: {
      salt: env('ec872af3fe86b7222f0a3d97c067196406dbfec4c00c8673fbd006cf531b9fbb'),
    },
  },
  secrets: {
    encryptionKey: env('167d678326bf936592f542ac9b0f3bb51485f1ff7e3f1d2104133d7b66586846'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
