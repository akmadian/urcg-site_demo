# underrep.com

This repo contains the source code for [underrep.com](https://underrep.com).

### For future maintainers:

The site is built using [Bootstrap](https://getbootstrap.com/), some jQuery, and standard HTML, JS, CSS.

The header and footer are located in `./header.html` and `./footer.html` respectively. These html files also have their own CSS files, and are injected into the currently served page on load. This provides one quick and easy place to edit the header and footer instead of having to go to each file to make a single change.

Most JS functionality is in separate files in the `scripts` dir. `page-functions.js` is loaded in every page, other scripts are only loaded on the pages they're used on. `load-testimonials.js` controls the testimonials carousel on the home page, and `get-collapse.js` provides some custom functionality to the "Unit Subsections" and "Example Timelines" collapsibles on the get page.

Some assets such as the editor headshots and the overlords logo are fetched over HTTPS from assets.underrep.com instead of being served up with the site normally.

For deployment, go into cpanel, go to Files >> Git Version Control >> Manage (on the underrep.com repository) >> Pull or Deploy (at the top) >> Update from Remote (at the bottom). This will copy the contents of this repo to `public_html`. I've set up the permissions to hide unnecessary files.

## Support
For support with this site's source code, contact Ari Madian [Email](mailto:akmadian@gmail.com) [GitHub](https://github.com/akmadian)