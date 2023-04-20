import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { StyledButton } from 'assets/styles/pages/homepage.styles';
import { ContactFormWrapper } from './ContactForm.styles';

export const ContactForm = () => {
    const [state, handleSubmit] = useForm('mdovyeya');

    return (
        <ContactFormWrapper onSubmit={handleSubmit}>
        {/*<ContactFormWrapper>*/}
            <label htmlFor="email">Geben Sie Ihre E-Mail Adresse ein</label>
            <input type="email" name="email" id="email" placeholder="E-Mail..." />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">Schreiben Sie Ihre Nachricht</label>
            <textarea name="message" id="message" placeholder="Ihre Nachricht..." />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            {state.errors.length ? state.errors.map((e) => (
                <p key={e.message}>{(e.code === 'EMPTY') && 'Füllen Sie die Felder aus, bevor Sie die Nachricht senden'}</p>
            )) : null}
            {state.succeeded
                ? <p>Danke für Ihre Nachricht!</p>
                : null}
            {/*<StyledButton type="submit" >Absenden</StyledButton>*/}
            <StyledButton type="submit" disabled={state.submitting}>Absenden</StyledButton>
        </ContactFormWrapper>
    );
};
