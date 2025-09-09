---
id: brackets
title: Overview
---

# Bracket Racing Overview

Flyball Manager supports single elimination brackets with loser races as well as a special 1 bracket race for single day tournaments. It is very important that you read this section if your tournament intends to use bracket racing.

When adding a bracket, Flyball manager takes care of all the required handling of the bracket races. This includes scheduling the races, scoring, automatically managing teams for the brackets based on the teams win/loss of heats, and automatically synchronizes this information to ondeckmanager.com for communication with participants.

## Bracket format

Brackets are typically run after at least 1 round of round robin racing. Bracket races are added to a division when setting up the tournament division format.

![Tournament Divisions](/img/tournament-divisions-main.svg)

On the Tournament screen Division tab, select the division in the left list that will have a bracket added. On the right is a section labeled `Brackets`. Click the checkbox for the type of bracket desired. In the format menu, select the format for the heats of the bracket races.

## Bracket scheduling

Flyball Manager handles the scheduling of brackets. By adding a bracket to the division, the scheduling engine adds the appropriate races to the schedule based on the bracket selected.

Races in the schedule display placeholder information for the bracket races. This information allows participants to see who the teams will be for a bracket race before the details of the race is known.

![Schedule Brackets 1](/img/schedule-bracket-races-1.svg)

In the image above races 155-158 are bracket races. The schedule displays placeholder information indicating that the race will eventually be teams that are seeded in the bracket. Once the teams are seeded, the information on the schedule is automatically updated with the team information.

Further down in the same schedule we see this...

![Schedule Brackets 2](/img/schedule-bracket-races-2.svg)

Races 185 and 189 are bracket races. Here we can see the placeholder text indicates that the teams for these races wil be the winner/loser of bracket races earlier in the schedule. Once the winner/loser of the previous races are determined, the information on the schedule is automatically updated based on the results of the previous races.

Dynamic updating of bracket race information is synchronized with ondeckmanger.com as well. This allows participants of the tournament to have realtime updates to the bracket race information.

When building the schedule, if a bracket race is moved from the original position in the schedule, Flyball Manager automatically updates the placeholder information with the new bracket race information. Bracket races can be moved in the schedule as needed.

:::caution
Bracket races can be moved in ways that make the schedule invalid. Flyball Manager **will not** detect this issue. For example, if a bracket race that depends on the winner or loser of a previous race is moved to occur before that race, it creates a conflict.

Please keep this in mind when adjusting the schedule to avoid such errors.
:::

## Bracket seeding

Bracket seeding is determined based on the results of the round-robin races that take place before the bracket races. Before the first bracket race, you must manually calculate and enter the seeding on the team screen.

If bracket seeding is not entered on the team screen, a warning will appear on the scoring screen, and scoring will remain disabled until the seeding is properly entered.

### Entering bracket seeds

Navigate to the `Teams` screen. At the top of the screen select the Division being seeded in the `By Division` menu. The teams for the division selected are displayed. Select one of the teams in the division. On the right side of the screen, there is a menu option to set the bracket seed for the selected team. Select the bracket seed for the team.

Repeat this until you enter the bracket seeds for all teams in the division.

![Setting team bracket seed](/img/team-bracket-seed.svg)

The team list updates to display the bracket seeds. Verify the seed information is correct.

Once the seeding is set, all races in the schedule dependent on the bracket seeding information will be updated with the appropriate team information.

:::note
Bracket seeds are not the same seed as the initial tournament seed. The tournament seed is based on the team entry seed time and is used to seed the round robin racing of a tournament. Bracket seeds are determined by the results of the round robin races. The tournament seed time does not play a role in seeding brackets.
:::

## Tournament placement

Bracket races determine the tournament placement. The round robin rounds are used to seed the bracket only. Any tournament points accumulated in the round robin races are only used to seed the bracket. Round robin points are not used to determine tournament placement.

## Single elimination bracket

Click the `+ Single Elimination` button to enable a single elimination bracket for the division. Select the format for the heats of the bracket. Single elimination bracket formats are limited to 2 of 3 or 3 of 5 format.

The bracket schedule follows the schedule outlined in the NAFA Rules appendix for single elimination brackets. A copy of the bracket racing including tournament placement can be found in the appendix of this website.

## 1 race bracket

This is a special bracket that should only be used for single day tournaments **and** divisions with 4 teams where only 1 round robin is run. Teams in these divisions will race 3 times. This results in sub-optimal number of total heats for the division.

In order to increase the number of heats for the division in a fair and just manner, a 1 race bracket is added to the division. In this case after the 3 races of the round robin are complete, teams in the division are re-seeded based on the results of the round robin races. Each team in the division will each race 1 time in a bracket.

The 1 race bracket format is as follows:

- bracket race 1: bracket seed 3 vs bracket seed 4
- bracket race 2: bracket seed 1 vs bracket seed 2

Tournament placement is determined by winners and losers of each race as follows:

- tournament 1st place: winner race 2
- tournament 2nd place: loser race 2
- tournament 3rd place: winner race 1
- tournament 4th place: loser race 1

## Bracket racing form C.2

Bracket races add an extra layer of manual administration with C.2 forms. By their very nature, the details of bracket races are not known when C.2 forms are printed before a tournament begins. As a result, when using bracket racing, the tournament score keeper must manually update team C.2 forms with the correct race details prior to a bracket racing being run.

### Blank C.2 form

It is possible that a team C.2 form may be completely filled out. In this case it is required that a new blank C.2 form be printed for the team. To do this navigate to the Forms screen, select the team (or teams) needing a blank C.2 form and click `PRINT BLANK C.2 FORM` button.

## Bracket tournament placement

Tournament placement must be manually entered after bracket racing is completed. Navigate to the Teams screen. At the top, select the division where tournament placement data is needed. Select each team in the division and enter the tournament placement on the right side of the screen.

Repeat this for other divisions where brackets are run.
