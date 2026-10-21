import { useEffect, useRef, useState } from 'react';
import { defaultWhatsappUrl, nav, site } from '../data/site';

export default function MobileNav() {
	const [open, setOpen] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const focusableElements = () =>
			Array.from(
				panelRef.current?.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
				) ?? [],
			);

		const frame = window.requestAnimationFrame(() => {
			focusableElements()[0]?.focus();
		});

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				setOpen(false);
				triggerRef.current?.focus();
				return;
			}

			if (event.key !== 'Tab') return;

			const items = focusableElements();
			if (items.length === 0) return;

			const first = items[0];
			const last = items[items.length - 1];
			const active = document.activeElement;

			if (event.shiftKey && active === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && active === last) {
				event.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);

		return () => {
			window.cancelAnimationFrame(frame);
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);

	const closeMenu = () => {
		setOpen(false);
		triggerRef.current?.focus();
	};

	return (
		<>
			<button
				ref={triggerRef}
				type="button"
				className="mobile-trigger"
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? 'Fechar menu' : 'Abrir menu'}
				onClick={() => setOpen((value) => !value)}
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					{open ? (
						<>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</>
					) : (
						<>
							<path d="M4 6h16" />
							<path d="M4 12h16" />
							<path d="M4 18h16" />
						</>
					)}
				</svg>
			</button>

			{open && (
				<>
					<button
						type="button"
						className="mobile-overlay"
						aria-label="Fechar menu"
						onClick={closeMenu}
						tabIndex={-1}
					/>
					<div
						ref={panelRef}
						id="mobile-menu"
						className="mobile-panel"
						role="dialog"
						aria-modal="true"
						aria-label="Menu principal"
					>
						<div className="mobile-panel__head">
							<div>
								<p className="mobile-panel__eyebrow">Navegação</p>
								<p className="mobile-panel__brand">
									{site.brand}
									<span>{site.brandSuffix}</span>
								</p>
							</div>
							<button
								type="button"
								className="mobile-panel__close"
								aria-label="Fechar menu"
								onClick={closeMenu}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							</button>
						</div>

						<nav aria-label="Navegação mobile">
							<ul className="mobile-panel__nav">
								{nav.map((item) => (
									<li key={item.href}>
										<a href={item.href} onClick={() => setOpen(false)}>
											{item.label}
											<svg
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
												aria-hidden="true"
											>
												<path d="M5 12h14" />
												<path d="m12 5 7 7-7 7" />
											</svg>
										</a>
									</li>
								))}
							</ul>
						</nav>

						<div className="mobile-panel__contact">
							<a className="mobile-panel__phone" href={site.phoneHref}>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								{site.phoneDisplay}
							</a>
							<p className="mobile-panel__meta">
								{site.hours}
								<br />
								{site.serviceArea}
							</p>
							<a
								className="btn btn--primary btn--block"
								href={defaultWhatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								Pedir orçamento no WhatsApp
							</a>
						</div>
					</div>
				</>
			)}
		</>
	);
}
