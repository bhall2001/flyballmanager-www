---
id: schedule
title: Schedule
---

# Schedule

Flyball Manager generates tournament schedules using official NAFA racing schedules for round-robin tournaments. The scheduling engine is based on the logic used by NAFA's official scheduler maintained by Dale Smith. The schedule uses data entered from team entries and divisions to quickly generate the most efficient schedule for your tournament.

While we've made creating the schedule pretty simple, there are options that need to be set, as well as optimizing and potentially manually adjusting the schedule created. While creating your schedule, please contact Bob Hall with any assistance you need.

## Creating a Schedule

![Schedule Screen](/img/schedule-create.svg)

### Initial setup

Prior to creating a schedule, a tournament must be created with team entries and divisions. Please see the tournament section to learn how to get started with a tournament. Once teams and divisions are created, review the tournament Seed Chart to verify teams and divisions are set up as intended.

### Maximize day 1 racing

On the initial schedule screen there is an option to maximize day 1 racing. The default setting is to run 60% of the races on the first day of a 2 day tournament. In situations where teams are running 8 races, enabling this option will have teams race 5 races on day 1 and 3 on day 2.

### Reversing lanes

For round robin tournaments the default lane selection follows the lanes published in the NAFA schedules. When hosting 2, single day tournaments it is desirable to swap the lanes for Day 2.

Enable the option "Reverse Round Robin Lanes" to set the lanes to the reverse as published in the NAFA schedules when generating the schedule. This allows teams to have a flow across the 2 days more in line with a multi-day tournament.

### Generate initial schedule

Once the options on set, click the `GENERATE SCHEDULE` button to create a draft schedule. This initial schedule will not be optimized in any manner. That is the next step.

## Optimize the schedule

![Schedule Screen](/img/schedule-screen.svg)

The schedule shows the details of all races happening for the tournament. This screen allows you to see the details of each race including left and right lane competitors, division, breakout, format and time both club and team have for breaks prior and coming up.

### Schedule row

Each row contains information about individual races. Let's break down each section of a single row of the race schedule.

![Schedule Row](/img/schedule-row.svg)

The arrows allow the race to be moved to the previous race or next race.

To the right of the arrows is the race number and an estimated time for the race. The time estimate is based on the start time entered on the settings screen.

Next are details for the teams in the left and right lanes.

![Division](/img/schedule-division.svg)

Top number details the classification and division of the team. Bottom number is the breakout for the division.

**2/8**

The fraction below the division abbreviation indicates the team's race counts. The first number is the number of races the team has raced. Second number is the total number of races in the round-robin schedule for the team.

**Riff Enuff**

Team Club name.

**#twss**

Team name

**4/4**

Race Format

The numbers in the schedule detail the left and right lane, previous and next race minutes for the club or team, top row is previous, bottom is next, left column is the left team, right column for right team. Here's an example.

![Division](/img/schedule-prev-next.svg)

The 80 above represents the left lane team races next in 80 minutes.

The 32 above represents the left lane club races next in 32 minutes.

The 90+ indicates the right team last raced over 90 minutes.

For planning purposes, for single ring tournaments, the application uses 8 minutes per race to calculate the time between races. Conflicts are indicated when a club has 8 or less minutes or a team has 40 or less minutes of time between races.

### Breaks

Breaks can be added to the schedule. Breaks can be anything inserted into the race schedule whens the NAFA racing will be paused. This can be things like mat time, single dog racing, blocks of time to allow resting of dogs and lunch.

![Add break](/img/add-break.svg)

To add a break, click `ADD BREAK...` on the schedule screen. On the panel that opens, enter the race after number where the break will occur, give the break a label such as `***MAT TIME***` or `***LUNCH BREAK***`.

Comments can be used to give specific information for what will be happing during the break. As an example, for mat time you may have divided a 12 minute break into 2 sections where 2 different green dogs will have 6 minutes each. For the comment you can add `A-Tayo B-McCree` where `A` is the first 6 minutes and `B` is the 2nd 6 minutes of the break.

Comments do not need to be entered when the break is created. It is easy to update the break comment later on either the Schedule screen or the Scoring screen.

Give the break a duration in minutes. If a duration is not assigned the standard estimated race time will be used for the break duration. Entering in the duration for the break assists when looking at the rest time for clubs and teams. This duration displays online at ondeckmanger.com as well.

Breaks can be easily moved to different spots in the schedule using the up and down arrows on the schedule screen. Clicking the up arrow moves the break 1 race forward in the schedule. The down arrow moves the break to 1 race later in the schedule.

:::info
Flyball Manager currently assigns a race number to each break. There is no way to remove the race number for breaks. We found that numbering the breaks reduces confusion during a tournament. Yes, it id different than what you may be used to, but our experience is this method works better for tournament flow.
:::

### Set day 2 start race

On the schedule screen it is important to enter the day 2 starting race number. This is used by the scheduling engine and for RD reports. Setting the day 2 starting race number does take a bit of practice. Flyball Manager will attempt to assist in this process.

Scroll through the draft schedule looking for races where teams race count passes the half way point. The team race count is diplayed on a schedule row next to each team's name. You will notice a fraction like `4/8`. This means the team has raced 4 out of 8 times at the race.

This is a good starting point to determining where the day 2 starting race should be. Look for where you think the day 2 race should start and enter this race number on the schedule screen.

Flyball Manager will now add background color to some races in an attempt to assist in setting the day 2 starting race. The application suggests scheduling 60% of the races on day 1. The coloring of the rows is only a suggestion. You do not need to follow these suggestions.

Races with an orange background the application suggests should be on day 2. Yellow background races indicates races that are suggested to be on day 1.

![race suggestions](/img/schedule-day2-suggest.svg)

This admittedly gets a bit tricky and is not the easiest to explain. But here goes...
Using the arrows on the screen, we find it is easiest to move all the yellow races up the screen (toward the top to lower number races) to the point where they all are blocked together at the first orange race. Races can only be move 1 slot at a time.

Next move all the orange races down until they are all grouped together above the yellow races. The race where the orange turns to yellow is the suggested race to start day 2 racing with. Enter this number on the schedule screen.

![race suggestions](/img/schedule-yellow-orange.svg)

But we are not done yet. Next up move each of the yellow races so they are 1 race above the block of orange races. When the race crossses the day 2 start line, it will no longer be colored yellow. But don't stop moving it until it is the 1st race on top of the orange races.

Continue moving yellow races up until all the races in the schedule do not have a yellow or orange background. Once you have moved all the races, you now have the suggested day 2 start race set for the schedule.

![race suggestions](/img/schedule-day2-ready.svg)

### Schedule favors

Before we optimize the schedule, decide how the scheduling engine favors clubs and teams. Here are the options:

- Flow - engine prioritizes spacing clubs. Likely to result in fewer club conflicts but more team conflicts
- Rest - engine prioritizes spacing teams. Likely to result in fewer team conflicts but more club conflicts
- Balanced - engine prioritizes both team and club spacing. Likely to result in more club conflicts than flow and more team conflicts than rest but overall a balance between team and club conflicts.

Larger tournaments it is best to prioritize for Flow. Small tournaments (less than 80 races) can go either way. I personally prefer to schedule small tournaments for Flow and add breaks in where there are team conflicts. Although there is something to be said for scheduling to give the athletes the most rest and understand there will be delays with club conflicts -- resulting in more rest time for dogs in the end.

Select the method you prefer to schedule for by clicking on the `Schedule Favors` button for you choice.

Click the `OPTIMIZE` button to start the schedule optimization. Depending on the performance of your computer and the size of the tournament and number of rings, optimizing can take a very long time. If you are running on a laptop with a large tournament or multiple rings, it may be desirable to disable automatic sleeping of the system.

### Manual adjustments

Once the schedule is optimized, it is possible to further move races around manually. Our scheduling algorithms try many different options to optimize the schedule. Is it perfect? Nope. The schedule created in most cases will be very good. Small tournaments there's really not too much that can be done.

If you would like to change the schedule, use the arrows to move races around as you desire.

### Race Details

Double-clicking a race in the schedule opens a window to update some details for the race.

![Race Details](/img/schedule-race-details.svg)

Format allows the format for this race to be changed. It is important to understand that this feature **IS NOT REFLECTED IN THE SEED CHART GENERATED AUTOMATICALLY** by Flyball Manager. Changing the value from the pre-computed value may effect the number of heats run for teams. The exported seed chart will need to be modified manually to correctly indicate the number of heats after the modification.

Duration sets the expected duration for a race. Flyball Manager uses 8 minutes for the race time by default. This can be changed for races that are used for mat time, single dog racing or breaks. Enter the number of minutes this race is expected to take if it is different than 8 minutes. This is used when estimating club and team rest times between races and is also displayed online.

Comments allow for up to 100 characters of text to be displayed on the race. The intended use here is to display online details of the race if needed. Examples would be listing the dogs that will be in mat time or single dog races.

### Limitations

Importing a schedule is not allowed with Flyball Manager.
