---
id: releaseNotes
title: Release Notes
---

# Release notes

All notable changes to Flyball Manager...

## 6.1.0

- fixes issues with multi-ring
- adds additional data for ondeckmanager to display club full names and multi-ring information
- downgrade Livecode to prior version 9.6.11 which seems to fix an issue where arrows on the schedule screen stopped working on Windows

## 6.0.1

- adjustments to scheduler for multi-ring tournaments

## 6.0.0

- Complete re-write of scheduling! Now uses logic from Dale Smith to assist in spreading out clubs and teams
- default to head judge when creating a division
- pre-fill tournament points when creating a division
- bug fixes

## 5.4.5

- fix issues with printing forms

## 5.4.3

- fix issues with closing the Edit Race Status window

## 5.4.1

- fix issue with Apple Silicon running macOS Sonoma v14.1

## 5.3.2

- fix issues with data for team details screen at ondeckmanager.com

## 5.3.1

- fix issue when deleting dogs from lineups

## 5.3.0

- add limited multi-ring support
  - online on deck
  - pit boss scoring
  - pit boss tab ordering
- Windows app uses installer and is now code signed!
- allow break races to overlap
- fix issue where version check may fail
- added Stripe payment window
- fixed issue where single bracket heat count was not added to online heat count

## 5.2.2

- add warning when calculating placements if placements already exist
- add check that all divisions have a judge assigned to them before generating the NAFA scoring file
- numerous bug fixes on scoring screen when entering results
- fixed an issue where 2nd round robin group could not have multiple rounds
- fix tab order of label dialog and hide label window when printing

## 5.2.1

- bug fixes related to last release

## 5.2.0

- display warning when tournament placement points are not entered when navigating to the Scoring screen
- "Pit Boss" tab order option -- tab fields in each lane first
- display all entries option on Tournament Entry screen
- add support for dogs uploading to ondeckmanager.com
- numerous bug fixes
- built with Livecode 9.6.9
- separate macOS Intel and Apple silicon binaries reduces size of app for Mac users

## 5.1.1

- fix schedule lock status not being saved
- limit race moving in schedule to not overlap with prior/next team race

## 5.1.0

- add print all C.2 forms ordered by race schedule appearance (aka. print race 1 C2s, then race 2 C2s etc...)

## 5.0.1

- fix issue when break is first race of a tournament

## 5.0.0

VERSION NUMBERS CHANGING TO A MORE STANDARD NOTATION

Yes, version 5.0.0 is newer than 21.2.2. I've decided to move to a more standard version naming scheme rather than based on the year I started working on a particular version of the app.

- add tournament standings sent to ondeckmanger.com
- add team results sent to ondeckmanager.com
- bug fixes

## 21.2.2

- fixed issue when scheduling teams with more than 9 races

## 21.2.1

- bug fixes

## 21.2.0

- add breaks to race schedule
- add estimated start times on schedule screen
- move all broadcast screen options to settings screen
- fixed issue where NAFA data for dogs was not updating
- add total dog points to completed C.2 forms
- fixed issue where left lane heat 1 dogs could be over-written when tabbing
- cleaned up lots of ui items in many locations in the app
- lots of bug fixes
- more performance tuning for bad networks
- remove debugging code
- Mac version "code signed" enhancing security (Windows coming as soon as I can prove I am who I say I am...)

## 21.1.0

- behind the scenes changes that you won't notice in app
- fixed bug where completed C2 forms would not print after a tournament

## 21.0.5

- added network status indicator
- changed name of completed C.2 forms button to help with confusion on when to use the form

## 21.0.4

- remove extra characters when importing entries from Excel

## 21.0.3

- updates online race schedule after 15 secs when moving to next race
- fixed issues with performance teams not working correctly

## 21.0.2

When you run a tournament, you find things that are not just quite right...

- fixed lots of little bugs with scoring workflow
- added version check notifications
- increase font size for race number on ringside display
- fixed issue where race status was not updating correctly at end of tournament

## 21.0.1

- update database schema
- performance enhancements
- better poor network handling

## 20.5.2

- no longer in beta.
- scoring screen shows number of heats for entries
- adds real-time heat lamps to online on deck
- add team, club and division reports
- changed radio buttons to switches
- added ability to publish tournament and schedule
- add estimate race times to online schedule
- fix bug with gap calculations when building schedule
- add button to set tournament start time for race 1

## 20.4.1 (preview)

- Schedules show difference in minutes
- Schedule export uses "|" instead of "/" preventing spreadsheet apps using value as date
- focus on first time entry field when using next arrow on Scoring screen
- navigate next/prev race with keyboard arrow keys
- Interference correctly awards win and tournament points based on new understanding of NAFA rule
- edit race comment and duration on Schedule screen by double-clicking race row
- add address field to Tournament Info screen
- Dashboard screen includes button to zoom app to full screen
- performance enhancements
- additional bug fixes

## 20.3.19 (preview)

- add BO and I to completed C.2 forms
- fix NAFA generated file when less than 6 dogs with warm up dog
- changed NAFA file where teams not placing assigned value of 0 for place

## 20.3.18 (preview)

- fixed bugs with completed C.2 forms

## 20.3.17 (preview)

- add completed C.2 forms

## 20.3.16 (preview)

- fix issue where height of 6th dog was not printing

## 20.3.15 (preview)

- fix issue with comment/duration not correctly setting scoring screen fields

## 20.3.14 (preview)

- add tournament comment to Broadcast screen
- add race comment and duration fields to Scoring screen

## 20.3.12 (preview)

- fixed issue with online sync

## 20.3.11 (preview)

- removed debugging code on scoring screen
- fixed issue where online sometimes would not update

## 20.3.10 (preview)

- fixed issue with tournament dates showing online as 1 day prior to entered date
- fix issue where lanes sometimes did not swap when building schedule
- add race comment and duration
- C.2 Form 6 races per page
- ensure .fbm2 extension added on new files
- built with Livecode 9.6.6

## 20.3.0 (preview)

- online is back -- well it's a start
- uses web sockets for client messages
- send ondeck event
- now uses ondeckmanager.com

## 20.2.0 (preview)

- now schedules round-robin tournaments
- Livecode 9.6.5

## 20.1.0 (preview)

- All new data layer
- tournament adds entries, divisions, seed chart and judges tabs
- schedule now shows previous as well as next race counts
- updated UI of scoring screen

## 2017.3

- Added Double click dog in Club list inserts into next available spot on team list
- Added Online Team Results
- Fixed Save As file becomes main file
- Fixed Division Format overwrites schedule's format
- Fixed Dog Label Background on Windows now white

## 2017.2.2

- Updated Eyes On/Off to include new Open divisions
- Eyes On/Off alert after move to next race alert
- Result/Schedule data sent to Flyball Master.com via API calls
- Auto Save every 30 seconds.
- Replaced Save Alert with On-screen notification
- built with Livecode 8.1.3

## 2017.2

- Added Ringside Display with Race Details and Heat Lamps
- Better 10 key support with Win Left ="/", Win Right ="\*", Tie = "=" and No Finish="-"
- Scoring Screen displays only total potential heats for race
- Built with Livecode 8.1.3
- Added additional auto-saves
- Club and Team conflicts crossing day boundary no longer show as a conflict
- Changing Division breakout time now correctly updates schedule

## 2017.1

- Multi-ring networking completely re-done
- Updated FBM Scoring to include most of the Scoring Features of Flyball Master
- Added FBM Jumbotron \(aka. Scoreboard\)
- Advance to Next Race is more automated.
- Added XXX Breakout tracking per team
- W/L/T UI Fixed
- built with Livecode 8.1.2

## 2016.10

- Added Auto Advance Online Race Numbers
- Added printing Team Lineup Labels for Dog CRN and Name
- Added Eyes On/Eyes Off for Vet races
- Added Release notes \(FINALLY!\)
- Fixed NAFA Scoring File sometimes needed to be generated twice to get dog points
- Fixed issue with NAFA Scoring File check box on Team Edit screen
- Fixed issue with Judges pop-up menu sometimes showing no Judges in selection
- Fixed Day 2 Start Date not saved

## 2016.9

- Added Performance Teams
- Print Performance Team designation on C2 Form
- Added Performance Team to NAFA Scoring File generation
- Added Online Documentation to Help menu
- Added Eyes On/Eyes Off for Vet races
- Added Release notes \(FINALLY!\)
- Fixed issue with NAFA Scoring File check box on Team Edit screen
