import './style.css'

export default function layout({ children })
{

  return (
    <html>
      <head>
        <title>Im gonna kill you ;)</title>
        <link rel='icon' type='image/png' href='/heart.png' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Jua' />
      </head>
      <body id='app'>
        {children}
      </body>
    </html>
  )

}