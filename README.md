# mobile-nav

User friendly mobile navigation for displaying parent pages as a child.

If you use a CMS that generates the navigation for you, and you need the parent page in the child ul, this will **definitely** help.

## usage

The main ul has to have a class of `navigation`.

The top level li's need to have a class of `level-1`.

The above mentioned can be altered in the [nav.js](https://github.com/levidurfee/mobile-nav/blob/master/nav.js) file.

## example html

```html
<nav>
	<ul class="navigation">
		<li class="level-1 first"><a href="http://www.example.com/about-us/">About Us</a>
		<ul>
			<li class="level-2 first"><a href="http://www.example.com/about-us/our-team/">Our Team</a></li>
			<li class="level-2 last"><a href="http://www.example.com/about-us/faq/">FAQs</a></li>
		</ul>
		</li>
		<li class="level-1"><a href="http://www.example.com/our-services/">Our Services</a>
		<ul>
			<li class="level-2 first"><a href="http://www.example.com/our-services/service-areas/">Service Areas</a></li>
			<li class="level-2"><a href="http://www.example.com/our-services/testimonials/">Testimonials</a></li>
			<li class="level-2 last"><a href="http://www.example.com/our-services/before-afters/">Before &amp; Afters</a></li>
		</ul>
		</li>
		<li class="level-1"><a href="http://www.example.com/employment/">Employment</a>
		<ul>
			<li class="level-2 first"><a href="http://www.example.com/employment/working-for-us/">Working For Us</a></li>
			<li class="level-2"><a href="http://www.example.com/employment/opportunities/">Opportunities</a></li>
			<li class="level-2 last"><a href="http://www.example.com/employment/application/">Application</a></li>
		</ul>
		</li>
		<li class="level-1 last"><a href="http://www.example.com/contact-us/">Contact Us</a>
		<ul>
			<li class="level-2 first last"><a href="http://www.example.com/contact-us/contact-locations/">Contact &amp; Locations</a></li>
		</ul>
		</li>
	</ul>
</nav>
```

## example js

```js
$(document).ready(function() {
	$('.navigation > li > a').each( function(){
		var $this = $(this);
		$newLI = $('<li>').append( $this.clone() );
		$newLI.insertBefore($this.next('ul').find('.first'));
	});
    
    $("ul li ul").hide();
    
    $(".level-1").click(function(event) {
        $("ul li ul").hide();
        $(this).children("li ul").toggle();
        event.preventDefault();
    });
});
```

View the demo on [jsfiddle](http://jsfiddle.net/levidurfee/bmms2vvu/).
