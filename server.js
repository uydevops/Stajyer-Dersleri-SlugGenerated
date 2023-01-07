const slugify=require('slugify');


function SlugGenerated(text)
{
    if(text!==null)
    {
       const print = slugify(text);
       console.log('Oluşturulan Slug: ',print);
    }
    else
    {
        console.log('Boş Girilemez');
    }

}

SlugGenerated('Ugurcan Yas');
