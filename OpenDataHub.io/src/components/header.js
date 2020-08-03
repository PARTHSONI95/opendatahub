import React from 'react'
import Favicon from './favicons'


/* const pageTitle = () => {
    console.log('In page')
    if(page.title){
        return (
           <title>{ page.title | smartify } · { site.title | smartify }</title> 
        )
    }else{
        return (
            <title>{ site.title | smartify } · { site.description | smartify }</title> 
         )
    }
}
 */

const Header = () => {
return(

<div>
{/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-135170115-1');
</script> */}


<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="description" content="{{ page.description | default: site.description | smartify }}"/>
<meta name="author" content="{{ site.authors }}"/>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135170115-1"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  console.log("Script ran")
  gtag('config', 'UA-135170115-1');
  `}
</script>

<title>
    
</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
<link href="{{ site.baseurl }}/assets/css/main.css" rel="stylesheet" />

<Favicon />

</div>

    )


}

export default Header