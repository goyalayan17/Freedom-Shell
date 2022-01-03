import { ConnectedRegistrationForm } from '@freedomv1/registrationv2';

export const DummyContent = (props: {content: string}): JSX.Element =>
    <p>{props.content}</p>;

export const Home =(): JSX.Element=> (
    <ConnectedRegistrationForm />
);