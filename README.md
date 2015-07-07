#Gulp.js
![Automate all the tasks meme](https://cdn.meme.am/instances2/500x/626620.jpg)

##Why is Gulp useful?
![Gulp logo](http://brunch.io/images/others/gulp.png)

Gulp is a simple tool, built on Node, that makes it easy to create automated tasks. For example, Gulp can be used to quickly create tasks for compiling Sass into CSS, minifying CSS, or contactenating/uglifying JS files.

Performing tasks like this allows for your app to more efficiently serve up CSS and JS assets by allowing you to write styles and javascript in multiple files, but only needing to link to one concatenated file in your HTML.

This is similar to the built in features of Sprockets in the Rails Asset Pipeline. The advantage of using Gulp is that it allows the developer to customize the asset compliation process in a very easy to use manner. Since Gulp is built on Node, the build system operates on streams, thus providing Gulp tasks with extra speed/efficiency. Aside from having full control of the asset compilation process, and compiling assets in an efficient manner, Gulp makes creating tasks incredibly simple.

But wait, doesn't *Grunt* do the same thing? Technically yes. However, there are big differences when actually implementing one vs. the other.

*Grunt* is configuration based, and is rather complicated to get setup. Grunt also runs in sequential order.

*Gulp* on the otherhand is easier to get setup, and it's syntax mimics Node's making it familiar to many. Aside from fewer lines of code to write, *Gulp* is stream based, meaning you simply pipe the commands you want run and *Gulp* will attempt to run those tasks in maximum concurrency. This generally makes *Gulp* very fast.

Now that we know why Gulp is useful, let's take a second to take a drink...

![Sarah Palin big gulp](https://www.survivingcollege.com/wp-content/uploads/2013/03/Sarah-Palin-Big-Gulp-College-Republicans.gif)

Alright, now for some roadblocks.

##What are the roadblocks?
Learning the Gulp api is very simple and easy to use. However, creating more complex tasks requires installing numerous plug-ins for each specific function desired. For example, a plugin for prefixing ".min" on a file is required (if you wanted to follow convention that is...), and another plugin for actually minifying the file is also required. This can add a lot of dependencies to your project, but then again, probably fewer dependencies than rails, just saying. In addition, it's important to find the right Gulp plug-ins that match the libraries you're using on your project.

For example, there are a couple packages for using Sass with Node, ```node-sass-middleware``` & ```ruby-sass```. It is important to realize that there are actually two different *Gulp* plugins for these, ```gulp-sass``` & ```gulp-ruby-sass```.

However, these roadblocks are relatively minor in comparison to setting up *Grunt*. *Grunt* will have you all like...

![Lion king gif](http://24.media.tumblr.com/tumblr_lsfk1fde721qa6nebo4_250.gif)


##What are the takeaways/lessons learned?
For most Rails projects, using Gulp may or may not improve efficiency or make your life easier. However, for a Node app Gulp can be very useful to help optimize serving your assets, while still allowing you to remain modular. In addition, it's important to stay informed of the latest Gulp plugins to know what addition features can be added on to Gulp.

##Examples
For a small example of automating Sass compilation, CSS minifying, and JS Concatenation/uglification see the files contained in this repo.

**Getting Setup**

```
npm install --save-dev gulp
```

*Create a ```gulpfile.js``` in the root of your project*

```
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

##Additional ready

- [Gulp docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [Gulp Plugins](http://gulpjs.com/plugins/)
- [Slides about Gulp](http://slides.com/contra/gulp#/)
- [Pre-made gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes)
- [Get started with Gulp on the Youtubes](https://www.youtube.com/playlist?list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm)
