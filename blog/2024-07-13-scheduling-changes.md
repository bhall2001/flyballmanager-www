---
slug: scheduling-changes
title: Improved scheduling engine
authors: bhall
tags: [scheduling]
---

The release of version 6.x of Flyball Manager brings a significant change to the scheduling engine within the app. Big thanks goes out to Dale Smith for sharing his algorithm for scheduling with me.

Here is a quick guide to getting up to speed with the new scheduling engine.

Once you are ready to generate a schedule,<!-- truncate --> click on `Schedule` in the sidebar menu.

The Schedule screen displays text detailing the steps needed to generate a schedule.

Scheduling is a 2 step process. First a basic schedule is created with **no** optimizations. Then the schedule is optimized after defining a couple of parameters for the optimization.

Before generating the schedule, you need to let the scheduler know if the schedule should “Maximize day 1 racing”. Use this in cases where you want to have teams run at least 5 races on day 1. Essentially this impacts divisions with 8 total races per team. These teams would run 5 races on day 1 and 3 on day 2.

Next click the Generate Schedule button.

Step one runs and creates a schedule with no optimizations.

Now we need to get step 2 set up. Let's start but indicating to the scheduling engine which race will be the start of day 2 racing (if you have a 2 day tournament). For 1 day tournaments you do not need to do this.

Scroll through the list of races and look for a point where you think day 2 should start. A good place to start is to look for the 4/8 races that flip to 5/8. That is usually where you want to do your first guess for starting day 2.

The schedule will change the color of races once you enter a number. This is helping you out to see what races should be moved to either day 1 or day 2. This takes a bit to get used to for sure. Here is what the colors mean…

Yellow - race appears to the scheduler to belong on day 1
Orange - race appears to the scheduler to belong on day 2

There are a few options here.

- you can ignore what the scheduler thinks is day1/day 2 races
- you can click the arrows to move orange races to day 2 and yellow races to day 1
- you can move the start of day 2 racing (do this is all the races are either yellow or orange)

I will admit it’s not easy to get this. What I find is that you likely want to do a combination of bullets 2 & 3. It will take some time moving races across the day line. Do it for 1 race at a time. In most cases you will want to get to a point where all races have a grey background.

Next up is to tell the scheduling engine how it should favor the schedule. There are 3 options.

**Rest** - teams are given the maximum possible break between races at the expense of clubs shorter times between races. This statistically results in clubs have potentially more back to back races.

**Flow** - clubs are scheduled to allow for the maximum amount of time between races. There is still a chance that a club will be scheduled back to back but every attempt is made to not do this.

**Balanced** - a schedule that attempts to give teams the most rest as well as spacing club races out to maximize time between between races. There are likely to be more back to back club races than Flow setting but fewer than Rest setting.

With small tournaments is it impossible to create a perfect schedule. What most folks have been doing who have tested this version is to schedule using the flow setting and then adding in breaks to get teams the rest they should have. This results in a tournament that flows when racing is going on and offers mat times blocks sprinkled into the racing.

Once the above is all set, click the optimize schedule. Scheduling is a compute intensive task. Expect the process to take a bit of time to complete.

Now you can review the schedule that was created. While the scheduling engine does a very good job, it is not perfect. At this point if it possible tp move races around manually.

Enjoy the new scheduling engine!
