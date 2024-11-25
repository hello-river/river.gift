# river.gift

This is a Svelte and HTML-based self-hosted alternative to linktr.ee and other link in bio type services. It's designed to be easily managed by a single JSON file (`src/public/data.json`). While I am not hosting it on Github Pages it very easily could be, look into that [here](https://pages.github.com) if you're interested.

## Installing Dependencies

I'm a PNPM girl so for me installing dependencies is just `pnpm install` and then wait for everything to be downloaded. NPM and Yarn are the same just replace the `pnpm` with your package manager. I've never used any other package manager so you're on your own for that, but I suspect its similar.

## Previewing

To build the project for previewing on your local computer you can run `pnpm dev` in your terminal which will start the Vite server and serve your site at `http://localhost:5173`.

## Deployment

If you're using Github Pages refer to linked documentation above. If you are hosting it yourself somewhere else simply run `pnpm build` and you'll be given a `/dist` folder, upload the contents of that to your website as you would other files and it should be available at your domain. 

## Customizing

If you just want to keep everything the same and just change the avatar and the links then you'll just need to drop a new `pfp.png` file into `src/public/images` and update `src/public/data.json` with your links as well as update the following lines in `src/index.html`.

```html
<title>Support River &mdash; writer of horny little fantasy stories</title>

<meta property="og:title" content="Support River">
<meta property="og:url" content="https://river.gift">
<meta property="og:image" content="https://river.gift/images/pfp.png">
<meta property="og:image:alt" content="River's Avatar">
```

It's important you change all of them to your information and url. The `og:url` should use your domain and then update `og:image` to use that same domain but leave the `/assets/pfp.png` portion.

### Changing the avatar's name or file format

If you want to change the `pfp.png` to something else whether it's just a matter of changing it in two places, the `og:image` tag mentioned above, and in the `src/svelte/App.svelte` HTML.

```html
<img src="/images/pfp.png" alt="{ res.data.branding.name }'s Avatar" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 inline-block bg-white shadow-lg rounded-full -mx-4 z-50" />
```

Just change the `pfp.png` portion here and the template will handle the rest.

### Changing colors and further customization

The site is mostly basic HTML with Svelte just acting as a way to handle loops, data loading, and separating parts into easier to manage blocks of code. You can change the HTML as you wish. If you want to change just colors of items the template uses [TailwindCSS](https://tailwindcss.com/) and you can find and replace the colors in the project replacing them with any of the [colors from Tailwind](https://tailwindcss.com/docs/customizing-colors#default-color-palette) easily. The colors used are:

- text-gray-700 (header and link text)
- text-white (link text on hover)
- bg-white (header and bubble link surface)
- bg-gray-100 (social links surface)
- bg-gray-200 (page background)
- bg-gray-300 (section divider text surface)
- bg-gray-800 (social links surface on hover)
- bg-rose-800 (bubble links surface on hover)

### Changing section titles or adding more link sections

#### Section titles

Changing the section titles is easy, just open `src/svelte/App.svelte` and locate these two lines:

```html
<Divider title="Support Me"></Divider>
<Divider title="Social Links"></Divider>
```

Update either or both of them to the section name you want in their `title` attribute and you're good to go.

#### Adding more link sections,

If you want to add another link section you'll need to copy:

```html
<Divider title="Support Me"></Divider>

<div class="w-11/12 lg:w-3/4 2xl:w-1/2 mx-auto my-6">
    <PriorityLinks items={ res.data.links.priority }></PriorityLinks>
</div>
```

or

```html
<Divider title="Social Links"></Divider>

<div class="w-11/12 lg:w-3/4 2xl:w-1/2 mx-auto my-6">
    <SocialLinks items={ res.data.links.social }></SocialLinks>
</div>
```

depending on the style of link you want the section to have. Then just change the `title` attribute in the `<Divider>` tag and change the `.social` or `.priority` portion to be your new link group (e.g. `res.data.links.nsfw` or `res.data.links.art`).

Next open `src/public/data.json` and add the section and links in the same format as the existing ones.

## Icons

The icons used in this project are from [boxicons.com](https://boxicons.com) and the way to use them is to find an icon you want, click the "SVG Code" button and then paste it into a text editor so you'll see something like this:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
    <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
</svg>
```

It may paste it in a single line like this:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path></svg>
```

Either way what you need to do is remove both the starting and ending `<svg>` tag and just leave the tags in between them. It should look something like this:

```html
<path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
```

That is what goes in the `icon` field in your `src/public/data.json` link definition.

## Support

I'm not sure what more would be necessary than what is spelled out in this README, but if you have questions feel free to either open an issue on this repo and describe the issue as best as possible or reach out to me on Twitter or Bluesky. If you DM me on either platform I might not see it, so tag me in a post and let me know you're having an issue and have DM'd me so I know to look, or just ask publicly.