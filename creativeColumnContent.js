const creativeColumnContent = 
[
	{ "h1" : "Creative Endeavors"},
	{ "p" : "I always have several creative projects in progress.<br>I've been woodworking since my youth, but these days I'm usually making something\
				on a laser cutter.<br>I may also very occasionally turn out works of short fiction.<br>" },
	{ "br" : {} },
	{ "span" : "I document most of my creative projects in an album on "},
	{ "a" : {"href" : "https://www.flickr.com/photos/woodbits/albums/72157594222510335/", "innerHTML": "Flickr", "target":"_blank"}},
	{ "br" : {} },
	{ "span" : "Or you can check out a few of the 3-d models for laser cutting I've designed at "},
	{ "a" : {"href" : "https://www.thingiverse.com/bruce_cooner/designs", "innerHTML": "Thingiverse", "target":"_blank"}},
	{ "br" : "" },
	{ "span" : "Check out my etsy shop, where I sell laser engraved automotive minatures: "},
	{ "a" : {"href" : "https://laserwheels.etsy.com", "innerHTML": "Laser Wheels", "target":"_blank"}},
	{ "hr" : "" },

	{ "h2": "Iron Man Mk III helmet" },
	{ "span": {"innerHTML" : "(vector design / laser cutting/engraving)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{"p" : "I designed and built a laser cut rendition of Tony Stark's MK III helmet as a gift for a friend. I gave it \
			acrylic eyes lit by LEDs inside the helmet, which considerably complicated its design and construction.<br> \
			The results were worth it though, and this remains one of my favorite projects."},
	{ "a" :	{ "href" : ".\\assets\\iron_man_mkiii_2.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\iron_man_mkiii_2.jpg", "style":{"width":"15%"}, "alt":"small laser cut cardboard model rocket ship"}}
				}},
	{ "a" :	{ "href" : ".\\assets\\iron_man_mkiii_3.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\iron_man_mkiii_3.jpg", "style":{"width":"15%"}, "alt":"small laser cut cardboard model rocket ship"}}
				}},
	{ "a" :	{ "href" : ".\\assets\\iron_man_mkiii_1.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\iron_man_mkiii_1.jpg", "style":{"width":"15%"}, "alt":"small laser cut cardboard model rocket ship"}}
				}},
	{ "hr" : {}},

	{ "h2": "automotive art" },
	{ "span": {"innerHTML" : "(vector design / laser cutting/engraving)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{"p" : "After owning a Glowforge laser cutter for a while, my interest in automobiles and miniatures drew me to creating \
			fridge magnets modeled after classic vehicles.<br> This became an etsy shop, Laser Wheels, where I've sold thousands of \
			 examples of my work.<br> \
			I now get several comissions a year from people seeking a specific vehicle in my style, both large and small, usually as a unique gift.<br>\
			It's very rewarding to create exactly the thing someone wants that they can't get anywhere else.<br> \
			I have far too many models to showcase here, but highlighted below are a few of my favorites."},
	{ "img" : { "src": "https://live.staticflickr.com/65535/51992650257_a68bd416e0_c.jpg", "style": {"width":"25%"} } },
	{ "img" : { "src": "https://live.staticflickr.com/65535/51993803896_97f99b3f41_c.jpg", "style": {"width":"25%"} } },
	{ "img" : { "src": "https://live.staticflickr.com/65535/53174700815_6b7e982b96_c.jpg", "style": {"width":"25%"} } },
	{ "br" : "" },
	{ "img" : { "src": "https://live.staticflickr.com/65535/54354947746_8a1d879318_c.jpg", "style": {"width":"25%"} } },
	{ "img" : { "src": "https://live.staticflickr.com/65535/53075952582_ef99d3d359_c.jpg", "style": {"width":"25%"} } },
	{ "img" : { "src": "https://live.staticflickr.com/65535/53836226547_4361b6bcdc_c.jpg", "style": {"width":"25%"} } },
	{ "br" : "" },
	{ "img" : { "src": "https://live.staticflickr.com/65535/53390101458_cf80216c1a_c.jpg", "style": {"width":"25%"} } },
	{ "br" : "" },
	{ "a" : {"href": "https://laserwheels.etsy.com", "target" : "_blank", "children" : { "span" : "Check out the Laser Wheels shop"}}},
	{ "hr" : "" },

	{ "h2": "laser cut models" },
	{ "span": {"innerHTML" : "(3d design / laser cutting)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{"p" : "I bought a Glowforge laser cutter during their KickStarter, mostly to experiment with making laser cut 3d models.<br>\
				My first attempt at my own design was a 'stubby' rocket ship reminiscent of retro and classic sci-fi.<br>\
				I had to teach myself 3d modeling (Fusion) and overcome some new problems I'd never encountered before,\
				but the result was pretty cute.<br>\
				This continued as I chased my fascination with lighter than air travel, which culminated in cardboard models of the \
				LZ-127 Graf Zeppelin.  The largest of these models, at 48\" long, now sits on a custom stand above my desk, a token \
				to remind me of the rewards of tackling new skills.<br>"},
	{ "a" :	{ "href" : ".\\assets\\stubby-rocket.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\stubby-rocket.jpg", "style":{"width":"15%"}, "alt":"small laser cut cardboard model rocket ship"}}
				}},
	{ "a" :	{ "href" : ".\\LZ127\\LZ127-completed.jpg", "target" : "_blank",
					"children" : {"img" : {"src": ".\\LZ127\\LZ127-completed.jpg", "style":{"width":"25%"}, "alt":"small laser cut model of Graf Zeppelin"}}
				}},
	{ "br" : "" },
	{ "a" :	{ "href" : ".\\assets\\LZ127-on-stand.jpg", "target" : "_blank",
					"children" : {"img" : {"src": ".\\assets\\LZ127-on-stand.jpg", "style":{"width":"50%"}, "alt":"laser cut model of Graf Zeppelin"}}
				}},
	{"hr": ""},

	{ "h2": "driving cockpit simulator" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{"p" : "A coworker wanted a driving simulator cockpit that exactly matched the dimensions of his real BMW M3,\
				to which he could mount the driver's seat from a real car and a very expensive steering wheel controller.\
				We went with pine for most of the material, and added a lot of brackets for stability.\
				The constraints made this a challenging but interesting project, and the result was a beautiful\
				piece of functional furniture. I made the 'dash' removable to allow controller upgrades, and the front and back sections\
				can be separated for easier moving.<br>\
				After taking it for a spin around a virtual racetrack, I had to admit it was a lot of fun to experience. As far as I know, it is still in the middle of his living room."},
	{ "a" :	{ "href" : ".\\assets\\driving_simulator.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\driving_simulator.jpg", "style":{"width":"25%"}, "alt":"wooden videogame driving simulator cockpit"}}
				}},
	{"hr" : ""},

	{ "h2" : "wooden jewelry" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{ "p" : "For a while I made wooden jewelry using some of the endless supply of mesquite prunings from a tree in our backyard.<br>\
				My favorite type incorporated stones in a wire cage weaved into the wood. I also made a few pieces with a miniature cacti carved \
				into the center, which were fun. Also fun was using copper power or red sand from the red rocks around Sedona for inlay work."},
	{ "a" :	{ "href" : ".\\assets\\jewelry_mesquite_yellow_quartz.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\jewelry_mesquite_yellow_quartz.jpg", "style":{"width":"15%"}, "alt":"wooden jewelry pendant"}}
				}},
	{ "a" :	{ "href" : ".\\assets\\jewelry_mesquite_saguaro.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\jewelry_mesquite_saguaro.jpg", "style":{"width":"15%"}, "alt":"wooden jewelry pendant"}}
				}},
	{ "a" :	{ "href" : ".\\assets\\jewelry_mesquite_copper_inlay.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\jewelry_mesquite_copper_inlay.jpg", "style":{"width":"15%"}, "alt":"wooden jewelry pendants"}}
				}},
	{ "a" :	{ "href" : ".\\assets\\jewelry_mesquite_red_sand_inlay.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\jewelry_mesquite_red_sand_inlay.jpg", "style":{"width":"15%"}, "alt":"wooden jewelry pendant"}}
				}},
	{"hr": ""},

	{ "h2": "K-leg shelf" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{"p" : "My wife requested a small three level shelf for her office space, and I took the opportunity to use a design I came\
				up with years ago that I call the 'K Leg', where the front legs are an X with the cross pushed back so that\
				viewed from the side they form the shape of the letter K.<br>I love the cantilever effect this gave the middle shelf,\
				and it was even practical on this design as it makes the lower shelves easier to use."},
	{ "a" :	{ "href" : ".\\assets\\k_leg_shelf.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\k_leg_shelf.jpg", "style":{"width":"25%"}, "alt":"wooden three tiered shelf"}}
				}},
	{"hr": ""},

	{ "h2" : "Minecraft pig clock" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{ "p" : "I played Minecraft for a while, primarily on a server run by a friend.<br>\
				For his birthday gift one year I crafted a whimsical clock modeled after the pig seen in the game."},
	{ "a" :	{ "href" : ".\\assets\\mc_pig_clock.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\mc_pig_clock.jpg", "style":{"width":"25%"}, "alt":"clock in shape of pig from Minecraft"}}
				}},
	{"hr": ""},

	{ "h2" : "saguaro @ sunset clock" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{ "p" : "For a while I made almost nothing but clocks. After getting a bunch of castoff stock from a friend's father's cabinet shop,\
				I used some of it to create a clock inspired by a common scene in the desert where I live, viewing the setting sun between\
				the arms of a saguaro cactus."},
	{ "a" :	{ "href" : ".\\assets\\saguaro_clock.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\saguaro_clock.jpg", "style":{"width":"15%"}, "alt":"clock shaped like saguaro cactus"}}
				}},
	{"hr": ""},

	{ "h2" : "lamp base" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{ "p" : "Years ago we bought a floor lamp which, like so many, was attached to an incompetent base. I removed it from the poorly engineered one \
				and created this three legged model with more support which has served as a stable footing for it to this day."},
	{ "a" :	{ "href" : ".\\assets\\lamp_3leg_base.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\lamp_3leg_base.jpg", "style":{"width":"15%"}, "alt":"handmade wooden base for floor lamp"}}
				}},
	{"hr": ""},

	{ "h2" : "arbor" },
	{ "span": {"innerHTML" : "(woodworking)", "class":"projectTypeClass"} },
	{ "br" : "" },
	{ "p" : "When we moved into our current home, there was a large bougainvillea over the front sidewalk, but it was draped over several small arbors made \
				from thin metal rods and lashed together which were insufficient to hold up the plant's weight. I replaced that with one I built from \
				redwood which was much stronger, and also took advantage of the archway where it was placed for added support. It did its job for \
				fifteen years, but last year I noticed the angled beams of the arches were cracking on the load line, due to the fact I had notched them too deeply on \
				top to hold the longitudinal ribs. I put a ladder under it for support and replaced the cracked pieces with an improved design, and it continues to do its job \
				today, a decade and a half after it was built. The picture shows it \
				immediately after original installation, with the bougainvillea trimmed back to nearly nothing. The hardy vine reclaimed this arbor in just a few months."},
				{ "a" :	{ "href" : ".\\assets\\redwood_arbor.jpg", "target" : "_blank",
					"children" : {"img" : {"src": "assets\\redwood_arbor.jpg", "style":{"width":"15%"}, "alt":"wooden arbor"}}
				}},


];



// ----------------------------------------------------------------------------
// overkill but cool
// function* creativeContentGen()
// {
// 	console.log("creativeContentGen()");
// 	const contentLen = creativeContent.length;

// 	console.log("creativeContentGen() length: " + contentLen);

// 	let currentIndex = 0;
// 	while (currentIndex < contentLen)
// 	{
// 		console.log("yielding index: " + currentIndex);

// 		yield creativeContent[currentIndex];
// 		currentIndex += 1;
// 	}

// 	return undefined;
// }

