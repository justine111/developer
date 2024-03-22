import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        const {name, email, subject, message} = data;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);
     }

  return (
    <section className="bg-primary px-5 py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">GET IN TOUCH</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Do you have any ideas or just want to say hello? Go ahead</p>

            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row formRow">
                    <div className="col-6">
                        <label for="email" class="block mb-2 text-medium text-left font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="name" 
                            { 
                                ...register('name', {
                                    required: {value: true, message: 'Please enter your name'},
                                    maxLength: {
                                        value: 30,
                                        message: 'Please use 30 characters or less'
                                    }
                                })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="lorem ipsum">
                        </input>
                        {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                    </div>

                    <div className='col-6'>
                        <label for="email" class="block mb-2 text-medium text-left font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type='email' name='email'
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                            placeholder='sample@gmail.com'>                            
                        </input>
                        {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
                  </div>
                </div>

                <div className='row formRow'>
                    <div className='col'>
                        <label for="email" class="block mb-2 text-medium text-left font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type='text' name='subject'
                            {...register('subject', {
                                required: { value: true, message: 'Please enter a subject' },
                                maxLength: {
                                    value: 75,
                                    message: 'Subject cannot exceed 75 characters'
                                }
                            })}
                            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                            placeholder=''>                     
                        </input>
                        {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
                    </div>
                </div>

                <div className='row formRow'>
                    <div className='col'>
                        <label for="message" class="block mb-2 text-medium text-left font-medium text-gray-900 dark:text-gray-300">Your message</label>
                        <textarea rows={6} name='message'
                            {...register('message', {
                                required: true
                            })}
                            className="block p-2.5 w-full text-sm mb-4 text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder='Leave a message...'>
                        </textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                </div>

                <button type="submit" class="py-3 px-5 text-medium text-left font-large text-center text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg mb-6">Send message</button>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">PLEASE DONT ENTER ANY SENSITIVE DATA!</p>
            </form>


            <p className="py-2">
                <span className="font-bold">Email:</span> justineprensica@gmail.com
            </p>
            <p className="py-2">
                <span className="font-bold">Phone:</span> +639184830422
            </p>
      </div>
    </section>
  );
};

export default Contact;