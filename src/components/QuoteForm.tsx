import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { serviceOptions, whatsappUrl } from '../data/site';
import styles from './QuoteForm.module.css';

type FieldKey = 'service' | 'region' | 'name';
type FormValues = Record<FieldKey, string>;
type FormErrors = Partial<Record<FieldKey, string>>;

const fieldLabels: Record<FieldKey, string> = {
	service: 'Serviço',
	region: 'Bairro ou região',
	name: 'Seu nome',
};

function Icon({ name, size = 18 }: { name: string; size?: number }) {
	const common = {
		width: size,
		height: size,
		viewBox: '0 0 24 24',
		'aria-hidden': true,
		focusable: false,
	} as const;

	if (name === 'whatsapp') {
		return (
			<svg {...common} fill="currentColor" stroke="none">
				<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c.01-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.41z" />
			</svg>
		);
	}

	return (
		<svg
			{...common}
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{name === 'snowflake' && (
				<>
					<path d="M2 12h20" />
					<path d="M12 2v20" />
					<path d="m20 16-4-4 4-4" />
					<path d="m4 8 4 4-4 4" />
					<path d="m16 4-4 4-4-4" />
					<path d="m8 20 4-4 4 4" />
				</>
			)}
			{name === 'map' && (
				<>
					<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
					<circle cx="12" cy="10" r="3" />
				</>
			)}
			{name === 'user' && (
				<>
					<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</>
			)}
			{name === 'chevron' && <path d="m6 9 6 6 6-6" />}
			{name === 'check' && <path d="M20 6 9 17l-5-5" />}
			{name === 'alert' && (
				<>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 8v4" />
					<path d="M12 16h.01" />
				</>
			)}
		</svg>
	);
}

export default function QuoteForm() {
	const [values, setValues] = useState<FormValues>({
		service: '',
		region: '',
		name: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [submitted, setSubmitted] = useState(false);
	const [status, setStatus] = useState<'idle' | 'opening' | 'success'>('idle');
	const [href, setHref] = useState('');
	const summaryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (submitted && Object.keys(errors).length > 0) {
			summaryRef.current?.focus();
		}
	}, [submitted, errors]);

	const updateField =
		(field: FieldKey) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const value = event.target.value;
			setValues((current) => ({ ...current, [field]: value }));
			setErrors((current) => {
				if (!current[field]) return current;
				const next = { ...current };
				delete next[field];
				return next;
			});
		};

	const validate = (current: FormValues): FormErrors => {
		const next: FormErrors = {};

		if (!current.service) {
			next.service = 'Selecione o serviço desejado.';
		}
		if (current.region.trim().length < 2) {
			next.region = 'Informe seu bairro ou região.';
		}
		if (current.name.trim().length < 2) {
			next.name = 'Informe seu nome.';
		}

		return next;
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitted(true);
		setStatus('idle');

		const nextErrors = validate(values);
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			setHref('');
			return;
		}

		setErrors({});
		const message = [
			'Olá! Vim pelo site da Arketipo.',
			`Serviço: ${values.service}`,
			`Região: ${values.region.trim()}`,
			`Nome: ${values.name.trim()}`,
			'Gostaria de receber um orçamento.',
		].join('\n');

		const url = whatsappUrl(message);
		setHref(url);
		setStatus('opening');
		window.open(url, '_blank', 'noopener,noreferrer');
		window.setTimeout(() => setStatus('success'), 550);
	};

	const resetForm = () => {
		setValues({ service: '', region: '', name: '' });
		setErrors({});
		setSubmitted(false);
		setStatus('idle');
		setHref('');
	};

	if (status === 'success') {
		return (
			<div className={styles.card} id="orcamento">
				<div className={styles.success}>
					<span className={styles.successIcon}>
						<Icon name="check" size={24} />
					</span>
					<div>
						<p className={styles.successTitle}>Orçamento pronto para enviar</p>
						<p className={styles.successText}>
							Abrimos o WhatsApp em outra aba com sua mensagem preenchida. Se não abriu,
							use o link abaixo.
						</p>
						<div className={styles.successActions}>
							<a
								className={styles.successLink}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								Abrir o WhatsApp manualmente
							</a>
							<button type="button" className={styles.successReset} onClick={resetForm}>
								Enviar outro pedido
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const hasErrors = Object.keys(errors).length > 0;

	return (
		<div className={styles.card} id="orcamento">
			<div className={styles.head}>
				<div>
					<h2 className={styles.title}>Peça seu orçamento grátis</h2>
					<p className={styles.subtitle}>Resposta em até 2h úteis. Sem compromisso.</p>
				</div>
				<span className={styles.pill}>
					<Icon name="snowflake" size={13} />
					Rápido e fácil
				</span>
			</div>

			<form className={styles.form} onSubmit={onSubmit} noValidate>
				<div className={styles.field}>
					<label className={styles.label} htmlFor="quote-service">
						O que você precisa?
					</label>
					<div className={styles.control}>
						<span className={styles.controlIcon}>
							<Icon name="snowflake" size={17} />
						</span>
						<select
							id="quote-service"
							name="service"
							className={styles.select}
							value={values.service}
							onChange={updateField('service')}
							aria-invalid={Boolean(errors.service)}
							aria-describedby={errors.service ? 'quote-service-error' : undefined}
						>
							<option value="" disabled>
								Selecione
							</option>
							{serviceOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						<span className={styles.selectChevron}>
							<Icon name="chevron" size={16} />
						</span>
					</div>
					{errors.service && (
						<p className={styles.error} id="quote-service-error" role="alert">
							{errors.service}
						</p>
					)}
				</div>

				<div className={styles.field}>
					<label className={styles.label} htmlFor="quote-region">
						Bairro ou região
					</label>
					<div className={styles.control}>
						<span className={styles.controlIcon}>
							<Icon name="map" size={17} />
						</span>
						<input
							id="quote-region"
							name="region"
							type="text"
							className={styles.input}
							placeholder="Ex.: Vila Mariana"
							autoComplete="address-level3"
							value={values.region}
							onChange={updateField('region')}
							aria-invalid={Boolean(errors.region)}
							aria-describedby={errors.region ? 'quote-region-error' : undefined}
						/>
					</div>
					{errors.region && (
						<p className={styles.error} id="quote-region-error" role="alert">
							{errors.region}
						</p>
					)}
				</div>

				<div className={styles.field}>
					<label className={styles.label} htmlFor="quote-name">
						Seu nome
					</label>
					<div className={styles.control}>
						<span className={styles.controlIcon}>
							<Icon name="user" size={17} />
						</span>
						<input
							id="quote-name"
							name="name"
							type="text"
							className={styles.input}
							placeholder="Como podemos chamar você?"
							autoComplete="name"
							value={values.name}
							onChange={updateField('name')}
							aria-invalid={Boolean(errors.name)}
							aria-describedby={errors.name ? 'quote-name-error' : undefined}
						/>
					</div>
					{errors.name && (
						<p className={styles.error} id="quote-name-error" role="alert">
							{errors.name}
						</p>
					)}
				</div>

				<button
					type="submit"
					className={`btn btn--primary ${styles.submit}`}
					disabled={status === 'opening'}
				>
					{status === 'opening' ? (
						<>
							<span className={styles.spinner} aria-hidden="true" />
							Abrindo WhatsApp
						</>
					) : (
						<>
							<Icon name="whatsapp" size={18} />
							Pedir orçamento
						</>
					)}
				</button>

				{hasErrors && (
					<div
						ref={summaryRef}
						className={styles.errorsSummary}
						role="alert"
						tabIndex={-1}
					>
						<p>Confira os campos abaixo:</p>
						<ul>
							{(Object.entries(errors) as [FieldKey, string][]).map(([field, message]) => (
								<li key={field}>
									<a
										href={`#quote-${field}`}
										onClick={(event) => {
											event.preventDefault();
											document.getElementById(`quote-${field}`)?.focus();
										}}
									>
										{fieldLabels[field]}: {message}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</form>

			<p className={styles.note}>
				<Icon name="check" size={14} />
				Ao enviar, você será direcionado ao WhatsApp com a mensagem pronta.
			</p>
			<p className="sr-only" aria-live="polite">
				{status === 'opening' ? 'Abrindo o WhatsApp com sua mensagem.' : ''}
			</p>
		</div>
	);
}
