---
id: online
title: Online Results
---

# Online Results

Flyball Manager provides an integrated online website. The website is used by participants to stay updated on race status as tournaments progress.

## ondeckmanager.com

Flyball Manager is part of the ondeckmanager.com product family. Participants should be directed to [www.ondeckmanager.com](https://www.ondeckmanager.com) to find tournament information.

The online website provides realtime updates of the tournament schedule showing what race is "Racing", "On deck" and "In the hole". If you are familiar with Flyball Geek it's a similiar concept -- well except that it's totally integrated into the scoring process. Once a network connection is established, scoring a tournament will automatically update the on deck status.

## Enable ondeckmanager.com

Online integration is not enabled by default. The integration **REQUIRES** a good, reliable wifi connection. If the device running Flyball Manager looses it's network connection to ondeckmanager.com realtime updates will stop.

When the tournament date is close feel free to turn on the integration. To see the schedule online there must be a schedule generated.

![Online Switches](/img/settings-online-switches.svg)

1. Navigate to "Settings" screen.
1. Turn on switch "Connect to Internet". This enables network communications
1. Turn on switch "Publish Tournament". The tournament is displayed in the list of upcoming tournaments.
1. Turn on switch "Publish Schedule". The realtime tournament schedule is displayed.

:::tip
If you would like to test online integration feel free to enable the switches. Once testing is complete you can turn off switches until your tournament date is closer.
:::

## Network status

Once a tournament is connected to the internet, Flyball Manager displays the current network status in the lower left corner of the window. When the application is able to comminicate with the server, a green light is displayed. If a connection to the server is not found, the light turns red.

If the network status is red, confirm the scoring machine has a connection to the internet. Try to access a web page in a browser. If the browser is not working, confirm the network connection of the machine being used for scoring.

## Updating on deck status

Once the scoring machine is setup to conenct to the internet anda schdule is published, on deck status updates are automatically communicated to ondeckmanager.com.

Flyball manager updates ondeckmanager.com after each heat with the status of the winner of the heat. ondeckmanger.com displays heat lamps for the current race in the ring.

After entering the race times for the last heat of a race, Flyball Manager will ask if you would like to move the online display to the next race. Click `Yes`. This will update ondeckmanger.com that the current race has completed and the next race is moving into the ring.

:::tip
Moving the online display to the next race has no effect on scoring the current race. This indicator will only update the online status to indicate that the next race is moving into the ring. Once the online display is moved to the next race, continue scoring the current race
:::

Ondeckmanager.com uses realtime updates to send all devices the update in real time.

## Manually update next race

If the Scorer selected `No` when asked to move to the next race, it is possible to manually move the online status to the next race. In the lower left of the Scoring screen is an indicator showing which race is the current race with the status of "Racing". Click this number will present the option to move the online display to the next race. Click `Yes` to move to the next race.

## Correcting online status

Sometimes the online status may get out of sync with the actual racing status. This can happen because the Scorer did not advance the online race status or may have advanced the race status by 2 or more races by mistake.

Not to worry. Flyball Manager allows the Scorekeeper to override the online status of races. On the Scoring screen on the right side is the online schedule status. This scrolling list shows the status of each race in the schedule.

The status of a race can be updated by doubleclicking the race needing the update. The next screen allows you to set the race status for the current race. Once the status is set to what it should be, simply close the window.

:::info
Only 1 race can have a status of "Racing", "On Deck" or "In the Hole". If you set a race to one of these statuses, any race with the same status will be reset to not have a status.
:::

## Tournament message

On the Broadcast screen on Flyball Manager there is a field to enter a tournament message. This message is displayed in the header on screens where tournament name is displayed. The tournament message can be used to communicate to participants using ondeckmanager.com information relevant to the tournamnet.

## Race comment

Each race can have a comment included. This comment is displayed at ondeckmanger.com for participants using online on deck statuses.

This can be useful when a line on the schedule represents a non-standard use of the schedule slot. An example would be when mat time slots are included within a schedule. The race comment can be used to communicate what activities will take place during the mat time.

## Race duration

Each race can have a duration added. The duration is displayed at ondeckmanager.com. This is useful if a race slot is being used to indicate there is a break. The break duration is added to this race. The duration is displayed at ondeckmanger.com.
