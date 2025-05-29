import emailjs from '@emailjs/browser';
import Page from "@components/ui/Page/Page"
import Button from '@components/ui/Button/Button';

export default function Contact () {
    


    function sendEmailResponse (e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const templateParams = {
            name: 'Vagelis',
            message: 'Check this out!',
        };
    
        emailjs
        .send(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.TEMPLATE_ID, templateParams, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          },
        );
    }

    return <Page>
        <h2 className="important-heading">Contact</h2>

        <form onSubmit={sendEmailResponse} className='w-full max-w-[400px]'>
            <div className='bg-accent/40 flex flex-col'>
                <input type='email' placeholder='Email'/>
                <input type='text' placeholder='Message' />
            </div>

            <Button>Send</Button>
        </form>
    </Page>
}