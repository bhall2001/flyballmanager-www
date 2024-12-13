---
id: divisions
title: Divisions
---

# Divisions

![Tournament Divisions](/img/tournament-divisions-main.svg)

The Divisions tab of the Tournament screen allows you to setup each division individually. Select a division in the left list to see the details of each division. On the right are various items you can set for each division.

## Add Division

Click the `ADD DIVISION` button to add a division to the tournament. The right side of the screen changes to add a division. Select the class of the division. Click the `Create` button to create a new division. The new division is added as the last division of the tournament.

![Tournament Division Add](/img/tournament-division-add.svg)

### CanAm Format

Click the `CanAm Format` button to automatically create 5 team divisions for all the teams in a class. The format of racing for all divisions is set by default to be 1 round robin with 3 out 5 format.

## Delete Division

Click the `DELETE DIVISION` button to remove a division from the tournament. Select the class of the division to delete. Click the `Delete` button to delete the division. The Division deleted is the last division of the tournament. As en example, if there are 3 Regular divisions in the tournament R1, R2, and R3, when the delete button is clicked, the R3 division will be removed from the tournament.

## Team Count

Updates the number of teams in the selected division.

## Racing Format

### Round Robin

The racing format section of the division allows setting up the details of how the division will race. Set the number of round robins the teams in the division will race as well as the heat format. It is possible to have 2 different round robin settings per division.

:::tip
The total heat count for the division is calculated based on the selections made for the Racing format.
:::

### Bracket Format

When adding a bracket, Flyball manager takes care of all the required handling of the bracket races. This includes scheduling the bracket races, scoring, automatically managing teams for the brackets based on the teams wins/loss of races, and automatically synchronizing this information to ondeckmanager.com for communication with participants of the bracket races.

Seeding of the bracket is based on the results of the round robin rounds raced before the bracket races. Bracket seeding must manually be calculated. Bracket seeds must be entered on the team screen before the first bracket race. Failing to enter the bracket seeds on the team screen will result in a warning being displayed on the scoring screen and scoring will not be enabled until the bracket seeding is entered on the team screen.

The bracket seed must be manually entered on the team screen prior to the first bracket race. Failing to enter the bracket seeds on the team screens will result in a warning being displayed on the scoring screen when the bracket race is intended to be scored.

:::note
Bracket seeds are not the same seed as the initial tournament seed. The tournament seed is based on the team entry seed time and is used to seed the round robin racing of a tournament. Bracket seeds are determined by the results of the round robin races. The tournament seed time does not play a role in seeding brackets.
:::

Bracket races determine the tournament placement. The round robin rounds are used to seed the bracket only. Any points accumulated in the round robin races are only used to seed the bracket. Round robin points are not used to determine tournament placement.

Critical to scoring bracket races is that after all heats are complete, 1 team must have won the required number of heats to be determined as the winner. This means that on the scoring screen, if the format of bracket heats is 3 of 5, a team MUST have 3 **W**'s entered on the scoring screen. A winner can not be determined if the number of wins for a team does not match the first number of the bracket heat format.

:::caution
To determine the winner of a bracket race, the number of wins entered on the scoring screen must match the first number in the race format.
:::

### Single Elimination Bracket (in development)

Click the `+ Single Elimination` button to enable a single elimination bracket for the division. Select the format for the heats of the bracket. Single elimination bracket formats are limited to 2 of 3 or 3 of 5 formats.

The bracket schedule follows the schedule outlined in the NAFA Rules appendix for single elimination brackets. A copy of the bracket racing including tournament placement can be found in the appendix of this website.

### 1 Race Bracket

This is a special bracket that should only be used for 1-day tournaments and divisions with 4 teams. Teams in these divisions will race 3 times with 1 round of round robin racing. This results in sub-optimal number of total heats for the division.

In order to increase the number of heats for the division in a fair and just manner, a 1 race bracket is added to the division. In this case after the 3 races of the round robin are completed, teams in the division are manually re-seeded based on the results of the round robin races and will each race 1 time in a bracket.

The 1 race bracket format is as follows:

- bracket race 1: bracket seed 3 vs bracket seed 4
- bracket race 2: bracket seed 1 vs bracket seed 2

Tournament placement is determined by winners and losers of each race as follows:

- tournament 1st place: winner race 2
- tournament 2nd place: loser race 2
- tournament 3rd place: winner race 1
- tournament 4th place: loser race 1

:::warning
Bracket heat wins cannot end in a tie. If both teams win the same number of heats, any heats where both teams have a non-winning result must be re-run until one team achieves the required number of heat wins.
:::

### Special handling of bracket races

Bracket races can not end with teams having won the same number of heats. One team MUST win the number of heats equal to the first number of the bracket heat format (aka. 2 heats for formats of 2/3 or 3 heats for formats of 3/5).

Let's look as an example. Below is a portion of the scoring screen detailing the heats for a bracket race.

![Bracket heat tie](/img/bracket-race-heat-tie.svg)

From this we can see that the race format is a team must win 3 of 5 races. Looking at the race times entered, each team has won 2 heats yet all 5 heats are complete. Notice that the 2nd heat results show that both teams had a no finish -- a case where no winner can be determined.

For the race, heat 2 must be re-run to determine the winner of the bracket race. When 1 of the teams records a heat win for the 2nd heat, a winner and loser of the bracket race can be determined.

:::danger
Failing to correctly indicate a winner of a bracket race will result in the next races of the bracket not having teams entered.
:::
