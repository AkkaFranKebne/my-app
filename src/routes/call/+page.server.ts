import { addressData } from './staticAddressData';

export function load() {
	return {
		summaries: addressData.map((address) => ({
			content: address.content,
			title: address.title
		}))
	};
}
