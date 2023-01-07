import { useCallback, useState } from 'react';

interface IUseDisclosureReturn {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
}

export const useDisclosure = (initial = false): IUseDisclosureReturn => {
	const [isOpen, setIsOpen] = useState(initial);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen((state) => !state), []);

	return { isOpen, open, close, toggle };
};
