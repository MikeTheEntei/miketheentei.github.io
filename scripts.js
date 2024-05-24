/* Place your JavaScript in this file */
document.body.onload = addSitemap;
function addSitemap() {
    const content = document.querySelector("#content");
	content.insertAdjacentHTML(
		"afterend",
        "<hr>" +
		"<p id=\"Sitemap\"> Click on any town to explore this site! Grayed-out towns lead to placeholders for now.</p><p><img src=\"Johto 4x v1.png\" alt=\"Sitemap\" usemap=\"#Johto\"><map name=\"Johto\">" +
            "<area shape=\"rect\" coords=\"636, 412, 684, 456\" href=\"index.html\" title=\"Back to the homepage\"> <!-- New Bark -->" +
            "<area shape=\"rect\" coords=\"476, 412, 556, 460\" href=\"https://miketheentei.w3spaces.com/about-me.html\" title=\"About Mike the Entei\"> <!-- Cherrygrove -->" +
            "<area shape=\"rect\" coords=\"412, 252, 492, 332\" href=\"https://miketheentei.w3spaces.com/nature.html\" title=\"Photos of the natural world\"> <!-- Violet -->" +
            "<area shape=\"rect\" coords=\"348, 476, 428, 524\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Azalea -->" +
            "<area shape=\"rect\" coords=\"252, 348, 364, 428\" href=\"https://www.twitch.tv/MikeTheEntei\" title=\"My Twitch channel!\"> <!-- Goldenrod -->" +
            "<area shape=\"rect\" coords=\"316, 156, 396, 236\" href=\"https://discord.gg/jaEg5QU4ju\" title=\"My Discord server, named the Burned Tower after the location in Ecruteak City.\"> <!-- Ecruteak -->" +
            "<area shape=\"rect\" coords=\"220, 252, 300, 332\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Olivine -->" +
            "<area shape=\"rect\" coords=\"124, 348, 172, 428\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Cianwood -->" +
            "<area shape=\"rect\" coords=\"476, 188, 524, 236\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Mahogany -->" +
            "<area shape=\"rect\" coords=\"604, 156, 684, 236\" href=\"https://miketheentei.w3spaces.com/challenge-runs.html\" title=\"Learn about some of my old challenge runs here!\"> <!-- Blackthorn -->" +
            "<area shape=\"rect\" coords=\"988, 380, 136, 424\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Pallet -->" +
            "<area shape=\"rect\" coords=\"956, 252, 1036, 332\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Viridian -->" +
            "<area shape=\"rect\" coords=\"988, 92, 1068, 172\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Pewter -->" +
            "<area shape=\"rect\" coords=\"1244, 124, 1324, 204\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Cerulean -->" +
            "<area shape=\"rect\" coords=\"1244, 316, 1324, 396\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Vermilion -->" +
            "<area shape=\"rect\" coords=\"1372, 252, 1430, 296\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Lavender -->" +
            "<area shape=\"rect\" coords=\"1148, 252, 1228, 332\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Celadon -->" +
            "<area shape=\"rect\" coords=\"1244, 220, 1324, 300\" href=\"https://www.youtube.com/MikeTheEntei\" title=\"My YouTube channel!\"> <!-- Saffron -->" +
            "<area shape=\"rect\" coords=\"1148, 412, 1228, 492\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Fucshia -->" +
            "<area shape=\"rect\" coords=\"988, 508, 1036, 556\" href=\"https://miketheentei.w3spaces.com/cool-stuff.html\"> <!-- Cinnabar -->" +
        "</map>" +
	"</p><hr>" +
    "<address>For business inquiries, please email <a href=\"mailto:MikeTheEntei@Gmail.com\">MikeTheEntei@Gmail.com</a>.</address>" +
        "<h3>Please note: This website is a work in progress and will be updated daily.</h3>"
	);
}
