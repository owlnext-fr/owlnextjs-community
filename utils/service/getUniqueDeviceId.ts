import FingerprintJS from '@fingerprintjs/fingerprintjs';

const getUniqueDeviceId: () => void = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  const { visitorId } = result;
  return visitorId;
};

export default getUniqueDeviceId;
