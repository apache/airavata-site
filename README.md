# Apache Airavata website

This is next generation website for [Apache Airavata](http://airavata.apache.org).

### About this site
The site's content is written in Mark Down which is built with [Jekyll](http://jekyllrb.com/) to convert to html

The git repo only has one branch asf-site and the parent folder has all mark down files. Jekyll will be used to generate the HTML. The generated files are served from 'content' folder.

It is important to understand this distinguishn:

1. The parent folder has raw markdown files and jekyll code and includes resources for building including the css, javascript and images. 
1. The generated static website content is in the content folder. This is the actual static content hosted but do not edit it directly. 
Beam website.

### Development setup
Before working with the Jekyll code, you will need to install Jekyll:

    $ gem install jekyll

*If you are on a Mac, you may need to install
[Ruby Gems](https://rubygems.org/pages/download).*

For more instructions refer to the documentation on [Jekyll](http://jekyllrb.com/) website. 

### Live development
While you are working with the website, you can test and develop live. Run the
following command in the root folder of the website:

    $ jekyll serve

Jekyll will start a webserver on port `4000`. As you make changes to the
content, Jekyll will rebuild it automatically. This is helpful if you want to see
how your changes will render in realtime.

### Generating the static website
Once you are done with your changes, you need to compile the static
content for the website. This is what is actually hosted 
on the Apache Beam website.

You can build the static content by running the following command in the root
website directory:

    $ jekyll build

Once built, it will be placed in the folder `content` inside of the root directory. 
This directory will include images, HTML, CSS, and so on. In a typical Jekyll install
this content would live in `_site` - it has been changed for the Apache Airavata website
to work with the ASF web publishing system.
