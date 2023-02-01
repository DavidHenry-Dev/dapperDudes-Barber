import { SignUpForm, Hero } from "../components";


const SignUpPage = () => (
    <Hero>
        <div className='form-container'>
        <h2>Schedule, check, and get notified of upcoming appointments.</h2>
        <SignUpForm />
        </div>
    </Hero>
)

export default SignUpPage