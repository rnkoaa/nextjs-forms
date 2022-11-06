'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

interface UserReq {
  email: string
  firstName: string
  lastName: string
}

// const resolver: Resolver<UserReq> = async (values) => {
//   return {
//     values: values.firstName ? values : {},
//     errors: !values.firstName ? {
//       firstName: {
//         type: 'required',
//         message: 'first name is required'
//       }
//     } : {},
//   }
// }

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserReq>()

  const onSubmit: SubmitHandler<UserReq> = (data: UserReq) => {
    console.log(data)
  }

  return (
    <>
      <div> User Registration Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Email...' {...register("email", { required: true})} />
        {errors.email && <p>Email is required</p>}
        <input type="text" placeholder='FirstName...' {...register("firstName", { required: true})} />
        {errors.firstName && <p>First Name is required</p>}
        <input type="text" placeholder='LastName...' {...register("lastName", { required: true})} />
        {errors.lastName && <p>Last name is required</p>}
        <input type="submit" />
      </form>
    </>

  )
}

/*

    {/*
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    */
