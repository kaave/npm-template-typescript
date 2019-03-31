type Phantom<T, U extends string> = T & { [key in U]: never };

type MailAddress = Phantom<string, 'MailAddress'>;

const getMailAddress = (address: string): MailAddress => {
  if (!/\W@\W\.\W/.test(address)) {
    throw new Error(`Invalid MailAddress: ${address}`);
  }

  return address as MailAddress;
};

const mailAddressLogger = (address: MailAddress) => console.log(address);

const address = getMailAddress('mail@add.ress');
mailAddressLogger(address);
mailAddressLogger('');
