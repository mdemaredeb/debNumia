const redirects = {
    "debmedia.freshdesk.com": "numia.freshdesk.com",
    "support.debmedia.com": "support.numia.co",
};

const redir = redirects[location.hostname];
if(redir)
    location.hostname = redir;
