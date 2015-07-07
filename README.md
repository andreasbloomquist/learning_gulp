#Gulp.js
![Automate all the tasks meme]](http://cdn.meme.am/instances2/500x/626620.jpg)

**Why is Gulp useful?**
Gulp is a simple tool, built on Node, that makes it easy to create automated tasks. For example, Gulp can be used to quickly create tasks for compiling Sass into CSS, minifying CSS, or contactenating/uglifying JS files.

Performing tasks like this allows for your app to more efficiently serve up CSS and JS assets by allowing you to write styles and javascript in multiple files, but only needing to link to one concatenated file in your HTML.

This is similar to the built in features of Sprockets in the Rails Asset Pipeline. The advantage of using Gulp is that it allows the developer to customize the asset compliation process in a very easy to use manner. Since Gulp is built on Node, the build system operates on streams, thus providing Gulp tasks with extra speed/efficiency. Aside from having full control of the asset compilation process, and compiling assets in an efficient manner, Gulp makes creating tasks incredibly simple.

But wait, doesn't *Grunt* do the same thing? Technically yes. However, there are big differences when actually implementing one vs. the other.

*Grunt* is configuration based, and is rather complicated to get setup. Grunt also runs in sequential order.

*Gulp* on the otherhand is easier to get setup, and it's syntax mimics Node's making it familiar to many. Aside from fewer lines of code to write, *Gulp* is stream based, meaning you simply pipe the commands you want run and *Gulp* will attempt to run those tasks in maximum concurrency. This generally makes *Gulp* very fast.

**What are the roadblocks?**
Learning the Gulp api is very simple and easy to use. However, creating more complex tasks requires installing numerous plug-ins for each specific function desired. For example, a plugin for prefixing ".min" on a file is required (if you wanted to follow convention that is...), and another plugin for actually minifying the file is also required. This can add a lot of dependencies to your project, but then again, probably fewer dependencies than rails, just saying.

**What are the takeaways/lessons learned?**
For most Rails projects, using Gulp may or may not improve efficiency or make your life easier. However, for a Node app Gulp can be very useful to help optimize serving your assets, while still allowing you to remain modular. In addition, it's important to stay informed of the latest Gulp plugins to know what addition features can be added on to Gulp.

**Examples**
For a small example of automating Sass compilation, CSS minifying, and JS Concatenation/uglification see the files contained in this repo.

*Getting Setup*

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

See [here](http://gulpjs.com/plugins/) for a full list of Gulp plugins available.

